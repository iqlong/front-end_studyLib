<script setup lang="ts">
import Son from './son.vue'
</script>

<template>
<Son>
    <template #header>
        <div class="header">我是张慧龙的头</div>
    </template>
    <template #body="scopedSlot">
        <div class="body">
            <ul v-for="(val, key) in scopedSlot.mes">
                <li>{{key}} --- {{val}}</li>
            </ul>
        </div>
    </template>
</Son>
</template>

<style scoped lang="scss">

</style>