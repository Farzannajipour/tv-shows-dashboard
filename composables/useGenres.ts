import { computed } from 'vue';

export function useGenres(shows: { genres?: string[] }[]) {
  return computed(() => {
    const genreMap: Record<string, typeof shows> = {};
    for (const show of shows) {
      if (show.genres) {
        for (const genre of show.genres) {
          if (!genreMap[genre]) genreMap[genre] = [];
          genreMap[genre].push(show);
        }
      }
    }
    return genreMap;
  });
}
