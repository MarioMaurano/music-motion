// Music Motion — motor compartido del sitio (idioma · tamano · niveles)
function setLang(l){
  document.documentElement.setAttribute('data-lang', l);
  document.documentElement.setAttribute('lang', l);
  var es=document.getElementById('b-es'), en=document.getElementById('b-en');
  if(es) es.classList.toggle('on', l==='es');
  if(en) en.classList.toggle('on', l==='en');
  try{ localStorage.setItem('mmSiteLang', l); }catch(e){}
}
// setTheme vive en mm-theme.js (motor de tema compartido, clave mmTheme)
function setSize(pct){
  document.documentElement.style.fontSize = pct + '%';
  document.querySelectorAll('.sizetog button').forEach(function(b){ b.classList.toggle('on', b.getAttribute('data-sz')===String(pct)); });
  try{ localStorage.setItem('mmSiteSize', pct); }catch(e){}
}
function setLvl(btn, lvl){
  var lesson = btn.closest('.lesson');
  lesson.setAttribute('data-lvl', lvl);
  lesson.querySelectorAll('.levels button').forEach(function(b){ b.classList.remove('on'); });
  btn.classList.add('on');
}
document.querySelectorAll('.themetog button').forEach(function(b){
  b.addEventListener('click', function(){ setTheme(b.getAttribute('data-th')); });
});
document.querySelectorAll('.sizetog button').forEach(function(b){
  b.addEventListener('click', function(){ setSize(parseInt(b.getAttribute('data-sz'),10)); });
});
// el tema lo restaura mm-theme.js
try{ var sl=localStorage.getItem('mmSiteLang'); setLang(sl||'en');   // default EN para visitantes nuevos; la elección guardada se respeta
     var sz=localStorage.getItem('mmSiteSize'); if(sz) setSize(parseInt(sz,10)); }catch(e){}

// ── Menu: marcar en oro donde estamos (2026-09-20, Mario) ───────────────────────────────
// Dos casos en el mismo menu: enlaces a OTRA pagina (instruments.html, colegios.html...) y
// anclas de ESTA pagina (#apps, #aula...). Los primeros se marcan una vez; las anclas se
// van marcando segun la seccion que queda debajo del encabezado al rodar la pagina.
(function(){
  var aqui = (location.pathname.split('/').pop() || 'index.html').toLowerCase();
  if(aqui === '') aqui = 'index.html';
  var espias = [];
  document.querySelectorAll('nav a').forEach(function(a){
    var href = a.getAttribute('href') || '';
    if(!href || /^(https?:|mailto:|tel:)/i.test(href)) return;
    var i = href.indexOf('#');
    var ruta = i < 0 ? href : href.slice(0, i);
    var ancla = i < 0 ? ''   : href.slice(i);
    var archivo = (ruta.split('/').pop() || '').toLowerCase();
    var estaPagina = (ruta === '' || archivo === aqui);
    if(!estaPagina) return;                       // enlace a otra pagina: no se toca
    var sec = null;
    try{ sec = document.querySelector(ancla || '#inicio'); }catch(e){}
    if(sec) espias.push({a:a, sec:sec});          // ancla viva: la vigila el rodado
    else if(!ancla) a.setAttribute('aria-current','page');   // pagina suelta, sin secciones
  });
  if(!espias.length) return;
  var pendiente = false;
  function mirar(){
    pendiente = false;
    var cab = document.querySelector('header');
    var tope = (cab ? cab.offsetHeight : 0) + 12;
    var elegida = espias[0];
    espias.forEach(function(e){
      if(e.sec.getBoundingClientRect().top <= tope) elegida = e;
    });
    // al final de la pagina gana siempre la ultima, aunque no haya llegado al tope
    if(window.innerHeight + window.scrollY >= document.body.scrollHeight - 4) elegida = espias[espias.length-1];
    espias.forEach(function(e){
      if(e === elegida) e.a.setAttribute('aria-current','location');
      else e.a.removeAttribute('aria-current');
    });
  }
  function pedir(){ if(!pendiente){ pendiente = true; requestAnimationFrame(mirar); } }
  window.addEventListener('scroll', pedir, {passive:true});
  window.addEventListener('resize', pedir);
  mirar();
})();
