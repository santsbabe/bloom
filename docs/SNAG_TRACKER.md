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
