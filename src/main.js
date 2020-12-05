import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import routes from './routes';

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(VueRouter)
Vue.config.productionTip = false

const router = new VueRouter({routes});

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
