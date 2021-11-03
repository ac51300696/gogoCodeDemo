/*
 * @Author: Colin
 * @Date: 2021-03-24 09:55:08
 * @LastEditTime: 2021-03-24 09:55:33
 * @LastEditors: Colin
 * @Description: 无
 */
import Vue from 'vue'
import VueRouter from 'vue-router'


import App from './App.vue'
import routes from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import VueCompositionAPI from '@vue/composition-api'

Vue.use(VueCompositionAPI)
Vue.use(ElementUI);
Vue.config.productionTip = false
const router = new VueRouter({
    base: '/',
    mode: 'history',
    routes: routes
})
new Vue({
    router,
    render: h => h(App),
}).$mount('#app')
