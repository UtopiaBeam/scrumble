import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import AppHome from '../views/app/Home.vue'
import { appRoutes } from './app'
import { vxm } from '../store'

Vue.use(VueRouter)

const routes: RouteConfig[] = [
  {
    path: '/login',
    name: 'Login',
    meta: { title: 'Login' },
    component: () =>
      import(/* webpackChunkName: "login" */ '@/views/Login.vue'),
    beforeEnter: (to, from, next) => {
      if (vxm.auth.isLoggedIn) {
        next('/app')
      } else {
        next()
      }
    },
  },
  {
    path: '/register',
    name: 'Register',
    meta: { title: 'Register' },
    component: () =>
      import(/* webpackChunkName: "register" */ '@/views/Register.vue'),
  },
  {
    path: '/app',
    component: AppHome,
    children: appRoutes,
    beforeEnter: (to, from, next) => {
      if (!vxm.auth.isLoggedIn) {
        next('/login')
      } else {
        next()
      }
    },
  },
  {
    path: '*',
    redirect: '/app',
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

router.beforeEach((to, _, next) => {
  document.title = `${to.meta.title} | Scrumble`
  next()
})

export default router
