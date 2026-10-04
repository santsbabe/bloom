# Bloom delivery rules

- Treat `docs/BLOOM_MASTER_SPEC.md` and `bloom.config.json` as product requirements.
- Publish blocker repairs only to `fix/bloom-trial-blockers` unless Santie explicitly authorises production.
- Never describe a protected Netlify preview as user-verified unless the workflow was exercised inside the authenticated preview.
- A trigger tap must open capture, require a primary answer, show a pressed state, save a separate entry, close immediately, show a persistent recorded tick for the day, and offer brief Undo.
- Keep the six trigger captions visible in simple sans-serif capitals.
- Do not reintroduce a cryptic `CD` badge; write `Cycle day N` in full.
- Keep the Bloom wordmark in the high-contrast Didot/Bodoni display stack; do not fall back to generic Georgia styling.
- History uses category filters and does not provide later edit/delete; correction is immediate Undo.
- Cycle is the sole exception to the general no-edit rule: an ongoing period may be updated and ended; once its end date is saved it is locked, apart from the immediate Undo window.
- Period entry must allow past dates from both Add Period and tappable month navigation. Daily flow is optional: recorded values mean the heaviest flow reached; blank dates mean Not recorded and must never prevent period completion.
- Preserve legacy `periodStarts` and `bleedingDays` data and include the richer `periods` records in JSON export/import; never silently discard old cycle data.
- The trial that began on 26 September was paused on 4 October 2026 because adoption blockers stopped normal use. Restart a fresh two-week trial only after the period-ending and reminder paths are accepted.
- Closed-browser reminders must use an honest device-level route. v38 generates configurable recurring iPhone Calendar alerts linking to Bloom; do not claim ordinary web-page notifications can fire reliably while the browser is closed.
- Mobile Bedtime and Wake time inputs stack vertically. Do not reintroduce overlapping two-column time fields on phone widths.
- Production deployment requires Santie’s explicit approval and an exact tested revision; this approval was given on 26 September 2026 for the v37 finished-product release.
- Run `node --check app.js`, `node tests/regression.mjs`, JSON parsing, and `git diff --check` before publishing.
- Increment the service-worker cache name whenever loaded assets or application code changes.
