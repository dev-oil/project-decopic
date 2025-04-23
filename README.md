# DecoPic

사진을 꾸미고 스티커를 붙여서 나만의 이미지를 만들 수 있는  
**스티커 사진기 웹 앱**입니다.

## 주요 기능

- 사진 업로드
- 자유롭게 그림 그리기 (색상 선택)
- 드래그 앤 드롭으로 스티커 붙이기
- 그림만 초기화 or 전체 새로 시작
- 완성된 이미지 PNG로 다운로드

## 배포 링크

[링크](https://dev-oil.github.io/project-decopic/)

- GitHub Pages를 통해 정적 웹으로 배포

---

## 사용법

1. **사진 업로드** 버튼으로 꾸밀 사진을 업로드하세요
2. 좌측 캔버스에서 자유롭게 그림을 그릴 수 있어요
3. 우측에서 스티커를 선택해 드래그 앤 드롭으로 붙여보세요
4. **그림 초기화** 또는 **전체 초기화**로 상태를 리셋할 수 있어요
5. 완성된 이미지를 **다운로드** 버튼으로 저장해보세요!

---

## 프로젝트 구조

```
decopic/
├── public/                           # 정적 파일 (그대로 복사됨)
│   ├── video/
│   │   └── background.mp4           # 배경 영상
│   └── image/
│       ├── sticker1.png             # 스티커 이미지들
│       ├── sticker2.png
│       └── ...
│
├── src/
│   ├── components/                  # UI 컴포넌트
│   │   ├── CanvasEditor.tsx         # 캔버스 그리기, 드로잉, 드롭 기능 포함
│   │   ├── UploadButton.tsx         # 이미지 업로드 버튼
│   │   ├── ToolPanel.tsx            # 색상 선택 + 펜/지우개 토글
│   │   └── StickerPanel.tsx         # 스티커 목록 패널 (드래그 앤 드롭)
│   │
│   ├── pages/
│   │   └── HomePage.tsx             # 전체 레이아웃과 상태 관리 (strokeColor 등)
│   │
│   ├── App.tsx                      # 루트 컴포넌트
│   ├── main.tsx                     # 진입점
│   └── index.css                    # TailwindCSS import
│
├── .gitignore
├── index.html                       # Vite HTML entry
├── package.json
├── README.md
├── tsconfig.json
└── vite.config.ts                   # base 설정 포함
```
