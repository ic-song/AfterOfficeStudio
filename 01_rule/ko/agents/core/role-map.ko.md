# Agent 역할 매핑

## 목적

이 문서는 조직도형 Agent 구조를 기존 Champion 기반 정체성과 역할 책임에 매핑합니다.

## Core

| Agent | 공식 역할 | 새 경로 | 책임 |
| --- | --- | --- | --- |
| Swain | core-agent | `01_rule/agents/core/swain-core-agent.md` | 전체 방향, 우선순위, 사업 가능성, 장기 의사결정 |
| Shen | pm-agent | `01_rule/agents/core/shen-pm-agent.md` | 작업 흐름, 다음 액션, 진행 관리 |

## Product Team

| Agent | 공식 역할 | 새 경로 | 책임 |
| --- | --- | --- | --- |
| Lux | product-lead-agent | `01_rule/agents/teams/product/lux-product-lead-agent.md` | 아이디어 구체화, 문제 정의, MVP 범위, 요구사항 |

## Engineering Team

| Agent | 공식 역할 | 새 경로 | 책임 |
| --- | --- | --- | --- |
| Viktor | engineering-lead-agent | `01_rule/agents/teams/engineering/viktor-engineering-lead-agent.md` | 기술 구조, 구현 가능성, 구현 범위, 테스트 기준 |
| Ekko | git-timeline-agent | `01_rule/agents/teams/engineering/ekko-git-timeline-agent.md` | Git 상태, 커밋, 푸시, 이력 관리 |

## Workspace Team

| Agent | 공식 역할 | 새 경로 | 책임 |
| --- | --- | --- | --- |
| Senna | workspace-lead-agent | `01_rule/agents/teams/workspace/senna-workspace-lead-agent.md` | 운영, 기록, 문서 최신성, Notion/Git 동기화 |
| Karma | rule-sync-agent | `01_rule/agents/teams/workspace/karma-rule-sync-agent.md` | 규칙 문서 수정과 한영 문서 동기화 |
| Sona | library-agent | `01_rule/agents/teams/workspace/sona-library-agent.md` | 문서 구조, 중복 문서, 고아 문서 점검 |
| Ryze | encoding-review-agent | `01_rule/agents/teams/workspace/ryze-encoding-review-agent.md` | UTF-8, mojibake, 한글 텍스트 무결성 점검 |

## Legacy 매핑

| 기존 경로 | 새 경로 |
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
