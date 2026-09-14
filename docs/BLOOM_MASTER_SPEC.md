# Bloom — Master Product & UX Specification

**Status:** Canonical source of truth for product behaviour, UX, visual identity, data handling and deployment.
**Date:** 14/09/2026
**Primary platform:** iPhone / mobile web PWA, local-first
**Date format:** dd/mm/yyyy
**Time format:** HH:mm, 24-hour

---

## 1. Product purpose

Bloom is a local-first pattern-recognition and decision-support app for understanding interactions among:

- ADHD / neurodivergent functioning
- depression
- anxiety
- perimenopause / cycle stage
- sleep
- cognition and executive function
- sensory load
- allergic rhinitis / dust allergy burden
- post-nasal drip / eye and throat symptoms
- eczema / skin-barrier inflammation
- rosacea
- keratosis pilaris
- medication context
- environmental / task / location context
- daily functioning

Bloom is **not** a fertility tracker, diagnosis engine, medical device, histamine meter or generic mood diary.

The app should reduce cognitive load, not create another obligation.

### Core principle

**Less bullshit. More humanity. Solve the actual problem.**

Every screen must make both logical sense and human sense.

Bloom should capture **within-person patterns** without pretending that an association proves cause. In particular, Bloom may investigate whether allergic / inflammatory symptom burden, sleep, sensory load, cycle stage and neurocognitive symptoms move together, but it must not conclude that histamine, inflammation or hormones caused a given symptom.

---

## 2. Core measurement model

Bloom must not treat a single morning rating as representative of an entire day when the signal is expected to change by task, sensory input, physical location, social context or time.

The day is therefore split into four layers:

1. **Morning baseline** — the minimum stable context for the day.
2. **Periodic check-ins** — time-stamped state snapshots available whenever needed.
3. **Evening wrap-up** — daily functional impact, only when enough of the day has passed for that question to make sense.
4. **Weekly review** — validated or broader recall-period questions that should not be asked repeatedly throughout a single day.

Low-energy remains an escape hatch that bypasses ordinary capture when answering questions is itself too much.

---

## 3. UX principles

1. **Capacity-aware interaction:** the app must adapt to how much effort the user can tolerate right now.
2. **Low-energy really means low-energy:** no hidden questionnaires, required ratings or disguised extra work.
3. **No traps:** every branch must have an obvious reversible exit before saving.
4. **Progressive disclosure:** show only the next useful choice; reveal detail only after the user opts in.
5. **One question per visual block:** avoid grids of equally weighted cards competing for attention.
6. **Morning baseline stays tiny:** do not let periodic-state questions creep into it.
7. **Periodic check-ins are state snapshots:** wording should explicitly mean “right now” where appropriate.
8. **Tap baskets before scales:** where a multi-select symptom/experience list is more interpretable than a numeric rating, use taps.
9. **No false precision:** avoid 1–5 scales where anchors are vague or where the thing being rated changes heavily across tasks.
10. **Whitespace before containers:** use spacing and hierarchy before adding more cards, panels or boxes.
11. **Save and exit must stay obvious:** the user should always know how to finish, go back or switch modes.
12. **No guilt, shame or judgement:** no streak pressure, missed-day warnings, scolding, punishment or emotionally loaded compliance language.
13. **Plain human language:** labels must sound like normal questions a person would understand immediately.
14. **User control:** edits, deletes, backfill and reversal must remain possible.
15. **Association, not causation:** Bloom may surface descriptive relationships but must not state that hormones, ADHD, histamine, inflammation, medication, sleep or mood caused an outcome.
16. **Actual records beat estimates:** recorded cycle dates and symptoms take priority over assumptions.
17. **No redundant capture:** the same symptom or signal should not be asked twice in one flow.
18. **Massive-overload safe:** every check-in must remain usable when cognition, sensory tolerance and executive capacity are poor.

---

## 4. Navigation / primary actions

Primary areas:

- Today
- Morning
- Check now
- Cycle
- History
- Patterns
- Weekly review

### Today behaviour

Today is an output / home screen.

It should show at-a-glance:

- current date
- current / estimated cycle phase where supported by recorded data
- cycle day where supported
- whether morning baseline is complete
- most recent periodic snapshot time
- whether evening wrap-up is available / completed
- one obvious action: **Check how I’m doing now**

If cycle phase is estimated rather than certain, say so visually, e.g.:

- **Follicular · estimated**
- **Luteal · estimated**
- **Cycle phase uncertain**

Do not confidently label follicular / ovulatory / luteal when irregular perimenopausal cycle data do not support that inference.

---

## 5. Morning baseline

### 5.1 Purpose

Capture only the information that is useful as a day-level baseline and does not become meaningless because the task, environment or sensory context changes ten minutes later.

### 5.2 Flow

First choose:

- **Low-energy**
- **Quick**
- **Deep**

This choice acts as an effort / capacity setting, not a diagnosis or severity label.

### 5.3 Low-energy morning flow

Low-energy must remain deliberately tiny.

Entry screen:

**Low-energy day**

Supporting copy:

**No ratings. No explaining. Pick the amount you can manage.**

Available actions:

- **Save this as a low-energy day**
- **I can tap a few symptoms**
- **Regular check-in**

Low-energy must NOT require:

- medication question
- sleep question
- mood
- anxiety
- executive function
- allergy questions
- skin questions
- sensory questions
- note
- weekly-style screening

If the user opens symptoms, show a short mixed physical-symptom basket and a visible **Back** action. Do not privilege menstrual symptoms at the top.

### 5.4 Quick / Deep morning minimum

For both Quick and Deep, the morning baseline is:

1. **Meds taken?** — Yes / No
2. **How did you sleep?** — **Rested / Okay / Poorly / Barely slept**
3. Save morning baseline

No other ordinary state questions are required in the morning baseline.

Medication remains absent from Low-energy.

### 5.5 Medication behaviour

- The first Quick/Deep morning question is **Meds taken?**
- Two taps only: **Yes / No**
- Stored as `medsTaken` boolean.
- Do not ask dosage, name or explanation in the baseline question.
- Editing restores the stored answer.
- Separate optional context such as **medication felt normal / weaker than usual** belongs in periodic/deep context, not in the morning baseline.

### 5.6 Sleep behaviour

Do not use an unanchored numeric scale.

Use:

- Rested
- Okay
- Poorly
- Barely slept

This is a baseline sleep-restoration signal, not an exact sleep-duration calculation.

---

## 6. Periodic check-ins — available through the day

### 6.1 Purpose

Periodic check-ins capture **state**, not “how the whole day is”.

Each snapshot:

- timestamps automatically
- may optionally capture context / location / task
- must be fast enough to use repeatedly
- must allow multi-select tap baskets
- must not require the user to answer every category

Primary CTA on Today:

**Check how I’m doing now**

### 6.2 Recommended entry design

Do NOT dump every domain onto one long form.

Start with one screen:

**What’s going on right now?**

Show large tap-cards / chips for domains:

- Mood
- Anxiety
- Mental capacity
- ADHD / executive stuff
- Sensory overload
- Allergy / sinus
- Skin
- Body / perimenopause
- Context / exposure
- Medication effect
- Nothing major / just logging

Tapping a domain opens only that basket.

The user can open several domains in one snapshot.

Save remains sticky / visible.

### 6.3 Mood

Avoid vague numeric scales.

Suggested taps:

- Good
- Okay
- Low
- Very low

### 6.4 Anxiety

Suggested taps:

- Calm
- Noticeable
- High
- Overwhelming

### 6.5 Mental capacity

Suggested taps:

- Plenty
- Enough
- Limited
- Very little

### 6.6 Reward / anhedonia

Suggested question:

**Does anything feel rewarding right now?**

- Yes
- A little
- No

This remains optional and may sit under Mood / ADHD detail rather than the first periodic screen.

---

## 7. ADHD / executive-function experience basket

The following are **self-described experience tags**, not formal diagnoses, and should not be presented as scientifically definitive ADHD subtypes.

The app should allow taps for current or recent ADHD-like experiences drawn from the user-provided reference image and prior Bloom requirements.

### 7.1 Core executive / cognitive difficulty tags

- starting / task initiation
- sustaining attention
- switching tasks
- prioritising
- sequencing / organising
- working memory
- remembering what I’m doing
- finding words
- processing speed / thinking quickly
- decision-making
- impulsivity / acting before thinking
- restlessness / need to move

### 7.2 Lived-experience ADHD tags

- **body doubling needed**
- **time blindness**
- **rejection sensitivity**
- **hyperfocus**
- **task paralysis**
- **revenge bedtime procrastination**
- **doom piles / clutter accumulation**
- **object permanence / out-of-sight problem**
- **wall of awful / task dread**
- **sensory overload**
- **emotional flooding**
- **analysis paralysis**
- **waiting mode**
- **interest-based activation**
- **shutdown / words stop coming**
- **masking / performing okay externally**
- **justice sensitivity**
- **stimming / regulating movement**
- **info-dumping / urge to share intensely**
- **ADHD tax / forgotten fees, duplicates, subscriptions, late costs**

### 7.3 Storage / analysis rules

- Store tags as discrete strings, not a summed “ADHD severity score”.
- Do not infer a diagnosis from tags.
- Pattern analysis may report repeated co-occurrence with sleep, cycle phase, sensory load, allergy burden, anxiety, mood or context.
- Do not imply that a colloquial label is a validated clinical construct.

---

## 8. Sensory overload basket

Sensory overload is a parent category with specific tap-level subtypes.

Question:

**What’s too much right now?**

Allow multi-select:

- sound / noise
- multiple conversations
- sudden / loud sound
- bright light / glare
- flicker
- visual clutter / busy screens
- touch / clothing / seams / skin contact
- people touching me
- smell / perfume / cleaning products
- food smells / smoke
- temperature too hot
- temperature too cold
- rapid temperature change
- crowding / people too close
- movement / motion around me
- travel / vehicle motion
- hunger / thirst / pain / body sensations
- palpitations / nausea / bladder or internal-body discomfort
- need for pressure / proprioceptive input
- need to move / restless body
- too many inputs at once
- social input / people talking at me
- conversation / demand load
- screen / notification / message overload
- food texture / mouthfeel / strong taste
- none

Store both:

- `sensoryOverload = true/false`
- selected subtype tags

This allows broad pattern detection and subtype analysis.

---

## 9. Allergy / inflammatory symptom basket

Bloom must track symptoms without pretending to measure blood histamine or systemic inflammation.

### 9.1 Allergy / sinus / eye / throat

Multi-select:

- blocked / congested nose
- runny nose
- sneezing
- post-nasal drip
- scratchy / itchy throat
- itchy / watery eyes
- sinus pressure
- itchy skin
- none noticeable

Optional overall burden:

- Mild
- Clearly bothering me
- Severe

Do not require an overall burden tap if symptom-level selections are sufficient.

### 9.2 Allergy medication

Optional context field, separate from the primary psychiatric / ADHD medication question:

**Allergy medication taken?**

- Yes
- No
- Not due

This should remain optional unless future evidence shows it materially improves the app’s pattern value.

---

## 10. Skin symptom basket

Multi-select:

- rosacea flushing / redness
- facial heat
- facial burning / stinging
- eczema itch
- eczema dry / inflamed patches
- general skin itching
- keratosis pilaris noticeably worse
- none

Do not collapse rosacea, eczema and keratosis pilaris into one “histamine” score.

---

## 11. Body / perimenopause symptom basket

Do not list bleeding, cramps and bloating first by default.

Recommended ordering should prioritise broad lived impact and avoid implying that perimenopause is mainly menstrual.

Suggested basket:

- appetite / craving change
- fatigue / body heaviness
- headache / migraine
- hot flush
- joint / muscle aches
- nausea / digestive change
- night sweat
- palpitations
- sleep disruption
- temperature swings
- breast tenderness
- dizziness / light-headedness
- libido change
- vaginal / urogenital discomfort
- pelvic symptoms
- bleeding / spotting change
- fluid retention / bloating
- cramps

Allow multiple taps.

Quick/periodic views should not force category headings if a flat tap basket is easier during overload.

---

## 12. Context / exposure basket

Optional, multi-select:

- dust exposure / cleaning
- musty / damp environment
- outdoors / pollen
- heat
- cold
- alcohol
- spicy food
- unusual food reaction
- illness / infection
- high stress
- social demand
- cognitive / work demand
- noisy environment
- bright / visually busy environment
- unfamiliar location
- travel
- poor sleep carry-over
- none obvious

Optional user-added note remains available but should never be required.

---

## 13. Medication-effect context

Optional periodic / Deep context only:

- medication felt normal
- medication felt weaker than usual

This is separate from `medsTaken`.

Do not make this a required daily question.

---

## 14. Evening wrap-up

Evening-only because daily functional impact makes little sense before the day has happened.

Question:

**How much did symptoms get in the way today?**

Suggested taps:

- Not much
- Somewhat
- A lot
- I basically couldn’t function normally

Optional follow-up only if useful:

**Where did it get in the way?**

- work
- parenting / home
- social interaction
- self-care
- errands / admin
- sleep / winding down

Do not ask this as part of the morning baseline.

---

## 15. Weekly review

Weekly review is the correct place for broader recall-period assessment.

### 15.1 Depression / anxiety

Use an ultra-brief validated approach where licensing / wording permits, with a weekly recall period.

Do not repeatedly ask diagnostic screener wording throughout a single day.

### 15.2 ADHD / functioning

Weekly review may summarise recurring problems with:

- starting
- attention
- organisation
- working memory
- impulsivity / restlessness
- emotional regulation
- task paralysis / avoidance
- hyperfocus / difficulty disengaging

### 15.3 Allergy / inflammatory review

Weekly questions may include:

- Were allergy symptoms worse than usual this week?
- Were skin symptoms worse than usual?
- Was sleep disrupted by nasal, throat or itch symptoms?
- Did you need extra allergy treatment?
- Was there an obvious exposure pattern?

### 15.4 Perimenopause review

Weekly review may capture meaningful change in:

- temperature / vasomotor symptoms
- sleep
- cognition
- mood / anxiety
- body symptoms
- skin / urogenital symptoms
- cycle behaviour

### 15.5 Weekly review should remain skippable

No shame or penalty for missed weekly reviews.

---

## 16. Cycle tracking

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

### 16.1 Phase display

Bloom should visually show an estimated phase on login / Today where supported:

- Follicular
- Ovulatory / around ovulation, only if defensible
- Luteal
- Menstrual
- Phase uncertain

Because perimenopausal cycles may be irregular:

- label estimates as estimates
- actual bleeding records take priority
- never pretend phase certainty from a generic 28-day assumption

### 16.2 Bleeding control

Use a real Yes/No switch labelled:

**Bleeding today**

Helper:

**Did you have menstrual bleeding today? “Period starts today” is only for day 1 of a new period.**

---

## 17. Today screen

Today should feel like a calm command centre, not a dashboard full of cards.

Recommended structure:

### Top strip

- Bloom wordmark
- date
- cycle phase / cycle day visual

### Morning baseline state

Compact line, e.g.:

**Morning · meds ✓ · sleep: Poorly**

### Primary action

Large button:

**Check how I’m doing now**

### Recent snapshots

Show the last 1–3 periodic snapshots as tiny summary strips, e.g.:

**11:20 · sensory + allergy + limited capacity**

No giant cards.

### Evening

After an appropriate time / when manually opened:

**Wrap up today**

### Weekly

When due:

small non-blocking prompt:

**Weekly review available**

---

## 18. History

History must distinguish entry type:

- Morning baseline
- Periodic snapshot
- Evening wrap-up
- Weekly review
- Low-energy

History supports:

- chronological list
- edit
- delete
- backfill
- restoration of saved taps / values
- clear timestamp
- no conflation of multiple same-day snapshots into one entry

---

## 19. Patterns

Pattern analysis should use the layered data model.

Examples of valid descriptive questions:

- Does poor sleep tend to precede more sensory overload snapshots?
- Do allergy-heavy snapshots coincide with lower mental capacity?
- Are certain sensory subtypes repeatedly associated with anxiety or shutdown?
- Do rosacea / eczema flares cluster with heat, dust, stress or cycle phase?
- Do “medication felt weaker” snapshots cluster with poor sleep or particular cycle phases?
- Are task paralysis / waiting mode / analysis paralysis more common in certain contexts?
- Do late-day functioning problems follow mornings with poor sleep?
- Do certain estimated cycle phases coincide with increased sensory, cognitive or allergy burden?

Rules:

- require sufficient repeated data
- association, not causation
- never create a “histamine score” from symptom clusters
- never create a global ADHD severity score from colloquial experience tags
- low-energy entries without ratings must not corrupt averages
- perimenopausal phase estimates must be labelled as estimates

---

## 20. Data model

Primary local stores may evolve beyond the original `bloom.entries.v3` as the layered model is implemented.

At minimum, each entry should include:

- `id`
- `entryType`: `morning` | `snapshot` | `evening` | `weekly` | `low`
- `date`
- `time`
- `createdAt`

Morning fields may include:

- `mode`
- `medsTaken`
- `sleepRestoration`

Periodic fields may include:

- `moodState`
- `anxietyState`
- `mentalCapacity`
- `rewardState`
- `adhdTags[]`
- `sensoryOverload`
- `sensoryTags[]`
- `allergyTags[]`
- `allergyBurden`
- `allergyMedication`
- `skinTags[]`
- `bodyTags[]`
- `contextTags[]`
- `medicationEffect`
- `note`

Evening fields may include:

- `functionalImpact`
- `impactDomains[]`

Cycle remains separately stored so actual cycle records are not duplicated unnecessarily.

---

## 21. Simplified UI for massive system overload

### 21.1 Design goal

The user should never have to scan a giant form to work out where to begin.

### 21.2 Morning

Single vertical screen:

**How much can you manage?**

[ Low-energy ] [ Quick ] [ Deep ]

If Quick/Deep:

**Meds taken?**
[ Yes ] [ No ]

**How did you sleep?**
[ Rested ] [ Okay ] [ Poorly ] [ Barely slept ]

[ Save morning ]

That is the entire baseline.

### 21.3 Periodic snapshot

Screen 1:

**What’s going on right now?**

Large tappable domain tiles:

[ Mood ]
[ Anxiety ]
[ Mental capacity ]
[ ADHD / executive ]
[ Sensory overload ]
[ Allergy / sinus ]
[ Skin ]
[ Body / peri ]
[ Context ]
[ Medication effect ]

Each tile opens a bottom sheet / inline basket of taps.

Selected domains show a small tick / count.

Sticky actions:

[ Save snapshot ]   [ Cancel ]

### 21.4 Reduce reading during overload

- icons + short labels
- no paragraphs in active check-in
- optional help behind `?`
- no card-within-card layouts
- no long explanatory copy between tap groups
- no requirement to open domains that are irrelevant
- use persistent selected-state styling
- support one-handed taps
- allow immediate save after only one domain is captured

### 21.5 Sensory overload UI

Sensory overload opens a flat tap basket first, grouped visually only when useful.

Do not require the user to navigate to separate pages for sound vs light vs touch.

### 21.6 ADHD UI

ADHD / executive opens with the most common actionable tags first:

- can’t start
- can’t focus
- can’t switch
- decision stuck
- overwhelmed
- hyperfocused
- shutdown
- emotional flooding

A **More ADHD experiences** disclosure reveals the longer lived-experience list such as body doubling, waiting mode, wall of awful, doom piles, time blindness, etc.

This prevents the 20-item reference list from becoming another overload source.

### 21.7 Evening

One question first:

**How much did symptoms get in the way today?**

Optional follow-up domains only if the user wants them.

### 21.8 Weekly

Weekly review is its own guided flow, never appended to a periodic snapshot.

---

## 22. Visual identity

The product name is simply **Bloom**.

Avoid:

- fertility-app clichés
- clinical dashboard beige
- generic rounded-card SaaS styling
- dense grids
- flowers pasted awkwardly over content
- fixed floral artwork obscuring text
- excessive serif typography

Use the existing Bloom floral / painterly identity, white canvas, hot pink / coral / orange / teal / olive / bright yellow / plum accents, and strong whitespace.

The interface should feel lively and human while the active interaction itself stays calm.

---

## 23. Regression rules

Before telling the user a build works, verify:

1. Morning baseline never grows beyond Mode → meds (Quick/Deep only) → sleep → save unless explicitly approved later.
2. Low-energy has no medication or sleep requirement.
3. Periodic check-ins are available at any time and timestamp separately.
4. Multiple periodic snapshots can exist on the same day.
5. Periodic questions use “right now” framing where appropriate.
6. Sensory overload supports subtype taps.
7. ADHD experiences are stored as tags, not converted to a false severity score.
8. Allergy symptoms are not labelled “histamine level”.
9. Rosacea / eczema / KP are not merged into a histamine score.
10. Body/perimenopause lists do not automatically foreground bleeding/cramps/bloating.
11. Cycle phase shown on Today is explicitly estimated when uncertain.
12. Evening functional impact is not asked as a morning question.
13. Weekly review remains separate from daily snapshots.
14. Editing restores all stored state correctly.
15. Service-worker cache version matches deployed runtime assets.
16. Mobile interaction avoids dense equal-priority card grids.
17. A snapshot can be saved after capturing only one relevant domain.
18. No trial-font watermarks or placeholder artefacts appear.

---

## 24. Change-management rule

Any future change that alters:

- morning baseline
- periodic snapshot logic
- evening wrap-up
- weekly review
- medication capture
- ADHD tag taxonomy
- sensory taxonomy
- allergy / skin taxonomy
- symptom taxonomy
- cycle logic
- data model
- pattern logic
- visual identity
- mobile interaction
- deployment / caching behaviour

must update this master specification in the same change so requirements are not lost in chat history.
