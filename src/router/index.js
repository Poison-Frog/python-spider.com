import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '../views/HomePage'
import LastestNews from '../views/LastestNews'
import PreventSpiderTest from '../views/PreventSpiderTest'
import SimulationOfElectricity from '../views/SimulationOfElectricity'
import SoftwareToShare from '../views/SoftwareToShare'
import TechnologyArticle from '../views/TechnologyArticle'

Vue.use(Router)

export default new Router({

  mode: 'history',

  routes: [
    {
      path: '/',
      redirect: '/index'
    },
    {
      path: '/index',
      component: HomePage,
      name: 'HomePage'
    },
    {
      path: '/news',
      component: LastestNews,
      name: 'LastestNews'
    },
    {
      path: '/test',
      component: PreventSpiderTest,
      name: 'PreventSpiderTest'
    },
    {
      path: '/electricity',
      component: SimulationOfElectricity,
      name: 'SimulationOfElectricity'
    },
    {
      path: '/share',
      component: SoftwareToShare,
      name: 'SoftwareToShare'
    },
    {
      path: '/article',
      component: TechnologyArticle,
      name: 'TechnologyArticle'
    }
  ]
})
