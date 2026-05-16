# Kavod Engineering Services

## Overview

This repository is a marketing and lead-generation website built with `Next.js 15`, `TypeScript`, and `Tailwind CSS v4`. It includes a home page, services page, contact form, API route, and reusable UI components.

## Tech Stack

- `Next.js 15` with App Router
- `TypeScript`
- `Tailwind CSS v4`
- `react-hook-form` + `zod` for form validation
- `Swiper` for the homepage carousel
- `sonner` for toast notifications
- `@radix-ui/react-select` for custom select controls
- `@mui/material` for the loading spinner

## Project Structure

- `src/app/`
  - `layout.tsx` — global layout and metadata
  - `page.tsx` — root route redirecting to `/home`
  - `home/page.tsx` — home page
  - `services/page.tsx` — services page
  - `contact/page.tsx` — contact page
  - `api/consultation/route.ts` — API route for contact form submissions
- `src/components/layout/` — site header, footer, navbar, and top banner
- `src/components/shared/` — shared UI components like buttons, headings, overlays, and loading state
- `src/components/ui/` — form primitives and low-level input controls
- `src/content/` — static content for the homepage industries and services sections
- `src/schema/` — validation schema for the contact form
- `src/lib/` — utility helpers
- `src/styles/app.css` — global styling and theme variables

## Pages and Components

### Root and Layout

- `src/app/layout.tsx`
  - Defines page metadata, favicon, open graph settings
  - Renders `ContactBanner`, `Navbar`, `Footer`, and `Toaster`
- `src/app/page.tsx`
  - Redirects `"/"` to `/home`

### Home Page

- `src/app/home/page.tsx`
  - Composes the home page with:
    - `HomeHeader`
    - `AboutUs`
    - `IndustriesServed`
    - `OurServices`
- `src/app/home/components/`
  - `homeHeader.tsx` — hero section with carousel and overlay
  - `backgroundCarouselWithControls.tsx` — Swiper carousel implementation
  - `carouselControls.tsx` — previous/next buttons for the carousel
  - `homeHeaderText.tsx` — hero text
  - `aboutUs.tsx` — about section with mission and vision cards
  - `visionMissionText.tsx` — reusable mission/vision block
  - `industriesServed.tsx` / `industriesGrid.tsx` / `industriesCard.tsx`
  - `ourServices.tsx` / `servicesCard.tsx` / `valuePropositionCard.tsx`

### Services Page

- `src/app/services/page.tsx`
  - Displays the services page header and a list of cards built from `ServicesContent`
- `src/app/services/components/`
  - `serviceHeader.tsx` — services page hero header
  - `serviceCard.tsx` — alternating layout service cards

### Contact Page

- `src/app/contact/page.tsx`
  - Renders `ContactHeader` and `ContactForm`
- `src/app/contact/components/contactForm.tsx`
  - `react-hook-form` + `zod` client form
  - Submits POST data to `/api/consultation`
  - On success, redirects to `/contact/success`
- `src/app/contact/success/page.tsx`
  - Client-side guard ensures only valid success flows render
- `src/app/contact/success/components/consultationSuccess.tsx`
  - Thank you message and dismiss button

## Contact Form Validation

- `src/schema/contact.ts`
  - `name` — required
  - `email` — required and must be valid
  - `contactNumber` — optional, digits only, at least 10 digits
  - `subject` — required
  - `message` — required

## API Route

- `src/app/api/consultation/route.ts`
  - Accepts JSON POST from the contact form
  - Requires environment variables:
    - `CLIENT_KEY`
    - `CLIENT_URL`
  - Validates required fields and forwards the payload to the configured backend URL
  - Returns the forwarded response or an error JSON

## Shared UI Components

- `src/components/layout/navbar.tsx`
  - Main site navigation, mobile menu, and “About us” anchor support
- `src/components/layout/contactBanner.tsx`
  - Top contact action bar with email, phone, and social links
- `src/components/layout/footer.tsx`
  - Footer with quick links, contact info, social links, and location
- `src/components/shared/customButton.tsx`
  - Reusable button component
- `src/components/shared/sectionHeading.tsx`
  - Reusable heading block for page sections
- `src/components/shared/loadingOverlay.tsx`
  - Full-page loading indicator
- `src/components/shared/overlay.tsx`
  - Reusable gradient overlay components

## Form and UI Primitives

- `src/components/ui/form.tsx` — form wrapper and field helpers
- `src/components/ui/input.tsx` — styled input control
- `src/components/ui/textarea.tsx` — styled textarea control
- `src/components/ui/select.tsx` — styled Radix select wrapper
- `src/components/ui/label.tsx` — styled label control

## Styling and Theme

- `src/styles/app.css`
  - Imports Tailwind and third-party animations
  - Defines CSS theme variables and color palette
  - Declares font faces
  - Sets base styles and root theme tokens

## Utility Helpers

- `src/lib/utils.ts`
  - Exposes `cn(...)` helper using `clsx` and `tailwind-merge`

## Content Data Sources

- `src/content/servicesContent.tsx`
  - Service cards, titles, descriptions, section IDs, and images
- `src/content/industryContent.tsx`
  - Industry cards, icons, and descriptions

## Development Workflow

### Install dependencies

```bash
npm install
```

### Run locally

```bash
npm run dev
```

### Build for production

```bash
npm run build
```

### Start production server

```bash
npm start
```

### Lint

```bash
npm run lint
```

## Common Updates

### Update homepage content or images

- Edit `src/app/home/page.tsx`
- Modify components in `src/app/home/components`
- Update image files in `public/images`

### Add or change services

- Update `src/content/servicesContent.tsx`
- Add or adjust images under `public/images`
- Modify `src/app/services/page.tsx` only if new rendering behavior is needed

### Change industry cards

- Edit `src/content/industryContent.tsx`
- Update icon paths in `public/svg`

### Modify the contact form

- Update validation schema in `src/schema/contact.ts`
- Update form fields in `src/app/contact/components/contactForm.tsx`
- Update backend handling in `src/app/api/consultation/route.ts`

### Change layout, header, or footer

- `src/app/layout.tsx`
- `src/components/layout/navbar.tsx`
- `src/components/layout/contactBanner.tsx`
- `src/components/layout/footer.tsx`

### Adjust design system

- `src/components/shared/customButton.tsx`
- `src/components/ui/*`
- `src/styles/app.css`

## Notes

- `src/app/page.tsx` redirects root visitors to `/home`
- The contact success page uses `sessionStorage` to prevent direct navigation
- `next.config.ts` is currently empty and may be customized later
- `components.json` exists but is not used by the codebase
