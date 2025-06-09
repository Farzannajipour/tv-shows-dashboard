<template>
  <NuxtLink :to="`/show/${show.id}`" class="block focus:outline-none" :aria-label="`Go to details for ${show.name}`">
    <article class="bg-surface dark:bg-surface-dark rounded-lg shadow-md overflow-hidden w-48 flex-shrink-0" tabindex="0" :aria-label="`Show card for ${show.name}`">
      <NuxtImg
        :src="show.image?.medium"
        :alt="show.image?.medium ? `Poster of ${show.name}` : `No poster available for ${show.name}`"
        class="w-full h-64 object-cover bg-gray-200"
        loading="lazy"
      />
      <div class="p-4">
        <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2 truncate">
          {{ show.name }}
        </h3>
        <div class="flex items-center text-sm text-gray-600 dark:text-gray-400" aria-label="Show rating">
          <span class="i-heroicons-star-20-solid text-yellow-400 mr-1" aria-hidden="true" />
          <span>{{ show.rating?.average || 'N/A' }}</span>
        </div>
      </div>
    </article>
  </NuxtLink>
</template>

<script setup lang="ts">
import type { Show } from '@/types/show';

defineProps<{ show: Show }>();
</script> 