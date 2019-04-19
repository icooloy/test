import Config from '@/config';
const appendJS = (src = '') => {
		let el = document.createElement('script');
		el.src = src;
		document.body.appendChild(el);
	},
	init = () => {
		appendJS('./javascripts/plugins/index.js');
		appendJS('./javascripts/cordova.js');
		appendJS('./javascripts/plugins/listener.js');
	};
if (Config.appRequest) init();
