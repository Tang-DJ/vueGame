import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/view/HomePage'
import Login from '@/view/Login'
import Register from '@/view/Register'

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
    }
  ]
})
