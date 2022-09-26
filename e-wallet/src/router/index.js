import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from '../views/HomePage.vue'
import TopUpPage from '../views/TopUpPage.vue'
import TransferPage from '../views/TransferPage.vue'
import WithdrawPage from '../views/WithdrawPage.vue'
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
  {
    path: '/transfer',
    name: 'TransferPager',
    component: TransferPage
  },
    {
    path: '/withdraw',
    name: 'WithdrawPager',
    component: WithdrawPage
  },
]

const router = new VueRouter({
  routes
})

export default router