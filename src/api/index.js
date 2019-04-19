import request from '@/plugin/request';
// 初始化红包雨信息


export function register(params = {
	username: '',
	pass: '',
}, ...param) {
	request({
		url: 'register',
		params,
	}, ...param);
};
export function login(params = {
	username: '',
	pass: '',
}, ...param) {
	request({
		url: 'login',
		params,
	}, ...param);
};

export function logout(...param) {
	request({
		url: 'logout',
	}, ...param);
};
export function userInfo(...param) {
	request({
		url: 'user/info',
	}, ...param);
};

export function setInfo(params = {
	nickname: '',
	sex: '',
	tel: '',
	address: '',
}, ...param) {
	console.log(params.tel)
	request({
		url: 'user/setInfo',
		params,
	}, ...param);
};

export function editPass(params = {
	old: '',
	pass: '',
}, ...param) {
	request({
		url: 'user/editPass',
		params,
	}, ...param);
};