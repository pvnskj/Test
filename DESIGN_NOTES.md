# Portfolio Redesign — Product Storytelling + UI System

## Goal

The portfolio should make one conclusion easy within the first minute:

Venkata is a Senior Technical Product Owner who can frame ambiguous enterprise problems, make architectural and prioritization decisions, coordinate complex delivery, and prove business value.

The redesign therefore treats the site as a product operating surface, not a résumé with case-study pages.

## 1. What current STPO roles repeatedly ask for

Across current Senior Technical Product Owner / Senior Product Owner postings, the recurring signals are:

1. Product vision / product goal — connect business objectives to a coherent product direction.
2. Roadmap and backlog prioritization — make explicit trade-offs across value, risk, dependencies, technical health and capacity.
3. Architecture fluency — work with architects/engineering on APIs, data, integrations, scalability, modernization and platform constraints.
4. Dependency management — sequence work across multiple teams/squads and surface blockers early.
5. Translation — turn ambiguous business problems into epics, stories, acceptance criteria and measurable outcomes.
6. Delivery leadership — sprint/release/PI planning, refinement, UAT/readiness and execution transparency.
7. Evidence / value realization — define and track KPIs, ROI, cycle time, adoption or operational performance.
8. Senior stakeholder communication — explain trade-offs, risk and technical implications clearly.

### Portfolio implication

Do not bury these signals in paragraphs. Make them visible as recurring UI primitives:
- product goal
- decision
- dependency / system flow
- delivery increments
- framework / decision lens
- evidence type
- measurable outcome

## 2. Core storytelling model

Every project should answer seven questions in order:

1. What was broken?
2. What outcome mattered?
3. What did I decide?
4. Why did I make that call?
5. How did I sequence delivery?
6. How did the system work?
7. What evidence proves the result?

### Compression rule

A reader should never need a paragraph when a structured artifact can explain the same idea faster.

Preferred:
- before → after
- flow diagrams
- decision cards
- 2x2 matrices
- release increments
- evidence cards
- small tables
- short labels with one-line explanations

Avoid:
- long challenge paragraphs
- repeated background in several sections
- generic Agile language
- framework name-dropping
- inflated KPI labels without evidence type

## 3. Framework policy

The site should not retrofit RICE, MoSCoW or other frameworks into historical work unless there is enough evidence that the work actually used that logic.

The better pattern is a Decision Lens showing the variables that actually drove the call:
- value
- effort
- migration risk
- failure impact
- dependency
- evidence quality
- architecture leverage
- control / compliance

Then use a named framework when source-backed.

Examples in this prototype:
- Build Plus: LOB × LOE is explicitly source-backed; RACI is also part of the operating model.
- Enterprise RAG: risk × evidence quality is more authentic than inventing a RICE score.
- Order Management: dependency sequencing + behavioral parity.
- RFDS: control / failure-impact prioritization.
- Dynamic GL: build-vs-extend investment decision.
- Lease Management: control placement + RACI-style accountability.

Where RICE could be added later, only if historical inputs can be reconstructed credibly:
- Reach: affected users/transactions/sites/teams
- Impact: cycle-time, financial or risk improvement
- Confidence: evidence quality behind the estimate
- Effort: engineering/team/time estimate

Where MoSCoW fits naturally:
- Must preserve behavior
- Must protect controls
- Should improve observability
- Could add convenience/configurability later

## 4. Visual direction

Chosen combination:

Vercel / Geist
- high-contrast technical typography
- strong grid
- restrained materials
- developer/product-system feel

Linear
- calm density
- small labels
- predictable hierarchy
- information-rich without visual noise

Jira
- board mental model
- work-item keys
- lanes
- status/decision artifacts
- recognizable product ownership language

Watermelon UI
- component composition inspiration
- command palette, cards, dialogs, dashboards
- not used as a visual theme by itself

Three.js
- one lightweight hero system visualization
- communicates connected systems / orchestration
- deliberately not used as a full-site spectacle

## 5. Motion system

A. Hero system map
Six project nodes sit inside a subtle 3D system graph. Pointer movement creates small parallax. It is meant to communicate connected enterprise systems, not creative coding for its own sake.

B. View transitions
Project navigation uses the native View Transition API where available. The fallback is immediate navigation.

C. Microinteractions
- project card lift
- button inversion
- carousel snap
- filters
- command palette
- horizontally scrollable boards on mobile

D. Reduced motion
Decorative/complex motion is disabled under the prefers-reduced-motion media query.

## 6. Homepage layout

    ┌──────────────────────────────────────────────────────────────────────┐
    │ VP  Venkata Parimi / Senior Technical Product Owner      Work  Method│
    ├──────────────────────────────────────────────────────────────────────┤
    │                                                                      │
    │ PRODUCT STRATEGY · SYSTEMS · DELIVERY     ┌────────────────────────┐ │
    │                                           │                        │ │
    │ I turn enterprise ambiguity into          │   animated system map  │ │
    │ SYSTEMS TEAMS CAN SHIP.                   │   · 6 project nodes    │ │
    │                                           │   · dependency lines   │ │
    │ Business ↔ architecture ↔ evidence        │   · subtle parallax    │ │
    │                                           │                        │ │
    │ [Explore work] [Flagship case]            └────────────────────────┘ │
    │                                                                      │
    │ Product goal · Prioritization · Architecture · Dependencies · Proof  │
    ├──────────────────────────────────────────────────────────────────────┤
    │ ~6 days → 2 hrs | $1.2M | $23.7M/mo | 40% faster close               │
    ├──────────────────────────────────────────────────────────────────────┤
    │ PORTFOLIO OPERATING BOARD                                            │
    │ [All] [Platforms] [AI] [Operations] [Finance]                        │
    │                                                                      │
    │ ┌ EPIC-01 ┐ ┌ EPIC-02 ┐ ┌ EPIC-03 ┐                                 │
    │ │ Order   │ │ RAG     │ │ Build+  │                                 │
    │ │ decision│ │ decision│ │ decision│                                 │
    │ │ proof ↗ │ │ proof ↗ │ │ proof ↗ │                                 │
    │ └─────────┘ └─────────┘ └─────────┘                                 │
    │ ┌ EPIC-04 ┐ ┌ EPIC-05 ┐ ┌ EPIC-06 ┐                                 │
    │ │ RFDS    │ │ GL      │ │ Lease   │                                 │
    │ └─────────┘ └─────────┘ └─────────┘                                 │
    ├──────────────────────────────────────────────────────────────────────┤
    │ CASE-STUDY CAROUSEL                                                   │
    │ large metric + outcome | compact system flow                         │
    ├──────────────────────────────────────────────────────────────────────┤
    │ HOW I OPERATE                                                        │
    │ Goal → Trade-off → Sequence → Evidence                               │
    └──────────────────────────────────────────────────────────────────────┘

## 7. Project page layout

    ┌ Portfolio ←                        EPIC-01                  ←  → ┐
    │                                                                  │
    │ Platforms / Product strategy                                    │
    │ ENTERPRISE ORDER MANAGEMENT                 ┌─────────────────┐ │
    │ Manually modeled paths →                    │ MEASURED        │ │
    │ Dependency-driven execution                 │ 20%             │ │
    │                                              │ Faster mapping  │ │
    │ My contribution: one sentence                └─────────────────┘ │
    │ [Architecture] [Dependencies] [Migration] [Measurement]          │
    ├──────────────────────────────────────────────────────────────────┤
    │ CONTEXT              │ DECISION              │ OUTCOME           │
    │ Problem              │ My call               │ What changed      │
    ├──────────────────────────────────────────────────────────────────┤
    │ SYSTEM MAP                                                       │
    │ intent → dependencies → readiness → execution → provisioning     │
    ├──────────────────────────────────────────────────────────────────┤
    │ PRODUCT OPERATING SYSTEM                                         │
    │                                                                  │
    │ CONTEXT        DECISION        DELIVERY        EVIDENCE           │
    │ [Goal/Risk]    [DEC cards]     [INC cards]     [Proof cards]      │
    ├──────────────────────────────────────────────────────────────────┤
    │ DECISION LENS                                                     │
    │ [value/effort matrix]                 [rules / trade-offs]        │
    ├──────────────────────────────────────────────────────────────────┤
    │ EVIDENCE: Measured | Observed | Projected | Estimated             │
    └──────────────────────────────────────────────────────────────────┘

## 8. Content length rules

Hero
- title: 2–6 words
- before → after: one line
- contribution: one sentence
- primary proof: one metric

Problem / decision / outcome
- 18–32 words each

Decision board card
- headline: 4–12 words
- tag: 1–3 words
- no paragraph unless opened later

System flow
- 4–8 nodes
- 1–4 words per node

Framework
- one diagram
- maximum three rules

Evidence
- value
- evidence type
- label
- one-line basis

## 9. Why this reads as STPO instead of PM or BA

A generic PM portfolio can emphasize market discovery, growth or feature launches.
A BA portfolio can emphasize requirements and process documentation.

This portfolio repeatedly exposes a different pattern:

business objective → system constraint → product decision → architecture/dependency → delivery sequence → measurable evidence

That is the intersection current Senior Technical Product Owner roles describe.

## 10. What not to do

- Do not make Three.js the navigation itself.
- Do not use huge particle counts or continuous GPU-heavy effects.
- Do not put every project into a different visual language.
- Do not show fake Jira screenshots.
- Do not show RICE / MoSCoW / Kano / WSJF as a skills badge wall.
- Do not add charts when a single number communicates the point better.
- Do not repeat the same metric in hero, story, board and evidence without a reason.
- Do not hide the decision behind implementation details.

## 11. Research references

- Concentrix — Senior Technical Product Owner: product strategy, roadmap, backlog, architecture alignment, delivery and cross-functional leadership.
- Broadcom — Senior Product Owner: customer value, roadmap prioritization, architecture/engineering collaboration and dependency management.
- Danone — Senior Product Owner: strategy, value realization, portfolio-level prioritization, multi-squad roadmap and interdependencies.
- Ascensus — Senior AI Product Owner: platform roadmap, backlog prioritization by value/risk/dependencies, POCs/pilots and multi-team coordination.
- Atlassian Jira documentation — boards, card fields, filters, swimlanes and focused board views.
- Vercel Geist — high-contrast accessible system, grid, typography and materials.
- Linear 2026 design refresh — calmer interfaces, pruning unnecessary controls and predictable hierarchy.
- MDN View Transition API — native animated transitions between page/view states.
- Motion — shared-element and layout animation patterns.
- Watermelon UI — copy-paste React components, dashboard patterns and animated components.

## 12. Prototype implementation

Repo: pvnskj/Test

Working branch during redesign: portfolio-redesign

Original Test state backup: backup/pre-portfolio-redesign-2026-09-30

Original portfolio backup: pvnskj/Portfolio backup/pre-redesign-2026-09-30

Files:
- index.html — semantic layout / views
- styles.css — visual system and responsive board
- app.js — data, navigation, filters, carousel, command palette, view transitions and lightweight Three.js hero

The prototype is intentionally framework-light so the information architecture can be evaluated before committing to React/Next/Watermelon or a heavier animation stack.
