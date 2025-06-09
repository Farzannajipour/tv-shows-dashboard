<template>
  <article v-if="show" class="bg-surface rounded-lg shadow-lg p-6 max-w-3xl mx-auto" :aria-label="`Show details for ${show.name}`">
    <div class="flex flex-col md:flex-row gap-6">
      <img
        :src="show.image?.original || '/placeholder.png'"
        :alt="`Poster for ${show.name}`"
        class="w-full md:w-1/3 rounded-lg shadow-md"
      />
      <div class="flex-1">
        <h1 class="text-3xl font-bold text-gray-900 mb-4">{{ show.name }}</h1>
        <div class="flex items-center text-gray-600 mb-4">
          <Icon name="heroicons:star" class="w-5 h-5 text-yellow-400 mr-1" />
          <span>{{ show.rating?.average || 'N/A' }}</span>
        </div>
        <div class="prose max-w-none" v-html="show.summary" aria-label="Show summary"></div>
      </div>
    </div>
  </article>
</template>

<script setup lang="ts">
import type { Show } from '@/types/show';

defineProps<{ show: Show | null }>();
</script> 