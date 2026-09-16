# Bloom — UI & Brand Guideline

**Status:** Canonical UI / visual identity source of truth  
**Updated:** 16/09/2026  
**Related source:** `docs/BLOOM_MASTER_SPEC.md`

---

## 1. Brand direction

Bloom uses the **Warm Conservatory** brand direction.

This is the approved visual identity for the product and governs UI styling, image generation, illustration selection, layout tone, interaction mood, and desktop/mobile presentation.

Bloom should feel like a **sun-warmed conservatory**: calm, cultivated, softly luminous, botanical, intimate, restorative and non-clinical.

It should not feel like a fertility app, generic beige wellness app, medical dashboard, productivity tool with floral decoration, cute cartoon app, spa cliché, or motivational self-care brand.

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
The Bloom world should suggest a greenhouse / conservatory / sunroom, soft filtered sunlight, glass, leaves, petals, stems, linen, cane, ceramic, water, warm wood, rounded forms and calm domestic intimacy.

### Visual tone
- Painterly rather than flat
- Botanical rather than abstract
- Soft-focus rather than sharp/techy
- Warm and luminous rather than cold or sterile
- Organic rather than geometric-first
- Designed, but never corporate

---

## 3. Colour direction

Bloom uses the **Warm Conservatory palette**: warm ivory, sunlit white, lotus blush, dusty rose, muted coral/apricot, soft sage, olive, moss, honeyed gold and restrained smoky plum accents.

Green and blush tones should do most of the emotional work. Bright yellow, teal and hot pink may appear only when harmonised into the Warm Conservatory palette, never as loud standalone accents.

Avoid harsh black-heavy UI, generic grey SaaS palettes, icy blue medical palettes, flat neon colour blocking, muddy beige minimalism and high-contrast productivity-app styling.

---

## 4. Typography

- Body and UI controls: clean sans-serif
- Selected headings: soft serif or serif-feeling headline styling where appropriate
- Labels and small captions: clean all-caps or lightly tracked sans-serif
- Typography supports clarity first, beauty second

Avoid decorative scripts, hyper-corporate tech fonts, loud motivational typography and novelty wellness fonts.

---

## 5. Shape language

Use rounded corners, soft cards, organic framing and petal/leaf-like curves where appropriate. Buttons and panels should feel soft and touchable. The UI should feel grown, not engineered.

---

## 6. Imagery principles

Imagery must be painterly, botanical, warm, softly lit, tactile, emotionally legible and coherent as one family.

Repeating motifs may include lotus, petals, leaves, stems, filtered light, conservatory glass, ceramics, linen, water and warm domestic still life.

Do not use clinical imagery, medical iconography, cartoons, emoji, mismatched illustration styles or unrelated stock-photo collage.

---

## 7. Hero motif

The **lotus** is Bloom’s primary visual and emotional anchor.

- The main Home interaction is the lotus with **CHECK IN** overlaid.
- The lotus may evolve by time of day.
- It must feel painterly and integrated into the Warm Conservatory world.
- It must not resemble clip-art or a generic logo badge.

---

## 8. Desktop and mobile layout tone

### Mobile
- Hero-first
- Lotus / CHECK IN prominent near the top
- Trigger imagery appears as an image-led set beneath the hero
- Medication, cycle and Apple Health remain supporting content
- Progressive disclosure remains the governing principle
- Trigger tiles use a three-column grid at typical phone widths

### Desktop
- Same brand language as mobile
- Additional width creates breathing room and clearer grouping, not more density
- Keep the hero prominent
- Trigger imagery may display as one six-item row
- Do not turn Bloom into an enterprise dashboard

---

## 9. Locked visual trigger system

The approved user-facing trigger names are:

1. **Sleep**
2. **Caffeinate**
3. **Alcohol**
4. **Breathe**
5. **Hydrate**
6. **Sense**

Internal event keys may remain stable for backward compatibility, but user-facing copy must use the approved names above.

### Approved production assets

| Trigger | Approved concept | Production asset | SHA-256 |
| --- | --- | --- | --- |
| Sleep | Sunlit daybed | `assets/triggers/sleep.png` | `1e824bf3cee7a73c5d0abba050dfd282099a22165a01ea2cf8f7926b5b7aa2a3` |
| Caffeinate | Muted-green ceramic mug in sunlit conservatory | `assets/triggers/caffeinate.png` | `53b528966dbab8df6299f93344ac73840b809651fd3f6494ad352ac130967e4f` |
| Alcohol | Wine + petals | `assets/triggers/alcohol.png` | `b013a7bf7492bbc990d5ea14f11ed49b08bb8930bec948a2123f71b5975b2d47` |
| Breathe | Open conservatory window with billowing sheer linen curtains; incense may remain a secondary cue | `assets/triggers/breathe.png` | `34a228c16af7b5c162ead2d19773519299c1d00eef9e16c97c2db37a44497b3f` |
| Hydrate | Tall iced water glass with visible condensation; no fruit or carafe | `assets/triggers/hydrate.png` | `5e1b86338c2cf1a8d1ec7172fe19be4ca1026c6002c598271be0d4bd68262498` |
| Sense | Central lotus with amplified movement, layered light and sensory-signal arcs | `assets/triggers/sense.png` | `bba960da5cdc9c0a7b10318b1193a0fd7decd6a30f9178bc888645539cc33334` |

The production PNGs are deterministic 112×112 derivatives of the explicitly approved master images. They are not newly generated artwork.

### Anti-creep rule

These six repository files are **locked production assets**. Preview and production rendering must reference these exact files. No image-generation call may occur during app rendering, build or deployment. Replacing any trigger artwork requires explicit approval and an updated manifest/hash.

The machine-readable source of truth is `assets/triggers/trigger-assets.json`.

---

## 10. Product mood

Bloom should feel like a private sanctuary, quiet observational tool, emotionally intelligent companion and something beautiful enough to return to.

It should not feel like homework, surveillance, a symptom spreadsheet, a clinical intake form or forced positivity.

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

## 12. Resolved consistency changes — 16/09/2026

The previously identified conflicts are now resolved in the canonical documentation and implementation target:

1. **Colour wording:** replaced by the Warm Conservatory palette.
2. **Brand direction:** Warm Conservatory formally named as the approved Bloom identity.
3. **Trigger names:** Sleep, Caffeinate, Alcohol, Breathe, Hydrate and Sense are canonical user-facing names.
4. **Trigger-art family:** one consistent Warm Conservatory image family is required; the six approved assets are locked above.
5. **Desktop guidance:** desktop uses width for breathing room and grouping, not dashboard density.
6. **“Quick” terminology:** it may remain only in legacy/internal implementation identifiers; user-facing product language uses **Triggers** / **Visual triggers**.

---

## 13. Source-of-truth rule

This file is the canonical source of truth for Bloom’s visual identity, brand styling, imagery system and desktop/mobile visual treatment.

If implementation, image generation, design mock-ups or future proposals conflict with this document, this document governs unless a newer approved revision explicitly replaces it.

`docs/BLOOM_MASTER_SPEC.md` remains canonical for product behaviour and data rules. Where the two overlap on visual identity, this UI & Brand Guideline governs the visual treatment.
