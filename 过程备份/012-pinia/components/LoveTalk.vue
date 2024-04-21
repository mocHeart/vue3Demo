<template>
  <div class="talk">
    <button @click="getLoveTalk">获取一句土味情话</button>
    <ul>
      <li v-for="talk in talkStore.talkList" :key="talk.id">{{talk.title}}</li>
    </ul>
  </div>
</template>

<script setup lang="ts" name="LoveTalk">
  import {reactive} from 'vue'
  import axios from "axios";
  import {nanoid} from 'nanoid'
  import {useTalkStore} from '@/store/loveTalk'

  // 数据
  const talkStore = useTalkStore()

  // 方法
  async function getLoveTalk(){
    talkStore.getATalk()
  }

  // $subscribe：监听数据
  talkStore.$subscribe((mutate,state)=>{
    console.log('talkStore里面保存的数据发生了变化',mutate,state)
    localStorage.setItem('talkList',JSON.stringify(state.talkList))
  })
</script>

<style scoped>
  .talk {
    background-color: orange;
    padding: 10px;
    border-radius: 10px;
    box-shadow: 0 0 10px;
  }
</style>