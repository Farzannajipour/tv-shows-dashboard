import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/vue';
import ShowDetails from '~/components/shows/ShowDetails.vue';

describe('ShowDetails', () => {
  const show = {
    id: 1,
    name: 'Friends',
    image: { original: 'friends.jpg' },
    rating: { average: 8.5 },
    summary: '<p>Six young (20-something) people from New York City...</p>',
  };

  it('renders the show image with correct alt and size', () => {
    render(ShowDetails, { props: { show } });
    const img = screen.getByAltText('Poster for Friends');
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute('src', 'friends.jpg');
    expect(img.className).toMatch(/max-w-xs/);
  });

  it('renders the show name and accessible rating', () => {
    render(ShowDetails, { props: { show } });
    expect(screen.getByText('Friends')).toBeInTheDocument();
    const rating = screen.getByLabelText('Average rating');
    expect(rating).toBeInTheDocument();
    expect(rating.textContent).toContain('8.5');
  });

  it('renders the summary with accessible label', () => {
    render(ShowDetails, { props: { show } });
    const summary = screen.getByLabelText('Show summary');
    expect(summary).toBeInTheDocument();
    expect(summary.innerHTML).toContain('Six young');
  });
});
