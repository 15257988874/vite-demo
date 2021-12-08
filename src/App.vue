<script setup lang="ts">
console.log(import.meta.env)
</script>
<template>
  <div class="container flex flex-col items-center p-8 mx-auto">
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
