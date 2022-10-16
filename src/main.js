import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import 'styles/resets.css';
import 'styles/border.css';
import 'styles/common.css';
import 'js/common.js';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
