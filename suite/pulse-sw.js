// Pulse — service worker (2026-11-20): para que el metrónomo instalado en el teléfono abra también sin internet.
// La página va «primero la red» (así llega siempre la versión nueva) y, si no hay red, la guardada.
const C='mm-pulse-v1';
const FILES=['pulse.html','mm-theme.css','mm-theme.js','/icons/pulse.webmanifest','/icons/mm-pulse-192.png','/icons/mm-pulse-512.png'];
self.addEventListener('install',e=>{ e.waitUntil(caches.open(C).then(c=>c.addAll(FILES)).then(()=>self.skipWaiting())); });
self.addEventListener('activate',e=>{ e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k.startsWith('mm-pulse-')&&k!==C).map(k=>caches.delete(k)))).then(()=>self.clients.claim())); });
self.addEventListener('fetch',e=>{ const r=e.request; if(r.method!=='GET') return;
  e.respondWith(fetch(r).then(res=>{ if(res&&res.ok&&(r.url.startsWith(self.location.origin)||/fonts\.(googleapis|gstatic)\.com/.test(r.url))){ const cp=res.clone(); caches.open(C).then(c=>c.put(r,cp)); } return res; })
    .catch(()=>caches.match(r,{ignoreSearch:true}))); });
