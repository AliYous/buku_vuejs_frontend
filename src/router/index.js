import Vue from 'vue'
import VueRouter from 'vue-router'
import Books from '../views/Books.vue'
import Authentication from '../views/Authentication.vue'


Vue.use(VueRouter)

  const routes = [
    {
      path: '/',
      name: 'Home',
      component: Books
    },
    {
      path: '/authentication',
      name: 'Authentication',
      component: Authentication,
      meta: {
          guest: true
      }
    }
    // {
    //     path: '/register',
    //     name: 'register',
    //     component: Register,
    //     meta: {
    //         guest: true
    //     }
    // },
    // {
    //     path: '/dashboard',
    //     name: 'userboard',
    //     component: UserBoard,
    //     meta: {
    //         requiresAuth: true
    //     }
    // },
  ]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
