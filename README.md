# Kabuli Law Website

A static proof-of-concept website for Nishi Kabuli / Kabuli Law Professional Corporation in Mississauga, Ontario.

## Stack

- HTML, CSS, and vanilla JavaScript
- Responsive desktop and mobile layouts
- Native HTML dialogs and FAQ disclosures
- Google Fonts with fallback fonts
- No framework, build step, database, or backend

## Run locally

From this directory, run:

```sh
python3 -m http.server 4173 --directory dist
```

Open http://localhost:4173/ and keep the server running while reviewing. Stop it with Ctrl+C.

## Files

- `dist/index.html` — page content and structure
- `dist/styles.css` — styling and responsive layouts
- `dist/script.js` — mobile menu and service dialogs
- `dist/assets/` — imagery, favicon, and icons
- `REVIEW-NOTES.md` — research sources and content review notes
- `.openai/hosting.json` — existing Sites deployment configuration

## Deployment

Serve the contents of `dist/` on a static host. No installation or build command is required. Pushing this GitHub repository does not automatically deploy the site; the existing Sites deployment is managed separately.

## Review status

This is a design concept, not the firm's official website. It covers real estate, wills and estates, family law, and business law. The confirmed office address is Unit 24, 7895 Tranmere Drive, Mississauga, ON L5S 1V9.

The architectural image is AI-generated and does not depict the actual office. There is no enquiry form, email delivery, or booking backend. Search indexing is disabled with `noindex,nofollow`. Contact details, service scope, biography, copy, and notices require the firm's review before an official launch.

## Validation

```sh
node --check dist/script.js
```

Desktop and mobile presentation, service dialogs, mobile navigation, FAQs, and local asset/section links were checked during development.

## Rights

No open-source licence is granted by this repository. Public repository visibility does not establish rights to use the firm's identity or imagery.
