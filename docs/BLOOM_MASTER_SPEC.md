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
5. **No guilt, shame or judgement:** no streak pressure, missed-day warnings, scolding, punishment or emotionally loaded compliance language.
6. **Plain human language:** labels must sound like normal questions a person would understand immediately.
7. **User control:** edits, deletes, backfill and reversal must remain possible.
8. **Association, not causation:** Bloom may surface descriptive relationships but must not state that hormones, ADHD, medication, sleep or mood caused an outcome.
9. **Actual records beat estimates:** recorded cycle dates and symptoms take priority over assumptions.
10. **No redundant capture:** the same symptom or signal should not be asked twice in one flow.

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

Required medication context:
- **Meds taken?**
- two taps only: **Yes** / **No**
- no dosage, medication-name, timing or explanation fields in this question
- the answer is stored as a boolean `medsTaken`

Core ratings:
- Activation
- Mental energy
- Mood
- Interest / reward

At least one core rating is required.

Then optionally show the full body/cycle symptom set.

No deep executive/cognitive signal tags unless the user switches to Deep.

### 4.3 Deep

Purpose: full neurocognitive and contextual capture when the user has capacity.

Required medication context:
- **Meds taken?**
- two taps only: **Yes** / **No**
- answer stored as `medsTaken`

Includes:
- Activation
- Mental energy
- Mood
- Interest / reward
- Executive control
- Cognitive clarity
- Emotional regulation
- Sleep restoration
- Brain / executive signals
- Context / companion signals
- Full body / cycle symptoms
- Optional note

### 4.4 Medication question behaviour

- Appears in Quick and Deep only.
- Never appears in Low-energy.
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
- avoid long scrolls where progressive disclosure can reduce the page
- keyboard choice must match input type
- date entry must accept valid `dd/mm/yyyy`
- clear focus states
- no accidental save traps
- obvious escape/reversal from every branch

---

## 13. Regression rules

Before telling the user a build works, verify these flows conceptually and in code:

1. No entry today → Today hidden, Check-in visible.
2. Low-energy → Save this as a low-energy day → saves without any rating or medication question.
3. Low-energy → I can tap a few symptoms → short 9-item symptom basket only → Save.
4. Low-energy symptom basket → Back → returns without saving and clears accidental selections.
5. Low-energy → Regular check-in → exits without saving → Quick flow visible.
6. Low-energy selections do not leak into later entries.
7. Quick shows **Meds taken? Yes/No**, requires an answer, retains full body/cycle symptom set and core ratings.
8. Deep shows **Meds taken? Yes/No**, requires an answer, retains full body/cycle symptom set, executive/cognitive signals and optional note.
9. Editing Quick/Deep restores `medsTaken` when stored.
10. Valid `dd/mm/yyyy` date saves.
11. Bleeding switch accurately reflects stored state.
12. Period start automatically counts as a bleeding day, but deleting a period start removes only the automatically tied start-day record as implemented.
13. Editing restores the correct mode and saved data.
14. Deleting the only current-day entry hides Today again.
15. Pattern calculations safely ignore null Low-energy ratings.
16. Service worker cache version matches deployed runtime assets.
17. No trial-font watermarks or external placeholder artefacts appear.

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
