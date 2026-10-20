'use strict';

window.portfolioEngineeringProjects = {
  battery: {
    ko: {
      category: '03 / THERMAL MANAGEMENT · TEAM PROJECT',
      title: '해석한 형상을, 실차 부품으로.',
      intro: 'A-FA의 배터리 열관리 프로젝트에서 부품 설계와 3D프린팅, 용접·정적해석을 맡았습니다. 팀이 찾은 유로 형상을 실제로 제작하고 배터리 팩 안에 적용하는 과정에 참여했습니다.',
      facts: [['3D', '유로 가이드 프린팅'], ['장착', '배선·커넥터 간섭 확인'], ['우수상', '2026 KSAE 발표대회 · 팀 수상']],
      image: 'assets/battery-guide.webp',
      caption: '팀 발표보고서의 유로 가이드 시제품과 AEF-26 배터리 팩 적용 사진',
      sections: [
        {title: '문제는 공기가 도달하는 위치였습니다', text: '기존 차량의 주행 기록에서는 셀 위치에 따른 온도 차이가 나타났습니다. 팀은 배터리 박스의 기본 구조를 유지하면서, 냉각 공기를 팩 하단으로 보내는 유로 가이드를 세그먼트 덮개에 더하는 방향을 검토했습니다.'},
        {title: '제가 맡은 제작과 적용', list: ['부품 설계, 3D프린팅, 용접과 정적해석에 기여했습니다.', '팀은 출력한 가이드를 배터리 팩에 장착하고 배선·커넥터와의 간섭을 확인했습니다. 제작과 조립 조건을 함께 고려한 과정입니다.', 'CFD 해석·optiSLang 자동화와 현장 발표는 각 담당 팀원이 수행했습니다.']},
        {title: '기술 자료를 하나의 보고서로', text: '발표대회 보고서 초안을 작성하고, 설계·제작·비용 자료를 통합했습니다. 기존 박스를 재사용하는 최소 변경 방향을 중심으로, 실제 제작 사례와 사업성·자원 활용의 관계를 설명하고 분량과 제출 형식을 다듬었습니다.'},
        {title: '팀이 검토한 과정', text: '팀은 실주행 전류 기반 열원을 사용해 해석 모델을 실측 온도와 비교하고, 배선·커넥터의 공간 제약 안에서 51개 후보 형상을 평가했습니다. 그 결과를 3D프린팅 부품으로 구현해 장착 가능성을 확인했습니다. 보고서의 온도 분포 개선값은 해석 비교 결과이며, 새 가이드 장착 후 주행 열성능을 실측한 결과로 제시하지 않습니다.'}
      ],
      source: '근거: 「실주행 데이터 기반 검증과 CFD 자동화를 통한 배터리 팩 저비용 열관리 최적화」 1·3~6쪽, 2026.09.02~09.09 보고서 작성·역할 분담 대화, 본인 경험 정리. 사진은 보고서 6쪽 그림 9입니다.'
    },
    en: {
      category: '03 / THERMAL MANAGEMENT · TEAM PROJECT',
      title: 'Turning the analysis into a physical part.',
      intro: 'For A-FA’s battery thermal-management project, I contributed component design, 3D printing, welding and static analysis. I helped translate the team’s flow-guide geometry into a part that could fit inside the battery pack.',
      facts: [['3D', 'Flow-guide printing'], ['FIT', 'Wiring and connector clearance'], ['Award', 'KSAE Excellence · Team award']],
      image: 'assets/battery-guide.webp',
      caption: 'Flow-guide prototypes and installation in the AEF-26 battery pack, from the team report',
      sections: [
        {title: 'Getting air to the right place', text: 'Track records from the earlier car showed uneven temperatures across cell locations. The team investigated adding a flow guide to the segment cover to direct air toward the bottom of the pack while retaining the battery-box structure.'},
        {title: 'My fabrication contribution', list: ['Contributed component design, 3D printing, welding and static analysis.', 'The team installed the printed guides and checked interference with wiring and connectors, considering fabrication and assembly together.', 'CFD analysis, optiSLang automation and the competition presentation were performed by the responsible teammates.']},
        {title: 'Bringing the technical record together', text: 'I drafted the presentation report and integrated design, fabrication and cost materials. I helped explain the minimal-change approach around reusing the enclosure, connected the physical case with business value and resource use, and refined the length and submission format.'},
        {title: 'The team’s engineering process', text: 'The team used track-current-based heat inputs, compared the model with measured temperatures and evaluated 51 geometries within wiring and connector clearances. The selected geometry was printed and checked for fit in the pack. Temperature-distribution improvements in the report are simulation comparisons, rather than a post-installation track measurement of the new guide.'}
      ],
      source: 'Sources: team report on track-data validation and CFD automation for battery thermal management, pages 1 and 3–6; report-drafting and role-allocation correspondence, September 2–9, 2026; and my experience record. Image: Figure 9, page 6.'
    }
  }
};
