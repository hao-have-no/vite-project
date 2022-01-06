<template>
    <div>
        <label v-if="label">{{label}}</label>
    </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";

interface Props {
    label?: string,
    prop?: string
}
// 使用类型声明时的默认 props 值
withDefaults(defineProps<Props>(),{label:"",prop:""})
</script>

<style scoped>

</style>