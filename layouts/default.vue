<template>
  <div class="min-h-screen bg-white transition-colors duration-200">
    <header class="bg-white shadow-sm">
      <nav class="container mx-auto px-4 py-4 flex justify-between items-center">
        <NuxtLink to="/" class="text-2xl font-bold text-gray-900">
          TV Shows
        </NuxtLink>
      </nav>
    </header>
    <main class="container mx-auto px-4 py-8">
      <slot />
    </main>
  </div>
</template>