# TV Shows Dashboard

A modern, accessible dashboard to browse and discover TV shows by genre, built with Nuxt 3 and Tailwind CSS.

## Stack
- Nuxt 3 (Vite, SSR)
- Tailwind CSS
- TypeScript
- Nuxt Image
- Nuxt SEO (useHead)
- Vitest (unit testing)
- Vercel (deployment)
- vite-plugin-visualizer (bundle analysis)

## Automated CI/CD
Automated tests and linting are run on every push and pull request using GitHub Actions. This ensures code quality and prevents regressions before merging changes.

## Getting Started

### Prerequisites
- Node.js 18+
- npm 9+

### Install & Run Locally
```bash
git clone https://github.com/Farzannajipour/tv-shows-dashboard.git
cd tv-shows-dashboard
npm install
npm run dev
```

## API Used
- [TVMaze API](https://www.tvmaze.com/api)
- Shows are fetched from the TVMaze API using pagination (`/shows?page=N`). Users can navigate between pages to see more shows.
- Genres are extracted and grouped client-side, as the API does not provide genre endpoints
- Limitations: No direct genre endpoint, so grouping and sorting are handled in the app

## Design & Architecture
- **Component-driven**: UI is built from reusable components (`ShowCard`, `GenreRow`, `BaseButton`, etc.)
- **Composables**: Data fetching, genre grouping, search, and dark mode logic are encapsulated in composables
- **Tailwind Design System**: Custom color palette, spacing, typography, and shadows for consistency
- **Error Boundaries**: Global error handler with retry UI
- **Skeleton Loaders**: For smooth loading states
- **SEO**: Dynamic metadata per page with `useHead`
- **Accessibility**: Keyboard navigation, semantic HTML, ARIA labels, color contrast, and screen reader support

## Features
- Browse TV shows grouped by genre
- Shows sorted by rating within each genre
- Infinite scroll (pagination-ready)
- Search by show name
- Show details with schedule, genres, and summary
- Responsive and mobile-friendly
- Full accessibility (a11y) support
- SEO-optimized (dynamic title, description, og:image, canonical)

## Testing

### Unit Tests
Run all unit tests with:
```bash
npm run test
```
(Vitest is used for fast, component-level testing.)

## Quality Assurance
- The application runs without console errors or warnings.
- All code follows SOLID and clean code principles.
- The UI is fully responsive and mobile-friendly.
- Accessibility (a11y) is a priority throughout the app.

## Extra Features
- Loading skeletons for smooth UX
- Error boundaries for robust error handling
- Modern card hover animations
- Fully accessible search and navigation

## Live Demo
[https://tv-shows-dashboard-git-main-farzannajipours-projects.vercel.app](https://tv-shows-dashboard-git-main-farzannajipours-projects.vercel.app)

## Folder Structure
```
├── components/
│   ├── shows/         # ShowCard, GenreRow, ShowDetails
│   └── ui/            # BaseButton, BaseCard, SkeletonLoader, ErrorFallback
├── composables/       # useFetchShows, useGenres, useSearch
├── pages/             # index.vue, show/[id].vue
├── public/            # Static assets
├── styles/            # Tailwind config, design-system.md
├── tests/             # Vitest unit tests
├── nuxt.config.*      # Nuxt and Vite config
└── vercel.json        # Vercel deployment config
```

## Bonus Tools
- **vite-plugin-visualizer**: Analyze bundle size and dependencies
- **useHead**: Dynamic SEO metadata
- **Nuxt composables**: Clean, reusable logic for data and UI state

---

Built for performance, accessibility, and developer experience.
