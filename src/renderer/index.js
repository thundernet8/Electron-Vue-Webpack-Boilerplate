import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routers'
import App from './views/App'
import store from './vuex/store'
import { sync } from 'vuex-router-sync'

Vue.use(VueRouter)

Vue.config.devtools = process.env.NODE_ENV !== 'production'

const router = new VueRouter({
  routes // （缩写）相当于 routes: routes
})

sync(store, router)

new Vue({
  router: router,
  render: h => h(App) // App 主要是公共的头部尾部等内容
}).$mount('#app')
