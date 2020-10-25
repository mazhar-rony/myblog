import moment from 'moment'
import Vue from 'vue'

Vue.filter('dateformat', (arg)=>{
  //return moment(arg).format("MMM Do YYYY")
  return moment(arg, "YYYYMMDD").fromNow()
})

Vue.filter('shortlength', (text, length, suffix)=>{
  return text.substring(0, length) + suffix
})