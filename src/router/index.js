import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DetailCardComponent from '../components/DetailCardComponent.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    }
    ,
    {
      path: '/Detail',
      name: 'Detail',
      component: DetailCardComponent
    }
  ]
})

export default router
