import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from './views/Dashboard.vue'
import Authentication from './views/Authentication.vue'
import LandingPage from './views/LandingPage'


Vue.use(VueRouter)

  const routes = [
    {
      path: '/',
      name: 'LandingPage',
      component: LandingPage,
      meta: {
        guest: true
      }
    },
    {
      path: '/authentication',
      name: 'Auth',
      component: Authentication,
      meta: {
          guest: true
      },
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

export default router
