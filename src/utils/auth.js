/*
 * @description:获取token
 * @version: 
 * @Author: changjia
 * @Date: 2021-11-15 19:15:40
 * @LastEditors: changjia
 * @LastEditTime: 2021-11-15 20:37:35
 */
import Cookies from 'js-cookie'

const TokenKey = 'test_token'

export function getToken () {
  return Cookies.get(TokenKey)
}

export function setToken (token) {
  return Cookies.set(TokenKey, token)
}

export function removeToken (token) {
  return Cookies.remove(TokenKey, token)
}