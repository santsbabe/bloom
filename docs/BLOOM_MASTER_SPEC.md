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
- medication adherence / availability context
- caffeine / energy-drink intake
- alcohol intake
- hydration
- meals / appetite
- naps / accidental dozing
- movement / steps
- heart-rate / HRV / respiratory data where available
- environmental / task / location / travel context
- daily functioning

Bloom is **not** a fertility tracker, diagnosis engine, medical device, histamine meter or generic mood diary.

The app should reduce cognitive load, not create another obligation.

### Core principle

**Less bullshit. More humanity. Solve the actual problem.**

Bloom should capture **within-person patterns** without pretending that association proves cause. It may surface cautious observations such as “often coincided with”, but must never state that hormones, ADHD, histamine, inflammation, medication, travel, sleep or mood caused an outcome.

---

## 2. Core measurement model

The day is split into four layers:

1. **Morning baseline** — automatically opens on first use of the day.
2. **Periodic check-ins** — available after baseline throughout the day.
3. **Evening review** — due-medication check first, then optional reflection.
4. **Weekly review** — Sunday-evening only, optional, with pattern summary first.

A separate **What just happened?** tool is available for interrogating a specific situation.

Low-energy is no longer a pre-baseline bypass. Daily sleep + morning-medication baseline still occurs; **Bad** then routes immediately into the low-energy path.

---

## 3. UX principles

1. Progressive disclosure: one useful decision at a time.
2. Massive-overload safe: no giant forms or dense equal-priority card grids.
3. No guilt, shame, streak pressure or punishment.
4. Save / back / skip must remain obvious.
5. No redundant capture: shared experiences map to one underlying event record.
6. Tap baskets before vague numeric scales.
7. Plain human language in active flows.
8. Association, not causation.
9. Actual recorded data beat inferred data.
10. Images may replace visible words where explicitly specified, but accessibility labels must remain.
11. Decorative copy / wellness platitudes are prohibited.
12. Warmth comes from imagery, colour, spacing and interaction — not slogans.
13. Edits, deletes, backfill and reversal remain possible.
14. Local-first storage remains the default.

---

## 4. Daily first-open flow

On first app use each calendar day, Bloom opens the baseline automatically rather than showing Today/Home first.

Flow:

1. **Sleep**
2. **Morning meds**
3. **Good / Okay / Bad**
4. Then:
   - Good → Today/Home
   - Okay → Today/Home
   - Bad → current low-energy path immediately

Good / Okay / Bad is asked only once per day.

Later periodic check-ins do **not** repeat it.

If first use occurs in the afternoon or evening, Bloom still asks the baseline retrospectively and allows **I don’t remember** where applicable.

After baseline is complete, **Today/Home** becomes the main hub.

---

## 5. Sleep baseline

### 5.1 Subjective sleep quality

Use:

- Rested
- Okay
- Poorly
- Barely slept
- I don’t remember

### 5.2 Sleep timing

Capture approximate:

- bedtime
- wake-up time

When both are known, calculate approximate duration automatically.

Allow manual correction of calculated duration. Suggested correction reasons:

- Awake during the night
- Took a long time to fall asleep
- Woke earlier than getting up
- Napped
- Sleep was fragmented
- Times are approximate
- Other

Ask number of night awakenings only when earlier answers make it relevant, rather than every day.

### 5.3 Apple Health sleep

When available, Apple Health data should pre-fill:

- bedtime
- wake time
- sleep duration

Subjective sleep quality must still be asked.

If the user corrects imported sleep values:

- the corrected value becomes authoritative in Bloom
- the original Apple Health value is retained quietly in the background for troubleshooting/import accuracy

Historical Apple Health refreshes may update past imported data automatically, but must **not overwrite manual sleep corrections**.

---

## 6. Medication model

The old single `medsTaken` boolean architecture is obsolete.

Medication tracking is **time-of-day adherence and access**, not medication effect.

### 6.1 Core flow

For medications due at the current time:

**Did you take your meds? → Which meds? → if not, why not?**

Medication-level answer options when retrospective:

- Yes
- No
- I don’t remember

Ask why only after **No**.

Suggested why-not options:

- Forgot
- Ran out
- Chose not to
- Side effects
- Couldn’t access it
- Unavailable / out of stock
- Other

`Not due today` should be represented by schedule logic rather than routinely presented for medications already known to be due.

### 6.2 Medication configuration

Each medication supports:

- active / inactive status
- morning / evening / custom time
- daily / cycle-aware / custom schedule
- temporary-unavailable state
- unavailable review date

On review date:

**Is this medication available again? → Yes / No / Check later**

Temporarily unavailable medications suppress routine adherence prompts while preserving the access problem in the data.

### 6.3 Current medication examples to support

Configurable examples include:

- Fenofex — morning antihistamine
- Dolin — morning antidepressant
- oestrogen gel — morning
- Vagifem (?) vaginal HRT — when due, according to the user’s actual prescribed regimen
- Urogestan (?) — according to actual prescribed regimen, often evening where appropriate
- Vyvanse — show only if active/current
- prescribed testosterone liquid — schedule configurable, including unavailable/out-of-stock state

Bloom must not invent medical schedules. Prescription-led configuration wins.

### 6.4 Evening meds

If something is due in the evening, the evening flow starts with medication adherence and only then offers the reflection flow.

### 6.5 Removed concept

**Medication effect** is removed from periodic tracking entirely.

---

## 7. Low-energy path

Low-energy begins **after** daily sleep + morning-medication baseline if the daily state answer is **Bad**.

It must remain minimal and non-punitive.

It should preserve a visible **Regular check-in** escape that routes to the normal grouped periodic options.

Low-energy must not require a large symptom interrogation. It may offer a small set of immediately relevant taps and/or direct access to **What would help right now?**.

---

## 8. Today / Home

After baseline, Today/Home is the main hub.

### 8.1 Main action

A prominent growing-lotus image acts as the primary check-in control.

Visible label: **CHECK IN**

The label is overlaid low across the lotus image **exactly as approved in the selected mock-up**.

### 8.2 Quick-event shortcuts

Image-only quick shortcuts appear directly on Today/Home for at least:

- nap / doze
- caffeine / energy drink
- alcohol
- breath-holding / forgetting to breathe
- water
- sensory overload

No visible text labels under these shortcut images.

Each shortcut must still have a correct accessibility label.

The shortcut artwork must use **literal objects** rendered in the Bloom painterly aesthetic, not emoji and not abstract medical pictograms.

### 8.3 Cycle display

Today/Home may show:

- cycle day
- estimated cycle phase
- uncertainty where relevant

Cycle status belongs here, not inside the morning baseline.

### 8.4 Visual day progression

The whole Home experience evolves gradually with the day:

- lotus stage
- ambient lighting
- background tones
- floral imagery
- overall garden mood

The lotus progression is based **only on time of day**, never on check-in completion or behavioural reward.

No wilting, sadness or punishment for missed use.

The same garden should feel as though it is moving through the day, not switching between unrelated themes.

The progression should follow **local sunrise/sunset**, not fixed clock thresholds.

---

## 9. Visual identity

Use the established Bloom painterly/floral visual identity and palette:

- hot pink
- coral/orange
- teal
- olive
- bright yellow
- plum
- strong white space

Avoid:

- generic beige wellness UI
- clinical dashboard styling
- generic SaaS cards
- emoji as visual shortcuts
- decorative motivational slogans
- platitudes such as “small moments make a brighter you”
- trial-font watermarks

### 9.1 Typography

For captions / labels, use the approved **clean all-caps, widely tracked sans-serif style** shown in the supplied reference image.

The primary check-in lotus uses **CHECK IN** only.

### 9.2 Decorative copy

There is **no decorative/tagline copy**. Imagery does the emotional work.

---

## 10. Periodic check-ins

Periodic check-ins are available only after the daily baseline is complete.

The primary grouped entry point is **CHECK IN**.

Top-level groups:

- How I feel
- How my brain is working
- What my body is doing
- Sensory overload
- Context & triggers
- Regulation
- Needs / what would help
- Nothing major / just logging

Medication effect is not a group.

### 10.1 Nothing major / just logging

Keep this option.

Follow with only a tiny optional prompt:

**Anything worth noting?**

Allow free text and Skip.

---

## 11. How I feel

### 11.1 Mood changed

Periodic check-ins do not repeat Good / Okay / Bad.

Instead use optional **Mood changed**.

Mood changed opens a feelings-wheel-derived flow:

1. broad emotion family
2. immediately show more specific feeling words
3. allow multiple specific feelings
4. optionally offer **Explore what I need**

### 11.2 Anxiety

Use current-burden anchors:

- Mild
- Moderate
- Severe
- Overwhelming

Anxiety may appear under How I feel and relevant Regulation/context entry points, but maps to one underlying event.

### 11.3 Anhedonia

Label: **Anhedonia**

Explanatory copy:

> Anhedonia is a reduced ability to experience pleasure and/or reduced interest or motivation to engage in activities that would normally feel rewarding. It can show up as not wanting to do something, not looking forward to it, not enjoying it once you start, or feeling little/no sense of reward afterwards.

Question:

**How much has your usual interest, motivation or ability to feel pleasure/reward dropped right now?**

Scale:

- None — interest, motivation and enjoyment feel normal for me
- Mild — a little less interested or rewarded than usual
- Moderate — noticeably harder to feel interested, motivated or pleased
- Severe — very little feels interesting, worthwhile or enjoyable

---

## 12. How my brain is working

### 12.1 Mental capacity

Use:

- Plenty
- Enough
- Limited
- Very little

### 12.2 ADHD / executive-function burden

Overall current burden:

- Mild
- Moderate
- Severe
- Overwhelming

Then optional tags.

Core tags:

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
- impulsivity
- restlessness / need to move

Lived-experience tags:

- body doubling needed
- time blindness
- rejection sensitivity
- hyperfocus
- task paralysis
- revenge bedtime procrastination
- doom piles / clutter accumulation
- object permanence / out-of-sight problem
- wall of awful / task dread
- emotional flooding
- analysis paralysis
- waiting mode
- interest-based activation
- masking / performing okay externally
- justice sensitivity
- stimming / regulating movement
- info-dumping / urge to share intensely
- ADHD tax / forgotten fees, duplicates, subscriptions, late costs

**Sensory overload** is not stored as a separate ADHD tag; route to the dedicated Sensory overload section.

**Shutdown / words stop coming** is not stored as a separate ADHD symptom; route to **Regulation → Shut down**.

**Emotional flooding** remains visible in ADHD, How I feel and Regulation, but always maps to one underlying event and can route to **What would help right now?**.

---

## 13. Sensory overload

Sensory overload is its own top-level group.

Ask overall burden first:

- Mild
- Moderate
- Severe
- Overwhelming

Then allow multi-select source/subtype taps:

- sound / noise
- multiple conversations
- sudden / loud sound
- bright light / glare
- flicker
- visual clutter / busy screen
- touch / clothing / seams / skin contact
- people touching me
- smell / perfume / cleaning products
- food smells / smoke
- too hot
- too cold
- rapid temperature change
- crowding / proximity
- movement / motion
- travel / vehicle motion
- hunger / thirst / pain / palpitations / nausea / bladder / internal body sensations
- proprioceptive need / need for pressure
- need to move / restless body
- too many inputs
- social input
- conversation / demand load
- screen / notifications / messages
- food texture / mouthfeel / taste
- none

---

## 14. Regulation

Use polyvagal-inspired language only as a practical self-description framework, not as proof of specific vagal physiology.

The user chooses **one** category at a time:

### Activated

System feels revved up / on alert, e.g. wired, restless, irritable, panicky, defensive, urgent, hyper-alert, unable to settle.

### Shut down

System feels slowed / distant / unavailable, e.g. blank, numb, heavy, disconnected, words gone, unable to initiate, wanting to withdraw, far away/unreal, exhausted.

### Regulated

Present enough to think, communicate, tolerate input and recover from stress, e.g. calm, present, connected, curious, able to decide.

No severity rating is required for Regulation; category + descriptors is enough.

Regulation should allow direct routing to **What would help right now?**.

---

## 15. Needs / what would help

### 15.1 Needs flow

Broad need families:

- Safety
- Relationship
- Growth / Purpose
- Individuality / Autonomy

Allow multiple families and multiple specific needs.

### 15.2 What would help right now?

This is optional after needs and also directly available from any periodic check-in.

Allow multiple selections, including:

- quiet
- dimmer light
- be alone / space
- movement
- deep pressure
- food / water
- fresh air
- lie down
- body doubling
- reassurance / connection
- fewer decisions
- stop task
- change location
- ask for help
- set boundary
- information / clarity
- nothing / don’t know

Any distress-related route may jump here regardless of origin.

---

## 16. What just happened? tool

Separate from ordinary periodic check-ins.

Purpose: interrogate one specific situation without forcing it into the routine questionnaire.

Progressive mobile flow:

**Situation → Body → Emotion → Need → Help**

Each step allows Skip / Back. Incomplete entries are valid.

Suggested flow:

1. Start point: I know what happened / body / emotion / just overwhelmed
2. What happened? optional note + context taps
3. Body signals
4. Emotion via feelings-wheel flow
5. Needs via four broad families
6. What would help
7. Optional **Did that help? → Yes / A bit / No / Haven’t tried**

Context examples:

- work
- home
- relationship
- parenting
- social
- sensory
- task / demand
- unexpected change
- conflict
- physical symptoms
- other

Body-signal examples:

- racing heart
- shallow / quick breathing
- tense jaw / shoulders
- tight chest / throat
- nausea / stomach
- sweaty palms
- hot / flushed
- trembling
- heaviness
- fatigue
- restless
- numb / empty
- tears
- urge to hide / move
- relaxed / grounded
- other

Body signals never imply emotion automatically.

---

## 17. Breath-holding / forgetting to breathe

Track **Caught myself holding my breath / forgetting to breathe** as a self-observed event.

It appears under both:

- Regulation
- What my body is doing

Both routes write to the same underlying event record.

After logging it, ask context immediately, e.g.:

- focused on task
- stressed
- sensory overload
- conflict
- driving
- screen time
- other

Then ask optional physical signs, multi-select:

- chest tightness
- jaw tension
- dizziness
- tingling
- racing heart
- shoulder tension
- other

Do **not** ask episode duration.

---

## 18. What my body is doing

### 18.1 Allergy / sinus / eye / throat

Overall burden:

- Mild
- Moderate
- Severe
- Overwhelming

Then symptom taps:

- blocked / congested nose
- runny nose
- sneezing
- post-nasal drip
- scratchy / itchy throat
- itchy / watery eyes
- sinus pressure
- itchy skin
- none

Do not call this “histamine level”.

### 18.2 Skin

Overall burden:

- Mild
- Moderate
- Severe
- Overwhelming

Then:

- rosacea flushing / redness
- facial heat
- burning / stinging
- eczema itch
- eczema dry / inflamed
- general itching
- keratosis pilaris noticeably worse
- none

Do not collapse skin conditions into a single histamine score.

### 18.3 Body / perimenopause

Overall burden:

- Mild
- Moderate
- Severe
- Overwhelming

Then symptoms in this order:

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

Do not foreground bleeding, cramps or bloating.

---

## 19. Context & triggers

Keep separate from Sensory overload.

Available context taps include:

- dust / cleaning
- musty / damp
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
- none

Location context may also be attached automatically as described below.

---

## 20. Naps / accidental dozing

Nap logging distinguishes:

- Planned nap
- Accidental doze-off

Capture approximate:

- start time
- end time

Calculate approximate duration automatically.

Afterwards ask:

- Better
- Same
- Worse
- Groggy

For accidental doze-offs, optionally ask context such as:

- poor sleep
- after eating
- passive activity
- work / meeting
- travelling
- sensory overload
- drinking alcohol
- other

Evening review confirms:

**Nap/doze today? → Yes / No**

Pre-fill daytime logs and ask only for missing information.

---

## 21. Caffeine / energy drinks

Caffeine / energy drinks are their own periodic event.

Capture:

- type
- approximate amount
- time
- why you had it

Why options include:

- tired
- needed focus
- habit
- craving
- social
- headache
- other

Evening review confirms whether caffeine / energy drinks occurred and only asks for missing items.

Caffeine-containing fluids may contribute to hydration totals, while their caffeine exposure remains separately tagged.

---

## 22. Alcohol

Alcohol is its own periodic event.

Capture:

- type
- approximate amount
- time

Alcohol may also be used as context where relevant.

Evening review confirms:

**Alcohol today? → Yes / No**

Pre-fill any existing alcohol events and ask only for missing information.

Alcohol remains **separate from the hydration total**.

---

## 23. Hydration

Hydration uses approximate volume in:

- glasses
- mL

Use a fixed default glass size of **250 mL**. No settings complexity is required.

Non-alcoholic fluids already logged during the day should be added automatically where appropriate.

At evening review:

1. total already-logged non-alcoholic fluid volume
2. ask only for **additional water** not yet represented
3. prevent double counting

Caffeine / energy drinks can contribute fluid volume while remaining separately tagged for stimulant analysis.

Alcohol does not contribute to Bloom’s hydration total.

---

## 24. Meals / appetite

Meals are checked during the evening review rather than requiring meal-by-meal periodic logging.

Multi-select:

- Breakfast
- Lunch
- Dinner
- Snacks

If a meal was skipped, ask why:

- not hungry
- forgot
- too busy
- nauseous
- sensory issue
- no food available
- other

Also capture overall appetite:

- Normal
- Low
- High
- Erratic

---

## 25. Physical activity / Apple Health

When available, use Apple Health step count as the primary activity signal.

Apple Health step count is authoritative.

If Apple Health step data is missing, ask for a manual step estimate.

Do not require a subjective None / Light / Moderate / Vigorous rating when step data exists.

Evening review should surface the day’s step count / fallback estimate as part of activity context.

---

## 26. Apple Health broader import

When available, Bloom should import useful Health data including:

- sleep
- steps
- resting heart rate
- broader heart-rate data / highs / spikes where available
- HRV
- respiratory rate

Heart-rate and HRV data are trend/context signals, not diagnoses.

Imported Apple Health values should remain distinguishable from manual/self-reported values in storage.

---

## 27. Evening review

If evening medication is due:

1. evening meds check
2. then ask **Do you want to reflect on today?**
   - Yes
   - Not tonight

If **Not tonight**, end without penalty.

If Yes, review may include:

- functional impact
- meals
- skipped-meal reasons
- overall appetite
- hydration
- alcohol confirmation
- caffeine / energy-drink confirmation
- nap / doze confirmation
- steps / activity
- What helped today?
- optional What made things harder today?

### 27.1 Functional impact

Question:

**How much did everything going on today get in the way?**

Use:

- Not much
- Somewhat
- A lot
- I could barely function normally

Optional impact domains:

- work
- parenting / home
- social
- self-care
- errands / admin
- sleep / winding down

### 27.2 What helped today?

Reuse the same full option list as **What would help right now?**.

Allow multiple.

### 27.3 What made things harder today?

Optional only.

Reuse Context & triggers where useful.

---

## 28. Weekly review

Weekly review appears **Sunday evening only** as its own optional card on Today/Home.

If skipped, it disappears Monday. No carry-over and no guilt.

It starts with a review of the week’s logged patterns, then asks weekly questions.

Broad domains may include:

- depression / anxiety
- ADHD / functioning
- allergy / inflammatory burden
- perimenopause
- functioning / quality of life

Validated screening wording must not be altered in a way that falsely implies validity for a different recall period. If a formal instrument’s validated recall period does not match weekly use, treat the Bloom weekly questions as non-diagnostic trend questions unless the validated instrument is run on its proper schedule.

---

## 29. Pattern analysis

Ranges:

- 7 days
- 14 days
- 28 days
- 60 days
- 90 days
- All time
- By cycle

Pattern analysis may explore associations among:

- sleep
- medication adherence / access
- cycle timing
- allergy / skin
- sensory load
- ADHD / executive functioning
- regulation
- mood / anxiety / anhedonia
- perimenopausal symptoms
- caffeine
- alcohol
- hydration
- meals / appetite
- naps
- steps
- heart-rate / HRV / respiratory data
- context / location / travel

Only surface a tentative association after at least **3 repeated co-occurrences**.

Associations are surfaced **weekly only**, not contextually during the week.

Use cautious wording such as:

- “often coincided with”
- “showed up together several times”

Never imply cause.

---

## 30. Cycle tracking

Required capabilities:

- record period start today
- add historical period-start date manually
- record bleeding today
- Monday-first calendar
- calculate cycle day from actual recorded starts
- show previous cycle length and observed variation
- edit/delete historical starts
- reject future period-start / bleeding dates

### 30.1 Estimated phase

Today/Home may show estimated:

- Menstrual
- Follicular
- Around ovulation / ovulatory, only when defensible
- Luteal
- Phase uncertain

Perimenopause/irregularity-aware rules:

- label estimates clearly
- actual bleeding records take priority
- no generic 28-day certainty
- show uncertainty where data are weak

### 30.2 By-cycle comparison

Compare recorded cycles aligned by **cycle day** even when lengths differ.

Allow manual phase correction for a **date range**.

A manual phase override:

- controls UI display
- controls pattern analysis
- may be edited/deleted
- if deleted, Bloom reverts to the system estimate
- original system estimate may remain stored quietly
- no user-facing full audit trail is required

---

## 31. Location, travel and local light cycle

### 31.1 Precise location privacy

Precise device location may be used **transiently only**.

Do not persist precise coordinates.

Store city/region-level context per event/check-in.

Location context is automatic only; no manual Home / Work / Travelling tagging is required.

### 31.2 Sunrise / sunset

Use transient device location, with permission, to calculate local sunrise/sunset.

If permission is unavailable, allow a manual location fallback for light-cycle calculation.

### 31.3 Per-event context

If the user moves between cities, update city/region context per event.

Automatically distinguish:

- ordinary local movement
- meaningful travel when city/region changes

Travel/movement becomes a context signal.

### 31.4 Airport / flight days

When movement patterns strongly support it, Bloom may add an **airport/flight day** context signal.

Do not infer this weakly.

### 31.5 Time-zone changes

Store:

- exact origin time zone
- exact destination time zone
- direction / size of shift
- original local event date/time + time zone
- UTC timestamp for clean ordering

Show the human-facing event time in the original local time zone.

Sleep is interpreted relative to the **local destination time**, not home time.

Events belong to the local calendar day where they occurred, even if one journey spans two Bloom days.

### 31.6 Altitude

Store simple context only:

- sea level
- moderate altitude
- high altitude
- major altitude change

Do not store exact altitude as a normal user-facing metric.

Travel/time-zone/altitude context should usually remain silent metadata unless later pattern analysis finds something worth surfacing.

---

## 32. Data model — target architecture

The old `bloom.entries.v3` single-shape rating object is insufficient for the new architecture.

A richer event-oriented model is required.

At minimum, each event should support:

- `id`
- `eventType`
- `localDate`
- `localTime`
- `timeZone`
- `utcTimestamp`
- `createdAt`
- `source`: manual | appleHealth | derived | imported
- `cityRegionContext` where available
- `travelContext` where applicable

Event types should distinguish at least:

- morningSleep
- medicationAdherence
- dailyState
- periodicSnapshot
- sensoryOverload
- regulation
- feeling
- anxiety
- anhedonia
- adhdExecutive
- allergy
- skin
- periBody
- breathHolding
- nap
- caffeine
- alcohol
- hydration
- meals
- appetite
- activitySteps
- heartRate
- hrv
- respiratoryRate
- eveningReview
- weeklyReview
- cycleRecord
- locationTravelContext
- situationInterrogation

Shared experiences exposed from multiple UI routes must reference the **same underlying event**, not duplicate events.

Cycle records may remain in a dedicated cycle store where appropriate.

Migration from `bloom.entries.v3` / `bloom.entries.v2` must preserve historical user data rather than silently discarding it.

---

## 33. History

History must support:

- chronological ordering using UTC while displaying original local time
- filtering / distinguishing event types
- edit where meaningful
- delete
- backfill
- restoration of saved selections
- no conflation of several same-day events into one entry

Imported raw Apple Health data and user-corrected values should remain distinguishable internally.

---

## 34. Regression rules

Before telling the user a build works, verify the actual running UI and data behaviour rather than relying only on automated tests.

At minimum verify:

1. First open of day goes Sleep → Morning meds → Good / Okay / Bad.
2. Bad routes into low-energy only after baseline.
3. Today/Home appears after baseline.
4. CHECK IN lotus is the main periodic entry point.
5. Quick events are image-only and use real artwork, not emoji.
6. No decorative platitudes appear.
7. Medication scheduling is per-medication, time-aware and cycle/custom configurable.
8. Medication effect no longer exists as a periodic domain.
9. Apple Health data does not overwrite manual sleep corrections.
10. Step fallback is manual only when Apple Health steps are missing.
11. Periodic Good / Okay / Bad is not repeated later in the day.
12. Shared anxiety / emotional flooding / breath-holding events are not double-counted.
13. Sensory overload is dedicated, not duplicated in ADHD storage.
14. Shutdown routes to Regulation, not a separate ADHD count.
15. Breath-holding exists in both entry routes but stores once.
16. Evening review pre-fills daytime logs and asks only what is missing.
17. Alcohol is excluded from hydration totals.
18. Caffeine fluids can contribute to hydration while remaining separately tagged.
19. Weekly review is Sunday-evening only and disappears Monday if skipped.
20. Pattern ranges are 7 / 14 / 28 / 60 / 90 / All time / By cycle.
21. Associations require at least 3 repeated co-occurrences and use non-causal wording.
22. Precise location is not stored.
23. City/region is stored per event where available.
24. Local time + time zone + UTC ordering survive travel correctly.
25. Visual day progression follows local sunrise/sunset and is independent of app compliance.
26. Service-worker cache version matches deployed runtime assets.
27. Mobile layout remains one-handed, progressive and low-overload.
28. Existing historical data migrate safely.

---

## 35. Change-management rule

Any future change that alters:

- morning baseline
- periodic check-in logic
- low-energy path
- evening review
- weekly review
- medication capture
- Apple Health import
- ADHD taxonomy
- sensory taxonomy
- allergy / skin / perimenopause taxonomy
- regulation / feelings / needs logic
- quick-event behaviour
- cycle logic
- travel / location / time-zone logic
- data model
- pattern logic
- visual identity
- mobile interaction
- deployment / caching behaviour

must update this master specification in the same change so requirements are not lost in chat history.

---

## 36. Implementation status note — 14/09/2026

This specification is **ahead of the live implementation**.

The existing app still contains legacy architecture including Quick / Deep / Low modes, 1–5 rating scales, the old `bloom.entries.v3` entry shape, and the patch-layer medication boolean.

Do **not** treat this specification update as a deployment.

No live redesign should be claimed until implementation, migration, device-level verification and deployment have actually occurred.
