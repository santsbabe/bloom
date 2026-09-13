(()=>{
if(!document.querySelector('link[data-bloom-ux]')){const l=document.createElement('link');l.rel='stylesheet';l.href='./ux-fixes.css?v=12';l.dataset.bloomUx='true';document.head.appendChild(l)}
const $=s=>document.querySelector(s);
function cycleData(){try{return JSON.parse(localStorage.getItem('bloom.cycle.v1')||'{}')}catch{return {}}}
function todayISO(){const d=new Date(),p=n=>String(n).padStart(2,'0');return `${d.getFullYear()}-${p(d.getMonth()+1)}-${p(d.getDate())}`}
function syncBleeding(){const btn=$('#bleedingBtn');if(!btn)return;const on=Array.isArray(cycleData().bleedingDays)&&cycleData().bleedingDays.includes(todayISO());btn.setAttribute('role','switch');btn.setAttribute('aria-checked',String(on));btn.innerHTML=`<span>Bleeding today</span><span class="switch-track" aria-hidden="true"><span class="switch-knob"></span></span><span class="switch-state">${on?'Yes':'No'}</span>`}
function enhanceBleeding(){const btn=$('#bleedingBtn');if(!btn||btn.closest('.bleeding-wrap'))return;const wrap=document.createElement('div');wrap.className='bleeding-wrap';btn.parentNode.insertBefore(wrap,btn);wrap.appendChild(btn);btn.classList.add('bleeding-switch');const help=document.createElement('div');help.className='bleeding-help';help.textContent='Did you have menstrual bleeding today? Switch this on for yes and off for no. “Period starts today” is only for the first day of a new period.';wrap.appendChild(help);syncBleeding();btn.addEventListener('click',()=>setTimeout(syncBleeding,0));$('#periodStartBtn')?.addEventListener('click',()=>setTimeout(syncBleeding,0))}

let physicalCapacity=null;
function lowExtraBlock(){const low=$('#lowSection');if(!low)return null;const kids=[...low.children];const labels=kids.filter(x=>x.classList?.contains('section-label'));const obvious=labels.find(x=>x.textContent.trim().toLowerCase()==='anything obvious?');if(obvious){obvious.classList.add('low-extra');const next=obvious.nextElementSibling;if(next)next.classList.add('low-extra')}
let panel=$('#lowCapacityPanel');if(panel)return panel;
panel=document.createElement('div');panel.id='lowCapacityPanel';panel.className='low-capacity-panel';panel.innerHTML='<div class="section-label">One more thing</div><div class="domain low-capacity-domain"><h3>Do you have capacity to log physical symptoms?</h3><div class="small">You can stop here. Physical symptoms are optional.</div><div class="low-capacity-actions"><button type="button" class="btn secondary" id="lowNoSymptoms">No — save now</button><button type="button" class="btn" id="lowYesSymptoms">Yes — show them</button></div></div>';
low.appendChild(panel);
$('#lowNoSymptoms')?.addEventListener('click',()=>{physicalCapacity=false;$('#cycleSymptomSection')?.classList.remove('low-show-symptoms');$('#checkinForm')?.requestSubmit()});
$('#lowYesSymptoms')?.addEventListener('click',()=>{physicalCapacity=true;$('#cycleSymptomSection')?.classList.add('low-show-symptoms');$('#cycleSymptomSection')?.scrollIntoView({behavior:'smooth',block:'start'})});
return panel}
function syncLowMode(){const form=$('#checkinForm'),note=$('#note');if(!form||!note)return;lowExtraBlock();const low=$('#lowMode')?.classList.contains('active');form.classList.toggle('low-mode',!!low);const label=note.previousElementSibling;if(label?.classList.contains('section-label'))label.classList.add('note-label');if(low){physicalCapacity=null;$('#cycleSymptomSection')?.classList.remove('low-show-symptoms')}else{$('#cycleSymptomSection')?.classList.remove('low-show-symptoms')}}
function enhanceLowMode(){['lowMode','quickMode','deepMode','lowEnergyBtn','openCheckinBtn','backfillBtn','historyBackfillBtn'].forEach(id=>$('#'+id)?.addEventListener('click',()=>setTimeout(syncLowMode,0)));syncLowMode();setTimeout(syncLowMode,0)}
enhanceBleeding();enhanceLowMode();
})();
