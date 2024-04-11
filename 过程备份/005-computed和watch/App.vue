<template>
  <h2>计算属性</h2>
  <FullName/>
  <hr>
  <h2>监视ref-基本数据</h2>
  <WatchBaseEg/>
  <h2>监视ref-对象数据</h2>
  <WatchRefObjEg/>
  <h2>监视reactive-对象数据</h2>
  <WatchReactiveEg/>
  <h2>监视多个数据</h2>
  <WatchMulData/>
  <h2>监视对象数据的某个属性</h2>
  <WatchObjAtrEg/>
  <h2>便携监视-WatchEffect</h2>
  <WatchEffectEg/>
  <hr>
</template>

<script lang="ts">
  import FullName from './components/FullName.vue'
  import WatchBaseEg from './components/WatchBaseEg.vue'
  import WatchRefObjEg from './components/WatchRefObjEg.vue'
  import WatchReactiveEg from './components/WatchReactiveEg.vue'
  import WatchMulData from './components/WatchMulData.vue'
  import WatchObjAtrEg from './components/WatchObjAtrEg.vue'
  import WatchEffectEg from './components/WatchEffectEg.vue'

  export default {
    name:'App',
    components:{FullName,WatchBaseEg,WatchRefObjEg,WatchReactiveEg,WatchMulData,WatchObjAtrEg,WatchEffectEg}
  }
</script>

<style scoped>
  hr {
    border: 2px red dashed;
  }
</style>