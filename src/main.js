/*
 * @description: 
 * @version: 
 * @Author: changjia
 * @Date: 2021-11-15 18:47:50
 * @LastEditors: changjia
 * @LastEditTime: 2021-11-15 20:34:37
 */
import Vue from 'vue'
import App from './App.vue'

import router from './router'

import '@/permission'


Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
