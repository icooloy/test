import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;
Vue.use(VueAxios, axios);

new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app')

router.beforeEach((to, from, next) => {
    if (to.meta.requireAuth) {  
        if (store.state.cookie) { 
        	next();
        }
        else {
            next({
                path: '/',
                query: {redirect: to.fullPath} 
            })
        }
    }
    else {
        if(to.path == '/login' && store.state.cookie) return next('/');
        next();
    }
})