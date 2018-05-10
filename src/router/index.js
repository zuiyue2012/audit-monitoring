import Vue from 'vue'
import Router from 'vue-router'
import JudgmentHome from '../components/judgment/Home'
import JudgmentEtcMtc from '../components/judgment/EtcMtc'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'JudgmentHome',
      component: JudgmentHome
    },
    {
      path: '/etc',
      name: 'JudgmentEtcMtc',
      component: JudgmentEtcMtc
    }
  ]
})
