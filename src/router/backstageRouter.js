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
      component: () => import('../views/backstage/pages/Login.vue')
    },
    {
      path: '/',
      component: () => import('../views/backstage/pages/BackstageFrame.vue'),
      redirect: '/index',
      children: [
        {
          path: 'index',
          component: () => import('../views/backstage/pages/base/Index.vue')
        },
        {
          path: 'menu',
          component: () => import('../views/backstage/pages/base/Menu/Menu.vue')
        },
        {
          path: 'menuList',
          component: () => import('../views/backstage/pages/base/Menu/MenuList.vue')
        },
        {
          path: 'menuOrder',
          component: () => import('../views/backstage/pages/base/Menu/MenuOrder.vue')
        },

        {
          path: 'slider',
          component: () => import('../views/backstage/pages/base/Slider/Slider.vue')
        },
        {
          path: 'sliderList',
          component: () => import('../views/backstage/pages/base/Slider/SliderList.vue')
        },
        {
          path: 'sliderOrder',
          component: () => import('../views/backstage/pages/base/Slider/SliderOrder.vue')
        },
        {
          path: 'style',
          component: () => import('../views/backstage/pages/base/Style/Style.vue')
        },
        {
          path: 'styleList',
          component: () => import('../views/backstage/pages/base/Style/StyleList.vue')
        }
      ]
    }
  ]
})
