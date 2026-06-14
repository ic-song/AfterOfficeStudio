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

## First-Depth Folder Indexes

Each active top-level work folder should have an `INDEX.md` file.

These index files are AI routing aids for token reduction. Write and maintain their content in English, even when the filename is Korean.

Do not create `.ko.md` counterparts for AI utility indexes outside `01_rule/`. Rule documents under `01_rule/` are the exception and must keep their required Korean review copies.

Purpose:

- Route work without broad folder scans.
- Show the current contents and important child documents.
- Tell agents which file to open next.

Default lookup order:

```text
1. README.md
2. 01_rule/ai/document-index.md
3. {top-level-folder}/INDEX.md
4. Only the specific document needed for the task
```

Do not read every file under a top-level folder when its `INDEX.md` can identify the needed document.

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
