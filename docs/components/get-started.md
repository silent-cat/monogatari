# 快速上手

## 安装

```bash
npm install monogatari-ui
```

## 使用

在 main.js 中

```js
import Vue from 'vue'
import { FilterPanel } from 'monogatari-ui' // 按需引入组件
import 'monogatari-ui/dist/index.css' // 引入全局样式
Vue.component('m-filter-panel', FilterPanel) // 全局注册组件
```
