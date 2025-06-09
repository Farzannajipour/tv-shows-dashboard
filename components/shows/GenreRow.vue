<template>
  <section class="mb-8">
    <h2 class="text-xl font-bold mb-4 text-primary">{{ genre }}</h2>
    <div class="flex space-x-4 overflow-x-auto pb-2">
      <ShowCard v-for="show in shows" :key="show.id" :show="show" />
    </div>
  </section>
</template>

<script setup lang="ts">
import ShowCard from './ShowCard.vue';

interface Show {
  id: number;
  name: string;
  image?: { medium: string };
  rating?: { average: number };
}

defineProps<{ genre: string; shows: Show[] }>();
</script> 