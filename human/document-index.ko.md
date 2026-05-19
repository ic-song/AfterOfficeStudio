# 문서 인덱스

## 목적

이 문서는 사람이 After Office Studio의 문서 위치와 용도를 빠르게 확인하기 위한 한국어 인덱스입니다.

AI가 작업 기준으로 보는 영어 인덱스는 `ai/document-index.md`입니다.

## 주요 진입 문서

| 문서 | 용도 | 대상 |
| --- | --- | --- |
| `README.md` | 저장소 목적과 기본 구조 소개 | AI / 공통 |
| `README.ko.md` | 저장소 목적과 기본 구조 한국어 소개 | 사람 |
| `AGENTS.md` | AI 작업 최상위 규칙 | AI |
| `ai/rules.md` | AI 공통 작업 규칙 | AI |
| `ai/workflow.md` | 아이디어에서 프로젝트까지의 작업 흐름 | AI |
| `ai/document-index.md` | AI용 영어 문서 인덱스 | AI |
| `human/document-index.ko.md` | 사람용 한국어 문서 인덱스 | 사람 |
| `human/team-members.ko.md` | 사람용 팀원 구성원 명부 | 사람 |

## 사람용 문서

| 문서 | 용도 |
| --- | --- |
| `README.ko.md` | 저장소 소개 한국어본 |
| `human/01_회사소개/company-overview.ko.md` | After Office Studio 회사소개 |
| `human/team-members.ko.md` | Core Agent와 Sub-Agent를 팀원 구성원 명부 형태로 정리 |
| `human/02_ai_docs_ko/AGENTS.ko.md` | `AGENTS.md` 한국어 검토본 |
| `human/02_ai_docs_ko/rules.ko.md` | `ai/rules.md` 한국어 검토본 |
| `human/02_ai_docs_ko/workflow.ko.md` | `ai/workflow.md` 한국어 검토본 |
| `human/02_ai_docs_ko/팀원/*.ko.md` | Core Agent 팀원 역할 문서 한국어 검토본 |
| `human/02_ai_docs_ko/sub-agents/**/*.ko.md` | Sub-Agent 팀원 역할 문서 한국어 검토본 |
| `human/02_ai_docs_ko/projects/project-template/AI_CONTEXT.ko.md` | 프로젝트 템플릿 AI_CONTEXT 한국어 검토본 |

## AI용 문서

| 문서 | 용도 |
| --- | --- |
| `AGENTS.md` | AI 작업 최상위 규칙 |
| `ai/rules.md` | AI 공통 작업 규칙 |
| `ai/workflow.md` | 기본 작업 흐름 |
| `ai/document-index.md` | AI용 문서 인덱스 |
| `ai/instructions/swain.md` | Swain / ceo-agent 역할 문서 |
| `ai/instructions/shen.md` | Shen / pm-agent 역할 문서 |
| `ai/instructions/lux.md` | Lux / planning-lead-agent 역할 문서 |
| `ai/instructions/viktor.md` | Viktor / development-lead-agent 역할 문서 |
| `ai/instructions/senna.md` | Senna / operation-lead-agent 역할 문서 |

## Operation Sub-Agent 문서

| 문서 | 역할 |
| --- | --- |
| `ai/sub-agents/operation/karma.sync-coordinator.md` | 룰 문서 수정, 복구, 동기화 담당 |
| `ai/sub-agents/operation/ryze.encoding-auditor.md` | read-only 인코딩 및 깨진 한글 검사 담당 |
| `ai/sub-agents/operation/sona.library-curator.md` | 문서 색인, 분류, 참조 관계 제안 담당 |

## 프로젝트 템플릿

| 문서 | 용도 |
| --- | --- |
| `projects/project-template/README.md` | 프로젝트 소개 템플릿 영어 원문 |
| `projects/project-template/README.ko.md` | 프로젝트 소개 템플릿 한국어본 |
| `projects/project-template/PROJECT.md` | 프로젝트 개요 템플릿 영어 원문 |
| `projects/project-template/PROJECT.ko.md` | 프로젝트 개요 템플릿 한국어본 |
| `projects/project-template/TASKS.md` | 작업 목록 템플릿 영어 원문 |
| `projects/project-template/TASKS.ko.md` | 작업 목록 템플릿 한국어본 |
| `projects/project-template/DECISIONS.md` | 결정사항 기록 템플릿 영어 원문 |
| `projects/project-template/DECISIONS.ko.md` | 결정사항 기록 템플릿 한국어본 |
| `projects/project-template/AI_CONTEXT.md` | AI용 프로젝트 맥락 템플릿 |

## 관리 기준

- Sona는 문서 인덱스 수정 제안, 고아 문서 보고, 중복 문서 보고를 담당합니다.
- Karma는 승인된 복구, 동기화, 룰 관련 문서 수정을 담당합니다.
- Ryze는 UTF-8과 깨진 한글 여부를 검사하고 보고합니다.
- 이 인덱스는 파일 이동이나 구조 변경 승인 문서가 아닙니다.
