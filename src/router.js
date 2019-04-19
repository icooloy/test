import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

export default new Router({
	routes: [
	{
		path: '/',
		name: 'home',
		component: () =>
		import ('./views/Home.vue'),
	},
	{
		path: '/login',
		name: 'login',
		component: () =>
		import ('./views/login.vue'),
	},
	{
		path: '/logout',
		name: 'logout',
		meta: {
            requireAuth: true,  
        },
		component: () =>
		import ('./views/logout.vue'),
	},
	{
		path: '/register',
		name: 'register',
		component: () =>
		import ('./views/register.vue'),
	},
	{
		path: '/userinfo',
		name: 'userinfo',
		meta: {
            requireAuth: true,  
        },
		component: () =>
		import ('./views/userinfo.vue'),
	},
	{
		path: '/setinfo',
		name: 'setinfo',
		meta: {
            requireAuth: true,  
        },
		component: () =>
		import ('./views/setinfo.vue'),
	},
	{
		path: '/editpass',
		name: 'editpass',
		meta: {
            requireAuth: true,  
        },
		component: () =>
		import ('./views/editpass.vue'),
	},
	]
})