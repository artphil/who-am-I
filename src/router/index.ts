import { createRouter, createWebHistory } from 'vue-router'
import Game from '../views/Game.vue'

const routes = [
  {
    path: '/',
    component: Game,
  },
  {
    path: '/:id([a-fA-F0-9]{12})',
    component: Game,
  },
]

export default createRouter({
  history: createWebHistory(),
  routes,
})
