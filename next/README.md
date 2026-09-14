# Bloom redesign v2 — implementation worktree

This directory is an isolated redesign worktree. It is **not referenced by the live `index.html`** and therefore is not intended to alter the current GitHub Pages app while architecture is being rebuilt.

## Implemented here

- event-oriented `bloom.events.v1` store
- one-time migration reader for legacy `bloom.entries.v3` / `v2`
- first-open daily baseline shell: Sleep → Morning meds → Good / Okay / Bad
- Today/Home shell after baseline
- primary CHECK IN lotus control
- image-only quick-event control framework
- grouped periodic check-in shell
- sensory severity + source capture
- regulation capture
- needs / what-would-help capture
- basic quick events for water, nap, caffeine, alcohol and breath-holding
- Health bridge ingestion adapter for steps, heart-rate summary, resting HR, HRV, respiratory rate and sleep payloads
- Sunday-evening weekly-review entry shell
- time-of-day visual progression framework

## Deliberately incomplete

- final painterly artwork and exact approved Bloom assets
- production medication schedule/configuration UI
- full feelings/needs taxonomy
- full allergy/skin/perimenopause baskets
- evening review
- weekly pattern engine
- cycle phase estimation/overrides in the new UI
- automatic sunrise/sunset calculation and transient location adapter
- Apple Health transport mechanism (the current bridge receives JSON; iPhone Shortcut instructions create that JSON)
- production migration verification and rollback tooling
- service-worker / deployment wiring

## Safety rule

Do not point live `index.html` or `sw.js` at this directory until migration, mobile interaction and persistence have been manually verified on-device.
