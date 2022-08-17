<template>
  <div>
    <section class="destination" v-if="destination">
      <h1>{{ destination.name }}</h1>
      <GoBack />
      <div class="destination-details">
        <img :src="`/images/${destination.image}`" :alt="destination.name" />
        <p>{{ destination.description }}</p>
      </div>
    </section>
    <section class="experiences" v-if="destination">
      <h2>Top Experience in {{ destination.name }}</h2>
      <div class="cards">
        <router-link
          v-for="experience in destination.experiences"
          :key="experience.slug"
          :to="{
            name: 'experience.show',
            params: { experienceSlug: experience.slug },
          }"
        >
          <ExperienceCard :experience="experience"> </ExperienceCard>
        </router-link>
      </div>
      <router-view >
      </router-view>
      
      <!-- router-view中的注释内容也会导致router-link的异常 -->
        <!-- <keep-alive>
          <component :is="Component"></component>
        </keep-alive>   -->
    </section>
  </div>
</template>

<script setup>
import sourceData from "@/data.json";
import { computed, watch, onBeforeMount, ref, defineProps } from "vue";
import { useRoute } from "vue-router";

import ExperienceCard from "@/components/ExperienceCard.vue";
import GoBack from "@/components/GoBack.vue";

// const route = useRoute();

// decouple
const { id: destinationId } = defineProps(["id", "slug", "experienceSlug"]);
// const destinationId = computed(() => {
//   return parseInt(route.params.id);
// });
const destination = computed(() => {
  return sourceData.destinations.find((item) => {
    return item.id === parseInt(destinationId);
  });
});

// get data from api
// let destination = ref('');
// const getData = async function () {
//   const sourceData = await fetch(
//     `https://travel-dummy-api.netlify.app/${route.params.slug}`
//   );
//   const res = await sourceData.json();
//   destination.value = res
// };

// onBeforeMount(async () => {
//   await getData();
//   watch(() => route.params, getData);
// });
</script>

<script>
export default {};
</script>
