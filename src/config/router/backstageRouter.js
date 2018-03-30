/**
 *PC后台页面路由
 */
export default [
  {
    path: '/login',
    component: () => import('../../views/backstage/Login.vue')
  }
  // {
  //   path: '/backstage',
  //   component: () => import('../../views/backstage/frame.vue'),
  //   redirect: '/backstage/index',
  //
  //   children: [
  //     {
  //       path: 'index',
  //       component: () => import('../../views/backstage/Index.vue')
  //     }
  //   ]
  // }
]
