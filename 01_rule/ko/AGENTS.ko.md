# AGENTS.md 한국어 검토본

이 문서는 루트 `AGENTS.md`의 사람용 한국어 검토본입니다. AI가 실제 작업 기준으로 삼는 원문은 루트 `AGENTS.md`입니다.

## 1. 문서 목적

After Office Studio에서 AI agents가 작업할 때 따르는 최상위 규칙을 정의합니다. AI agents는 사람의 판단을 대체하지 않고, 사람이 정한 방향과 기준에 따라 기획, 개발 검토, 운영, 기록 작업을 보조합니다.

## 2. 기본 관점

After Office Studio는 하나의 회사처럼 운영합니다.

```text
Swain  = core-agent
Shen   = pm-agent
Lux    = product-lead-agent
Viktor = engineering-lead-agent
Senna  = workspace-lead-agent
Karma  = rule-sync-agent
Sona   = library-agent
Ryze   = encoding-review-agent
Ekko   = git-timeline-agent
```

챔피언명은 agent를 구분하기 위한 별칭이며, 실제 책임은 공식 역할명을 기준으로 판단합니다.

## 3. 룰 문서 소유권

룰 관련 Markdown 문서는 Karma만 수정할 수 있습니다.

```text
AGENTS.md
01_rule/ai/rules.md
01_rule/ai/workflow.md
01_rule/ai/token-usage-rules.md
01_rule/ai/instructions/*.md
01_rule/ai/sub-agents/**/*.md
01_rule/agents/**/*.md
50_프로젝트/*/AI_CONTEXT.md
01_rule/ko/**/*.md
```

Core Agent는 룰 문서를 검토하거나 변경을 요청할 수 있지만 직접 수정하지 않습니다.

## 4. Markdown 양방향 싱크

Markdown 파일에 의미 있는 내용 변경이 있으면, 대응되는 사본이 있는 경우 Karma가 반대쪽 문서를 동기화합니다.

```text
수정된 Markdown 파일을 해당 변경의 기준본으로 본다.
Karma는 대응되는 반대쪽 문서가 같은 의미를 유지하도록 업데이트한다.
```

양쪽이 모두 수정되었고 의미가 충돌하면 Karma는 추측하지 않고 사람에게 확인을 요청합니다.

## 5. Ryze 인코딩 검토

Ryze는 Karma를 보조하는 encoding-auditor입니다. Ryze는 역할상 read-only auditor입니다. 파일을 읽고 검사하고 보고할 수 있지만, 파일을 수정, 생성, 삭제, 이동, 이름 변경, 재작성, 포맷하지 않습니다.

Ryze는 모든 문서 변경마다 반드시 호출되는 단계가 아닙니다. Ryze는 인코딩 위험이 있을 때 활성화됩니다.

Ryze 호출 판단 기준:

- Shen은 작업 흐름을 계획할 때 Ryze가 필요한지 판단합니다.
- Karma는 rule-document edit 또는 synchronization 중 Ryze가 필요한지 판단합니다.
- Senna는 한국어 운영 기록의 인코딩이나 가독성 점검이 필요할 때 Ryze를 요청할 수 있습니다.
- Ekko는 문서 변경량이 크거나 인코딩 민감도가 높을 때 commit 또는 push 전에 Ryze를 요청할 수 있습니다.
- 단순 수정은 별도 Ryze 보고 없이 변경 파일 UTF-8 검사만 수행할 수 있습니다.
- 대량 한국어 문서 수정, mojibake 의심, 인코딩 관련 사용자 요청, 문서 복구, high-risk sync 작업은 Ryze를 활성화해야 합니다.

## 6. Sona 문서 도서관 관리

Sona는 문서 조직을 보조하는 library-curator입니다.

Sona는 문서 트리를 확인하고, 문서 색인을 제안하고, 고아 문서나 중복 문서를 보고하고, 문서 위치를 제안할 수 있습니다.

Sona는 사용자가 명시적으로 실행 작업을 배정하지 않는 한 파일을 수정, 생성, 삭제, 이동, 이름 변경, 재작성, 포맷하지 않습니다. Sona의 제안은 그 자체로 승인된 구조 변경이 아닙니다.

## 7. Ekko Git 이력 관리

Ekko는 Git 이력 관리를 보조하는 git-timeline-keeper입니다.

Ekko는 Git 상태, 브랜치, 원격 저장소, staged 변경, 커밋 이력을 확인할 수 있습니다. 사용자가 Git 실행을 요청하면 커밋을 만들고 승인된 커밋을 원격 저장소로 푸시할 수 있습니다.

Ekko는 사람의 명시 승인 없이 파괴적이거나 이력을 다시 쓰는 Git 명령을 실행하지 않습니다. 여기에는 `git reset --hard`, force push, 브랜치 삭제, rebase가 포함됩니다.

## 8. 깨진 한글 재발 방지

Karma는 작은 문구 치환을 위해 모든 `.md` 파일을 읽고 다시 저장하는 방식의 광범위한 일괄 재저장을 하지 않습니다.

위험도가 높은 룰 문서 동기화 전후로 Ryze는 UTF-8 유효성과 깨진 한글 또는 mojibake 패턴을 모두 검사합니다.

Ryze가 깨진 텍스트를 발견하면 Karma는 추측으로 조용히 복구하지 않습니다. 신뢰 가능한 대응 원문이 이미 있는 경우가 아니면 영향을 받은 파일을 보고하고 사람에게 확인을 요청합니다.

## 9. Markdown 언어별 파일명 규칙

Markdown 파일의 언어는 파일명에서 명확히 드러나야 합니다.

파일명 규칙:

```text
*.md     = 영어 또는 언어 중립 표준 문서
*.ko.md  = 한국어 문서
```

한국어 Markdown 파일은 반드시 `.ko.md` suffix를 사용합니다.

루트 `README.md`는 명시적 예외이며, 저장소의 기본 사람용 소개 문서로 한국어로 작성할 수 있습니다.

예시:

```text
README.md
01_rule/ko/document-index.ko.md
01_rule/ko/AGENTS.ko.md
50_프로젝트/project-template/README.md
50_프로젝트/project-template/README.ko.md
```

AI-facing 룰 문서는 `.ko.md`로 끝나는 한국어 검토본이 아닌 이상 영어로 유지합니다.

## 10. 변경/삭제 기준

파일 변경 시 목적 확인, 관련 문서 확인, 최소 범위 변경, 문서 동기화 여부 확인, 변경 요약을 수행합니다. 삭제는 명시 승인 없이는 하지 않습니다.

삭제가 필요해 보이지만 명시적인 삭제 승인이 아직 없는 파일은 삭제하지 않고 `99_아카이브/삭제대기/`로 이동하거나 이동을 제안합니다.

`99_아카이브/삭제대기/` 아래의 파일은 사람의 삭제 승인을 기다리는 보류 문서이며, 활성 운영 문서로 보지 않습니다.

파일을 삭제대기 폴더로 이동하거나 삭제대기 폴더에서 삭제할 때는 Git이 폴더를 계속 추적할 수 있도록 해당 폴더에 `.gitkeep`을 유지합니다.

삭제대기 폴더로 파일을 이동할 때는 `90_기록실/삭제대기/삭제대기-이력.ko.md`에 원래 경로, 삭제대기 경로, 이동일자, 이동 사유를 기록합니다.

`99_아카이브/삭제대기/`에서 파일을 실제로 삭제하면 `90_기록실/삭제대기/삭제대기-이력.ko.md`에 기록합니다.

삭제 기록에는 원래 경로, 삭제대기 경로, 삭제대기 요청 주체, 실제 삭제 일자, 삭제 승인자, 삭제 사유, 대체 문서 또는 백업 상태, 처리 Agent를 남깁니다.

Git push 전 Ekko는 `git status --short`에 표시되는 삭제 파일을 확인합니다.

삭제 파일이 실제 삭제 승인 대상이면, push 전에 `90_기록실/삭제대기/삭제대기-이력.ko.md`에 실제 삭제 일자, 삭제 승인자, 삭제 사유, 처리 Agent, `삭제완료` 상태가 기록되어 있어야 합니다.

삭제 파일이 이력에 없거나 삭제 승인 여부가 불명확하면, Ekko는 push를 중단하고 사람에게 확인을 요청합니다.

## 추가 규칙: agents 디렉터리 동기화

`01_rule/agents/**/*.md`는 rule-related Markdown 문서에 포함됩니다.

`01_rule/agents/` 아래의 AI-facing Markdown 파일을 생성, 수정, 이동, 이름 변경할 때 Karma는 같은 작업 세션 안에서 `01_rule/ko/agents/` 아래의 Korean review copy를 생성하거나 갱신해야 합니다.

상대 문서는 같은 의미를 유지해야 하며 상대 경로를 mirror해야 합니다.

예시:

```text
01_rule/agents/core/role-map.md <-> 01_rule/ko/agents/core/role-map.ko.md
01_rule/agents/teams/workspace/karma-rule-sync-agent.md <-> 01_rule/ko/agents/teams/workspace/karma-rule-sync-agent.ko.md
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
- 룰 관련 문서 변경은 검증 후 커밋과 푸쉬가 사전 승인된 것으로 봅니다. 작업 범위가 룰 관련 문서와 필수 인덱스 또는 이력 문서로 제한된다면 Ekko는 다시 묻지 않고 커밋과 푸쉬를 진행할 수 있습니다.
- push 전 대상 remote와 branch를 확인합니다.
- commit 또는 push 후 commit hash와 대상 branch를 보고합니다.

Commit message 규칙:

- commit message는 간결하고 review 가능하게 작성합니다.
- 사용자가 선호하는 언어가 분명하면 그 언어를 사용합니다.
- `docs: summarize agent git rules` 같은 실용적인 형식을 우선합니다.
## 추가 규칙: 회의록 작성 기준

회의록은 사람이 보는 운영 기록 문서입니다. 회의나 논의의 대화 흐름, 주요 의견, 쟁점, 결정사항, 보류사항, 다음 작업을 남깁니다.

상세 기준 문서는 `01_rule/ko/meeting-note-rules.ko.md`입니다.

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
전체 운영 또는 프로젝트 미지정 회의록 -> 90_기록실/회의록/
특정 프로젝트 회의록              -> 50_프로젝트/{project}/meetings/
```

녹취록은 별도 저장 위치를 갖지 않습니다. 필요한 경우 해당 회의록 파일 내부의 `녹취록` 섹션에 포함합니다.

회의록은 한글 위주로 작성하되, 영문 용어, 파일명, 경로, 명령어, 코드명, Agent 이름은 필요한 경우 원문을 유지할 수 있습니다.

회의록과 녹취록은 별도 파일로 분리하지 않습니다. 녹취록이 필요한 경우 같은 회의록 파일 안에 `녹취록` 섹션으로 포함합니다.

회의록에서 Agent 발언자는 파일명이나 경로가 아니라 별칭으로 표기합니다. Agent 별칭과 역할 기준은 `01_rule/agents/core/role-map.md`를 따릅니다.

회의록 문서 안에는 Agent 별칭 목록을 하드코딩하지 않습니다. Agent 별칭이나 역할이 변경되면 `01_rule/agents/core/role-map.md`를 먼저 갱신합니다.
