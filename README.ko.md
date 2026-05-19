# After Office Studio

After Office Studio는 여러 아이디어와 프로젝트를 구상, 기획, 설계하고 실행 가능한 형태로 발전시키기 위한 개인 작업공간입니다.

현재는 1인 작업공간으로 시작하지만, 추후 함께 일하는 사람이 늘어날 수 있음을 전제로 문서와 역할 구조를 관리합니다. 이 저장소는 하나의 앱이나 서비스가 아니라, 여러 프로젝트를 검토하고 성장시키는 초기 스타트업형 AI 협업 스튜디오입니다.

영어 원문: `README.md`

## 프로젝트 목적

- 흩어진 아이디어를 프로젝트 후보로 정리합니다.
- 프로젝트의 목적, 사용자, 문제, MVP 범위를 문서화합니다.
- Notion은 기획과 운영 기록의 중심으로 사용합니다.
- Git은 실행 가능한 기준, 규칙, 템플릿, 문서 산출물의 중심으로 사용합니다.
- AI agents는 기획, 개발 검토, 운영 기록을 보조합니다.

## 기본 폴더 구조

```text
after-office-studio/
|-- README.md
|-- README.ko.md
|-- AGENTS.md
|-- human/
|-- ai/
`-- projects/
```

- `README.md`: 영어 저장소 소개
- `README.ko.md`: 한국어 저장소 소개
- `AGENTS.md`: AI가 작업할 때 따르는 최상위 규칙
- `human/`: 사람이 읽는 설명 문서
- `ai/`: AI가 실제 작업할 때 보는 기준 문서
- `projects/`: 실제 프로젝트와 프로젝트 템플릿

## 문서 인덱스

- AI용 인덱스: `ai/document-index.md`
- 사람용 한국어 인덱스: `human/document-index.ko.md`

## Agent Core Team

| Alias | Official Role | Main Responsibility |
| --- | --- | --- |
| Swain | ceo-agent | 전체 방향, 우선순위, BM 가능성 검토 |
| Shen | pm-agent | 작업 흐름, 역할 배분, 진행 상태 관리 |
| Lux | planning-lead-agent | 아이디어 구체화, 문제 정의, 요구사항 정리 |
| Viktor | development-lead-agent | 기술 가능성, 구조, 리스크, 테스트 기준 검토 |
| Senna | operation-lead-agent | 상태 관리, 결정 기록, 문서 최신화 확인 |

챔피언명은 별칭일 뿐이며, 실제 책임은 공식 역할명을 기준으로 판단합니다.

## 현재 초기 운영 기준

현재 저장소는 초기 구조를 만드는 단계입니다.

우선순위는 다음과 같습니다.

1. README와 AGENTS 기준 정리
2. 사람용 문서와 AI용 문서 분리
3. Core Agent 역할 문서 작성
4. 프로젝트 템플릿 작성
5. 실제 프로젝트 후보 등록
