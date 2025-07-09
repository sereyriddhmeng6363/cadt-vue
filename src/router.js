// src/router.js
import { createRouter, createWebHistory } from 'vue-router'
import Home          from './pages/Home.vue'
import About         from './pages/About.vue'
import Projects      from './pages/Projects.vue'
import ProjectDetail from './pages/ProjectDetail.vue'
import Contact       from './pages/Contact.vue'
import NotFound      from './pages/NotFound.vue'

const routes = [
  { path: '/',             component: Home },
  { path: '/about',        component: About },
  { path: '/projects',     component: Projects },
  { path: '/projects/:id', component: ProjectDetail, props: true },
  { path: '/contact',      component: Contact },
  { path: '/:pathMatch(.*)*', component: NotFound }
]

export default createRouter({
  history: createWebHistory(),
  routes
})