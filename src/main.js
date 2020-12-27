import App from './App.vue'
import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

Vue.use(VueRouter)
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.config.productionTip = false

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './css/style.css'

const axios = require('axios').default;
const router = new VueRouter({routes});

new Vue({
  render: h => h(App),
  router, axios
}).$mount('#app')
