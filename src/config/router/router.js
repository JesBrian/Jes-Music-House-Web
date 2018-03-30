import Vue from 'vue'
import Router from 'vue-router'
import HomeRouter from './homeRouter.js'
import BackstageRouter from './backstageRouter.js'

Vue.use(Router)

export default new Router({

  /**
   * 每次页面跳转自动滚到顶部
   */
  scrollBehavior () {
    return {x: 0, y: 0}
  },

  /**
   * 路由跳转配置
   */
  routes: [
    ...HomeRouter,
    ...BackstageRouter
  ]
})
