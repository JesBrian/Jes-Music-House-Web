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
        component: () => import('../../views/home/type/Index.vue')
      },
      {
        path: 'user',
        component: () => import('../../views/home/type/User.vue')
      },
      {
        path: 'update',
        component: () => import('../../views/home/type/Update.vue')
      },
      {
        path: 'level',
        component: () => import('../../views/home/type/Level.vue')
      },
      {
        path: 'vip',
        component: () => import('../../views/home/type/Vip.vue')
      },
      {
        path: 'message',
        component: () => import('../../views/home/type/Message.vue')
      },
      {
        path: 'album',
        component: () => import('../../views/home/type/Album.vue')
      },
      {
        path: 'song',
        component: () => import('../../views/home/type/Song.vue')
      }
    ]
  }
]
