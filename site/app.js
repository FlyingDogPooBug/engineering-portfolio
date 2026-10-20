(() => {
  'use strict';
  const projects = {
    roll: {
      ko: {
        category: '01 / VEHICLE DYNAMICS', title: '스프링 세팅을 숫자로 비교하다',
        intro: 'Formula Student 차량의 서스펜션 담당자로서, 전륜 스프링 레이트 변경이 실제 차량의 롤 응답에 어떻게 나타나는지 확인했습니다.',
        facts: [['7회', '변경 전 2회 + 변경 후 5회'], ['250 → 300', '전륜 스프링 · lb/in'], ['약 7.4%', '전륜 롤 기울기 감소 관찰']],
        sections: [
          {title: '무엇을 비교했나요?', text: '후륜 스프링 300 lb/in과 후륜 안티롤바 설정을 유지한 상태에서 전륜 스프링을 250에서 300 lb/in으로 변경했습니다. 서스펜션 변위와 횡가속도 데이터를 통해 준정상 선회에서의 롤 기울기를 비교했습니다.'},
          {title: '제가 맡은 일', list: ['직접 주행과 서스펜션 세팅, 계측팀이 제공한 원시데이터의 분석을 수행했습니다.', '손계산·해석과 실측값을 비교하며 세팅 판단의 근거를 정리했습니다. 센서 로깅은 계측팀의 역할이었고 프로그래밍 작업에는 도움을 받았습니다.']},
          {title: '관찰한 결과', text: '전륜 롤 기울기는 1.182에서 1.095 deg/g로 약 7.4% 감소했습니다. 후륜은 1.031에서 1.045 deg/g로 약 1.3% 증가했습니다. 필터 2~5 Hz 범위에서 전륜 감소율은 약 7.1~7.4%였습니다.'},
          {title: '결과와 함께 남긴 한계', text: '변경 전후를 순차적으로 주행한 시험으로, 타이어 온도·공기압, 노면과 운전자 입력의 영향을 완전히 분리하지 못했습니다. 이 수치를 랩타임이나 접지력 개선으로 해석하지 않았습니다. A-B-A 시험과 안티롤바·댐퍼 확장 검증은 후속 과제입니다.'}
        ],
        source: '근거: 본인이 대표 사례로 지정한 「250300lb.pdf」, 「2026_KSAE_추계학술대회_초록_권용민_아주대학교.pdf」 1~2쪽, 경험 통합정리. 7.4%는 이 사례의 현가변위 기반 전륜 롤 기울기 비교값입니다.'
      },
      en: {
        category: '01 / VEHICLE DYNAMICS', title: 'Putting suspension setup to the test',
        intro: 'As the suspension lead for a Formula Student car, I investigated how a change in front spring rate appeared in measured roll response.',
        facts: [['7 runs', '2 baseline + 5 modified'], ['250 → 300', 'Front spring rate · lb/in'], ['≈ 7.4%', 'Observed front-gradient reduction']],
        sections: [
          {title: 'The comparison', text: 'The front spring rate changed from 250 to 300 lb/in while the rear springs remained at 300 lb/in and the rear anti-roll-bar setup was retained. Suspension displacement and lateral acceleration were used to compare quasi-steady cornering roll gradients.'},
          {title: 'My contribution', list: ['Drove the car, adjusted suspension settings and analyzed raw data supplied by the instrumentation team.', 'Compared calculations, analysis and measurements to document the setup decision. Sensor logging was the instrumentation team’s responsibility; I received assistance with programming.']},
          {title: 'What we observed', text: 'Front roll gradient decreased from 1.182 to 1.095 deg/g, approximately 7.4%. The rear value increased from 1.031 to 1.045 deg/g, approximately 1.3%. Across filter settings of 2–5 Hz, the observed front reduction was approximately 7.1–7.4%.'},
          {title: 'What the test does not establish', text: 'These were sequential runs, so tire temperature, pressure, road conditions and driver inputs were not fully isolated. I do not equate this result with a lap-time or grip improvement. A-B-A testing and further anti-roll-bar and damper checks remain future work.'}
        ],
        source: 'Sources: the selected representative case, “250300lb.pdf”; my named 2026 KSAE autumn abstract, pages 1–2; and the consolidated experience record. The 7.4% refers to the suspension-displacement-based front roll gradient in this case.'
      }
    },
    bellcrank: {
      ko: {
        category: '02 / DESIGN & FABRICATION', title: '가벼운 형상을, 만들 수 있는 부품으로',
        intro: '최적화 결과가 바로 제작 가능한 부품이 되는 것은 아닙니다. 벨크랭크 플레이트의 하중 전달 경로와 체결부를 살피고, 실제 만들 수 있는 형상으로 다시 설계했습니다.',
        facts: [['−48.7%', '전륜 플레이트 CAD 질량'], ['−51.4%', '후륜 플레이트 CAD 질량'], ['25 / 28 g', '전·후륜 제작품 한 장 무게']],
        image: 'assets/bellcrank.webp', caption: '최적화 결과를 바탕으로 재설계한 전륜 벨크랭크 플레이트 CAD',
        sections: [
          {title: '설계에서 제작까지', list: ['Altair Inspire의 위상최적화 결과를 바탕으로 하중 전달 경로를 검토했습니다.', '체결 홀 주변을 보존하고 판재로 제작할 수 있도록 형상을 수정했습니다.', 'SolidWorks로 형상을 구체화하고 ANSYS로 구조를 검토한 뒤 제작했습니다.']},
          {title: '숫자를 구분해 기록했습니다', text: '보고서의 CAD 비교값은 전륜 51.21 → 26.25 g, 후륜 58.13 → 28.27 g입니다. 제작품 저울 사진에 기록된 한 장의 무게는 전륜 25 g, 후륜 28 g입니다. CAD 질량 감소율을 실물 전후 비교 측정값으로 바꾸어 표현하지 않았습니다.'},
          {title: '제작 기준을 지그에 담기', text: 'AEF-25부터 사용한 지그·로드엔드 방식을 유지하면서, 하드포인트를 제작물에 옮기는 체결 구조와 절차를 검토했습니다. 보고서에는 5T 철판 지그에 체결부를 고정한 뒤 가접·치수 확인·본용접을 진행하고, 우나사·좌나사 로드엔드로 푸시로드 길이를 조절하는 제작 절차를 정리했습니다.', image: 'assets/suspension-jig.webp', caption: '본인 섀시 보고서의 현가 암 제작용 5T 철판 지그 CAD · 225쪽 그림 2.2.11.5-1'},
          {title: '배운 점', text: '해석 결과의 형상을 그대로 따르기보다, 하중이 전달되는 영역과 제작·조립 조건을 함께 고려해야 했습니다. 설계 판단이 실제 부품에 어떻게 남는지 확인할 수 있었던 경험입니다.'}
        ],
        source: '근거: 본인 작성 섀시 설계보고서 200~204쪽(벨크랭크), 218~219쪽(길이 조절 구조), 225~227·234쪽(지그와 기존 제작 방식). CAD 비교와 제작품 무게는 203·204쪽이며, 이미지는 같은 보고서에서 가져왔습니다.'
      },
      en: {
        category: '02 / DESIGN & FABRICATION', title: 'From an optimized shape to a real part',
        intro: 'An optimized shape is not automatically a manufacturable component. I reviewed the bellcrank plate’s load paths and mounting regions, then redesigned it for fabrication.',
        facts: [['−48.7%', 'Front plate CAD mass'], ['−51.4%', 'Rear plate CAD mass'], ['25 / 28 g', 'Mass of fabricated front / rear plate']],
        image: 'assets/bellcrank.webp', caption: 'Redesigned front bellcrank plate based on topology-optimization results',
        sections: [
          {title: 'From analysis to fabrication', list: ['Reviewed load paths based on Altair Inspire topology-optimization results.', 'Preserved material around the mounting holes and refined the geometry for plate fabrication.', 'Developed the geometry in SolidWorks, checked the structure in ANSYS and fabricated the component.']},
          {title: 'Keeping the measurements distinct', text: 'The CAD mass comparison is 51.21 → 26.25 g for the front plate and 58.13 → 28.27 g for the rear. Scale photographs show fabricated plate masses of 25 g and 28 g respectively. The CAD reduction percentages are not presented as before-and-after physical measurements.'},
          {title: 'Carrying the design into a fabrication jig', text: 'Retaining the jig and rod-end approach used in AEF-25, I reviewed how the mounting arrangement carries hardpoints into fabrication. The report documents fixing the mounting regions on a 5 mm steel-plate jig, tack welding, checking dimensions and completing the welds. It also describes pushrod adjustment using right- and left-hand-threaded rod ends.', image: 'assets/suspension-jig.webp', caption: 'Suspension-arm jig CAD on a 5 mm steel plate · My chassis report, page 225, Figure 2.2.11.5-1'},
          {title: 'What I learned', text: 'The useful design balances the analysis result with load-transfer regions, fabrication and assembly conditions. It was an opportunity to see how design reasoning appears in a finished component.'}
        ],
        source: 'Source: my chassis design report, pages 200–204 (bellcranks), 218–219 (length adjustment), and 225–227 and 234 (jig and retained fabrication method). CAD mass and scale photographs are on pages 203 and 204. Images come from the same report.'
      }
    },
    leadership: {
      ko: {
        category: '04 / LEADERSHIP & DOCUMENTATION', title: '다음 팀이 이해할 수 있도록.',
        intro: '2025~2026 시즌 A-FA 팀장과 서스펜션 담당을 병행했습니다. 설계·제작 업무와 함께, 팀이 같은 기준으로 판단하고 다음 담당자가 맥락을 이어받을 수 있게 기록하는 일을 맡았습니다.',
        facts: [['6개', '조율한 기술팀'], ['5회', '섀시 설계 스터디 활동'], ['20.5시간', '공식 스터디 활동 기록']],
        sections: [
          {title: '기술 판단의 이유를 남기기', text: '섀시 설계보고서를 작성하고, 프레임 설계·구조해석·위상최적화 등을 다루는 학습공동체 스터디를 운영했습니다. 결과 도면만 전달하기보다 어떤 조건과 판단으로 설계를 바꾸었는지 설명하려고 했습니다.'},
          {title: '지식이 다음 시즌으로 이어지려면', text: '남선우와 공동 작성한 연구에서는 입문자부터 주도 설계자까지의 성장 단계와 설계·검증·개선·기록의 학습 흐름을 정리했습니다. 설계사양서, 변경이력, 체크리스트와 해석·시험기록을 연결하는 지식관리 체계를 제안했습니다. 적용 전후의 교육·운영 효과는 후속 검증 과제입니다.'},
          {title: '시험 준비와 외부 협의', text: '외부 댐퍼 시험에 필요한 제원·도면을 전달하고 시험 속도, 세팅 범위와 데이터 형식을 문의했습니다. 외부 기관의 시험 수행과 제 시험 준비·결과 검토 역할을 구분합니다.'},
          {title: '후원사와 다음 담당자 사이', text: '후원사에 개발 과정, 시즌 결과와 한계를 보고하고 차기 팀장을 소개했습니다. 시즌이 끝난 뒤에도 자료와 연락 관계를 다음 팀에 전달하는 일을 중요하게 생각했습니다.'},
          {title: '팀 성과를 설명하는 방식', text: '계측·공력·배터리 등 각 팀의 기여를 존중합니다. 제 역할은 설계·서스펜션 시험·제작과 팀 조율이며, 공동 보고서의 모든 세부 작업을 혼자 수행한 것으로 표현하지 않습니다.'}
        ],
        source: '근거: 경험 통합정리, 섀시 설계 및 차량 구조 해석 스터디 활동보고서, 시험기관·후원사 협의 기록, 「Formula Student 팀의 설계 프로세스 체계화와 지식관리 방안에 관한 연구」 1·3·5~8쪽. 공식 스터디 기록은 5회·20시간 30분입니다.'
      },
      en: {
        category: '04 / LEADERSHIP & DOCUMENTATION', title: 'Make the next team’s starting point better.',
        intro: 'I combined team leadership and suspension responsibility during the 2025–2026 A-FA season. Alongside design and fabrication, I worked to preserve the context behind the team’s decisions.',
        facts: [['6', 'Technical teams coordinated'], ['5', 'Chassis-study sessions'], ['20.5 h', 'Recorded study-group activities']],
        sections: [
          {title: 'Documenting the reasoning', text: 'I wrote the chassis design report and led study sessions on frame design, structural analysis and topology optimization. The aim was to explain the conditions and decisions behind a design change, beyond the final drawings.'},
          {title: 'Carrying knowledge into the next season', text: 'In a coauthored paper, we described a progression from beginner to lead designer and a learning cycle of design, validation, improvement and documentation. We proposed linking design specifications, change histories, checklists and analysis and test records. Educational and operational effects still require before-and-after validation.'},
          {title: 'Preparing external tests', text: 'I supplied damper specifications and drawings, and asked external specialists about test speeds, adjustment ranges and data formats. Their test execution is distinct from my preparation and review responsibilities.'},
          {title: 'A responsible handover', text: 'I reported the development process, season outcomes and limitations to sponsors and introduced the next team leader. Passing on both the technical record and the working relationship mattered after the season ended.'},
          {title: 'Giving the team its credit', text: 'Instrumentation, aerodynamics and battery development were shared team responsibilities. My role covers design, suspension work, fabrication and coordination; I do not claim every task in a joint report as my own.'}
        ],
        source: 'Sources: experience record, chassis-design and structural-analysis study report, external-test and sponsor correspondence, and the coauthored Formula Student design-process and knowledge-management paper, pages 1, 3 and 5–8. The official study record totals five sessions and 20 hours 30 minutes.'
      }
    }
  };

  Object.assign(projects, window.portfolioCompetitionProjects || {}, window.portfolioEngineeringProjects || {}, window.portfolioParanProjects || {}, window.portfolioCollaborationProjects || {});
  const competitionEntries = [...(window.portfolioParanEntries || []), ...(window.portfolioCompetitionEntries || [])];
  const ideasList = document.getElementById('ideas-list');
  let ideaFilter = 'all';
  const dialog = document.getElementById('project-dialog');
  const dialogContent = document.getElementById('dialog-content');
  const toast = document.getElementById('toast');
  let lang = 'ko';
  let currentProject = null;
  let toastTimer;
  try { if (localStorage.getItem('portfolio-language') === 'en') lang = 'en'; } catch {}

  const escape = value => String(value).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const renderFigure = (src, caption) => `<figure class="dialog-image"><img src="${escape(src)}" alt="${escape(caption)}" loading="lazy"><figcaption>${escape(caption)}</figcaption></figure>`;
  const renderMedia = items => `<div class="case-media">${items.map(item => `<figure class="case-video ${item.portrait ? 'portrait' : ''}"><video controls playsinline preload="none" poster="${escape(item.poster)}" aria-label="${escape(item[lang])}"><source src="${escape(item.src)}" type="video/mp4"></video><figcaption>${escape(item[lang])}</figcaption></figure>`).join('')}</div>`;
  const renderGallery = items => `<div class="case-gallery">${items.map(item => renderFigure(item.src, item[lang])).join('')}</div>`;

  function renderIdeas() {
    const entries = competitionEntries.filter(entry => ideaFilter === 'all' || entry.group === ideaFilter);
    ideasList.innerHTML = entries.map(entry => {
      const item = entry[lang];
      const index = String(competitionEntries.indexOf(entry) + 1).padStart(2, '0');
      return `<button type="button" class="idea-entry ${entry.cover ? 'has-preview' : ''}" data-project="${escape(entry.id)}"><span class="idea-index">${index}</span>${entry.cover ? `<img class="idea-preview ${entry.coverFit === 'contain' ? 'contain' : ''}" src="${escape(entry.cover)}" alt="" loading="lazy">` : ''}<div class="idea-entry-copy"><div class="idea-entry-top"><span class="idea-category">${escape(item.category)}</span><span>${escape(entry.year)}</span></div><h3>${escape(item.title)}</h3><p>${escape(item.short)}</p></div><span class="idea-status ${entry.awarded || entry.submitted ? 'awarded' : ''}">${escape(item.status)}</span><span class="idea-entry-arrow" aria-hidden="true">↗</span></button>`;
    }).join('');
    document.getElementById('idea-count').textContent = lang === 'ko' ? `${entries.length}개 작업 / 전체 ${competitionEntries.length}개` : `${entries.length} OF ${competitionEntries.length} ENTRIES`;
    document.querySelectorAll('.idea-filters [data-filter]').forEach(button => button.setAttribute('aria-pressed', String(button.dataset.filter === ideaFilter)));
  }

  function openProject(id) {
    currentProject = id;
    renderProject(id);
    dialog.showModal();
    dialog.scrollTop = 0;
    document.body.classList.add('modal-open');
  }

  function renderProject(id) {
    dialogContent.querySelectorAll('video').forEach(video => video.pause());
    const p = projects[id][lang];
    dialogContent.innerHTML = `<p class="dialog-eyebrow">${escape(p.category)}</p><h2 id="dialog-title" class="dialog-title">${escape(p.title)}</h2><p class="dialog-intro">${escape(p.intro)}</p><div class="dialog-facts">${p.facts.map(([value,label]) => `<div><b>${escape(value)}</b><span>${escape(label)}</span></div>`).join('')}</div>${p.image ? renderFigure(p.image, p.caption) : ''}${p.sections.map(s => `<section class="dialog-section"><h3>${escape(s.title)}</h3>${s.text ? `<p>${escape(s.text)}</p>` : `<ul>${s.list.map(t=>`<li>${escape(t)}</li>`).join('')}</ul>`}${s.image ? renderFigure(s.image, s.caption) : ''}</section>`).join('')}${p.media ? renderMedia(p.media) : ''}${p.gallery ? renderGallery(p.gallery) : ''}<p class="dialog-source">${escape(p.source)}</p>`;
  }

  function applyLanguage() {
    document.documentElement.lang = lang;
    document.querySelectorAll('[data-ko][data-en]').forEach(el => { el.textContent = el.dataset[lang].replaceAll('\\n', '\n'); });
    document.querySelectorAll('[data-ko-alt]').forEach(el => { el.alt = el.getAttribute(`data-${lang}-alt`); });
    document.title = lang === 'ko' ? '권용민 — Automotive Engineering Portfolio' : 'Yongmin Kwon — Automotive Engineering Portfolio';
    const toggle = document.getElementById('language');
    toggle.innerHTML = `${lang === 'ko' ? 'EN' : 'KO'} <span aria-hidden="true">⌘</span>`;
    toggle.setAttribute('aria-label', lang === 'ko' ? 'Switch to English' : '한국어로 전환');
    document.querySelector('.header nav').setAttribute('aria-label', lang === 'ko' ? '주요 메뉴' : 'Main navigation');
    document.querySelector('.dialog-close').setAttribute('aria-label', lang === 'ko' ? '닫기' : 'Close');
    document.querySelector('.idea-filters').setAttribute('aria-label', lang === 'ko' ? '공모전 분야 선택' : 'Filter ideas by field');
    renderIdeas();
    document.querySelectorAll('[data-project]').forEach(button => { button.setAttribute('aria-label', `${projects[button.dataset.project][lang].title} — ${lang === 'ko' ? '자세히 보기' : 'Read case study'}`); });
    if (currentProject) renderProject(currentProject);
  }

  document.getElementById('language').addEventListener('click', () => {
    lang = lang === 'ko' ? 'en' : 'ko';
    try { localStorage.setItem('portfolio-language', lang); } catch {}
    applyLanguage();
  });
  document.querySelectorAll('[data-project]').forEach(button => button.addEventListener('click', () => openProject(button.dataset.project)));
  ideasList.addEventListener('click', event => {
    const button = event.target.closest('button[data-project]');
    if (button) openProject(button.dataset.project);
  });
  document.querySelectorAll('.idea-filters [data-filter]').forEach(button => button.addEventListener('click', () => {
    ideaFilter = button.dataset.filter;
    renderIdeas();
    ideasList.querySelectorAll('[data-project]').forEach(item => item.setAttribute('aria-label', `${projects[item.dataset.project][lang].title} — ${lang === 'ko' ? '자세히 보기' : 'Read case study'}`));
  }));
  document.querySelector('.dialog-close').addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', event => { if (event.target === dialog) { const r=dialog.getBoundingClientRect(); if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom)dialog.close(); } });
  dialog.addEventListener('close', () => { dialogContent.querySelectorAll('video').forEach(video => video.pause()); document.body.classList.remove('modal-open'); currentProject = null; });

  function showToast(message) {
    clearTimeout(toastTimer);
    toast.textContent = message;
    toast.classList.add('visible');
    toastTimer = setTimeout(() => toast.classList.remove('visible'), 3000);
  }

  document.getElementById('copy-email').addEventListener('click', async () => {
    const email = 'smile10203@ajou.ac.kr';
    try {
      if (!navigator.clipboard?.writeText) throw new Error('clipboard unavailable');
      await navigator.clipboard.writeText(email);
      showToast(lang === 'ko' ? '이메일 주소를 복사했습니다.' : 'Email address copied.');
    } catch {
      const field = document.createElement('textarea');
      field.value = email; field.style.cssText = 'position:fixed;left:-9999px;top:0';
      document.body.appendChild(field); field.select();
      let copied = false;
      try { copied = document.execCommand('copy'); } catch {}
      field.remove();
      showToast(copied ? (lang === 'ko' ? '이메일 주소를 복사했습니다.' : 'Email address copied.') : email);
    }
  });
  applyLanguage();
})();
