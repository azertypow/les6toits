import {createRouter, createWebHashHistory} from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),

  scrollBehavior(to, from, savedPosition){
    if (savedPosition) return savedPosition
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

router.afterEach((to, from, failure) => {

  window.setTimeout(() => {
    window.scrollTo({
      top: (document.querySelector(to.hash) as HTMLElement).offsetTop - 80,
    })
  }, 1500)
})

export default router
