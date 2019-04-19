export default class Native {
	constructor(callback = () => {}) {
		if (window.NativeIsReady) return callback(this);
		if (!window.NativeCallBackList) window.NativeCallBackList = [];
		window.NativeCallBackList.push({
			nav: this,
			callback,
		});
	}
	call(...param) {
		native.call(...param);
	}
	request(op, success) {
		this.call(`do${op.method == 'post' ? 'Post' : 'Get'}Request`, [`/${op.url}`, JSON.stringify(op.params), 0], res => {
			res = JSON.parse(res || '{}');
			if (res.code == 200) success(res);
		});
	}
};
