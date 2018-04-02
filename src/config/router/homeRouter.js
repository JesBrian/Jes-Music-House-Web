/**
 *PC前台页面路由
 */
export default [
  {
    path: '/',
    component: () => import('../../views/home/HomeFrame.vue'),
    redirect: '/index',

    children: [
      {
        path: 'index',
        component: () => import('../../views/home/type/base/Index.vue')
      },
      {
        path: 'search',
        component: () => import('../../views/home/type/base/Search.vue')
      },
      {
        path: 'user',
        component: () => import('../../views/home/type/user/User.vue')
      },
      {
        path: 'update',
        component: () => import('../../views/home/type/user/Update.vue')
      },
      {
        path: 'level',
        component: () => import('../../views/home/type/user/Level.vue')
      },
      {
        path: 'vip',
        component: () => import('../../views/home/type/user/Vip.vue')
      },
      {
        path: 'message',
        component: () => import('../../views/home/type/user/Message.vue')
      },
      {
        path: 'album',
        component: () => import('../../views/home/type/music/Album.vue')
      },
      {
        path: 'song',
        component: () => import('../../views/home/type/music/Song.vue')
      }
    ]
  }
]
