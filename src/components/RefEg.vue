<template>
  <!-- eg1 -->
  <hr>
  <h2>Ref创建的响应数据：基本类型</h2>
  <div>
    <h2>姓名：{{ name }}</h2>
    <h2>年龄：{{ age }}</h2>
    <h2>地址：{{ address }}</h2>
    <button @click="changeName">修改名字</button>
    <button @click="changeAge">修改年龄</button>
    <button @click="showTel">查看联系方式</button>
  </div>

  <!-- eg2 -->
  <hr>
  <h2>Ref创建的响应数据：对象类型</h2>
  <div class="person">
    <h2>汽车信息：一辆{{car.brand}}车，价值{{car.price}}万</h2>
    <button @click="changePrice">修改汽车的价格</button>
    <br>
    <h2>游戏列表：</h2>
    <ul>
      <li v-for="g in games" :key="g.id">{{g.name}}</li>
    </ul>
    <button @click="changeFirstGame">修改第一个游戏的名字</button>
  </div>
</template>

<script lang="ts" setup>
  import {ref, reactive} from 'vue'
  
  // eg1
  // vue2中写在data中的都是响应式的，但直接vue3中直接定义的变量都不是响应式的数据
  let name = ref('张三')
  let age = ref(18)
  let tel = '13888888888'
  let address = '北京昌平区宏福苑·宏福科技园'
  // 方法
  function changeName() {
    name.value = 'zhang-san'    // JS中操作ref对象时候需要.value
    console.log(name.value) 
  }
  function changeAge() {
    age.value += 1
    console.log(age.value) // JS中操作ref对象时候需要.value
  }
  function showTel() {
    alert(tel)
  }


  // eg2
  // 数据
  let car = ref({brand:'奔驰',price:100})
  let games = ref([
    {id:'aysdytfsatr01',name:'王者荣耀'},
    {id:'aysdytfsatr02',name:'原神'},
    {id:'aysdytfsatr03',name:'三国志'}
  ])
  let obj = reactive({x:999})
  console.log("car", car)
  console.log("obj", obj)
  // 方法
  function changePrice(){
    car.value.price += 10
    console.log(car.value.price)
  }
  function changeFirstGame(){
    games.value[0].name = '流星蝴蝶剑'
  }
</script>

<style scoped>
  .person {
    background-color: skyblue;
    box-shadow: 0 0 10px;
    border-radius: 10px;
    padding: 20px;
  }
  button {
    margin: 0 5px;
  }
  li {
    font-size: 20px;
  }
</style>