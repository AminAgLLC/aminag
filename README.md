# AminAg

[![Netlify Status](https://api.netlify.com/api/v1/badges/836abb4c-75ec-4bae-ace0-6af259203eeb/deploy-status)](https://app.netlify.com/projects/aminag/deploys)

## Project Overview

AminAg is a static marketing website for an agriculture-related business, built with plain HTML, CSS, and JavaScript. It includes a Mapbox-powered interactive map, multiple page templates, and a set of reusable frontend assets.

## Current Project Structure

- `index.html` — main landing page
- `about.html` — company overview page
- `properties.html` — property listing page
- `investment-approach.html` — investment approach page
- `features.geojson` — GeoJSON dataset used by the map feature
- `css/` — styling and layout files
  - `bootstrap.min.css`
  - `dashboard.css`
  - `lostyle.css`
  - `map.css`
  - `style-overrides.css`
  - `style.css`
- `js/` — client-side scripts
  - `bootstrap.min.js`
  - `jquery.min.js`
  - `map.js` — map initialization and interactive listing logic
  - `map.min.js`
  - `owl.carousel.min.js`
  - `responsive-tabs.js`
- `images/` — image assets used across pages
- `.gitignore` — ignores local environment files like `.env`
- `AminAg.code-workspace` — VS Code workspace configuration file

## What is included today

- Static page layout with Bootstrap and custom styles
- Client-side interactivity using `map.js`
- Mapbox integration for locations and map markers
- Netlify deployment support via badge and public site status
- Local `.env` support is excluded from git with `.gitignore`

## Upgrade Opportunities

1. Add a build step
   - Introduce `package.json` with a build script
   - Use a bundler such as Vite, Webpack, Rollup, or Parcel
   - Consider Astro for a content-first static site workflow with partial hydration
   - Enable environment variable injection for secrets like the Mapbox token

2. Remove hard-coded secrets from source code
   - Replace the Mapbox access token in `js/map.js` with a build-time or runtime injection pattern
   - Keep `.env` local and use Netlify environment variables for deployment

3. Consolidate and modernize frontend assets
   - Move CSS into a single compiled stylesheet
   - Convert legacy jQuery usage to vanilla JavaScript or modern frameworks
   - Replace `js/map.min.js` with a single source-driven build output

4. Improve performance and maintainability
   - Optimize and lazy-load images from `images/`
   - Minify CSS/JS in a build step
   - Add accessibility improvements and semantic HTML checks

5. Add project documentation
   - Document local development steps and deployment process
   - Add a `netlify.toml` or GitHub Actions workflow for builds
   - Track browser support and external API dependencies

## Notes

This repository currently appears to be a straightforward static site rather than a full application stack. A lightweight build system would provide the best path for secret management, asset optimization, and future maintainability.
