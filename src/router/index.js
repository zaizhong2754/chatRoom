import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'home',
    component: () => import(/* webpackChunkName: "home" */ '../views/HomeView.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "login" */ '../views/LoginView.vue')
  }
]

const router = new VueRouter({
  routes
})

// 路由拦截
let localItem = ''
router.beforeEach((to,from,next)=>{
  if (to.path==='/home') {
    localItem = JSON.parse(localStorage.getItem('name'))
    if (localItem) {
      next()
    } else {
      next('/login')
    }
  }
  if (to.path==='/login') {
    localItem = JSON.parse(localStorage.getItem('name'))
    if (localItem) {
      next('/home')
    } else {
      next()
    }
  }
})

export default router
