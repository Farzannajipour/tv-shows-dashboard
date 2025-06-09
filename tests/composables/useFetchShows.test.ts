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

  it('fetches and sets shows', async () => {
    (fetch as any).mockResolvedValueOnce({
      ok: true,
      json: async () => mockShows,
    });
    const { shows, isLoading, error, loadShows } = useFetchShows();
    await loadShows();
    expect(shows.value).toHaveLength(2);
    expect(error.value).toBeNull();
    expect(isLoading.value).toBe(false);
  });

  it('sets error if fetch fails', async () => {
    (fetch as any).mockResolvedValueOnce({ ok: false });
    const { shows, isLoading, error, loadShows } = useFetchShows();
    await loadShows();
    expect(error.value).toBeInstanceOf(Error);
    expect(isLoading.value).toBe(false);
  });
});
