import Vue from 'vue'
import App from './App.vue'
import "./assets/index.css"
import {router} from './router/index'
import axios from 'axios'

Vue.config.productionTip = false
Vue.prototype.$axios = axios

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
