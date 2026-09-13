(()=>{
const $=s=>document.querySelector(s);
function load(k,f){try{return JSON.parse(localStorage.getItem(k)||JSON.stringify(f))}catch{return f}}
function avg(a){const z=a.filter(Number.isFinite);return z.length?z.reduce((s,x)=>s+x,0)/z.length:null}
function fmt(n){return n==null?'—':n.toFixed(1)}
function entries(){let e=load('bloom.entries.v3',null);if(!Array.isArray(e))e=load('bloom.entries.v2',[]);return Array.isArray(e)?e:[]}
function pad(n){return String(n).padStart(2,'0')}
function todayISO(){const d=new Date();return `${d.getFullYear()}-${pad(d.getMonth()+1)}-${pad(d.getDate())}`}
function displayToISO(s){const m=/^(\d{2})\/(\d{2})\/(\d{4})$/.exec((s||'').trim());return m?`${m[3]}-${m[2]}-${m[1]}`:null}
function addInsight(el,title,body,meta){if([...el.querySelectorAll('.insight strong')].some(x=>x.textContent===title))return;const d=document.createElement('div');d.className='insight';d.dataset.enhanced='true';const h=document.createElement('strong');h.textContent=title;const b=document.createTextNode(body);const m=document.createElement('div');m.className='tiny';m.style.marginTop='4px';m.textContent=meta;d.append(h,b,m);el.appendChild(d)}
function signalComparison(data){const signals=new Set();data.forEach(e=>[...(e.context||[]),...(e.brain||[]),...(e.cycleSymptoms||[])].forEach(s=>signals.add(s)));const metrics=[['executive','executive functioning'],['energy','mental energy'],['activation','activation'],['mood','mood'],['reward','interest/reward'],['cognitive','cognitive clarity'],['sleep','sleep restoration']];let best=null;signals.forEach(signal=>{const has=e=>(e.context||[]).includes(signal)||(e.brain||[]).includes(signal)||(e.cycleSymptoms||[]).includes(signal);const yes=data.filter(has),no=data.filter(e=>!has(e));if(yes.length<3||no.length<3)return;metrics.forEach(([k,label])=>{const ya=avg(yes.map(e=>e[k])),na=avg(no.map(e=>e[k]));if(ya==null||na==null)return;const diff=ya-na;if(Math.abs(diff)<.6)return;if(!best||Math.abs(diff)>Math.abs(best.diff))best={signal,label,ya,na,diff,yn:yes.filter(e=>Number.isFinite(e[k])).length,nn:no.filter(e=>Number.isFinite(e[k])).length}})});return best}
function recurringBrain(data){const c={};data.forEach(e=>(e.brain||[]).forEach(s=>c[s]=(c[s]||0)+1));return Object.entries(c).filter(([,n])=>n>=3).sort((a,b)=>b[1]-a[1])[0]||null}
function recurringCycle(data){const c={};data.forEach(e=>(e.cycleSymptoms||[]).forEach(s=>c[s]=(c[s]||0)+1));return Object.entries(c).filter(([,n])=>n>=3).sort((a,b)=>b[1]-a[1])[0]||null}
function renderEnhanced(){const el=$('#insightList');if(!el)return;el.querySelectorAll('[data-enhanced="true"]').forEach(x=>x.remove());const all=entries(),range=Number($('#rangeSelect')?.value||30),data=all.slice(-range);if(data.length<6)return;
const comp=signalComparison(data);if(comp){const direction=comp.diff<0?'lower':'higher';addInsight(el,`When “${comp.signal}” shows up`,`${comp.label[0].toUpperCase()+comp.label.slice(1)} is ${direction} on those entries: ${fmt(comp.ya)} vs ${fmt(comp.na)} when it is not logged.`,`Based on ${comp.yn} signal entries and ${comp.nn} comparison entries. Association only — Bloom is not assigning cause.`)}
const brain=recurringBrain(data);if(brain)addInsight(el,'Repeated executive / cognitive signal',`“${brain[0]}” is showing up repeatedly in your recent deep check-ins.`,`Logged ${brain[1]} times in the selected range. Worth watching for what tends to precede or accompany it.`);
const cyc=recurringCycle(data);if(cyc)addInsight(el,'Repeated body / cycle symptom',`“${cyc[0]}” is showing up repeatedly in your recent check-ins.`,`Logged ${cyc[1]} times in the selected range. Bloom treats this as a companion signal, not proof of a hormonal cause.`);
const lowActHighMood=data.filter(e=>Number.isFinite(e.activation)&&Number.isFinite(e.mood)&&e.activation<=2&&e.mood>=3);if(lowActHighMood.length>=3)addInsight(el,'Low activation without equally low mood','There are repeated entries where getting started is hard even though mood is mixed or better.','That separation can be useful: low functioning is not automatically the same thing as low mood.');
const lowMoodOkayAct=data.filter(e=>Number.isFinite(e.activation)&&Number.isFinite(e.mood)&&e.mood<=2&&e.activation>=3);if(lowMoodOkayAct.length>=3)addInsight(el,'Low mood with functioning still online','There are repeated entries where mood is low but activation remains mixed or better.','Bloom keeps these separate so one does not get used as a proxy for the other.');
const weak=data.filter(e=>(e.context||[]).includes('medication felt weaker')),normal=data.filter(e=>(e.context||[]).includes('medication felt normal'));if(weak.length>=3&&normal.length>=3){const we=avg(weak.map(e=>e.executive)),ne=avg(normal.map(e=>e.executive)),wen=avg(weak.map(e=>e.energy)),nen=avg(normal.map(e=>e.energy));if(we!=null&&ne!=null&&Math.abs(we-ne)>=.5)addInsight(el,'Medication-feel entries differ',`Executive functioning averages ${fmt(we)} when medication is logged as feeling weaker, versus ${fmt(ne)} when it is logged as feeling normal.`,`Descriptive comparison only; medication response can be affected by many other factors.`);else if(wen!=null&&nen!=null&&Math.abs(wen-nen)>=.5)addInsight(el,'Medication-feel entries differ',`Mental energy averages ${fmt(wen)} when medication is logged as feeling weaker, versus ${fmt(nen)} when it is logged as feeling normal.`,`Descriptive comparison only; medication response can be affected by many other factors.`)}
}

/* Flow fix: Today is an output, not an empty landing page. */
function hasToday(){return entries().some(e=>e.date===todayISO())}
function syncTodayGate(){const tab=document.querySelector('.tab[data-view="today"]'),view=$('#view-today');if(!tab||!view)return;const on=hasToday();tab.hidden=!on;if(!on&&view.classList.contains('active')){document.querySelector('.tab[data-view="checkin"]')?.click()}}

/* Proper body/cycle symptom capture. Stored on the check-in itself so it can be compared with mood/functioning later. */
const cycleGroups={
 'Bleeding':['spotting','light bleeding','heavy bleeding','clots / flooding'],
 'Pain & body':['cramps','pelvic pain / pressure','breast tenderness','bloating / fluid retention','headache / migraine','joint / muscle aches'],
 'Temperature & sleep':['hot flush','night sweat','temperature swings','sleep disrupted'],
 'Nervous system':['palpitations','dizziness / light-headedness'],
 'Appetite & gut':['increased hunger / cravings','nausea / digestive changes'],
 'Sexual / genitourinary':['vaginal dryness / discomfort','libido change']
};
let selectedSymptoms=new Set();
function symptomSection(){if($('#cycleSymptomSection'))return;const note=[...document.querySelectorAll('.section-label')].find(x=>x.textContent.trim().toLowerCase()==='note');if(!note)return;const wrap=document.createElement('div');wrap.id='cycleSymptomSection';wrap.innerHTML='<div class="section-label">Body & cycle symptoms</div><div class="domain cycle-symptom-domain"><div class="small">Optional. Pick what is actually happening today. These are tracked as body signals — Bloom does not assume hormones caused them.</div><div id="cycleSymptomGroups"></div></div>';note.before(wrap);const host=wrap.querySelector('#cycleSymptomGroups');Object.entries(cycleGroups).forEach(([group,items])=>{const block=document.createElement('div');block.className='symptom-group';const h=document.createElement('div');h.className='symptom-group-title';h.textContent=group;const grid=document.createElement('div');grid.className='tag-grid';items.forEach(label=>{const b=document.createElement('button');b.type='button';b.className='tag cycle-symptom';b.textContent=label;b.setAttribute('aria-pressed','false');b.onclick=()=>{selectedSymptoms.has(label)?selectedSymptoms.delete(label):selectedSymptoms.add(label);syncSymptomButtons()};grid.appendChild(b)});block.append(h,grid);host.appendChild(block)});}
function syncSymptomButtons(){document.querySelectorAll('.cycle-symptom').forEach(b=>{const on=selectedSymptoms.has(b.textContent);b.classList.toggle('sel',on);b.setAttribute('aria-pressed',String(on))})}
function clearSymptoms(){selectedSymptoms.clear();syncSymptomButtons()}
function currentEntry(){const date=displayToISO($('#entryDate')?.value),time=$('#entryTime')?.value;if(!date)return null;return [...entries()].reverse().find(e=>e.date===date&&(!time||e.time===time))||null}
function loadSymptomsForCurrent(){setTimeout(()=>{const e=currentEntry();selectedSymptoms=new Set(e?.cycleSymptoms||[]);syncSymptomButtons()},0)}
function attachSymptomsAfterSave(){const date=displayToISO($('#entryDate')?.value),time=$('#entryTime')?.value;if(!date||!time)return;setTimeout(()=>{const all=entries();const candidates=all.map((e,i)=>({e,i})).filter(x=>x.e.date===date&&x.e.time===time);if(!candidates.length)return;const target=candidates.sort((a,b)=>(b.e.createdAt||0)-(a.e.createdAt||0))[0];all[target.i]={...target.e,cycleSymptoms:[...selectedSymptoms]};nativeSet.call(localStorage,'bloom.entries.v3',JSON.stringify(all));syncTodayGate();syncTodaySymptoms();schedule();},40)}
function syncTodaySymptoms(){const e=[...entries()].reverse().find(x=>x.date===todayISO());const host=$('#tContext');if(!e||!host)return;host.querySelectorAll('[data-cycle-symptom="true"]').forEach(x=>x.remove());(e.cycleSymptoms||[]).slice(0,12).forEach(s=>{const chip=document.createElement('span');chip.className='chip';chip.dataset.cycleSymptom='true';chip.textContent=s;host.appendChild(chip)})}

const style=document.createElement('style');style.textContent='.tab[hidden]{display:none!important}.symptom-group{margin-top:14px}.symptom-group-title{font-weight:800;font-size:12px;color:var(--plum);margin-bottom:5px}.cycle-symptom-domain{border-top-color:var(--orange)!important}.cycle-symptom.sel{background:var(--pp);border-color:var(--pink)}';document.head.appendChild(style);
symptomSection();

const nativeSet=Storage.prototype.setItem;
Storage.prototype.setItem=function(k,v){const result=nativeSet.call(this,k,v);if(this===localStorage&&k==='bloom.entries.v3')setTimeout(()=>{syncTodayGate();syncTodaySymptoms()},0);return result};

$('#checkinForm')?.addEventListener('submit',attachSymptomsAfterSave);
document.addEventListener('click',e=>{const t=e.target;if(!(t instanceof HTMLElement))return;if(t.matches('.history-actions button')&&t.textContent.trim()==='Edit')loadSymptomsForCurrent();if(['clearBtn','backfillBtn','historyBackfillBtn','openCheckinBtn','lowEnergyBtn'].includes(t.id))clearSymptoms();if(t.matches('.tab[data-view="today"]'))setTimeout(syncTodaySymptoms,0)});

function schedule(){setTimeout(renderEnhanced,0)}
document.querySelectorAll('.tab[data-view="patterns"]').forEach(b=>b.addEventListener('click',schedule));$('#rangeSelect')?.addEventListener('change',schedule);window.addEventListener('storage',()=>{schedule();syncTodayGate();syncTodaySymptoms()});
syncTodayGate();syncTodaySymptoms();schedule();
})();
