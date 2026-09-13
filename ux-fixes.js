(()=>{
if(!document.querySelector('link[data-bloom-ux]')){const l=document.createElement('link');l.rel='stylesheet';l.href='./ux-fixes.css?v=13';l.dataset.bloomUx='true';document.head.appendChild(l)}
const $=s=>document.querySelector(s);
function load(k,f){try{return JSON.parse(localStorage.getItem(k)||JSON.stringify(f))}catch{return f}}
function cycleData(){return load('bloom.cycle.v1',{})}
function pad(n){return String(n).padStart(2,'0')}
function todayISO(){const d=new Date();return `${d.getFullYear()}-${pad(d.getMonth()+1)}-${pad(d.getDate())}`}
function displayToISO(s){const m=/^(\d{2})\/(\d{2})\/(\d{4})$/.exec((s||'').trim());return m?`${m[3]}-${m[2]}-${m[1]}`:todayISO()}
function syncBleeding(){const btn=$('#bleedingBtn');if(!btn)return;const on=Array.isArray(cycleData().bleedingDays)&&cycleData().bleedingDays.includes(todayISO());btn.setAttribute('role','switch');btn.setAttribute('aria-checked',String(on));btn.innerHTML=`<span>Bleeding today</span><span class="switch-track" aria-hidden="true"><span class="switch-knob"></span></span><span class="switch-state">${on?'Yes':'No'}</span>`}
function enhanceBleeding(){const btn=$('#bleedingBtn');if(!btn||btn.closest('.bleeding-wrap'))return;const wrap=document.createElement('div');wrap.className='bleeding-wrap';btn.parentNode.insertBefore(wrap,btn);wrap.appendChild(btn);btn.classList.add('bleeding-switch');const help=document.createElement('div');help.className='bleeding-help';help.textContent='Did you have menstrual bleeding today? Switch this on for yes and off for no. “Period starts today” is only for the first day of a new period.';wrap.appendChild(help);syncBleeding();btn.addEventListener('click',()=>setTimeout(syncBleeding,0));$('#periodStartBtn')?.addEventListener('click',()=>setTimeout(syncBleeding,0))}

function selectedPhysicalSymptoms(){return [...document.querySelectorAll('.cycle-symptom.sel')].map(b=>b.textContent.trim()).filter(Boolean)}
function saveLowEnergy(){let entries=load('bloom.entries.v3',null);if(!Array.isArray(entries))entries=load('bloom.entries.v2',[]);const date=displayToISO($('#entryDate')?.value),time=$('#entryTime')?.value||`${pad(new Date().getHours())}:${pad(new Date().getMinutes())}`;const obj={id:Date.now().toString(36)+Math.random().toString(36).slice(2,7),date,time,createdAt:Date.now(),mode:'low',activation:null,energy:null,mood:null,reward:null,executive:null,cognitive:null,regulation:null,sleep:null,brain:[],context:[],cycleSymptoms:selectedPhysicalSymptoms(),note:''};entries.push(obj);entries.sort((a,b)=>a.date.localeCompare(b.date)||(a.time||'').localeCompare(b.time||''));localStorage.setItem('bloom.entries.v3',JSON.stringify(entries));setTimeout(()=>document.querySelector('.tab[data-view="today"]')?.click(),80)}

function ensureLowFlow(){const form=$('#checkinForm'),low=$('#lowSection');if(!form||!low)return;let panel=$('#lowCapacityPanel');if(!panel){panel=document.createElement('div');panel.id='lowCapacityPanel';panel.className='low-capacity-panel';panel.innerHTML='<div class="domain low-capacity-domain"><div class="question low-question">Do you have capacity for physical symptoms?</div><div class="small">If not, stop here. Bloom can still record that you checked in.</div><div class="low-capacity-actions"><button type="button" class="btn secondary" id="lowNoSymptoms">No. Save.</button><button type="button" class="btn" id="lowYesSymptoms">Yes</button></div></div>';low.appendChild(panel)}
let saveSymptoms=$('#lowSaveSymptoms');if(!saveSymptoms){saveSymptoms=document.createElement('button');saveSymptoms.type='button';saveSymptoms.id='lowSaveSymptoms';saveSymptoms.className='btn low-save-symptoms';saveSymptoms.textContent='Save';$('#cycleSymptomSection')?.appendChild(saveSymptoms)}
$('#lowNoSymptoms').onclick=()=>{document.querySelectorAll('.cycle-symptom.sel').forEach(b=>b.click());saveLowEnergy()};
$('#lowYesSymptoms').onclick=()=>{$('#cycleSymptomSection')?.classList.add('low-show-symptoms');setTimeout(()=>$('#cycleSymptomSection')?.scrollIntoView({behavior:'smooth',block:'start'}),20)};
$('#lowSaveSymptoms').onclick=saveLowEnergy;
}
function syncLowMode(){const form=$('#checkinForm');if(!form)return;ensureLowFlow();const low=$('#lowMode')?.classList.contains('active');form.classList.toggle('low-mode',!!low);if(low){$('#cycleSymptomSection')?.classList.remove('low-show-symptoms')}}
function enhanceLowMode(){['lowMode','quickMode','deepMode','lowEnergyBtn','openCheckinBtn','backfillBtn','historyBackfillBtn'].forEach(id=>$('#'+id)?.addEventListener('click',()=>setTimeout(syncLowMode,0)));syncLowMode();setTimeout(syncLowMode,0)}
enhanceBleeding();enhanceLowMode();
})();
