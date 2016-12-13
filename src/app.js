import Vue from 'vue'
import VueRouter from 'vue-router'
import IView from 'iview';
import Routers from './routers';
import App from './pages/App'
import store from './vuex/store'
import { sync } from 'vuex-router-sync'

Vue.use(VueRouter)
Vue.use(IView)

let router = new VueRouter({
  history: false
})

router.map(Routers)


sync(store, router)

router.start(App, '#app')