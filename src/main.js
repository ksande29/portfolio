import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import {routes} from './routes.js'

Vue.use(VueRouter)

const router = new VueRouter({
  //ToDo: Set router mode to history
  //ToDo: Pass routes constant imported from above
  routes,
  mode: 'history'
});

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
