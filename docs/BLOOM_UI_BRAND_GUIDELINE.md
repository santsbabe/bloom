# Bloom — UI & Brand Guideline

**Status:** Canonical UI / visual identity source of truth  
**Updated:** 15/09/2026  
**Related source:** `docs/BLOOM_MASTER_SPEC.md`

---

## 1. Brand direction

Bloom uses the **Warm Conservatory** brand direction.

This is the approved visual identity for the product and should govern:
- UI styling
- image generation
- illustration selection
- layout tone
- interaction mood
- desktop and mobile presentation

Bloom should feel like a **sun-warmed conservatory**: calm, cultivated, softly luminous, botanical, intimate, restorative, and non-clinical.

It should not feel like:
- a fertility app
- a generic beige wellness app
- a medical dashboard
- a productivity tool with floral decoration added on top
- a cute cartoon app
- a spa cliché
- a motivational self-care brand

---

## 2. Warm Conservatory brand essence

### Core emotional qualities
- Warm
- Gentle
- Lived-in
- Restorative
- Elegant
- Human
- Quietly beautiful
- Grounded rather than ethereal
- Supportive rather than prescriptive

### Environmental cues
The Bloom world should suggest:
- a greenhouse / conservatory / sunroom
- soft filtered sunlight
- glass, leaves, petals, stems
- linen, cane, ceramic, water, warm wood
- rounded forms and soft framing
- calm domestic intimacy

### Visual tone
- Painterly rather than flat
- Botanical rather than abstract
- Soft-focus rather than sharp/techy
- Warm and luminous rather than cold or sterile
- Organic rather than geometric-first
- Designed, but never corporate

---

## 3. Colour direction

The palette should stay within the approved Warm Conservatory family.

### Primary palette
- Warm ivory / soft cream
- Sunlit white
- Lotus blush
- Dusty rose
- Warm coral
- Apricot / muted peach
- Soft sage
- Olive green
- Moss / leafy green
- Honeyed gold
- Smoky plum as a restrained accent

### Colour behaviour
- The interface background should remain light and airy.
- Most screens should feel sunlit and breathable.
- Accent colours should be used in a restrained, deliberate way.
- Green and blush tones should do most of the emotional work.
- Bright yellow, teal and hot pink may appear only if harmonised into the Warm Conservatory palette and not as loud standalone accents.

### Avoid
- harsh black-heavy UI
- generic grey SaaS palettes
- icy blue medical palettes
- flat neon colour blocking
- muddy beige minimalism
- high-contrast productivity-app styling

---

## 4. Typography

### Primary typographic feeling
- clean
- understated
- readable
- slightly elegant
- not ornamental

### Usage
- Body and UI controls: clean sans-serif
- Selected headings: soft serif or serif-feeling headline styling where appropriate
- Labels and small captions: clean all-caps or lightly tracked sans-serif
- Typography must support clarity first, beauty second

### Avoid
- overly decorative script fonts
- hyper-corporate tech fonts
- loud motivational typography
- novelty “wellness” fonts

---

## 5. Shape language

- Rounded corners
- Soft cards
- Organic framing
- Petal-like or leaf-like curves where appropriate
- No hard, severe geometry dominating the product
- Buttons and panels should feel soft and touchable

The UI should feel grown, not engineered.

---

## 6. Imagery principles

### Overall imagery style
Imagery should be:
- painterly
- botanical
- warm
- softly lit
- tactile
- emotionally legible
- coherent as a family

### Repeating motifs
- lotus
- petals
- leaves
- stems
- filtered light
- conservatory glass
- ceramics
- linen
- water
- warm domestic still life

### Imagery should not be
- clinical
- iconographic in a medical sense
- childish
- cartoonish
- emoji-based
- visually noisy
- unrelated stock-photo collage

---

## 7. Hero motif

The **lotus** is the primary visual and emotional anchor of Bloom.

### Rules
- The lotus is the central hero motif.
- The main Home interaction is the lotus with **CHECK IN** overlaid.
- The lotus may evolve by time of day.
- The lotus should feel painterly and integrated into the Bloom world.
- The lotus should not look like a generic logo badge or clip-art flower.

---

## 8. Desktop and mobile layout tone

The approved layout direction applies to both mobile and desktop.

### Mobile
- Hero-first
- The lotus / primary CHECK IN interaction appears prominently near the top
- Trigger imagery appears as an image-led set beneath the hero
- Medication, cycle and Apple Health appear as supporting content, not dominant dashboard blocks
- Progressive disclosure remains the governing principle

### Desktop
- Same brand language as mobile
- More breathing room, not more clutter
- Keep the hero prominent
- Use additional width for elegance, spacing and clearer grouping
- Do not convert the experience into an enterprise dashboard

---

## 9. Trigger image system

The trigger image system must follow the Warm Conservatory brand.

### Approved trigger names
1. **Sleep**
2. **Caffeinate**
3. **Alcohol**
4. **Breathe**
5. **Hydrate**
6. **Sense**

### Trigger image rules
- Each trigger uses a dedicated image
- Images must feel like one family
- They must be legible at small size
- They must remain painterly / botanical / warm
- They should favour literal-object or clearly interpretable symbolic imagery
- No visible text labels are required under the images in the main trigger row, but accessibility labels must remain

---

## 10. Product mood

Bloom should feel like:
- a private sanctuary
- a quiet observational tool
- something emotionally intelligent
- something beautiful enough to return to

It should not feel like:
- homework
- surveillance
- a symptom spreadsheet
- a clinical intake form
- a forced positivity app

---

## 11. Non-negotiable visual constraints

- No user-facing “low-energy”, “quick” or “deep” mode terminology
- No emoji shortcut tiles
- No generic medical icons
- No unrelated illustration styles mixed together
- No cold dashboard treatment for Home
- No visual hierarchy where Apple Health dominates the screen
- No design drift away from Warm Conservatory without explicit approval

---

## 12. Conflicts, omissions and revisions required for consistency

To make this guideline the single visual source of truth, the following conflicts and omissions in the current product specification and implementation must be resolved.

### 12.1 Master-spec colour wording conflict
The existing `docs/BLOOM_MASTER_SPEC.md` refers to a broader, louder palette including hot pink, coral/orange, teal, olive, bright yellow and plum.

**Required revision:** replace that broad colour description with:

> Bloom uses the Warm Conservatory palette: warm ivory, sunlit white, lotus blush, dusty rose, muted coral/apricot, soft sage, olive, moss, honeyed gold and restrained smoky plum accents.

### 12.2 Brand direction omission
The product specification does not formally identify the approved brand direction.

**Required revision:** add:

> The approved Bloom visual identity is Warm Conservatory.

### 12.3 Trigger naming conflict
Legacy functional names remain in the specification and implementation.

Use the following approved user-facing trigger names:

| Legacy wording | Approved user-facing trigger |
| --- | --- |
| Nap / Doze | **Sleep** |
| Caffeine / Energy Drink | **Caffeinate** |
| Alcohol | **Alcohol** |
| Forgetting to Breathe / Breath-holding | **Breathe** |
| Water / Hydration | **Hydrate** |
| Sensory Overload | **Sense** |

Internal event keys may remain stable where necessary for backward compatibility, but the user-facing copy must use the approved names.

### 12.4 Trigger-art family omission
The master spec currently requires image-led painterly shortcuts but does not define a sufficiently strict family style.

**Required revision:** all trigger artwork must:
- belong to one Warm Conservatory image family
- use consistent warm lighting, framing, depth of field and colour treatment
- remain legible at tile scale
- avoid cartoon, emoji, clinical or mismatched illustration styles

### 12.5 Desktop guidance omission
The master product spec is still primarily mobile-oriented.

**Required revision:** desktop layouts must use additional width for calm spacing, clearer grouping and visual hierarchy, not for adding density or creating an enterprise-dashboard treatment.

### 12.6 “Quick” terminology conflict
The internal data model may continue to use terms such as `quick-event` for compatibility, but UI-facing product and brand documentation should not use “quick” as a named interaction mode.

Preferred UI-facing terms are **Triggers**, **Visual triggers**, or **Everyday notes**, depending on context.

---

## 13. Source-of-truth rule

This file is the canonical source of truth for Bloom’s visual identity, brand styling, imagery system, and desktop/mobile visual treatment.

If implementation, image generation, design mock-ups, or future proposals conflict with this document, this document governs unless a newer approved revision explicitly replaces it.

`docs/BLOOM_MASTER_SPEC.md` remains canonical for product behaviour and data rules. Where the two overlap on visual identity, this UI & Brand Guideline governs the visual treatment.
