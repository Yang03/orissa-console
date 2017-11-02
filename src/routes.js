import Vue from 'vue'
import Router from 'vue-router'
import Login from './components/Login.vue'
import Home from './components/Home.vue'
import List from './components/List.vue'

Vue.use(Router)

const config = {
	linkActiveClass: 'active',
	scrollBehavior: () => ({ x: 0, y: 0 }),
  routes: [
    {
      path: '/',
      beforeEnter(to, from, next) {
        router.push('/home/')
      }
  },
  {
    path: '/login/',
		component: Login,
		name: 'login'
  },
  {
    path: '/home/',
		component: Home,
		name: 'home'
  }, {
    path: '/list/',
    component: List,
    name: 'list'
    //meta: {isLogin: true}
  }
]}
const router = new Router(config)

// router.beforeEach((to, from, next) => {
//   if (to.meta && to.meta.isLogin) {
//     console.log('xxx')
//   }
//   next()
// })

export default router