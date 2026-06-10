// ════════════════════════════════════════════════════════════════
// Music Motion — motor de tema compartido (sitio + apps)
// Una sola clave de persistencia: mmTheme. Mismo origen (localhost) =
// el tema elegido en cualquier app o página se mantiene en todas.
// Temas: dark · gray · clear · contrast (ver mm-theme.css).
// ════════════════════════════════════════════════════════════════
(function(){
  var KEY='mmTheme', THEMES=['dark','gray','clear','contrast'];
  window.setTheme=function(t){
    if(THEMES.indexOf(t)<0) t='dark';
    document.documentElement.setAttribute('data-theme', t);
    // muestras del sitio (.themetog) — si existen
    var sw=document.querySelectorAll('.themetog button[data-th]');
    sw.forEach(function(b){ b.classList.toggle('on', b.getAttribute('data-th')===t); });
    try{ localStorage.setItem(KEY, t); }catch(e){}
    // aviso para que cada app refleje su propio switcher si lo necesita
    try{ document.dispatchEvent(new CustomEvent('mm-theme', {detail:t})); }catch(e){}
  };
  window.getTheme=function(){
    try{ var t=localStorage.getItem(KEY); return THEMES.indexOf(t)>=0 ? t : 'dark'; }catch(e){ return 'dark'; }
  };
  // restaurar al cargar
  try{ var saved=localStorage.getItem(KEY); if(THEMES.indexOf(saved)>=0) window.setTheme(saved); }catch(e){}
})();
