const CACHE='bloom-v15';
const ASSETS=['./','./index.html','./ui.css','./app.js','./insights.js','./ux-fixes.css','./ux-fixes.js','./manifest.webmanifest','./icon.svg'];
self.addEventListener('install',e=>{self.skipWaiting();e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS)))});
self.addEventListener('activate',e=>e.waitUntil(Promise.all([self.clients.claim(),caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k))))])));
self.addEventListener('fetch',e=>{
  const req=e.request;
  if(req.mode==='navigate'){
    e.respondWith(fetch(req).then(async r=>{
      let html=await r.text();
      if(!html.includes('ux-fixes.js'))html=html.replace('</body>','<script src="ux-fixes.js?v=15"></script></body>');
      return new Response(html,{status:r.status,statusText:r.statusText,headers:{'Content-Type':'text/html; charset=utf-8','Cache-Control':'no-cache'}});
    }).catch(()=>caches.match('./index.html')));
    return;
  }
  e.respondWith(caches.match(req).then(r=>r||fetch(req)));
});
