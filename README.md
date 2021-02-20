## 备战2021：Vite2项目最佳实践

## 目标
vite2变化分析
项目中常见任务vite2+vue3实践

## Vite2主要变化
+ 配置选项变化：vue特有选项、创建选项、css选项、jsx选项等
+ 别名行为变化：不再要求/开头或结尾
+ Vue支持：通过 @vitejs/plugin-vue插件支持
+ React支持
+ HMR API变化
+ 清单格式变化
+ 插件API重新设计

### 别名定义
不再需要像vite1一样在别名前后加上/，这和webpack项目配置可以保持一致便于移植，好评！

### 插件API重新设计
Vite2插件API扩展自Rollup插件体系，因此能兼容现存的Rollup插件

### vue3 Jsx支持
vue3中jsx支持需要引入插件：@vitejs/plugin-vue-jsx

### Mock插件应用
>vite-plugin-mock已经重构支持了Vite2
npm i mockjs -S
npm i vite-plugin-mock cross-env -D

>vite.config.js
import { viteMockServe } from 'vite-plugin-mock'

>export default {
  plugins: [ viteMockServe({ supportTs: false }) ]
}

>设置环境变量，package.json
{
  "scripts": {
    "dev": "cross-env NODE_ENV=development vite",
    "build": "vite build"
  },
} 

