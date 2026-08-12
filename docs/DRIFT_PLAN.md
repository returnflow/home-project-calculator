# AI Drift Prevention & Recovery

## Source-of-truth hierarchy

1. Product requirements
2. Architecture
3. Calculation specification
4. Security/privacy requirements
5. ADRs
6. Project state
7. Tests
8. Existing implementation
9. AI assumptions

## Required state files

- PROJECT_STATE.md
- CHANGELOG.md
- ARCHITECTURE_DECISIONS.md
- TODO.md

## Cross-agent handoff

Before switching Claude ↔ Kimi:

1. Finish or mark task state.
2. Run tests.
3. Update PROJECT_STATE.
4. Update CHANGELOG.
5. Commit.
6. Record exact next task.

## Drift audit

Every 5–10 meaningful tasks audit:

- architecture
- duplicate logic
- dependency growth
- calculation consistency
- test coverage
- SEO templates
- documentation

## Recovery instruction

If the agent is confused:

> Stop implementation. Read README.md, docs/PROJECT_STATE.md, docs/ARCHITECTURE.md, docs/AI_DEVELOPER_PLAYBOOK.md and the relevant skills/specifications. Inspect the repository. Do not modify files. Report the current architecture, current task, conflicts and the smallest safe next action.

## Conflict resolution

Never silently change the specification to match existing code. Resolve the intended behavior, then update code and documentation together.
