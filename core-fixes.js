(()=>{
if(window.__bloomCoreFixesLoaded)return;window.__bloomCoreFixesLoaded=true;
const $=s=>document.querySelector(s);
const KEY='bloom.entries.v3';
const simpleSymptoms=new Set(['spotting','heavy bleeding','cramps','bloating / fluid retention','headache / migraine','hot flush','night sweat','sleep disrupted','increased hunger / cravings']);
function loadEntries(){try{let e=JSON.parse(localStorage.getItem(KEY)||'null');if(!Array.isArray(e))e=JSON.parse(localStorage.getItem('bloom.entries.v2')||'[]');return Array.isArray(e)?e:[]}catch{return []}}
function parseDate(s){const m=/^(\d{2})\/(\d{2})\/(\d{4})$/.exec((s||'').trim());if(!m)return null;const iso=`${m[3]}-${m[2]}-${m[1]}`,d=new Date(iso+'T12:00:00');return d.getFullYear()==+m[3]&&d.getMonth()+1==+m[2]&&d.getDate()==+m[1]?iso:null}
function todayISO(){const d=new Date(),p=n=>String(n).padStart(2,'0');return `${d.getFullYear()}-${p(d.getMonth()+1)}-${p(d.getDate())}`}
function makeId(){return Date.now().toString(36)+Math.random().toString(36).slice(2,7)}
function lowModeActive(){return !!$('#lowMode')?.classList.contains('active')}
function selectedLowSymptoms(){const form=$('#checkinForm');if(form?.dataset.lowIncludeSymptoms!=='true')return[];return [...document.querySelectorAll('.cycle-symptom.sel')].map(b=>b.textContent.trim()).filter(x=>simpleSymptoms.has(x))}
function saveLowEnergy(){
 const form=$('#checkinForm'),date=parseDate($('#entryDate')?.value),time=$('#entryTime')?.value;
 if(!date||!time)return false;
 const entries=loadEntries(),symptoms=selectedLowSymptoms(),now=Date.now(),editId=form?.dataset.editId||null;
 let idx=editId?entries.findIndex(e=>e.id===editId):-1;
 if(idx<0){for(let i=entries.length-1;i>=0;i--){if(entries[i].date===date&&entries[i].time===time){idx=i;break}}}
 const existing=idx>=0?entries[idx]:null;
 const obj={id:existing?.id||makeId(),date,time,createdAt:existing?.createdAt||now,updatedAt:now,mode:'low',activation:null,energy:null,mood:null,reward:null,executive:null,cognitive:null,regulation:null,sleep:null,brain:[],context:[],cycleSymptoms:symptoms,note:''};
 if(idx>=0)entries[idx]=obj;else entries.push(obj);
 entries.sort((a,b)=>a.date.localeCompare(b.date)||(a.time||'').localeCompare(b.time||''));
 localStorage.setItem(KEY,JSON.stringify(entries));
 return true;
}
function ensureLowSaveButton(){const section=$('#cycleSymptomSection');if(!section)return;let btn=$('#lowSaveSymptoms');if(btn)return;btn=document.createElement('button');btn.type='button';btn.id='lowSaveSymptoms';btn.className='btn low-save-symptoms';btn.textContent='Save';btn.addEventListener('click',()=>$('#checkinForm')?.requestSubmit());section.appendChild(btn)}
function rememberEdit(){setTimeout(()=>{const form=$('#checkinForm'),date=parseDate($('#entryDate')?.value),time=$('#entryTime')?.value;if(!form||!date)return;const match=[...loadEntries()].reverse().find(e=>e.date===date&&(!time||e.time===time));if(match)form.dataset.editId=match.id},0)}
function clearEdit(){const form=$('#checkinForm');if(form)delete form.dataset.editId}
function renderLowToday(){
 const view=$('#view-today');if(!view)return;
 const today=loadEntries().filter(e=>e.date===todayISO()).at(-1)||null;
 let box=$('#lowTodaySummary');
 if(!today||today.mode!=='low'){view.classList.remove('low-today');box?.remove();return}
 view.classList.add('low-today');
 if(!box){box=document.createElement('div');box.id='lowTodaySummary';box.className='low-today-summary';view.prepend(box)}
 const symptoms=today.cycleSymptoms||[];
 box.innerHTML=`<h2>Low-energy check-in saved</h2><p>${symptoms.length?`You logged: ${symptoms.join(', ')}.`:'No extra detail needed.'}</p>`;
}
document.addEventListener('submit',e=>{
 if(e.target?.id!=='checkinForm'||!lowModeActive())return;
 e.preventDefault();e.stopImmediatePropagation();
 if(!saveLowEnergy()){alert('Bloom could not save this check-in.');return}
 window.location.reload();
},true);
document.addEventListener('click',e=>{
 const t=e.target;if(!(t instanceof HTMLElement))return;
 if(t.id==='lowYesSymptoms')setTimeout(ensureLowSaveButton,0);
 if(t.matches('.history-actions button')&&t.textContent.trim()==='Edit')rememberEdit();
 if(['lowEnergyBtn','openCheckinBtn','backfillBtn','historyBackfillBtn','clearBtn'].includes(t.id))clearEdit();
 if(t.matches('.tab[data-view="today"]'))setTimeout(renderLowToday,0);
},true);
window.addEventListener('storage',renderLowToday);
setTimeout(()=>{ensureLowSaveButton();renderLowToday()},0);
})();
