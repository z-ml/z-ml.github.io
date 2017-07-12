/**
 * Created by Administrator on 2017/7/12.
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter);
const routes = [
    { path: '/index', component: require('./view/index/index.vue') },
    { path: '/classify', component: require('./view/classify/index.vue') },
    { path: '/shopping-cart', component: require('./view/shopping-cart/index.vue') },
    { path: '/mine', component: require('./view/mine/index.vue') }
];
export default new VueRouter({
    routes
})