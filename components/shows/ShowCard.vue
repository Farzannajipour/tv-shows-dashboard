<template>
  <div class="bg-surface dark:bg-surface-dark rounded-lg shadow-md overflow-hidden w-48 flex-shrink-0">
    <NuxtImg
      :src="show.image?.medium"
      :alt="show.name"
      class="w-full h-64 object-cover bg-gray-200"
      loading="lazy"
    />
    <div class="p-4">
      <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2 truncate">
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
  image?: { medium: string };
  rating?: { average: number };
}

defineProps<{ show: Show }>();
</script> 