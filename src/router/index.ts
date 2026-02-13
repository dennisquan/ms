import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/Home.vue')
    },
    {
      path: '/answers',
      name: 'Answers',
      component: () => import('../views/Answers.vue')
    },
    {
      path: '/printable-flashcards',
      name: 'PrintableFlashcards',
      component: () => import('../views/PrintableFlashcards.vue')
    },
  ]
})

export default router
