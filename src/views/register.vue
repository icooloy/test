<template>
	<div class="box">
		<fieldset>
			<legend>Register</legend>
			<ul>
				<li><a href="#/register">注册</a></li>
				<li><a href="#/login">登陆</a></li>
				<li><a href="#/logout">登出</a></li>
				<li><a href="#/userinfo">用户信息</a></li>
				<li><a href="#/setinfo">设置信息</a></li>
				<li><a href="#/editpass">修改密码</a></li>
			</ul>
			<div class="form">
				<label>用户名:
					<input type="text" v-model='username' placeholder="请输入用户名">
				</label>
				<label>密码:
					<input type="password" v-model='pass' placeholder="请输入密码">
				</label>
				<label>重复密码:
					<input type="password" v-model='dpass' placeholder="请输入密码">
				</label>
				<label>
					<input type="submit" value="注册" @click='register'>
				</label>				
				<p>输入的用户名为：{{username}}</p>
				<p>您输入的密码为：{{pass}}</p>
			</div>
		</fieldset>
	</div>
</template>
<style type="text/css" lang="scss" scoped>

</style>
<script>
import {
	register
} from '@/api';
export default {
	name: 'register',
	data() {
		return {
			username:'',
			pass:'',
			dpass:''
		};
	},
	methods: {
		register:function(){
			if (!this.username || !this.pass || !this.dpass) return alert('用户名和密码不能为空');
			if (this.pass != this.dpass) return alert('两次密码输入不一致')
			register({
				username: this.username,
				pass: this.pass,
				dpass: this.dpass
			}, res => {
				console.log(res)
			}, res => {
				if (res.status == 200){
					this.$router.replace('/login');//跳转回来路页面
				}
				alert(res.msg)
			});
		}
	},
	mounted() {
		
	},
}
</script>
