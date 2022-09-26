import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from '../views/HomePage.vue'
import TopUpPage from '../views/TopUpPage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: HomePage
  },
  {
    path: '/topup',
    name: 'TopUpPage',
    component: TopUpPage
  },
  
]

const router = new VueRouter({
  routes
})

export default router