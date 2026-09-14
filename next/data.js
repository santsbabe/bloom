(()=>{
const STORE='bloom.events.v1';
const LEGACY=['bloom.entries.v3','bloom.entries.v2'];
const CYCLE='bloom.cycle.v1';
const META='bloom.meta.v1';
const pad=n=>String(n).padStart(2,'0');
const nowParts=(d=new Date())=>({localDate:`${d.getFullYear()}-${pad(d.getMonth()+1)}-${pad(d.getDate())}`,localTime:`${pad(d.getHours())}:${pad(d.getMinutes())}`,timeZone:Intl.DateTimeFormat().resolvedOptions().timeZone||'UTC',utcTimestamp:d.toISOString()});
const read=(k,f)=>{try{const v=JSON.parse(localStorage.getItem(k)||'null');return v??f}catch{return f}};
const write=(k,v)=>localStorage.setItem(k,JSON.stringify(v));
const id=()=>`ev_${Date.now().toString(36)}_${Math.random().toString(36).slice(2,8)}`;
function events(){const e=read(STORE,[]);return Array.isArray(e)?e:[]}
function saveEvent(event){const all=events();const stamp=nowParts();const out={id:event.id||id(),createdAt:event.createdAt||Date.now(),source:event.source||'manual',...stamp,...event};const i=all.findIndex(x=>x.id===out.id);if(i>=0)all[i]=out;else all.push(out);all.sort((a,b)=>(a.utcTimestamp||'').localeCompare(b.utcTimestamp||''));write(STORE,all);return out}
function removeEvent(eventId){write(STORE,events().filter(e=>e.id!==eventId))}
function eventsForDate(date){return events().filter(e=>e.localDate===date)}
function hasBaseline(date){const types=new Set(eventsForDate(date).map(e=>e.eventType));return types.has('morningSleep')&&types.has('medicationAdherence')&&types.has('dailyState')}
function latest(type,date){return [...events()].reverse().find(e=>e.eventType===type&&(!date||e.localDate===date))||null}
function legacyToEvents(entry){const base={localDate:entry.date,localTime:entry.time||'12:00',timeZone:Intl.DateTimeFormat().resolvedOptions().timeZone||'UTC',utcTimestamp:new Date(`${entry.date}T${entry.time||'12:00'}:00`).toISOString(),source:'imported',legacyId:entry.id||null,legacyMode:entry.mode||null};const out=[];
 if(entry.sleep!=null)out.push({...base,id:id(),eventType:'morningSleep',legacyScale:entry.sleep});
 if(typeof entry.medsTaken==='boolean')out.push({...base,id:id(),eventType:'medicationAdherence',legacySummary:true,medications:[{name:'Legacy medication entry',status:entry.medsTaken?'yes':'no'}]});
 const snapshotFields=['activation','energy','mood','reward','executive','cognitive','regulation'];
 if(snapshotFields.some(k=>entry[k]!=null)||(entry.brain||[]).length||(entry.context||[]).length||(entry.cycleSymptoms||[]).length||entry.note){out.push({...base,id:id(),eventType:'periodicSnapshot',legacyRatings:Object.fromEntries(snapshotFields.map(k=>[k,entry[k]??null])),adhdTags:entry.brain||[],contextTags:entry.context||[],bodyTags:entry.cycleSymptoms||[],note:entry.note||''})}
 return out;
}
function migrateLegacy(){const meta=read(META,{});if(meta.legacyMigrated)return {migrated:0,already:true};let legacy=[];for(const key of LEGACY){const v=read(key,null);if(Array.isArray(v)){legacy=v;break}}
 if(!legacy.length){write(META,{...meta,legacyMigrated:true,legacyMigratedAt:new Date().toISOString(),legacyCount:0});return {migrated:0}}
 const current=events();const seen=new Set(current.map(e=>`${e.legacyId||''}|${e.eventType}|${e.localDate}|${e.localTime}`));let added=0;
 legacy.flatMap(legacyToEvents).forEach(e=>{const sig=`${e.legacyId||''}|${e.eventType}|${e.localDate}|${e.localTime}`;if(!seen.has(sig)){current.push(e);seen.add(sig);added++}});
 current.sort((a,b)=>(a.utcTimestamp||'').localeCompare(b.utcTimestamp||''));write(STORE,current);write(META,{...meta,legacyMigrated:true,legacyMigratedAt:new Date().toISOString(),legacyCount:legacy.length,migratedEvents:added});return {migrated:added,legacyCount:legacy.length};
}
function cycle(){return read(CYCLE,{periodStarts:[],bleedingDays:[],phaseOverrides:[]})}
function exportAll(){return {version:2,exportedAt:new Date().toISOString(),events:events(),cycle:cycle(),meta:read(META,{})}}
window.BloomData={STORE,events,saveEvent,removeEvent,eventsForDate,hasBaseline,latest,migrateLegacy,cycle,exportAll,nowParts};
})();