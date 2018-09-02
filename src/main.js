import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';

import 'bootstrap/dist/css/bootstrap.css';
import './assets/css/index.css'

//导入（路由）组件
import HerList from './views/heroes/List.vue' //英雄所对应的组件
import WearponList from './views/weapons/List.vue' //装备所对应的组件
import EqyipsList from './views/eqyips/List.vue' //武器所对应的组件
// Vue.js 官方提供的一些插件 
// (例如 vue-router) 在检测到 Vue 是可访问的全局变量时会自动调用 Vue.use()。
// 然而在例如 CommonJS 的模块环境中，你应该始终显式地调用 Vue.use()：
Vue.use(VueRouter);
//创建路由对象
const router = new VueRouter({
    linkExactActiveClass: 'active',
    routes: [
        { path: '/heroes', component: HerList },
        { path: '/eqyips', component: EqyipsList },
        { path: '/weapons', component: WearponList },
    ]
})
new Vue({

    el: '#app',
    render: h => h(App),
    router
});