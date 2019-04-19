import Native from './native';
import $ from '@/plugin/plugin';
import Config from '@/config';
export function app(op = {}, success = () => {}) {
	new Native(nav => {
		nav.request($.extend(true, {
			url: '',
			method: Config.request.type,
			params: {},
		}, op), success);
	});
};
