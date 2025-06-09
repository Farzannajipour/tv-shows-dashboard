<template>
  <section class="mb-8" aria-label="Genre row: {{ genre }}">
    <h2 class="text-xl font-bold mb-4 text-primary">{{ genre }}</h2>
    <div class="flex space-x-4 overflow-x-auto pb-2" tabindex="0" aria-label="Shows in genre {{ genre }}">
      <template v-if="loading">
        <SkeletonLoader v-for="n in 5" :key="n" width="12rem" height="16rem" rounded />
      </template>
      <template v-else>
        <ShowCard v-for="show in shows" :key="show.id" :show="show" />
      </template>
    </div>
  </section>
</template>

<script setup lang="ts">
import ShowCard from './ShowCard.vue';
import SkeletonLoader from '../ui/SkeletonLoader.vue';

interface Show {
  id: number;
  name: string;
  image?: { medium: string };
  rating?: { average: number };
}

defineProps<{ genre: string; shows: Show[]; loading?: boolean }>();
</script> 