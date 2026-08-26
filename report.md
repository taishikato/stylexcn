# Spinner visual-diff report (rebased onto Button Group main)

- Full suite: **294/294 PASS** (threshold 0)
- Main baseline after Button Group (#42): 286/286
- This PR adds 8 Spinner cases; Button Group 10 cases remain green

## Spinner per-case px (8/8, all 0)

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

## Button Group per-case px (10/10, all 0)

| Case | Result | Mismatched pixels |
| --- | --- | ---: |
| `button-group__light__horizontal` | PASS | 0/18496 |
| `button-group__light__vertical` | PASS | 0/15960 |
| `button-group__light__separator` | PASS | 0/11220 |
| `button-group__light__text` | PASS | 0/12240 |
| `button-group__light__nested` | PASS | 0/19108 |
| `button-group__dark__horizontal` | PASS | 0/18496 |
| `button-group__dark__vertical` | PASS | 0/15960 |
| `button-group__dark__separator` | PASS | 0/11220 |
| `button-group__dark__text` | PASS | 0/12240 |
| `button-group__dark__nested` | PASS | 0/19108 |

## How spin was made screenshot-stable

Official Spinner uses Tailwind `animate-spin`. StyleX matches with `stylex.keyframes`. The public component still spins.

1. Playwright `animations: "disabled"` on every screenshot (same as Skeleton).
2. Harness-only inherited `animation-play-state: paused` on the Spinner capture frame (both kits). Playground is unchanged.
3. Crop a fixed `data-spinner-well` sized to `size-3/4/6/8`, not the transforming SVG AABB.

Rebased onto `main` after #42. Wiring conflicts in `README.md`, `scripts/visual-diff.mjs`, `src/App.tsx`, `src/visual/harness.tsx` kept both Button Group and Spinner.

Machine output: `visual/results/report.md` (294/294).
