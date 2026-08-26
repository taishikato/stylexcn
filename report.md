# Spinner visual-diff report

- Full suite: **284/284 PASS** (threshold 0)
- Previous suite: 276 cases, all still green
- Spinner cases: **8/8 PASS**, all **0 mismatched pixels**

## Spinner per-case px

| Case | Result | Mismatched pixels |
| --- | --- | ---: |
| `spinner__light__default` | PASS | 0/2304 |
| `spinner__light__sm` | PASS | 0/1936 |
| `spinner__light__lg` | PASS | 0/3136 |
| `spinner__light__xl` | PASS | 0/4096 |
| `spinner__dark__default` | PASS | 0/2304 |
| `spinner__dark__sm` | PASS | 0/1936 |
| `spinner__dark__lg` | PASS | 0/3136 |
| `spinner__dark__xl` | PASS | 0/4096 |

States map to the official size example: `default` = `size-4`, `sm` = `size-3`, `lg` = `size-6`, `xl` = `size-8`. Light and dark.

## How spin was made screenshot-stable

Official Spinner uses Tailwind `animate-spin` (1s linear infinite rotate). StyleX matches that with `stylex.keyframes` + the same timing. The public component API still spins.

Live rotation is non-deterministic and also inflates the SVG axis-aligned bounding box (1px crop mismatches). This repo already freezes CSS animation for capture:

1. **Playwright `animations: "disabled"`** on every screenshot (same as Skeleton `animate-pulse`). Infinite animations cancel to the initial frame on both kits.
2. **Harness-only freeze** (Spinner capture frame only, both kits equally): inherited `animation-play-state: paused` on the capture root. Playground / product Spinner is unchanged.
3. **Crop a fixed well** (`data-spinner-well`) sized to `size-3/4/6/8`, not the transforming SVG. Same parent on official and StyleX (Skeleton pattern).

No harness threshold change, no official baseline restyle, no global product-spin disable.

Machine output: `visual/results/report.md` (284/284).
