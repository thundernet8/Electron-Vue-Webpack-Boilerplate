import Vue from 'vue'
import VueRouter from 'vue-router'
import Routers from './routers'
import App from './views/App'
import store from './vuex/store'
import { sync } from 'vuex-router-sync'

Vue.use(VueRouter)

let router = new VueRouter({
  history: false
})

router.map(Routers)

sync(store, router)

router.start(App, '#app')
