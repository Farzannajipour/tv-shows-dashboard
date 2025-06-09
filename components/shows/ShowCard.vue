<template>
  <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
    <NuxtImg
      :src="show.image?.medium"
      :alt="show.name"
      class="w-full h-48 object-cover"
      loading="lazy"
    />
    <div class="p-4">
      <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">
        {{ show.name }}
      </h3>
      <div class="flex items-center text-sm text-gray-600 dark:text-gray-400">
        <span class="i-heroicons-star-20-solid text-yellow-400 mr-1" />
        <span>{{ show.rating?.average || 'N/A' }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Show {
  id: number;
  name: string;
  image?: {
    medium: string;
  };
  rating?: {
    average: number;
  };
}

defineProps<{
  show: Show;
}>();
</script> 