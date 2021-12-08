<template>
  <div>404</div>
  <a-button type="primary" @click="goHome">回到首页</a-button>
</template>
<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()
console.log(route.path)
const goHome = () => router.push({ path: '/' })
</script>
<style lang=""></style>
