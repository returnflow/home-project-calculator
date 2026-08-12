# AI Developer Playbook

## Authority

The repository is authoritative. AI agents do not override documented product/architecture decisions without explicit approval.

## Mandatory first read

Before implementation:

1. README.md
2. docs/PROJECT_STATE.md
3. docs/ARCHITECTURE.md
4. docs/AI_DEVELOPER_PLAYBOOK.md
5. relevant spec
6. relevant skill

## Rules

- Inspect existing code before editing.
- Make the smallest coherent change.
- Do not refactor unrelated code.
- Do not invent requirements.
- Do not invent physical constants.
- Do not duplicate calculation logic.
- Do not add dependencies without justification.
- Do not introduce a database unless required.
- Do not create mass SEO pages.
- Do not add AdSense without the monetization gate.

## Testing

Every feature must have appropriate tests. A green build without meaningful regression tests is not enough.

## Documentation

Update state after meaningful work.
Create/update ADRs for architectural changes.
Update calculation docs when formula behavior changes.

## Git

Use focused commits:

- feat:
- fix:
- test:
- docs:
- refactor:

## Stop conditions

Stop and report instead of guessing when:

- a physical constant is unverified
- code conflicts with specification
- destructive migration is required
- secrets are exposed
- production data may be damaged
- an important requirement is ambiguous

## End-of-task report

Every agent session should report:

- changed files
- implementation summary
- tests run/results
- known limitations
- docs updated
- next task
