import Vue from 'vue'
import App from './App'
import VueResource from 'vue-resource'
import store from './vuex/store'

//
Vue.use(VueResource)

/* eslint-disable no-new */
new Vue({
  store,
  el: 'body',
  components: { App }
})
