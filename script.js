'use strict';

/* ============================
   스쿼드 데이터 (2025–26)
   ============================ */
const squadData = [
  // ── GOALKEEPER ──────────────────────────────
  {
    num: 13, posGroup: 'GK', pos: 'GK',
    name: '호안 가르시아', nat: '🇪🇸 Spain', age: 24,
    height: '189cm', foot: '오른발', born: '2001.02.25',
    bio: '에스파뇰 유스 출신으로 2025년 여름 바르셀로나에 합류한 새 주전 골키퍼. 빠른 반응 속도와 안정적인 포지셔닝이 강점이며, 발밑 기술도 뛰어나 플리크 감독의 빌드업 전술에 적합하다.',
    stat1: { val: '74%', lbl: '선방률' }, stat2: { val: '24세', lbl: '나이' },
    seasonStats: [
      { lbl: '출장', val: 25, max: 38 },
      { lbl: '클린시트', val: 10, max: 20 },
      { lbl: '선방률', val: 74, max: 100 }
    ],
    career: [
      { club: 'FC 바르셀로나', years: '2025–현재' },
      { club: 'RCD Espanyol', years: '2022–25' },
      { club: 'RCD Espanyol B', years: '2019–22' }
    ],
    awards: ['스페인 국가대표', '시장가치 3,000만 €']
  },
  {
    num: 25, posGroup: 'GK', pos: 'GK',
    name: '보이치에흐 슈체스니', nat: '🇵🇱 Poland', age: 35,
    height: '195cm', foot: '오른발', born: '1990.04.18',
    bio: '유벤투스에서 은퇴를 선언했으나 바르셀로나의 긴급 요청으로 2024년 복귀. 20년 가까운 커리어에서 쌓은 경험과 침착함으로 팀의 든든한 백업 역할을 수행하고 있다.',
    stat1: { val: '68%', lbl: '선방률' }, stat2: { val: '백업', lbl: '롤' },
    seasonStats: [
      { lbl: '출장', val: 13, max: 38 },
      { lbl: '클린시트', val: 5, max: 20 },
      { lbl: '선방률', val: 68, max: 100 }
    ],
    career: [
      { club: 'FC 바르셀로나', years: '2024–현재' },
      { club: 'Juventus FC', years: '2017–24' },
      { club: 'AS Roma (임대)', years: '2015–17' },
      { club: 'Arsenal FC', years: '2006–15' }
    ],
    awards: ['Serie A 우승 5회', '폴란드 국가대표 GK', 'UCL 준우승 2015']
  },
  // ── DEFENDER ────────────────────────────────
  {
    num: 23, posGroup: 'DEF', pos: 'RB',
    name: '줄스 쿤데', nat: '🇫🇷 France', age: 27,
    height: '178cm', foot: '오른발', born: '1998.11.12',
    bio: '오른쪽 풀백과 센터백 양쪽을 소화하는 만능 수비수. 공격 가담 시의 스피드와 드리블이 팀의 우측 침투를 이끌며, 1대1 상황에서도 안정적인 모습을 보인다. 계약 2030년까지.',
    stat1: { val: '5', lbl: '시즌 어시스트' }, stat2: { val: '6,500만 €', lbl: '시장가치' },
    seasonStats: [
      { lbl: '출장', val: 30, max: 38 },
      { lbl: '어시스트', val: 5, max: 15 },
      { lbl: '태클 성공', val: 72, max: 100 }
    ],
    career: [
      { club: 'FC 바르셀로나', years: '2022–현재' },
      { club: 'Sevilla FC', years: '2019–22' },
      { club: 'Girondins Bordeaux', years: '2016–19' }
    ],
    awards: ['UEFA 네이션스리그 우승 2021', '프랑스 국가대표', 'La Liga 우승 2022–23 / 2024–25']
  },
  {
    num: 2, posGroup: 'DEF', pos: 'RB',
    name: '주앙 칸셀로', nat: '🇵🇹 Portugal', age: 31,
    height: '182cm', foot: '왼발', born: '1994.05.27',
    bio: '맨시티·바이에른을 거친 세계 최고 수준의 공격형 풀백. 좌우 모두 소화 가능하며 화려한 드리블과 날카로운 크로스가 특기. 2025–26 시즌 바르셀로나에 합류했다.',
    stat1: { val: '7', lbl: '시즌 공격 포인트' }, stat2: { val: '1,000만 €', lbl: '시장가치' },
    seasonStats: [
      { lbl: '출장', val: 22, max: 38 },
      { lbl: '어시스트', val: 4, max: 15 },
      { lbl: '드리블 성공', val: 75, max: 100 }
    ],
    career: [
      { club: 'FC 바르셀로나', years: '2025–현재' },
      { club: 'Al-Hilal', years: '2024–25' },
      { club: 'Manchester City', years: '2021–24' },
      { club: 'Juventus FC', years: '2019–21' }
    ],
    awards: ['프리미어리그 우승 4회', 'UCL 우승 2023', '포르투갈 국가대표', 'UEFA 올해의 팀 2021']
  },
  {
    num: 5, posGroup: 'DEF', pos: 'CB',
    name: '파우 쿠바르시', nat: '🇪🇸 Spain', age: 19,
    height: '187cm', foot: '왼발', born: '2007.01.22',
    bio: '2007년생. 17세에 UCL 무대를 정복한 차세대 센터백. 뛰어난 공중볼 장악과 침착한 빌드업이 인상적이며, 큰 경기에서 오히려 더 빛나는 강심장 수비수다. 8,000만 € 시장가치.',
    stat1: { val: '92%', lbl: '패스 성공률' }, stat2: { val: '8,000만 €', lbl: '시장가치' },
    seasonStats: [
      { lbl: '출장', val: 34, max: 38 },
      { lbl: '패스 성공률', val: 92, max: 100 },
      { lbl: '공중볼 승리', val: 76, max: 100 }
    ],
    career: [
      { club: 'FC 바르셀로나', years: '2024–현재' },
      { club: 'FC 바르셀로나 B', years: '2022–24' }
    ],
    awards: ['UCL 8강 진출 2023–24', '스페인 국가대표', 'La Liga 우승 2024–25', 'La Liga 최우수 신인']
  },
  {
    num: 4, posGroup: 'DEF', pos: 'CB',
    name: '로날드 아라우호', nat: '🇺🇾 Uruguay', age: 27,
    height: '188cm', foot: '오른발', born: '1999.03.07',
    bio: '압도적인 피지컬과 공격적인 수비 스타일의 센터백. 1대1 수비에서 리그 최고 수준을 자랑하며 팀의 수비 리더 역할을 한다. 계약 2031년까지 연장.',
    stat1: { val: '82%', lbl: '공중볼 승리' }, stat2: { val: '2,500만 €', lbl: '시장가치' },
    seasonStats: [
      { lbl: '출장', val: 26, max: 38 },
      { lbl: '공중볼 승리', val: 82, max: 100 },
      { lbl: '1대1 수비', val: 79, max: 100 }
    ],
    career: [
      { club: 'FC 바르셀로나', years: '2020–현재' },
      { club: 'Club Atlético Rentistas', years: '2018–20' }
    ],
    awards: ['우루과이 국가대표', 'La Liga 우승 2022–23 / 2024–25']
  },
  {
    num: 24, posGroup: 'DEF', pos: 'CB',
    name: '에릭 가르시아', nat: '🇪🇸 Spain', age: 25,
    height: '182cm', foot: '오른발', born: '2001.01.09',
    bio: '맨시티 유스 출신의 지능형 센터백. 빌드업 능력과 포지셔닝이 뛰어나며 차분한 성격으로 팀의 수비 조직을 안정시킨다. 시장가치 3,000만 €.',
    stat1: { val: '91%', lbl: '패스 성공률' }, stat2: { val: '25세', lbl: '나이' },
    seasonStats: [
      { lbl: '출장', val: 20, max: 38 },
      { lbl: '패스 성공률', val: 91, max: 100 },
      { lbl: '클리어', val: 65, max: 100 }
    ],
    career: [
      { club: 'FC 바르셀로나', years: '2021–현재' },
      { club: 'Manchester City', years: '2017–21' }
    ],
    awards: ['스페인 국가대표', 'La Liga 우승 2022–23 / 2024–25', '유로 2020 우승']
  },
  {
    num: 3, posGroup: 'DEF', pos: 'LB',
    name: '알레한드로 발데', nat: '🇪🇸 Spain', age: 22,
    height: '170cm', foot: '왼발', born: '2003.10.06',
    bio: '폭발적인 스피드로 왼쪽 측면을 지배하는 공격형 풀백. 오버래핑과 크로스 정확도가 뛰어나 바르샤의 왼쪽 날개 역할을 한다. 6,000만 € 시장가치, 계약 2028년까지.',
    stat1: { val: '6', lbl: '시즌 어시스트' }, stat2: { val: '6,000만 €', lbl: '시장가치' },
    seasonStats: [
      { lbl: '출장', val: 31, max: 38 },
      { lbl: '어시스트', val: 6, max: 15 },
      { lbl: '크로스 성공', val: 64, max: 100 }
    ],
    career: [
      { club: 'FC 바르셀로나', years: '2022–현재' },
      { club: 'FC 바르셀로나 B', years: '2020–22' }
    ],
    awards: ['스페인 U21 유로 우승 2023', '스페인 국가대표', 'La Liga 우승 2024–25']
  },
  {
    num: 18, posGroup: 'DEF', pos: 'LB',
    name: '제라르 마르틴', nat: '🇪🇸 Spain', age: 24,
    height: '180cm', foot: '왼발', born: '2001.09.05',
    bio: '바르셀로나 아카데미 출신의 왼쪽 풀백. 발데의 백업이지만 출장할 때마다 안정적인 모습을 보여준다. 2,000만 € 시장가치, 계약 2028년까지.',
    stat1: { val: '백업', lbl: '롤' }, stat2: { val: '24세', lbl: '나이' },
    seasonStats: [
      { lbl: '출장', val: 15, max: 38 },
      { lbl: '어시스트', val: 2, max: 15 },
      { lbl: '패스 성공률', val: 87, max: 100 }
    ],
    career: [
      { club: 'FC 바르셀로나', years: '2024–현재' },
      { club: 'FC 바르셀로나 B', years: '2021–24' }
    ],
    awards: ['스페인 U23 국가대표', 'La Liga 우승 2024–25']
  },
  // ── MIDFIELDER ──────────────────────────────
  {
    num: 8, posGroup: 'MID', pos: 'CM',
    name: '페드리', nat: '🇪🇸 Spain', age: 23,
    height: '174cm', foot: '오른발', born: '2002.11.25',
    bio: '이니에스타의 계보를 잇는 패스 마에스트로. Golden Boy 2021 수상자. 좁은 공간에서의 압박 해제와 리듬 컨트롤이 팀의 심장부를 이루며, 1억 4,000만 € 시장가치로 미드필더 중 세계 최고 수준이다.',
    stat1: { val: '94%', lbl: '패스 성공률' }, stat2: { val: '1.4억 €', lbl: '시장가치' },
    seasonStats: [
      { lbl: '출장', val: 29, max: 38 },
      { lbl: '패스 성공률', val: 94, max: 100 },
      { lbl: '키 패스', val: 78, max: 100 }
    ],
    career: [
      { club: 'FC 바르셀로나', years: '2020–현재' },
      { club: 'UD Las Palmas', years: '2018–20' }
    ],
    awards: ['Golden Boy 2021', '유로 2024 우승', 'La Liga 우승 2024–25', '스페인 국가대표']
  },
  {
    num: 6, posGroup: 'MID', pos: 'CM',
    name: '가비', nat: '🇪🇸 Spain', age: 21,
    height: '173cm', foot: '오른발', born: '2004.02.05',
    bio: '강도 높은 압박과 볼 탈취 능력이 탁월한 투사형 미드필더. 무릎 부상 후 복귀해 더욱 성숙한 모습을 보이고 있다. 계약 2030년까지, 시장가치 4,000만 €.',
    stat1: { val: '7.2', lbl: '경기당 압박' }, stat2: { val: '4,000만 €', lbl: '시장가치' },
    seasonStats: [
      { lbl: '출장', val: 24, max: 38 },
      { lbl: '볼 탈취', val: 80, max: 100 },
      { lbl: '압박 성공률', val: 68, max: 100 }
    ],
    career: [
      { club: 'FC 바르셀로나', years: '2021–현재' },
      { club: 'FC 바르셀로나 B', years: '2019–21' }
    ],
    awards: ['유로 2024 우승', 'La Liga 우승 2022–23 / 2024–25', '스페인 국가대표']
  },
  {
    num: 21, posGroup: 'MID', pos: 'CM',
    name: '프렝키 데 용', nat: '🇳🇱 Netherlands', age: 28,
    height: '180cm', foot: '오른발', born: '1997.05.12',
    bio: '광활한 커버리지와 전진 드리블이 무기인 박스투박스 미드필더. 아약스 시절부터 세계 정상급으로 인정받았으며, 4,500만 € 시장가치. 계약 2029년까지.',
    stat1: { val: '91%', lbl: '패스 성공률' }, stat2: { val: '4,500만 €', lbl: '시장가치' },
    seasonStats: [
      { lbl: '출장', val: 26, max: 38 },
      { lbl: '패스 성공률', val: 91, max: 100 },
      { lbl: '전진 드리블', val: 73, max: 100 }
    ],
    career: [
      { club: 'FC 바르셀로나', years: '2019–현재' },
      { club: 'AFC Ajax', years: '2015–19' }
    ],
    awards: ['UCL 준우승 2019 (아약스)', '네덜란드 국가대표', 'La Liga 우승 2022–23 / 2024–25']
  },
  {
    num: 17, posGroup: 'MID', pos: 'DM',
    name: '마르크 카사도', nat: '🇪🇸 Spain', age: 22,
    height: '177cm', foot: '오른발', born: '2003.10.02',
    bio: '2024–25 시즌 바르셀로나 최고의 발견. 수비형 미드필드에서 볼 탈취와 빠른 전개로 중원 기둥이 됐다. 등번호도 #14에서 #17로 변경, 2,500만 € 시장가치.',
    stat1: { val: '4.8', lbl: '경기당 인터셉트' }, stat2: { val: '2,500만 €', lbl: '시장가치' },
    seasonStats: [
      { lbl: '출장', val: 33, max: 38 },
      { lbl: '인터셉트', val: 85, max: 100 },
      { lbl: '볼 탈취', val: 82, max: 100 }
    ],
    career: [
      { club: 'FC 바르셀로나', years: '2023–현재' },
      { club: 'FC 바르셀로나 B', years: '2021–23' }
    ],
    awards: ['스페인 국가대표', 'La Liga 우승 2024–25', 'La Liga 올해의 신인 후보']
  },
  {
    num: 22, posGroup: 'MID', pos: 'DM',
    name: '마르크 베르날', nat: '🇪🇸 Spain', age: 18,
    height: '175cm', foot: '오른발', born: '2006.10.21',
    bio: '2006년생 바르셀로나 아카데미 출신의 차세대 미드필더. 수비형·중앙 미드필드를 모두 소화한다. 1,000만 € 시장가치, 계약 2029년까지.',
    stat1: { val: '18세', lbl: '나이' }, stat2: { val: '유망주', lbl: '롤' },
    seasonStats: [
      { lbl: '출장', val: 14, max: 38 },
      { lbl: '패스 성공률', val: 88, max: 100 },
      { lbl: '볼 탈취', val: 65, max: 100 }
    ],
    career: [
      { club: 'FC 바르셀로나', years: '2024–현재' },
      { club: 'FC 바르셀로나 B', years: '2022–24' }
    ],
    awards: ['스페인 U18 국가대표', '라 마시아 최우수 유망주']
  },
  {
    num: 16, posGroup: 'MID', pos: 'AM',
    name: '페르민 로페스', nat: '🇪🇸 Spain', age: 22,
    height: '178cm', foot: '오른발', born: '2003.03.11',
    bio: '다재다능한 미드필더로 중앙과 측면을 넘나든다. 골 감각이 뛰어나 교체 투입 시 결정적인 한 방을 자주 터트린다. 파리 올림픽 금메달리스트. 시장가치 7,000만 €.',
    stat1: { val: '8', lbl: '시즌 골' }, stat2: { val: '7,000만 €', lbl: '시장가치' },
    seasonStats: [
      { lbl: '출장', val: 28, max: 38 },
      { lbl: '공격 포인트', val: 53, max: 100 },
      { lbl: '슈팅 정확도', val: 67, max: 100 }
    ],
    career: [
      { club: 'FC 바르셀로나', years: '2023–현재' },
      { club: 'FC 바르셀로나 B', years: '2021–23' }
    ],
    awards: ['파리 올림픽 금메달 2024', '스페인 국가대표', 'La Liga 우승 2024–25']
  },
  {
    num: 20, posGroup: 'MID', pos: 'AM',
    name: '다니 올모', nat: '🇪🇸 Spain', age: 27,
    height: '178cm', foot: '오른발', born: '1998.05.07',
    bio: '유로 2024 우승의 핵심 주역. 좌·우·중앙 어디서나 위협적인 기술형 미드필더. 6,000만 € 시장가치, 계약 2030년까지.',
    stat1: { val: '12', lbl: '시즌 공격 포인트' }, stat2: { val: '6,000만 €', lbl: '시장가치' },
    seasonStats: [
      { lbl: '출장', val: 27, max: 38 },
      { lbl: '공격 포인트', val: 80, max: 100 },
      { lbl: '드리블 성공', val: 71, max: 100 }
    ],
    career: [
      { club: 'FC 바르셀로나', years: '2025–현재' },
      { club: 'RB Leipzig', years: '2020–25' },
      { club: 'Dinamo Zagreb', years: '2014–20' }
    ],
    awards: ['유로 2024 우승', '유로 2019 U21 우승', '스페인 국가대표', 'La Liga 우승 2024–25']
  },
  // ── FORWARD ─────────────────────────────────
  {
    num: 9, posGroup: 'FW', pos: 'ST',
    name: '로베르트 레반도프스키', nat: '🇵🇱 Poland', age: 37,
    height: '185cm', foot: '오른발', born: '1988.08.21',
    bio: '역대급 득점 기계. 분데스리가와 라리가를 모두 정복한 스트라이커. 계약 2026년까지로 마지막 시즌이 될 수 있다. 시장가치 900만 €지만 팀 내 영향력은 여전하다.',
    stat1: { val: '29', lbl: '시즌 골' }, stat2: { val: '계약 2026', lbl: '만료' },
    seasonStats: [
      { lbl: '출장', val: 32, max: 38 },
      { lbl: '득점', val: 76, max: 100 },
      { lbl: '슈팅 정확도', val: 74, max: 100 }
    ],
    career: [
      { club: 'FC 바르셀로나', years: '2022–현재' },
      { club: 'FC Bayern Munich', years: '2014–22' },
      { club: 'Borussia Dortmund', years: '2010–14' }
    ],
    awards: ['발롱도르 2위 2021', '분데스리가 득점왕 9회', 'UCL 우승 2020 (바이에른)', 'La Liga 우승 2022–23 / 2024–25']
  },
  {
    num: 11, posGroup: 'FW', pos: 'LW',
    name: '하피냐', nat: '🇧🇷 Brazil', age: 29,
    height: '176cm', foot: '오른발', born: '1996.12.14',
    bio: '바르셀로나 현 캡틴. 왼쪽 측면에서 안쪽으로 치고 들어오는 인사이드 포워드 플레이가 특기. 화려한 개인기와 드리블, 리더십까지 갖춘 팀의 심장이다. 시장가치 8,000만 €.',
    stat1: { val: '18', lbl: '시즌 골' }, stat2: { val: '캡틴', lbl: '2024–' },
    seasonStats: [
      { lbl: '출장', val: 35, max: 38 },
      { lbl: '득점', val: 47, max: 100 },
      { lbl: '드리블 성공', val: 82, max: 100 }
    ],
    career: [
      { club: 'FC 바르셀로나', years: '2022–현재' },
      { club: 'Leeds United', years: '2020–22' },
      { club: 'Stade Rennais', years: '2019–20' }
    ],
    awards: ['바르셀로나 캡틴 2024–', 'La Liga 우승 2024–25', '브라질 국가대표']
  },
  {
    num: 14, posGroup: 'FW', pos: 'LW',
    name: '마르쿠스 래쉬포드', nat: '🇬🇧 England', age: 28,
    height: '180cm', foot: '오른발', born: '1997.10.31',
    bio: '맨체스터 유나이티드를 떠나 2025년 바르셀로나에 합류한 잉글랜드 대표팀 공격수. 폭발적인 스피드와 강력한 왼발 슈팅이 무기. 새 환경에서 재기를 노리고 있다. 시장가치 4,000만 €.',
    stat1: { val: '10', lbl: '시즌 골' }, stat2: { val: '4,000만 €', lbl: '시장가치' },
    seasonStats: [
      { lbl: '출장', val: 24, max: 38 },
      { lbl: '득점', val: 26, max: 100 },
      { lbl: '드리블 성공', val: 70, max: 100 }
    ],
    career: [
      { club: 'FC 바르셀로나', years: '2025–현재' },
      { club: 'Manchester United', years: '2015–25' }
    ],
    awards: ['잉글랜드 국가대표', 'FA Cup 우승 2016', 'Europa League 우승 2017']
  },
  {
    num: 10, posGroup: 'FW', pos: 'RW',
    name: '라민 야말', nat: '🇪🇸 Spain', age: 18,
    height: '180cm', foot: '왼발', born: '2007.07.13',
    bio: '메시의 10번을 계승한 2007년생 천재. 유로 2024 MVP로 스페인 우승을 이끌었으며, 폭발적인 드리블과 좌발 인컷 슈팅으로 오른쪽 측면을 완전히 지배한다. 시장가치 2억 €로 세계 최고 수준.',
    stat1: { val: '유로 MVP', lbl: '2024' }, stat2: { val: '2억 €', lbl: '시장가치' },
    seasonStats: [
      { lbl: '출장', val: 35, max: 38 },
      { lbl: '공격 포인트', val: 88, max: 100 },
      { lbl: '드리블 성공', val: 91, max: 100 }
    ],
    career: [
      { club: 'FC 바르셀로나', years: '2023–현재' },
      { club: 'FC 바르셀로나 B', years: '2022–23' }
    ],
    awards: ['유로 2024 MVP', '유로 2024 우승', 'Golden Boy 2024', 'La Liga 우승 2024–25', '메시 10번 계승']
  },
  {
    num: 7, posGroup: 'FW', pos: 'FW',
    name: '페란 토레스', nat: '🇪🇸 Spain', age: 26,
    height: '184cm', foot: '왼발', born: '2000.02.29',
    bio: '좌·우 측면과 최전방을 모두 소화하는 멀티 공격수. 맨시티 시절 쌓은 경험을 바탕으로 꾸준히 활약 중. 시장가치 5,000만 €, 계약 2027년까지.',
    stat1: { val: '10', lbl: '시즌 골' }, stat2: { val: '5,000만 €', lbl: '시장가치' },
    seasonStats: [
      { lbl: '출장', val: 30, max: 38 },
      { lbl: '득점', val: 26, max: 100 },
      { lbl: '슈팅 정확도', val: 62, max: 100 }
    ],
    career: [
      { club: 'FC 바르셀로나', years: '2022–현재' },
      { club: 'Manchester City', years: '2021–22' },
      { club: 'Valencia CF', years: '2017–21' }
    ],
    awards: ['유로 2024 우승', '스페인 국가대표', 'La Liga 우승 2024–25']
  },
  {
    num: 19, posGroup: 'FW', pos: 'RW',
    name: '로니 바르지', nat: '🇸🇪 Sweden', age: 20,
    height: '176cm', foot: '왼발', born: '2005.01.20',
    bio: '스웨덴/시리아 이중국적의 20세 유망주. FC 코펜하겐에서 발탁된 오른쪽 윙어로, 야말의 백업 역할을 맡는다. 빠른 발과 돌파력이 무기인 차세대 공격수. 시장가치 1,000만 €.',
    stat1: { val: '유망주', lbl: '롤' }, stat2: { val: '20세', lbl: '나이' },
    seasonStats: [
      { lbl: '출장', val: 16, max: 38 },
      { lbl: '공격 포인트', val: 30, max: 100 },
      { lbl: '드리블 성공', val: 68, max: 100 }
    ],
    career: [
      { club: 'FC 바르셀로나', years: '2025–현재' },
      { club: 'FC Copenhagen', years: '2022–25' }
    ],
    awards: ['스웨덴 U21 국가대표', '덴마크 슈퍼리가 우승']
  }
];


/* ============================
   스쿼드 렌더링
   ============================ */
function renderSquad(filter = 'all') {
  const track = document.getElementById('carouselTrack');
  track.innerHTML = '';

  const list = filter === 'all'
    ? squadData
    : squadData.filter(p => p.posGroup === filter);

  list.forEach(p => {
    const card = document.createElement('div');
    card.className = 'player-card';
    card.dataset.posGroup = p.posGroup;
    card.innerHTML = `
      <div class="player-card-header">
        <div class="player-num-bg">${p.num}</div>
        <div class="player-pos-badge">${p.pos}</div>
        <div class="player-num-label">#${p.num}</div>
      </div>
      <div class="player-card-body">
        <div class="player-name">${p.name}</div>
        <div class="player-nat">${p.nat} · ${p.age}세</div>
        <p class="player-bio">${p.bio}</p>
        <div class="player-stats-row">
          <div class="ps">
            <span class="ps-val">${p.stat1.val}</span>
            <span class="ps-lbl">${p.stat1.lbl}</span>
          </div>
          <div class="ps">
            <span class="ps-val">${p.stat2.val}</span>
            <span class="ps-lbl">${p.stat2.lbl}</span>
          </div>
        </div>
      </div>
    `;
    // 드래그 중 클릭 방지
    let dragMoved = false;
    card.addEventListener('mousedown', () => { dragMoved = false; });
    card.addEventListener('mousemove', () => { dragMoved = true; });
    card.addEventListener('mouseup', () => { if (!dragMoved) openModal(p); });
    card.addEventListener('touchend', () => openModal(p), { passive: true });
    track.appendChild(card);
  });

  updateProgress();
}


/* ============================
   모달 — 열기 / 닫기
   ============================ */
const modalOverlay = document.getElementById('modalOverlay');
const modalInner   = document.getElementById('modalInner');

const posGroupColors = {
  GK:  { header: 'linear-gradient(135deg,#2a1f00,#1a1400)', badge: 'rgba(237,187,0,0.15)', color: 'var(--gold)',  border: 'rgba(237,187,0,0.3)' },
  DEF: { header: 'linear-gradient(135deg,#001a3d,#000d24)', badge: 'rgba(0,77,152,0.2)',   color: '#5fa3ff',      border: 'rgba(0,77,152,0.4)' },
  MID: { header: 'linear-gradient(135deg,#001a10,#000f09)', badge: 'rgba(0,180,100,0.15)', color: '#4dd68c',      border: 'rgba(0,180,100,0.3)' },
  FW:  { header: 'linear-gradient(135deg,#2a0015,#1a000d)', badge: 'rgba(165,0,68,0.18)',  color: '#ff6aa3',      border: 'rgba(165,0,68,0.35)' }
};

function openModal(p) {
  const c = posGroupColors[p.posGroup];

  const barsHtml = p.seasonStats.map(s => `
    <div class="stat-bar-row">
      <span class="stat-bar-lbl">${s.lbl}</span>
      <div class="stat-bar-track">
        <div class="stat-bar-fill" data-pct="${s.val}" style="background:${c.color}"></div>
      </div>
      <span class="stat-bar-val">${s.val}${s.lbl === '득점' || s.lbl === '공격 포인트' || s.lbl.includes('률') || s.lbl.includes('승리') || s.lbl.includes('성공') || s.lbl.includes('탈취') || s.lbl.includes('인터') || s.lbl.includes('드리블') || s.lbl.includes('압박') || s.val > 20 ? '%' : ''}</span>
    </div>
  `).join('');

  const careerHtml = p.career.map(c => `
    <div class="career-item">
      <span class="career-club">${c.club}</span>
      <span class="career-years">${c.years}</span>
    </div>
  `).join('');

  const awardsHtml = p.awards.map(a => `<span class="award-chip">🏅 ${a}</span>`).join('');

  modalInner.innerHTML = `
    <div class="modal-header">
      <div class="modal-header-bg" style="background:${c.header}"></div>
      <div class="modal-big-number">${p.num}</div>
      <div class="modal-header-info">
        <span class="modal-pos-badge" style="background:${c.badge};color:${c.color};border:1px solid ${c.border}">${p.pos}</span>
        <div class="modal-player-name">${p.name}</div>
        <div class="modal-player-nat">${p.nat}</div>
      </div>
    </div>
    <div class="modal-body">
      <div class="modal-chips">
        <div class="modal-chip"><span class="modal-chip-val">#${p.num}</span><span class="modal-chip-lbl">등번호</span></div>
        <div class="modal-chip"><span class="modal-chip-val">${p.age}세</span><span class="modal-chip-lbl">나이</span></div>
        <div class="modal-chip"><span class="modal-chip-val">${p.height}</span><span class="modal-chip-lbl">신장</span></div>
        <div class="modal-chip"><span class="modal-chip-val">${p.foot}</span><span class="modal-chip-lbl">주발</span></div>
        <div class="modal-chip"><span class="modal-chip-val">${p.born}</span><span class="modal-chip-lbl">생년월일</span></div>
      </div>
      <div>
        <div class="modal-bio">${p.bio}</div>
      </div>
      <div>
        <div class="modal-section-title">2024–25 시즌 스탯</div>
        <div class="stat-bars">${barsHtml}</div>
      </div>
      <div>
        <div class="modal-section-title">커리어</div>
        <div class="career-list">${careerHtml}</div>
      </div>
      <div>
        <div class="modal-section-title">수상 & 경력</div>
        <div class="awards-list">${awardsHtml}</div>
      </div>
    </div>
  `;

  modalOverlay.classList.add('active');
  document.body.style.overflow = 'hidden';

  // 스탯 바 애니메이션 (약간의 딜레이 후 실행)
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      modalInner.querySelectorAll('.stat-bar-fill').forEach(bar => {
        bar.style.width = bar.dataset.pct + '%';
      });
    });
  });
}

function closeModal() {
  modalOverlay.classList.remove('active');
  document.body.style.overflow = '';
}

document.getElementById('modalClose').addEventListener('click', closeModal);
modalOverlay.addEventListener('click', e => { if (e.target === modalOverlay) closeModal(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });


/* ============================
   캐러셀 — 드래그 스크롤
   ============================ */
const track = document.getElementById('carouselTrack');
let isDragging = false;
let startX = 0;
let scrollStart = 0;

track.addEventListener('mousedown', e => {
  isDragging = true;
  startX = e.pageX;
  scrollStart = track.scrollLeft;
  track.classList.add('is-dragging');
});

document.addEventListener('mouseup', () => {
  isDragging = false;
  track.classList.remove('is-dragging');
});

document.addEventListener('mousemove', e => {
  if (!isDragging) return;
  e.preventDefault();
  const dx = e.pageX - startX;
  track.scrollLeft = scrollStart - dx;
  updateProgress();
});

// 터치 지원
track.addEventListener('touchstart', e => {
  startX = e.touches[0].pageX;
  scrollStart = track.scrollLeft;
}, { passive: true });

track.addEventListener('touchmove', e => {
  const dx = e.touches[0].pageX - startX;
  track.scrollLeft = scrollStart - dx;
  updateProgress();
}, { passive: true });

track.addEventListener('scroll', updateProgress, { passive: true });


/* ============================
   캐러셀 — 화살표 버튼
   ============================ */
const SCROLL_AMOUNT = 580;

document.getElementById('carouselPrev').addEventListener('click', () => {
  track.scrollBy({ left: -SCROLL_AMOUNT, behavior: 'smooth' });
});

document.getElementById('carouselNext').addEventListener('click', () => {
  track.scrollBy({ left: SCROLL_AMOUNT, behavior: 'smooth' });
});


/* ============================
   캐러셀 — 진행바 업데이트
   ============================ */
function updateProgress() {
  const bar  = document.getElementById('carouselProgress');
  const hint = document.getElementById('carouselHint');
  const max  = track.scrollWidth - track.clientWidth;
  const pct  = max > 0 ? (track.scrollLeft / max) * 100 : 0;
  bar.style.width = pct + '%';

  if (pct > 2) hint.classList.add('hidden');
  else hint.classList.remove('hidden');
}


/* ============================
   포지션 필터
   ============================ */
document.querySelectorAll('.squad-filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.squad-filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    renderSquad(btn.dataset.pos);
    track.scrollLeft = 0;
  });
});


/* ============================
   클럽 역사 데이터
   ============================ */
const historyData = [
  {
    year: '1899',
    badge: 'event',
    title: '클럽 창단',
    desc: '스위스 출신 조안 감페르가 카탈루냐 청년들과 함께 FC 바르셀로나를 창단했다. 단순한 스포츠 클럽을 넘어 카탈루냐 정체성의 상징이 됐다.',
    highlight: false
  },
  {
    year: '1909',
    badge: 'event',
    title: '카탈루냐 최초의 전용 구장',
    desc: '당시로서는 최대 규모인 6,000석 규모의 구장을 열었다. 팀의 성장과 함께 홈 무대도 계속 확장됐다.',
    highlight: false
  },
  {
    year: '1929',
    badge: 'trophy',
    title: '라리가 초대 우승',
    desc: '스페인 1부 리그(라리가) 창설 첫 시즌에 우승을 차지하며 스페인 최강 클럽으로 첫발을 내딛었다.',
    highlight: false
  },
  {
    year: '1943',
    badge: 'event',
    title: '코파 델 헤네랄리시모 — 0-11 패배',
    desc: '프랑코 독재 정권 아래 레알 마드리드와의 준결승에서 11골을 내줬다. 정치적 압박이 있었다고 알려진, 클럽 역사에서 가장 아픈 기억 중 하나.',
    highlight: false
  },
  {
    year: '1957',
    badge: 'event',
    title: '캄 노우 개장',
    desc: '세계 최대 규모의 축구 전용 구장 캄 노우(Camp Nou)가 문을 열었다. 수용 인원 99,354명으로 유럽 최대 규모다.',
    highlight: true
  },
  {
    year: '1974',
    badge: 'era',
    title: '요한 크루이프 가입',
    desc: '네덜란드의 천재 크루이프가 입단하며 바르샤에 토탈 풋볼 철학을 심었다. 이 시기 라리가 우승을 달성하며 화려한 축구의 기반을 닦았다.',
    highlight: false
  },
  {
    year: '1992',
    badge: 'trophy',
    title: '첫 번째 유러피언 컵 — 웸블리',
    desc: '요한 크루이프 감독이 이끄는 드림팀이 웸블리에서 삼프도리아를 꺾고 클럽 역사상 첫 유러피언 컵을 들어 올렸다.',
    highlight: true
  },
  {
    year: '2004',
    badge: 'era',
    title: '리오넬 메시 1군 데뷔',
    desc: '17세의 메시가 1군 무대에 처음 올랐다. 이후 19년간 클럽의 모든 기록을 갈아치우며 역사상 최고의 선수로 자리매김했다.',
    highlight: true
  },
  {
    year: '2009',
    badge: 'record',
    title: '역사적인 트레블 — 과르디올라 혁명',
    desc: '펩 과르디올라 감독 부임 첫 시즌에 라리가·코파 델 레이·UEFA 챔피언스리그 트레블을 달성했다. 이후 슈퍼컵까지 더해 역사상 첫 섹스투플을 기록했다.',
    highlight: true
  },
  {
    year: '2011',
    badge: 'trophy',
    title: 'UCL 결승 — 웸블리에서 맨유 격파',
    desc: '과르디올라의 바르샤가 최전성기를 맞이한 해. 웸블리에서 맨체스터 유나이티드를 3-1로 꺾고 역사상 가장 완벽한 팀으로 평가받았다.',
    highlight: true
  },
  {
    year: '2015',
    badge: 'trophy',
    title: '루이스 엔리케와 두 번째 트레블',
    desc: '루이스 수아레스, 네이마르와 함께 메시·수아레스·네이마르(MSN) 공격 라인을 구성하며 다시 트레블을 달성. 역사상 최강 공격진 중 하나로 꼽힌다.',
    highlight: false
  },
  {
    year: '2017',
    badge: 'event',
    title: 'UCL — 파리에서의 기적 역전',
    desc: '파리에 0-4로 완패한 뒤 홈 2차전에서 6-1 역전승을 거두며 "라 레몬타다"를 완성했다. 축구 역사에 길이 남을 기적적인 대역전극.',
    highlight: true
  },
  {
    year: '2023',
    badge: 'trophy',
    title: '샤비 감독, 라리가 우승 탈환',
    desc: '클럽 레전드 샤비 에르난데스가 감독으로 부임한 뒤 레알 마드리드를 따돌리고 4년 만에 라리가 우승을 되찾았다.',
    highlight: false
  },
  {
    year: '2024',
    badge: 'event',
    title: '라민 야말 — 유로 최연소 MVP',
    desc: '2007년생 라민 야말이 유로 2024에서 스페인의 우승을 이끌며 MVP에 선정됐다. 사상 최연소 기록을 연이어 갈아치우며 다음 세대의 슈퍼스타로 등극했다.',
    highlight: true
  },
  {
    year: '2024',
    badge: 'era',
    title: '한지 플리크 감독 부임',
    desc: '샤비의 뒤를 이어 독일 출신 한지 플리크가 2024-25 시즌부터 바르셀로나를 이끌고 있다. 강도 높은 압박과 빠른 전환 축구를 앞세워 라리가·UCL 동시 도전 중.',
    highlight: false
  }
];


/* ============================
   타임라인 렌더링
   ============================ */
function renderTimeline() {
  const container = document.getElementById('timeline');
  container.innerHTML = '';

  historyData.forEach(item => {
    const row = document.createElement('div');
    row.className = 'tl-item' + (item.highlight ? ' tl-highlight' : '');

    const badgeMap = { trophy: '🏆 트로피', era: '⚡ 시대', event: '📌 사건', record: '🌟 기록' };

    row.innerHTML = `
      <div class="tl-content">
        <div class="tl-year">${item.year}</div>
        <div class="tl-card">
          <span class="tl-badge tl-badge--${item.badge}">${badgeMap[item.badge]}</span>
          <div class="tl-title">${item.title}</div>
          <p class="tl-desc">${item.desc}</p>
        </div>
      </div>
      <div class="tl-dot"><div class="tl-dot-circle"></div></div>
      <div class="tl-empty"></div>
    `;
    container.appendChild(row);
  });

  // 스크롤 애니메이션
  const tlObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add('tl-visible'), i * 60);
        tlObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  container.querySelectorAll('.tl-item').forEach(el => tlObserver.observe(el));
}


/* ============================
   경기 결과 데이터
   ============================ */
const matchData = [
  {
    competition: 'La Liga · R.38',
    date: '2025.05.26',
    home: 'Athletic Bilbao',
    score: '0 — 3',
    away: 'FC Barcelona',
    outcome: 'win',
    review: '시즌 최종전. 야말·하피냐·레반도프스키 1골씩. 완벽한 마무리.'
  },
  {
    competition: 'La Liga · R.37',
    date: '2025.05.19',
    home: 'FC Barcelona',
    score: '2 — 3',
    away: 'Villarreal',
    outcome: 'loss',
    review: '후반 막판 역전을 허용하며 홈에서 충격의 패배. 아쉬운 경기.'
  },
  {
    competition: 'La Liga · R.36',
    date: '2025.05.16',
    home: 'Espanyol',
    score: '0 — 2',
    away: 'FC Barcelona',
    outcome: 'win',
    review: '데르비 카탈라냐. 발데·페르민 골로 더비 완승. 원정팬들 환호.'
  },
  {
    competition: 'La Liga · R.35',
    date: '2025.05.11',
    home: 'FC Barcelona',
    score: '4 — 3',
    away: 'Real Madrid',
    outcome: 'win',
    review: '시즌 최고의 경기. 홈 엘 클라시코 4-3 대승. 야말 2골 포함 팀 전체가 빛났다.'
  },
  {
    competition: 'La Liga · R.34',
    date: '2025.05.04',
    home: 'Real Valladolid',
    score: '1 — 2',
    away: 'FC Barcelona',
    outcome: 'win',
    review: '강등권 팀 원정에서 진땀 승리. 레반도프스키 결승골.'
  },
  {
    competition: 'La Liga · R.32',
    date: '2025.04.23',
    home: 'FC Barcelona',
    score: '1 — 0',
    away: 'RCD Mallorca',
    outcome: 'win',
    review: '페드리의 결승 프리킥으로 1-0 승리. 수비 안정감도 돋보인 경기.'
  },
  {
    competition: 'La Liga · R.31',
    date: '2025.04.19',
    home: 'FC Barcelona',
    score: '4 — 3',
    away: 'Celta de Vigo',
    outcome: 'win',
    review: '7골의 난타전. 후반 역전극으로 승리. 하피냐 멀티골 활약.'
  },
  {
    competition: 'La Liga · R.30',
    date: '2025.04.13',
    home: 'CD Leganés',
    score: '0 — 1',
    away: 'FC Barcelona',
    outcome: 'win',
    review: '단단한 수비와 카사도의 미드필드 지배로 1-0 원정 승리.'
  },
  {
    competition: 'La Liga · R.29',
    date: '2025.04.06',
    home: 'FC Barcelona',
    score: '1 — 1',
    away: 'Real Betis',
    outcome: 'draw',
    review: '후반 동점 허용. 승점 2점을 놓친 아쉬운 홈 무승부.'
  },
  {
    competition: 'La Liga · R.28',
    date: '2025.03.30',
    home: 'FC Barcelona',
    score: '4 — 1',
    away: 'Girona',
    outcome: 'win',
    review: '야말 1골 2어시스트 맹활약. 4-1 완승으로 라리가 선두 굳히기.'
  }
];


/* ============================
   뉴스 데이터
   ============================ */
const newsData = [
  {
    cat: 'transfer',
    date: '2025.06.15',
    title: '호안 가르시아, 2,500만 유로에 정식 영입 완료',
    desc: '에스파뇰 출신의 24세 골키퍼 호안 가르시아가 바르셀로나 새 주전 GK로 낙점됐다. 계약기간은 2031년까지이며, 발롱도르 후보급 퍼포먼스를 기대받고 있다.',
    source: 'Transfermarkt'
  },
  {
    cat: 'transfer',
    date: '2025.06.10',
    title: '마르쿠스 래쉬포드, 맨유에서 임대 합류',
    desc: '잉글랜드 국가대표 공격수 마르쿠스 래쉬포드가 맨체스터 유나이티드에서 임대 형태로 바르셀로나에 합류했다. 플리크 감독의 강력한 요청으로 성사된 이적이다.',
    source: 'Transfermarkt'
  },
  {
    cat: 'transfer',
    date: '2025.06.05',
    title: '로니 바르지, FC 코펜하겐에서 영입',
    desc: '스웨덴/시리아 이중국적의 20세 유망주 로니 바르지가 250만 유로에 합류. 라민 야말의 백업 겸 차세대 오른쪽 윙어로 기대를 모으고 있다.',
    source: 'Transfermarkt'
  },
  {
    cat: 'club',
    date: '2025.06.01',
    title: '라민 야말, 메시의 #10 등번호 공식 계승',
    desc: '2007년생 라민 야말이 다음 시즌부터 FC 바르셀로나의 #10 등번호를 달게 됐다. 리오넬 메시가 바르셀로나를 떠난 뒤 주인을 찾지 못했던 상징적인 번호를 야말이 이어받았다.',
    source: 'FC Barcelona Official'
  },
  {
    cat: 'match',
    date: '2025.05.26',
    title: '시즌 최종전 빌바오 원정 3-0 완승으로 마무리',
    desc: '2024-25 라리가 최종전에서 애슬레틱 빌바오를 3-0으로 꺾으며 시즌을 마무리했다. 야말·하피냐·레반도프스키가 1골씩 나눠 가졌다.',
    source: 'La Liga'
  },
  {
    cat: 'match',
    date: '2025.05.11',
    title: '홈 엘 클라시코 4-3 대승 — 야말 2골 폭발',
    desc: '캄 노우에서 펼쳐진 엘 클라시코에서 레알 마드리드를 4-3으로 꺾었다. 야말이 2골을 터트리며 팀의 승리를 이끌었고, 역대 최고의 엘 클라시코 중 하나로 평가받고 있다.',
    source: 'La Liga'
  },
  {
    cat: 'club',
    date: '2025.05.01',
    title: '파우 쿠바르시, 등번호 #5로 변경 — 푸욜 오마주',
    desc: '바르셀로나의 레전드 카를레스 푸욜이 달았던 #5 등번호를 파우 쿠바르시가 이어받는다. 19세의 나이에 바르샤를 대표하는 번호를 달게 된 쿠바르시의 성장에 팬들의 관심이 집중되고 있다.',
    source: 'FC Barcelona Official'
  },
  {
    cat: 'club',
    date: '2025.04.20',
    title: '라리가 시장가치 업데이트 — 페드리 1.4억 €, 야말 2억 €',
    desc: '트랜스퍼마켓 최신 업데이트에서 라민 야말의 시장가치가 2억 유로로 확정됐다. 페드리는 1억 4천만 유로로 미드필더 세계 최고 수준을 유지하며 팀의 핵심 자산으로 평가받고 있다.',
    source: 'Transfermarkt'
  },
  {
    cat: 'transfer',
    date: '2025.04.10',
    title: '주앙 칸셀로, 바르셀로나 공식 합류 확정',
    desc: '포르투갈 국가대표 풀백 주앙 칸셀로가 알힐랄을 거쳐 바르셀로나에 합류했다. 맨시티·유벤투스 시절 최정상급 기량을 발휘했던 칸셀로가 베테랑 옵션으로 합류해 팀의 깊이를 더한다.',
    source: 'Transfermarkt'
  },
  {
    cat: 'club',
    date: '2025.03.22',
    title: '한지 플리크 감독, 2024-25 시즌 성적 평가',
    desc: '취임 첫 시즌에 공격적이고 역동적인 축구로 라리가 상위권을 유지한 플리크 감독. 야말·쿠바르시 등 젊은 선수들을 키워내며 바르셀로나 재건에 성공적이라는 평가를 받고 있다.',
    source: 'FC Barcelona Official'
  }
];


/* ============================
   경기 결과 렌더링
   ============================ */
function renderResults() {
  const list = document.getElementById('resultsList');
  list.innerHTML = '';

  matchData.forEach((m, i) => {
    const outcomeLabel = { win: '승리', draw: '무승부', loss: '패배' }[m.outcome];
    const outcomeClass = `outcome-${m.outcome}`;

    const row = document.createElement('div');
    row.className = 'result-row';
    row.style.animationDelay = `${i * 0.07}s`;
    row.innerHTML = `
      <div class="result-meta">
        <span class="result-comp">${m.competition}</span>
        <span class="result-date">${m.date}</span>
      </div>
      <div class="result-teams">
        <div class="result-score">${m.score}</div>
        <span class="result-outcome ${outcomeClass}">${outcomeLabel}</span>
      </div>
      <div class="result-review">${m.review}</div>
    `;
    list.appendChild(row);
  });
}


/* ============================
   뉴스 렌더링
   ============================ */
function renderNews(filter = 'all') {
  const grid = document.getElementById('newsGrid');
  grid.innerHTML = '';

  const list = filter === 'all' ? newsData : newsData.filter(n => n.cat === filter);
  const catLabel = { transfer: '이적', match: '경기', club: '클럽' };

  list.forEach((n, i) => {
    const card = document.createElement('div');
    card.className = 'news-card';
    card.dataset.cat = n.cat;
    card.style.animationDelay = `${i * 0.06}s`;
    card.innerHTML = `
      <div class="news-card-top">
        <span class="news-badge news-badge--${n.cat}">${catLabel[n.cat]}</span>
        <span class="news-date">${n.date}</span>
      </div>
      <div class="news-title">${n.title}</div>
      <p class="news-desc">${n.desc}</p>
      <div class="news-source">출처: ${n.source}</div>
    `;
    grid.appendChild(card);
  });
}

/* 뉴스 필터 버튼 */
document.querySelectorAll('.news-filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.news-filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    renderNews(btn.dataset.cat);
  });
});


/* ============================
   모바일 네비게이션
   ============================ */
const navToggle = document.getElementById('navToggle');
const navLinks  = document.getElementById('navLinks');

navToggle.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  navToggle.setAttribute('aria-label', isOpen ? '메뉴 닫기' : '메뉴 열기');
});

navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});


/* ============================
   스크롤 시 navbar 스타일
   ============================ */
const navbar = document.getElementById('navbar');

function handleNavScroll() {
  navbar.classList.toggle('scrolled', window.scrollY > 40);
}

window.addEventListener('scroll', handleNavScroll, { passive: true });
handleNavScroll();


/* ============================
   AOS
   ============================ */
const aosObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('aos-visible');
      aosObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('[data-aos]').forEach(el => aosObserver.observe(el));


/* ============================
   숫자 카운트 업
   ============================ */
function animateCount(el, target, duration = 1400) {
  const start = performance.now();
  const update = (now) => {
    const progress = Math.min((now - start) / duration, 1);
    const ease = 1 - Math.pow(1 - progress, 3);
    el.textContent = Math.round(ease * target);
    if (progress < 1) requestAnimationFrame(update);
  };
  requestAnimationFrame(update);
}

const statObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const el = entry.target;
      animateCount(el, parseInt(el.dataset.target, 10));
      statObserver.unobserve(el);
    }
  });
}, { threshold: 0.5 });

document.querySelectorAll('.stat-number[data-target]').forEach(el => statObserver.observe(el));


/* ============================
   초기 렌더
   ============================ */
renderResults();
renderSquad();
renderNews();
renderTimeline();
