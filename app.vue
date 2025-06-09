<template>
  <NuxtLayout>
    <NuxtErrorBoundary>
      <NuxtPage />
      <template #error="{ error, resetError }">
        <ErrorFallback @reset="resetError" />
      </template>
    </NuxtErrorBoundary>
  </NuxtLayout>
</template>

<script setup>
import ErrorFallback from '~/components/ui/ErrorFallback.vue';
</script>
