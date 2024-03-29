import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/home.vue';

Vue.use(Router);

export default new Router({
	base: process.env.BASE_URL,
	mode: 'history',
	routes: [
		{
			component: Home,
			name: 'home',
			path: '/'
		},
		{
			component: (): Promise<ImportMeta> => import('./views/about.vue'),
			name: 'about',
			path: '/about'
		}
	]
});
