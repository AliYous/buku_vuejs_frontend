import Vue from 'vue'
import VueRouter from 'vue-router'
// import firebase from 'firebase'
import Dashboard from './views/Dashboard.vue'
import Authentication from './views/Authentication.vue'
import LandingPage from './views/LandingPage'


Vue.use(VueRouter)

  const routes = [
    {
      path: '/',
      name: 'LandingPage',
      component: LandingPage,
    },
    {
      path: '/authentication',
      name: 'Auth',
      component: Authentication,
      props: true
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard,
      meta: {
        requiresAuth: true
      }
    },
  
    { path: '*', redirect: '/' } //If any other route, redirect to '/'

  ]

const router = new VueRouter({
  mode: 'history',
  routes
})

// // Redirect based on if user logged in or not
// router.beforeEach((to, from, next) => {
//   var isAuthenticated = false
//   firebase.auth().onAuthStateChanged(user =>  {
//     if (user) {
//       isAuthenticated = true
//     }
//   })

//   if (to.meta.requiresAuth && !isAuthenticated) {
//     next({ name: 'Auth', params: { userExistsProps: true } })
//   } 
//   else if (!to.meta.re && isAuthenticated) {
//     next({ name: 'Dashboard' })
//   } 
//   else next()
// })

export default router
