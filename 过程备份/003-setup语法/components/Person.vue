<template>
  <h2>Person1</h2>
  <div class="person">
    <h2>姓名：{{ name }}</h2>
    <h2>年龄：{{ age }}</h2>
    <button @click="changeName">修改名字</button>
    <button @click="changeAge">修改年龄</button>
    <button @click="showTel">查看联系方式</button>
  </div>

  <hr>
    <h2>测试1：{{a}}</h2>
    <h2>测试2：{{c}}</h2>
    <h2>测试3：{{d}}</h2>
    <button @click="b">测试</button>

</template>

<script lang="ts">
export default {
  name:'Person',

  // Vue3中仍可以嵌套vue2的用法，但强烈不建议这么写
  beforeCreate() {
    console.log('beforeCreate')
  },
  data(){
    return {
      a:100,
      c:this.name,  // 也可以使用setup中的内容
      d:900,
      age:90
    }
  },
  methods:{
    b(){
      console.log('b')
    }
  },

  setup () {
    //setup中的this是undefined，Vue3在弱化this了
    console.log(this)
    // 数据，原来是写在data中的，此时的name、age、tel都不是响应式的数据
    let name = '张三'
    let age = 18
    let tel = '13888888888'

    // 方法
    function changeName() {
      name = 'zhang-san'  // 注意：这样修改name，页面是没有变化的
      console.log(name)   // name确实改了，但name不是响应式的
    }
    function changeAge() {
      age += 1           // 注意：这样修改age，页面是没有变化的
      console.log(age)   // age确实改了，但age不是响应式的
    }
    function showTel() {
      alert(tel)
    }

    // 将数据、方法交出去，模板中才可以使用
    return {name,age,tel,changeName,changeAge,showTel}

    // setup的返回值也可以是一个渲染函数
    // return ()=>'哈哈'
  }

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
</style>
