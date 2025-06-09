<template>
  <div class="min-h-screen bg-white transition-colors duration-200">
    <header class="bg-white shadow-sm">
      <nav class="container mx-auto px-4 py-4 flex justify-between items-center">
        <NuxtLink to="/" class="text-2xl font-bold text-gray-900">
          TV Shows
        </NuxtLink>
        <div class="flex items-center space-x-4">
          <button
            class="p-2 rounded-lg bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors"
            aria-label="Toggle theme"
          >
            <Icon name="heroicons:sun" class="w-6 h-6" />
          </button>
        </div>
      </nav>
    </header>
    <main class="container mx-auto px-4 py-8">
      <slot />
    </main>
  </div>
</template>

<script setup lang="ts">
// No dark mode related code needed
</script> 