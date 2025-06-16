import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home/index.vue'
import Category from '@/views/Category/index.vue'
import Label from '@/views/Label/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: Home,
    },
    {
      path: '/category',
      component: Category,
    },
    {
      path: '/label',
      component: Label,
    },
  ],
})

export default router
