<template>
	<div class="box">
		<fieldset>
			<legend>Index</legend>
			<ul>
				<li><a href="#/register">注册</a></li>
				<li><a href="#/login">登陆</a></li>
				<li><a href="#/logout">登出</a></li>
				<li><a href="#/userinfo">用户信息</a></li>
				<li><a href="#/setinfo">设置信息</a></li>
				<li><a href="#/editpass">修改密码</a></li>
			</ul>
			<div class="form">
				<h1>index</h1>
			</div>
		</fieldset>
		<slider @change="change($event);" ref="slider" :step="step" :min="min" :max="max" :stepcolor="stepcolor" :stepbg="stepbg"></slider>

		<div class="contrl">
			<span class="min">{{min}}</span><span class="max">{{max}}</span>
			<label for="">最大值：<input type="number" :min="min" v-model="max"></label>
			<label for="">最小值：<input type="number" :max="max" v-model="min"></label>
			<label for="">当前值：<input type="number" v-model="step"></label>
			<label for="">滑块颜色：<input type="text" v-model="stepcolor"></label>
			<label for="">背景颜色：<input type="text" v-model="stepbg"></label>
		</div>
	</div>
</template>
<style type="text/css" lang="scss" scoped>
.contrl{
	text-align:left;
	position:relative;
	.min {
		position:absolute;
		top:-45px;
		left:0;
	}
	.max {
		position:absolute;
		top:-45px;
		right:0;
	}
	label {
		width:20%;
		display:inline-block;
		input{
			max-width:80%;
		}
	}
}
</style>
<script>
	import slider from './slider.vue'
	import {
		login
	} from '@/api';
	export default {
		components:{
			slider,
		},
		name: 'home',
		data() {
			return {
				step:50,
				max:500,
				min:0,
				stepcolor:'#409eff',
				stepbg:'#e4e7ed'	
			};
		},
		methods: {
			change: function(val){
				this.step = val;
			},
	},
	watch:{

	},
	computed:{
		
	},
	//计算属性
	mounted() {
	},
	//初始加载
}
</script>
