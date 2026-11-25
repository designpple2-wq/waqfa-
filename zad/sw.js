// Offline cache for زاد. Bump VERSION on every update so phones pick up the new files.
const VERSION='zad-waqfa-2026-11-25r';
const CORE=['./','index.html','../app.css?v='+VERSION.slice(10),'../app.js?v='+VERSION.slice(10),'manifest.webmanifest','icon-180.png','icon-192.png','icon-512.png'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(VERSION).then(c=>c.addAll(CORE.map(u=>new Request(u,{cache:'reload'})))).then(()=>self.skipWaiting()))});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==VERSION).map(k=>caches.delete(k)))).then(()=>self.clients.claim()))});
self.addEventListener('fetch',e=>{
  const r=e.request; if(r.method!=='GET')return;
  const page=r.mode==='navigate';
  e.respondWith(caches.open(VERSION).then(async c=>{
    const hit=await c.match(r,{ignoreSearch:true});
    const net=fetch(page?new Request(r.url,{cache:'no-store'}):r).then(res=>{if(res&&(res.ok||res.type==='opaque'))c.put(r,res.clone());return res}).catch(()=>null);
    if(page){const res=await Promise.race([net,new Promise(ok=>setTimeout(()=>ok(null),2500))]);if(res)return res;if(hit){e.waitUntil(net);return hit}return (await net)||(await c.match('index.html'))||Response.error()}
    if(hit){e.waitUntil(net);return hit}          // offline first for files: saved copy now, refresh in background
    const res=await net; if(res)return res;
    return (await c.match('index.html'))||Response.error();
  }));
});
