# Bloom delivery rules

- Treat `docs/BLOOM_MASTER_SPEC.md` and `bloom.config.json` as product requirements.
- Publish review work only to `fix/trigger-capture-v29` unless Santie explicitly authorises production.
- Never describe a protected Netlify preview as user-verified unless the workflow was exercised inside the authenticated preview.
- A trigger tap must open capture, require a primary answer, show a pressed state, save a separate entry, close immediately, show a persistent recorded tick for the day, and offer brief Undo.
- Keep the six trigger captions visible in simple sans-serif capitals.
- Do not reintroduce a cryptic `CD` badge; write `Cycle day N` in full.
- Keep the Bloom wordmark in the high-contrast Didot/Bodoni display stack; do not fall back to generic Georgia styling.
- History uses category filters and does not provide later edit/delete; correction is immediate Undo.
- Run `node --check app.js`, `node tests/regression.mjs`, JSON parsing, and `git diff --check` before publishing.
- Increment the service-worker cache name whenever loaded assets or application code changes.
