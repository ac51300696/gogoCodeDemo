/*
 * @Author: Colin
 * @Date: 2021-01-19 20:12:16
 * @LastEditTime: 2021-02-04 16:40:05
 * @LastEditors: Colin
 * @Description: 无
 */
import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
    {
        path: '/v2',
        name: 'v1',
        component: () => import('@/modules/v2/index.vue')
    },
    {
        path: '/v3',
        name: 'v3',
        component: () => import('@/modules/v3/index.vue')
    }
]


export default routes
