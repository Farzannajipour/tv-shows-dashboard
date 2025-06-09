<template>
  <div class="animate-pulse" role="status" aria-label="Loading...">
    <div class="space-y-4">
      <div class="h-4 bg-gray-200 rounded w-3/4"></div>
      <div class="h-4 bg-gray-200 rounded"></div>
      <div class="h-4 bg-gray-200 rounded w-5/6"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
withDefaults(defineProps<{
  width?: string
  height?: string
  rounded?: boolean
  count?: number
}>(), {
  count: 5,
});
</script> 