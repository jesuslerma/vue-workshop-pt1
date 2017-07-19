// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

import VueRouter from 'vue-router';
import store from './vuex/store';

import ProductCatalog from './components/ProductCatalog';
import ManageProducts from './components/ManageProducts';
/* eslint-disable no-new */

Vue.use(VueRouter);

const routes = [
	{ path: "/home", alias: '/', component: ProductCatalog },
	{ path: "/manage-products", component: ManageProducts },
];

const router = new VueRouter({
	routes
});


new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})
