import Vue from 'vue'
import App from './App.vue'
import router from './router';

Vue.config.productionTip = false

let app = null
// 👇 将渲染操作放入 mount 函数 -- 必填
function mount () {
  app = new Vue({
    router,
    render: h => h(App),
  }).$mount('#app')
}

// 👇 将卸载操作放入 unmount 函数 -- 必填
function unmount () {
  app.$destroy()
  app.$el.innerHTML = ''
  app = null
}

// 微前端环境下，注册mount和unmount方法
if (window.__MICRO_APP_ENVIRONMENT__) {
  window[`micro-app-${window.__MICRO_APP_NAME__}`] = { mount, unmount }
} else {
  // 非微前端环境直接渲染
  mount()
}