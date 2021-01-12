import Vue from 'vue';
import App from './App.vue';
import router from './router';
import axios from 'axios';

//CONSUMO DE API
const base = axios.create({
  baseURL: "https://safe-fortress-78815.herokuapp.com"
})

Vue.prototype.$http = base;


Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
