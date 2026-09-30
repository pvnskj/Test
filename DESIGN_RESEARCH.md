# Portfolio Redesign Research & Product Direction

## Goal

Make the portfolio read as the work of a **Senior Technical Product Owner** within seconds, while preserving enough depth for a hiring manager or technical leader to inspect the reasoning behind each case study.

The redesign keeps the evidence discipline of the current portfolio but changes the information architecture from “case-study prose with expandable detail” to a **product operating surface**.

## Core finding: the portfolio should demonstrate the job, not describe the job

A Technical Product Owner is expected to connect business goals to technical requirements, own/sequence backlog work, partner credibly with engineering and architecture, manage dependencies and trade-offs, and keep delivery connected to measurable outcomes. The portfolio therefore needs visible artifacts of those behaviors:

- Product goal and outcome framing
- Architecture/system understanding
- Prioritization and trade-off logic
- Epics/increments and delivery sequence
- Cross-team/dependency handling
- Acceptance/evaluation gates
- Measured evidence and evidence quality

The page should not rely on a paragraph saying “I am strategic and technical.” The interface itself should make that conclusion obvious.

## Content hierarchy

### 5-second scan

Each project should expose only:

1. Before → after transformation
2. One-line contribution
3. Primary decision
4. Headline proof

### 30-second scan

Add four lanes:

- **Context** — what was failing and why it mattered
- **Decision** — the product call and the accepted trade-off
- **Delivery** — how the work was sequenced into buildable increments
- **Evidence** — what changed and how strong the evidence is

### 2-minute depth

Only after the scan layer should the reader see:

- System flow
- Decision frameworks / prioritization lens
- Release train / learning questions
- Decision log
- Ownership boundary
- Full evidence basis

## Why the “Jira board” idea works — and where not to overdo it

A board is familiar to product and engineering audiences and immediately signals backlog, sequencing, and delivery. But a literal sprint board would make completed case studies look like task management. The redesign therefore uses Jira’s visual grammar without copying Jira:

- EPIC identifiers
- lanes
- issue-like cards
- state and evidence tags
- decision logs
- increment cards

The lanes are **Context → Decision → Delivery → Evidence**, not To Do → In Progress → Done.

That makes the board tell the product story instead of merely decorating it.

## Framework strategy

Framework names should appear only when they reveal decision logic. Avoid a generic badge cloud such as “RICE · MoSCoW · RACI · Agile · Scrum.”

Instead every framework answers a specific question:

- **MoSCoW lens** — What could not break during migration?
- **RICE-style prioritization** — Which pilot capabilities deserved priority?
- **Benefit × LOE** — Which integrations should be sequenced first?
- **RACI** — Who owned lifecycle handoffs?
- **Risk × Impact** — Where should hard controls exist?
- **Build vs Extend** — Was another patch cheaper than a reusable platform capability?
- **Control-point mapping** — Where should bad data be prevented?

Important integrity rule: if a named framework was not formally used/documented at the time, present it as a **decision lens** or retrospective articulation, not as a historical scored exercise.

## Text-compression rules

1. One idea per card.
2. Prefer labels + nouns over explanatory sentences.
3. Use “Decision → Why → Trade-off” instead of narrative paragraphs.
4. Show process as flow nodes, not prose.
5. Show prioritization as a small matrix or bars, not a paragraph explaining prioritization.
6. Show delivery as four increments with one learning question each.
7. Keep metrics visibly labeled: Measured / Observed / Implemented / Estimated / Projected.
8. Put system nouns in diagrams and reserve prose for judgment.

## Visual direction

### Chosen: “Product control room”

A dark, high-contrast interface with:

- restrained Vercel-like grid and spectral light
- subtle animated system graph in the background
- glass/ink product surfaces
- Jira-inspired board grammar
- project-specific accent colors
- compact data visualizations
- native shared-element/page transitions

The site should feel like a product/engineering tool designed by someone who understands enterprise systems—not like a generic portfolio template.

### Watermelon UI

Useful as inspiration for polished blocks, dashboards, animated components, and reusable compositions. It is most valuable as a reference language rather than something the site needs to depend on directly.

### Vercel

Useful cues:

- disciplined grid
- strong type scale
- dark neutral canvas
- precise borders
- subtle luminous gradients
- spatial continuity between pages

Avoid turning the site into a Vercel clone. The portfolio’s distinctive layer is the product-operations/Jira storytelling.

### Three.js

Recommendation: **not a core dependency** for the first redesign candidate.

Three.js can create a strong hero, but constant 3D particles can compete with content, increase runtime cost, and make the site read like a creative-developer showcase. The current candidate uses a lightweight canvas system graph that conveys interconnected architecture with far less visual and performance overhead.

A later optional Three.js experiment could:

- render one low-poly dependency graph in the hero
- react to the hovered project card
- dissolve into the project’s system flow during navigation
- stop completely for reduced-motion users and on constrained devices

## Motion system

Motion should communicate state and continuity:

- project title morphs from board card to project hero
- project-page transition uses the browser View Transition API
- cards lift 2–4 px on hover; no dramatic scaling
- release train scrolls manually; no auto-rotating carousel
- section entrances are short and subtle
- background graph motion is very slow
- `prefers-reduced-motion` disables spatial motion

Motion must never delay access to content.

## Recommended homepage layout

```text
┌──────────────────────────────────────────────────────────────┐
│ VP   Work   Operating model           ● Senior TPO           │
├──────────────────────────────────────────────────────────────┤
│                                                              │
│  I turn complex systems into         STPO OPERATING SURFACE  │
│  clear product decisions.            01 Outcome framing      │
│                                      02 Architecture fluency  │
│  Enterprise platforms, AI,           03 Backlog judgment      │
│  operations, finance.                04 Delivery leadership   │
│                                      05 Evidence loop         │
│                                                              │
│  [ Explore the work ]                                        │
│                                                              │
│  6 initiatives | 19+ teams | 11GB+ corpus | $23.7M/mo       │
├──────────────────────────────────────────────────────────────┤
│ PORTFOLIO BOARD                                              │
│ ┌Platforms─────┬AI───────────┬Operations────┬Finance────────┐ │
│ │ EPIC-01      │ EPIC-02     │ EPIC-03      │ EPIC-05      │ │
│ │ Order mgmt   │ RAG agent   │ Build Plus   │ GL Coding    │ │
│ │ decision     │ decision    │ decision     │ decision     │ │
│ │ proof        │ proof       │ proof        │ proof        │ │
│ │              │             │ EPIC-04      │ EPIC-06      │ │
│ └──────────────┴─────────────┴──────────────┴──────────────┘ │
├──────────────────────────────────────────────────────────────┤
│ FROM AMBIGUITY TO EVIDENCE                                   │
│ Outcome → System → Priority → Delivery → Evidence            │
└──────────────────────────────────────────────────────────────┘
```

## Recommended project layout

```text
← All projects                EPIC-02 / AI           Next →

Enterprise RAG Analysis Agent                 ┌───────────────┐
Manual investigation → Grounded analysis      │ ~6d → ~2h     │
My contribution: one sentence                 │ Measured      │
                                              └───────────────┘
[11GB+] [558+] [100% / 90%+] [other proof]

DECISION BOARD
┌Context──────────┬Decision─────────┬Delivery─────────┬Evidence───────┐
│ problem         │ product call    │ sequence         │ outcome        │
│                 │ trade-off       │                  │                │
└─────────────────┴─────────────────┴──────────────────┴────────────────┘

┌ System flow ───────────────────────┐ ┌ How I made the call ──────────┐
│ Sources → Retrieval → Gate → Cite  │ │ RICE-style bars                │
│                                    │ │ Evaluation matrix              │
└────────────────────────────────────┘ └─────────────────────────────────┘

DELIVERY & LEARNING
[ POC ] [ Pilot ] [ Integration ] [ Evaluation loop ]  → horizontal

DECISION LOG
Decision | Why | Trade-off

MY OWNERSHIP
[product framing] [prototype] [retrieval] [evaluation] [integration]
```

## Carousels, charts, tables, and infographics

Use them only where the data type benefits:

- **Horizontal release train** for delivery increments — yes
- **System-flow infographic** for architecture — yes
- **Small prioritization matrices/bars** for frameworks — yes
- **Decision table** for rationale/trade-offs — yes
- **Metrics grid** for evidence — yes
- **Auto-playing carousel** for project content — no; it hides information and removes reader control
- **Decorative chart with invented values** — no

## Visual differentiation by project

Keep the same information architecture but use a controlled accent per project:

- Order Management — cyan / platform
- RAG Agent — violet / AI
- Build Plus — green / operations
- RFDS — electric blue / engineering
- Dynamic GL — amber / finance
- Lease & Vendor — rose / financial controls

The consistent skeleton helps scanning; the accent and system diagram keep projects from feeling formulaic.

## Implementation choice for the redesign sandbox

The candidate is intentionally implemented as static HTML/CSS/JS with:

- browser-native View Transition API
- custom lightweight Canvas system field
- semantic HTML
- no UI framework dependency
- no autoplay content
- reduced-motion support
- hash routing so GitHub Pages refreshes remain reliable

This keeps the concept easy to inspect and modify before deciding whether to port it back into the production Astro site or rebuild it with React/Watermelon components.

## What to test before promoting the redesign

1. Can a recruiter identify “Senior Technical Product Owner” without reading the bio?
2. Can they explain one project after 30 seconds?
3. Is the product decision more prominent than the technology?
4. Are technical details credible but not overwhelming?
5. Does every metric say what kind of evidence it is?
6. Does every framework reveal a real decision rather than decorate the page?
7. Can keyboard and reduced-motion users access the same information?
8. Does the site still feel fast on a normal laptop and mobile phone?
