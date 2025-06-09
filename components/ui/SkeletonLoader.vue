<template>
  <div :aria-busy="true">
    <div
      v-for="n in count"
      :key="n"
      :class="[
        'animate-pulse bg-gray-200 dark:bg-gray-700 mb-2',
        rounded ? 'rounded' : '',
      ]"
      :style="{ width, height }"
      role="status"
      aria-label="Loading..."
    />
  </div>
</template>

<script setup lang="ts">
defineProps<{
  width?: string
  height?: string
  rounded?: boolean
  count?: number
}>();
</script> 