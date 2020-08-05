import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import AppHome from '../views/app/Home.vue'
import { appRoutes } from './app'

Vue.use(VueRouter)

const routes: RouteConfig[] = [
  {
    path: '/login',
    name: 'Login',
    component: () =>
      import(/* webpackChunkName: "login" */ '@/views/Login.vue'),
  },
  {
    path: '/app',
    name: 'App',
    component: AppHome,
    children: appRoutes,
  },
  {
    path: '*',
    redirect: '/app'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
