import { describe, it, expect, vi, beforeEach } from 'vitest';
import { useFetchShows } from '@/composables/useFetchShows';

const mockShows = [
  { id: 1, name: 'Show 1' },
  { id: 2, name: 'Show 2' },
];

global.fetch = vi.fn();

describe('useFetchShows', () => {
  beforeEach(() => {
    (fetch as any).mockClear();
  });

  it('fetches and appends shows', async () => {
    (fetch as any).mockResolvedValueOnce({
      ok: true,
      json: async () => mockShows,
    });
    const { shows, fetchShows, hasMore } = useFetchShows();
    await fetchShows();
    expect(shows.value).toHaveLength(2);
    expect(hasMore.value).toBe(true);
  });

  it('sets hasMore to false if no data', async () => {
    (fetch as any).mockResolvedValueOnce({
      ok: true,
      json: async () => [],
    });
    const { fetchShows, hasMore } = useFetchShows();
    await fetchShows();
    expect(hasMore.value).toBe(false);
  });

  it('sets error if fetch fails', async () => {
    (fetch as any).mockResolvedValueOnce({ ok: false });
    const { fetchShows, error } = useFetchShows();
    await fetchShows();
    expect(error.value).toBeInstanceOf(Error);
  });
});
