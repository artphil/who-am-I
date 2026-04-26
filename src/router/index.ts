import { createRouter, createWebHistory, type RouteLocationNormalized } from 'vue-router'
import Game from '../views/GameView.vue'
import { existis } from '@/utils/data'
import NotFound from '@/views/NotFound.vue'

const routes = [
  {
    path: '/',
    component: Game,
  },
  {
    path: '/:id([a-fA-F0-9]{12})',
    component: Game,
  },
  {
    path: '/404',
    component: NotFound,
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/',
  },
]

export default createRouter({
  history: createWebHistory(),
  routes,
})
