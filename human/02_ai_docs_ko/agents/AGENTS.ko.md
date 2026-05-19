# Agents 디렉터리

## 목적

이 디렉터리는 After Office Studio의 조직도형 Agent 구조를 정의합니다.

저장소 최상위 `AGENTS.md`는 여전히 가장 높은 우선순위의 Agent 규칙 문서입니다. 이 문서는 `agents/` 아래에서 Agent 역할 카드가 어떻게 배치되는지만 설명합니다.

## 구조

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

## 팀 모델

Core Agents는 회사 수준의 방향성과 작업 조율을 담당합니다.

Team Agents는 기획, 엔지니어링, 워크스페이스 운영, 문서, 라이브러리, 인코딩, Git 타임라인 책임을 담당합니다.

Champion 이름은 각 Agent를 식별하기 위한 alias입니다. 공식 역할명과 책임 경계가 캐릭터 분위기보다 우선합니다.

## 호환성 메모

최상위 규칙이 별도로 갱신되기 전까지 기존 `ai/instructions/`와 `ai/sub-agents/` 문서는 현재의 legacy 역할 카드 위치입니다.

명시적인 사람의 승인 없이 legacy Agent 문서를 삭제하거나 이동하지 않습니다.

## Korean Review Copy 동기화

`agents/` 아래의 모든 AI-facing Markdown 파일은 `human/02_ai_docs_ko/agents/` 아래에 matching Korean review copy를 가져야 합니다.

matching Korean file은 상대 경로를 mirror하고 `.ko.md` suffix를 사용해야 합니다.

예시:

```text
agents/core/role-map.md
human/02_ai_docs_ko/agents/core/role-map.ko.md
```

`agents/**/*.md` 파일을 생성, 수정, 이동, 이름 변경할 때 Karma는 같은 작업 세션 안에서 matching Korean review copy를 갱신해야 합니다.
