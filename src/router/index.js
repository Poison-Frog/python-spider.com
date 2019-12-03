import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '../views/HomePage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/index'
    },
    {
      path: '/index',
      component: HomePage,
      name: 'HomePage'
    }
  ]
})
