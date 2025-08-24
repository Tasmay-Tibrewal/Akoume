# Akoume — New Website (GitHub Pages Compatible)

A refactored, responsive, accessible, and performant static website for Akoume.  
Built with semantic HTML, modular CSS, and minimal JavaScript. Preserves all original URLs/IDs and functionality, while significantly improving UI/UX and code organization.

Live domain: https://akoume.in/  
Hosting: GitHub Pages (root)

## Highlights

- Preserved URLs and section IDs to avoid breaking links
- Native smooth scrolling (no Lenis dependency)
- Data-driven repository sections (experts and helplines) with static HTML fallback
- Modern, responsive layout (Grid/Flex), fluid typography, and improved accessibility
- Google Analytics kept: G-ES2SW6WPST
- GitHub Pages ready: `.nojekyll`, `CNAME`, `robots.txt`, `sitemap.xml`, `404.html` (with redirect helpers)

## Repository Structure

```
Akoume-New-Website/
├─ index.html                          # Home
├─ about/
│  └─ index.html                       # About
├─ repository/
│  └─ index.html                       # Repository (Healing grove, Whispering winds, Mindful meadows, Calm waters, Serenity leaves)
├─ blogs/
│  ├─ the_silent_epidemic.html
│  ├─ breaking_the_silence.html
│  ├─ hidden_struggle.html
│  ├─ live_in_the_now.html
│  ├─ shadows_of_the_mind.html
│  ├─ the _pressure_cooker.html        # Space preserved to match legacy slug; 404 redirects extensionless/encoded forms
│  ├─ toxic_masculinity.html
│  └─ why_do_we_lose_credibility.html
├─ assets/
│  ├─ css/
│  │  └─ base.css                      # Design system + page styles
│  ├─ js/
│  │  ├─ main.js                       # Nav, clipboard, Google Forms success/reset
│  │  └─ repository.js                 # JSON rendering with static fallback
│  └─ img/                             # Images and icons (copied from original site)
├─ data/
│  ├─ experts.json                     # Healing grove data (matches static fallback)
│  └─ helplines.json                   # Calm waters data (matches static fallback)
├─ CNAME                               # akoume.in
├─ .nojekyll
├─ robots.txt
├─ sitemap.xml
└─ 404.html                            # Redirects extensionless blog URLs + graceful not-found page
```

## Development

No build step required. Any static HTTP server works.  
Recommended to preview via a simple local server instead of opening files directly, e.g.:

- Python: `python -m http.server 8080` then visit http://localhost:8080/
- Node: `npx serve` or `npx http-server`

Key files to open during development:
- Home: /index.html
- About: /about/index.html
- Repository: /repository/index.html
- Blogs: /blogs/<slug>.html

## Deployment (GitHub Pages)

1. Commit and push the contents of `Akoume-New-Website/` to the repository branch configured for GitHub Pages (e.g., main).
2. In GitHub: Settings → Pages
   - Source: Deploy from a branch
   - Branch: main (root)
3. Ensure `CNAME` is present at repo root with `akoume.in`.
4. DNS should point the apex domain to GitHub Pages:
   - A records to GitHub Pages IPs (as per GitHub docs), and/or ALIAS/ANAME if supported
   - Optionally CNAME for `www` → `<username>.github.io`
5. Robots and sitemap are already configured:
   - robots: /robots.txt
   - sitemap: /sitemap.xml

Note: A 404 fallback (`/404.html`) is included to redirect extensionless blog URLs to `.html` versions, and to normalize `/about` → `/about/` and `/repository` → `/repository/`.

## Content Management

- Update experts (Healing grove): `data/experts.json`
- Update helplines (Calm waters): `data/helplines.json`

On the repository page:
- Static HTML fallback is included for immediate content and robustness
- If JSON fetch succeeds, dynamic rendering will replace the fallback
- Keep images in `assets/img/` — the JSON `image` field should reference filenames present there

### Adding a New Blog
1. Create `blogs/<slug>.html` (use existing blogs as a template).
2. Include:
   - `<link rel="stylesheet" href="../assets/css/base.css">`
   - `<script src="../assets/js/main.js" defer></script>`
   - GA snippet is already part of the template
3. Add the blog card link in `/repository/index.html` under “Mindful Meadows”.
4. Optionally, add the blog URL to `/sitemap.xml`.
5. Images: place in `/assets/img/` and reference via relative path: `../assets/img/...`

## Accessibility

- Semantic landmarks and headings
- Skip link to main content
- Keyboard- and screen reader-friendly mobile nav
- Color contrast improvements and focus outlines
- Respects Reduced Motion preference
- Meaningful alt/aria labels for media and links

## Performance

- Mobile-first, CSS Grid/Flex (no layout JS hacks)
- Lazy-loading for imagery where appropriate
- Preconnects for web fonts; minimal JS
- Static assets organized for clean caching

## SEO

- Per-page titles and descriptions
- Open Graph and Twitter cards
- Canonical links
- `robots.txt` and `sitemap.xml`

## Maintainers’ Notes

- If adding/renaming blog slugs, ensure:
  - Repository cards are updated
  - `sitemap.xml` reflects the new URL
  - The `404.html` redirect script handles extensionless access (`/blogs/<slug>` → `.html`)
- For experts & helplines updates, keep static fallback HTML in `repository/index.html` in sync with the JSON whenever convenient (dynamic rendering supersedes it if the fetch succeeds).
- If the custom domain changes, update the `CNAME` file, canonical URLs, and sitemap links accordingly.