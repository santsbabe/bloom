(()=>{
const D=window.BloomData;
if(!D)return;
const n=v=>v===null||v===undefined||v===''?null:Number(v);
function ingest(payload){if(!payload||typeof payload!=='object')throw new Error('Health bridge payload must be an object');const captured=payload.capturedAt?new Date(payload.capturedAt):new Date();const parts=D.nowParts(captured);const sourceMeta={source:'appleHealth',localDate:payload.localDate||parts.localDate,localTime:payload.localTime||parts.localTime,timeZone:payload.timeZone||parts.timeZone,utcTimestamp:payload.capturedAt||parts.utcTimestamp};const created=[];
 if(n(payload.steps)!=null)created.push(D.saveEvent({...sourceMeta,eventType:'activitySteps',steps:n(payload.steps),authoritative:true}));
 if(n(payload.restingHeartRate)!=null)created.push(D.saveEvent({...sourceMeta,eventType:'heartRate',metric:'resting',bpm:n(payload.restingHeartRate)}));
 if(n(payload.heartRateMin)!=null||n(payload.heartRateMax)!=null||n(payload.heartRateAverage)!=null)created.push(D.saveEvent({...sourceMeta,eventType:'heartRate',metric:'dailySummary',minBpm:n(payload.heartRateMin),maxBpm:n(payload.heartRateMax),averageBpm:n(payload.heartRateAverage)}));
 if(n(payload.hrv)!=null)created.push(D.saveEvent({...sourceMeta,eventType:'hrv',sdnnMs:n(payload.hrv)}));
 if(n(payload.respiratoryRate)!=null)created.push(D.saveEvent({...sourceMeta,eventType:'respiratoryRate',breathsPerMinute:n(payload.respiratoryRate)}));
 if(payload.sleep&&typeof payload.sleep==='object'){created.push(D.saveEvent({...sourceMeta,eventType:'morningSleep',source:'appleHealth',healthRaw:{...payload.sleep},bedtime:payload.sleep.bedtime||null,wakeTime:payload.sleep.wakeTime||null,durationMinutes:n(payload.sleep.durationMinutes),sleepStages:payload.sleep.stages||null,imported:true}))}
 return created;
}
function parseText(text){const payload=typeof text==='string'?JSON.parse(text):text;return ingest(payload)}
window.BloomHealth={ingest,parseText};
})();