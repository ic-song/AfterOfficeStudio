# Token Usage Rules

## Purpose

This document defines token-saving work standards for AI agents in After Office Studio.

The goal is to reduce unnecessary reading, repeated explanation, duplicated Agent handoffs, and broad document scans while preserving accuracy and reviewability.

## Core Principle

```text
Read only what is needed.
Write only what is needed.
Use role handoffs only when risk justifies them.
```

## Document Reading Order

1. Check the entry point or index first.
2. Use search to find relevant documents and sections.
3. Read only the needed files or sections.
4. Read whole files only when the full context is necessary.
5. Do not repeatedly read the same content unless it may have changed.

Recommended entry points:

```text
AGENTS.md
01_rule/ai/document-index.md
01_rule/agents/core/role-map.md
```

## Agent Activation

Use the smallest role set that can safely handle the work.

```text
Simple question                  -> Direct answer
Single rule/document edit         -> Karma standards
Document structure question       -> Sona standards
Large structure change            -> Shen + Sona + Karma + Ryze as needed
Encoding risk                     -> Ryze
Git execution                     -> Ekko
```

Ryze is activated by encoding risk, not by every document change.

## Reporting

Interim updates should be short and focus on:

- What was checked
- What will be changed
- Any risk or confirmation needed

Final reports should focus on:

- Changed files
- Key changes
- Verification result
- Remaining risks or follow-ups

## Sync Optimization

- Synchronize only changed counterpart pairs.
- Do not scan or rewrite every Markdown file for a small change.
- Use `rg` or file indexes before opening large files.
- For small edits, run changed-file checks first.
- Use full Markdown checks only for high-risk sync, repair, release, or commit preparation.

## Encoding Checks

Changed-file UTF-8 checks are enough for simple edits.

Activate Ryze when:

- Korean document changes are large
- Mojibake or broken text is suspected
- The user asks for encoding review
- Document repair is required
- High-risk sync work touches rule-related Markdown
