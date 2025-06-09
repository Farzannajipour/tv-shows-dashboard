<template>
  <div>
    <div class="mb-8">
      <NuxtLink
        to="/"
        class="inline-flex items-center text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
      >
        <span class="i-heroicons-arrow-left-20-solid mr-2" />
        Back to Shows
      </NuxtLink>
    </div>
    <!-- Show details will be added here -->
  </div>
</template>

<script setup lang="ts">
const route = useRoute();
const showId = route.params.id;
</script> 