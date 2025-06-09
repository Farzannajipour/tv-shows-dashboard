import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/vue';
import ShowCard from '~/components/shows/ShowCard.vue';

describe('ShowCard', () => {
  it('renders show name, rating, and alt text', () => {
    const show = {
      id: 1,
      name: 'Test Show',
      rating: { average: 8.5 },
      image: { medium: 'test.jpg' },
    };

    render(ShowCard, {
      props: { show },
    });

    expect(screen.getByText('Test Show')).toBeInTheDocument();
    expect(screen.getByText('8.5')).toBeInTheDocument();
    const img = screen.getByAltText('Poster for Test Show');
    expect(img).toBeInTheDocument();
  });
});
