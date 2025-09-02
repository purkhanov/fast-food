import { createMemoryHistory, createRouter } from "vue-router"

const routes = [
  { 
    name: 'home',
    path : '/',
    component: () => import('@/views/HomeView.vue')
  }
]

const router = createRouter({
  history: createMemoryHistory(),
  routes
})

export default router