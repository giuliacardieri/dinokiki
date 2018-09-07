import Vue from 'vue'
import Router from 'vue-router'
import BaseView from '@/components/views/BaseView'
import HomeView from '@/components/views/HomeView'
import AboutView from '@/components/views/AboutView'
import GameView from '@/components/views/GameView'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: BaseView,
      children: [
        {
          path: '/',
          name: 'home',
          component: HomeView
        },
        {
          path: '/about',
          name: 'about',
          component: AboutView
        },
        {
          path: '/games',
          name: 'game',
          component: GameView
        }
      ]}
  ],
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
