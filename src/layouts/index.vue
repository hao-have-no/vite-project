<template>
  <div class="app-wrapper">
    <!-- 侧边栏 -->
    {{state.isShow}}
    <sidebar v-if="state.isShow" class="sidebar-container"></sidebar>
    <!-- 内容容器 -->
    <div class="main-container">
    <!-- 顶部导航栏 -->
    <navbar v-if="state.isShow"/>
    <!-- 内容区 -->
    <app-main />
    </div>
  </div>
</template>

<script setup>
import AppMain from "./components/AppMain.vue";
import Navbar from "./components/Navbar.vue";
import Sidebar from "./components/Sidebar/index.vue";
import {reactive,watch} from 'vue';
import store from "/@/store";

let state = reactive({isShow:!!store.state.token});
watch(()=>store.state.token,()=>{
  console.log(store.state.token);
    if (store.state.token){
      state.isShow = true
    }
})

</script>

<style lang="scss" scoped>
@import "../styles/mixin.scss";

.app-wrapper {
  @include clearfix;
  position: relative;
  height: 100%;
  width: 100%;
}
</style>
