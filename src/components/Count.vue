<template>
  <div class="count">
    <h2>当前求和为：{{ sum }}，放大10倍后：{{ bigSum }}</h2>
    <h3>欢迎来到:{{ countStore.school }}，坐落于：{{ countStore.address }} -- {{ upperSchool }}</h3>
    <select v-model.number="n">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="add">加</button>
    <button @click="minus">减</button>
  </div>
</template>

<script setup lang="ts" name="Count">
  import { ref,reactive,toRefs } from "vue";
  import {storeToRefs} from 'pinia'
  import {useCountStore} from '@/store/count'

  const countStore = useCountStore()

  // 以下两种方式都可以拿到state中的数据
  console.log('1==>', countStore.sum)
  console.log('2==>', countStore.$state.sum)

  // 数据
  let n = ref(1)   // 用户选择的数字

  // 方法
  function add(){
    // 第一种修改方式
    // countStore.sum += 1

    // 第二种修改方式
    // countStore.$patch({
    //   sum:888,
    //   school: '北京大学',
    //   address: '北京'
    // })

    // 第三种修改方式
    countStore.increment(n.value)
  }


  // storeToRefs只会关注sotre中数据，不会对方法进行ref包裹
  const {sum,school,address,bigSum,upperSchool} = storeToRefs(countStore)
  console.log('3==>', storeToRefs(countStore))

  function minus(){
    countStore.sum -= n.value
  }
</script>

<style scoped>
  .count {
    background-color: skyblue;
    padding: 10px;
    border-radius: 10px;
    box-shadow: 0 0 10px;
  }
  select,button {
    margin: 0 5px;
    height: 25px;
  }
</style>