<script setup lang="ts">
import { ref, onMounted, watch } from 'vue';
import { useRoute } from 'vue-router';
import SkeletonLoader from '@/components/ui/SkeletonLoader.vue';
import ErrorFallback from '@/components/ui/ErrorFallback.vue';
import ShowDetails from '@/components/shows/ShowDetails.vue';

const route = useRoute();
const showId = route.params.id;

const show = ref<any>(null);
const isLoading = ref(true);
const error = ref<unknown>(null);

const fetchShow = async () => {
  isLoading.value = true;
  try {
    const res = await fetch(`https://api.tvmaze.com/shows/${showId}`);
    if (!res.ok) throw new Error('Failed to fetch show');
    show.value = await res.json();
  } catch (err) {
    error.value = err;
  } finally {
    isLoading.value = false;
  }
};

onMounted(fetchShow);

watch(show, (val) => {
  if (val) {
    useHead({
      title: val.name || 'Show Details | TV Shows Dashboard',
      meta: [
        { name: 'description', content: val.summary?.replace(/<[^>]+>/g, '') || 'Detailed information about the selected TV show.' },
        { property: 'og:title', content: val.name || 'Show Details | TV Shows Dashboard' },
        { property: 'og:image', content: val.image?.original || '/cover.png' },
      ],
      link: [{ rel: 'canonical', href: `https://tv-shows-dashboard.vercel.app/show/${showId}` }],
    });
  }
});
</script>

<template>
  <div>
    <div class="mb-8">
      <NuxtLink to="/" class="inline-flex items-center text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
        <span class="i-heroicons-arrow-left-20-solid mr-2" />
        Back to Shows
      </NuxtLink>
    </div>

    <SkeletonLoader v-if="isLoading" />
    <ErrorFallback v-else-if="error" />
    <ShowDetails v-else :show="show" />
  </div>
</template>
