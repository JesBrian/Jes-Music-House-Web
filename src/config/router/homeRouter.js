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
        path: '/index',
        component: () => import('../../views/home/pages/base/Index.vue')
      },
      {
        path: '/search/:searchType/:searchKey',
        component: () => import('../../views/home/pages/base/Search.vue')
      },
      // {
      //   path: '/search',
      //   component: () => import('../../views/home/pages/base/Search.vue')
      // },
      {
        path: '/rank',
        component: () => import('../../views/home/pages/base/Rank.vue')
      },
      {
        path: '/download/client',
        component: () => import('../../views/home/pages/download/DownloadClient.vue')
      },
      {
        path: '/user',
        component: () => import('../../views/home/pages/user/User.vue')
      },
      {
        path: '/friend/:id',
        component: () => import('../../views/home/pages/user/Friend.vue')
      },
      {
        path: '/update',
        component: () => import('../../views/home/pages/user/Update.vue')
      },
      {
        path: '/level',
        component: () => import('../../views/home/pages/user/Level.vue')
      },
      {
        path: '/vip',
        component: () => import('../../views/home/pages/user/Vip.vue')
      },
      {
        path: '/message',
        component: () => import('../../views/home/pages/user/Message.vue')
      },
      {
        path: '/user/recommend',
        component: () => import('../../views/home/pages/user/Recommend.vue')
      },
      {
        path: '/user/album',
        component: () => import('../../views/home/pages/user/Album.vue')
      },
      {
        path: '/user/rank',
        component: () => import('../../views/home/pages/user/Rank.vue')
      },
      {
        path: '/album',
        component: () => import('../../views/home/pages/music/Album.vue')
      },
      {
        path: '/disc',
        component: () => import('../../views/home/pages/music/Disc.vue')
      },
      {
        path: '/playList',
        component: () => import('../../views/home/pages/music/PlayList.vue')
      },
      {
        path: '/song',
        component: () => import('../../views/home/pages/music/Song.vue')
      },
      {
        path: '/download/music',
        component: () => import('../../views/home/pages/download/DownloadMusic.vue')
      },
      {
        path: '/singer',
        component: () => import('../../views/home/pages/music/Singer.vue')
      },
      {
        path: '/musician',
        component: () => import('../../views/home/pages/music/Musician.vue')
      }
    ]
  }
]
