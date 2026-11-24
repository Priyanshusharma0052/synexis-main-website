# Synexis main website

This is the main Synexis marketing website, rebuilt as a **React + Vite** experience. It combines the immersive multi-section feel of Kriscel Interior with the guided-interaction approach of Kriscel Perfume.

## Start the project

```bash
npm install
npm run dev
```

Open the local address Vite prints in the terminal. To create a production build:

```bash
npm run build
```

The generated website will be in `dist/`.

## What is included

- Intro loader and scroll progress indicator
- Responsive mobile navigation and persistent project CTA
- Image-led editorial hero and selected-work story cards
- Project-detail modal
- Interactive “find your next step” service planner
- Complete original Synexis services, industries, FAQs, contact details and blog pathways
- Enquiry form state, accessible modal and native FAQ interactions
- SEO-ready `robots.txt` and starter `sitemap.xml`

## File map

| File | Purpose | Edit it when… |
|---|---|---|
| `src/App.jsx` | Main React page and all content data | changing text, links, services, projects, FAQs or form fields |
| `src/main.jsx` | React entry point | rarely needs editing |
| `src/app.css` | Complete visual design and responsive layout | changing colours, typography, spacing, cards or mobile layout |
| `public/robots.txt` | Search-engine crawl rules | updating live sitemap address |
| `public/sitemap.xml` | Starter list of preserved legacy URLs | adding every migrated blog URL before launch |
| `package.json` | Commands and development dependencies | adding a package or changing build commands |

## Where to make common changes

### Change the company contact details

Search for these values in `src/App.jsx` and replace them consistently:

- `+91 85273 97361`
- `synexistechnologies@gmail.com`
- `Dehradun · India · Everywhere online`

### Change the services

The service data is at the top of `src/App.jsx` in the `services` array. Update the title or description there instead of editing the JSX layout.

### Change the visual identity

All main colours and fonts are at the very top of `src/app.css`, in `:root`. For example, change `--lime` to update the accent colour across the whole site. This is the safest way to recolour the design.

### Connect the enquiry form

The current form is a working front-end demonstration: it displays a success message and does not send an email yet. Its code is in `src/App.jsx`. Before launch, replace it with a secure form endpoint or CRM integration. Never place email-provider passwords or API secrets in client-side code.

## Recommended next steps

1. Replace the sample insights and conceptual work section with approved case studies and real client proof.
2. Add individual service pages while preserving the WordPress URLs recorded in `SYNEXIS_WEBSITE_AUDIT_AND_REBUILD_BRIEF.md`.
3. Add real team/project photography and optimize each image for the web.
4. Connect the contact form to the chosen email service or CRM.
5. Add analytics, consent handling, sitemap, redirects and SEO metadata before launch.

## Coding conventions

- Prefer meaningful HTML elements such as `section`, `article`, `nav`, `header`, `footer` and `button`.
- Keep IDs for site destinations (such as `#contact`) unique.
- Reuse the design tokens in `:root` rather than adding one-off colours.
- Use a new class name only when a component has a distinct visual purpose.
- Keep JavaScript small and accessible. Any interaction must work with keyboard navigation.
