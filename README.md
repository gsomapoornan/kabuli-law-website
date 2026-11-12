# Kabuli Law website

A responsive, static website concept for Kabuli Law Professional Corporation in Mississauga, Ontario. Built with HTML, CSS, and vanilla JavaScript; no installation, framework, backend, or build command required.

## Preview locally

```sh
python3 -m http.server 4173 --directory dist
```

Open http://localhost:4173/.

## Updated design

The existing deep teal, warm cream, and muted gold palette is retained. The page now includes a photo-led hero, firm introduction, four practice-area navigation cards, individual photo-led real estate / wills and estates / family / business sections, a Nishi Kabuli introduction, approach section, three interactive preparation guides, FAQs, office details, and a structured footer.

Four original AI-generated photographs are stored locally as optimised WebP files. See IMAGE-NOTES.md for the prompts and asset paths. They illustrate services and do not portray actual clients, staff, or the firm's office.

## Review before launch

Service descriptions and topic lists are illustrative draft copy requiring confirmation by the firm. A professional portrait, full biography, direct contact details, and any authorised client reviews remain to be supplied. No ratings, awards, credentials, or client testimonials have been invented. The contact section provides office directions and an existing public profile link; there is no contact submission backend.

Search indexing remains disabled. Website use does not establish a lawyer–client relationship. This is a design concept, not an official launch.

## Verification

```sh
node --check dist/script.js
```

Local checks confirmed unique element IDs, working section targets, and that all referenced local assets exist. Automated browser verification was blocked by this environment's browser socket restrictions; visually review desktop and mobile presentation before publishing.

## Deployment

Serve the contents of dist/ on a static host. Updating this repository does not automatically deploy the existing Sites-managed site.

## Rights

No open-source licence is granted. Public repository visibility does not establish rights to use the firm's identity or imagery.
