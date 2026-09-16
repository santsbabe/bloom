# Bloom — Master Product & UX Specification

**Status:** Canonical source of truth. Implementation must follow this file.  
**Updated:** 16/09/2026  
**Primary platform:** iPhone / mobile web PWA, with approved responsive desktop layout  
**Storage:** local-first  
**Date format:** dd/mm/yyyy  
**Time format:** HH:mm (24-hour)

## 1. Purpose
Bloom is a private, local-first pattern-recognition and decision-support app. It is designed to capture how the user is functioning and what is happening around that functioning without pretending that association proves cause. It is not a fertility tracker, diagnostic engine, medical device, histamine meter or generic mood diary.

**Core principle:** Less bullshit. More humanity. Solve the actual problem.

## 2. Non-negotiable UX rules
- Progressive disclosure. One useful decision at a time.
- No giant forms or dense equal-priority dashboards.
- No guilt, streaks, punishment or motivational platitudes.
- Save / Back / Skip remain obvious.
- No redundant capture: the same experience maps to one underlying event.
- Plain human language in active flows.
- Actual recorded data beat inferred data.
- Warmth comes from imagery, colour, spacing and interaction, not slogans.
- Edits, deletes and backfill remain possible.
- Local-first storage is the default.
- **Do not use the user-facing terminology “low-energy”, “quick” or “deep”.** There are no named check-in modes. The app adapts the amount it asks according to the route and the user's choices.

## 3. Daily structure
1. Morning baseline — opens automatically on first use of each calendar day.
2. Periodic check-ins — available after baseline.
3. Evening review — due medication first, then optional reflection.
4. Weekly review — Sunday evening, optional, pattern summary first.
5. “What just happened?” — separate event-focused tool.

## 4. First-open baseline
The first app use of the day opens the baseline before Home.

Sequence:
1. Sleep.
2. Morning medication adherence/access.
3. Good / Okay / Bad.

Good and Okay go to Home. Bad goes directly to a **minimal support-now route**. Do not name that route as a special check-in mode. It must offer a clear route to the ordinary CHECK IN flow and to “What would help right now?”. Good / Okay / Bad is asked once per day only.

If first use is later in the day, allow retrospective answers and “I don’t remember” where appropriate.

## 5. Sleep baseline
Subjective quality: Rested / Okay / Poorly / Barely slept / I don’t remember.

Capture approximate bedtime and wake time. Calculate duration if both are present. Manual corrections are authoritative. Ask about awakenings only when relevant.

Apple Health sleep may later prefill timing and duration. Imported values never overwrite a manual correction.

## 6. Medication model
The old single `medsTaken` boolean is obsolete. Medication tracking is adherence/access by medication and due time, not “medication effect”.

Flow: **Did you take your meds? → Which meds? → if No, why not?**

Retrospective answer options: Yes / No / I don’t remember.

Why-not options: Forgot / Ran out / Chose not to / Side effects / Couldn’t access it / Unavailable or out of stock / Other.

Each medication supports active/inactive, morning/evening/custom time, daily/cycle-aware/custom schedule, temporary-unavailable state and review date. Temporarily unavailable medicines suppress routine adherence prompts while preserving the access issue in the data. Prescription-led configuration wins; Bloom does not invent schedules.

If evening medication is due, the evening flow begins with adherence and only then offers reflection.

## 7. Home / Today
Home is the main hub after the daily baseline.

### Primary action
A prominent **growing lotus** is the primary control. Visible text is **CHECK IN**, overlaid low across the lotus image as approved. The lotus is not decoration sitting beside a dashboard; it is the main interaction.

### Time-of-day garden progression
The Home garden and lotus evolve gradually through the day. Progression is based only on local time/daylight, never on compliance or check-in completion. No wilting or punishment for missed use. Where browser sunrise/sunset is unavailable, use a gentle time-of-day fallback without claiming astronomical precision.

### Visual triggers
Home uses six image-only visual triggers with no visible text underneath. Each retains an accessibility label and title:

1. **Sleep** — internal event key `nap`
2. **Caffeinate** — internal event key `caffeine`
3. **Alcohol** — internal event key `alcohol`
4. **Breathe** — internal event key `breathing`
5. **Hydrate** — internal event key `water`
6. **Sense** — internal event key `sensory-overload`

The exact approved production artwork is stored at `assets/triggers/` and governed by `assets/triggers/trigger-assets.json` and `docs/BLOOM_UI_BRAND_GUIDELINE.md`. Preview and production builds must reference those exact files rather than regenerate artwork.

### Medication status
Today shows a compact medication status/control when something is due or unresolved. It must not turn into a clinical dashboard.

### Cycle
Home may show cycle day/estimated phase with uncertainty where relevant. Cycle does not belong inside the morning baseline.

## 8. Visual identity
The approved Bloom visual identity is **Warm Conservatory**.

Bloom uses warm ivory, sunlit white, lotus blush, dusty rose, muted coral/apricot, soft sage, olive, moss, honeyed gold and restrained smoky plum accents. Avoid generic beige wellness UI, clinical dashboards, generic SaaS cards, emoji shortcuts, motivational slogans, trial-font watermarks and decorative taglines.

Labels/captions use clean all-caps or lightly tracked sans-serif. Imagery carries the emotional tone. Trigger artwork must belong to one Warm Conservatory image family with consistent warm lighting, framing, depth of field and colour treatment.

### Responsive layout
Mobile remains hero-first and uses a three-column visual-trigger grid at typical phone widths. Desktop uses additional width for breathing room and clearer grouping; it may display all six triggers in one row. Desktop must not become a denser enterprise-dashboard version of mobile.

## 9. CHECK IN flow
There are no named depth/mode controls. The user enters via CHECK IN and chooses what is relevant.

Top-level groups:
- How I feel
- How my brain is working
- What my body is doing
- Sensory overload
- Context & triggers
- Regulation
- Needs / what would help
- Nothing major / just logging

The user may choose one or more groups. Bloom shows only the selected content. Medication effect is not a group.

“Nothing major / just logging” asks only: **Anything worth noting?** with free text and Skip.

## 10. How I feel
Periodic check-ins do not repeat Good / Okay / Bad.

Optional **Mood changed** opens a feelings-wheel-derived flow: broad family → specific words → multiple selection → optional “Explore what I need”.

Anxiety burden anchors: Mild / Moderate / Severe / Overwhelming.

Anhedonia remains available with plain explanatory copy and a None / Mild / Moderate / Severe burden scale.

## 11. How my brain is working
Mental capacity: Plenty / Enough / Limited / Very little.

ADHD/executive-function burden: Mild / Moderate / Severe / Overwhelming, then optional tags including starting/task initiation, sustaining attention, switching, prioritising, sequencing/organising, working memory, finding words, processing speed, decision-making, impulsivity, restlessness, body doubling needed, time blindness, rejection sensitivity, hyperfocus, task paralysis, waiting mode, masking, justice sensitivity, stimming/regulating movement, info-dumping, ADHD tax and other established lived-experience tags.

Sensory overload routes to its dedicated section. Shutdown/words stop coming routes to Regulation → Shut down. Emotional flooding may be visible in multiple places but maps to one event.

## 12. Sensory overload
Top-level group. Burden: Mild / Moderate / Severe / Overwhelming. Then optional multi-select sources including noise, multiple conversations, sudden sound, bright light/glare, flicker, visual clutter, touch/clothing, people touching, smell/perfume/cleaners, food smells/smoke, temperature, crowding, motion/travel, internal body sensations, proprioceptive need, need to move, too many inputs, social/demand load, screens/notifications and food texture/taste.

## 13. Regulation
Use practical self-description only, not claims of vagal physiology.

One category at a time: Activated / Shut down / Regulated, with descriptors. No severity score required. Regulation can route directly to “What would help right now?”.

## 14. Needs / what would help
Need families: Safety / Relationship / Growth & Purpose / Individuality & Autonomy. Multiple selections allowed.

“What would help right now?” may include quiet, dimmer light, space, movement, deep pressure, food/water, fresh air, lie down, body doubling, reassurance/connection, fewer decisions, stop task, change location, ask for help, set boundary, information/clarity, nothing/don’t know.

## 15. What my body is doing
Physical symptoms are optional. Ask **Do you have capacity for physical symptoms?** with **No. Save. / Yes** before showing the fuller symptom set when appropriate.

Track body/cycle symptoms as body signals without assuming hormones caused them. Established symptom examples include bleeding/spotting/heavy bleeding/clots, cramps, pelvic pressure, breast tenderness, bloating/fluid retention, headache/migraine, joint/muscle aches, hot flush, night sweat, temperature swings, sleep disrupted, palpitations, dizziness/light-headedness, hunger/cravings, nausea/digestive change, vaginal dryness/discomfort and libido change.

Also support allergy/skin burden and symptoms where configured (e.g. rhinitis/dust burden, post-nasal drip/eye/throat symptoms, eczema/skin barrier, rosacea, keratosis pilaris), again as observations rather than causes.

## 16. Context & triggers / visual triggers
Support caffeine/energy drinks, alcohol, hydration, meals/appetite, naps/dozing, movement, travel/location, task/demand, parenting, work, home, social, conflict, unexpected change, sensory load and other relevant context.

Visual-trigger actions map to the same underlying event model as ordinary check-ins; no duplicate records for the same event. The internal record type may remain `quick-event` for backward compatibility, but that term is not user-facing UI copy.

## 17. What just happened?
Separate from routine CHECK IN. Progressive mobile flow: Situation → Body → Emotion → Need → Help. Every step supports Back/Skip and incomplete entries are valid. Optional “Did that help?”: Yes / A bit / No / Haven’t tried.

## 18. Cycle
Record actual period starts and bleeding days. Actual dates take priority over estimates. Cycle estimates are optional, secondary and explicitly uncertain where appropriate. Symptom tracking works even without cycle dates.

## 19. Apple Health bridge
Current shortcut produces `latest.json` containing: `capturedAt`, `steps`, `restingHeartRate`, `heartRateMin`, `heartRateMax`, `heartRateAverage`, `hrv`, `respiratoryRate`.

Blank Watch-dependent fields are valid missing data. Steps are a single daily sum. Sleep import is deferred until the core bridge is stable.

Bloom must import the local JSON snapshot without putting health data in a URL. Health data remains local to the device/browser. Manual corrections beat imported values.

## 20. History, patterns and reviews
History supports inspect/edit/delete/backfill. Do not label historical entries with retired mode names.

Pattern statements are cautious associations: “often coincided with”, “travelled with”, “worth watching”. Never state causation. Weekly review is optional and begins with what Bloom noticed before asking for reflection.

## 21. Data model
Use event-based data with typed records rather than one giant daily object. Minimum record families: baseline, medication-adherence, check-in, `quick-event` (legacy internal record type for visual-trigger actions), support-now, what-just-happened, cycle-event, health-snapshot, manual-correction.

All records support timestamp, local date, source, created/updated times and optional note. Shared experiences referenced from different UI routes must resolve to one event where possible.

## 22. Privacy and hosting
Bloom stores personal data locally in the browser/device by default. Export/import is JSON. Do not place health payloads in URLs or public query strings. Do not require a remote health database for the MVP.

Hosted production must be access-controlled. The application code may be hosted separately from personal local data.

## 23. Deployment and source of truth
`docs/BLOOM_MASTER_SPEC.md` is canonical for product behaviour and data rules. `docs/BLOOM_UI_BRAND_GUIDELINE.md` is canonical for visual identity and presentation. `assets/triggers/trigger-assets.json` is the machine-readable source of truth for the six locked visual-trigger assets.

`bloom.config.json`, UI copy, data schema and implementation must stay consistent with those sources. A product or visual change is incomplete until the applicable source-of-truth documents and implementation are both updated.

## 24. Acceptance checks
- No user-facing “low-energy”, “quick” or “deep”.
- First-open daily baseline works.
- Sleep + due-meds + Good/Okay/Bad sequence works.
- Bad routes to minimal support without a named mode.
- Growing lotus is the main Home control with CHECK IN overlay.
- Six visual triggers use the locked repository images and approved user-facing names.
- Trigger images are image-first with no visible text labels beneath them.
- Typical mobile layout renders triggers in three columns; desktop may render six across without adding dashboard density.
- Medication adherence is per medication/time and includes access problems.
- CHECK IN is grouped and progressively disclosed.
- Physical symptoms are optional and capacity-gated.
- Cycle/history/edit/delete/backfill work.
- Apple Health snapshot imports locally and tolerates blank Watch values.
- Data export/import works.
- No diagnosis/causation claims.
- Mobile layout is usable at 320px width and above.
