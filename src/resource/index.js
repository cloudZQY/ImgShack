import './css/base.less';
import Vue from 'vue';
import VueRouter from 'vue-router';

import UploaderView from './components/Uploader.vue';
import SettingsView from './components/Settings.vue';
import HistoryView from './components/History.vue';

Vue.use(VueRouter);

Vue.config.devtools = true;
Vue.config.debug = true;

const routes = [
  { path: '/upload', component: UploaderView },
  { path: '/history', component: HistoryView },
  { path: '/settings', component: SettingsView },
  { path: '*', redirect: '/upload'}
];


const router = new VueRouter({
  routes,
  linkActiveClass: 'nav-item__link--active'
});

const app = new Vue({
  router
}).$mount('#app')