<template>
  <div class="home">
    <h1>All Destinations</h1>
    <div class="test">
      <button @click="$router.addRoute({ path: '/dog', component: () => import('@/views/test.vue') })">
        addDogRoute
      </button>
      <router-link to="/dog">to dog router</router-link>
      <router-view></router-view>

      <button @click="routerTriggerError">routerTriggerError</button>
    </div>
    <div class="destinations">
      <router-link
        v-for="destination in destinations"
        :key="destination.id"
        :to="{
          name: 'destination.show',
          params: {
            id: destination.id,
            slug: destination.slug,
          },
        }"
      >
        <h2>{{ destination.name }}</h2>
        <img :src="`/images/${destination.image}`" alt="destination.name" />
      </router-link>
    </div>
  </div>
</template>

<script setup>
import sourceData from "@/data.json";
import {
  isNavigationFailure,
  NavigationFailureType,
  useRouter,
} from "vue-router";

const router = useRouter();
const destinations = sourceData.destinations;
const routerTriggerError = async function () {
  let routerError = await router.push("/");
  if (isNavigationFailure(routerError, NavigationFailureType.duplicated)) {
    console.log(routerError.to.params);
    console.log(routerError.from);
  }
};
</script>
