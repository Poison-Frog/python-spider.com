import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

router.beforeEach((to,from,next) => {
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})