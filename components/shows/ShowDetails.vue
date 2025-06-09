<template>
  <section class="flex justify-center py-10 bg-background">
    <article
      v-if="show"
      class="bg-surface rounded-xl shadow-xl p-8 max-w-2xl w-full flex flex-col md:flex-row gap-8 items-start"
      :aria-label="`Show details for ${show.name}`"
    >
      <img
        :src="show.image?.original || '/placeholder.png'"
        :alt="`Poster for ${show.name}`"
        class="w-full max-w-xs md:w-60 rounded-lg shadow-md mx-auto md:mx-0 border border-gray-200"
      />
      <div class="flex-1 flex flex-col gap-6">
        <header>
          <h1 class="text-3xl md:text-4xl font-extrabold text-primary mb-2 leading-tight">{{ show.name }}</h1>
        </header>
        <dl class="flex flex-col gap-2">
          <div class="flex items-center gap-2">
            <dt class="text-lg font-medium text-gray-500">Average rating:</dt>
            <dd class="flex items-center text-xl font-bold text-primary-dark" aria-label="Average rating">
              <span>{{ show.rating?.average || 'N/A' }}</span>
            </dd>
          </div>
        </dl>
        <div>
          <h2 class="text-lg font-medium text-gray-500 mb-1">Description:</h2>
          <div class="prose max-w-none text-gray-900" v-html="show.summary" aria-label="Show summary"></div>
        </div>
      </div>
    </article>
  </section>
</template>

<script setup lang="ts">
import type { Show } from '@/types/show';

defineProps<{ show: Show | null }>();
</script> 