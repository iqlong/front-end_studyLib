<template>
  <div class="card" v-if="experience">
    <img :src="`/images/${experience.image}`" :alt="experience.name"/>
    <span class="card__text">
      {{ experience.name }}
    </span>
  </div>
</template>

<script setup>
// import {toRefs,reactive,toRaw,toRef} from 'vue'
// const props =  defineProps({
//     experience: Object
//  })
// //  const experience = toRefs(toRaw(props).experience)
//  const experience = toRefs(reactive(props.experience))

//  console.log(reactive({x:'g'}));
</script>

<script>
export default {
  props: {
    experience: {
      type: Object,
      required: true,
    },
  },
};  
</script>
