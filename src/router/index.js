/*
 * @description: 
 * @version: 
 * @Author: changjia
 * @Date: 2021-11-15 19:03:13
 * @LastEditors: changjia
 * @LastEditTime: 2021-11-15 21:44:17
 */
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// 所有路由
export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },

  // 404 页面必须放到最后
  {
    path: '*',
    // redirect: '/',
    redirect: '/login',
    hidden: true
  }
]

const createRouter = () => new Router({
  mode: 'history',
  // scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

// 创建路由实例
const router = createRouter()

export default router
