import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/view/HomePage'
import Login from '@/view/Login'
import Register from '@/view/Register'
import Welcome from '@/view/Welcome'
import Personal from '@/view/Personal'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage
    }, {
      path: '/Login',
      name: 'Login',
      component: Login
    }, {
      path: '/Register',
      name: 'Register',
      component: Register
    }, {
      path: '/Welcome',
      name: 'Welcome',
      component: Welcome
    }, {
      path: '/Personal',
      name: 'Personal',
      component: Personal
    }
  ]
})
