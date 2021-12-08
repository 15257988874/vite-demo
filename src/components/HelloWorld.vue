<script setup lang="ts">
import { reactive, ref } from 'vue'
// import SvgIcon from "./SvgIcon/SvgIcon.vue";
defineProps<{ msg: string }>()
const count = ref(0)
</script>

<template>
  <h1>{{ msg }}</h1>
  <SvgIcon name="vip" color="#0f0" />
  <a-rate />
  <div class="red">
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae natus veniam placeat
    consequatur illum quia officiis culpa ut tenetur dolorum tempore, corrupti aliquam voluptatibus
    voluptatem hic, laudantium eius soluta. Placeat.
  </div>
</template>

<style lang="less" scoped>
a {
  color: #42b983;
}
.red {
  color: @test-color;
}
label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>
