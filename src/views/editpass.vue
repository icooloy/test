<template>
	<div class="box">
		<fieldset>
			<legend>editPass</legend>
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
				<label>旧密码：
					<input type="password" name="" v-model='old' placeholder="请输旧密码">
				</label>
				<label>新密码：
					<input type="password" name="" v-model='pass' placeholder="请输入新密码">
				</label>
				<label>重复密码：
					<input type="password" name="" v-model='dpass' placeholder="请重复新密码">
				</label>
				<input type="submit" name="" value="修改密码" @click='editPass'>
				
			</div>
		</fieldset>
	</div>
</template>
<style type="text/css" lang="scss" scoped>

</style>
<script>
import {
	userInfo,
	editPass
} from '@/api';
export default {
	name: 'editPass',
	data() {
		return {
			old:'',
			pass:'',
			username:'',
			id:'',
			dpass:''
		};
	},
	methods: {
		editPass:function(){
			if (!this.old || !this.pass || !this.dpass) return alert('密码不能为空');
			if (this.pass !== this.dpass) return alert('两次输入密码不一致');
			editPass({
				old: this.old,
				pass: this.pass,
			}, res => {
				alert(res.msg);
			}, res => {
				alert(res.msg);
			});
		}
	},

	mounted() {
		userInfo(res => {
			console.log(res);	
		}, res => {
			this.username = res.data.username;
			this.id = res.data.id;
		});
	}
}
</script>
