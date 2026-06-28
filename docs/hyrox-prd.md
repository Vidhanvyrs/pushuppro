# Concept: Hyrox Race-Time PR

**Status:** Idea / pre-spec — for review, not yet approved for implementation.
**Author:** Gurmehar (with Claude), 2026-06-22.

## One-line pitch

Let users log their Hyrox station times and race total as a new kind of Personal Record, so each attempt becomes a landmark to beat next time — not a global leaderboard, a "beat your past self" mechanic, reusing the existing PR data layer instead of the Challenges feature.

## Why this, not a global Hyrox leaderboard

The original idea was a Hyrox global leaderboard / external API integration (athlete lookup, official results). That's been narrowed down through review:

- No official Hyrox API exists — only third-party scrapers/wrappers (`hyroxresultapi.com`, `pyrox-client`) with no SLA. Building a feature around them means an external data-reliability ceiling we don't control.
- A global leaderboard of self-reported times has a trust problem: every existing `Challenge` (pushup, plank, squat) is camera/pose-verified — the app watched you do it. A typed-in Hyrox time has zero verification. Blending verified and self-reported scores into one ranked leaderboard quietly changes what "Challenge" means in this codebase.
- What the user actually wants is simpler and lower-risk: **a way to be challenged by your own previous performance**, not a ranking against strangers.

That reframing is what this doc specs.

## Architectural home: new PR kind, not a new Challenge

This codebase already has a mechanic for "beat your own past self": the **Personal Records data layer** (`docs/design-docs/2026-05-29-pr-data-layer-design.md`) — `personal_records` (current best per bucket) + `personal_record_history` (append-only, powers deltas and progression timelines). That's a closer match than the `Challenges` feature, which is built for camera-verified, ranked-against-others scores (`ChallengeSession`, `ChallengeRecord`, daily/weekly leaderboard ranks).

**Decision: this ships as a new `pr_kind` on the existing Personal Records system, surfaced on the Profile PR screen — not under the Challenges nav.**

## Data model

### New `pr_kind`: `"hyrox"`

Cannot reuse the existing `"timed"` `pr_kind` — `timed` means *longer `duration_seconds` wins* (e.g. a plank hold). A Hyrox station/total time is the opposite: **shorter wins.** `"hyrox"` is its own kind with an inverted comparator.

### Exercise mapping: one `Exercise` row, nine `bucket_key`s

Mirrors the existing pattern for weighted lifts (one `exercise_id`, multiple `bucket_key`s like `1RM` / `2-3RM`). One `Exercise` row — "Hyrox" — covers all nine PR slots via `bucket_key`:

| `bucket_key` | Station |
|---|---|
| `skierg` | SkiErg |
| `sled_push` | Sled Push |
| `sled_pull` | Sled Pull |
| `burpee_broad_jump` | Burpee Broad Jumps |
| `row` | Rowing |
| `farmers_carry` | Farmers Carry |
| `sandbag_lunge` | Sandbag Lunges |
| `wall_balls` | Wall Balls |
| `total` | Full race/simulation finish time |

Each row in `personal_records` for this exercise is `(user_id, exercise_id="Hyrox", bucket_key=<one of the above>)` → `duration_seconds`, same shape as every other PR row. "What beats what": lower `duration_seconds` wins, for all nine.

### `total` is independently entered, not computed

A real Hyrox race is 8× 1km run + 8 stations. **We do not track the 8 running segments** (not actionable for gym training, and keeps the bucket-key surface at 9 instead of 17 — explicit non-goal, see below). Because runs aren't tracked, `total` cannot be derived by summing the 8 station times — that would undercount the real race time. `total` is its own manually-entered field, with no arithmetic tie to the other 8.

### Entry: new batch endpoint, any subset of fields

A Hyrox log is one event (one gym session or one race), not 9 unrelated PR updates. Proposed: `POST /api/v1/workout/personal-records/hyrox-attempt`, single DB transaction, writing whichever of the 9 fields the user filled in.

- **Minimum 1 of 9 fields required**, all others optional. A user who only trained farmer's carry that day logs just that one field. A user who raced logs whatever splits they have, plus `total`.
- Each field independently checked against its own `bucket_key`'s existing best (same auto-vs-manual "new beats existing" rule already used elsewhere in the PR layer).
- Editing/deleting a single station's PR after the fact reuses the *existing* `PATCH` / `DELETE /personal-records/{pr_id}` endpoints unchanged — once a row exists, it's shaped like any other PR row.

## Non-goals (v1)

Explicit cuts, not oversights:

- **No running-segment PRs.** Only the 8 stations + total.
- **No division/weight-category tracking.** Official Hyrox varies station weights and wall-ball reps by division (Open/Pro) and gender. Switching divisions will make a station PR look like a regression when it's really a harder load. Accepted limitation for v1 — revisit if real usage shows it's confusing.
- **No global leaderboard.** This is self-vs-self only. (A leaderboard could theoretically be built later off the same `personal_records` table the way the original PR-layer doc already anticipates for lifts — but it's a separate decision with the same trust-model question raised above.)
- **No external API integration** (no `hyroxresultapi.com` / `pyrox-client` linkage to auto-pull official race results). All entry is manual for v1.
- **No AI-copilot training-plan generation off this data.** A natural future hook (target your weakest station), but out of scope here.

## Open questions for whoever picks this up

- **UI entry point** — net new section on Profile next to existing PRs? A dedicated "Log a Hyrox attempt" flow reachable from the Workouts tab? Not resolved — proposer (Gurmehar) is interested in owning the UI design for this.
- Exact wording/iconography for the 8 stations in the entry form.
- Whether `total` should be visually grouped with the 8 splits or treated as a distinct "headline" PR on the Profile screen.
