import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/**
 * 路由跳转配置
 */
export default new Router({
  routes: [
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
        {
          path: '/rank/:id',
          component: () => import('../../views/frontend/pages/base/Rank.vue')
        },
        {
          path: '/rank',
          redirect: '/rank/111'
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
          path: '/retrieve-password',
          component: () => import('../../views/frontend/pages/user/RetrievePassword.vue')
        },
        {
          path: '/modify-password',
          component: () => import('../../views/frontend/pages/user/ModifyPassword.vue')
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
          path: '/user/music',
          component: () => import('../../views/frontend/pages/user/Music.vue')
        },
        {
          path: '/user/rank',
          component: () => import('../../views/frontend/pages/user/Rank.vue')
        },
        {
          path: '/album/:label/:type',
          component: () => import('../../views/frontend/pages/music/Album.vue')
        },
        {
          path: '/album',
          redirect: '/album/全部/hot'
        },
        {
          path: '/disc',
          component: () => import('../../views/frontend/pages/music/Disc.vue')
        },
        {
          path: '/play-list/:type/:id',
          component: () => import('../../views/frontend/pages/music/PlayList.vue')
        },
        {
          path: '/song/:id',
          component: () => import('../../views/frontend/pages/music/Song.vue')
        },
        {
          path: '/lyric',
          component: () => import('../../views/frontend/pages/music/Lyric.vue')
        },
        {
          path: '/download/music',
          component: () => import('../../views/frontend/pages/download/DownloadMusic.vue')
        },
        {
          path: '/singer/:type',
          component: () => import('../../views/frontend/pages/music/Singer.vue')
        },
        {
          path: '/singer-detail/:type/:id',
          component: () => import('../../views/frontend/pages/music/SingerDetail.vue')
        },
        {
          path: '/musician',
          component: () => import('../../views/frontend/pages/music/Musician.vue')
        }
      ]
    }
  ]
})
