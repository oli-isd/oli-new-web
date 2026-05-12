# Ovialand Website

A website for Ovialand, featuring the main corporate homepage, company and investor pages, community listings, news, careers, contact flows, and an OLI Ambassadors page.

## Tech Stack

- React 19
- TypeScript
- Vite
- Tailwind CSS v4
- React Router
- Framer Motion
- EmailJS

## Key Features

- Responsive marketing website with a polished luxury-inspired UI
- Multi-page routing for company, business, communities, investors, careers, socials, and contact pages
- Interactive communities section with South Luzon and Central Luzon filtering
- Dedicated OLI Ambassadors page with profile cards and modal detail views
- Motion and transition effects powered by Framer Motion
- Tailwind-based design system with reusable sections and cards

## Project Structure

- `App.tsx` - application routes and global layout helpers
- `components/` - reusable UI sections and cards
- `pages/` - page-level views for each route
- `constants.tsx` - development data, navigation links, awards, and content sources
- `public/` - static assets and images

## Available Scripts

- `npm run dev` - start the Vite development server
- `npm run build` - build the project for production
- `npm run preview` - preview the production build locally

## Getting Started

1. Install dependencies.

   ```bash
   npm install
   ```

2. Start the development server.

   ```bash
   npm run dev
   ```

3. Open the app in your browser using the local URL shown by Vite.

## Main Routes

- `/` - Home page
- `/company` - Company overview
- `/company/csr` - CSR page
- `/business` - Business overview
- `/business/houseasy` - Houseasy page
- `/business/housebuying` - House buying page
- `/business/homebuyersportal` - Homebuyers portal
- `/communities` - Communities page
- `/investors` - Investors page
- `/news` - News page
- `/careers` - Careers page
- `/socials` - Socials page
- `/contact` - Contact page
- `/Ambassadors` - OLI Ambassadors page

## Notes

- The site uses lazy-loaded page components for faster initial rendering.
- Community and ambassador data are defined in `constants.tsx` and component files.
- Static images are served from the `public/` directory.

## License

Internal project for Ovialand / OLI branding and website presentation. 