import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import LocalStorageTodo from '../views/LocalStorageTodo.vue'

// 라우터 설정: URL 경로에 따라 어떤 컴포넌트를 보여줄지 정의합니다.
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/local-todo',
    name: 'LocalStorageTodo',
    component: LocalStorageTodo
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
