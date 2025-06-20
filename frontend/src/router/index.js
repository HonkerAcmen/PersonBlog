import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home/index.vue'
import Category from '@/views/Category/index.vue'
import Profile from '@/views/Profile/index.vue'
import HomeRightInfo from '@/views/Home/components/right-info.vue'
import HomeInfoDetail from '@/views/Home/components/info-detail.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: Home,
      children: [
        {
          path: '',
          component: HomeRightInfo
        },
        {
          path: 'info-detail',
          component: HomeInfoDetail
        },
      ]
    },
    {
      path: '/category',
      component: Category,
    },
    {
      path:'/profile',
      component:Profile,
    }
  ],
})

export default router
