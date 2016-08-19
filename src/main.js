import Vue from 'vue'
import App from './App'
import VueResource from 'vue-resource'
import store from './vuex/store'

//
Vue.use(VueResource)

// Filters
Vue.filter('capitalize', (value) => {
  return value.charAt(0).toUpperCase() + value.slice(1)
})

Vue.filter('height', (value) => {
  return `${Number(value) / 100}m`
})

/* eslint-disable no-new */
new Vue({
  store,
  el: 'body',
  components: { App }
})
