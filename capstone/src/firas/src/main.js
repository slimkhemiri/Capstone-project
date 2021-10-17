import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import "./App.css"
import {store} from "./store1/store1"
Vue.config.productionTip = false

new Vue({
  vuetify,
  render: h => h(App , store)
}).$mount('#app')
