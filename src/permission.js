/*
 * @description: 路由跳转
 * @version: 
 * @Author: changjia
 * @Date: 2021-11-15 18:58:17
 * @LastEditors: changjia
 * @LastEditTime: 2021-11-15 20:32:46
 */
import router from './router'

import { getToken } from '@/utils/auth'

const whitelist = ['/login']

router.beforeEach((to, form, next) => {
  const hasToken = getToken()

  if (hasToken) {
    if (to.path === '/login') {
      next({ path: '/' })
    }
  } else {
    // 没有token
    if (whitelist.indexOf(to.path !== -1)) {
      next()
    } else {
      next(`/login?redirect=${to.path}`)
    }
  }
})
