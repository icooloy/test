<template>
	<div class="box">
		<fieldset>
			<legend>Login</legend>
			<ul>
				<li><a href="#/register">注册</a></li>
				<li><a href="#/login">登陆</a></li>
				<li><a href="#/logout">登出</a></li>
				<li><a href="#/userinfo">用户信息</a></li>
				<li><a href="#/setinfo">设置信息</a></li>
				<li><a href="#/editpass">修改密码</a></li>
			</ul>
			<div class="form">
				<input type="text" v-model='username' placeholder="请输入用户名">
				<input type="password" v-model='pass' placeholder="请输入密码">
				<input type="submit" value="登陆" @click='login'>
				<p>输入的用户名为：{{username}}</p>
				<p>您输入的密码为：{{pass}}</p>
			</div>
		</fieldset>
	</div>
</template>
<style type="text/css" lang="scss" scoped>
	input {
		margin-top: 15% !important;
	}
</style>
<script>
import {
	login,
	logout
} from '@/api';
import {
	setCookie,
	getCookie,
	delCookie
} from '@/plugin/cookie.js';
export default {
	name: 'login',
	data() {
		return {
			username:'',
			pass:'',
		};
	},
	methods: {
		login:function(){
			if (!this.username || !this.pass) return alert('用户名或密码不能为空');
			login({
				username: this.username,
				pass: this.pass
			}, res => {
				console.log(res)
			}, res => {
				if (res.status == 200){
					this.$store.state.cookie = true;
					this.$router.replace('/userinfo');//跳转回来路页面
				}
			});
		}
	},
	mounted() {
		
	},
}
</script>
