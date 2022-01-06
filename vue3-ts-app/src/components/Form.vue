<template>
    <form>
        <slot></slot>
    </form>
</template>

<script setup lang="ts">
import { Rules } from 'async-validator';
import { PropType , defineExpose, defineProps } from 'vue';
// vue3.2 script setup
// 定义输入属性
defineProps({
    model: { type: Object, required: true},
    rules: { type: Object as PropType<Rules>}
})

// ding yi shu chu
function validate(){
    console.log('validate');
}

//bao lou shu xing
defineExpose({
    validate
})
</script>

<style scoped>

</style>
