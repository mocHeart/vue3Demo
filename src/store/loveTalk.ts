import {defineStore} from 'pinia'
import {reactive} from 'vue'
import axios from 'axios'
import {nanoid} from 'nanoid'

// store的配置式写法
// export const useTalkStore = defineStore('talk',{
//   state() {
//     return {
//       talkList:JSON.parse(localStorage.getItem('talkList') as string) || []
//     }
//   },
//   actions: {
//     async getATalk(){
//       // 发请求，下面这行的写法是：连续解构赋值+重命名
//       let {data:{content:title}} = await axios.get('https://api.uomg.com/api/rand.qinghua?format=json')
//       // 把请求回来的字符串，包装成一个对象
//       let obj = {id:nanoid(),title}
//       // 放到数组中
//       this.talkList.unshift(obj)
//     }
//   }
// })

// store的组合式写法
export const useTalkStore = defineStore('talk', ()=>{
  // talkList就是state
  const talkList = reactive(
    JSON.parse(localStorage.getItem('talkList') as string) || []
  )

  // getATalk函数相当于action
  async function getATalk(){
    // 发请求，下面这行的写法是：连续解构赋值+重命名
    let {data:{content:title}} = await axios.get('https://api.uomg.com/api/rand.qinghua?format=json')
    // 把请求回来的字符串，包装成一个对象
    let obj = {id:nanoid(),title}
    // 放到数组中
    talkList.unshift(obj)
  }

  // 需要对外暴露的内容
  return {talkList,getATalk}
})