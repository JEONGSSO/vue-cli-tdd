import Vue from 'vue';

import App from './App.vue';
import store from './store';
import router from './router';

/* eslint-disable */
import fp from './assets/js/fp';
/* eslint-disable */

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
  router,
  store,
}).$mount('#app');
