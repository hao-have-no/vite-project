<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import HelloWorld from './components/HelloWorld.vue'
import KForm from './components/Form.vue'
import KFormItem from './components/FormItem.vue'
import { reactive } from 'vue';

const model = reactive({
  userName:'aaa'
})
</script>

<template>
  <KForm :model="model">
    <KFormItem label="ynghu" prop="userName"></KFormItem>
  </Kform>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
