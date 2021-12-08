import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'hello',
    props: {
      msg: 'hello',
    },
    component: () => import('@/components/HelloWorld.vue'), // 注意这里要带上 文件后缀.vue
  },
  {
    path: '/404',
    name: 'NotFound',
    component: () => import('@/views/NotFound/index.vue'), // 注意这里要带上 文件后缀.vue
  },
  {
    path: '/store',
    name: 'Store',
    component: () => import('@/views/Store.vue'), // 注意这里要带上 文件后缀.vue
  },
  {
    path: '/mitt',
    name: 'Mitt',
    component: () => import('@/views/MittDemo.vue'), // 注意这里要带上 文件后缀.vue
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
