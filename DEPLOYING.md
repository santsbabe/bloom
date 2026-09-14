# Deploying Bloom

Bloom is a static PWA. Production is built from the files on the `main` branch.

## Required production files

- `index.html`
- `styles.css`
- `app.js`
- `bloom.config.json`
- `manifest.webmanifest`
- `sw.js`

`docs/BLOOM_MASTER_SPEC.md` is the canonical product/UX source of truth and must be updated with any behavioural change.

## Privacy

The application may be hosted, but personal Bloom data remains local to the browser/device by default. Apple Health snapshots are imported from a local JSON file. Do not place health data in URL parameters.

The intended Netlify project is `bloom-health-app` and must remain access-controlled. Do not publish a health-data-bearing endpoint or remote health database as part of the MVP.

## Cache

When production assets change, increment the service-worker cache version so an installed iPhone PWA does not remain stuck on an older interface.
