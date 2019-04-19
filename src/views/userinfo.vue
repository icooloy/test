<template>
	<div class="box">
		<fieldset>
			<legend>userInfo</legend>
			<ul>
				<li><a href="#/register">注册</a></li>
				<li><a href="#/login">登陆</a></li>
				<li><a href="#/logout">登出</a></li>
				<li><a href="#/userinfo">用户信息</a></li>
				<li><a href="#/setinfo">设置信息</a></li>
				<li><a href="#/editpass">修改密码</a></li>
			</ul>
			<div class="form">
				<label>用户名：<u>{{username}}</u></label>
				<label>用户ID:<u>{{id}}</u></label>
				<label>地址：<u>{{address}}</u></label>
				<label>真实姓名：<u>{{nickname}}</u></label>
				<label>电话号码：<u>{{tel}}</u></label>
				<label>性别：<u>{{man}}</u></label>
				
			</div>
		</fieldset>
	</div>
</template>
<style type="text/css" lang="scss" scoped>

</style>
<script>
import {
	userInfo
} from '@/api';
export default {
	name: 'userInfo',
	data() {
		return {
			username:'',
			id:'',
			address:'',
			nickname:'',
			tel:'',
			man:'',
		};
	},
	methods: {
		// userinfo:function(){
		// 	userinfo(res => {
		// 		console.log(res);
		// 	}, res => {
		// 		console.log(res);
		// 	});
		// }
	},
	mounted() {
		userInfo(res => {
			console.log(res);
			
		}, res => {
			console.log(document.cookie);
			
			this.username = res.data.username;
			this.id = res.data.id;
			this.address = res.data.address?res.data.address:'地址为空';
			this.nickname = res.data.nickname?res.data.nickname:'真实姓名为空';
			this.tel = res.data.tel?res.data.tel:'电话为空';
			this.man = res.data.man?res.data.man:'性别不明';
		});
	},
}
</script>
