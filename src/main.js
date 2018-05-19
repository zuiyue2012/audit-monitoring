// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'
import {Alert, Confirm, Toast} from 'wc-messagebox'
import 'wc-messagebox/style.css'
import 'vue-tree-halower/dist/halower-tree.min.css'
import {VTree, VSelectTree} from 'vue-tree-halower'
Vue.use (VTree)
Vue.use (VSelectTree)

Vue.use(Alert)
Vue.use(Confirm)
Vue.use(Toast)
Vue.use(VueResource)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
