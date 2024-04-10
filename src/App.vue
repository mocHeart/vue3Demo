<template>
  <h2>计算属性</h2>
  <FullName/>
  <hr>
  <h2>监视ref-基本数据</h2>
  <WatchBaseEg/>
  <h2>监视ref-对象数据</h2>
  <WatchRefObjEg/>
  <hr>
</template>

<script lang="ts">
  import FullName from './components/FullName.vue'
  import WatchBaseEg from './components/WatchBaseEg.vue'
  import WatchRefObjEg from './components/WatchRefObjEg.vue'

  export default {
    name:'App',
    components:{FullName,WatchBaseEg,WatchRefObjEg}
  }
</script>

<style scoped>
  hr {
    border: 2px red dashed;
  }
</style>