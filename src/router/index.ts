import {createRouter, createWebHashHistory} from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),

  scrollBehavior(to, from, savedPosition){
    if (savedPosition) return savedPosition
    if (to.hash) return { top: 80, el: to.hash, behavior: 'smooth'}
    return { top: 0, behavior: 'smooth'}
  },

  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/ViewHome.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/ViewContact.vue')
    },
    {
      path: '/pages/:uid',
      name: 'pages/:uid',
      component: () => import('../views/DefaultPage.vue')
    },
  ]
})

export default router
