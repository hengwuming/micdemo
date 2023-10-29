import Vue from 'vue'
import VueRouter from 'vue-router'
import mainBase from '../home/mainBase.vue'
import child from '../home/child.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'base',
    component: mainBase
  },
  {
    path: '/child',
    name: 'child',
    component: child
  },
]

const router = new VueRouter({
  mode: 'history',
  routes
});

export default router