/* ═══════════════════════════════════════════════════════════════════════════
   mm-contacto.js — la forma de contacto de las páginas de representante
   (2026-09-20, con Mario: «hay que hacer una forma de contacto genérica para
   cada una de las 5 páginas nuevas»)

   Una sola forma, cinco páginas. Cada <form class="formam"> declara a quién va
   por sus data-: data-pais, data-ref (el número de afiliación) y data-correo
   (la dirección que se muestra en la ficha). El envío va al Worker mm-pagos,
   que valida y le pide a la planilla que anote el mensaje y avise por correo.

   Por qué al Worker y no un mailto: el 2026-09-17 Mario reportó que con Gmail
   en el navegador el visitante aprieta un mailto: y NO PASA NADA — no tiene
   programa de correo configurado y el clic se pierde. La forma manda sola.

   Antispam sin molestar al visitante (nada de captchas):
     · campo trampa «empresa», invisible y fuera de la pantalla: un robot lo
       rellena, una persona no lo ve. Si viene con algo, el Worker descarta.
     · «t»: segundos desde que se abrió la página. Menos de 3 = robot.
   Si el envío falla por cualquier razón, la forma no se traga el mensaje:
   muestra el aviso en rojo y ofrece el redactor de Gmail con todo puesto,
   que es la salida que ya funciona en colegios.html.
   ═══════════════════════════════════════════════════════════════════════════ */
(function () {
  var ENDPOINT = 'https://mm-pagos.mmk-keyboard.workers.dev/contacto';
  var abierta  = Date.now();

  function en() { return document.documentElement.getAttribute('data-lang') === 'en'; }

  var T = {
    enviando: ['Enviando…', 'Sending…'],
    enviar:   ['Enviar el mensaje', 'Send the message'],
    falta:    ['Faltan el nombre, el correo o el mensaje.',
               'The name, the email or the message is missing.'],
    correomal:['Ese correo no parece completo — revisalo, por ahí lo usamos para contestarte.',
               'That email looks incomplete — please check it; it is how we reply.'],
    ok:       ['<b>Gracias.</b> El mensaje llegó. Te contestamos dentro de dos días hábiles al correo que dejaste.',
               '<b>Thank you.</b> Your message arrived. We reply within two working days to the address you left.'],
    mal:      ['No se pudo enviar el mensaje. Nada se perdió: ',
               'The message could not be sent. Nothing is lost: '],
    gmail:    ['abrilo en Gmail con todo escrito →', 'open it in Gmail, already written →']
  };
  function t(k) { return T[k][en() ? 1 : 0]; }

  function gmail(correo, asunto, cuerpo) {
    return 'https://mail.google.com/mail/?view=cm&fs=1&to=' + encodeURIComponent(correo) +
           '&su=' + encodeURIComponent(asunto) + '&body=' + encodeURIComponent(cuerpo);
  }

  document.querySelectorAll('form.formam').forEach(function (f) {
    var boton = f.querySelector('button[type=submit]');
    var rotulo= boton ? boton.querySelector('span.txt') : null;
    var aviso = f.querySelector('.aviso');
    var dest  = f.getAttribute('data-correo') || 'contacto@musicmotionsuite.com';

    function v(n) { var c = f.elements[n]; return c ? String(c.value || '').trim() : ''; }
    function marcar(nombres) {
      f.querySelectorAll('.falta').forEach(function (c) { c.classList.remove('falta'); });
      nombres.forEach(function (n) { if (f.elements[n]) f.elements[n].classList.add('falta'); });
      if (nombres.length && f.elements[nombres[0]]) f.elements[nombres[0]].focus();
    }
    function decir(clase, html) { aviso.className = 'aviso ' + clase; aviso.innerHTML = html; }

    f.addEventListener('submit', function (ev) {
      ev.preventDefault();
      if (boton && boton.disabled) return;

      var falta = [];
      ['nombre', 'correo', 'mensaje'].forEach(function (n) { if (!v(n)) falta.push(n); });
      if (falta.length) { marcar(falta); decir('mal', t('falta')); return; }
      if (!/^[^@\s]+@[^@\s]+\.[^@\s]{2,}$/.test(v('correo'))) {
        marcar(['correo']); decir('mal', t('correomal')); return;
      }
      marcar([]);

      var datos = {
        pais:     f.getAttribute('data-pais') || '',
        ref:      f.getAttribute('data-ref') || '',
        destino:  dest,
        nombre:   v('nombre'),
        centro:   v('centro'),
        ciudad:   v('ciudad'),
        correo:   v('correo'),
        telefono: v('telefono'),
        mensaje:  v('mensaje'),
        trampa:   v('empresa'),
        t:        Math.round((Date.now() - abierta) / 1000),
        idioma:   en() ? 'en' : 'es',
        pagina:   location.pathname.split('/').pop() || 'contacto.html'
      };

      if (boton) { boton.disabled = true; if (rotulo) rotulo.textContent = t('enviando'); }
      aviso.className = 'aviso';

      fetch(ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'text/plain;charset=UTF-8' },   // simple: sin preflight
        body: JSON.stringify(datos)
      })
      .then(function (r) { return r.json().catch(function () { return { ok: false }; }); })
      .then(function (j) {
        if (!j || !j.ok) throw new Error((j && j.error) || 'sin respuesta');
        decir('ok', t('ok'));
        f.querySelectorAll('input,textarea').forEach(function (c) { c.value = ''; });
        if (boton) { boton.disabled = true; if (rotulo) rotulo.textContent = t('enviar'); }
      })
      .catch(function () {
        var asunto = 'Music Motion' + (datos.pais ? ' — ' + datos.pais : '');
        var cuerpo = datos.nombre + '\n' +
          (datos.centro   ? datos.centro + '\n' : '') +
          (datos.ciudad   ? datos.ciudad + '\n' : '') +
          (datos.telefono ? datos.telefono + '\n' : '') +
          '\n' + datos.mensaje + '\n';
        decir('mal', t('mal') + '<a href="' + gmail(dest, asunto, cuerpo) +
              '" target="_blank" rel="noopener">' + t('gmail') + '</a>');
        if (boton) { boton.disabled = false; if (rotulo) rotulo.textContent = t('enviar'); }
      });
    });
  });
})();
