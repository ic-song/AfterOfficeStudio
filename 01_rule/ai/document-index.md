# Document Index

## Purpose

This index helps AI agents find the correct Markdown documents without scanning the whole repository unnecessarily.

AI-facing rule documents are written in English. Korean review copies and Korean human-readable rule references live under `01_rule/ko/`.

## Entry Points

| Document | Purpose | Audience |
| --- | --- | --- |
| `README.md` | Korean repository overview | Human / AI |
| `AGENTS.md` | Top-level AI working rules | AI |
| `01_rule/ai/rules.md` | Common AI work rules | AI |
| `01_rule/ai/workflow.md` | Default AI project workflow | AI |
| `01_rule/ai/token-usage-rules.md` | Token-saving work standards | AI |
| `01_rule/ai/document-index.md` | AI-facing document index | AI |
| `01_rule/agents/core/role-map.md` | Agent identity, role, and path map | AI / Human |
| `01_rule/ko/document-index.ko.md` | Korean human-facing document index | Human |

## Top-Level Folders

| Path | Purpose |
| --- | --- |
| `01_rule/` | Rule documents, Agent role cards, and Korean review copies |
| `10_아이디어/` | Project candidate ideas before promotion to `50_프로젝트/` |
| `50_프로젝트/` | Active projects and project templates |
| `90_기록실/` | Operation records such as meeting notes, document move history, and deletion-pending history |
| `99_아카이브/` | Archived or deletion-pending documents |
| `human/` | Human-facing records that have not yet moved to a numbered folder |

## Korean Path Mapping

Use this table when an AI-facing instruction needs an English meaning for a Korean path.

| Actual Path | AI Alias | Meaning |
| --- | --- | --- |
| `10_아이디어/` | `10_idea/` | Project candidates before promotion |
| `50_프로젝트/` | `50_project/` | Active projects and project templates |
| `90_기록실/` | `90_record/` | Operation records |
| `90_기록실/회의록/` | `90_record/meetings/` | Workspace-level or unassigned meeting notes |
| `90_기록실/문서이동/문서이동-이력.ko.md` | `90_record/document-move-history.md` | Document and folder move history |
| `90_기록실/삭제대기/삭제대기-이력.ko.md` | `90_record/deletion-pending-history.md` | Deletion-pending and actual deletion history |
| `99_아카이브/` | `99_archive/` | Archive |
| `99_아카이브/삭제대기/` | `99_archive/deletion-pending/` | Files waiting for explicit deletion approval |

## AI-Facing Core Documents

| Path | Purpose |
| --- | --- |
| `AGENTS.md` | Top-level AI rules and role boundaries |
| `01_rule/ai/rules.md` | Shared rules for AI work |
| `01_rule/ai/workflow.md` | Idea-to-project workflow |
| `01_rule/ai/token-usage-rules.md` | Token usage and role activation optimization |
| `01_rule/ai/document-index.md` | AI-facing document index |
| `01_rule/agents/core/role-map.md` | Agent alias, official role, path, and responsibility map |

## Agent Role Cards

| Path | Purpose |
| --- | --- |
| `01_rule/agents/core/swain-core-agent.md` | Swain / core-agent role card |
| `01_rule/agents/core/shen-pm-agent.md` | Shen / pm-agent role card |
| `01_rule/agents/teams/product/lux-product-lead-agent.md` | Lux / product-lead-agent role card |
| `01_rule/agents/teams/engineering/viktor-engineering-lead-agent.md` | Viktor / engineering-lead-agent role card |
| `01_rule/agents/teams/engineering/ekko-git-timeline-agent.md` | Ekko / git-timeline-agent role card |
| `01_rule/agents/teams/workspace/senna-workspace-lead-agent.md` | Senna / workspace-lead-agent role card |
| `01_rule/agents/teams/workspace/karma-rule-sync-agent.md` | Karma / rule-sync-agent role card |
| `01_rule/agents/teams/workspace/sona-library-agent.md` | Sona / library-agent role card |
| `01_rule/agents/teams/workspace/ryze-encoding-review-agent.md` | Ryze / encoding-review-agent role card |

## Human-Readable Rule Documents

| Path | Purpose |
| --- | --- |
| `01_rule/ko/AGENTS.ko.md` | Korean review copy of `AGENTS.md` |
| `01_rule/ko/rules.ko.md` | Korean review copy of `01_rule/ai/rules.md` |
| `01_rule/ko/workflow.ko.md` | Korean review copy of `01_rule/ai/workflow.md` |
| `01_rule/ko/token-usage-rules.ko.md` | Korean review copy of `01_rule/ai/token-usage-rules.md` |
| `01_rule/ko/meeting-note-rules.ko.md` | Korean meeting note and transcript-section writing standard |
| `01_rule/ko/team-members.ko.md` | Korean team member roster for all agents |
| `01_rule/ko/agents/**/*.ko.md` | Korean review copies of `01_rule/agents/**/*.md` |
| `01_rule/ko/팀원/*.ko.md` | Korean review copies of legacy Core Agent role cards |
| `01_rule/ko/sub-agents/**/*.ko.md` | Korean review copies of legacy sub-agent cards |

## Operation Records

| Path | Purpose |
| --- | --- |
| `90_기록실/회의록/` | Workspace-level or unassigned meeting notes |
| `90_기록실/회의록/.gitkeep` | Placeholder so Git tracks the workspace meeting-note folder |
| `90_기록실/문서이동/문서이동-이력.ko.md` | Korean document move history log |
| `90_기록실/삭제대기/삭제대기-이력.ko.md` | Korean deletion-pending and actual deletion history log |

## Ideas

| Path | Purpose |
| --- | --- |
| `10_아이디어/` | Project candidate ideas before project promotion |
| `10_아이디어/.gitkeep` | Placeholder so Git tracks the folder |

## Project Template Documents

| Path | Purpose | Audience |
| --- | --- | --- |
| `50_프로젝트/project-template/README.md` | Human-facing project introduction template | Human |
| `50_프로젝트/project-template/README.ko.md` | Korean project introduction template | Human |
| `50_프로젝트/project-template/PROJECT.md` | Project overview template | Human |
| `50_프로젝트/project-template/PROJECT.ko.md` | Korean project overview template | Human |
| `50_프로젝트/project-template/TASKS.md` | Task list template | Human |
| `50_프로젝트/project-template/TASKS.ko.md` | Korean task list template | Human |
| `50_프로젝트/project-template/DECISIONS.md` | Decision log template | Human / AI |
| `50_프로젝트/project-template/DECISIONS.ko.md` | Korean decision log template | Human |
| `50_프로젝트/project-template/AI_CONTEXT.md` | AI-facing project context template | AI |
| `50_프로젝트/project-template/AI_CONTEXT.ko.md` | Korean review copy of the project template AI context |
| `50_프로젝트/{project}/meetings/` | Project-specific meeting notes | Human |

## Archive

| Path | Purpose |
| --- | --- |
| `99_아카이브/삭제대기/` | Files waiting for explicit deletion approval |
| `99_아카이브/삭제대기/.gitkeep` | Placeholder so Git tracks the deletion-pending folder |
| `99_아카이브/삭제대기/README.ko.md` | Deprecated root Korean README pending deletion approval |
| `99_아카이브/삭제대기/01_rule-agents-AGENTS.md` | Deprecated Agent directory guide pending deletion approval |
| `99_아카이브/삭제대기/01_rule-ko-agents-AGENTS.ko.md` | Deprecated Korean review copy of the Agent directory guide pending deletion approval |

## Maintenance Rules

- Check this index before scanning the whole repository.
- Use the Korean Path Mapping table when a Korean path needs an English interpretation.
- Sona may propose index updates and report orphan or duplicate documents.
- Karma applies approved document sync, repair, and rule-related edits.
- Ryze is activated by encoding risk, not by every document change.
- Do not treat this index as approval for file moves or structure changes.
