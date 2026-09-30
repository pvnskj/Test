# Portfolio Redesign Sandbox

This branch is a research-backed redesign candidate for Venkata Parimi's Senior Technical Product Owner portfolio.

## Safety / source of truth

- The current production-style portfolio in `pvnskj/Portfolio` was **not modified**.
- A backup branch was created there before redesign work: `backup/pre-redesign-2026-09-30`.
- This redesign is isolated in `pvnskj/Test` on branch `portfolio-redesign-research`.
- A separate `portfolio-redesign` branch also exists and was intentionally left untouched when concurrent changes appeared there.

## Run locally

No build step is required.

```bash
python -m http.server 8000
```

Open `http://localhost:8000`.

## Design principles

- Decision-first, not prose-first.
- Jira-inspired product storytelling without turning the site into a literal sprint tracker.
- Explicit STPO signals: outcome, system, priority, delivery, evidence.
- Frameworks answer decision questions instead of appearing as a badge list.
- Measured / observed / estimated / projected evidence remains distinct.
- Native view transitions and lightweight canvas animation are used for polish without a heavy 3D runtime.
- Reduced-motion preferences are respected.

See `DESIGN_RESEARCH.md` for the full reasoning and layout spec.
