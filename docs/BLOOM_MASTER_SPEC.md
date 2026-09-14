# Bloom — Master Product & UX Specification

**Status:** Canonical source of truth for product behaviour, UX, visual identity, data handling and deployment.
**Date:** 14/09/2026
**Primary platform:** iPhone / mobile web PWA, local-first
**Date format:** dd/mm/yyyy
**Time format:** HH:mm, 24-hour

---

## 1. Product purpose

Bloom is a local-first pattern-recognition and decision-support app for understanding interactions among ADHD, mood/anxiety, perimenopause, sleep, executive function, sensory load, cognition, physiology, medication context and daily functioning.

Bloom is **not** a fertility tracker, diagnosis engine, medical device or generic mood diary.

The app should reduce cognitive load, not create another obligation.

### Core principle

**Less bullshit. More humanity. Solve the actual problem.**

Every screen must make both logical sense and human sense.

---

## 2. UX principles

1. **Capacity-aware interaction:** the app must adapt to how much effort the user can tolerate right now.
2. **Low-energy really means low-energy:** no hidden questionnaires, required ratings or disguised extra work.
3. **No traps:** every branch must have an obvious reversible exit before saving.
4. **Progressive disclosure:** show only the next useful choice; reveal detail only after the user opts in.
5. **One question per visual block:** avoid grids of equally weighted cards competing for attention.
6. **Mode first:** Low-energy / Quick / Deep is the first meaningful choice in the check-in flow and acts as an effort setting.
7. **Primary-question hierarchy:** after mode choice, the interface should follow a clear sequence of primary question → direct tap(s) → optional detail → save.
8. **Whitespace before containers:** use spacing and hierarchy before adding more cards, panels or boxes.
9. **Save and exit must stay obvious:** the user should always know how to finish, go back or switch modes.
10. **No guilt, shame or judgement:** no streak pressure, missed-day warnings, scolding, punishment or emotionally loaded compliance language.
11. **Plain human language:** labels must sound like normal questions a person would understand immediately.
12. **User control:** edits, deletes, backfill and reversal must remain possible.
13. **Association, not causation:** Bloom may surface descriptive relationships but must not state that hormones, ADHD, medication, sleep or mood caused an outcome.
14. **Actual records beat estimates:** recorded cycle dates and symptoms take priority over assumptions.
15. **No redundant capture:** the same symptom or signal should not be asked twice in one flow.

---

## 3. Navigation

Primary areas:
- Check-in
- Today
- Cycle
- History
- Patterns

### Today visibility rule

**Today is an output screen, not a starting screen.**

Before a check-in exists for the current day:
- Today is hidden.
- The app lands on Check-in.

After a check-in exists for today:
- Today becomes visible.
- Today summarises the latest relevant check-in for the day.

If the last current-day entry is deleted:
- Today hides again.

---

## 4. Check-in modes

### 4.0 Shared check-in hierarchy

The check-in flow should be visually and logically ordered as follows:

1. **Choose depth:** Low-energy / Quick / Deep.
2. For Quick and Deep only, the **first question immediately after mode selection is `Meds taken?`** with **Yes / No** taps.
3. Then show the core ratings for that mode.
4. Reveal optional detail only after core capture.
5. Keep the save action obvious at the end of the active flow.

Do not place the medication question below the core ratings, inside context, or near the bottom of the form.

The three modes should feel like effort settings, not separate form sections buried inside a long page.

### 4.1 Low-energy

Purpose: capture the minimum useful signal on a day when answering questions itself feels like work.

The user must not be required to provide mood, energy, executive-function, medication or other ratings/questions.

Entry screen:

**Low-energy day**

Supporting copy:
**No ratings. No explaining. Pick the amount you can manage.**

Available actions:
- **Save this as a low-energy day** — immediately records a low-energy check-in with no required symptoms or ratings.
- **I can tap a few symptoms** — reveals a short physical-symptom basket.
- **Regular check-in** — exits Low-energy and opens the normal Quick flow without saving anything.

The regular-check-in exit must be visibly available before the user commits to either save path.

If symptom capture is opened, the user must also have a visible **Back** action that returns to the Low-energy entry screen without saving or retaining accidental symptom selections.

Low-energy short symptom basket:
- spotting
- heavy bleeding
- cramps
- bloating / fluid retention
- headache / migraine
- hot flush
- night sweat
- sleep disrupted
- increased hunger / cravings

Symptom heading:
**Anything physical worth noting?**

Helper copy:
**Tap only what stands out. You can skip this.**

Then show one clear **Save low-energy check-in** action plus **Back**.

Low-energy must not show:
- medication-taken question
- note/comment field
- mental energy rating
- mood rating
- functioning/executive rating
- context tags
- brain/executive tags
- duplicate cycle questions
- required fields beyond date/time already supplied automatically

### 4.2 Quick

Purpose: useful core signal capture with modest effort.

Immediately after the user selects **Quick**, the first question is:

**Meds taken?**
- two taps only: **Yes** / **No**
- no dosage, medication-name, timing or explanation fields in this question
- the answer is stored as a boolean `medsTaken`
- this question appears before Activation, Mental energy, Mood or Interest / reward

Core ratings then follow:
- Activation
- Mental energy
- Mood
- Interest / reward

At least one core rating is required.

After the core ratings, optionally show the full body/cycle symptom set.

No deep executive/cognitive signal tags unless the user switches to Deep.

The Quick layout should feel like a short pulse-check rather than a dashboard. Avoid presenting the four core ratings as four equally weighted cards if a simpler stacked or sequential layout reads more clearly on mobile.

### 4.3 Deep

Purpose: full neurocognitive and contextual capture when the user has capacity.

Immediately after the user selects **Deep**, the first question is:

**Meds taken?**
- two taps only: **Yes** / **No**
- answer stored as `medsTaken`
- this question appears before all ratings

Core ratings follow:
- Activation
- Mental energy
- Mood
- Interest / reward

Then deeper capture may be progressively disclosed:
- Executive control
- Cognitive clarity
- Emotional regulation
- Sleep restoration
- Brain / executive signals
- Context / companion signals
- Full body / cycle symptoms
- Optional note

Deep should be organised by meaning rather than database fields. Recommended hierarchy:
1. Medication status
2. Core picture
3. Executive & cognitive detail
4. Body & cycle symptoms
5. Context / companion signals
6. Optional note
7. Save

Optional Deep sections may be collapsed or revealed progressively to reduce visual load.

### 4.4 Medication question behaviour

- Appears in Quick and Deep only.
- Never appears in Low-energy.
- It is the **first question after the Low-energy / Quick / Deep mode choice**.
- Uses exactly one Yes/No choice, not a slider, scale, free text or multi-option medication questionnaire.
- Quick/Deep cannot save until Yes or No has been tapped.
- Editing an existing Quick/Deep entry restores the saved answer when present.
- Older entries without a `medsTaken` value may be edited, but the user must choose Yes or No before re-saving.
- The field records whether medication was taken, not whether it worked.
- Existing separate context such as “medication felt weaker” or “medication felt normal” remains conceptually distinct from `medsTaken`.

---

## 5. Body & cycle symptoms

Quick and Deep retain the full grouped symptom set.

### Full symptom taxonomy

**Bleeding**
- spotting
- light bleeding
- heavy bleeding
- clots / flooding

**Pain & body**
- cramps
- pelvic pain / pressure
- breast tenderness
- bloating / fluid retention
- headache / migraine
- joint / muscle aches

**Temperature & sleep**
- hot flush
- night sweat
- temperature swings
- sleep disrupted

**Nervous system**
- palpitations
- dizziness / light-headedness

**Appetite & gut**
- increased hunger / cravings
- nausea / digestive changes

**Sexual / genitourinary**
- vaginal dryness / discomfort
- libido change

Avoid asking the same physical symptom again in context tags if it already exists here.

---

## 6. Cycle tracking

Cycle tracking is based on real records, not regular-cycle assumptions.

Required capabilities:
- record period start today
- add a historical period-start date manually
- record whether menstrual bleeding occurred today
- view Monday-first calendar
- calculate cycle day from actual recorded period starts
- show previous cycle length and observed variation
- edit/delete historical period-start records
- prevent future period-start or bleeding dates

### Bleeding control

Use a real Yes/No switch labelled:

**Bleeding today**

Helper text should explain:
**Did you have menstrual bleeding today? “Period starts today” is only for day 1 of a new period.**

Do not use unexplained wording such as “Toggle bleeding today”.

### Estimates

Perimenopause-aware rule:
- do not assume a regular cycle
- actual recorded dates take priority
- estimates are optional and secondary
- do not show controls that imply behaviour if the app does not actually use them

---

## 7. Today screen

Today summarises what was actually captured.

For Quick/Deep entries, Today may show:
- activation
- mental energy
- effort cost
- executive functioning
- cognitive clarity
- mood
- interest/reward
- regulation
- medication context
- selected context / body signals
- cycle day when supported by actual period records

For Low-energy entries:
- keep the summary minimal
- do not render a wall of empty rating placeholders
- show that a low-energy check-in occurred
- show selected physical symptoms, if any
- otherwise show no invented interpretation

---

## 8. History

Must support:
- chronological list
- mode label: Low-energy / Quick / Deep
- edit
- delete
- backfill
- correct restoration of the original mode when editing
- restoration of saved symptoms and values
- restoration of `medsTaken` for Quick/Deep entries when present

Editing a Low-energy entry must reopen the Low-energy flow, not expose hidden legacy rating controls.

---

## 9. Patterns

Ranges:
- 14 entries
- 30 entries
- 90 entries

Patterns may compare:
- activation vs mood
- mental energy vs reward
- sleep vs executive functioning
- repeated executive/cognitive signals
- repeated physical/cycle symptoms
- medication taken vs not taken when sufficient comparable data exists
- medication-felt-weaker vs medication-felt-normal entries when enough data exists
- cycle timing vs other measures when supported by recorded data

Rules:
- require sufficient data before surfacing claims
- use descriptive language
- state association, not cause
- prefer “not enough repeated structure yet” to inventing a pattern
- Low-energy entries without ratings must not corrupt averages or correlations
- medication-taking status must never be interpreted as proof that medication caused an outcome

---

## 10. Data & local-first behaviour

Primary local entry store: `bloom.entries.v3`
Legacy migration source: `bloom.entries.v2`
Cycle store: `bloom.cycle.v1`

Check-in data may include:
- `medsTaken`: `true`, `false`, or absent/null for historical/Low-energy entries

Requirements:
- local-first storage
- JSON export/import
- import check-ins and cycle records
- preserve existing local data where possible
- no cloud account required for normal use
- changes must survive PWA/service-worker refreshes without mismatched old/new scripts

---

## 11. Visual identity

The product name is simply **Bloom**.

Avoid:
- “Bloom · pattern tracker”
- fertility-app clichés
- clinical dashboard beige
- generic rounded-card SaaS styling
- flowers pasted awkwardly over content
- fixed floral artwork obscuring text
- excessive serif typography

### Canva source design

Design ID: `DAHU8LlDhaQ`

Use the floral artwork, palette, structure and whimsical invitation feel as the visual basis while adapting it to app usability.

Palette direction:
- hot pink / coral
- orange
- teal
- olive / chartreuse
- bright yellow
- dark plum
- white canvas

Typography:
- Brasika-style display treatment for the Bloom masthead where licensing/use is valid
- clean readable sans-serif for interaction text and subheadings
- no trial/watermarked fonts

Floral treatment:
- substantial but decorative
- must not obscure content
- must not float as a random slab at the bottom
- mobile-safe

---

## 12. Mobile interaction rules

- optimise for iPhone first
- buttons large enough for one-handed use
- horizontal navigation must not clip essential tabs
- mode selection must remain visible and easy to understand at the top of the check-in flow
- the first Quick/Deep question after mode choice must be **Meds taken?**
- favour stacked/sequential question blocks over dense multi-column card layouts on mobile
- avoid long scrolls where progressive disclosure can reduce the page
- optional detail should remain collapsed until needed where this improves clarity
- use whitespace and section rhythm before adding cards or borders
- keyboard choice must match input type
- date entry must accept valid `dd/mm/yyyy`
- clear focus states
- no accidental save traps
- obvious escape/reversal from every branch

---

## 13. Regression rules

Before telling the user a build works, verify these flows conceptually and in code:

1. No entry today → Today hidden, Check-in visible.
2. Check-in depth selector appears before mode-specific questions.
3. Low-energy → Save this as a low-energy day → saves without any rating or medication question.
4. Low-energy → I can tap a few symptoms → short 9-item symptom basket only → Save.
5. Low-energy symptom basket → Back → returns without saving and clears accidental selections.
6. Low-energy → Regular check-in → exits without saving → Quick flow visible.
7. Low-energy selections do not leak into later entries.
8. Quick → **Meds taken? Yes/No is the first question after mode selection**, requires an answer, then core ratings follow.
9. Deep → **Meds taken? Yes/No is the first question after mode selection**, requires an answer, then core ratings and progressively disclosed detail follow.
10. Quick retains full body/cycle symptom set and core ratings.
11. Deep retains full body/cycle symptom set, executive/cognitive signals and optional note.
12. Editing Quick/Deep restores `medsTaken` when stored.
13. Valid `dd/mm/yyyy` date saves.
14. Bleeding switch accurately reflects stored state.
15. Period start automatically counts as a bleeding day, but deleting a period start removes only the automatically tied start-day record as implemented.
16. Editing restores the correct mode and saved data.
17. Deleting the only current-day entry hides Today again.
18. Pattern calculations safely ignore null Low-energy ratings.
19. Service worker cache version matches deployed runtime assets.
20. No trial-font watermarks or external placeholder artefacts appear.
21. Mobile Quick/Deep layouts do not regress into dense grids of equal-priority cards when a sequential layout is intended.

---

## 14. Change-management rule

Any future change that alters:
- product behaviour
- check-in logic
- medication capture
- symptom taxonomy
- cycle logic
- data model
- pattern logic
- visual identity
- mobile interaction
- deployment / caching behaviour

must update this master specification in the same change so requirements are not lost in chat history.
