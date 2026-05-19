# AI Rules 한국어 검토본

이 문서는 `ai/rules.md`의 사람용 한국어 검토본입니다. AI가 실제 작업 기준으로 삼는 원문은 `ai/rules.md`입니다.

## 1. 문서 우선순위

문서가 충돌하면 더 높은 우선순위 문서를 따르고 충돌 내용을 명시합니다. 확실하지 않은 내용은 확실하지 않다고 표시합니다.

## 2. 룰 문서 소유권

룰 관련 Markdown 문서는 Karma만 수정할 수 있습니다.

```text
AGENTS.md
ai/rules.md
ai/workflow.md
ai/instructions/*.md
projects/*/AI_CONTEXT.md
human/02_ai_docs_ko/**/*.md
```

## 3. Markdown 양방향 싱크

Markdown 파일에 의미 있는 내용 변경이 있으면, 대응되는 사본이 있는 경우 Karma가 반대쪽 문서를 동기화합니다.

대표 싱크 쌍:

```text
AGENTS.md <-> human/02_ai_docs_ko/AGENTS.ko.md
ai/rules.md <-> human/02_ai_docs_ko/rules.ko.md
ai/workflow.md <-> human/02_ai_docs_ko/workflow.ko.md
ai/instructions/*.md <-> human/02_ai_docs_ko/팀원/*.ko.md
ai/sub-agents/**/*.md <-> human/02_ai_docs_ko/sub-agents/**/*.ko.md
projects/*/AI_CONTEXT.md <-> human/02_ai_docs_ko/projects/*/AI_CONTEXT.ko.md
```

양쪽이 모두 수정되었고 의미가 충돌하면 Karma는 추측하지 않고 사람에게 확인을 요청합니다.

## 4. Ryze 인코딩 검토

Ryze는 Karma를 보조하는 read-only encoding-auditor입니다. UTF-8 검증, 깨진 인코딩 보고, AI-facing 영어 문서의 예상치 못한 한국어 포함 여부 확인을 담당합니다. Ryze는 파일을 수정, 생성, 삭제, 이동, 이름 변경, 재작성, 포맷하지 않습니다.

## 5. Sona 문서 도서관 관리

Sona는 문서 조직, 색인, 참조 관계 관리를 돕는 library-curator입니다.

Sona는 문서 트리 확인, 문서 색인 제안, 고아 문서 보고, 중복 또는 겹치는 문서 보고, 문서 위치 제안을 할 수 있습니다.

Sona는 사용자가 명시적으로 실행 작업을 배정하지 않는 한 파일을 수정, 생성, 삭제, 이동, 이름 변경, 재작성, 포맷하지 않습니다. Sona의 제안은 그 자체로 승인된 구조 변경이 아닙니다.

## 6. Git 이력 관리 보조

Ekko는 Git 이력, 커밋, 브랜치, 원격 저장소, 푸시를 관리하는 git-timeline-keeper입니다.

Ekko는 Git 상태 확인, 브랜치와 upstream 확인, 원격 저장소 확인, staged / unstaged 변경 확인, 요청된 커밋 생성, 승인된 커밋 푸시를 수행할 수 있습니다.

Ekko는 사람의 명시 승인 없이 파괴적이거나 이력을 다시 쓰는 Git 명령을 실행하지 않습니다. 여기에는 `git reset --hard`, force push, 브랜치 삭제, rebase가 포함됩니다.

## 7. 깨진 한글 재발 방지

Karma는 작은 문구 치환을 위해 모든 `.md` 파일을 읽고 다시 저장하는 방식의 광범위한 일괄 재저장을 하지 않습니다.

룰 문서 동기화 전후로 Ryze는 UTF-8 유효성과 깨진 한글 또는 mojibake 패턴을 모두 검사합니다.

## 8. Markdown 언어별 파일명 규칙

Markdown 파일의 언어는 파일명에서 명확히 드러나야 합니다.

파일명 규칙:

```text
*.md     = 영어 또는 언어 중립 표준 문서
*.ko.md  = 한국어 문서
```

한국어 Markdown 파일은 반드시 `.ko.md` suffix를 사용합니다.

AI-facing 룰 문서는 `.ko.md`로 끝나는 한국어 검토본이 아닌 이상 영어로 유지합니다.

## 9. BM 검토 주의사항

BM은 확정하지 않고 가능성 중심으로 검토합니다. 수익 관련 내용이 추측이면 “추측입니다”라고 표시합니다.
## 추가 규칙: agents 디렉터리 동기화

`agents/**/*.md`는 rule-related Markdown 문서에 포함됩니다.

`agents/` 아래의 AI-facing Markdown 파일을 생성, 수정, 이동, 이름 변경할 때 Karma는 같은 작업 세션 안에서 `human/02_ai_docs_ko/agents/` 아래의 Korean review copy를 생성하거나 갱신해야 합니다.

상대 문서는 같은 의미를 유지해야 하며 상대 경로를 mirror해야 합니다.

일반 sync pair:

```text
agents/**/*.md <-> human/02_ai_docs_ko/agents/**/*.ko.md
```

예시:

```text
agents/AGENTS.md <-> human/02_ai_docs_ko/agents/AGENTS.ko.md
agents/core/role-map.md <-> human/02_ai_docs_ko/agents/core/role-map.ko.md
agents/teams/workspace/karma-rule-sync-agent.md <-> human/02_ai_docs_ko/agents/teams/workspace/karma-rule-sync-agent.ko.md
```

matching Korean review copy가 아직 없다면 Karma는 이를 optional follow-up이 아니라 required sync task로 처리해야 합니다.
## 추가 규칙: Git 운영 기준

Git 실행 전 Ekko는 다음을 확인하고 보고해야 합니다.

```text
1. 현재 브랜치
2. 작업 트리 상태
3. staged / unstaged 변경
4. push 요청 시 remote와 upstream 대상
```

Git 실행 규칙:

- 사용자가 다른 브랜치를 요청하지 않으면 현재 브랜치를 기본으로 사용합니다.
- 커밋되지 않은 변경에 영향을 줄 수 있을 때는 브랜치를 전환하지 않고 먼저 위험을 보고합니다.
- 승인된 작업 범위에 속한 파일만 stage합니다.
- 관련 없는 사용자 변경을 커밋에 포함하지 않습니다.
- 사용자가 커밋을 요청했거나 Git 실행을 명확히 승인한 경우에만 커밋합니다.
- 명시적인 사람의 승인 없이 amend, rebase, force push, branch deletion, change discard를 하지 않습니다.
- 사용자가 push를 요청했거나 명확히 승인한 경우에만 push합니다.
- push 전 대상 remote와 branch를 확인합니다.
- commit 또는 push 후 commit hash와 대상 branch를 보고합니다.

Commit message 규칙:

- commit message는 간결하고 review 가능하게 작성합니다.
- 사용자가 선호하는 언어가 분명하면 그 언어를 사용합니다.
- `docs: summarize agent git rules` 같은 실용적인 형식을 우선합니다.
## 추가 규칙: 회의록 작성 기준

회의록은 사람이 보는 운영 기록 문서입니다. 회의나 논의의 대화 흐름, 주요 의견, 쟁점, 결정사항, 보류사항, 다음 작업을 남깁니다.

상세 기준 문서는 `human/meeting-note-rules.ko.md`입니다.

회의록 파일명은 다음 형식을 따릅니다.

```text
{주제명}-회의록-{YYYY-MM-DD}.md
```

같은 주제로 같은 날 여러 회의록이 생기면 뒤에 번호를 붙입니다.

```text
{주제명}-회의록-{YYYY-MM-DD}-01.md
{주제명}-회의록-{YYYY-MM-DD}-02.md
```

이 파일명 규칙은 회의록 운영 문서에 대한 명시적 예외입니다. 일반 한국어 문서의 `.ko.md` suffix 규칙과 충돌할 때 회의록 파일에는 이 회의록 파일명 규칙을 우선 적용합니다.

회의록 저장 위치:

```text
전체 운영 또는 프로젝트 미지정 회의록 -> human/meetings/
특정 프로젝트 회의록              -> projects/{project}/meetings/
```

녹취록은 별도 저장 위치를 갖지 않습니다. 필요한 경우 해당 회의록 파일 내부의 `녹취록` 섹션에 포함합니다.

회의록은 한글 위주로 작성하되, 영문 용어, 파일명, 경로, 명령어, 코드명, Agent 이름은 필요한 경우 원문을 유지할 수 있습니다.

회의록과 녹취록은 별도 파일로 분리하지 않습니다. 녹취록이 필요한 경우 같은 회의록 파일 안에 `녹취록` 섹션으로 포함합니다.

회의록에서 Agent 발언자는 파일명이나 경로가 아니라 별칭으로 표기합니다. Agent 별칭과 역할 기준은 `agents/core/role-map.md`를 따릅니다.

회의록 문서 안에는 Agent 별칭 목록을 하드코딩하지 않습니다. Agent 별칭이나 역할이 변경되면 `agents/core/role-map.md`를 먼저 갱신합니다.
