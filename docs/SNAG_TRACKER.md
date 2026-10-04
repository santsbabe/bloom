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
- Fix: retain the legacy arrays, add structured period records with start date, nullable end date and an optional heaviest-flow value for each remembered day; add historical month navigation, tappable dates, an Add Period form, open-period updates and locked completed-period display.
- Rejected approach: hard-coding the user’s 24 September start date into a shared preview, or applying one default flow value across the full date range.
- Regression: `tests/regression.mjs` checks retrospective date inputs, open-ended periods, the four flow levels, optional daily flow, locked completed records, month navigation and immediate Undo.
- Prevention: cycle-specific edit rules and legacy-data preservation are recorded in `AGENTS.md` and `bloom.config.json`.

## Trial feedback could restart endless polishing

- Risk: ad-hoc observations during normal use could trigger immediate amendments and prevent a stable trial from producing meaningful evidence.
- Boundary: live user observation → product-change decision.
- Control: Settings contains a local Trial amendment notes tracker. The first trial was paused on 4 October 2026; a fresh two-week trial begins only after the adoption blockers are accepted.
- Data handling: notes remain local, support immediate Undo and are included in JSON backup/import.
- Regression: `tests/regression.mjs` checks storage, visible trial dates, review gating, Undo and backup/import coverage.
- Prevention: the paused-trial state and production-authorisation record are fixed in `AGENTS.md` and `bloom.config.json`.

## Missing flow blocked period completion

- Symptom: ending an ongoing period failed whenever any date in its range had no selected flow value.
- Root cause: the save handler treated daily flow as mandatory even though missed tracking is expected and semantically different from no bleeding.
- Boundary: Cycle editor → local period persistence.
- Implemented repair: flow is optional; blank dates persist as Not recorded, recorded values stay unchanged, and the calendar visually distinguishes unrecorded period dates.
- Regression: `tests/regression.mjs` rejects the old blocking alert and checks optional persistence and the missing-flow marker.
- Physical evidence still required: end an ongoing period with at least one blank day in the protected preview, reload and confirm the end date and recorded flows persist.

## Bloom depended on remembering to open Bloom

- Symptom: no reminder reached the user while the browser was closed, so check-ins were missed and the app was abandoned during the trial.
- Root cause: the static local-first PWA had no dependable closed-browser scheduling channel.
- Boundary: closed iPhone browser → user prompt → Bloom check-in.
- Implemented repair: Settings generates configurable recurring iPhone Calendar events containing alerts and a direct production Bloom link.
- Rejected approach: claiming that ordinary in-page timers or notifications would fire reliably after iOS closed the browser.
- Regression: `tests/regression.mjs` checks recurrence, alert payload, link, calendar MIME type and backup coverage.
- Physical evidence still required: import the calendar file on iPhone, close the browser, receive an alert, follow its link and confirm Bloom opens.

## Bedtime and wake-time fields overlapped on phone

- Symptom: the two time inputs collided visually inside the expanded optional sleep panel.
- Root cause: the mobile media rule explicitly preserved a two-column field grid at narrow widths.
- Boundary: responsive CSS → morning baseline sleep detail.
- Implemented repair: phone layouts stack both fields vertically with compact spacing and minimum-width protection; wider layouts remain two-column.
- Regression: `tests/regression.mjs` checks the mobile single-column override.
- Physical evidence still required: inspect the expanded section on the target iPhone in the protected preview.
