<template lang="">
  <h1>我是B组件</h1>
  <p>来自A的信息：{{ msgFormA }}</p>
  <a-button :type="defaultType" @click="sendMsg"> 向A发送信息 </a-button>
</template>
<script setup lang="ts">
import eventBus from '@/utils/eventBus'
import { ref } from 'vue'
const defaultType = ref('primary')
const msgFormA = ref('初始信息B')
eventBus.on('msg', (type) => {
  defaultType.value = type
  msgFormA.value = type
  console.log('收到来自A的信息', type)
})

const sendMsg = () => {
  eventBus.emit('reverseMsg', 'ghost')
}
</script>
<style lang=""></style>
