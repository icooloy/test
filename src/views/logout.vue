<template>
	<div class="box">
		<fieldset>
			<legend>Logout</legend>
			<ul>
				<li><a href="#/register">注册</a></li>
				<li><a href="#/login">登陆</a></li>
				<li><a href="#/logout">登出</a></li>
				<li><a href="#/userinfo">用户信息</a></li>
				<li><a href="#/setinfo">设置信息</a></li>
				<li><a href="#/editpass">修改密码</a></li>
			</ul>
			<div class="form">
				<label>用户名：
					{{username}}
				</label>
				<label>用户ID:
					{{id}}
				</label>
				<input type="submit" name="" value="退出登录" @click='logout'>
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
	logout,
	userInfo
} from '@/api';
export default {
	name: 'logout',
	data() {
		return {
			username:this.username,
			id:this.id
		};
	},
	methods: {
		logout:function(){
			logout(res => {
				console.log(res);
			}, res => {
				if (res.status == 200){
					this.$store.state.cookie = false;
					this.$router.replace('/');
				}
				alert(res.msg);
			});
		}
	},
	mounted() {
		userInfo(res => {
			console.log(res);	
		}, res => {
			console.log(res);
			this.username = res.data.username;
			this.id = res.data.id;
		});
	},
}
</script>
