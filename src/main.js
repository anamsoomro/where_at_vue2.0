// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ViewMap from './components/ViewMap'
import GuessMap from './components/GuessMap'
import Dash from './components/Dash'
import store from './Store'

Vue.config.productionTip = false

Vue.component('view-map', ViewMap)
Vue.component('guess-map', GuessMap)
Vue.component('dash', Dash)
// global registation

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {
    App
    // local registration
    // idk i couldnt get this to work
  },
  template: '<App/>',
  store: store
})
