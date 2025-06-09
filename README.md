# TV Shows Dashboard

A modern TV shows dashboard built with Nuxt 3, TypeScript, and Tailwind CSS. This application allows users to browse TV shows by genre, view show details, and search for shows.

## Features

- Browse TV shows by genre
- View detailed information about each show
- Search functionality
- Dark mode support
- Responsive design
- TypeScript support
- Modern UI with Tailwind CSS

## Tech Stack

- Nuxt 3
- TypeScript
- Tailwind CSS
- ESLint (Airbnb config)
- Prettier
- @nuxt/image
- @nuxtjs/seo

## Prerequisites

- Node.js 18.x or later
- npm 9.x or later

## Setup

1. Clone the repository:
```bash
git clone <repository-url>
cd tv-shows-dashboard
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Build for production:
```bash
npm run build
```

## Project Structure

```
├── components/
│   ├── ui/          # Reusable UI components
│   └── shows/       # Show-related components
├── pages/
│   ├── index.vue    # Homepage
│   └── show/        # Show details pages
├── composables/     # Reusable composition functions
├── utils/          # Utility functions
├── styles/         # Global styles
├── tests/          # Unit tests
└── public/         # Static assets
```

## Development

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run generate` - Generate static site
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier

## Testing

Run the test suite:
```bash
npm run test
```

## License

MIT
