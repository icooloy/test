import vue from 'vue';
import $ from '@/plugin/plugin';
import Config from '@/config';
const ajax = vue.axios.create({
	baseURL: Config.request.baseURL,
	 withCredentials: true, //允许跨域并携带请求cookie
	timeout: 1000 * 30,
});
export default function (op = {}, success = () => {}, error = () => {}) {
	console.log('ajax.js')
	ajax($.extend(true, {
		url: '',
		method: Config.request.type,
		//headers: {
		//	token: Config.request.token,
		//},
		params: {},
	}, op)).then(res => {
		if (res.status != 200 || res.data.code != 200) return error(res.data || {});
		success(res.data || {});
	}).catch(res => {
		if (!res.response) res.response = {};
		if (!res.response.data) res.response.data = {};
		error($.extend(true, {
			code: res.response.data.status,
		}, res.response.data));
		if (process.env.NODE_ENV === 'development') throw res;
	});
};
