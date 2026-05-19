# 문서 인덱스

## 목적

이 문서는 사람이 After Office Studio의 주요 문서 위치와 용도를 빠르게 확인하기 위한 한국어 인덱스입니다.

AI가 작업 기준으로 보는 영어 인덱스는 `01_rule/ai/document-index.md`입니다.

## 주요 진입 문서

| 문서 | 용도 | 대상 |
| --- | --- | --- |
| `README.md` | 저장소 소개 | Human / AI |
| `AGENTS.md` | AI 작업 최상위 규칙 | AI |
| `01_rule/ai/rules.md` | AI 공통 작업 규칙 | AI |
| `01_rule/ai/workflow.md` | 아이디어에서 프로젝트까지의 작업 흐름 | AI |
| `01_rule/ai/token-usage-rules.md` | 토큰 절약과 역할 활성화 기준 | AI |
| `01_rule/ai/document-index.md` | AI용 영어 문서 인덱스 | AI |
| `01_rule/agents/core/role-map.md` | Agent 별칭, 공식 역할, 경로, 책임 매핑 | Human / AI |
| `01_rule/ko/document-index.ko.md` | 사람용 한국어 문서 인덱스 | Human |

## 최상위 폴더

| 폴더 | 용도 |
| --- | --- |
| `01_rule/` | 룰 문서, Agent 역할 카드, 한국어 검토본 |
| `10_아이디어/` | `50_프로젝트/`로 승격되기 전 프로젝트 후보 아이디어 |
| `50_프로젝트/` | 실제 프로젝트와 프로젝트 템플릿 |
| `90_기록실/` | 회의록, 문서 이동 이력, 삭제대기 이력 같은 운영 기록 |
| `99_아카이브/` | 보관 문서 또는 삭제 승인 대기 문서 |
| `human/` | 아직 번호 폴더로 이동하지 않은 사람용 기록 |

## 한글-영어 경로 매핑

AI가 한글 경로를 해석할 때는 아래 영어 별칭을 기준으로 삼습니다.

| 실제 경로 | AI 별칭 | 의미 |
| --- | --- | --- |
| `10_아이디어/` | `10_idea/` | 프로젝트 후보 아이디어 |
| `50_프로젝트/` | `50_project/` | 실제 프로젝트와 프로젝트 템플릿 |
| `90_기록실/` | `90_record/` | 운영 기록 |
| `90_기록실/회의록/` | `90_record/meetings/` | 전체 운영 또는 프로젝트 미지정 회의록 |
| `90_기록실/문서이동/문서이동-이력.ko.md` | `90_record/document-move-history.md` | 문서와 폴더 위치 변경 이력 |
| `90_기록실/삭제대기/삭제대기-이력.ko.md` | `90_record/deletion-pending-history.md` | 삭제대기 이동과 실제 삭제 처리 이력 |
| `99_아카이브/` | `99_archive/` | 아카이브 |
| `99_아카이브/삭제대기/` | `99_archive/deletion-pending/` | 명시적인 삭제 승인을 기다리는 파일 보관 위치 |

## Agent 문서

| 문서 | 용도 |
| --- | --- |
| `01_rule/agents/core/role-map.md` | Agent 역할 매핑 |
| `01_rule/agents/core/*.md` | Core Agent 역할 카드 |
| `01_rule/agents/teams/**/*.md` | Team Agent 역할 카드 |
| `01_rule/ko/agents/**/*.ko.md` | `01_rule/agents/**/*.md`의 한국어 검토본 |

## 한국어 룰 문서와 검토본

| 문서 | 용도 |
| --- | --- |
| `01_rule/ko/AGENTS.ko.md` | `AGENTS.md` 한국어 검토본 |
| `01_rule/ko/rules.ko.md` | `01_rule/ai/rules.md` 한국어 검토본 |
| `01_rule/ko/workflow.ko.md` | `01_rule/ai/workflow.md` 한국어 검토본 |
| `01_rule/ko/token-usage-rules.ko.md` | `01_rule/ai/token-usage-rules.md` 한국어 검토본 |
| `01_rule/ko/meeting-note-rules.ko.md` | 회의록과 회의록 내부 `녹취록` 섹션 작성 기준 |
| `01_rule/ko/team-members.ko.md` | Agent 팀원 명부 |
| `01_rule/ko/팀원/*.ko.md` | Legacy Core Agent 한국어 검토본 |
| `01_rule/ko/sub-agents/**/*.ko.md` | Legacy Sub-Agent 한국어 검토본 |

## 운영 기록

| 문서 | 용도 |
| --- | --- |
| `90_기록실/회의록/` | 전체 운영 또는 프로젝트 미지정 회의록 |
| `90_기록실/회의록/.gitkeep` | 회의록 폴더를 Git에 보존하기 위한 placeholder |
| `90_기록실/문서이동/문서이동-이력.ko.md` | 문서와 폴더 위치 변경 이력 |
| `90_기록실/삭제대기/삭제대기-이력.ko.md` | 삭제대기 이동과 실제 삭제 처리 이력 |

## 아이디어

| 문서 | 용도 |
| --- | --- |
| `10_아이디어/` | 프로젝트 후보 아이디어 보관소 |
| `10_아이디어/.gitkeep` | 빈 폴더를 Git에 보존하기 위한 placeholder |

## 프로젝트 템플릿

| 문서 | 용도 |
| --- | --- |
| `50_프로젝트/project-template/README.md` | 프로젝트 소개 템플릿 영어 원문 |
| `50_프로젝트/project-template/README.ko.md` | 프로젝트 소개 템플릿 한국어본 |
| `50_프로젝트/project-template/PROJECT.md` | 프로젝트 개요 템플릿 영어 원문 |
| `50_프로젝트/project-template/PROJECT.ko.md` | 프로젝트 개요 템플릿 한국어본 |
| `50_프로젝트/project-template/TASKS.md` | 작업 목록 템플릿 영어 원문 |
| `50_프로젝트/project-template/TASKS.ko.md` | 작업 목록 템플릿 한국어본 |
| `50_프로젝트/project-template/DECISIONS.md` | 결정사항 기록 템플릿 영어 원문 |
| `50_프로젝트/project-template/DECISIONS.ko.md` | 결정사항 기록 템플릿 한국어본 |
| `50_프로젝트/project-template/AI_CONTEXT.md` | AI용 프로젝트 맥락 템플릿 |
| `50_프로젝트/project-template/AI_CONTEXT.ko.md` | 프로젝트 템플릿 AI_CONTEXT 한국어 검토본 |
| `50_프로젝트/{project}/meetings/` | 특정 프로젝트 회의록 |

## 아카이브

| 문서 | 용도 |
| --- | --- |
| `99_아카이브/삭제대기/` | 명시적인 삭제 승인을 기다리는 파일 보관 위치 |
| `99_아카이브/삭제대기/.gitkeep` | 삭제대기 폴더를 Git에 보존하기 위한 placeholder |
| `99_아카이브/삭제대기/README.ko.md` | 사용 중단된 루트 한국어 README 삭제대기 문서 |
| `99_아카이브/삭제대기/01_rule-agents-AGENTS.md` | 사용 중단된 Agent 디렉터리 안내 삭제대기 문서 |
| `99_아카이브/삭제대기/01_rule-ko-agents-AGENTS.ko.md` | 사용 중단된 Agent 디렉터리 안내 한국어 검토본 삭제대기 문서 |

## 관리 기준

- Sona는 문서 인덱스 수정 제안, 고아 문서 보고, 중복 문서 보고를 담당합니다.
- Karma는 승인된 복구, 동기화, 룰 관련 문서 수정을 담당합니다.
- Ryze는 모든 문서 변경마다 호출하지 않고, 인코딩 위험이 있을 때 활성화합니다.
- 이 인덱스는 파일 이동이나 구조 변경 승인 문서가 아닙니다.
