import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import router from './router'

export const routerConfig = () => {
  NProgress.configure({
    easing: 'ease', // 动画方式
    speed: 500, // 递增进度条的速度
    showSpinner: false, // 是否显示加载ico
    trickleSpeed: 200, // 自动递增间隔
    minimum: 0.3, // 初始化时的最小百分比
  })

  router.beforeEach((to: any, from: any, next: any) => {
    NProgress.start()
    next()
  })
  router.afterEach(() => {
    // 在即将进入新的页面组件前，关闭掉进度条
    NProgress.done()
  })
}
