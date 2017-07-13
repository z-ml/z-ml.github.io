// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
import MintUI from 'mint-ui'
import router from './router.config'
import 'mint-ui/lib/style.css'

Vue.config.productionTip = false;
Vue.use(MintUI);
/* eslint-disable no-new */
new Vue({
    router,
    el: '#app',
    template: '<App/>',
    components: { App }
});
