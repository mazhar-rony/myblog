require('./bootstrap');

//window.Vue = require('vue');

import Vue from 'vue'
import VueRouter from 'vue-router'
import Routes from './routes'

Vue.use(VueRouter)

//vuex
import Vuex from 'vuex'

Vue.use(Vuex)

import storeData from './store/store'

const store = new Vuex.Store(
  storeData
)

//Vue.component('example-component', require('./components/ExampleComponent.vue').default);
Vue.component('admin-main', require('./components/admin/AdminMaster.vue').default);
//Vue.component('admin-main', require('./components/admin/AdminHome.vue').default);

//v-form
import { Form, HasError, AlertError } from 'vform'

window.Form = Form;
Vue.component(HasError.name, HasError)
Vue.component(AlertError.name, AlertError)

//moment js
import filter from './filter'

//this portion done in filter.js file
/* import moment from 'moment'

 Vue.filter('dateformat', (arg)=>{
  //return moment(arg).format("MMM Do YYYY")
  return moment(arg, "YYYYMMDD").fromNow()
 })*/
//end moment js

//https://vuejsexamples.com/vue-markdown-editor-component-for-vue-js/
//editor support
import 'v-markdown-editor/dist/v-markdown-editor.css'
import Editor from 'v-markdown-editor'

// global register
Vue.use(Editor);


//Sweet Alert 2
// ES6 Modules or TypeScript
import Swal from 'sweetalert2'

window.Swal = Swal;

const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener('mouseenter', Swal.stopTimer)
    toast.addEventListener('mouseleave', Swal.resumeTimer)
  }
})
window.Toast = Toast;

const router = new VueRouter({
    routes: Routes, // short for `routes: routes`
    //mode: "history"
    mode: "hash"
  })


const app = new Vue({
    el: '#app',
    router: router,
    store: store
});
