<template>
    
</template>
<script lang="ts">
import { defineEmits } from "vue";

// tong guo fan xing xian zhi 
const emit = defineEmits<{
    (e:"update:model-value",value: string):void
}>()

emit()
</script>