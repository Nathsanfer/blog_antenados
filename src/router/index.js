import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Blog from '../views/Blog.vue'
import Login from '../views/Login.vue'
import Criacao from '../views/Criacao.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/blog', component: Blog },
  { path: '/login', component: Login },
  { path: '/criacao', component: Criacao }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router