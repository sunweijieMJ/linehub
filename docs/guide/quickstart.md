---
title: 快速开始
---

# 快速开始

本节介绍如何在您的项目中使用 Linehub.

## 用法

### 完整导入

如果你对打包后的文件大小不是很在乎，那么使用完整导入会更方便。

```typescript
// main.ts
import { createApp } from 'vue';
import Linehub from 'linehub';
import 'linehub/dist/index.css';
import App from './App.vue';

const app = createApp(App);

app.use(Linehub);
app.mount('#app');
```
