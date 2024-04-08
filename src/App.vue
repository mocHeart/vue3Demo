<template>
  <ToRefsEg/>
  <hr>
  <ReactiveEg/>
  <hr>
  <RefEg/>
  <hr>
</template>

<script lang="ts">
  import RefEg from '@/components/RefEg.vue'
  import ReactiveEg from '@/components/ReactiveEg.vue'
  import ToRefsEg from '@/components/ToRefsEg.vue'

  export default {
    name:'App',
    components:{RefEg, ReactiveEg, ToRefsEg}
  }
</script>

<style scoped>
  hr {
    border: 2px red dashed;
  }
</style>
