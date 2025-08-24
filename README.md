# Akoume

<p align="center">
  <img src="akoume logo4.png" alt="Akoume logo" width="160">
</p>

<p align="center"><strong>Voices Heard, Hearts Healed.</strong></p>

<p align="center">
  <a href="https://akoume.in"><img alt="Website" src="https://img.shields.io/website?url=https%3A%2F%2Fakoume.in&up_message=online&up_color=brightgreen&down_message=offline&down_color=lightgrey&style=flat-square"></a>
  <img alt="Stack" src="https://img.shields.io/badge/stack-HTML5%20%7C%20CSS3%20%7C%20JavaScript-blue?style=flat-square">
  <img alt="Pages" src="https://img.shields.io/badge/hosted%20on-GitHub%20Pages-24292e?logo=github&style=flat-square">
</p>

---

Akoume is a student-led mental health initiative and static website that creates a compassionate, stigma-free space for listening, learning, and support. The name comes from the Greek “we listen,” reflecting our core mission to provide empathy-driven resources, conversations with experts, and community connection.

## Table of contents

- [Live site](#live-site)
- [Features](#features)
- [Screenshots](#screenshots)
- [Project structure](#project-structure)
- [Pages and routes](#pages-and-routes)
- [Tech stack](#tech-stack)
- [Run locally](#run-locally)
- [Design system](#design-system)
- [Accessibility and SEO](#accessibility-and-seo)
- [Analytics and privacy](#analytics-and-privacy)
- [Deployment (GitHub Pages + Custom domain)](#deployment-github-pages--custom-domain)
- [Contributing](#contributing)
- [Roadmap](#roadmap)
- [Team](#team)
- [Contact](#contact)
- [License](#license)

## Live site

- Production URL: https://akoume.in
- This repository contains the static site that is served via GitHub Pages with a custom domain (see CNAME).

## Features

- Elegant, responsive landing page with smooth scrolling and section reveals
- Resources hub mapping to five pillars:
  - Sanctuary Circle: WhatsApp community and virtual meetups
  - Healing Grove: Curated list of mental health professionals
  - Whispering Winds: Short expert conversation snippets
  - Mindful Meadows: Articles and blogs on mental health
  - Calm Waters: Helplines and crisis contacts
- Serenity Leaves newsletter signup (Google Forms)
- Contact form integrated with Google Forms
- Copy-to-clipboard for email and phone
- Fully client-side: no backend, no build step

## Screenshots

<p align="center">
  <img src="cover-2.jpg" alt="Homepage cover" width="640">
</p>

## Project structure

```
.
├── index.html                # Landing page (Resources + Contact)
├── about.html                # About Us page (mission, story, team)
├── repository.html           # Resource repository (experts, blogs, helplines, newsletter)
├── styles.css                # Global styles; responsive layout; section components
├── script.js                 # Landing page behaviors (nav, dropdown, scroll, clipboard)
├── script_ab.js              # About page behaviors (dropdown, responsive sizing)
├── script_repo.js            # Repository page behaviors (dropdown, responsive sizing)
├── blogs/
│   ├── script_blog.js        # Blog page behavior (responsive width/height, smooth scroll)
│   ├── the_silent_epidemic.html
│   ├── breaking_the_silence.html
│   ├── hidden_struggle.html
│   ├── live_in_the_now.html
│   ├── shadows_of_the_mind.html
│   ├── the _pressure_cooker.html
│   ├── toxic_masculinity.html
│   └── why_do_we_lose_credibility.html
├── CNAME                     # Custom domain: akoume.in
├── README.md                 # You are here
└── assets (images)          # Logos, thumbnails, and page imagery
```

## Pages and routes

- Landing: index.html
  - Resources tiles link internally to anchors in repository.html
- About: about.html
- Repository: repository.html
  - Healing Grove: #healing-groves
  - Whispering Winds: #whispering-winds
  - Mindful Meadows: #mindful-meadows
  - Calm Waters: #calm-waters
  - Serenity Leaves: #serenity-leaves
- Blogs: under /blogs/*.html

Note: Navigation links in production point to https://akoume.in routes. When running locally, open the local HTML files directly (see Run locally).

## Tech stack

- HTML5, CSS3, vanilla JavaScript
- Lenis for smooth scrolling: https://github.com/studio-freight/lenis
- Google Fonts: Montserrat family
- Google Analytics (gtag.js)

## Run locally

Because this is a static site, there is no build step.

- Option A: double-click index.html to open in your default browser
- Option B: use a lightweight local server (recommended for CORS safety)
  - VS Code extension “Live Server”, or
  - Python 3: python -m http.server 8000 and open http://localhost:8000/Akoume/index.html

Tips:
- On some pages, navbar links point to https://akoume.in. When previewing locally, use the section tiles and in-page links, or manually open local files (about.html, repository.html).
- Clipboard API is used for “copy email/phone” on the contact section and requires a secure context in some browsers; it will still work in most local previews.

## Design system

- Palette: teal/green neutrals on soft aqua backgrounds for a calm aesthetic
- Typography: Montserrat (weights 400–700), larger type scale for readability
- Motion: Lenis-based smooth scrolling; subtle hover reveals on resource tiles
- Components:
  - Navbar with responsive hamburger dropdown
  - “Resource” tiles with overlay title/description
  - Contact and newsletter forms (Google Forms endpoints)
  - Experts cards with avatars and external profile links
- Responsive: CSS-only breakpoints; page-specific scripts adjust layout for smaller viewports

## Accessibility and SEO

- Semantic HTML sections and descriptive alt text for images
- High-contrast text on buttons and overlays
- Keyboard-friendly hover targets backed by clickable wrappers
- Meta descriptions included per page
- Suggested enhancements (good next steps):
  - Add skip-to-content link
  - Add ARIA labels to hamburger button and dropdown list
  - Include Open Graph/Twitter meta tags for better sharing previews
  - Run Lighthouse/axe checks and iterate

## Analytics and privacy

- Google Analytics 4 via gtag.js is embedded site-wide with measurement ID G-ES2SW6WPST.
- Forms are handled via Google Forms; no PII is stored in this repository or on a server.
- The site uses the Clipboard API for a better UX when copying contact details.

## Deployment (GitHub Pages + Custom domain)

- Hosted with GitHub Pages; custom domain akoume.in configured via CNAME in the repo root.
- Typical flow:
  1. Push changes to the default branch
  2. GitHub Pages serves the static files
  3. DNS points akoume.in to GitHub Pages

If you fork this repository:
- Remove or update CNAME to your own domain
- Update absolute links in navigation if you publish under a different origin

## Contributing

We welcome contributions that improve content, accessibility, and code quality.

- Fork the repository and create a feature branch
- Keep the visual language calm and inclusive
- Avoid adding heavy dependencies; this is a static, lightweight site
- Open a pull request with a clear description and before/after screenshots when visuals change

## Roadmap

- Publish initial expert conversation clips under “Whispering Winds”
- Expand “Healing Grove” with more verified professionals
- Add more long-form articles to “Mindful Meadows”
- Improve accessibility (skip links, focus states, ARIA)
- Add social preview images and metadata

## Team

- Bharat Uday — Co‑Founder
- Siddharth Dikshit — Co‑Founder
- Tasmay Tibrewal — Co‑Founder

## Contact

- Email: care.akoume@gmail.com
- Volunteer: https://forms.gle/viMwzZWjSicmLdxu7
- LinkedIn: https://www.linkedin.com/company/akoume-me
- Instagram: https://www.instagram.com/akoume.in/

## License

No explicit license is declared in this repository. All rights reserved by the Akoume team unless a LICENSE file is added.
