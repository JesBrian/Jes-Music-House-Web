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
          path: 'role',
          component: () => import('../views/backstage/pages/base/Role/Role.vue')
        },
        {
          path: 'roleList',
          component: () => import('../views/backstage/pages/base/Role/RoleList.vue')
        },
        {
          path: 'assignPermissions',
          component: () => import('../views/backstage/pages/base/Permissions/AssignPermissions.vue')
        },
        {
          path: 'slide',
          component: () => import('../views/backstage/pages/base/Slide/Slide.vue')
        },
        {
          path: 'slideList',
          component: () => import('../views/backstage/pages/base/Slide/SlideList.vue')
        },
        {
          path: 'slideOrder',
          component: () => import('../views/backstage/pages/base/Slide/SlideOrder.vue')
        },
        {
          path: 'style',
          component: () => import('../views/backstage/pages/base/Style/Style.vue')
        },
        {
          path: 'styleList',
          component: () => import('../views/backstage/pages/base/Style/StyleList.vue')
        },
        {
          path: 'songList',
          component: () => import('../views/backstage/pages/base/Song/SongList.vue')
        },
        {
          path: 'playList',
          component: () => import('../views/backstage/pages/base/PlayList/PlayList.vue')
        },
        {
          path: 'playListList',
          component: () => import('../views/backstage/pages/base/PlayList/PlayListList.vue')
        },
        {
          path: 'user',
          component: () => import('../views/backstage/pages/base/User/User.vue')
        },
        {
          path: 'userList',
          component: () => import('../views/backstage/pages/base/User/UserList.vue')
        }
      ]
    }
  ]
})
