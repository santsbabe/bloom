(()=>{
if(window.__bloomMedsLoaded)return;window.__bloomMedsLoaded=true;
const KEY='bloom.entries.v3';
const $=s=>document.querySelector(s);
let medsTaken=null;
function loadEntries(){try{let e=JSON.parse(localStorage.getItem(KEY)||'null');if(!Array.isArray(e))e=JSON.parse(localStorage.getItem('bloom.entries.v2')||'[]');return Array.isArray(e)?e:[]}catch{return []}}
function displayToISO(s){const m=/^(\d{2})\/(\d{2})\/(\d{4})$/.exec((s||'').trim());return m?`${m[3]}-${m[2]}-${m[1]}`:null}
function setChoice(v){medsTaken=v;document.querySelectorAll('#medsTakenBlock button[data-meds]').forEach(b=>{const on=(b.dataset.meds==='yes')===v;b.classList.toggle('sel',on);b.setAttribute('aria-pressed',String(on))})}
function ensureUI(){
 if($('#medsTakenBlock'))return;
 const host=$('#quickDeepSection');if(!host)return;
 const block=document.createElement('section');block.id='medsTakenBlock';block.className='domain meds-taken-block';block.innerHTML='<h3>Meds taken?</h3><div class="meds-tap"><button type="button" class="tag" data-meds="yes" aria-pressed="false">Yes</button><button type="button" class="tag" data-meds="no" aria-pressed="false">No</button></div>';
 host.prepend(block);
 block.querySelectorAll('button[data-meds]').forEach(b=>b.addEventListener('click',()=>setChoice(b.dataset.meds==='yes')));
 const style=document.createElement('style');style.textContent='.meds-taken-block{margin-bottom:16px;border-top-color:var(--yellow)!important}.meds-tap{display:flex;gap:10px;margin-top:10px}.meds-tap .tag{min-width:90px;min-height:48px;font-size:16px;font-weight:800}.meds-tap .tag.sel{background:var(--yp);border-color:var(--yellow)}#checkinForm.low-mode #medsTakenBlock{display:none!important}';document.head.appendChild(style);
}
function syncVisibility(){ensureUI();const low=$('#lowMode')?.classList.contains('active');if($('#medsTakenBlock'))$('#medsTakenBlock').hidden=!!low}
function restoreFromCurrent(){
 const date=displayToISO($('#entryDate')?.value),time=$('#entryTime')?.value;if(!date)return setChoice(null);
 const entry=[...loadEntries()].reverse().find(e=>e.date===date&&(!time||e.time===time));
 setChoice(typeof entry?.medsTaken==='boolean'?entry.medsTaken:null);
}
function resetChoice(){setChoice(null);syncVisibility()}
ensureUI();syncVisibility();
['lowMode','quickMode','deepMode'].forEach(id=>$('#'+id)?.addEventListener('click',()=>setTimeout(syncVisibility,0)));
['openCheckinBtn','lowEnergyBtn','backfillBtn','historyBackfillBtn','clearBtn'].forEach(id=>$('#'+id)?.addEventListener('click',()=>setTimeout(resetChoice,0)));
document.addEventListener('click',e=>{const t=e.target;if(!(t instanceof HTMLElement))return;if(t.matches('.history-actions button')&&t.textContent.trim()==='Edit')setTimeout(()=>{syncVisibility();restoreFromCurrent()},0)});
document.addEventListener('submit',e=>{
 if(e.target?.id!=='checkinForm')return;
 const low=$('#lowMode')?.classList.contains('active');if(low)return;
 if(medsTaken===null){e.preventDefault();e.stopImmediatePropagation();alert('Did you take your meds? Tap Yes or No.');$('#medsTakenBlock')?.scrollIntoView({behavior:'smooth',block:'center'});return}
 const date=displayToISO($('#entryDate')?.value),time=$('#entryTime')?.value,value=medsTaken,stamp=Date.now();if(!date||!time)return;
 setTimeout(()=>{
   const all=loadEntries();
   const candidates=all.map((entry,i)=>({entry,i})).filter(x=>x.entry.date===date&&x.entry.time===time);
   if(!candidates.length)return;
   const target=candidates.sort((a,b)=>(b.entry.createdAt||0)-(a.entry.createdAt||0))[0];
   if((target.entry.createdAt||0)<stamp-5000)return;
   all[target.i]={...target.entry,medsTaken:value};
   localStorage.setItem(KEY,JSON.stringify(all));
 },120);
},true);
})();
