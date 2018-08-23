import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/**
 * 路由跳转配置
 */
export default new Router({
  routes: [
    {
      path: '/login',
      component: () => import('../../views/backstage/pages/Login.vue')
    },
    {
      path: '/',
      component: () => import('../../views/backstage/pages/BackstageFrame.vue'),
      redirect: '/index',
      children: [
        {
          path: 'index',
          component: () => import('../../views/backstage/pages/base/Index.vue')
        },
        {
          path: 'menu',
          component: () => import('../../views/backstage/pages/base/Menu/Menu.vue')
        }
      ]
    }
  ]
})
