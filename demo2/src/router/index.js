import Vue from 'vue'
import VueRouter from 'vue-router'
import child from '../home/index.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'child',
    component: child
  },
]

const router = new VueRouter({
  base: window.__MICRO_APP_BASE_ROUTE__ || '/',
  mode: 'history',
  routes
});

export default router