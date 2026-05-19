# Agent Role Map

## Purpose

This document maps the organization-style Agent structure to the existing Champion-based identities and role responsibilities.

## Core

| Agent | Official Role | New Path | Responsibility |
| --- | --- | --- | --- |
| Swain | core-agent | `agents/core/swain-core-agent.md` | Overall direction, priorities, business possibilities, long-term decisions |
| Shen | pm-agent | `agents/core/shen-pm-agent.md` | Work flow, next actions, progress management |

## Product Team

| Agent | Official Role | New Path | Responsibility |
| --- | --- | --- | --- |
| Lux | product-lead-agent | `agents/teams/product/lux-product-lead-agent.md` | Idea clarification, problem definition, MVP scope, requirements |

## Engineering Team

| Agent | Official Role | New Path | Responsibility |
| --- | --- | --- | --- |
| Viktor | engineering-lead-agent | `agents/teams/engineering/viktor-engineering-lead-agent.md` | Technical structure, feasibility, implementation scope, testing standards |
| Ekko | git-timeline-agent | `agents/teams/engineering/ekko-git-timeline-agent.md` | Git status, commits, pushes, history management |

## Workspace Team

| Agent | Official Role | New Path | Responsibility |
| --- | --- | --- | --- |
| Senna | workspace-lead-agent | `agents/teams/workspace/senna-workspace-lead-agent.md` | Operations, records, document freshness, Notion/Git synchronization |
| Karma | rule-sync-agent | `agents/teams/workspace/karma-rule-sync-agent.md` | Rule document edits and English/Korean document synchronization |
| Sona | library-agent | `agents/teams/workspace/sona-library-agent.md` | Document structure, duplicate documents, orphan documents |
| Ryze | encoding-review-agent | `agents/teams/workspace/ryze-encoding-review-agent.md` | UTF-8, mojibake, and Korean text integrity checks |

## Legacy Mapping

| Legacy Path | New Path |
| --- | --- |
| `ai/instructions/swain.md` | `agents/core/swain-core-agent.md` |
| `ai/instructions/shen.md` | `agents/core/shen-pm-agent.md` |
| `ai/instructions/lux.md` | `agents/teams/product/lux-product-lead-agent.md` |
| `ai/instructions/viktor.md` | `agents/teams/engineering/viktor-engineering-lead-agent.md` |
| `ai/instructions/senna.md` | `agents/teams/workspace/senna-workspace-lead-agent.md` |
| `ai/sub-agents/operation/ekko.git-timeline-keeper.md` | `agents/teams/engineering/ekko-git-timeline-agent.md` |
| `ai/sub-agents/operation/karma.sync-coordinator.md` | `agents/teams/workspace/karma-rule-sync-agent.md` |
| `ai/sub-agents/operation/sona.library-curator.md` | `agents/teams/workspace/sona-library-agent.md` |
| `ai/sub-agents/operation/ryze.encoding-auditor.md` | `agents/teams/workspace/ryze-encoding-review-agent.md` |

