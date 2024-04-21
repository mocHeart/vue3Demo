import { createApp } from 'vue'
import App from './App.vue'
// 第一步：引入Pinia
import {createPinia} from 'pinia'

const app = createApp(App)
// 第二步：创建Pinia
const pinia = createPinia()
// 第三步：安装Pinia
app.use(pinia)
app.mount('#app')
