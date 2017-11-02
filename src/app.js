import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import router from './routes'
import App from './App.vue'


// components
import Login from './components/Login.vue'
import Home from './components/Home.vue'

Vue.use(ElementUI)

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