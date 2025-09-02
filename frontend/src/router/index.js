import { createWebHashHistory, createRouter } from "vue-router"

const routes = [
  { 
    name: 'home',
    path : '/',
    component: () => import('@/views/HomeView.vue')
  },
  { 
    name: 'order',
    path : '/order',
    component: () => import('@/views/OrderView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router