<template>
  <section v-if="shows.length" class="mt-10">
    <h2 class="text-2xl font-bold text-primary mb-4">Related Shows</h2>
    <div class="flex space-x-4 overflow-x-auto pb-2">
      <ShowCard v-for="show in shows" :key="show.id" :show="show" />
    </div>
  </section>
</template>

<script setup lang="ts">
import ShowCard from './ShowCard.vue';
import type { Show } from '@/types/show';

defineProps<{ shows: Show[] }>();
</script> 