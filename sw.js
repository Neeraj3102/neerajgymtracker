(()=>{
  self.addEventListener('activate', (event) => {
    event.waitUntil(
      caches.keys().then((keys) => Promise.all(keys.map((k) => caches.delete(k)))).then(() => self.clients.claim())
    );
  });
  self.addEventListener('install', () => {
    self.skipWaiting();
  });
  if(!self.define){
    let i,o={};
    const t=(e,l)=>(e=new URL(e+".js",l).href,o[e]||new Promise(s=>{
      if("document"in self){
        const r=document.createElement("script");
        r.src=e,r.onload=s,document.head.appendChild(r);
      } else i=e,importScripts(e),s();
    }).then(()=>{
      let s=o[e];
      if(!s)throw new Error(`Module ${e} didn’t register its module`);
      return s;
    }));
    self.define=(e,l)=>{
      const s=i||("document"in self?document.currentScript.src:"")||location.href;
      if(o[s])return;
      let r={};
      const c=n=>t(n,s),u={module:{uri:s},exports:r,require:c};
      o[s]=Promise.all(e.map(n=>u[n]||c(n))).then(n=>(l(...n),r));
    };
  }
  define(["./workbox-9c191d2f"],function(i){
    "use strict";
    self.skipWaiting();
    i.clientsClaim();
    i.cleanupOutdatedCaches();
    i.registerRoute(new i.NavigationRoute(i.createHandlerBoundToURL("/index.html")));
  });
})();
