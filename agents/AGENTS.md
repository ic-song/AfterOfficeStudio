# Agents Directory

## Purpose

This directory defines the organization-style Agent structure for After Office Studio.

The repository-level `AGENTS.md` remains the highest local Agent rule document. This file only explains how Agent role cards are arranged under `agents/`.

## Structure

```text
agents/
├─ AGENTS.md
├─ core/
│  ├─ swain-core-agent.md
│  ├─ shen-pm-agent.md
│  └─ role-map.md
└─ teams/
   ├─ product/
   │  └─ lux-product-lead-agent.md
   ├─ engineering/
   │  ├─ viktor-engineering-lead-agent.md
   │  └─ ekko-git-timeline-agent.md
   └─ workspace/
      ├─ senna-workspace-lead-agent.md
      ├─ karma-rule-sync-agent.md
      ├─ sona-library-agent.md
      └─ ryze-encoding-review-agent.md
```

## Team Model

Core Agents handle company-level direction and work coordination.

Team Agents handle domain-specific planning, engineering, workspace operation, documentation, library, encoding, and Git timeline responsibilities.

Champion names are aliases for recognizing each Agent. Official role names and responsibility boundaries take priority over character flavor.

## Compatibility Note

The existing `ai/instructions/` and `ai/sub-agents/` documents are the current legacy role-card locations unless the top-level rules are updated separately.

Do not delete or move legacy Agent documents without explicit human approval.

## Korean Review Copy Sync

Every AI-facing Markdown file under `agents/` must have a matching Korean review copy under `human/02_ai_docs_ko/agents/`.

The matching Korean file must mirror the relative path and use the `.ko.md` suffix.

Examples:

```text
agents/core/role-map.md
human/02_ai_docs_ko/agents/core/role-map.ko.md
```

When an `agents/**/*.md` file is created, changed, moved, or renamed, Karma must update the matching Korean review copy in the same work session.
