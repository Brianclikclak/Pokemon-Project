import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

<<<<<<< HEAD
=======

>>>>>>> 20753252699d933bc5217f6d06e3b3fd63cffa44
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
<<<<<<< HEAD
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
=======
>>>>>>> 20753252699d933bc5217f6d06e3b3fd63cffa44
    }
  ]
})

export default router
