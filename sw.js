const CACHE='bloom-v22';
const ASSETS=['./','./index.html','./ui.css','./app.js','./insights.js','./ux-fixes.css','./ux-fixes.js','./core-fixes.js','./manifest.webmanifest','./icon.svg'];
self.addEventListener('install',e=>{self.skipWaiting();e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS)))});
self.addEventListener('activate',e=>e.waitUntil(Promise.all([self.clients.claim(),caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k))))])));
self.addEventListener('fetch',e=>{
  const req=e.request;
  if(req.mode==='navigate'){
    e.respondWith(fetch(req).then(async r=>{
      let html=await r.text();
      html=html.replace('ui.css?v=9','ui.css?v=22').replace('app.js?v=9','app.js?v=22').replace('insights.js?v=9','insights.js?v=22');
      if(!html.includes('ux-fixes.js'))html=html.replace('</body>','<script src="ux-fixes.js?v=22"></script></body>');
      if(!html.includes('core-fixes.js'))html=html.replace('</body>','<script src="core-fixes.js?v=22"></script></body>');
      return new Response(html,{status:r.status,statusText:r.statusText,headers:{'Content-Type':'text/html; charset=utf-8','Cache-Control':'no-cache'}});
    }).catch(async()=>{
      const cached=await caches.match('./index.html');
      if(!cached)return Response.error();
      let html=await cached.text();
      html=html.replace('ui.css?v=9','ui.css?v=22').replace('app.js?v=9','app.js?v=22').replace('insights.js?v=9','insights.js?v=22');
      if(!html.includes('ux-fixes.js'))html=html.replace('</body>','<script src="ux-fixes.js?v=22"></script></body>');
      if(!html.includes('core-fixes.js'))html=html.replace('</body>','<script src="core-fixes.js?v=22"></script></body>');
      return new Response(html,{headers:{'Content-Type':'text/html; charset=utf-8'}});
    }));
    return;
  }
  e.respondWith(caches.match(req,{ignoreSearch:true}).then(r=>r||fetch(req)));
});
