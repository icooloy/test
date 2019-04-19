
document.documentElement.style.fontSize = (document.documentElement.clientWidth>750?750:document.documentElement.clientWidth) / 750*100 + 'px';

function showlayer(){
	var bh=$(document).height();
	var bw=$(window).width();
	$("#layer").css({
		height:bh,
		width:bw,
		display:"block"
	});
	$('#pop .popcont').show();
	$("#pop").slideDown(500);
	v.winSwitch.isRepeat = true;
	if(v.winingData.winID%2 !== 0){
	var id = v.winingData.winID;
	var newElent = '<img v-if="item.winId==' + id + '"' + ' src="images/gift' + id + '.png'+'" />';
	$("#addNewelent").prepend(newElent);
	}
	
}
$(document.body).ready(function(){
	$(".record_list").RollTitle({line:1,speed:1800,timespan:1});
});
function callbackA(ind)
{
	showlayer()
};


var newdraw =new turntableDraw('#zhuanpan',{
	share:6,
	speed:"18s",
	velocityCurve:"ease",
	weeks:12,
	callback:function(num)
	{
		callbackA(num);
	},
});
$(function() {

	$(".productshow").Xslider({
		unitdisplayed: 1,
		numtoMove: 1,
		loop: "cycle",
		autoscroll: 2500,
	});

})