import { createApp } from 'vue';

import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';

import Linehub from 'linehub';
import 'linehub/theme-chalk/index.css';

// eslint-disable-next-line
import App from './src/App.vue';

createApp(App).use(Linehub).use(ElementPlus).mount('#app');
