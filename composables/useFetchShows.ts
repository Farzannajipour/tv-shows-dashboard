import { ref, onMounted } from 'vue';

export function useFetchShows() {
  const shows = ref([]);
  const isLoading = ref(true);
  const error = ref<unknown>(null);

  const fetchShows = async () => {
    isLoading.value = true;
    try {
      const res = await fetch('https://api.tvmaze.com/shows?page=1');
      if (!res.ok) throw new Error('Failed to fetch shows');
      shows.value = await res.json();
    } catch (err) {
      error.value = err;
    } finally {
      isLoading.value = false;
    }
  };

  onMounted(fetchShows);

  return { shows, isLoading, error };
}
