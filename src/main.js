import Vue from 'vue';
import axios from 'axios';

import App from './App.vue';
import store from './store';
import router from './router';

/* eslint-disable */
import fp from './assets/js/fp';
/* eslint-disable */

Vue.config.productionTip = false;
Vue.prototype.$axios = axios;

new Vue({
  render: (h) => h(App),
  router,
  store
}).$mount('#app');
