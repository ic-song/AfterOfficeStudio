# Document Index

## Purpose

This index helps AI agents find the correct Markdown documents without scanning the whole repository unnecessarily.

AI-facing rule documents are written in English. Human-facing Korean review copies live under `human/02_ai_docs_ko/`.

## Entry Points

| Document | Purpose | Audience |
| --- | --- | --- |
| `README.md` | Human-facing repository overview | Human |
| `AGENTS.md` | Top-level AI working rules | AI |
| `ai/rules.md` | Common AI work rules | AI |
| `ai/workflow.md` | Default AI project workflow | AI |
| `human/document-index.ko.md` | Korean human-facing document index | Human |
| `human/team-members.ko.md` | Korean team member roster | Human |
| `ai/document-index.md` | English AI-facing document index | AI |

## AI-Facing Core Documents

| Path | Purpose |
| --- | --- |
| `AGENTS.md` | Top-level AI rules and role boundaries |
| `ai/rules.md` | Shared rules for AI work |
| `ai/workflow.md` | Idea-to-project workflow |
| `ai/instructions/swain.md` | Swain / ceo-agent role card |
| `ai/instructions/shen.md` | Shen / pm-agent role card |
| `ai/instructions/lux.md` | Lux / planning-lead-agent role card |
| `ai/instructions/viktor.md` | Viktor / development-lead-agent role card |
| `ai/instructions/senna.md` | Senna / operation-lead-agent role card |

## AI-Facing Operation Sub-Agents

| Path | Role | Notes |
| --- | --- | --- |
| `ai/sub-agents/operation/karma.sync-coordinator.md` | documentation-sync-coordinator | Applies approved rule/document sync and repair edits |
| `ai/sub-agents/operation/ryze.encoding-auditor.md` | encoding-auditor | Read-only encoding and mojibake auditor |
| `ai/sub-agents/operation/sona.library-curator.md` | library-curator | Proposes document indexes, locations, and reference hygiene reports |
| `ai/sub-agents/operation/ekko.git-timeline-keeper.md` | git-timeline-keeper | Manages Git status, commits, branches, remotes, and pushes |

## Human-Facing Documents

| Path or Pattern | Purpose |
| --- | --- |
| `human/document-index.ko.md` | Korean human-facing document index |
| `human/team-members.ko.md` | Korean team member roster for all agents |
| `human/meeting-note-rules.ko.md` | Korean meeting note and transcript-section writing standard |
| `human/meetings/` | Workspace-level or unassigned meeting notes |
| `human/01_*/company-overview.ko.md` | Korean company overview document |
| `human/02_ai_docs_ko/AGENTS.ko.md` | Korean review copy of `AGENTS.md` |
| `human/02_ai_docs_ko/rules.ko.md` | Korean review copy of `ai/rules.md` |
| `human/02_ai_docs_ko/workflow.ko.md` | Korean review copy of `ai/workflow.md` |
| Korean core-agent review copies under `human/02_ai_docs_ko/` | Korean review copies of Core Agent instructions |
| `human/02_ai_docs_ko/sub-agents/**/*.ko.md` | Korean review copies of sub-agent cards |
| `human/02_ai_docs_ko/projects/project-template/AI_CONTEXT.ko.md` | Korean review copy of the project template AI context |

## Project Template Documents

| Path | Purpose | Audience |
| --- | --- | --- |
| `projects/project-template/README.md` | Human-facing project introduction template | Human |
| `projects/project-template/README.ko.md` | Korean project introduction template | Human |
| `projects/project-template/PROJECT.md` | Project overview template | Human |
| `projects/project-template/PROJECT.ko.md` | Korean project overview template | Human |
| `projects/project-template/TASKS.md` | Task list template | Human |
| `projects/project-template/TASKS.ko.md` | Korean task list template | Human |
| `projects/project-template/DECISIONS.md` | Decision log template | Human / AI |
| `projects/project-template/DECISIONS.ko.md` | Korean decision log template | Human |
| `projects/project-template/AI_CONTEXT.md` | AI-facing project context template | AI |
| `projects/{project}/meetings/` | Project-specific meeting notes | Human |

## Maintenance Rules

- Sona may propose index updates and report orphan or duplicate documents.
- Karma applies approved document sync, repair, and rule-related edits.
- Ryze checks UTF-8 validity and mojibake risk before and after document repair or sync.
- Do not treat this index as approval for file moves or structure changes.
