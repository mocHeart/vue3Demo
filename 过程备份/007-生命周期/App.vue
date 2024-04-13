<template>
  <h2>APP</h2>
  <Person v-if="isShow"/>
</template>

<script lang="ts" setup>
  import Person from './components/Person.vue'
  import {ref,onMounted} from 'vue'

  let isShow = ref(true)

  // 挂载完毕
  onMounted(()=>{
    console.log('父---挂载完毕')
  })
</script>

<style scoped>
  hr {
    border: 2px red dashed;
  }
</style>