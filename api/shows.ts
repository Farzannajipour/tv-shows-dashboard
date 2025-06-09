import { TVMAZE_API_BASE } from '@/utils/constants';
import type { Show } from '@/types/show';

export async function fetchShows(page = 1): Promise<Show[]> {
  const res = await fetch(`${TVMAZE_API_BASE}/shows?page=${page}`);
  if (!res.ok) throw new Error('Failed to fetch shows');
  return res.json();
}

export async function fetchShowById(id: string | number): Promise<Show> {
  const res = await fetch(`${TVMAZE_API_BASE}/shows/${id}`);
  if (!res.ok) throw new Error('Failed to fetch show');
  return res.json();
}
