import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from './views/Dashboard.vue'
import SignIn from './views/SignIn.vue'
import SignUp from './views/SignUp.vue'
import LandingPage from './views/LandingPage'


Vue.use(VueRouter)

  const routes = [
    {
      path: '/',
      name: 'LandingPage',
      component: LandingPage
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard
    },
    {
      path: '/signin',
      name: 'SignIn',
      component: SignIn,
      meta: {
          guest: true
      }
    },
    {
      path: '/signup',
      name: 'SignUp',
      component: SignUp,
      meta: {
          guest: true
      }
    },
    // {
    //     path: '/dashboard',
    //     name: 'userboard',
    //     component: UserBoard,
    //     meta: {
    //         requiresAuth: true
    //     }
    // },
    { path: '*', redirect: '/' } //If any other route, redirect to '/'

  ]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
