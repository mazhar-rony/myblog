import moment from 'moment'
import Vue from 'vue'

Vue.filter('dateformat', (arg)=>{
  //return moment(arg).format("MMM Do YYYY")
  return moment(arg, "YYYYMMDD").fromNow()
})