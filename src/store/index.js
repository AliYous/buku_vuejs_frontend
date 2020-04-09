import Vue from 'vue'
import Vuex from 'vuex'
import book from './book'
import auth from './auth'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    book,
    auth
  }
})
