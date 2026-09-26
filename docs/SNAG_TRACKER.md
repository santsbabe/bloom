# Bloom snag tracker

## Trigger tiles saved without meaningful capture

- Symptom: tapping a visual trigger could appear to record something without making the chosen detail clear.
- Root cause: capture feedback and required-answer behaviour were not treated as one acceptance path.
- Boundary: Home trigger UI → local event persistence.
- Fix: open a capture sheet on every tap, require one primary answer, keep optional detail collapsed, save separate repeated entries, close immediately, display a day tick and offer Undo.
- Regression: `tests/regression.mjs` checks the required-answer, close/confirm and recorded-state implementation.
- Prevention: the complete trigger acceptance path is recorded in the repository `AGENTS.md`.

## Review preview is protected

- Symptom: unauthenticated server requests receive the access boundary rather than the application.
- Root cause: the Netlify deploy preview is protected by team authentication.
- Boundary: automated verification → hosted review environment.
- Proven handling: verify revision/deploy identity separately; perform live workflow acceptance only in an authenticated browser session.
- Rejected approach: treating a green deploy or unauthenticated HTTP response as proof that the user flow works.
- Prevention: report deployed and live-workflow-verified as separate statuses.

## Local browser runner unavailable

- Symptom: Playwright is installed but its Chromium binary is absent; the permitted download endpoint returned an empty archive.
- Root cause: execution-environment browser packaging/network boundary.
- Boundary: local source → browser acceptance.
- Handling: run static/regression/build checks locally, then use the hosted preview for browser acceptance if its authentication boundary is available.
- Prevention: never promote local static checks to browser verification.

## Cycle only recorded “today” without flow detail

- Symptom: Bloom could toggle bleeding or mark a period start only on the current date, so a period beginning earlier could not be represented accurately and daily flow severity was absent.
- Root cause: the old cycle model stored only flat `periodStarts` and `bleedingDays` arrays and the calendar had no interaction path.
- Boundary: Cycle calendar → local period persistence → History and seven-day ribbon.
- Fix: retain the legacy arrays, add structured period records with start date, nullable end date and one required heaviest-flow value per day; add historical month navigation, tappable dates, an Add Period form, open-period updates and locked completed-period display.
- Rejected approach: hard-coding the user’s 24 September start date into a shared preview, or applying one default flow value across the full date range.
- Regression: `tests/regression.mjs` checks retrospective date inputs, open-ended periods, the four flow levels, required daily flow, locked completed records, month navigation and immediate Undo.
- Prevention: cycle-specific edit rules and legacy-data preservation are recorded in `AGENTS.md` and `bloom.config.json`.
