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
try{ var sl=localStorage.getItem('mmSiteLang'); if(sl) setLang(sl);
     var sz=localStorage.getItem('mmSiteSize'); if(sz) setSize(parseInt(sz,10)); }catch(e){}
