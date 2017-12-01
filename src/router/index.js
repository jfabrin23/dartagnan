import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/pages/Login'
import Home from '@/pages/Home'
import Venda from '@/pages/Venda'

Vue.use(Router)

export default new Router({
  history: true,
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/venda',
      name: 'venda',
      component: Venda
    },
    {
      path: '*',
      component: Login
    }
  ]
})
