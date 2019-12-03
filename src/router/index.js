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
      name: 'HomePage',
      meta: {
        title: '爱锭网'
      }
    },
    {
      path: '/news',
      component: LastestNews,
      name: 'LastestNews',
      meta: {
        title: '爱锭网-最新标讯'
      }
    },
    {
      path: '/test',
      component: PreventSpiderTest,
      name: 'PreventSpiderTest',
      meta: {
        title: '爱锭网-反爬练习'
      }
    },
    {
      path: '/electricity',
      component: SimulationOfElectricity,
      name: 'SimulationOfElectricity',
      meta: {
        title: '爱锭网-电商模拟化'
      }
    },
    {
      path: '/share',
      component: SoftwareToShare,
      name: 'SoftwareToShare',
      meta: {
        title: '爱锭网-软件分享'
      }
    },
    {
      path: '/article',
      component: TechnologyArticle,
      name: 'TechnologyArticle',
      meta: {
        title: '爱锭网-技术文章'
      }
    }
  ]
})
