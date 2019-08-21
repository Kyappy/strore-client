import Vue, {CreateElement, VNode} from 'vue';
import App from './app/app.vue';
import router from './router';

Vue.config.productionTip = false;

new Vue({
	render: (h: CreateElement): VNode => h(App),
	router
}).$mount('#app');
