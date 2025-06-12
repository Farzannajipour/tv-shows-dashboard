<template>
  <NuxtLink :to="`/show/${show.id}`" class="block focus:outline-none" :aria-label="`Go to details for ${show.name}`">
    <article
      class="show-card bg-surface rounded-lg shadow-md overflow-hidden w-48 flex-shrink-0 transition-transform transition-shadow duration-200 ease-in-out hover:scale-105 hover:shadow-xl hover:-translate-y-1"
      tabindex="0"
      :aria-label="`Show card for ${show.name}`"
    >
      <img
        :src="show.image?.medium || '/placeholder.png'"
        :alt="`Poster for ${show.name}`"
        class="w-full h-64 object-cover"
      />
      <div class="p-4">
        <h3 class="text-lg font-semibold text-gray-900 mb-2 truncate">
          {{ show.name }}
        </h3>
        <div class="flex items-center text-sm text-gray-600" aria-label="Show rating">
          {{ show.rating?.average || 'N/A' }}
        </div>
      </div>
    </article>
  </NuxtLink>
</template>

<script setup lang="ts">
import type { Show } from '@/types/show';

defineProps<{ show: Show }>();
</script>

<style scoped>
.show-card {
  /* This class is for possible future extension or reuse */
}
</style> 