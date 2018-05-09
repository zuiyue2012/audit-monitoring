import Vue from 'vue'
import Router from 'vue-router'
import Judgment from '../components/Judgment'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Judgment',
      component: Judgment
    }
  ]
})
