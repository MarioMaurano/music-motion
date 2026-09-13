// mm-orchestration.js — MM Orchestration · tablas de registro de Rimsky-Korsakov
// (Principles of Orchestration, trad. Agate 1922 · dominio público). El carácter de cada
// instrumento por las 4 zonas low·mid·high·top — las mismas 4 anclas del `resp` del preset
// y del REGIONS del Register. R-K, textual: "Each of these instruments has four registers:
// low, middle, high and extremely high." Suplementos de Adler marcados [A] en el texto.
// Carga: <script src="mm-orchestration.js"></script> (file:// ok). Consumidor: el Coach.
// Creado 2026-06-17 (render Score .96 · Coach v0.1.6). Investigación: _Investigacion-instrumentos/registros-y-orquestacion/orquestacion-rk-tablas.md
// fza: 0 débil · 1 media · 2 llena · 3 fuerte. scope = zonas de máxima expresión (R-K).
window.MM_RK = {
  source: 'Rimsky-Korsakov, Principles of Orchestration (Agate 1922, Gutenberg #33900)',
  zones: ['low','mid','high','top'],
  fzaLabel: ['débil','media','llena','fuerte'],

  reg: {
    // ── Maderas (Tabla B) ──
    flute: { cls:'brillante / voz de pecho', scope:[1,2], z:[
      {car:'apagado, frío; algo nasal abajo', fza:0, din:'pp fácil · ff no proyecta'},
      {car:'claro, frío, gracioso', fza:1, din:'pp–mf · ff limitado'},
      {car:'claro, brillante; canta', fza:2, din:'pp con cuidado · ff brillante'},
      {car:'brillante → algo penetrante', fza:2, din:'ff brillante · pp muy difícil'} ]},
    piccolo: { cls:'extensión aguda · no-expresivo', scope:[], z:[
      {car:'muy débil, de poco servicio', fza:0, din:'pp fino, no sirve'},
      {car:'como flauta pero débil', fza:1, din:'mf a lo sumo'},
      {car:'claro, brillante; recién acá sirve', fza:2, din:'ff brillante · pp difícil'},
      {car:'silbante, penetrante, potentísimo', fza:3, din:'solo ff'} ]},
    oboe: { cls:'nasal / oscuro', scope:[1], z:[
      {car:'grueso, áspero, nasal; extremo "wild"', fza:2, din:'pp difícil (imposible c/sordina) · ff áspero'},
      {car:'nasal, expresivo, de caña', fza:2, din:'mejor pp–ff acá'},
      {car:'claro, más penetrante', fza:1, din:'pp posible · ff algo pinzado'},
      {car:'chillón, duro y seco', fza:0, din:'difícil de controlar'} ]},
    english_horn: { cls:'nasal / oscuro (oboe en Fa)', scope:[1], z:[
      {car:'bastante penetrante; grueso/nasal', fza:2, din:'pp (extremo c/sordina) · ff oscuro'},
      {car:'soñador, dulcísimo — su firma', fza:2, din:'corazón expresivo, pp–mf bello'},
      {car:'dulce, plañidero; afinándose [A]', fza:1, din:'pp delicado · ff modesto'},
      {car:'duro, seco como el oboe [A]', fza:0, din:'difícil'} ]},
    clarinet: { cls:'brillante / voz de pecho · el más matizado', scope:[2], z:[
      {car:'chalumeau: nasal/oscuro; extremo "ringing/threatening"', fza:2, din:'pp "a mere breath" · ff fuerte'},
      {car:'garganta: claro, algo velado', fza:1, din:'pp excelente'},
      {car:'clarino: claro, brillante, expresivo', fza:2, din:'mejor pp–ff'},
      {car:'algo penetrante / "piercing"', fza:2, din:'ff penetrante · pp con oficio'} ]},
    bass_clarinet: { cls:'voz de pecho oscuro · sin lo plateado', scope:[0,1], z:[
      {car:'más oscuro, siniestro', fza:2, din:'pp grave soberbio · ff oscuro'},
      {car:'oscuro, amaderado, hueco [A]', fza:2, din:'pp–mf rico'},
      {car:'clarino pero "lacks the silvery quality"', fza:1, din:'pp posible · ff más fino'},
      {car:'apagado; incapaz de alegría', fza:1, din:'limitado'} ]},
    bassoon: { cls:'nasal / oscuro', scope:[1], z:[
      {car:'grueso, áspero, nasal; extremo "sinister"', fza:2, din:'ff grueso · pp pesado (grave imposible c/sordina)'},
      {car:'de caña, expresivo', fza:2, din:'mejor pp–ff'},
      {car:'tenor: claro, plañidero, vocal; cantabile', fza:1, din:'pp expresivo · ff pinzado arriba'},
      {car:'chillón, duro y seco / "tense"', fza:0, din:'difícil'} ]},
    contrabassoon: { cls:'extremo grave · no-expresivo', scope:[], z:[
      {car:'espeso y denso; muy potente en piano', fza:3, din:'pp único y potente · ff espeso'},
      {car:'espeso, denso, poco definido', fza:2, din:'pp denso · ff pesado'},
      {car:'"by no means so useful"', fza:0, din:'de poco valor'},
      {car:'inútil artísticamente', fza:0, din:'—'} ]},

    // ── Metales (Tabla C) — brillo creciente al agudo; pp dulce, ff "crackling" ──
    horn: { cls:'suave, poético · enlace con maderas', scope:[1], z:[
      {car:'oscuro y brillante; algo desenfocado [A]', fza:1, din:'pp dulce · ff posible, grave inestable'},
      {car:'recuerda al fagot (el enlace)', fza:2, din:'pp–ff · mejor cantabile'},
      {car:'redondo y lleno; heroico [A]', fza:3, din:'ff brillante · pp con control'},
      {car:'brillante; ff "crackling"', fza:3, din:'ff blaring · pp muy difícil'} ]},
    trumpet: { cls:'clara y penetrante · brillante', scope:[1], z:[
      {car:'turbia, como amenazante (en p); apagada [A]', fza:1, din:'pp turbia · ff poco característico'},
      {car:'clara y penetrante', fza:2, din:'pp claro · ff "stirring, rousing"'},
      {car:'excitante en f; plateada en p', fza:3, din:'pp plateado · ff la firma'},
      {car:'brillante; ff "crackling"', fza:3, din:'ff blazing · pp muy difícil'} ]},
    trombone: { cls:'noble · "piano full but heavy, forte powerful"', scope:[1], z:[
      {car:'oscuro y amenazante en el grave profundo', fza:2, din:'pp lleno pero pesado · ff oscuro'},
      {car:'noble, sonoro', fza:3, din:'pp lleno · ff potente y sonoro'},
      {car:'brillante y triunfal', fza:3, din:'arriba no baja de mf · ff triunfal'},
      {car:'brillante; ff "crackling"', fza:3, din:'ff blaring · pp impracticable'} ]},
    tuba: { cls:'cimiento · "less characteristic", valor en el grave', scope:[1], z:[
      {car:'fuerza y belleza de sus notas graves', fza:3, din:'pp rico sorprendente · ff fundacional'},
      {car:'grueso y áspero, menos característico', fza:2, din:'pp posible · ff lleno'},
      {car:'más brillante al subir; "shouty"', fza:3, din:'ff fuerte · pp más difícil'},
      {car:'brillante pero pinzado; no-expresivo', fza:3, din:'ff forzado · pp impracticable'} ]},

    // ── Cuerdas (Tabla A) — por cuerda; expresión donde solapa la voz humana ──
    violin: { cls:'el medio melódico por excelencia', scope:[1,2], z:[
      {car:'cuerda Sol (cubierta): "rather harsh"; rica/robusta [A]', fza:2, din:'grave sonoro'},
      {car:'cuerda Re: "sweeter and weaker"', fza:1, din:'velado, lírico'},
      {car:'cuerda La: cantábile, expresivo', fza:2, din:'el registro que canta'},
      {car:'cuerda Mi: "brilliant"; arriba de Mi6 pierde calidez', fza:2, din:'usar con cuidado; saltos no'} ]},
    viola: { cls:'intensa, plañidera', scope:[1,2], z:[
      {car:'cuerda Do (cubierta): "harsh"; oscuro/sombrío [A]', fza:2, din:'grave austero'},
      {car:'cuerda Sol: transición, cálido [A]', fza:2, din:'—'},
      {car:'cuerda Re: "sweeter and weaker"', fza:1, din:'la cuerda más floja'},
      {car:'cuerda La: "biting… slightly nasal"', fza:2, din:'intenso/plañidero'} ]},
    cello: { cls:'el cantante del cuarteto', scope:[2,3], z:[
      {car:'cuerda Do: "harsh"; sonoro por peso [A]', fza:2, din:'cimiento'},
      {car:'cuerda Sol: más brillante, cálido [A]', fza:1, din:'—'},
      {car:'cuerda Re: "sweeter and weaker"; cálido [A]', fza:1, din:'lírico'},
      {car:'cuerda La: brillante, voz de pecho; "most expressive" [A]', fza:3, din:'el tenor famoso del cello'} ]},
    contrabass: { cls:'cimiento; suele doblar al cello', scope:[2], z:[
      {car:'cuerda Mi: "duller"; bajo la voz pierde expresión', fza:2, din:'grave, peso'},
      {car:'cuerda La: "duller"; carácter poco notable', fza:2, din:'fundamento'},
      {car:'cuerda Re: "more penetrating"', fza:1, din:'registro útil/melódico'},
      {car:'cuerda Sol: "more penetrating"; tenso arriba [A]', fza:1, din:'solista, con cuidado'} ]}
  },

  groups: {
    maderas: 'Dos clases: nasal/oscura (oboe, fagot, corno inglés, contrafagot) vs voz-de-pecho/brillante (flauta, clarinete, flautín, clarinete bajo). El contraste de registro es marcado, sobre todo en el medio-agudo. Las 4 principales ≈ igual potencia. Sordina: oboe/corno inglés/fagot llegan al pp extremo; el clarinete no la precisa; las flautas no se tapan. Staccato penetrante → oboe/fagot; legato sostenido → flauta/clarinete.',
    metales: 'Más brillante hacia el agudo; pp dulce, ff "hard and crackling". Balance: 1 Trompeta = 1 Trombón = 1 Tuba = 2 Cornos (el corno en f rinde la mitad → marcarlo un grado más fuerte). El corno es el enlace con las maderas (su medio recuerda al fagot). La tuba dobla el bajo una 8va abajo. Tapado/sordina acerca corno/trompeta al oboe/corno inglés y da "efecto de distancia".',
    cuerdas: 'La base de la orquesta: nobleza, calidez, igualdad de tono; el mejor medio melódico; melódicas y armónicas. Cuerda al aire = más clara y potente pero menos expresiva que pisada. La expresión vive donde el registro solapa la voz humana (fuera de ahí pierde calidez). Flexibilidad: violín > viola > cello > contrabajo. Armónicos: fríos, solo ornamento.'
  },

  // Consejo de asignación: zonas DÉBILES de un instrumento → instrumento sugerido (consenso de orquestación:
  // Adler · R-K · la deep-research del alto). El Coach lo dispara si una voz vive mayormente en esa zona.
  // { zones:[...], minFrac:0..1, suggest:'<preset>', text:'...' }
  advice: {
    alto_flute_g: [
      { zones:['high','top'], suggest:'flute',
        textES:'esta nota vive en el agudo del alto, su zona más pálida — R-K/Adler la darían a la flauta en Do (más brillante y proyecta mejor arriba).',
        textEN:'this note sits in the alto flute high register, its palest zone — R-K/Adler would give it to the C flute (brighter, projects better up there).' }
    ]
  }
};

// ── API ──────────────────────────────────────────────────────────────────────
(function(L){
  // zona 0..3 de una posición pos∈[0,1] del rango (la más cercana de las 4 anclas)
  L.zoneOf = function(pos){ pos = Math.max(0, Math.min(1, pos||0)); return Math.max(0, Math.min(3, Math.round(pos*3))); };
  // ¿hay tabla R-K para esta clave de preset?
  L.has = function(key){ return !!(L.reg && L.reg[key]); };
  // carácter R-K de un instrumento en una posición de registro (o null)
  //   at('flute', 0.1) → { zone:'low', idx:0, scope:false, car, fza, din }
  L.at = function(key, pos){
    var r = L.reg[key]; if(!r) return null;
    var i = L.zoneOf(pos);
    return { zone:L.zones[i], idx:i, scope: (r.scope||[]).indexOf(i) >= 0, car:r.z[i].car, fza:r.z[i].fza, din:r.z[i].din };
  };
})(window.MM_RK);

// ═══════════════════════════════════════════════════════════════════════════════════════════
// MM_TECH — CÓMO SE TOCA Y CÓMO SE ESCRIBE. Eje distinto al de R-K: R-K describe el CARÁCTER
// por registro (qué suena y cuánto proyecta); esto describe el GESTO y el SIGNO — lo que el
// instrumentista puede hacer y cómo se le pide por escrito. Sale de la deep-research de la
// suite (_Investigacion-instrumentos/, cada informe con sus fuentes citadas) y de lo que se
// afinó de oído con Mario. Consumidores: el Coach (pestaña Orquestación) y website/instruments.html.
// Creado 2026-08-20 con el arpa; bilingüe desde el 2026-08-20 (el ES/EN es de toda la suite).
//
// Forma de cada ítem: { sig, sigEn?, es, en }  — sigEn cae en sig cuando el signo no se traduce.
// Cada instrumento: { ref?, escribe:[…], toca:[…] }. Las variantes de un mismo instrumento
// (Tonal / Well-tempered) comparten cuerpo y sólo cambian lo que las hace distintas.
// ═══════════════════════════════════════════════════════════════════════════════════════════
window.MM_TECH = {
  source: 'Deep-research de la suite — _Investigacion-instrumentos/ (fuentes citadas en cada informe)',
  sourceEn: 'Suite deep-research — _Investigacion-instrumentos/ (sources cited in each report)',
  reg: {
    harp: {
      ref: '_Investigacion-instrumentos/cuerdas/arpa-investigacion.md',
      escribe: [
        { sig:'l.v. (laissez vibrer)',
          es:'Es el estado NORMAL de la cuerda: el arpa no tiene apagador y suena hasta que alguien la calla. Se dibuja como una ligadura colgada, sin nota de llegada. Por eso lo excepcional en la página es lo contrario — el apagado.',
          en:'It is the string’s NORMAL state: the harp has no dampers and rings until someone stops it. It is drawn as a hanging tie, with no note to land on. That is why the exception on the page is the opposite one — the damping.' },
        { sig:'étouffez · sons étouffés · sec', sigEn:'étouffez · sons étouffés · sec',
          es:'Apagar. La mano frena la cuerda, no la caja: el gesto medido es de 30 a 50 ms con el roce del dedo audible. Rige desde su lugar hasta que se cancela, como una técnica de arco. No confundir con el apagado incidental de la mano que vuelve a la cuerda para la nota siguiente, que es mucho más lento.',
          en:'To damp. The hand stops the string, not the body: the measured gesture is 30 to 50 ms with the finger’s brush audible. It rules from its place until cancelled, like a bowing technique. Not to be confused with the incidental damping of the hand returning for the next note, which is far slower.' },
        { sig:'pedales (7)', sigEn:'pedals (7)',
          es:'Obligatorio y propio del arpa: cada pedal pone una LETRA entera en ♭, ♮ o ♯ en toda la extensión. Se escribe con las siete letras o el diagrama. No es el pedal del piano — no levanta apagadores, re-afina el instrumento.',
          en:'Compulsory and particular to the harp: each pedal sets a whole LETTER to ♭, ♮ or ♯ across the entire range. It is written with the seven letters or the diagram. It is not the piano pedal — it lifts no dampers, it retunes the instrument.' },
        { sig:'gliss.',
          es:'La pedalización arriba, la primera y la última nota, y el trazo entre las dos: la escala del glisando la deciden los pedales, no las cabezas.',
          en:'The pedal setting above, the first and the last note, and the line between them: the scale of the glissando is decided by the pedals, not by the noteheads.' },
        { sig:'arpegiado', sigEn:'rolled chord',
          es:'El rasgueo del acorde, el mismo signo del teclado. En el arpa viene con l.v. de fábrica: un acorde arpegiado no se apaga.',
          en:'The roll of the chord, the same sign as on a keyboard. On the harp it comes with l.v. built in: a rolled chord is not damped.' }
      ],
      toca: [
        { sig:'posición de pulsado', sigEn:'plucking point',
          es:'A 1/3 – 2/5 de la cuerda suena redondo; près de la table, nasal. El color lo dicta la YEMA y el punto, no la fuerza: el pulsado es casi lineal.',
          en:'At 1/3 – 2/5 of the string it sounds round; près de la table, nasal. Colour is dictated by the FINGERTIP and the point, not by force: plucking is nearly linear.' },
        { sig:'armónicos', sigEn:'harmonics',
          es:'Canto de la mano en el centro de la cuerda y pulgar: suena la OCTAVA arriba, con los parciales pares solamente. Decay ≈0,6× y unos 8 dB menos: sirven hasta mf, no más.',
          en:'Side of the hand at the centre of the string, thumb plucking: it sounds the OCTAVE above, with even partials only. Decay ≈0.6× and some 8 dB less: useful up to mf, no further.' },
        { sig:'sons xylophoniques',
          es:'Un dedo apoyado en la base mientras el otro pulsa: la cuerda muere casi de inmediato (decay ×0,1) y el ataque se vuelve seco y brillante.',
          en:'One finger resting at the base while the other plucks: the string dies almost at once (decay ×0.1) and the attack turns dry and bright.' },
        { sig:'zumbido de pedal (bray)', sigEn:'pedal buzz (bray)',
          es:'Con el pedal a medio camino el disco roza la cuerda: colisiones repetidas, zumbido tipo sitar, energía en 2–6 kHz durante 0,3–0,8 s. Efecto, no accidente.',
          en:'With the pedal halfway the disc grazes the string: repeated collisions, a sitar-like buzz, energy at 2–6 kHz for 0.3–0.8 s. An effect, not an accident.' },
        { sig:'46 cuerdas libres', sigEn:'46 free strings',
          es:'Nada está apagado nunca: cada nota pone a vibrar a sus vecinas por simpatía. Los modos simpáticos caen a menos de medio hertz del fundamental y baten durante segundos — el halo del arpa es eso.',
          en:'Nothing is ever damped: every note sets its neighbours vibrating in sympathy. The sympathetic modes fall less than half a hertz from the fundamental and beat for seconds — that halo is the harp.' },
        { sig:'materiales por registro', sigEn:'materials by register',
          es:'Grave entorchado de acero y cobre, medio de tripa, agudo de tripa o nailon. El quiebre entorchado→tripa cae cerca de C3, justo donde están los modos de la caja (134–166 Hz): ahí la fundamental «aparece». La tripa afina más estable que el nailon en los ataques fuertes.',
          en:'Bass wound in steel and copper, middle in gut, treble in gut or nylon. The wound→gut break falls near C3, exactly where the body modes are (134–166 Hz): that is where the fundamental "appears". Gut holds pitch more steadily than nylon under strong attacks.' }
      ]
    },
    piano_grand_tonal: {
      ref: '_Investigacion-instrumentos/INSTRUMENTS SETTINGS/piano/piano_grand_tonal-settings.md',
      escribe: [
        { sig:'matices por tecla', sigEn:'dynamics by key',
          es:'El piano SÍ tiene dinámica de tecla: el matiz escrito cambia el volumen y el timbre, porque el martillo golpea más rápido y el espectro se abre. Es lo contrario del clavecín.',
          en:'The piano DOES have key dynamics: the written dynamic changes volume and timbre, because the hammer strikes faster and the spectrum opens. The opposite of the harpsichord.' },
        { sig:'ped. · ✽',
          es:'El pedal levanta los apagadores: la nota sigue después de soltar la tecla y todas las cuerdas quedan libres para resonar por simpatía. Se escribe donde entra y donde sale — el cambio de pedal es donde cambia la armonía.',
          en:'The pedal lifts the dampers: the note continues after the key is released and every string is free to resonate in sympathy. It is written where it goes down and where it comes up — the pedal change is where the harmony changes.' }
      ],
      toca: [
        { sig:'qué lo hace distinto', sigEn:'what makes it different',
          es:'Es el Piano (Grand) con CUERDAS IDEALES. Un piano real es inarmónico: la rigidez estira los parciales y rompe las coincidencias — el 3.er parcial del do y el 2.º del sol nunca caen exactos y baten. La suite afina pitagórico por deletreo, donde esas coincidencias son exactas por construcción; el Tonal existe para que la física no las arruine.',
          en:'It is the Grand with IDEAL STRINGS. A real piano is inharmonic: stiffness stretches the partials and breaks the coincidences — the 3rd partial of C and the 2nd of G never land exactly and they beat. The suite tunes Pythagorean by spelling, where those coincidences are exact by construction; the Tonal exists so that physics does not spoil them.' },
        { sig:'inarmonicidad al 10 %', sigEn:'inharmonicity at 10 %',
          es:'`src.inharm` es la décima parte de la del Grand, con la misma curva en V por registro. Los acordes cierran en vez de batir.',
          en:'`src.inharm` is one tenth of the Grand’s, with the same V-shaped curve by register. Chords lock instead of beating.' },
        { sig:'unísonos enganchados', sigEn:'locked unisons',
          es:'Las dos o tres cuerdas de cada nota afinan al hercio (±0,08 cents contra ±1 del Grand): no hay batido de unísono, sólo la suma. Es lo que hace que el ataque suene más limpio y la cola más quieta.',
          en:'The two or three strings of each note tune to the hertz (±0.08 cents against ±1 on the Grand): no unison beating, only the sum. That is what makes the attack cleaner and the tail stiller.' },
        { sig:'hermano del Grand', sigEn:'the Grand’s sibling',
          es:'Todo lo demás —envolvente, apagador, bloom, golpe por registro, thump, tabla, la ley del martillo del Lexicon— es idéntico al Piano (Grand). Si se toca un cambio en uno, hay que decidir si va también en el otro.',
          en:'Everything else — envelope, damper, bloom, hit by register, thump, soundboard, the Lexicon hammer law — is identical to the Piano (Grand). If one is changed, it must be decided whether the change goes to the other too.' }
      ]
    }
  }
};
(function(L){
  L.has = function(key){ return !!(L.reg && L.reg[key]); };

  // ── EL CLAVECÍN — cuerpo común a los dos, y después lo que los separa ──────────────────
  var clavEscribe = [
    { sig:'registración: 8 · 8+8 · 8+4 · 8+8+4 · 16 · 16+8', sigEn:'registration: 8 · 8+8 · 8+4 · 8+8+4 · 16 · 16+8',
      es:'La palabra que reconfigura el INSTRUMENTO, no la nota (capa SETUP). Va por CANAL, porque la registración es por manual y en la suite una voz es un canal, y rige desde su compás hasta la siguiente del mismo canal, como un cambio de clave. Quitar un coro baja 4,08 dB — que es lo que pasa físicamente al soltar un registro.',
      en:'The word that reconfigures the INSTRUMENT, not the note (SETUP layer). It goes per CHANNEL, because registration is per manual and in the suite one voice is one channel, and it rules from its bar to the next one on the same channel, like a clef change. Dropping a choir loses 4.08 dB — what physically happens when a stop is released.' },
    { sig:'el coro de octava (4 y 16 pies)', sigEn:'the octave choir (4 and 16 foot)',
      es:'Se escribe, viaja en el archivo y el panel de la marca lo dice en dorado, pero TODAVÍA NO SUENA: es un timbre nuevo y se afina de oído. Lo que suena hoy son los coros de 8 pies.',
      en:'It is written, it travels in the file and the marking panel says so in gold, but it DOES NOT SOUND YET: it is a new timbre and it is tuned by ear. What sounds today are the 8-foot choirs.' },
    { sig:'los matices no suben el volumen', sigEn:'dynamics do not raise the volume',
      es:'No hay dinámica por tecla: de ppp a fff la escala entera mide unos 5 dB, y sirve para el fraseo, no para el volumen. Lo que suena más fuerte es tocar más notas juntas o cambiar de registro.',
      en:'There is no key dynamic: from ppp to fff the whole scale measures some 5 dB, and it serves phrasing, not loudness. What sounds louder is playing more notes together or changing stops.' },
    { sig:'arpegiado y articulación', sigEn:'rolled chords and articulation',
      es:'La expresión está en el TIEMPO: cuánto se solapa o se separa cada nota, el arpegiado de los acordes, la agógica, y el momento del release — que se oye, porque el apagador de paño hace «tac».',
      en:'Expression lives in TIME: how much each note overlaps or separates, the rolling of chords, agogics, and the moment of release — which is audible, because the cloth damper goes "tac".' }
  ];
  var clavToca = [
    { sig:'la fuerza no da volumen', sigEn:'force gives no volume',
      es:'El plectro pellizca y suelta: el toque brusco sólo agrega ruido de mecanismo. El toque desde la tecla da ataques limpios y controla la latencia del pluck.',
      en:'The plectrum pinches and lets go: a brusque touch only adds mechanism noise. Playing from the key gives clean attacks and controls the pluck’s latency.' },
    { sig:'el punto de pluck por registro', sigEn:'plucking point by stop',
      es:'8′ fondo: redondo y más fuerte. 8′ delantero: nasal, más brillante, algo más suave. 4′: una octava arriba, cuerdas de la mitad de largo, decay de un tercio y más ruido de plectro. Laúd: pluck a 1/25, fundamental débil. Buff: apagado parcial, decay ×0,1.',
      en:'Back 8′: round and stronger. Front 8′: nasal, brighter, a touch softer. 4′: an octave up, strings half as long, a third of the decay and more plectrum noise. Lute: pluck at 1/25, weak fundamental. Buff: partial damping, decay ×0.1.' },
    { sig:'latón abajo, hierro arriba', sigEn:'brass below, iron above',
      es:'El material cambia en el tenor, entre F2 y F3: el latón tiene más amortiguación interna y mata antes los parciales altos, así que el grave suena más opaco que el agudo aunque las dos cuerdas duren mucho.',
      en:'The material changes in the tenor, between F2 and F3: brass has more internal damping and kills the high partials sooner, so the bass sounds more opaque than the treble even though both strings last long.' },
    { sig:'la cajita de cubiertos', sigEn:'the box of cutlery',
      es:'En el grave, 77 parciales separados 65 Hz caen de a ocho en cada banda crítica: eso es rugosidad, y se oye como una caja de cubiertos sobre una mesa. En el agudo los mismos parciales se separan y el efecto desaparece — no es un defecto, es aritmética de la serie armónica.',
      en:'In the bass, 77 partials spaced 65 Hz apart fall eight to a critical band: that is roughness, and it is heard as a box of cutlery on a table. In the treble the same partials spread out and the effect vanishes — not a defect, the arithmetic of the harmonic series.' }
  ];
  function copia(arr){ return arr.map(function(o){ var c={}; for(var k in o) c[k]=o[k]; return c; }); }
  var REF_CLAV = '_Investigacion-instrumentos/teclados/clavecin-investigacion.md · _Investigacion-instrumentos/INSTRUMENTS SETTINGS/harpsichord/harpsichord-settings.md';

  L.reg.harpsichord = { ref: REF_CLAV, escribe: copia(clavEscribe), toca: copia(clavToca).concat([
    { sig:'afinación: la de la casa', sigEn:'tuning: the house’s own',
      es:'Éste es el clavecín pitagórico por deletreo (3ⁿ/2ᵐ), sin lobo: cada nota sale de su nombre escrito, así que la♯ y si♭ son alturas distintas y las coincidencias de parciales son exactas. Todas las tonalidades tienen el mismo color.',
      en:'This is the harpsichord tuned Pythagorean by spelling (3ⁿ/2ᵐ), with no wolf: every note comes from its written name, so A♯ and B♭ are different pitches and partial coincidences are exact. Every key has the same colour.' }
  ])};

  L.reg.harpsichord_wt = { ref: REF_CLAV, escribe: copia(clavEscribe), toca: copia(clavToca).concat([
    { sig:'afinación: Werckmeister III', sigEn:'tuning: Werckmeister III',
      es:'Clon del anterior con temperamento histórico: el Keyboard re-afina cada nota a la TECLA del temperamento, con A=440 fijo. Cada tonalidad suena distinta — que es lo que Bach escuchaba y la razón de ser del clave bien temperado. La altura ya no sale del deletreo sino de la tecla.',
      en:'A clone of the previous one with a historical temperament: the Keyboard retunes every note to the temperament’s KEY, with A=440 fixed. Every key sounds different — which is what Bach heard and the whole point of the well-tempered clavier. Pitch no longer comes from the spelling but from the key.' }
  ])};
})(window.MM_TECH);
