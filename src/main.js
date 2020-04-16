import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import axios from 'axios'
import * as firebase from "firebase";
import { BootstrapVue } from 'bootstrap-vue'




Vue.config.productionTip = false
Vue.use(BootstrapVue)

var firebaseConfig = {
  apiKey: "AIzaSyDEsuRpqYFL3ViBKKThLSpKNbgBeatOUfA",
  authDomain: "buku-bfbf9.firebaseapp.com",
  databaseURL: "https://buku-bfbf9.firebaseio.com",
  projectId: "buku-bfbf9",
  storageBucket: "buku-bfbf9.appspot.com",
  messagingSenderId: "312406801933",
  appId: "1:312406801933:web:5d4246d1495157c13e1f44"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.auth().onAuthStateChanged(user => {
  store.dispatch("auth/fetchUser", user);
});

axios.defaults.baseURL = 'http://localhost:3000/'

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
