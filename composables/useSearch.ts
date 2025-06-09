import { ref } from 'vue';

export function useSearch() {
  const results = ref([]);
  const loading = ref(false);
  const error = ref(null);

  const search = async (query: string) => {
    if (!query) {
      results.value = [];
      return;
    }
    loading.value = true;
    try {
      const res = await fetch(`https://api.tvmaze.com/search/shows?q=${encodeURIComponent(query)}`);
      if (!res.ok) throw new Error('Failed to search shows');
      const data = await res.json();
      results.value = data.map((item: any) => item.show);
    } catch (e) {
      error.value = e;
    } finally {
      loading.value = false;
    }
  };

  return { results, loading, error, search };
}
