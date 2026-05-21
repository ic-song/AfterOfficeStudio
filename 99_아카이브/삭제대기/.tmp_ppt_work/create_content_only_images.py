# -*- coding: utf-8 -*-
from pathlib import Path
from PIL import Image, ImageDraw, ImageFont


OUT = Path(r"c:\Users\user\Desktop\전남소방본부\DOC\30_보고_회의_발표\05_보고서\보완필요도높음_내용이미지")
OUT.mkdir(parents=True, exist_ok=True)

FONT = r"C:\Windows\Fonts\malgun.ttf"
BOLD = r"C:\Windows\Fonts\malgunbd.ttf"

W, H = 1800, 900
NAVY = (23, 72, 112, 255)
BLUE = (62, 125, 183, 255)
LIGHT_BLUE = (226, 239, 250, 255)
PALE = (246, 249, 252, 255)
LINE = (166, 190, 210, 255)
DARK = (45, 45, 45, 255)
MID = (90, 90, 90, 255)
RED = (210, 70, 65, 255)
WHITE = (255, 255, 255, 255)
TRANSPARENT = (255, 255, 255, 0)


def f(size, bold=False):
    return ImageFont.truetype(BOLD if bold else FONT, size)


def text(draw, xy, value, size=32, fill=DARK, bold=False, anchor=None, align="left"):
    draw.text(xy, value, font=f(size, bold), fill=fill, anchor=anchor, align=align)


def rounded(draw, box, fill=WHITE, outline=LINE, radius=18, width=2):
    draw.rounded_rectangle(box, radius=radius, fill=fill, outline=outline, width=width)


def wrap(draw, value, font, max_w):
    lines = []
    for raw in value.split("\n"):
        current = ""
        for ch in raw:
            test = current + ch
            if draw.textbbox((0, 0), test, font=font)[2] <= max_w:
                current = test
            else:
                if current:
                    lines.append(current)
                current = ch
        lines.append(current)
    return lines


def para(draw, x, y, value, size=28, fill=DARK, bold=False, max_w=600, line_gap=8):
    font = f(size, bold)
    for line in wrap(draw, value, font, max_w):
        draw.text((x, y), line, font=font, fill=fill)
        y += size + line_gap
    return y


def header_label(draw, text_value):
    return


def evidence(draw, value):
    rounded(draw, (60, 790, W - 60, 860), fill=WHITE, outline=RED, radius=18, width=2)
    text(draw, (92, 808), "근거", 28, RED, True)
    para(draw, 170, 809, value, 24, DARK, False, W - 260, 4)


def save(img, name):
    img.save(OUT / name)


def arrow(draw, x1, y1, x2, y2):
    draw.line((x1, y1, x2, y2), fill=BLUE, width=4)
    draw.polygon([(x2, y2), (x2 - 18, y2 - 10), (x2 - 18, y2 + 10)], fill=BLUE)


def flow_box(draw, x, y, w, h, title, body):
    rounded(draw, (x, y, x + w, y + h), fill=LIGHT_BLUE, outline=BLUE, radius=16, width=2)
    title_size = 22 if len(title) >= 14 else 25
    text(draw, (x + w / 2, y + 22), title, title_size, NAVY, True, anchor="ma")
    para(draw, x + 14, y + 62, body, 20, DARK, False, w - 28, 3)


def card(draw, x, y, w, h, title, bullets, fill=PALE):
    rounded(draw, (x, y, x + w, y + h), fill=fill, outline=LINE, radius=18, width=2)
    text(draw, (x + 24, y + 22), title, 28, NAVY, True)
    yy = y + 72
    for b in bullets:
        yy = para(draw, x + 28, yy, "· " + b, 23, DARK, False, w - 56, 4) + 2


def img_base(label):
    img = Image.new("RGBA", (W, H), TRANSPARENT)
    d = ImageDraw.Draw(img)
    header_label(d, label)
    return img, d


# 1. Upstage map
img, d = img_base("8페이지 내용 이미지")
steps = [
    ("원본 저장", "Object Storage\n문서 ID"),
    ("Parse/OCR", "본문·표·이미지\n텍스트 추출"),
    ("Chunking", "문단/페이지\n분할"),
    ("Embedding", "chunk_id 기준\n벡터화"),
    ("Search/Vector DB", "색인·벡터\n동시 적재"),
    ("Retriever", "근거 문단\n검색/재순위"),
    ("Solar LLM", "답변·요약\n초안 생성"),
    ("Groundedness", "근거 일치성\n검증"),
]
x0, y0, bw, bh, gap = 64, 90, 190, 125, 28
for i, (t, b) in enumerate(steps):
    x = x0 + i * (bw + gap)
    flow_box(d, x, y0, bw, bh, t, b)
    if i < len(steps) - 1:
        arrow(d, x + bw, y0 + bh // 2, x + bw + gap - 6, y0 + bh // 2)
card(d, 90, 330, 500, 250, "보고 메시지", ["문서 적재는 파일 저장이 아님", "검색/RAG용 지식 데이터 전환 과정"], WHITE)
card(d, 650, 330, 500, 250, "품질 확인 지점", ["OCR·파싱 성공률", "청킹 단위 적정성", "답변 근거 일치성"], WHITE)
card(d, 1210, 330, 500, 250, "관리 단위", ["document_id와 chunk_id 기준", "원본·색인·벡터·출처 연결"], WHITE)
evidence(d, "SFR-005 비정형 문서 구조화/전처리, SFR-017 RAG, SFR-018 AI 지능형 검색")
save(img, "01_8페이지_Upstage기술적용맵_내용.png")

# 2. Upload scenarios
img, d = img_base("11페이지 내용 이미지")
card(d, 90, 95, 500, 520, "관리자 일괄 적재", ["기존 SOP·지침·보고서 묶음 등록", "문서유형·부서·권한 기본값 지정", "처리 결과와 실패 목록 확인", "필요 시 재처리 실행"], LIGHT_BLUE)
card(d, 650, 95, 500, 520, "사용자 개별 업로드", ["업무 담당자가 수시 문서 등록", "업무구분·문서유형 직접 입력", "처리 상태와 검색 반영 여부 확인", "권한 범위 내 원문 열람"], PALE)
card(d, 1210, 95, 500, 520, "시스템 연계 업로드", ["API·ETL·Crawler로 정기 수집", "변경분·최신본·중복 여부 판단", "오류 알림 및 재처리 로그 관리", "연계 주기와 감사 이력 관리"], LIGHT_BLUE)
evidence(d, "SFR-004 문서정보 수집, SFR-005 문서 구조화 및 전처리 자동화")
save(img, "02_11페이지_업로드운영시나리오_내용.png")

# 3. Search/RAG criteria
img, d = img_base("12페이지 내용 이미지")
table_x, table_y, table_w, row_h = 80, 80, 1640, 96
cols = [260, 480, 500, 400]
headers = ["검증 항목", "확인 기준", "판정 기준", "관련 기능"]
rows = [
    ["색인검색", "문서명·제목·메타데이터 검색", "정확 문서가 상위 노출", "Search Index"],
    ["키워드검색", "본문 키워드·동의어 검색", "누락/오탐 최소화", "Full-text Search"],
    ["벡터검색", "의미 유사 문단 검색", "관련 문단 재현성 확인", "Embedding / Vector DB"],
    ["RAG 답변", "답변·출처·원문 문단 표시", "Groundedness 통과 및 권한 필터 적용", "Retriever / Solar LLM"],
]
x = table_x
for i, w in enumerate(cols):
    d.rectangle((x, table_y, x + w, table_y + row_h), fill=NAVY, outline=WHITE, width=2)
    text(d, (x + w / 2, table_y + 34), headers[i], 25, WHITE, True, anchor="ma")
    x += w
for r, row in enumerate(rows):
    y = table_y + row_h * (r + 1)
    x = table_x
    for c, w in enumerate(cols):
        fill = LIGHT_BLUE if c == 0 else WHITE
        d.rectangle((x, y, x + w, y + row_h), fill=fill, outline=LINE, width=2)
        para(d, x + 18, y + 24, row[c], 23 if c == 0 else 21, NAVY if c == 0 else DARK, c == 0, w - 36, 3)
        x += w
card(d, 120, 610, 480, 95, "권한 필터", ["권한 없는 문서는 검색·답변 근거에서 제외"], WHITE)
card(d, 660, 610, 480, 95, "개인정보", ["마스킹 필요 항목은 답변·원문 노출 전 확인"], WHITE)
card(d, 1200, 610, 480, 95, "출처 표시", ["문서명, 페이지, 문단, 최신본 여부 표시"], WHITE)
evidence(d, "SFR-017 RAG 기능, SFR-018 AI 지능형 검색 기능, 공공문서 권한·출처 관리 기준")
save(img, "03_12페이지_검색RAG검증기준_내용.png")

# 4. Upload operation flow
img, d = img_base("14페이지 내용 이미지")
steps = ["업로드", "형식 검증", "메타데이터", "권한 확인", "파싱/청킹", "임베딩/색인", "검증", "완료/재처리"]
x0, y0, bw, bh, gap = 80, 90, 170, 86, 38
for i, t in enumerate(steps):
    x = x0 + i * (bw + gap)
    flow_box(d, x, y0, bw, bh, t, "")
    if i < len(steps) - 1:
        arrow(d, x + bw, y0 + bh // 2, x + bw + gap - 7, y0 + bh // 2)
card(d, 120, 290, 360, 250, "일괄 업로드", ["초기 구축·정기 이관", "대량 문서 재색인", "실패 건 재처리"], LIGHT_BLUE)
card(d, 520, 290, 360, 250, "개별 업로드", ["부서별 업무 문서 등록", "문서유형·권한 입력", "처리 상태 확인"], PALE)
card(d, 920, 290, 360, 250, "시스템 연계", ["API·ETL·Crawler", "변경분 감지", "연계 오류 알림"], LIGHT_BLUE)
card(d, 1320, 290, 360, 250, "운영 결과", ["검색 반영 여부", "오류 원인", "감사 이력"], PALE)
evidence(d, "SFR-004 문서정보 수집, SFR-005 구조화/전처리, 운영 이력·오류 재처리 관리 필요")
save(img, "04_14페이지_문서업로드운영절차_내용.png")

# 5. Completion criteria
img, d = img_base("15페이지 내용 이미지")
cards = [
    ("원본 저장", ["원본 파일 보관", "document_id 부여"]),
    ("메타데이터", ["문서유형·부서", "권한·버전·최신본"]),
    ("파싱/청킹", ["본문·표·이미지 텍스트", "chunk_id 생성"]),
    ("임베딩/색인", ["Vector DB 적재", "검색 색인 생성"]),
    ("검색/RAG", ["검색 결과 재현성", "답변 출처·Groundedness"]),
    ("권한/운영", ["권한 필터·개인정보", "오류·재처리 이력"]),
]
for i, (title, bullets) in enumerate(cards):
    x = 110 + (i % 3) * 560
    y = 95 + (i // 3) * 230
    card(d, x, y, 470, 170, title, bullets, LIGHT_BLUE if i < 3 else PALE)
rounded(d, (130, 590, 1670, 675), fill=WHITE, outline=RED, radius=16, width=2)
para(d, 165, 615, "완료 판정: 원본, 메타데이터, 파싱/청킹, 임베딩/색인, 검색/RAG, 권한·출처 검증이 모두 확인된 상태", 28, DARK, True, 1500, 4)
evidence(d, "SFR-004, SFR-005, SFR-017, SFR-018")
save(img, "05_15페이지_비정형데이터적재완료기준_내용.png")

print(OUT)
