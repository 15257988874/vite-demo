import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers'
import viteSvgIcons from 'vite-plugin-svg-icons'
import path from 'path'
import visualizer from 'rollup-plugin-visualizer'
import vueJsx from '@vitejs/plugin-vue-jsx'
import legacy from '@vitejs/plugin-legacy'
import viteCompression from 'vite-plugin-compression'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    // https://www.npmjs.com/package/vite-plugin-svg-icons
    viteSvgIcons({
      iconDirs: [path.resolve(process.cwd(), 'src/assets/icons')],
      symbolId: 'icon-[dir]-[name]',
    }),
    // npmjs.com/package/unplugin-vue-components
    Components({
      resolvers: [AntDesignVueResolver()],
    }),
    // 分析包
    visualizer(),
    // 提供 Vue 3 JSX & TSX 支持
    vueJsx({}),
    // 兼容处理
    legacy({
      targets: ['defaults', 'not IE 11'],
    }),
    // gzip压缩 生产环境生成 .gz 文件
    viteCompression({
      verbose: true,
      disable: false,
      threshold: 10240,
      algorithm: 'gzip',
      ext: '.gz',
    }),
  ],
  // 配置别名
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  // 启动服务配置
  server: {
    host: true,
    port: 9999,
    open: true,
    hmr: true,
  },
  // 注入全局样式文件
  css: {
    preprocessorOptions: {
      less: {
        additionalData: '@import "@/styles/variables.less";',
      },
    },
  },
  // 生产环境打包配置
  //去除 console debugger
  build: {
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
  },
})
