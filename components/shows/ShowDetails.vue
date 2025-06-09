<template>
  <article v-if="show" class="bg-surface dark:bg-surface-dark rounded-lg shadow-lg p-6 max-w-3xl mx-auto" :aria-label="`Show details for ${show.name}`">
    <div class="flex flex-col md:flex-row gap-6">
      <NuxtImg
        :src="show.image?.original"
        :alt="show.image?.original ? `Poster of ${show.name}` : `No poster available for ${show.name}`"
        class="w-full md:w-64 h-80 object-cover rounded-lg bg-gray-200"
        loading="lazy"
      />
      <div class="flex-1">
        <h1 class="text-2xl font-bold mb-2 text-primary">{{ show.name }}</h1>
        <div class="flex items-center mb-2" aria-label="Show rating">
          <span class="i-heroicons-star-20-solid text-yellow-400 mr-1" aria-hidden="true" />
          <span class="text-lg">{{ show.rating?.average || 'N/A' }}</span>
        </div>
        <div class="mb-2">
          <span class="font-semibold">Genres:</span>
          <span>{{ show.genres?.join(', ') || 'N/A' }}</span>
        </div>
        <div class="mb-2">
          <span class="font-semibold">Schedule:</span>
          <span>{{ show.schedule?.days?.join(', ') || 'N/A' }} {{ show.schedule?.time ? 'at ' + show.schedule.time : '' }}</span>
        </div>
        <div class="prose dark:prose-invert max-w-none" v-html="show.summary" aria-label="Show summary"></div>
      </div>
    </div>
  </article>
</template>

<script setup lang="ts">
import type { Show } from '@/types/show';

defineProps<{ show: Show | null }>();
</script> 