import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import firebase from 'firebase/app'
import 'firebase/firestore'
import VueFirestore from 'vue-firestore'
import { BootstrapVue } from 'bootstrap-vue'


Vue.config.productionTip = false

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

export const db = firebase.firestore()

Vue.use(BootstrapVue)
Vue.use(VueFirestore)


new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
