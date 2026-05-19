# AI Rules

## 1. Document Priority

AI agents must check relevant documents before working.

```text
1. The user's or project owner's latest explicit instruction
2. AGENTS.md
3. ai/rules.md
4. ai/instructions/{agent}.md
5. projects/{project}/AI_CONTEXT.md
6. ai/workflow.md
7. projects/{project}/*.md
8. human/*.md
9. README.md
```

If documents conflict, follow the higher-priority document and explicitly state the conflict.

## 2. No Guesswork

- Do not decide by guesswork.
- Mark uncertain information as uncertain.
- If actual files, actual operating state, and documents differ, state the difference.
- Do not change project priorities or project status without evidence.

## 3. Deletion, Structure Change, and Policy Change Rules

Do not do the following without explicit human approval:

- Delete files.
- Perform large directory-structure changes.
- Change policies or operating standards.
- Change role responsibilities.
- Remove features or documents because they seem unused.

When deletion is needed, first confirm the target, reason, replacement location, and backup status.

## 4. Rule Document Ownership

Rule-related Markdown documents may only be edited by Karma, the documentation-sync-coordinator sub-agent.

Rule-related documents include:

```text
AGENTS.md
ai/rules.md
ai/workflow.md
ai/instructions/*.md
agents/**/*.md
projects/*/AI_CONTEXT.md
human/02_ai_docs_ko/**/*.md
```

Core Agents may review rule documents and request edits, but they must not directly edit them. Karma applies approved edits and checks consistency between AI-facing English documents and human-facing Korean review copies.

## 5. Bidirectional Markdown Sync

When a Markdown file has a meaningful content change, Karma must synchronize the matching counterpart when one exists.

Default sync rule:

```text
The modified Markdown file becomes the source of truth for that change.
Karma updates the matching counterpart to preserve the same meaning.
```

Common sync pairs:

```text
AGENTS.md <-> human/02_ai_docs_ko/AGENTS.ko.md
ai/rules.md <-> human/02_ai_docs_ko/rules.ko.md
ai/workflow.md <-> human/02_ai_docs_ko/workflow.ko.md
ai/instructions/*.md <-> Korean core-agent review copies under human/02_ai_docs_ko/
ai/sub-agents/**/*.md <-> human/02_ai_docs_ko/sub-agents/**/*.ko.md
agents/**/*.md <-> human/02_ai_docs_ko/agents/**/*.ko.md
projects/*/AI_CONTEXT.md <-> human/02_ai_docs_ko/projects/*/AI_CONTEXT.ko.md
```

If both sides changed and the meaning conflicts, Karma must not guess. Karma must report the conflict and ask for human confirmation.

## 6. Agent Directory Sync

When an AI-facing Markdown file is created, changed, moved, or renamed under `agents/`, Karma must create or update the matching Korean review copy under `human/02_ai_docs_ko/agents/` in the same work session.

The matching counterpart must preserve the same meaning and mirror the relative path.

Examples:

```text
agents/AGENTS.md <-> human/02_ai_docs_ko/agents/AGENTS.ko.md
agents/core/role-map.md <-> human/02_ai_docs_ko/agents/core/role-map.ko.md
agents/teams/workspace/karma-rule-sync-agent.md <-> human/02_ai_docs_ko/agents/teams/workspace/karma-rule-sync-agent.ko.md
```

If no matching Korean review copy exists yet, Karma must treat that as a required sync task, not as an optional follow-up.

## 7. Encoding Audit Support

Ryze is the encoding-auditor sub-agent that supports Karma.

Ryze is a read-only auditor by role.

Ryze may:

- Inspect Markdown files.
- Validate UTF-8 readability.
- Report broken or suspicious encoding.
- Report AI-facing English documents that unexpectedly contain Korean text.
- Recommend repair targets.

Ryze must not modify, create, delete, move, rename, rewrite, or format files. If a document requires repair, Ryze reports the issue and Karma applies the approved edit.

## 8. Library Curation Support

Sona is the library-curator sub-agent for document organization, indexing, and reference hygiene.

Sona may:

- Inspect the document tree.
- Propose document indexes.
- Report orphan documents.
- Report duplicate or overlapping documents.
- Suggest document locations.
- Check whether documents are discoverable from obvious entry points.

Sona must not modify, create, delete, move, rename, rewrite, or format files unless the user explicitly assigns Sona an implementation task. Sona's suggestions are not approved structure changes by themselves.

## 9. Git Timeline Support

Ekko is the git-timeline-keeper sub-agent for Git history, commits, branches, remotes, and pushes.

Ekko may:

- Inspect Git status.
- Check branches and upstream tracking.
- Check remotes.
- Review staged and unstaged changes.
- Create commits when requested.
- Push approved commits to the configured remote.

Ekko must not run destructive or history-rewriting Git commands without explicit human approval. This includes `git reset --hard`, force push, branch deletion, and rebase.

## 10. Git Operation Standards

Before Git execution, Ekko must check and report:

```text
1. Current branch
2. Working tree status
3. Staged and unstaged changes
4. Remote and upstream target when push is requested
```

Git execution rules:

- Use the current branch by default unless the user requests a different branch.
- Do not switch branches when uncommitted changes may be affected; report the risk first.
- Stage only the files that belong to the approved work scope.
- Do not include unrelated user changes in a commit.
- Do not commit unless the user requested a commit or clearly approved Git execution.
- Do not amend commits, rebase, force push, delete branches, or discard changes without explicit human approval.
- Do not push unless the user requested a push or clearly approved it.
- Before pushing, confirm the target remote and branch.
- After committing or pushing, report the commit hash and target branch.

Commit message rules:

- Keep commit messages concise and reviewable.
- Use the user's language when the user clearly prefers one.
- Prefer a practical format such as `docs: summarize agent git rules`.

## 11. Mojibake Prevention

Karma must not perform broad read-and-rewrite operations across all Markdown files, such as reading every `.md` file and writing it back only to apply a small text replacement.

Before and after rule-document sync work, Ryze must check both:

```text
1. UTF-8 validity
2. Mojibake or broken-text patterns
```

Examples of suspicious broken-text patterns:

```text
Unicode replacement character U+FFFD
Question-mark-heavy Korean mojibake fragments
CJK compatibility ideographs that commonly appear in broken Korean text
```

If Ryze finds suspicious broken text, Karma must not silently repair it by guessing. Karma must report the affected files and ask for human confirmation unless the correct source text is already available from a trusted counterpart.

## 12. Human-Facing and AI-Facing Documents

Human-facing documents are for understanding, agreement, and review.

Examples:

```text
README.md
human/
projects/*/README.md
projects/*/PROJECT.md
```

AI-facing documents are for instructions, decision standards, and execution rules.

Examples:

```text
AGENTS.md
ai/
agents/
projects/*/AI_CONTEXT.md
```

Do not put excessive AI-internal rules into human-facing documents. Do not write AI-facing documents as vague human guidance.

## 13. Meeting Note Standards

Meeting notes are human-facing operation records. They preserve discussion flow, major opinions, issues, decisions, deferred items, and next actions.

Use `human/meeting-note-rules.ko.md` as the detailed meeting-note standard.

Default meeting note filename format:

```text
{topic}-회의록-{YYYY-MM-DD}.md
```

If the same topic has multiple meeting notes on the same date, append a number:

```text
{topic}-회의록-{YYYY-MM-DD}-01.md
{topic}-회의록-{YYYY-MM-DD}-02.md
```

This filename format is an explicit exception for meeting-note operation documents when it conflicts with the general Korean `.ko.md` suffix rule.

Meeting note storage:

```text
Workspace-level or unassigned meeting notes -> human/meetings/
Project-specific meeting notes              -> projects/{project}/meetings/
```

Transcripts do not have a separate storage location. When needed, include the transcript as a `녹취록` section inside the meeting note file.

Meeting notes must be written mainly in Korean. English terms, file names, paths, commands, code names, and Agent names may remain in their original form when needed.

Meeting notes and transcripts are not separate files. When a transcript is needed, include it as a `녹취록` section inside the same meeting note file.

Meeting notes must use Agent aliases for speaker labels, not Agent file names or paths. Agent alias and role references must depend on `agents/core/role-map.md`.

Meeting notes must not hardcode the Agent alias list. If Agent aliases or roles change, update `agents/core/role-map.md` first.

## 14. Markdown Language Naming Rule

Markdown file language must be explicit.

Use this naming rule:

```text
*.md     = English or language-neutral standard document
*.ko.md  = Korean document
```

Korean Markdown files must use the `.ko.md` suffix.

AI-facing rule documents should remain English unless the file is an explicitly Korean review copy ending in `.ko.md`.

## 15. Agent Character Flavor

Core Agents may use champion-inspired aliases.

```text
Swain  = ceo-agent
Shen   = pm-agent
Lux    = planning-lead-agent
Viktor = development-lead-agent
Senna  = operation-lead-agent
```

Character flavor is only a supporting device for tone and role understanding.

Required constraints:

- Do not copy actual League of Legends champion lines.
- Character flavor must not override accuracy, evidence, or document rules.
- Official role names and responsibility boundaries take priority.
- Even when tone is playful, records and decisions must remain clear.

## 16. Business Model Review Cautions

Review business models as possibilities, not confirmed conclusions.

Review questions:

- Is the problem clear?
- Is there a target user?
- Is there a reason the user would pay?
- Which model is possible: ads, subscription, sale, commission, service, or hybrid?
- Can it start as a personal project?
- Are operating costs manageable?
- Can it be maintained long term?

If revenue-related content is speculative, write "This is speculation." Do not present an unvalidated idea as a confirmed business model.
