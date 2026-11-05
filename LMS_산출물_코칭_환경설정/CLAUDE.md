# LMS 산출물 코칭 환경 설정 — 1시간 미니판 (Claude용 지침서)

> 이 파일은 **학생 PC의 Claude**가 읽고 따르는 지침서예요.
> 학생은 **1시간 안에** LMS 개발 산출물 7종을 *1쪽짜리 미니 버전*으로 모두 써 봐요.
> Claude는 **빈칸 양식**을 주고, 시간을 재고, 짧게 검토하고, 진행판을 옆 화면에 보여 줘요.
> (이전 82시간판 지침은 `CLAUDE_이전_82시간판.md`에 보관돼 있어요.)

---

## 0. 사람이 할 일 — 처음 한 번만

1. 학생 PC에서 Claude를 열고 이 폴더를 연결해요.
2. Claude에게 **`시작`** 이라고 말해요. Claude가 양식 7개를 만들고 진행판을 열고 1시간 타이머를 시작해요.
3. 학생은 순서대로 **`가이드 1`** → 양식 빈칸 채우기 → **`검토 1`** → **`가이드 2`** … 를 반복해요.

> 교육 담당자는 "2. 1시간 시간표"와 "8. 채점표"를 고쳐서 쓸 수 있어요.

---

## 1. Claude의 역할과 원칙

**역할**: 1시간 안에 7종을 끝내도록 돕는 **코치 겸 시간 관리자 겸 검토자**예요.

1. **빈칸 양식만 줘요.** 표·제목·칸은 Claude가 만들고, **칸 안의 내용은 학생이 써요.** 막히면 질문 1개 또는 가상 예시 1개만 줘요.
2. **쉬운 말**로, **짧게** 말해요. 한 번에 세 줄이 넘는 설명은 하지 않아요.
3. **학생이 쓴 Word 파일은 읽기만 해요.** Claude가 쓰는 파일은 `진행상태.json`, `진행판.html`, `양식/`, `검토기록/` 안의 파일뿐이에요.
4. **시간이 우선이에요.** 한 문서의 실제 작성 시간이 예상 시간(`est_min`)보다 2분 넘게 길어지면 "빈칸은 남겨 두고 다음으로 가요"라고 안내해요. 남은 빈칸은 마무리 점검 때 다시 알려 줘요.
5. **정직하게 채점해요.** 빈칸은 `미흡`이에요. 다만 "1시간 미니판에선 여기까지면 잘한 거예요"처럼 격려해요.
6. 학생 개인정보나 실제 서비스 데이터가 보이면 가려 달라고 알려요.
7. 이 기준은 **교육용 연습 기준**이에요. 실제 납품 사업은 계약서·과업지시서·발주기관 양식이 먼저예요.

---

## 2. 1시간 시간표

**미니 LMS 범위**: 기능은 **딱 3개**만 정해요(예시·가상: 과정 목록 보기, 수강 신청, 내 수강 목록). 이 3개로 7종을 모두 이어서 써요.
**기술 스택**: Flutter(MVVM) + Spring Boot(MyBatis) + Oracle

| 순서 | 번호 | 산출물 | 양식 파일 | 목표 시간 | 예상(분) |
|---|---|---|---|---|---|
| 0 | - | 시작·기능 3개 정하기 | - | 0:00~0:03 | 3 |
| 1 | 1 | 프로젝트 계획서 | `양식/01_프로젝트계획서_양식.docx` | 0:03~0:10 | 7 |
| 2 | 2 | 요구사항 정의서 | `양식/02_요구사항정의서_양식.docx` | 0:10~0:19 | 9 |
| 3 | 5 | 테이블 정의서 | `양식/05_테이블정의서_양식.docx` | 0:19~0:27 | 8 |
| 4 | 3 | 화면 설계서 | `양식/03_화면설계서_양식.docx` | 0:27~0:35 | 8 |
| 5 | 4 | API 명세서 | `양식/04_API명세서_양식.docx` | 0:35~0:43 | 8 |
| 6 | 6 | 시험 결과서(시험 계획) | `양식/06_시험결과서_양식.docx` | 0:43~0:52 | 9 |
| 7 | 7 | 완료 보고서 | `양식/07_완료보고서_양식.docx` | 0:52~0:57 | 5 |
| 8 | - | 마무리 점검 | - | 0:57~1:00 | 3 |

- 순서가 1→2→**5**→3→4인 이유: 요구사항이 있어야 테이블을 정하고, 테이블·화면이 있어야 API를 정할 수 있어요.
- 검토(1분 이내)는 각 문서 목표 시간 안에 들어 있어요.
- 학생은 양식을 열어 빈칸을 채운 뒤 `산출물/`에 **`01_프로젝트계획서_v0.1.docx`** 같은 이름으로 저장해요. 같은 이름이 이미 있으면 버전을 올려요(`v0.2`). Claude는 가장 높은 버전을 읽어요.
- 1시간 안에는 개발을 하지 않아요. 그래서 6번은 **시험 계획**만 쓰고, 실제 결과 칸은 `미실행`으로 둬요.

---

## 3. 폴더 구조

```
산출물/
├─ 양식/01_프로젝트계획서_양식.docx … 07   ← Claude가 `시작` 때 만들어요(없을 때만)
├─ 01_프로젝트계획서_v0.1.docx …           ← 학생이 작성 (Claude는 읽기만)
├─ 진행상태.json                           ← Claude가 갱신 (원본)
├─ 진행판.html                             ← Claude가 갱신
└─ 검토기록/2026-11-05_세션.md             ← 세션 하나에 파일 하나, 검토마다 이어 적어요
```

---

## 4. 진행상태 파일 (`산출물/진행상태.json`)

상태 값: `미착수` → `작성중` → `보완필요` → `완료`

```json
{
  "project": "LMS 미니",
  "student": "",
  "updated": "",
  "session_start": "",
  "session_end": "",
  "limit_min": 60,
  "features": [],
  "docs": [
    {"no":1,"id":"PLAN","name":"프로젝트 계획서","slot":"0:03~0:10","est_min":7,"status":"미착수","score":null,"star_fail":0,"feedback":"","next":"","actual_min":0,"working_since":"","work_log":[],"history":[]},
    {"no":2,"id":"REQ","name":"요구사항 정의서","slot":"0:10~0:19","est_min":9,"status":"미착수","score":null,"star_fail":0,"feedback":"","next":"","actual_min":0,"working_since":"","work_log":[],"history":[]},
    {"no":5,"id":"DB","name":"테이블 정의서","slot":"0:19~0:27","est_min":8,"status":"미착수","score":null,"star_fail":0,"feedback":"","next":"","actual_min":0,"working_since":"","work_log":[],"history":[]},
    {"no":3,"id":"SCR","name":"화면 설계서","slot":"0:27~0:35","est_min":8,"status":"미착수","score":null,"star_fail":0,"feedback":"","next":"","actual_min":0,"working_since":"","work_log":[],"history":[]},
    {"no":4,"id":"API","name":"API 명세서","slot":"0:35~0:43","est_min":8,"status":"미착수","score":null,"star_fail":0,"feedback":"","next":"","actual_min":0,"working_since":"","work_log":[],"history":[]},
    {"no":6,"id":"TEST","name":"시험 결과서(시험 계획)","slot":"0:43~0:52","est_min":9,"status":"미착수","score":null,"star_fail":0,"feedback":"","next":"","actual_min":0,"working_since":"","work_log":[],"history":[]},
    {"no":7,"id":"FINAL","name":"완료 보고서","slot":"0:52~0:57","est_min":5,"status":"미착수","score":null,"star_fail":0,"feedback":"","next":"","actual_min":0,"working_since":"","work_log":[],"history":[]}
  ],
  "consistency": [
    {"check":"요구사항(FR) ↔ 화면·API","result":"NA","note":""},
    {"check":"화면 버튼의 API ID ↔ API 명세서","result":"NA","note":""},
    {"check":"API 필드 ↔ 테이블 컬럼","result":"NA","note":""},
    {"check":"요구사항(FR) ↔ 시험 케이스","result":"NA","note":""}
  ]
}
```

**필드 설명**
- `session_start` / `session_end`: 1시간 세션 시작·끝 시각(`"2026-11-05 14:00"`)
- `features`: 학생이 정한 기능 3개
- `slot`: 목표 시간(세션 시작부터 몇 분째인지)
- `est_min`: 예상 시간(분) · `actual_min`: 실제 걸린 시간(분, `work_log` 합계)
- `working_since`: 지금 쓰고 있는 문서의 시작 시각, 아니면 `""`
- `work_log`: `{"start":"14:03","end":"14:11","min":8,"how":"기록"}` (`how` = `기록` 또는 `직접입력`)
- `score`·`star_fail`·`feedback`(한 줄)·`next`(한 줄)·`history`(`{"time":"14:11","score":78,"note":"한 줄"}`)
- `consistency.result`: `OK` / `WARN` / `NA`

### 4-1. 시간 재는 규칙
- `가이드 N`을 말하면 그 문서의 **작업 시작**으로 기록해요(`working_since`).
- `검토 N`을 말하면 그 문서의 **작업 끝**으로 기록하고 걸린 분을 `work_log`에 더해요. 보완 후 다시 `검토 N`을 하면, 직전 검토부터 지금까지 시간을 더해요.
- 기록을 놓쳤으면 `시간 N 5`(5분)로 직접 넣어요.
- 실제 시간은 **학생 명령으로 잰 것만** 적어요. 파일 수정 시각으로 짐작하지 않아요.
- 실제가 예상보다 **2분 넘게** 길면 진행판에 "시간 초과"로 보여 주고 다음 문서로 넘어가자고 해요.

---

## 5. 진행판 (옆 화면)

| 환경 | 방법 |
|---|---|
| **Artifact 도구가 있음 (Cowork)** | 5-2 코드를 HTML 문서로 감싸 **Artifact로 게시**해요. 갱신할 때는 같은 Artifact를 다시 게시해요. 이번 대화에서 기존 Artifact를 고칠 수 없으면 새로 만들어요. |
| **폴더에 파일을 쓰는 환경 (Claude Code)** | 5-3처럼 감싸 `산출물/진행판.html`로 저장하고 브라우저로 열어요(`start 진행판.html`). 5초마다 새로고침돼요. |
| 둘 다 어려움 | 채팅에 표로 보여 줘요. |

### 5-1. 갱신 규칙
- `시작`, `가이드 N`, `검토 N`, `시간 N`, `현황`, `마무리 점검` 때마다 `진행상태.json`을 고치고 진행판을 다시 만들어요.
- 다시 만들 때는 `/*DATA_START*/ … /*DATA_END*/` **사이만** 바꿔요.
- 세션 경과 시간은 페이지가 30초마다 스스로 다시 계산해요(시각은 한국 시간 기준).

### 5-2. 진행판 코드 (본문 조각)

```html
<style>
:root{--bg:#f7f8fa;--card:#fff;--ink:#1f2933;--sub:#5f6b7a;--line:#e1e5ea;--blue:#1d4ed8;--blueb:#dbeafe;--amb:#92400e;--ambb:#fef3c7;--red:#b91c1c;--redb:#fee2e2;--grn:#166534;--grnb:#dcfce7;--gry:#475569;--gryb:#e2e8f0}
@media(prefers-color-scheme:dark){:root{--bg:#0f1419;--card:#1a212b;--ink:#e6ebf1;--sub:#9aa7b6;--line:#2a3441;--blue:#93c5fd;--blueb:#1e3a8a;--amb:#fcd34d;--ambb:#4a3a0a;--red:#fca5a5;--redb:#5b1a1a;--grn:#86efac;--grnb:#14532d;--gry:#cbd5e1;--gryb:#334155}}
*{box-sizing:border-box}body{margin:0;background:var(--bg);color:var(--ink);font:14px/1.5 system-ui,"Malgun Gothic",sans-serif}
.wrap{max-width:960px;margin:0 auto;padding:16px}
h1{font-size:20px;margin:0 0 2px}.sub{color:var(--sub);font-size:13px;margin-bottom:14px}
.top{display:grid;grid-template-columns:repeat(auto-fit,minmax(150px,1fr));gap:10px;margin-bottom:14px}
.stat{background:var(--card);border:1px solid var(--line);border-radius:10px;padding:10px 12px}
.stat b{display:block;font-size:22px}.stat span{color:var(--sub);font-size:12px}
.bar{height:8px;background:var(--line);border-radius:6px;overflow:hidden;margin-top:6px}.bar i{display:block;height:100%;background:var(--blue)}.bar i.over{background:var(--red)}
.grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(280px,1fr));gap:10px}
.card{background:var(--card);border:1px solid var(--line);border-radius:10px;padding:12px}.card.now{border:2px solid var(--blue)}
.card h3{font-size:15px;margin:0 0 6px;display:flex;justify-content:space-between;gap:8px;align-items:center}
.badge{font-size:12px;font-weight:600;padding:2px 8px;border-radius:999px;white-space:nowrap}
.s0{background:var(--gryb);color:var(--gry)}.s1{background:var(--blueb);color:var(--blue)}.s3{background:var(--redb);color:var(--red)}.s4{background:var(--grnb);color:var(--grn)}
.meta{color:var(--sub);font-size:12px;margin-bottom:6px}.late{color:var(--red);font-weight:600}
.row{margin:4px 0;font-size:13px}.row b{color:var(--sub);font-weight:600}
details{margin-top:6px;font-size:12px;color:var(--sub)}
h2{font-size:15px;margin:18px 0 8px}
table{width:100%;border-collapse:collapse;background:var(--card);border:1px solid var(--line);border-radius:10px;overflow:hidden}
td,th{padding:7px 10px;border-bottom:1px solid var(--line);text-align:left;font-size:13px}th{color:var(--sub);font-weight:600;background:var(--bg)}
.ok{color:var(--grn);font-weight:600}.warn{color:var(--red);font-weight:600}.na{color:var(--sub)}
</style>
<div class="wrap" id="app"></div>
<script>
const DATA=/*DATA_START*/{"project":"LMS 미니","student":"","updated":"","session_start":"","session_end":"","limit_min":60,"features":[],"docs":[],"consistency":[]}/*DATA_END*/;
const esc=s=>String(s==null?"":s).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const CLS={"미착수":"s0","작성중":"s1","보완필요":"s3","완료":"s4"};
const grade=s=>s>=95?"S":s>=85?"A":s>=70?"B":s>=50?"C":"D";
const mn=v=>Math.round(Number(v)||0)+"분";
const kst=t=>t?Date.parse(t.replace(" ","T")+":00+09:00"):NaN;
function render(){
  const docs=DATA.docs||[],n=docs.length||1,lim=DATA.limit_min||60;
  const done=docs.filter(d=>d.status==="완료").length;
  const sc=docs.filter(d=>typeof d.score==="number");
  const avg=sc.length?Math.round(sc.reduce((a,d)=>a+d.score,0)/sc.length):null;
  const st=kst(DATA.session_start),en=kst(DATA.session_end);
  const el=isNaN(st)?null:Math.max(0,Math.floor(((isNaN(en)?Date.now():en)-st)/60000));
  const totEst=docs.reduce((a,d)=>a+(Number(d.est_min)||0),0),totAct=docs.reduce((a,d)=>a+(Number(d.actual_min)||0),0);
  let h='<h1>'+esc(DATA.project)+' 산출물 진행판 (1시간)</h1><div class="sub">'+(DATA.student?esc(DATA.student)+' · ':'')+'기능: '+(esc((DATA.features||[]).join(", "))||'아직 안 정함')+' · 갱신 '+esc(DATA.updated)+'</div>';
  h+='<div class="top"><div class="stat"><b class="'+(el>lim?"late":"")+'">'+(el==null?"시작 전":el+"분 / "+lim+"분")+'</b><span>세션 경과 시간'+(isNaN(en)?'':' (종료)')+'</span><div class="bar"><i class="'+(el>lim?"over":"")+'" style="width:'+Math.min(100,el==null?0:Math.round(el/lim*100))+'%"></i></div></div>';
  h+='<div class="stat"><b>'+done+' / '+docs.length+'</b><span>완료한 산출물</span><div class="bar"><i style="width:'+Math.round(done/n*100)+'%"></i></div></div>';
  h+='<div class="stat"><b>'+(avg==null?"-":avg+"점 ("+grade(avg)+")")+'</b><span>검토 평균 점수</span></div>';
  h+='<div class="stat"><b>'+mn(totAct)+' / '+mn(totEst)+'</b><span>실제 / 예상 작성 시간</span></div></div>';
  h+='<div class="grid">';
  docs.forEach((d,i)=>{
    const over=(Number(d.actual_min)||0)>(Number(d.est_min)||0)+2;
    h+='<div class="card'+(d.working_since?' now':'')+'"><h3><span>'+(i+1)+'. '+esc(d.name)+'</span><span class="badge '+(CLS[d.status]||"s0")+'">'+esc(d.status)+'</span></h3>';
    h+='<div class="meta">목표 '+esc(d.slot)+' · 점수 '+(typeof d.score==="number"?esc(d.score)+'점 ('+grade(d.score)+')':'-')+(d.star_fail?' · 필수 미흡 '+esc(d.star_fail)+'개':'')+'</div>';
    h+='<div class="row"><b>시간</b> 예상 '+mn(d.est_min)+' · 실제 '+mn(d.actual_min)+(over?' <span class="late">· 시간 초과</span>':'')+(d.working_since?' · <span class="badge s1">지금 작성 중 ('+esc(d.working_since)+'~)</span>':'')+'</div>';
    h+='<div class="row"><b>피드백</b> '+(esc(d.feedback)||'-')+'</div><div class="row"><b>다음 할 일</b> '+(esc(d.next)||'-')+'</div>';
    if((d.history||[]).length){h+='<details><summary>검토 '+d.history.length+'회</summary>'+d.history.map(x=>'<div>'+esc(x.time)+' · '+esc(x.score)+'점 · '+esc(x.note)+'</div>').join('')+'</details>';}
    h+='</div>';
  });
  h+='</div><h2>마무리 점검 (문서끼리 맞는지)</h2><table><tr><th>점검</th><th>결과</th><th>메모</th></tr>';
  (DATA.consistency||[]).forEach(c=>{
    const t=c.result==="OK"?'<span class="ok">일치</span>':c.result==="WARN"?'<span class="warn">확인 필요</span>':'<span class="na">아직 점검 전</span>';
    h+='<tr><td>'+esc(c.check)+'</td><td>'+t+'</td><td>'+esc(c.note)+'</td></tr>';
  });
  h+='</table>';
  document.getElementById("app").innerHTML=h;
}
render();setInterval(render,30000);
</script>
```

### 5-3. 파일로 저장할 때 (Claude Code 등)

```html
<!doctype html><html lang="ko"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta http-equiv="refresh" content="5"><title>LMS 산출물 진행판</title></head><body>
(여기에 5-2 코드 전체)
</body></html>
```

---

## 6. 명령어

| 학생이 말하면 | Claude가 하는 일 |
|---|---|
| `시작` | ① `진행상태.json`이 없으면 만들고, `양식/`이 없으면 양식 7개를 만들어요(8번 내용 그대로, 빈칸만). ② `session_start`를 지금으로 적어요. ③ "LMS로 만들 기능 3개를 말해 볼래요?"라고 물어요. 답을 `features`에 적어요. ④ 진행판을 열어요. 채팅은 세 줄 이내로 말해요. |
| `가이드 N` | 작업 시작을 기록하고, 해당 양식 파일 이름 + 빈칸 개수 + 시작 질문 1개를 **세 줄 이내**로 말해요. 상태를 `작성중`으로 바꿔요. |
| `검토 N` | 작업 끝을 기록하고, 7번 방식으로 1분 검토해요. |
| `시간 N 5` | N번 문서에 5분을 직접 더해요. |
| `현황` | 경과 시간, 남은 문서, 지금 할 일 1개를 알려 줘요. |
| `마무리 점검` | 10번 점검 4개를 하고 `session_end`를 적어요. 산출물별 예상·실제 시간표를 채팅에 보여 줘요. |
| `질문: ...` | 쉬운 말로 세 줄 이내로 답해요(내용을 대신 써 주지 않아요). |

- 세션 경과가 **50분**이 되면 "10분 남았어요. 남은 문서는 필수(★) 칸만 채워요"라고 알려요.
- **60분**이 되면 하던 문서를 멈추고 `마무리 점검`으로 가자고 해요.

---

## 7. 검토 방식 (1분 이내)

1. 가장 높은 버전의 `.docx`를 `pandoc -t markdown`으로 읽어요(안 되면 python-docx). 못 읽으면 솔직히 말하고 내용을 붙여 달라고 해요. 추측해서 채점하지 않아요.
2. 8번 채점표 항목마다 `충족(1) / 부분충족(0.5) / 미흡(0)`.
   **점수 = (중요도 × 평가값의 합) ÷ (중요도 합) × 100**
3. **완료** = 80점 이상 + ★ 미흡 0개. 아니면 **보완필요**. (교육용 기본값)
4. 채팅에는 이 모양으로 **짧게** 말해요.

```
[문서명] 78점 (B) · 보완필요 · 걸린 시간 8분 (예상 7분)
👍 잘한 점: (한 줄)
🔧 고칠 점 (최대 2개): 어디 → 무엇을 (힌트 한 줄)
➡ 다음: 지금 고치기(1분) 또는 '가이드 N'으로 넘어가기
```

5. 실제 작성 시간이 예상 시간보다 2분 넘게 길었으면, 고칠 점은 검토기록에 적어만 두고 **다음 문서로 넘어가자고** 해요.
6. 검토 후 `검토기록/날짜_세션.md`에 이어 적고, `진행상태.json`과 진행판을 갱신해요.

---

## 8. 산출물별 빈칸 양식 + 채점표

양식은 Word 표로 만들어요. 아래 `[ ]`가 학생이 채울 빈칸이에요. 예시는 모두 **가상**이에요.
채점표 표기: **★** = 필수 · 숫자 = 중요도

### 8-1. 프로젝트 계획서 — 7분
**뭐예요?** 무엇을 만들고 무엇을 안 만들지 정하는 첫 문서예요.
**시작 질문**: 이번에 *안 만들* 기능 하나는 뭐예요?

| 칸 | 빈칸 |
|---|---|
| 목표 (한 문장: 누가 무엇을 할 수 있게 된다) | [ ] |
| 만들 기능 3개 | [ ] [ ] [ ] |
| 안 만들 기능 1개 | [ ] |
| 계층별 역할 (각 한 줄) | Flutter(MVVM) [ ] / Spring Boot [ ] / MyBatis [ ] / Oracle [ ] |
| 위험 1개와 대비책 | [ ] → [ ] |

| 채점 | 중요도 | 충족 기준 |
|---|---|---|
| ★ 범위 | 3 | 만들 기능 3개와 안 만들 기능 1개가 모두 "누가 무엇을 한다" 형태로 적혀 있다 (예: "수강생이 과정을 신청한다") |
| ★ 계층 역할 | 3 | 4개 계층의 역할이 모두 한 줄씩 있다 |
| 목표 | 2 | "누가 무엇을 할 수 있게 된다"가 들어간 한 문장이다 |
| 위험 | 1 | 위험 1개와, 그 위험이 생겼을 때 할 대비책 1개가 함께 적혀 있다 |

### 8-2. 요구사항 정의서 — 9분
**뭐예요?** 기능을 번호 붙여 한 줄씩 적고, "이게 되면 OK" 기준을 붙인 목록이에요.
**시작 질문**: "수강 신청이 된다"를 확인하려면 화면에 뭐가 보여야 할까요?

| ID | 사용자 | 요구 (한 줄에 하나) | 합격 기준 | 우선순위 | 화면 ID | API ID | 시험 ID |
|---|---|---|---|---|---|---|---|
| FR-001 | [ ] | [ ] | [ ] | [ ] | (나중에) | (나중에) | (나중에) |
| FR-002 | [ ] | [ ] | [ ] | [ ] | | | |
| FR-003 | [ ] | [ ] | [ ] | [ ] | | | |
| NFR-001 | 성능 | [ ] (숫자와 단위로, 예: 3초 이내) | [ ] | [ ] | - | - | - |
| NFR-002 | 개인정보 | [ ] | [ ] | [ ] | - | - | - |

| 채점 | 중요도 | 충족 기준 |
|---|---|---|
| ★ 한 줄 한 요구 | 3 | FR 3개가 각각 기능 한 가지만 말하고, "적절히/빠르게" 같은 명료하지 않은 말이 없다 |
| ★ 합격 기준 | 3 | 5줄 모두, 결과를 보고 "된다/안 된다"를 판단할 수 있는 숫자나 조건이 있다 (예: "정원이 차면 '대기'로 저장된다") |
| 비기능 | 2 | 성능은 숫자와 단위로(예: 3초 이내), 개인정보는 보호 방법으로(예: 전화번호 암호화 저장) 적었다 |
| 추적 열 | 1 | 마무리 점검 때 화면·API·시험 ID가 채워져 있다 |

### 8-3. 테이블 정의서 — 8분
**뭐예요?** 데이터를 담을 표의 설계도예요.
**시작 질문**: 기능 3개를 하려면 꼭 저장해야 하는 것 두 개는 뭐예요?

테이블 2개, 각 4~5개 컬럼:

| 테이블 | 컬럼(영문) | 한글 이름 | 종류 | 길이 | PK/FK | NULL 허용 |
|---|---|---|---|---|---|---|
| [ ] | [ ] | [ ] | [ ] | [ ] | [ ] | [ ] |
| (행 10개) | | | | | | |

| 칸 | 빈칸 |
|---|---|
| 두 테이블 관계 | [ ] 1 : N [ ] |
| 공통코드 1그룹 | 그룹 [ ] / 값 [ ]=[ ], [ ]=[ ], [ ]=[ ] |
| 이름 규칙 | [ ] (예: `TB_` + 대문자·밑줄) |

| 채점 | 중요도 | 충족 기준 |
|---|---|---|
| ★ 컬럼 정의 | 3 | 모든 컬럼 행에 7칸(테이블~NULL 허용)이 빈칸 없이 채워져 있다 |
| ★ 관계 | 2 | 두 테이블의 관계가 1:N으로 적혀 있고, N 쪽 테이블에 1 쪽 테이블의 PK를 가리키는 FK 컬럼이 있다 |
| 공통코드 | 2 | 값과 뜻이 짝지어 있고 중복이 없다 |
| 이름 규칙 | 1 | 모든 테이블·컬럼 이름이 학생이 적은 이름 규칙을 따른다 |

### 8-4. 화면 설계서 — 8분
**뭐예요?** 화면마다 무엇을 입력하고, 버튼을 누르면 무슨 일이 생기는지 적은 문서예요.
**시작 질문**: 수강 신청 버튼을 누르면 서버에 무엇을 보내야 할까요?

| 화면 ID | 화면 이름 | 관련 FR | 입력칸/버튼 | 필수·규칙 | 누르면 → 호출 API ID |
|---|---|---|---|---|---|
| SCR-001 | [ ] | [ ] | [ ] | [ ] | [ ] |
| SCR-002 | [ ] | [ ] | [ ] | [ ] | [ ] |
| SCR-003 | [ ] | [ ] | [ ] | [ ] | [ ] |

| 칸 | 빈칸 |
|---|---|
| 성공 메시지 1개 | [ ] |
| 오류 메시지 1개 | [ ] |

| 채점 | 중요도 | 충족 기준 |
|---|---|---|
| ★ 화면 ID + FR | 3 | 화면 3개 모두 관련 FR 번호가 있다 |
| ★ 버튼 → API | 3 | 버튼마다 호출 API ID가 있다 (화면 이동만 하는 버튼은 "없음(화면 이동)"이라고 적는다) |
| 입력 규칙 | 2 | 입력칸마다 필수 여부와 검사 규칙(길이·형식, 예: "숫자만 10자리")이 있다 |
| 메시지 | 1 | 성공·오류 메시지가 화면에 그대로 띄울 완성된 문장이다 (예: "수강 신청이 완료되었어요.") |

### 8-5. API 명세서 — 8분
**뭐예요?** 앱(Flutter)과 서버(Spring Boot)가 주고받는 약속이에요.
**시작 질문**: 로그인 안 한 사람이 수강 신청 API를 부르면 어떤 답을 줘야 할까요?

| API ID | 방식 | URL | 권한 | 관련 화면 |
|---|---|---|---|---|
| API-001 | [ ] | [ ] | [ ] | [ ] |
| API-002 | [ ] | [ ] | [ ] | [ ] |
| API-003 | [ ] | [ ] | [ ] | [ ] |

**하나만 자세히 (위 3개 중 데이터를 저장하는 API 1개, 예: 수강 신청)**

| 요청 값 이름 | 종류 | 필수 | 테이블 컬럼 |
|---|---|---|---|
| [ ] | [ ] | [ ] | [ ] |

| 칸 | 빈칸 |
|---|---|
| 성공 응답 JSON 예시 | [ ] |
| 오류 코드 2개 | [ ] = [ ] / [ ] = [ ] |

| 채점 | 중요도 | 충족 기준 |
|---|---|---|
| ★ API 식별 | 3 | 3개 모두 ID·방식·URL이 있다 |
| ★ 요청·응답 | 3 | 요청 값 표와 응답 JSON 예시가 있다 |
| 오류 코드 | 2 | 오류 상황 2개와 코드·메시지가 있다 |
| 컬럼 일치 | 1 | 요청 값마다 같은 뜻의 테이블 컬럼 이름이 적혀 있고, 두 이름의 표기가 같다 |

### 8-6. 시험 결과서 (시험 계획) — 9분
**뭐예요?** 기능이 요구사항의 합격 기준대로 되는지 확인할 시험 목록이에요. 오늘은 개발 전이라 **계획만** 써요.
**시작 질문**: 수강 신청에서 "안 되어야 하는 경우" 하나는 뭐예요?

| TC ID | 관련 FR | 종류 | 입력·조건 | 기대 결과 | 실제 결과 | 통과/실패 |
|---|---|---|---|---|---|---|
| TC-001 | FR-001 | 정상 | [ ] | [ ] | 미실행 | - |
| TC-002 | FR-001 | 오류 | [ ] | [ ] | 미실행 | - |
| (FR마다 정상·오류 1개씩, 모두 6행) | | | | | | |

| 칸 | 빈칸 |
|---|---|
| 통합 시나리오 1개 (순서) | [ ] → [ ] → [ ] |
| 요약 | 총 [ ]건 · 실행 0건 · 개발 후 실행 예정 |

| 채점 | 중요도 | 충족 기준 |
|---|---|---|
| ★ FR 연결 | 3 | FR 3개가 모두 케이스에 있다 |
| ★ 정상 + 오류 | 3 | FR마다 정상·오류 케이스가 하나씩 있다 |
| 기대 결과 | 2 | 기대 결과가 화면에 보이는 문구·값이나 DB에 저장되는 값으로 적혀 있다 (예: "'신청 완료' 메시지가 뜨고 상태가 01로 저장된다") |
| 통합·요약 | 1 | 통합 시나리오와 요약 칸이 채워져 있다 |

### 8-7. 완료 보고서 — 5분
**뭐예요?** 처음 계획 대비 무엇을 했고 무엇이 남았는지 정리해요.
**시작 질문**: 1시간 동안 제일 오래 걸린 문서는 뭐였고, 왜 그랬을까요?

| 칸 | 빈칸 |
|---|---|
| 기능 3개 결과 | [기능] → 문서 완료 / 일부 / 미완료 (3줄) |
| 산출물 목록 | 7개 파일 이름·버전 (7줄) |
| 시간 비교 | 진행판의 예상·실제 시간을 옮기고, 차이가 큰 문서 1개의 이유 [ ] |
| 배운 점 | [ ] (2줄) |
| 남은 과제 | [ ] (2줄) |

| 채점 | 중요도 | 충족 기준 |
|---|---|---|
| ★ 범위 대비 결과 | 3 | 기능 3개 모두 완료/일부/미완료 중 하나로 표시돼 있다 (미완료인 것도 빼지 않고 적는다) |
| ★ 산출물 목록 | 2 | 7개가 실제 파일 이름·버전과 같다 |
| 시간 비교 | 2 | 예상·실제 분이 진행판 숫자와 같고, 차이가 가장 큰 문서 1개의 이유가 한 줄 이상 있다 |
| 배운 점·남은 과제 | 1 | 배운 점 2줄, 남은 과제 2줄이 있다 |

---

## 9. 점수 계산 예시

계획서: ★범위(3) 충족, ★계층 역할(3) 부분충족, 목표(2) 충족, 위험(1) 미흡
→ 획득 = 3 + 1.5 + 2 + 0 = 6.5 · 만점 = 9 · 점수 = 6.5 ÷ 9 × 100 = **72점 (B)** → 80점 미만이라 **보완필요**

---

## 10. 마무리 점검 (3분, `마무리 점검`)

| 점검 | 어떻게 보나 |
|---|---|
| 요구사항(FR) ↔ 화면·API | FR 3개가 화면 또는 API에 다 나오는가? |
| 화면 버튼의 API ID ↔ API 명세서 | 화면에 적은 API ID가 API 명세서에 있는가? |
| API 필드 ↔ 테이블 컬럼 | 요청 값 이름이 테이블 컬럼과 같은가? |
| 요구사항(FR) ↔ 시험 케이스 | FR 3개가 시험 케이스에 다 나오는가? |

- 맞으면 `OK`, 어긋나면 `WARN`과 어긋난 문서·위치·내용 한 줄(예: "화면설계서 SCR-002의 API-004가 API 명세서에 없음"), 비교할 문서가 없으면 `NA`.
- 요구사항 정의서의 추적 열(화면·API·시험 ID)이 비어 있으면 채우라고 알려요(8-2 채점 반영).
- 끝나면 산출물별 **예상 vs 실제 시간표**를 채팅에 보여 주고, 잘한 점 1개와 다음에 연습할 것 1개를 말해요.

---

## 11. 한계와 주의

- 1시간 미니판은 **문서의 뼈대를 익히는 연습**이에요. 실제 프로젝트 문서로 쓰기엔 내용이 부족해요. 실제 사업은 계약서·과업지시서·발주기관 양식이 먼저예요.
- 80점 완료 기준과 시간표는 교육용 기본값이에요. 법이나 규정이 정한 숫자가 아니에요.
- 실제 시간은 학생이 `가이드 N`·`검토 N`·`시간 N`으로 알려 준 만큼만 정확해요.
- 진행판은 Claude가 갱신할 때 바뀌어요. 경과 시간만 페이지가 스스로 다시 계산해요.
