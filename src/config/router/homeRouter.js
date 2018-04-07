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
        path: 'download/client',
        component: () => import('../../views/home/type/download/DownloadClient.vue')
      },
      {
        path: 'user',
        component: () => import('../../views/home/type/user/User.vue')
      },
      {
        path: 'friend',
        component: () => import('../../views/home/type/user/Friend.vue')
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
        path: 'user/recommend',
        component: () => import('../../views/home/type/user/Recommend.vue')
      },
      {
        path: 'user/album',
        component: () => import('../../views/home/type/user/Album.vue')
      },
      {
        path: 'user/rank',
        component: () => import('../../views/home/type/user/Rank.vue')
      },
      {
        path: 'album',
        component: () => import('../../views/home/type/music/Album.vue')
      },
      {
        path: 'song',
        component: () => import('../../views/home/type/music/Song.vue')
      },
      {
        path: 'download/music',
        component: () => import('../../views/home/type/download/DownloadMusic.vue')
      },
      {
        path: 'singer',
        component: () => import('../../views/home/type/music/Singer.vue')
      },
      {
        path: 'musician',
        component: () => import('../../views/home/type/music/Musician.vue')
      }
    ]
  }
]
