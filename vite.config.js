import path from "path";
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from "@vitejs/plugin-vue-jsx";
import { viteMockServe } from "vite-plugin-mock"; //搭建本地mock-serve

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    //配置别名
    alias: {
      "/@": path.resolve(__dirname, "src"),
      comps: path.resolve(__dirname, "src/components"),
      styles: path.resolve(__dirname, "src/styles"),
      plugins: path.resolve(__dirname, "src/plugins"),
      views: path.resolve(__dirname, "src/views"),
      layouts: path.resolve(__dirname, "src/layouts"),
      utils: path.resolve(__dirname, "src/utils"),
      apis: path.resolve(__dirname, "src/apis"),
      dirs: path.resolve(__dirname, "src/directives")
    },
  },
  plugins: [vue(),vueJsx(),viteMockServe({ supportTs: false })]
})
