// 创建一个路由器，并暴露出去

// 第一步：引入createRouter
import {createRouter,createWebHistory,createWebHashHistory} from 'vue-router'
// 引入一个一个可能要呈现组件
import Home from '@/views/Home.vue'
import News from '@/views/News.vue'
import About from '@/views/About.vue'
import Detail from '@/views/Detail.vue'

// 第二步：创建路由器
const router = createRouter({
  // history:createWebHistory(),  // History模式
  history:createWebHashHistory(),   // Hash模式
  routes:[ //一个一个的路由规则
    {
      path:'/home',
      component:Home
    },
    {
      name: 'xinwen',   // 命名路由
      path: '/news',
      component:News,
      children: [
        {
          name: 'xiangxi',
          path: 'detail',    // 子级路由
          component: Detail
        }
      ]
    },
    {
      path:'/about',
      component:About
    },
  ]
})

// 暴露出去router
export default router
