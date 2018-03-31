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
        path: 'album',
        component: () => import('../../views/home/type/Album.vue')
      }
    ]
  }
]
