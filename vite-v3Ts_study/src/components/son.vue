<script setup lang="ts">
import { useSlots } from 'vue';
const slots = useSlots()
console.log(slots, Object.keys(slots), Object.values(slots));
</script>

<template>
<div class="paper">
    <head>
        <slot name="header"></slot>
    </head>
    <body>
        <slot name="body" :mes="{name: 'zhl', age: 12}"></slot>
    </body>
</div>
</template>

<style scoped lang="scss">
    
</style>