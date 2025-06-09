# Design System

This design system is built using Tailwind CSS and is intended to provide a consistent, scalable, and accessible foundation for the TV Shows Dashboard project.

## Typography Scale
- **sm**: 0.875rem (14px)
- **base**: 1rem (16px)
- **lg**: 1.125rem (18px)
- **xl**: 1.25rem (20px)
- **2xl**: 1.5rem (24px)
- **3xl**: 2rem (32px)

**Decision:** These sizes provide a clear hierarchy and are based on common web standards for readability and accessibility.

## Color Palette
- **Primary**: #2563eb (blue-600)
- **Primary Light**: #3b82f6 (blue-500)
- **Primary Dark**: #1d4ed8 (blue-700)
- **Secondary**: #f59e42 (orange-400)
- **Secondary Light**: #fbbf24 (orange-300)
- **Secondary Dark**: #d97706 (orange-600)
- **Background**: #f9fafb (gray-50)
- **Surface**: #fff
- **Error**: #ef4444 (red-500)

**Decision:** The palette is designed for clarity, accessibility, and visual appeal, with strong contrast for primary actions and a warm secondary accent.

## Spacing Scale
- 4px, 8px, 12px, 16px, 20px, 24px, 32px, 40px, 48px, 64px, 80px, 96px, 128px, 160px, 192px, 224px, 256px

**Decision:** Using multiples of 4px ensures a consistent and harmonious rhythm throughout the UI.

## Rounded Corners
- **sm**: 4px
- **default**: 8px
- **md**: 12px
- **lg**: 16px
- **xl**: 24px
- **full**: 9999px

**Decision:** Rounded corners soften the UI and improve approachability, with scalable options for different component needs.

## Shadows
- **sm**: Subtle shadow for small elements
- **default**: Standard card/button shadow
- **md, lg, xl**: Increasingly prominent for overlays and modals

**Decision:** Shadows are used to create depth and focus, while maintaining a clean, modern look.

## Borders
- **Widths**: 0, 1px (default), 2px, 4px, 8px

**Decision:** Borders are used sparingly for separation and emphasis, with a default of 1px for clarity.

---

## Detail Card Guidelines
- **Card Layout**: Use a `bg-surface` background, `rounded-xl` corners, and `shadow-xl` for detail cards. Add generous padding (`p-8`), and center the card with a max width (`max-w-2xl`).
- **Image**: Use `max-w-xs` or `md:w-60` for show images, with `rounded-lg`, `shadow-md`, and a subtle border for separation.
- **Typography**: 
  - Show name: `text-3xl`/`text-4xl`, `font-extrabold`, `text-primary`.
  - Section labels (e.g., "Average rating:", "Description:"): `text-lg`, `font-medium`, `text-gray-500`.
  - Rating value: `text-xl`, `font-bold`, `text-primary-dark`.
  - Description: `prose`, `text-gray-900`.
- **Spacing**: Use `gap-8` between image and content, and `gap-6` between content sections.
- **Semantic HTML**: Use `<section>`, `<header>`, `<h1>`, `<dl>`, `<dt>`, `<dd>`, and `<h2>` for structure and accessibility.
- **Accessibility**: All labels should be visible and have matching ARIA labels. Ensure color contrast meets WCAG AA.

---

All of these values are defined in `tailwind.config.ts` and can be used via Tailwind utility classes for rapid, consistent UI development. 