import {createRouter, createWebHashHistory} from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),

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

router.beforeEach((to, from, next) => {

  if(from.name === to.name) {
    next()
  } else {
    window.scrollTo({
      top: (0),
      behavior: 'smooth',
    })
    window.setTimeout(() => {
      next()
    }, 250)
  }


})

router.afterEach((to, from, failure) => {

  if(! to.hash) return
  const timingForScrollBehavior = from.name === to.name ? 0 : 1500

  window.setTimeout(() => {
    const elementToScroll = document.querySelector(to.hash)
    if( !(elementToScroll instanceof HTMLElement) ) return
    window.scrollTo({
      top: (elementToScroll.offsetTop - 80),
      behavior: 'smooth',
    })
  }, timingForScrollBehavior)
})

export default router
