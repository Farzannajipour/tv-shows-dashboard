import { ref } from 'vue';

const API_URL = 'https://api.tvmaze.com/shows';

export function useFetchShows() {
  const shows = ref([]);
  const loading = ref(false);
  const error = ref(null);
  const page = ref(0);
  const hasMore = ref(true);

  const fetchShows = async () => {
    if (!hasMore.value) return;
    loading.value = true;
    try {
      const res = await fetch(`${API_URL}?page=${page.value}`);
      if (!res.ok) throw new Error('Failed to fetch shows');
      const data = await res.json();
      if (data.length === 0) {
        hasMore.value = false;
      } else {
        shows.value.push(...data);
        page.value++;
      }
    } catch (e) {
      error.value = e;
    } finally {
      loading.value = false;
    }
  };

  return { shows, loading, error, fetchShows, hasMore };
}
