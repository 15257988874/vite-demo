<template lang="">
  <div>
    <h1>mainStore</h1>
    <p>main msg: {{ mainStore.msg }}</p>
    <h1>userStore</h1>
    <p>name: {{ name }}</p>
    <p>nameLength: {{ nameLength }}</p>
    <p>phone: {{ phone }}</p>
    <a-button type="primary" @click="handleChangeName"> 改变store用户名 </a-button>
  </div>
</template>
<script setup lang="ts">
import { toRefs } from 'vue'
import { useMainStore } from '../store/main'
import { useUserStore } from '../store/user'
const mainStore = useMainStore()
const userStore = useUserStore()
const { name, phone, nameLength } = toRefs(userStore)

const handleChangeName = () => {
  userStore.changeName(`jack${Math.random()}`)
}
</script>
<style lang=""></style>
