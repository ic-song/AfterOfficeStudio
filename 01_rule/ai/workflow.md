# AI Workflow

## 1. Purpose

This document defines how an idea becomes a project candidate and, when appropriate, a documented project in After Office Studio.

## 2. Default Flow

```text
1. Collect the idea.
2. Store the idea under 10_아이디어/ when it needs continued review.
3. Swain reviews direction and project potential.
4. Shen organizes the work flow.
5. Lux drafts the planning document.
6. Review business model possibilities when needed.
7. Viktor reviews technical feasibility when needed.
8. Senna organizes status and records.
9. Promote the idea to 50_프로젝트/ only after promotion criteria are met.
10. Record final decisions in DECISIONS.md.
```

## 3. Step Standards

### 1. Collect the Idea

Summarize the background, problem, expected user, and current state.

### 2. Store the Idea

If an idea needs continued review but is not yet approved as a project, store it under `10_아이디어/`.

The idea record should make these points clear:

- What the idea is.
- Who suggested it.
- What is confirmed.
- What is uncertain.
- What must be checked before project promotion.

Do not create a folder under `50_프로젝트/` only because an idea was mentioned.

### 3. Swain Reviews Direction

Swain checks whether the idea fits After Office Studio and whether it is worth managing as a project.

### 4. Shen Organizes Work Flow

Shen defines the next actions, assigned agents, required documents, and work order.

### 5. Lux Drafts Planning

Lux drafts the problem definition, target user, MVP scope, and requirements.

### 6. Review Business Model Possibilities

When needed, review business model possibilities. Do not treat the business model as confirmed.

### 7. Viktor Reviews Technical Feasibility

Viktor reviews feasibility, technical structure, risks, and testing standards.

### 8. Senna Organizes Status and Records

Senna organizes idea or project status, decisions, and document freshness checks.

When a meeting or discussion needs an operation record, Senna follows `01_rule/ko/meeting-note-rules.ko.md`. Workspace-level or unassigned meeting notes are stored under `90_기록실/회의록/`; project-specific meeting notes are stored under `50_프로젝트/{project}/meetings/`. The meeting note should preserve discussion flow, major opinions, issues, decisions, deferred items, and next actions.

### 9. Promote the Idea to a Project

Create a folder under `50_프로젝트/` only when the idea has enough evidence to become an active project.

Minimum promotion criteria:

- The purpose is clear.
- The target user or internal operator is defined.
- The problem or opportunity is described.
- The next planning or execution action is known.
- The responsible Agent flow is clear.
- The human owner approves promotion, or the latest instruction clearly asks for project creation.

At the early project stage, use the `50_프로젝트/project-template/` structure as the minimum standard.

### 10. Record Decisions

Record final decisions in the project's `DECISIONS.md`. If the project does not exist yet, record them in a meeting note or temporary decision document.

## 4. Idea and Project Boundary

Use `10_아이디어/` for items that are still being explored.

Use `50_프로젝트/` only for items that have been promoted from idea review into an active project or an approved project candidate.

Ideas should stay lightweight by default. Do not create a separate records folder inside an idea unless the human owner explicitly asks for it after the idea is already stored under `10_아이디어/`.

For normal idea-stage work, keep notes inside the idea's Korean documents, such as `아이디어개요.md`, `작업목록.md`, and `결정기록.md`.

Do not treat speculative business models, unselected technology stacks, or loose feature ideas as confirmed project decisions.

## 5. Status Values

Use these status values when needed:

```text
IDEA    : Idea stage
TODO    : Candidate for work
READY   : Ready for planning or execution
DOING   : In progress
HOLD    : On hold
LIVE    : Reflected in operation
DONE    : Finished
ARCHIVE : Archived
```

When changing status, record the reason for the change.
