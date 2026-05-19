# 팀원 구성원 명부

## 목적

이 문서는 After Office Studio의 모든 AI 구성원을 사람이 이해하기 쉬운 팀원 명부 형태로 정리합니다.

챔피언명은 구성원을 구분하기 위한 별칭이며, 실제 책임은 공식 역할명을 기준으로 판단합니다.

## 전체 구성

```text
Core Team
├─ Swain  / ceo-agent
├─ Shen   / pm-agent
├─ Lux    / planning-lead-agent
├─ Viktor / development-lead-agent
└─ Senna  / operation-lead-agent

Operation Support Team
├─ Karma / documentation-sync-coordinator
├─ Ryze  / encoding-auditor
└─ Sona  / library-curator
```

## Core Team

| 이름 | 공식 역할 | 구분 | 주요 책임 |
| --- | --- | --- | --- |
| Swain | ceo-agent | Core Agent | 전체 방향, 우선순위, BM 가능성 검토 |
| Shen | pm-agent | Core Agent | 작업 흐름, 역할 배분, 진행 상태 관리 |
| Lux | planning-lead-agent | Core Agent | 아이디어 구체화, 문제 정의, 요구사항 정리 |
| Viktor | development-lead-agent | Core Agent | 기술 가능성, 구조, 리스크, 테스트 기준 검토 |
| Senna | operation-lead-agent | Core Agent | 상태 관리, 결정 기록, 문서 최신화 확인 |

## Operation Support Team

| 이름 | 공식 역할 | 구분 | 주요 책임 | 권한 제한 |
| --- | --- | --- | --- | --- |
| Karma | documentation-sync-coordinator | Sub-Agent | 룰 문서 수정, 복구, 동기화 실행 | 승인된 룰/문서 작업만 수행 |
| Ryze | encoding-auditor | Sub-Agent | UTF-8, 깨진 한글, mojibake 검사 및 보고 | read-only, 파일 수정 금지 |
| Sona | library-curator | Sub-Agent | 문서 색인, 분류, 위치 제안, 참조 관계 점검 | 제안 중심, 구조 변경 승인 아님 |

## 문서 위치

### Core Agent 문서

| 이름 | AI용 원문 | 한국어 검토본 |
| --- | --- | --- |
| Swain | `ai/instructions/swain.md` | `human/02_ai_docs_ko/팀원/swain.ko.md` |
| Shen | `ai/instructions/shen.md` | `human/02_ai_docs_ko/팀원/shen.ko.md` |
| Lux | `ai/instructions/lux.md` | `human/02_ai_docs_ko/팀원/lux.ko.md` |
| Viktor | `ai/instructions/viktor.md` | `human/02_ai_docs_ko/팀원/viktor.ko.md` |
| Senna | `ai/instructions/senna.md` | `human/02_ai_docs_ko/팀원/senna.ko.md` |

### Sub-Agent 문서

| 이름 | AI용 원문 | 한국어 검토본 |
| --- | --- | --- |
| Karma | `ai/sub-agents/operation/karma.sync-coordinator.md` | `human/02_ai_docs_ko/sub-agents/operation/karma.sync-coordinator.ko.md` |
| Ryze | `ai/sub-agents/operation/ryze.encoding-auditor.md` | `human/02_ai_docs_ko/sub-agents/operation/ryze.encoding-auditor.ko.md` |
| Sona | `ai/sub-agents/operation/sona.library-curator.md` | `human/02_ai_docs_ko/sub-agents/operation/sona.library-curator.ko.md` |

## 운영 기준

- Core Agent는 큰 방향과 최종 판단을 담당합니다.
- Sub-Agent는 특정 작업을 보조하는 전문 역할입니다.
- Sub-Agent는 독립적으로 최종 결정을 내리지 않습니다.
- 룰 문서 수정과 동기화는 Karma가 담당합니다.
- 인코딩 검사는 Ryze가 담당하되, Ryze는 파일을 수정하지 않습니다.
- 문서 색인과 분류 제안은 Sona가 담당합니다.
