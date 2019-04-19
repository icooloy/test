
//中奖轮播动画
function turntableDraw(obj,jsn)
{
	"use strict";
	this.draw = {};
	this.draw.obj = $(obj);
	this.draw.objClass = $(obj).attr("class");
	this.draw.newClass = "rotary"+"new"+parseInt(Math.random()*1000);
	var _jiaodu = parseInt(360/jsn.share);
	var _yuan = 360*(jsn.weeks || 4);
	var _str = "";
	var _speed = jsn.speed || "2s";
	var _velocityCurve = jsn.velocityCurve || "ease";
	var _this = this;
	for(var i=1;i<=jsn.share;i++)
	{
		_str+="."+this.draw.newClass+i+"{";
		_str+="transform:rotate("+(360-_jiaodu/2-(i-1)*_jiaodu+_yuan)+"deg);";
		_str+="-ms-transform:rotate("+(360-_jiaodu/2-(i-1)*_jiaodu+_yuan)+"deg);";
		_str+="-moz-transform:rotate("+(360-_jiaodu/2-(i-1)*_jiaodu+_yuan)+"deg);";
		_str+="-webkit-transform:rotate("+(360-_jiaodu/2-(i-1)*_jiaodu+_yuan)+"deg);";
		_str+="-o-transform:rotate("+(360-_jiaodu/2-(i-1)*_jiaodu+_yuan)+"deg);";
		_str+="transition: transform "+_speed+" "+_velocityCurve+";";
		_str+="-moz-transition: -moz-transform "+_speed+" "+_velocityCurve+";";
		_str+="-webkit-transition: -webkit-transform "+_speed+" "+_velocityCurve+";";
		_str+="-o-transition: -o-transform "+_speed+" "+_velocityCurve+";";
		_str+="}";
		_str+="."+this.draw.newClass+i+"stop{";
		_str+="transform:rotate("+((360-(i-1)*_jiaodu-_jiaodu/2))+"deg);";
		_str+="-ms-transform:rotate("+((360-(i-1)*_jiaodu-_jiaodu/2))+"deg);";
		_str+="-moz-transform:rotate("+((360-(i-1)*_jiaodu-_jiaodu/2))+"deg);";
		_str+="-webkit-transform:rotate("+((360-(i-1)*_jiaodu-_jiaodu/2))+"deg);";
		_str+="-o-transform:rotate("+((360-(i-1)*_jiaodu-_jiaodu/2))+"deg);";
		_str+="}";
	};
	
	$(document.head).append("<style>"+_str+"</style>");
	_speed = _speed.replace(/s/,"")*1000;
	this.draw.startTurningOk = false;
	this.draw.goto=function(ind){
		if(_this.draw.startTurningOk){return false};
		_this.draw.obj.attr("class",_this.draw.objClass+" "+_this.draw.newClass+ind);
		_this.draw.startTurningOk = true;
		setTimeout(function(){
			_this.draw.obj.attr("class",_this.draw.objClass+" "+_this.draw.newClass+ind+"stop");
			if(jsn.callback)
			{
				_this.draw.startTurningOk = false;
				jsn.callback(ind);
			};
		},_speed+10);
		return _this.draw;
	};
	return this.draw;
};


//滚动中奖名单
(function($){
	$.fn.extend({
		RollTitle: function(opt){
			if(!opt) var opt={};
			var _this = this;
			_this.timer = null;
			_this.lineH = _this.find("li:first").height();
			_this.line=opt.line?parseInt(opt.line,15):parseInt(_this.height()/_this.lineH,10);
			_this.speed=opt.speed,
			_this.timespan=opt.timespan;
			if(_this.line==0) this.line=1;

			_this.scrollUp=function(){
				_this.animate({
					marginTop:0
				},_this.speed,function(){
					for(i=1;i<=_this.line;i++){
						_this.find("li:first").appendTo(_this);
					}
					_this.css({marginTop:0});
				});
			}
			_this.hover(function(){
				clearInterval(_this.timer);
			},function(){
				_this.timer=setInterval(function(){_this.scrollUp();},_this.timespan);
			}).mouseout();
		}
	})
})(jQuery);




