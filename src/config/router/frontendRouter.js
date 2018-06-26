/**
 *PC前台页面路由
 */
export default [
  {
    path: '/',
    component: () => import('../../views/frontend/FrontendFrame.vue'),
    redirect: '/index',

    children: [
      {
        path: '/index',
        component: () => import('../../views/frontend/pages/base/Index.vue')
      },
      {
        path: '/search/:searchType/:searchKey',
        component: () => import('../../views/frontend/pages/base/Search.vue')
      },
      // {
      //   path: '/search',
      //   component: () => import('../../views/frontend/pages/base/Search.vue')
      // },
      {
        path: '/rank',
        component: () => import('../../views/frontend/pages/base/Rank.vue')
      },
      {
        path: '/download/client',
        component: () => import('../../views/frontend/pages/download/DownloadClient.vue')
      },
      {
        path: '/user',
        component: () => import('../../views/frontend/pages/user/User.vue')
      },
      {
        path: '/friend/:id',
        component: () => import('../../views/frontend/pages/user/Friend.vue')
      },
      {
        path: '/update',
        component: () => import('../../views/frontend/pages/user/Update.vue')
      },
      {
        path: '/level',
        component: () => import('../../views/frontend/pages/user/Level.vue')
      },
      {
        path: '/vip',
        component: () => import('../../views/frontend/pages/user/Vip.vue')
      },
      {
        path: '/message',
        component: () => import('../../views/frontend/pages/user/Message.vue')
      },
      {
        path: '/user/recommend',
        component: () => import('../../views/frontend/pages/user/Recommend.vue')
      },
      {
        path: '/user/album',
        component: () => import('../../views/frontend/pages/user/Album.vue')
      },
      {
        path: '/user/rank',
        component: () => import('../../views/frontend/pages/user/Rank.vue')
      },
      {
        path: '/album',
        component: () => import('../../views/frontend/pages/music/Album.vue')
      },
      {
        path: '/disc',
        component: () => import('../../views/frontend/pages/music/Disc.vue')
      },
      {
        path: '/playList',
        component: () => import('../../views/frontend/pages/music/PlayList.vue')
      },
      {
        path: '/song',
        component: () => import('../../views/frontend/pages/music/Song.vue')
      },
      {
        path: '/download/music',
        component: () => import('../../views/frontend/pages/download/DownloadMusic.vue')
      },
      {
        path: '/singer',
        component: () => import('../../views/frontend/pages/music/Singer.vue')
      },
      {
        path: '/musician',
        component: () => import('../../views/frontend/pages/music/Musician.vue')
      }
    ]
  }
]
