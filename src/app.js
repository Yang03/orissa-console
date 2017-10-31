import Vue from 'vue'
import Router from 'vue-router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'


// components
import Login from './components/Login.vue'

Vue.use(ElementUI)
Vue.use(Router)

const config = {
	linkActiveClass: 'active',
	scrollBehavior: () => ({ x: 0, y: 0 }),
  routes: [{
    path: '/login/',
		component: Login,
		name: 'login'
  }]
}
const router = new Router(config)
new Vue({
    el: '#app',
    router,
    render: h => h(App, {
      on: {
        'history-back'() {
          router.go(-1)
        }
      }
    })
  })