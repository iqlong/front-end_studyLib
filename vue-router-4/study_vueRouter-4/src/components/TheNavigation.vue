<template>
  <div id="nav">
    <router-link to="/">Home</router-link>

    <!-- <router-link v-for="item in destinations" :key="item.id"
      :to="{
          name: 'destination.show',
          params: {id: item.id}
        }"
    >
      {{item.name}}
    </router-link> -->
    
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
      <div>{{ destination.name }}</div>
    </router-link>
  </div>
</template>
<script setup>
import sourceData from "@/data.json";

const destinations = sourceData.destinations;
</script>
