const CACHE='bloom-v28';
const ASSETS=['./','./index.html','./styles.css','./trigger-assets.css','./app.js','./manifest.webmanifest','./bloom.config.json','./assets/triggers/trigger-assets.json','./assets/triggers/sleep.png','./assets/triggers/caffeinate.png','./assets/triggers/alcohol.png','./assets/triggers/breathe.png','./assets/triggers/hydrate.png','./assets/triggers/sense.png'];
self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS)).then(()=>self.skipWaiting())));
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',e=>{if(e.request.method!=='GET')return;e.respondWith(fetch(e.request).then(r=>{const copy=r.clone();caches.open(CACHE).then(c=>c.put(e.request,copy));return r}).catch(()=>caches.match(e.request).then(r=>r||caches.match('./index.html'))))});
