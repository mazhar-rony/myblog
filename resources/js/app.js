require('./bootstrap');

//window.Vue = require('vue');

import Vue from 'vue'
import VueRouter from 'vue-router'
import Routes from './routes'

Vue.use(VueRouter)

//Vue.component('example-component', require('./components/ExampleComponent.vue').default);
Vue.component('admin-main', require('./components/admin/AdminMaster.vue').default);
//Vue.component('admin-main', require('./components/admin/AdminHome.vue').default);

const router = new VueRouter({
    routes: Routes, // short for `routes: routes`
    mode: "history"
  })


const app = new Vue({
    el: '#app',
    router: router
});
