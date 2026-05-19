# Agent Role Map

## Purpose

This document maps the organization-style Agent structure to the existing Champion-based identities and role responsibilities.

## Core

| Agent | Official Role | New Path | Responsibility |
| --- | --- | --- | --- |
| Swain | core-agent | `01_rule/agents/core/swain-core-agent.md` | Overall direction, priorities, business possibilities, long-term decisions |
| Shen | pm-agent | `01_rule/agents/core/shen-pm-agent.md` | Work flow, next actions, progress management |

## Product Team

| Agent | Official Role | New Path | Responsibility |
| --- | --- | --- | --- |
| Lux | product-lead-agent | `01_rule/agents/teams/product/lux-product-lead-agent.md` | Idea clarification, problem definition, MVP scope, requirements |

## Engineering Team

| Agent | Official Role | New Path | Responsibility |
| --- | --- | --- | --- |
| Viktor | engineering-lead-agent | `01_rule/agents/teams/engineering/viktor-engineering-lead-agent.md` | Technical structure, feasibility, implementation scope, testing standards |
| Ekko | git-timeline-agent | `01_rule/agents/teams/engineering/ekko-git-timeline-agent.md` | Git status, commits, pushes, history management |

## Workspace Team

| Agent | Official Role | New Path | Responsibility |
| --- | --- | --- | --- |
| Senna | workspace-lead-agent | `01_rule/agents/teams/workspace/senna-workspace-lead-agent.md` | Operations, records, document freshness, Notion/Git synchronization |
| Karma | rule-sync-agent | `01_rule/agents/teams/workspace/karma-rule-sync-agent.md` | Rule document edits and English/Korean document synchronization |
| Sona | library-agent | `01_rule/agents/teams/workspace/sona-library-agent.md` | Document structure, duplicate documents, orphan documents |
| Ryze | encoding-review-agent | `01_rule/agents/teams/workspace/ryze-encoding-review-agent.md` | UTF-8, mojibake, and Korean text integrity checks |

## Legacy Mapping

| Legacy Path | New Path |
| --- | --- |
| `01_rule/ai/instructions/swain.md` | `01_rule/agents/core/swain-core-agent.md` |
| `01_rule/ai/instructions/shen.md` | `01_rule/agents/core/shen-pm-agent.md` |
| `01_rule/ai/instructions/lux.md` | `01_rule/agents/teams/product/lux-product-lead-agent.md` |
| `01_rule/ai/instructions/viktor.md` | `01_rule/agents/teams/engineering/viktor-engineering-lead-agent.md` |
| `01_rule/ai/instructions/senna.md` | `01_rule/agents/teams/workspace/senna-workspace-lead-agent.md` |
| `01_rule/ai/sub-agents/operation/ekko.git-timeline-keeper.md` | `01_rule/agents/teams/engineering/ekko-git-timeline-agent.md` |
| `01_rule/ai/sub-agents/operation/karma.sync-coordinator.md` | `01_rule/agents/teams/workspace/karma-rule-sync-agent.md` |
| `01_rule/ai/sub-agents/operation/sona.library-curator.md` | `01_rule/agents/teams/workspace/sona-library-agent.md` |
| `01_rule/ai/sub-agents/operation/ryze.encoding-auditor.md` | `01_rule/agents/teams/workspace/ryze-encoding-review-agent.md` |
