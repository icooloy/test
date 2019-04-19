(function ($w) {
	$w.NativeIsReady = false;
	if (!$w.NativeCallBackList) $w.NativeCallBackList = [];
})(window);

function init() {
	window.NativeIsReady = true;
	window.NativeCallBackList.forEach(function (item) {
		item.callback(item.nav);
	});
	window.toGoodsDetail = function toGoodsDetail(item) {
		native.call('toGoodsDetail', [item], null);
	}
}

function backButton() {}

function onResume() {}

function onPause() {}

function onReFocus() {}

function finish() {}

function onDestroy() {}
