(()=>{
const $=s=>document.querySelector(s);
function cycleData(){try{return JSON.parse(localStorage.getItem('bloom.cycle.v1')||'{}')}catch{return {}}}
function todayISO(){const d=new Date(),p=n=>String(n).padStart(2,'0');return `${d.getFullYear()}-${p(d.getMonth()+1)}-${p(d.getDate())}`}
function syncBleeding(){const btn=$('#bleedingBtn');if(!btn)return;const on=Array.isArray(cycleData().bleedingDays)&&cycleData().bleedingDays.includes(todayISO());btn.setAttribute('role','switch');btn.setAttribute('aria-checked',String(on));btn.innerHTML=`<span>Bleeding today</span><span class="switch-track" aria-hidden="true"><span class="switch-knob"></span></span><span class="switch-state">${on?'Yes':'No'}</span>`}
function enhanceBleeding(){const btn=$('#bleedingBtn');if(!btn||btn.closest('.bleeding-wrap'))return;const wrap=document.createElement('div');wrap.className='bleeding-wrap';btn.parentNode.insertBefore(wrap,btn);wrap.appendChild(btn);btn.classList.add('bleeding-switch');const help=document.createElement('div');help.className='bleeding-help';help.textContent='Records whether you had menstrual bleeding today. Turn this on for any bleeding today; turn it off if you did not.';wrap.appendChild(help);syncBleeding();btn.addEventListener('click',()=>setTimeout(syncBleeding,0));$('#periodStartBtn')?.addEventListener('click',()=>setTimeout(syncBleeding,0))}
function syncLowMode(){const form=$('#checkinForm'),note=$('#note');if(!form||!note)return;const low=$('#lowMode')?.classList.contains('active');form.classList.toggle('low-mode',!!low);const label=note.previousElementSibling;if(label?.classList.contains('section-label'))label.classList.add('note-label')}
function enhanceLowMode(){['lowMode','quickMode','deepMode'].forEach(id=>$('#'+id)?.addEventListener('click',()=>setTimeout(syncLowMode,0)));syncLowMode()}
enhanceBleeding();enhanceLowMode();
})();
