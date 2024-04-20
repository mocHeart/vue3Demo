<template>
  <div class="about">
    <h2>大家好，这里是About页面！！！</h2>
  </div>
</template>

<script setup lang="ts" name="About">
  import {onMounted,onUnmounted} from 'vue'

  console.log("About组件被创建了")

  onMounted(()=>{
    console.log('About组件挂载了')
  })
  onUnmounted(()=>{
    console.log('About组件卸载了')
  })
</script
</script>

<style scoped>
.about {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  color: rgb(85, 84, 84);
  font-size: 18px;
}
</style>