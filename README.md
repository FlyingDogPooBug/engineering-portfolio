# 권용민 | Engineering Portfolio
<!-- casebook-index -->

## 프로젝트별 상세 기록

**20개 프로젝트 모두 세 장 구성으로 확장했고, 상세 PDF는 각각 최소 3쪽 이상입니다.** [전체 문서·PDF 목차](CASEBOOK.md)에서 읽을 수 있습니다.

[A-FA 설계보고서 상세 기록](docs/afa-design/README.md)에는 프레임 강성과 해석 조건, 모션비·기구학, 댐퍼 데이터, 벨크랭크의 하중·제작성·FEA, 푸시로드 좌굴과 지그 제작 절차를 원보고서 도판과 함께 담았습니다.

<!-- /casebook-index -->

**차량시험 · 서스펜션 설계 · 제작 · 기술 문서화**

[웹 포트폴리오](https://yongmin-engineering-portfolio-oct26.gardengnat12.chatgpt.site) · [한·영 프로필 PDF](site/assets/yongmin-profile.pdf) · [English](README.en.md)

아주대학교에서 기계공학을 전공하고 미래자동차를 복수전공하고 있습니다. Formula Student 팀 A-FA에서 드라이버, 팀장과 서스펜션 담당을 경험했습니다. 직접 만들고 주행으로 확인하며, 설계 판단의 근거와 다음 팀이 이어 갈 수 있는 기록을 남깁니다.

![Formula Student 섀시 CAD](site/assets/chassis.webp)

## 대표 프로젝트

| 대표 사례 | 맡은 일·범위 |
|---|---|
| [실차 시험·서스펜션 세팅](projects/roll/README.md) | 7회 주행, 대표 비교 전륜 롤 기울기 약 7.4% 감소 관찰 |
| [위상최적화·구조 검토·제작](projects/bellcrank/README.md) | CAD 질량: 전륜 51.21→26.25 g, 후륜 58.13→28.27 g |
| [배터리 열관리·부품 제작](projects/battery/README.md) | 부품 설계·3D프린팅·용접·정적해석·보고서 작성 및 통합 |
| [팀 운영·기술 문서화](projects/leadership/README.md) | 여섯 기술팀 조율, 보고서·스터디·인수인계 |
| [후원·제작·시험 협의](projects/collaboration/README.md) | 요구사항 전달, 제작·시험 자료 확보, 시즌 보고와 후임 연결 |

7.4%는 해당 순차 주행 시험의 대표 비교에서 관찰한 롤 기울기 변화입니다. 랩타임·접지력 개선으로 확대하지 않습니다. 벨크랭크의 CAD 질량과 제작품 실측값도 구분했습니다.

## 공모전·기획·콘텐츠

[15개 작업 찾아보기](ideas/README.md) - 데이터 평가, 서비스·정책, 학습 콘텐츠, 영상·디자인으로 정리했습니다. 각 문서에서 산출물, 본인 역할과 진행 상태를 확인할 수 있습니다.

## 연구·집필과 수상

- [연구·집필 기록](docs/research.md): KSAE 추계 포스터 2편 채택·2026.11.20 발표 예정, 오토저널 2026년 10월호 게재.
- [팀·개인 수상](docs/awards.md): 팀 수상과 개인 수상을 분리했습니다.
- [전체 이력 요약](site/assets/yongmin-profile.txt): 학력, 도구, 기타 경험과 자격을 담은 한·영 텍스트.

## 진행 중

**0ERROR 냉각 테스트베드**에서 기계 설계·제작을 맡고 있습니다. 현재 기록은 설계, 부품 검토와 조립 준비 단계입니다.

## 저장소 안내

| 경로 | 내용 |
|---|---|
| [projects/](projects/README.md) | 대표 사례 5개, 각각 국문·영문 문서 |
| [ideas/](ideas/README.md) | 공모전·제안·콘텐츠 15개, 각각 국문·영문 문서 |
| [docs/](docs/README.md) | 연구·집필 및 수상 기록 |
| [site/](site/README.md) | 공개 사이트의 HTML·CSS·JavaScript·이미지·영상·프로필 |

웹 소스를 로컬에서 보려면 다음 명령으로 서버를 실행하고 http://127.0.0.1:8000 을 여세요.

```sh
python -m http.server 8000 --directory site
```

## 연락

[smile10203@ajou.ac.kr](mailto:smile10203@ajou.ac.kr) · [LinkedIn](https://www.linkedin.com/in/%EC%9A%A9%EB%AF%BC-%EA%B6%8C-bb807939b/)

---

2026년 10월 기준. 문서 정리와 웹 구현에는 AI 보조를 사용했습니다. 프로젝트의 개인 담당과 팀원 기여는 각 사례에서 구분했습니다.

