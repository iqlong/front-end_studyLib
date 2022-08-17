<template>
  <h1>Hawaii</h1>
  {{refPrimary}} &nbsp;&nbsp;  <button @click="refPrimary++">refPrimary add</button>
  <br>
  {{count}} &nbsp;&nbsp;  <button @click="count++">refReference add</button>
  <br>
  {{refReference.count}} &nbsp;&nbsp;  <button @click="refReference.count++">destructCount add</button>
</template>

<script setup>
import { ref, reactive, toRef, toRefs} from 'vue'
// multiply reactive functino :
// ref   reactive   toRef   toRefs
// 是否可以结构且不失去响应性，让何种东西变成相应性
const refPrimary = ref(0)
const refReference = ref({count: 0})

// 结构就是要用 toRefs & reactive
const { count } = toRefs(reactive({ count: 0}))
// const { count: destructCount } = refReference
</script>
