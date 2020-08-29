import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    location: 0,
    msg: 'i am from store, cool deal'
  },
  mutations: {

  }
})

export default store
