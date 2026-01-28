# AGENTS.md

Software principles for AI coding agents working in this repo. These are the
defaults for adding features, refactoring, testing, and shipping.

## 1) Maximize project comprehension
- Keep a clear architecture map: modules, responsibilities, and data flow.
- Centralize invariants and domain rules; avoid duplicating business logic.
- Prefer explicit names and types over cleverness; reduce implicit behavior.

## 2) Design for extension without churn
- Maintain stable, well-defined interfaces between modules.
- Encapsulate feature-specific logic; avoid leaking new concepts across layers.
- Add new behavior by composition, not by patching multiple unrelated areas.

## 3) Keep code maintainable and scalable
- Favor small, focused functions and files with single responsibilities.
- Avoid tight coupling; use dependency direction that flows inward to core logic.
- Use consistent patterns; refactor to remove one-off special cases.

## 4) Make setup and iteration fast
- Provide simple, deterministic scripts for build/test/run.
- Minimize environment-specific assumptions and hidden state.
- Keep configuration explicit and documented.

## 5) Make debugging easy
- Use structured logs, clear error messages, and actionable context.
- Prefer pure functions where practical; avoid global mutable state.
- Ensure failures are reproducible with minimal steps.

## 6) Prevent regressions early
- Add targeted tests for new behavior and edge cases.
- Prefer tests that fail loudly and localize failures quickly.
- Keep CI checks fast and high-signal; avoid flaky tests.

## 7) Document as you change
- Update docs, READMEs, and examples alongside code.
- Record tradeoffs and rationale when decisions affect future work.
- Keep developer-facing docs concise and current.

## 8) Optimize for safe changes
- Make diffs small and focused; avoid unrelated edits.
- Preserve backwards compatibility unless explicitly breaking it.
- Use feature flags or gradual rollout paths when risk is non-trivial.
