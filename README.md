# Akoume — Website (GitHub Pages)

Voices Heard, Hearts Healed. A fast, accessible, zero-build static site served from GitHub Pages. Built with semantic HTML, modern CSS, and minimal vanilla JS. Works entirely without a build step and keeps legacy URLs stable.

Live site: https://akoume.in/
Hosting: GitHub Pages (root of this folder)

## Highlights

- Preserves existing URLs/IDs to avoid breaking links
- Accessible by default (skip links, focus states, ARIA, good contrast, reduced‑motion)
- Works without JS; dynamic areas progressively enhance (experts/helplines)
- Modern layout with CSS Grid/Flex and a small design system in assets/css/base.css
- SEO ready: per‑page meta, canonical links, robots.txt, sitemap.xml, Open Graph/Twitter
- GitHub Pages ready: .nojekyll, CNAME, 404.html with smart redirects
- Google Analytics: G-ES2SW6WPST

## Repository layout

```
Akoume-New-Website/
├─ index.html                     # Home
├─ about/
│  └─ index.html                  # About
├─ repository/
│  └─ index.html                  # Repository (Healing grove, Whispering winds, Mindful meadows, Calm waters, Serenity leaves)
├─ blogs/
│  ├─ the_silent_epidemic.html
│  ├─ breaking_the_silence.html
│  ├─ hidden_struggle.html
│  ├─ live_in_the_now.html
│  ├─ shadows_of_the_mind.html
│  ├─ the_pressure_cooker.html
│  ├─ growing_up_under_watch.html
|  ├─ high_functioning_burnout.html
|  ├─ toxic_masculinity.html
│  └─ why_do_we_lose_credibility.html
├─ assets/
│  ├─ css/
│  │  └─ base.css                 # Design system + page styles
│  ├─ js/
│  │  ├─ main.js                  # Nav, clipboard, Google Forms success/reset
│  │  └─ repository.js            # Carousel + JSON rendering with static fallback
│  └─ img/                        # Images and icons
├─ data/
│  ├─ experts.json                # Healing grove data
│  └─ helplines.json              # Calm waters data
├─ .nojekyll
├─ CNAME                          # Custom domain
├─ robots.txt
├─ sitemap.xml
└─ 404.html                       # Redirects extensionless blog URLs and normalizes trailing slashes
```

## Quick start (no build)

- Option A — Python: run inside Akoume-New-Website  
  python -m http.server 8080  
  Then open http://localhost:8080/

- Option B — Node  
  npx serve -l 8080  
  or  
  npx http-server -p 8080

- Option C — VS Code  
  Use the “Live Server” extension and open index.html

## Authoring content

### Blogs (Mindful Meadows)

1) Create a new file at blogs/your_slug.html (lowercase, use underscores)  
2) Use any existing blog as a template. Include:
   - <link rel="stylesheet" href="../assets/css/base.css">
   - <script src="../assets/js/main.js" defer></script>
   - Appropriate <title>, meta description, Open Graph/Twitter, and a canonical link  
3) Add a card link on repository/index.html under the “Mindful Meadows” carousel  
4) Optionally add the new URL to sitemap.xml (see “SEO and discovery”)  
5) Place any images in assets/img and reference with ../assets/img/...

### Experts (Healing grove)

- Preferred: update data/experts.json. repository.js will render cards at runtime.
- Also keep the static fallback cards in repository/index.html reasonably in sync for robustness.
- Image filenames referenced by JSON must exist in assets/img.
- Fields supported: name, title, age, experience, contact, email, fee, availability, linkedin, image.

### Helplines (Calm waters)

- Preferred: update data/helplines.json; static fallback rows exist in repository/index.html.
- Fields: name, timing, contact, description.

## Accessibility and UX

- Semantic landmarks and headings; keyboard‑friendly mobile nav
- Visible focus and improved color contrast
- Respects prefers-reduced-motion
- Alt text for meaningful images; decorative images should be empty alt=""

## Performance

- Minimal JS and no client framework
- Optimized images; lazy load where appropriate
- Small, reusable CSS via CSS variables; cache‑friendly file layout

## SEO and discovery

- Each page sets title, description, canonical, and OG/Twitter tags.
- robots.txt at /robots.txt and sitemap at /sitemap.xml are included.
- Directory URLs: about/ and repository/ are the canonical forms. The 404 page normalizes /about and /repository to include trailing slashes.
- When adding a blog:
  1) Use the canonical .html URL (e.g., https://akoume.in/blogs/my_post.html)
  2) Add a <url> entry in sitemap.xml with <loc> and <lastmod> (YYYY-MM-DD)

## Deployment (GitHub Pages)

1) Push the contents of Akoume-New-Website to the branch configured for Pages (usually main, root).  
2) In GitHub → Settings → Pages:
   - Source: Deploy from a branch
   - Branch: main (root)
3) Custom domain:
   - This repo uses the apex domain akoume.in. Ensure the CNAME file contains exactly “akoume.in”.
   - DNS: point akoume.in to GitHub Pages (A/ALIAS records) and point www.akoume.in to akoume.in (CNAME).
4) After deploy, verify:
   - https://akoume.in/ returns 200
   - /about and /repository redirect to their trailing-slash versions
   - /blogs/<slug> without .html redirects to /blogs/<slug>.html

## Maintenance

- Analytics: The GA property G-ES2SW6WPST is included in index.html, about/index.html, repository/index.html, and each blog template as needed.
- Forms: Contact and Newsletter post to Google Forms. To rotate forms, update the action attributes in the forms on index.html and repository/index.html.
- JS:
  - assets/js/main.js handles navigation, copy-to-clipboard, and form success/reset via hidden iframes.
  - assets/js/repository.js powers carousels and data-driven sections with graceful fallback.

## Release checklist

- Update sitemap.xml lastmod dates for changed pages
- Confirm robots.txt points to the sitemap URL
- Keep CNAME in sync with the domain you serve
- Manually spot-check key pages and links (Home, About, Repository, a few blogs)

## Contributing

- Open issues and PRs are welcome. Keep HTML semantic, CSS modular, and JS minimal.
- Preserve existing URLs and IDs where possible to avoid breaking inbound links.

## License and content

- Unless otherwise noted, website content is © 2025 Akoume. All rights reserved.
- No explicit open-source license is included for the code; contact the maintainers if you need a reuse exception.

## Contact

care.akoume@gmail.com  
+91 964 745 3255