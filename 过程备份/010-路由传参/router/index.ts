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
  history:createWebHistory(),  // History模式
  // history:createWebHashHistory(),   // Hash模式
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
          component: Detail,

          // 第一种写法：将路由收到的所有params参数作为props传给路由组件
          // props:true,

          // 第二种写法：函数写法，可以自己决定将什么作为props给路由组件
          props(route) {
            return route.query
          }

          // 第三种写法：对象写法，可以自己决定将什么作为props给路由组件
          /* props:{
            a:100,
            b:200,
            c:300
          } */
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
