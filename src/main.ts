import { createApp } from 'vue'
import App from './App.vue'
import 'virtual:svg-icons-register'
// 引入tailwind
import 'tailwindcss/tailwind.css'
import { createPinia } from 'pinia'

import router from './router/index'
import { routerConfig } from './permission'

const app = createApp(App)
routerConfig()
// 注入pinia
app.use(createPinia())
// 注入路由
app.use(router)
app.mount('#app')
