<template>
	<div class="box">
		<fieldset>
			<legend>setInfo</legend>
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
				<label>地址：
					<input type="text" name="" v-model='address' placeholder="请输入地址">
				</label>
				<label>真实姓名：
					<input type="text" name="" v-model='nickname' placeholder="请输入真实姓名">
				</label>
				<label>电话号码：
					<input type="tel" name="" v-model='tel' placeholder="请输入电话号码">
				</label>
				<label>性别：
					<input type="text" name="" v-model='man' placeholder="请输入性别（1：男，0：女）">
				</label>
				<input type="submit" name="" value="修改" @click='setInfo'>
			</div>
		</fieldset>
	</div>
</template>
<style type="text/css" lang="scss" scoped>
	input[type=submit] {
		margin-top: 15% !important;
		padding-left: 0px !important;
		padding-right: 0px !important;
	}
</style>
<script>
import {
	userInfo,
	setInfo
} from '@/api';
export default {
	name: 'setInfo',
	data() {
		return {
			address:'',
			nickname:'',
			tel:'',
			man:'',
			username:'',
			id:'',
		};
	},
	methods: {
		setInfo:function(){
			if(!this.address || !this.nickname || !this.tel || !this.man) return alert('请填写完整信息');
			if(!/^(13[0-9]|14[5-9]|15[012356789]|166|17[0-8]|18[0-9]|19[8-9])[0-9]{8}$/.test(this.tel)) return alert('请输入正确的手机号码');
			setInfo({
				address: this.address,
				nickname: this.nickname,
				tel: this.tel,
				sex: this.man
			}, res => {
				alert(res.msg)
			}, res => {
				alert(res.msg)
				
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
			this.address = res.data.address;
			this.nickname = res.data.nickname;
			this.tel = res.data.tel;
			this.man = res.data.man;
		});
	}
}
</script>
