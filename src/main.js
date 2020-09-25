import c4it from '@c4it/ui';
import Vue from 'vue';
import App from './App.vue';

import '@c4it/ui/dist/index.css';
import '@/icons';

Vue.use(c4it.Button);
Vue.use(c4it.SvgIcon);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount('#app');
