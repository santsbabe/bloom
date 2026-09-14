# Bloom

Bloom is a private, local-first mobile PWA for personal pattern tracking and check-ins.

## Source of truth

`docs/BLOOM_MASTER_SPEC.md` is the canonical product and UX specification. Product behaviour, copy, data structures and visual implementation must remain consistent with it.

`bloom.config.json` is the machine-readable configuration derived from that specification.

## Current production files

- `index.html` — application shell and Home/Today experience
- `styles.css` — Bloom visual system and responsive layout
- `app.js` — baseline, check-in, medication, cycle, history, pattern and Apple Health import behaviour
- `bloom.config.json` — canonical machine-readable product configuration
- `manifest.webmanifest` — PWA metadata
- `sw.js` — offline/cache layer
- `docs/BLOOM_MASTER_SPEC.md` — canonical human-readable requirements

Older experimental files in the repository are not loaded by `index.html` and are not production dependencies.

## Important UX rule

There are no named check-in depth modes. Do not reintroduce the retired user-facing terms `low-energy`, `quick` or `deep` as check-in labels.

## Health data

Apple Health is imported locally from the Bloom Health Bridge `latest.json` file. Health payloads must not be placed in URLs or public query strings.
