import '@fortawesome/fontawesome-free/css/all.min.css'
import 'bootstrap-css-only/css/bootstrap.min.css'
import 'mdbvue/lib/css/mdb.min.css'
import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import router from './router'
import * as mdbvue from 'mdbvue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Vuex from 'vuex'
import store from './store'

Vue.use(Vuex)


Vue.use(VueAxios, axios)

for (const component in mdbvue) {
  Vue.component(component, mdbvue[component])
}

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

Vue.prototype.$http = axios;
const token = localStorage.getItem('token')
if (token) {
  Vue.prototype.$http.defaults.headers.common['Authorization'] = token
}