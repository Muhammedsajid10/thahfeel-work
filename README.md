# Steel & Glass Company Website

A React + Vite website for a small steel and glass contracting company.

## 1. Project structure

```
src/
  components/     Reusable UI pieces (Navbar, Hero, ServiceCard, ContactForm, etc.)
  pages/          One file per page (Home, About, Services, Contact, NotFound)
  data/           Editable content — company info, services, project gallery
  App.jsx         Routes
  main.jsx        App entry point
  index.css       Design tokens (colors, fonts) and shared base styles
index.html        Page title, meta description, fonts
public/           Static files (favicon)
```

Each component has its own `.css` file sitting next to it (e.g.
`Navbar.jsx` + `Navbar.css`), so it's easy to find the styles for
anything you want to change.

## 2. How to run it

```bash
npm install
npm run dev
```

Then open the local URL shown in the terminal (usually
`http://localhost:5173`).

## 3. Where to change company information

Open **`src/data/company.js`**. Everything in there is a placeholder —
replace each one:

```js
export const company = {
  name: "[COMPANY NAME]",
  phone: "[PHONE NUMBER]",
  phoneHref: "tel:+00000000000",
  whatsappNumber: "[WHATSAPP NUMBER]",
  whatsappHref: "https://wa.me/00000000000",
  email: "[EMAIL]",
  location: "[LOCATION]",
  description: "[COMPANY DESCRIPTION]",
};
```

This file feeds the navbar, footer, contact page, and CTA buttons
across the whole site, so you only need to update it once.

The company name also appears in `index.html` (page title and meta
description) and at the top of each page file (`document.title`) —
update `[COMPANY NAME]` there too once you have a final name.

## 4. Where to replace images

Right now the site uses placeholder photos from Unsplash so the
layout can be previewed. Replace them with real project photos when
you have them:

- **Hero image** — `src/pages/Home.jsx`, the `image` prop on `<Hero />`
- **About preview photo** — `src/components/AboutPreview.jsx`
- **Service card / service page images** — `src/data/services.js`,
  the `image` field on each service
- **Work gallery photos** — `src/data/projects.js`, the `image` field
  on each project

To use local images instead of URLs: put the image files in
`src/assets/`, then import them at the top of the relevant file, e.g.

```js
import steelGate from "../assets/steel-gate.jpg";
// then use steelGate instead of the URL string
```

## 5. Where to add or remove services

Open **`src/data/services.js`**. Each entry looks like:

```js
{
  id: "steel-works",
  title: "Steel Works",
  short: "One-line summary for the card on the Home page.",
  description: "Longer paragraph for the Services page.",
  workTypes: ["Steel fabrication", "Gates", "Handrails", "..."],
  image: "...",
}
```

- To add a service, copy one of these objects and edit it.
- To remove a service, delete its object from the array.
- The Home page cards, the Services page, and the "Select Service"
  dropdown on the contact form all read from this same file
  automatically.

## 6. How to change the WhatsApp number

In `src/data/company.js`, update:

```js
whatsappNumber: "[WHATSAPP NUMBER]",   // shown as text, e.g. "+91 98765 43210"
whatsappHref: "https://wa.me/919876543210", // digits only, no + or spaces
```

The `wa.me` link is used by every "WhatsApp Us" button on the site.

## 7. How to build for production

```bash
npm run build
```

This creates an optimized version of the site in the `dist/` folder.
Upload the contents of `dist/` to your hosting provider (Netlify,
Vercel, cPanel, etc.). To preview the production build locally before
deploying:

```bash
npm run preview
```

## Notes

- The contact form validates on the client side and shows a success
  message, but it isn't wired up to a real backend or email service
  yet. Connect it to a form service (e.g. Formspree) or your own API
  endpoint when you're ready to receive real enquiries.
- No statistics, years of experience, certifications, or testimonials
  have been included — add these only once you can confirm them.
