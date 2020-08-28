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

Vue.use(VueAxios, axios)

for (const component in mdbvue) {
  Vue.component(component, mdbvue[component])
}

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
