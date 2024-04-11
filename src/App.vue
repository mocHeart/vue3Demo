<template>
  <h2>APP</h2>
  <h2 ref="title2">你好</h2>
  <button @click="showLog">测试</button>
  <hr>
  <Person ref="ren"/>
  <hr>
  <h2>Props示例</h2>
  <PersonPropsEg a="哈哈" :list="personList" />
</template>

<script lang="ts" setup>
  import Person from './components/Person.vue'
  import PersonPropsEg from './components/PersonPropsEg.vue'
  import {ref,reactive} from 'vue'
  import {type Persons} from '@/types'

  let title2 = ref()
  let ren = ref()

  function showLog(){
    console.log(title2.value)
    console.log(ren.value)
  }


  let x = 9
  let personList = reactive<Persons>([
    {id:'asudfysafd01',name:'张三',age:18},
    {id:'asudfysafd02',name:'李四',age:20},
    {id:'asudfysaf)d03',name:'王五',age:22}
  ])
</script>

<style scoped>
  hr {
    border: 2px red dashed;
  }
</style>