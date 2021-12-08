<template>
  <h1>我是A组件</h1>
  <a-button class="mb-8" :type="defaultType" danger @click="sendMsg"> 向B组件发送信息 </a-button>
  <a-button class="ml-4" type="primary" @click="addCount"> +1 </a-button>
  <p>counter: {{ counter }}</p>
</template>
<script setup lang="ts">
import eventBus from '@/utils/eventBus'
import { reactive, ref, watch } from 'vue'
const defaultType = ref('primary')
const counter = ref(0)
const addCount = () => {
  counter.value++
}

eventBus.on('reverseMsg', (type) => {
  defaultType.value = type
  console.log('收到来自B的信息', type)
})
const sendMsg = () => eventBus.emit('msg', 'text')
</script>
<style></style>
