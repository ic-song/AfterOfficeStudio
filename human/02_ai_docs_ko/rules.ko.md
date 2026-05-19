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

## 6. 깨진 한글 재발 방지

Karma는 작은 문구 치환을 위해 모든 `.md` 파일을 읽고 다시 저장하는 방식의 광범위한 일괄 재저장을 하지 않습니다.

룰 문서 동기화 전후로 Ryze는 UTF-8 유효성과 깨진 한글 또는 mojibake 패턴을 모두 검사합니다.

## 7. Markdown 언어별 파일명 규칙

Markdown 파일의 언어는 파일명에서 명확히 드러나야 합니다.

파일명 규칙:

```text
*.md     = 영어 또는 언어 중립 표준 문서
*.ko.md  = 한국어 문서
```

한국어 Markdown 파일은 반드시 `.ko.md` suffix를 사용합니다.

AI-facing 룰 문서는 `.ko.md`로 끝나는 한국어 검토본이 아닌 이상 영어로 유지합니다.

## 8. BM 검토 주의사항

BM은 확정하지 않고 가능성 중심으로 검토합니다. 수익 관련 내용이 추측이면 “추측입니다”라고 표시합니다.
