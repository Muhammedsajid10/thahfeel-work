# Tahfeel Technical Services — Corporate Website

**Freelance client website · React + Vite · UAE technical and contracting services**

A responsive corporate website developed for **Tahfeel Technical Services Co LLC**, presenting the company's steel, aluminium, glass, contracting and maintenance services, selected project imagery, and enquiry/contact options.

> **Portfolio context:** This is a client-oriented frontend project. Branding, photographs, content, and contact information belong to their respective owners. This repository demonstrates the website implementation; client approval for public source distribution should be confirmed.

## Overview

The site is built as a client-side React application using Vite and React Router. It uses reusable page components, separate content data files, responsive styles, Framer Motion transitions, and WhatsApp call-to-action links.

### Pages and routing

- **Home** — Service highlights, introductions, project previews and calls to action
- **About** — Company information
- **Services** — Service categories and descriptions
- **Gallery / Work** — Project image showcase
- **Contact** — Contact details and validated enquiry form
- **Not Found** — Fallback for unrecognized routes

Routes are defined in `src/App.jsx`.

### UI and integration highlights

- Responsive component-based layout
- React Router navigation and animated page transitions
- Framer Motion and custom hover/cursor interactions
- Data-driven services and project gallery content
- WhatsApp quick-contact link
- Basic client-side form validation
- Metadata for the site title, description and social preview

**Form limitation:** The enquiry form currently validates fields and displays a confirmation locally, but **does not send the enquiry to a backend or email service**. It should not be described as a working enquiry-delivery integration until connected and tested.

## Stack

| Area | Technology |
| --- | --- |
| Framework | React 19 |
| Build | Vite 8 |
| Navigation | React Router 7 |
| Motion | Framer Motion |
| Icons | Lucide React |
| Styling | Component CSS and shared design tokens |
| Tooling | npm, oxlint |

## Code structure

```text
thahfeel-work/
├── public/
│   ├── portfolio/         # Project/gallery images
│   └── icons.svg
├── src/
│   ├── components/        # Reusable landing page and site sections
│   ├── data/
│   │   ├── company.js     # Company contact and brand configuration
│   │   ├── projects.js    # Gallery content
│   │   └── services.js    # Service categories
│   ├── pages/             # Home, About, Services, Gallery, Contact
│   ├── App.jsx            # Route definitions and global elements
│   ├── main.jsx
│   └── index.css          # Global styles
├── index.html
├── package.json
└── vite.config.js
```

## Local development

**Requirements:** Node.js and npm, using versions compatible with this project's Vite release.

```bash
git clone https://github.com/Muhammedsajid10/thahfeel-work.git
cd thahfeel-work
npm install
npm run dev
```

Open the local address shown by Vite.

### Other commands

```bash
npm run lint      # Static lint checks via oxlint
npm run build     # Production build in dist/
npm run preview   # Preview local production build
```

## Content updates

The site separates much of its business content from presentation:

| Update | Main file |
| --- | --- |
| Company name, contact details, WhatsApp link | `src/data/company.js` |
| Service names and descriptions | `src/data/services.js` |
| Gallery/project entries | `src/data/projects.js` |
| Browser title and metadata | `index.html` |
| Contact form behavior | `src/components/ContactForm.jsx` |

Project images are stored under `public/portfolio/`; other service imagery may be referenced externally.

## Deployment notes

Run `npm run build` and deploy the resulting `dist/` contents to a static web host such as Vercel or another compatible provider. For direct navigation to nested client-side routes, configure the host to serve `index.html` for unknown paths.

This repository alone does not independently verify the current production domain, live availability, or successful enquiry delivery.

## Before production handover

- Connect the contact form to an actual email/API workflow, or make its demo-only behavior unambiguous
- Test navigation, responsive layouts, keyboard access, SEO metadata and image optimization
- Verify company phone/email and obtain approval for publishing client photos and content
- Check license and reuse permissions for externally sourced images and assets
- Keep deployment tokens, private credentials and client-only materials out of version control

## Freelance portfolio note

This website is an example of client-facing frontend implementation. Sharing client source code publicly is appropriate only where the contract and client authorize it. Otherwise, a sanitized demonstration or approved project case study is safer.

**Developer:** [Muhammad Sajid](https://github.com/Muhammedsajid10)  
**Client / Brand:** Tahfeel Technical Services Co LLC
