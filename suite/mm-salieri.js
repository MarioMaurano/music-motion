// Music Motion — mm-salieri.js (SITIO) · 2026-10-22
// La misma puerta de Salieri que las apps (_BASE/mm-theme.js, bloque «SALIERI — PASE PROPIO»), para las páginas
// del sitio (Instrumentos y el mezclador de Rimsky-Korsakov). Mismo origen que las apps: el pase (mmPaseSalieri)
// es uno solo. Si cambia allá, se copia acá; el idioma es el del sitio (data-lang / mmSiteLang).
// ════════════════════════════════════════════════════════════════
// SALIERI — PASE PROPIO (2026-10-22, Mario: «al accionar la tarjeta es otra sección de los créditos…
// catálogos de orquestación, clases de armonía y contrapunto más profundamente que el coach básico…
// una ventana de seguridad al abrir la tarjeta de Salieri»).
//  · mmSalieriAbierto()  true si este aparato tiene el pase Salieri: en local (localhost, file://) para trabajar,
//    con ?salieri=test (presentaciones), o con una licencia firmada válida (mmSalieriVerificar, abajo).
//  · mmSalieriPuerta()   la ventana que explica el pase cuando no está abierto (popup de la casa:
//    borde wine arriba, pin ⊗ ON al abrir, header arrastrable, clic afuera cierra si no está fijado).
// ════════════════════════════════════════════════════════════════
(function(){
  // 2026-10-22 (v20, «Salieri pagos»): el pase es una LICENCIA FIRMADA por el servidor (Salieri.gs, action=salieri)
  // con la clave privada de Mario; aquí solo vive la clave PÚBLICA, y la firma se comprueba en el aparato. La
  // licencia se guarda en mmPaseSalieri {lic, sig} y solo vale en el aparato que la pidió (lic.a = mmCredToken).
  // Sin clave pública configurada (MM_SALIERI_PUB vacío) nada abre por licencia: solo local y ?salieri=test.
  // 2026-10-30: la clave PÚBLICA del servidor real (la privada vive en las propiedades del script mm-credits-backend,
  // creada con el Administrador de Salieri). Si algún día se reemplaza allá, se cambia acá: las licencias viejas dejan de valer.
  var PUB = (typeof window.MM_SALIERI_PUB === 'string') ? window.MM_SALIERI_PUB : 'MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAzbRORGVXWVPEZL7TqRsit1ktjr95pbo+IabOFk/4X2SmzPR7zQ3vTayGQ5Pb3EEApJUHNHb5mV6G0SQVwbfxlzF7PM1Orl/OcWM7JOicbYJmFHRLyA3Ax9kTyp5nMc8biwVq65xcTaPD4b9JSCY9AxvoU+FbBK3+C1pMxGF16wR7hFIxBdGjhxKQtyf+DxQbuFzIZjq0eOhnKE/uqN+9kqJaPGB5DxOthd6YhDY6i+pGaj260KDesszrJXGA2g4ejzW3f/rAHsirPFSdNEkFC5N7CC2ypaqhsuizi1bI28dIBo49qIjjDaX1aNiwCr63GwTfIFxEBMXdDeOejlr+WwIDAQAB';
  var GAS = 'https://script.google.com/macros/s/AKfycbxBbtMDqXziUUpWcntf6tDuNSnAMOhxLHGTXZTPRSrUg2VGvyR4zQw44ZAqFnKhnbSkPg/exec';
  var KEY = 'ZA3Qkfo9LtuxFAmz6_qBJh7UmNFCYkkN';   // la misma key pública de la puerta
  // MODO PRUEBA (2026-10-22, con Mario): ?salieri=prueba deja este aparato hablando con el servidor de PRUEBA
  // (mm-credits-backend PRUEBA v18) y su clave pública; ?salieri=real lo devuelve al servidor de verdad. No abre
  // nada por sí solo: igual hace falta una licencia firmada por ese servidor para este aparato.
  var PRUEBA = { gas: 'https://script.google.com/macros/s/AKfycbzImoOnPl2X9DThmudDmZuWlErW7YmdNVewmuP_Q1LjCNKPmTqoFqzHcwYGbWodXlOw/exec',
                 pub: 'MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA4UP/jCrOvY2sjAHGmGnEtYm4R/xGEOpz9dVVfLTtJz9/yw167Y0nS13r7EftcXtY0JkWbbwJcsIQiAgw75tftiXZrxrUJELJGEhEXe9qYRuDjcy3BZFpsqI9+psax7CE1zG/P7HgKNSiyrgZTF1THAo+8pYktmTqMkleeV+LmXXW7wx+HedOqmGbgLpOzPwgvDro8RQTQUwpc+mNZImM1wlozmYJ4Pwl6+FJpOho4BXuYlUTGKnyy4VamKLl4bHHWB0mPFGcY51MBaQJfMv6BDgWWGv5oi4pOC8MHK+BLwBWmHVRvubXWQs2JtVPRzmm2WVmdGZfNn/MMvcgw676SwIDAQAB' };
  try{
    if(/[?&]salieri=prueba(&|$)/.test(location.search)){ localStorage.setItem('mmSalieriPrueba','1'); localStorage.removeItem('mmPaseSalieri'); }
    if(/[?&]salieri=real(&|$)/.test(location.search)){ localStorage.removeItem('mmSalieriPrueba'); localStorage.removeItem('mmPaseSalieri'); }
    if(localStorage.getItem('mmSalieriPrueba')==='1' && typeof window.MM_SALIERI_PUB !== 'string'){ GAS = PRUEBA.gas; PUB = PRUEBA.pub; }
  }catch(e){}
  // 2026-10-30: los dos Payment Links del Music School Coach (en Stripe llevan metadata producto=salieri; el Worker
  // mm-pagos la pasa y Salieri.gs da el pase) y PayPal para el pase completo. Se cuelga el aparato (client_reference_id).
  var STRIPE_49 = 'https://buy.stripe.com/8x214mfII6rAb3Jh19ebu04';   // plink_1UWHySBPfHClmQ3HFDQkxhRe · un año, con la suite
  var STRIPE_20 = 'https://buy.stripe.com/4gMaEW5442bk9ZF12bebu05';   // plink_1UWI4GBPfHClmQ3HSMWTI2JY · mejora: ya tiene el pase anual o el código del colegio
  var PAYPAL_49 = 'https://www.paypal.me/MarioMAURANO/49';
  var LS = 'mmPaseSalieri', _ok = false, _prom = null;
  function _local(){
    try{
      if(/^(localhost|127\.0\.0\.1|\[::1\])$/.test(location.hostname) || location.protocol==='file:') return true;
      return /[?&]salieri=test(&|$)/.test(location.search);
    }catch(e){ return false; }
  }
  window.mmSalieriAbierto=function(){ return _local() || _ok; };
  function _bytes(s, url){ s=String(s||''); if(url){ s=s.replace(/-/g,'+').replace(/_/g,'/'); } s=s.replace(/[^A-Za-z0-9+/]/g,''); while(s.length%4) s+='=';
    var bin=atob(s), u=new Uint8Array(bin.length); for(var i=0;i<bin.length;i++) u[i]=bin.charCodeAt(i); return u; }
  function _hoy(){ var d=new Date(); return d.getFullYear()+'-'+('0'+(d.getMonth()+1)).slice(-2)+'-'+('0'+d.getDate()).slice(-2); }
  function _token(){ try{ return localStorage.getItem('mmCredToken')||''; }catch(e){ return ''; } }
  function _verifica(o){
    if(!o || !o.lic || !o.sig || !PUB || !(window.crypto && crypto.subtle)) return Promise.resolve(false);
    var ALG={name:'RSASSA-PKCS1-v1_5', hash:'SHA-256'};
    return crypto.subtle.importKey('spki', _bytes(PUB), ALG, false, ['verify'])
      .then(function(k){ return crypto.subtle.verify(ALG, k, _bytes(o.sig, true), new TextEncoder().encode(o.lic)); })
      .then(function(firma){
        if(!firma) return false;
        var d=JSON.parse(new TextDecoder().decode(_bytes(o.lic, true)));
        if(d.a && d.a!==_token()) return false;          // otro aparato
        return !!(d.v && _hoy()<=d.v);                    // vencida
      }).catch(function(){ return false; });
  }
  function _pedir(){
    var t=_token(); if(!t || !PUB || typeof fetch!=='function') return Promise.resolve(null);
    return fetch(GAS+'?action=salieri&key='+encodeURIComponent(KEY)+'&device_token='+encodeURIComponent(t))
      .then(function(r){ return r.json(); })
      .then(function(j){ if(j && j.salieri && j.lic && j.sig){ var o={lic:j.lic, sig:j.sig}; try{ localStorage.setItem(LS, JSON.stringify(o)); }catch(e){} return o; }
                         if(j && j.ok && j.salieri===false){ try{ localStorage.removeItem(LS); }catch(e){} } return null; })
      .catch(function(){ return null; });
  }
  // Comprueba (y si hace falta pide) la licencia; avisa con el evento 'mm-salieri' cuando queda abierto.
  window.mmSalieriVerificar=function(){
    if(_prom) return _prom;
    _prom = (function(){
      if(_local()) return Promise.resolve(true);
      var o=null; try{ o=JSON.parse(localStorage.getItem(LS)||'null'); }catch(e){}
      return _verifica(o).then(function(v){ return v ? true : _pedir().then(function(n){ return n ? _verifica(n) : false; }); });
    })().then(function(v){
      _ok=!!v;
      if(v){ try{ document.dispatchEvent(new CustomEvent('mm-salieri', { detail:{ abierto:true } })); }catch(e){} }
      return _ok;
    });
    return _prom;
  };
  setTimeout(function(){ window.mmSalieriVerificar(); }, 0);
  // «Ya pagué — volver a mirar»: olvida la licencia guardada y vuelve a preguntarle al servidor.
  window.mmSalieriRevisar=function(){ try{ localStorage.removeItem(LS); }catch(e){} _prom=null; _ok=false; return window.mmSalieriVerificar(); };
  function _compra(u){ var q=[]; var t=_token(); if(t) q.push('client_reference_id='+encodeURIComponent(t)); var m=''; try{ m=localStorage.getItem('mmCredEmail')||''; }catch(e){} if(m.indexOf('@')>0) q.push('prefilled_email='+encodeURIComponent(m)); return u+(q.length?'?'+q.join('&'):''); }
  // ¿tiene base para la mejora? El pie de la puerta (mm-puerta.js) dice «Pase anual» o «Licencia …» cuando entró con una;
  // si dice otra cosa (créditos), no; si no hay pie (páginas del sitio), no se sabe y se ofrece igual.
  function _base(){ var el=document.getElementById('cred-saldo'); if(!el) return null; return /Pase anual|Annual pass|Licencia|Licence/.test(el.textContent||''); }
  function L(es, en){ var l=document.documentElement.getAttribute('data-lang'); if(!l){ try{ l=localStorage.getItem('mmSiteLang'); }catch(e){} } return l==='es' ? es : en; }   // en el sitio: el idioma del sitio (es · en)
  window.mmSalieriPuerta=function(){
    var doc=document, w=doc.getElementById('mm-salieri-pase');
    if(!w){
      var css=doc.createElement('style'); css.id='mm-salieri-pase-css';
      css.textContent=
        '#mm-salieri-pase{display:none;position:fixed;z-index:9600;left:50%;top:22%;transform:translateX(-50%);width:min(440px,92vw);'+
          'background:var(--panel,#0d0d18);border:1px solid var(--border,#1e1e34);border-top:2px solid var(--kb-border,#501828);'+
          "box-shadow:0 8px 28px rgba(0,0,0,.6);font-family:'DM Mono',monospace;color:var(--text,#e0e0f4)}"+
        '#mm-salieri-pase.open{display:block}'+
        '.mmsp-hd{display:flex;align-items:center;gap:10px;padding:7px 10px;cursor:move;border-bottom:1px solid var(--border,#1e1e34)}'+
        ".mmsp-hd h3{font-family:'DM Mono',monospace;font-size:12px;font-weight:500;letter-spacing:2px;text-transform:uppercase;color:#9a7ad8;margin:0;flex:1;text-align:center;padding-left:22px}"+
        '.mmsp-pin{cursor:pointer;font-size:12px;color:var(--textm,#c0c0e0);background:none;border:none;line-height:1}'+
        '.mmsp-pin.on{color:#9a7ad8}'+
        '.mmsp-bd{padding:12px 14px 14px;font-size:12px;line-height:1.65;color:var(--textm,#c0c0e0)}'+
        '.mmsp-bd p{margin:0 0 10px;text-align:justify}'+
        '.mmsp-bd b{color:var(--text,#e0e0f4);font-weight:500}'+
        '.mmsp-acts{display:flex;gap:8px;flex-wrap:wrap;margin-top:4px}'+
        '.mmsp-btn{font-family:inherit;font-size:10px;letter-spacing:1.5px;text-transform:uppercase;padding:6px 11px;cursor:pointer;'+
          'background:none;border:1px solid var(--border,#1e1e34);color:var(--textm,#c0c0e0);text-decoration:none}'+
        '.mmsp-btn:hover{border-color:#9a7ad8;color:var(--text,#e0e0f4)}'+
        '.mmsp-btn.main{border-color:#9a7ad8;color:#9a7ad8}'+
        // la compra en tarjeta clara, como la puerta de los créditos (mm-puerta.js · .cc-pago) — 2026-10-30, Mario
        '.mmsp-pago{margin:4px 0 12px;background:#fff;color:#1f2330;border-radius:8px;padding:16px;font-family:system-ui,-apple-system,"Segoe UI",Roboto,sans-serif}'+
        '.mmsp-h{font-size:13px;font-weight:600;margin:0 0 10px;color:#1f2330}'+
        '.mmsp-paq{display:flex;gap:8px}'+
        '.mmsp-paq a{flex:1;display:block;text-align:center;text-decoration:none;border:1px solid #d5d9e2;border-radius:6px;padding:10px 4px;color:#1f2330;background:#fff;transition:border-color .12s,box-shadow .12s}'+
        '.mmsp-paq a:hover{border-color:#635bff;box-shadow:0 0 0 3px rgba(99,91,255,.15)}'+
        '.mmsp-paq b{display:block;font-size:17px;font-weight:600;color:#1f2330}'+
        '.mmsp-paq span{display:block;font-size:11px;color:#5d6475;margin-top:2px}'+
        '.mmsp-met{display:flex;flex-wrap:wrap;gap:5px;justify-content:center;margin:10px 0 2px}'+
        '.mmsp-met span{display:inline-flex;align-items:center;gap:4px;font-size:10px;font-weight:600;border:1px solid #d5d9e2;border-radius:4px;padding:2px 7px;color:#3c4257;background:#f6f8fa}'+
        '.mmsp-pp{display:flex;align-items:center;gap:6px;margin-top:12px;padding-top:10px;border-top:1px solid #eceef3;font-size:11px;color:#5d6475}'+
        '.mmsp-pp a{text-decoration:none;color:#003087;font-weight:600;border:1px solid #d5d9e2;border-radius:4px;padding:3px 9px;background:#ffc439}'+
        '.mmsp-ya{display:block;width:100%;margin-top:12px;padding:9px;border:1px solid #d5d9e2;border-radius:6px;background:#f6f8fa;color:#1f2330;font-family:inherit;font-size:12px;cursor:pointer}'+
        '.mmsp-ya:hover{border-color:#635bff}'+
        '#mmsp-msg{font-size:11px;color:#5d6475;margin:8px 0 0;min-height:1.2em;text-align:center}';
      doc.head.appendChild(css);
      w=doc.createElement('div'); w.id='mm-salieri-pase';
      doc.body.appendChild(w);
      w._pinned=true;
      doc.addEventListener('pointerdown', function(e){ if(w.classList.contains('open') && !w._pinned && !w.contains(e.target)) w.classList.remove('open'); });
    }
    // 2026-10-30, Mario: «da la impresión que solo con PayPal»: los métodos de Stripe a la vista, como en la puerta de la suite.
    var _icoTarjeta='<svg width="14" height="10" viewBox="0 0 14 10" aria-hidden="true"><rect x=".5" y=".5" width="13" height="9" rx="1.5" fill="none" stroke="currentColor"/><rect x="0" y="2.5" width="14" height="1.6" fill="currentColor"/></svg>';
    var _icoMovil='<svg width="9" height="12" viewBox="0 0 9 12" aria-hidden="true"><rect x=".5" y=".5" width="8" height="11" rx="1.5" fill="none" stroke="currentColor"/><rect x="3" y="9" width="3" height="1" fill="currentColor"/></svg>';
    w.innerHTML=
      '<div class="mmsp-hd" id="mmsp-hd"><h3>Music School Coach · '+L('con Salieri','with Salieri')+'</h3>'+
        '<button class="mmsp-pin on" id="mmsp-pin" title="'+L('Fijar (clic afuera no cierra)','Pin (outside click keeps it open)')+'">⊗</button></div>'+
      '<div class="mmsp-bd">'+
        '<p>'+L('Salieri es el maestro exigente de la suite. Sabe todo lo del Suite Coach y va más hondo: el <b>catálogo de orquestación</b> (los 314 ejemplos de Rimsky-Korsakov, por instrumento) y las clases de <b>armonía</b> y <b>contrapunto</b>.',
               "Salieri is the suite's demanding master. He knows everything the Suite Coach teaches and goes deeper: the <b>orchestration catalogue</b> (Rimsky-Korsakov's 314 examples, by instrument) and the <b>harmony</b> and <b>counterpoint</b> classes.")+'</p>'+
        '<p>'+L('El Music School Coach es un pase anual aparte de los días de uso de la suite: <b>49 €</b> al año, con la suite incluida. Si ya tienes el pase anual o el código de tu colegio, la <b>mejora</b> cuesta <b>20 €</b> y dura hasta la misma fecha. Tras pagar, vuelve aquí y toca «Ya pagué».',
               "The Music School Coach is an annual pass separate from the suite's days of use: <b>€49</b> a year, suite included. If you already have the annual pass or your school code, the <b>upgrade</b> costs <b>€20</b> and lasts until the same date. After paying, come back here and press “I paid”.")+'</p>'+
        '<div class="mmsp-pago">'+
          '<div class="mmsp-h">'+L('Elige una opción','Choose an option')+'</div>'+
          '<div class="mmsp-paq">'+
            '<a id="mmsp-49" href="'+_compra(STRIPE_49)+'" target="_blank" rel="noopener"><b>49 €</b><span>'+L('un año, con la suite','one year, suite included')+'</span></a>'+
            (_base()===false ? '' : '<a id="mmsp-20" href="'+_compra(STRIPE_20)+'" target="_blank" rel="noopener"><b>20 €</b><span>'+L('mejora','upgrade')+'</span></a>')+
          '</div>'+
          '<div class="mmsp-met"><span>'+_icoTarjeta+L('Tarjeta','Card')+'</span><span>'+_icoTarjeta+'Bancontact</span><span>'+_icoMovil+'Apple Pay</span><span>'+_icoMovil+'Google Pay</span></div>'+
          '<div class="mmsp-pp"><span style="flex:1">'+L('o con PayPal','or with PayPal')+'</span>'+
            '<a id="mmsp-paypal" href="'+PAYPAL_49+'" target="_blank" rel="noopener">49 €</a></div>'+
          '<button class="mmsp-ya" id="mmsp-revisar" type="button">'+L('Ya pagué — volver a mirar','I paid — check again')+'</button>'+
          '<p id="mmsp-msg"></p>'+
        '</div>'+
        '<div class="mmsp-acts"><button class="mmsp-btn" id="mmsp-cerrar" type="button">Keep Suite Coach</button></div>'+
      '</div>';
    w._pinned=true;
    var pin=doc.getElementById('mmsp-pin');
    pin.addEventListener('pointerdown', function(e){ e.stopPropagation(); });   // contrato popup: pin con stop en mousedown
    pin.addEventListener('click', function(e){ e.stopPropagation();
      if(w._pinned){ w.classList.remove('open'); w._pinned=false; pin.classList.remove('on'); pin.textContent='⊕'; return; }
      w._pinned=true; pin.classList.add('on'); pin.textContent='⊗'; });
    doc.getElementById('mmsp-cerrar').addEventListener('click', function(){ w.classList.remove('open'); });
    doc.getElementById('mmsp-revisar').addEventListener('click', function(){
      var msg=doc.getElementById('mmsp-msg'); msg.textContent=L('Preguntando al servidor…','Asking the server…');
      window.mmSalieriRevisar().then(function(v){
        if(v){ msg.textContent=L('Salieri abierto. ¡Gracias!','Salieri is open. Thank you!'); setTimeout(function(){ w.classList.remove('open'); }, 1200); }
        else msg.textContent=L('Todavía no llega el pago. Espera unos segundos y vuelve a mirar; si pagaste con otro correo, escríbenos a contacto@musicmotionsuite.com.','The payment has not arrived yet. Wait a few seconds and check again; if you paid with another email, write to contacto@musicmotionsuite.com.');
      });
    });
    var hd=doc.getElementById('mmsp-hd'), dx=0, dy=0, drag=false;
    hd.addEventListener('pointerdown', function(e){ if(e.target.id==='mmsp-pin') return;
      var r=w.getBoundingClientRect(); w.style.transform='none'; w.style.left=r.left+'px'; w.style.top=r.top+'px';
      dx=e.clientX-r.left; dy=e.clientY-r.top; drag=true; try{ hd.setPointerCapture(e.pointerId); }catch(_){ } });
    hd.addEventListener('pointermove', function(e){ if(drag){ w.style.left=(e.clientX-dx)+'px'; w.style.top=(e.clientY-dy)+'px'; } });
    hd.addEventListener('pointerup', function(){ drag=false; });
    w.classList.add('open');
    return w;
  };
})();
