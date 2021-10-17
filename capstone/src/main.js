import Vue from 'vue'
import App from './App.vue'
import './assets/tailwind.css'
import './index.css'
import store from "./store/index";
import vuetify from './plugins/vuetify'
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  vuetify,
  store
}).$mount('#app')
