# 팀원 구성원 명부

## 목적

이 문서는 After Office Studio의 Agent 구성을 사람이 이해하기 쉬운 명부 형태로 정리합니다.

Agent 별칭, 공식 역할, 담당 영역, 관련 파일 경로의 기준은 `01_rule/agents/core/role-map.md`를 우선합니다.

## 전체 구성

```text
Core
├─ Swain / core-agent
└─ Shen  / pm-agent

Product Team
└─ Lux / product-lead-agent

Engineering Team
├─ Viktor / engineering-lead-agent
└─ Ekko   / git-timeline-agent

Workspace Team
├─ Senna / workspace-lead-agent
├─ Karma / rule-sync-agent
├─ Sona  / library-agent
└─ Ryze  / encoding-review-agent
```

## Agent 명부

| 별칭 | 공식 역할 | 팀 | 주요 책임 |
| --- | --- | --- | --- |
| Swain | core-agent | Core | 전체 방향, 우선순위, 사업 가능성, 장기 의사결정 |
| Shen | pm-agent | Core | 작업 흐름, 다음 액션, 진행 관리 |
| Lux | product-lead-agent | Product | 아이디어 구체화, 문제 정의, MVP, 요구사항 |
| Viktor | engineering-lead-agent | Engineering | 기술 구조, 구현 가능성, 개발 범위, 테스트 기준 |
| Ekko | git-timeline-agent | Engineering | Git 상태, 커밋, 푸시, 이력 관리 |
| Senna | workspace-lead-agent | Workspace | 운영 상태, 결정 기록, 문서 최신성, Notion/Git 동기화 |
| Karma | rule-sync-agent | Workspace | 규칙 문서 수정과 한영 문서 동기화 |
| Sona | library-agent | Workspace | 문서 구조, 중복 문서, 고아 문서 점검 |
| Ryze | encoding-review-agent | Workspace | UTF-8, mojibake, 한글 깨짐 점검 |

## 문서 위치

| 별칭 | 기준 문서 |
| --- | --- |
| Swain | `01_rule/agents/core/swain-core-agent.md` |
| Shen | `01_rule/agents/core/shen-pm-agent.md` |
| Lux | `01_rule/agents/teams/product/lux-product-lead-agent.md` |
| Viktor | `01_rule/agents/teams/engineering/viktor-engineering-lead-agent.md` |
| Ekko | `01_rule/agents/teams/engineering/ekko-git-timeline-agent.md` |
| Senna | `01_rule/agents/teams/workspace/senna-workspace-lead-agent.md` |
| Karma | `01_rule/agents/teams/workspace/karma-rule-sync-agent.md` |
| Sona | `01_rule/agents/teams/workspace/sona-library-agent.md` |
| Ryze | `01_rule/agents/teams/workspace/ryze-encoding-review-agent.md` |

## 운영 기준

- Agent 역할 참조는 `01_rule/agents/core/role-map.md`를 우선합니다.
- 개별 행동 기준은 각 Agent 역할 카드에서 확인합니다.
- 기존 `01_rule/ai/instructions/`와 `01_rule/ai/sub-agents/` 문서는 legacy compatibility 문서로 남아 있을 수 있습니다.
- 역할명이나 담당 영역이 바뀌면 `01_rule/agents/core/role-map.md`를 먼저 갱신합니다.
