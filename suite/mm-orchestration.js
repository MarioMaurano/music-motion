// 2026-10-01 — MM_TECH: + sonidos de la casa (ping, sine, synth_aahs, warm_pad, space_sweep, cosmic_whistle, glass_bells).
// 2026-10-01 — MM_TECH: + cuerdas en sección (strings/full_strings), pizzicato (+strings_pizzicato), bajo eléctrico y Rhodes.
// 2026-10-01 — MM_TECH: fichas de percusión (orquesta 7 + snare_off, latina 7) «cómo se escribe / cómo se toca», con fuentes.
// 2026-09-29 — redacción formal en la card del contrafagot: «caen de a ocho» → «caen de ocho en ocho».
// mm-orchestration.js — MM Orchestration (Coach V2.5.5, 2026-09-24 — cards bilingües ES/EN:
//   fzaLabelEn, cls/car/din con EN + fallback; +saxofón y 23 instrumentos sumados desde la
//   deep-research; aliases de variantes → card del instrumento padre; L.get/resolve).
// tablas de registro de Rimsky-Korsakov
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
  fzaLabelEn: ['weak','medium','full','strong'],

  reg: {
    // ── Maderas (Tabla B) ──
    flute: { cls:'brillante / voz de pecho', clsEn:'brilliant / chest voice', scope:[1,2], z:[
      {car:'apagado, frío; algo nasal abajo', carEn:'dull, cold; a bit nasal at the bottom', fza:0, din:'pp fácil · ff no proyecta', dinEn:"pp easy · ff won't project"},
      {car:'claro, frío, gracioso', carEn:'clear, cold, graceful', fza:1, din:'pp–mf · ff limitado', dinEn:'pp–mf · ff limited'},
      {car:'claro, brillante; canta', carEn:'clear, bright; sings', fza:2, din:'pp con cuidado · ff brillante', dinEn:'pp with care · ff bright'},
      {car:'brillante → algo penetrante', carEn:'bright → somewhat piercing', fza:2, din:'ff brillante · pp muy difícil', dinEn:'ff bright · pp very hard'} ]},
    piccolo: { cls:'extensión aguda · no-expresivo', clsEn:'high extension · non-expressive', scope:[], z:[
      {car:'muy débil, de poco servicio', carEn:'very weak, of little use', fza:0, din:'pp fino, no sirve', dinEn:'fine pp, useless'},
      {car:'como flauta pero débil', carEn:'like the flute but weak', fza:1, din:'mf a lo sumo', dinEn:'mf at most'},
      {car:'claro, brillante; recién acá sirve', carEn:'clear, bright; only here is it useful', fza:2, din:'ff brillante · pp difícil', dinEn:'ff bright · pp hard'},
      {car:'silbante, penetrante, potentísimo', carEn:'whistling, piercing, very powerful', fza:3, din:'solo ff', dinEn:'ff only'} ]},
    oboe: { cls:'nasal / oscuro', clsEn:'nasal / dark', scope:[1], z:[
      {car:'grueso, áspero, nasal; extremo "wild"', carEn:'thick, harsh, nasal; extreme "wild"', fza:2, din:'pp difícil (imposible c/sordina) · ff áspero', dinEn:'pp hard (impossible with mute) · ff harsh'},
      {car:'nasal, expresivo, de caña', carEn:'nasal, expressive, reedy', fza:2, din:'mejor pp–ff acá', dinEn:'best pp–ff here'},
      {car:'claro, más penetrante', carEn:'clear, more penetrating', fza:1, din:'pp posible · ff algo pinzado', dinEn:'pp possible · ff a bit pinched'},
      {car:'chillón, duro y seco', carEn:'shrill, hard and dry', fza:0, din:'difícil de controlar', dinEn:'hard to control'} ]},
    english_horn: { cls:'nasal / oscuro (oboe en Fa)', clsEn:'nasal / dark (oboe in F)', scope:[1], z:[
      {car:'bastante penetrante; grueso/nasal', carEn:'fairly penetrating; thick/nasal', fza:2, din:'pp (extremo c/sordina) · ff oscuro', dinEn:'pp (extreme with mute) · ff dark'},
      {car:'soñador, dulcísimo — su firma', carEn:'dreamy, very sweet — its signature', fza:2, din:'corazón expresivo, pp–mf bello', dinEn:'expressive heart, beautiful pp–mf'},
      {car:'dulce, plañidero; afinándose [A]', carEn:'sweet, plaintive; refining [A]', fza:1, din:'pp delicado · ff modesto', dinEn:'delicate pp · modest ff'},
      {car:'duro, seco como el oboe [A]', carEn:'hard, dry like the oboe [A]', fza:0, din:'difícil', dinEn:'hard'} ]},
    clarinet: { cls:'brillante / voz de pecho · el más matizado', clsEn:'bright / chest voice · the most nuanced', scope:[2], z:[
      {car:'chalumeau: nasal/oscuro; extremo "ringing/threatening"', carEn:'chalumeau: nasal/dark; extreme "ringing/threatening"', fza:2, din:'pp "a mere breath" · ff fuerte', dinEn:'pp "a mere breath" · ff strong'},
      {car:'garganta: claro, algo velado', carEn:'throat: clear, a bit veiled', fza:1, din:'pp excelente', dinEn:'excellent pp'},
      {car:'clarino: claro, brillante, expresivo', carEn:'clarino: clear, bright, expressive', fza:2, din:'mejor pp–ff', dinEn:'best pp–ff'},
      {car:'algo penetrante / "piercing"', carEn:'somewhat penetrating / "piercing"', fza:2, din:'ff penetrante · pp con oficio', dinEn:'ff penetrating · pp with skill'} ]},
    bass_clarinet: { cls:'voz de pecho oscuro · sin lo plateado', clsEn:'dark chest voice · without the silvery sheen', scope:[0,1], z:[
      {car:'más oscuro, siniestro', carEn:'darker, sinister', fza:2, din:'pp grave soberbio · ff oscuro', dinEn:'superb low pp · dark ff'},
      {car:'oscuro, amaderado, hueco [A]', carEn:'dark, woody, hollow [A]', fza:2, din:'pp–mf rico', dinEn:'rich pp–mf'},
      {car:'clarino pero "lacks the silvery quality"', carEn:'clarino but "lacks the silvery quality"', fza:1, din:'pp posible · ff más fino', dinEn:'pp possible · thinner ff'},
      {car:'apagado; incapaz de alegría', carEn:'dull; incapable of gaiety', fza:1, din:'limitado', dinEn:'limited'} ]},
    bassoon: { cls:'nasal / oscuro', clsEn:'nasal / dark', scope:[1], z:[
      {car:'grueso, áspero, nasal; extremo "sinister"', carEn:'thick, harsh, nasal; extreme "sinister"', fza:2, din:'ff grueso · pp pesado (grave imposible c/sordina)', dinEn:'thick ff · heavy pp (low impossible with mute)'},
      {car:'de caña, expresivo', carEn:'reedy, expressive', fza:2, din:'mejor pp–ff', dinEn:'best pp–ff'},
      {car:'tenor: claro, plañidero, vocal; cantabile', carEn:'tenor: clear, plaintive, vocal; cantabile', fza:1, din:'pp expresivo · ff pinzado arriba', dinEn:'expressive pp · pinched ff up top'},
      {car:'chillón, duro y seco / "tense"', carEn:'shrill, hard and dry / "tense"', fza:0, din:'difícil', dinEn:'hard'} ]},
    contrabassoon: { cls:'extremo grave · no-expresivo', clsEn:'deep low extreme · non-expressive', scope:[], z:[
      {car:'espeso y denso; muy potente en piano', carEn:'thick and dense; very powerful at piano', fza:3, din:'pp único y potente · ff espeso', dinEn:'unique powerful pp · thick ff'},
      {car:'espeso, denso, poco definido', carEn:'thick, dense, ill-defined', fza:2, din:'pp denso · ff pesado', dinEn:'dense pp · heavy ff'},
      {car:'"by no means so useful"', carEn:'"by no means so useful"', fza:0, din:'de poco valor', dinEn:'of little value'},
      {car:'inútil artísticamente', carEn:'artistically useless', fza:0, din:'—', dinEn:'—'} ]},

    // Saxofón (alto) — fuera de R-K; carácter por registro desde Adler + deep-research del proyecto
    // (maderas/saxofon-investigacion.md): caña simple sobre cono → serie armónica completa; codo de
    // radiación ≈840 Hz (alto); grave con subtone difícil de arrancar, medio cantabile, agudo brillante.
    saxophone: { cls:'caña simple sobre cono · serie armónica completa', clsEn:'single reed on a cone · full harmonic series',
      src:'Adler, The Study of Orchestration · Music Motion deep-research (maderas/saxofon)', scope:[1,2], z:[
      {car:'grave con subtone: cuesta arrancar; redondo y velado en pp, áspero en ff', carEn:'low subtone register: hard to start; round and veiled at pp, coarse at ff', fza:1, din:'pp delicado (subtone) · ff con cuerpo', dinEn:'pp delicate (subtone) · ff with body'},
      {car:'cálido, expresivo — el corazón cantabile del saxo', carEn:'warm, expressive — the sax\'s cantabile heart', fza:2, din:'pp–ff parejo, su mejor registro', dinEn:'pp–ff even, its best register'},
      {car:'brillante y proyectante; más puro respecto de su fundamental', carEn:'bright and projecting; purer relative to its fundamental', fza:2, din:'ff brillante · pp posible con oficio', dinEn:'ff bright · pp possible with skill'},
      {car:'penetrante y tenso; al filo del registro normal', carEn:'piercing and tense; at the edge of the normal range', fza:3, din:'sólo ff con seguridad', dinEn:'only ff reliably'} ]},

    // ── Metales (Tabla C) — brillo creciente al agudo; pp dulce, ff "crackling" ──
    horn: { cls:'suave, poético · enlace con maderas', clsEn:'soft, poetic · the link to the woodwinds', scope:[1], z:[
      {car:'oscuro y brillante; algo desenfocado [A]', carEn:'dark and bright; somewhat unfocused [A]', fza:1, din:'pp dulce · ff posible, grave inestable', dinEn:'sweet pp · ff possible, unstable low'},
      {car:'recuerda al fagot (el enlace)', carEn:'recalls the bassoon (the link)', fza:2, din:'pp–ff · mejor cantabile', dinEn:'pp–ff · best cantabile'},
      {car:'redondo y lleno; heroico [A]', carEn:'round and full; heroic [A]', fza:3, din:'ff brillante · pp con control', dinEn:'bright ff · pp with control'},
      {car:'brillante; ff "crackling"', carEn:'bright; ff "crackling"', fza:3, din:'ff blaring · pp muy difícil', dinEn:'ff blaring · pp very hard'} ]},
    trumpet: { cls:'clara y penetrante · brillante', clsEn:'clear and penetrating · brilliant', scope:[1], z:[
      {car:'turbia, como amenazante (en p); apagada [A]', carEn:'murky, as if threatening (at p); dull [A]', fza:1, din:'pp turbia · ff poco característico', dinEn:'murky pp · uncharacteristic ff'},
      {car:'clara y penetrante', carEn:'clear and penetrating', fza:2, din:'pp claro · ff "stirring, rousing"', dinEn:'clear pp · ff "stirring, rousing"'},
      {car:'excitante en f; plateada en p', carEn:'exciting at f; silvery at p', fza:3, din:'pp plateado · ff la firma', dinEn:'silvery pp · ff the signature'},
      {car:'brillante; ff "crackling"', carEn:'bright; ff "crackling"', fza:3, din:'ff blazing · pp muy difícil', dinEn:'ff blazing · pp very hard'} ]},
    trombone: { cls:'noble · "piano full but heavy, forte powerful"', clsEn:'noble · "piano full but heavy, forte powerful"', scope:[1], z:[
      {car:'oscuro y amenazante en el grave profundo', carEn:'dark and threatening in the deep low', fza:2, din:'pp lleno pero pesado · ff oscuro', dinEn:'full but heavy pp · dark ff'},
      {car:'noble, sonoro', carEn:'noble, sonorous', fza:3, din:'pp lleno · ff potente y sonoro', dinEn:'full pp · powerful, sonorous ff'},
      {car:'brillante y triunfal', carEn:'bright and triumphant', fza:3, din:'arriba no baja de mf · ff triunfal', dinEn:'up top no softer than mf · triumphant ff'},
      {car:'brillante; ff "crackling"', carEn:'bright; ff "crackling"', fza:3, din:'ff blaring · pp impracticable', dinEn:'ff blaring · pp impracticable'} ]},
    tuba: { cls:'cimiento · "less characteristic", valor en el grave', clsEn:'foundation · "less characteristic", value in the low', scope:[1], z:[
      {car:'fuerza y belleza de sus notas graves', carEn:'strength and beauty of its low notes', fza:3, din:'pp rico sorprendente · ff fundacional', dinEn:'surprisingly rich pp · foundational ff'},
      {car:'grueso y áspero, menos característico', carEn:'thick and harsh, less characteristic', fza:2, din:'pp posible · ff lleno', dinEn:'pp possible · full ff'},
      {car:'más brillante al subir; "shouty"', carEn:'brighter going up; "shouty"', fza:3, din:'ff fuerte · pp más difícil', dinEn:'strong ff · pp harder'},
      {car:'brillante pero pinzado; no-expresivo', carEn:'bright but pinched; non-expressive', fza:3, din:'ff forzado · pp impracticable', dinEn:'forced ff · pp impracticable'} ]},

    // ── Cuerdas (Tabla A) — por cuerda; expresión donde solapa la voz humana ──
    violin: { cls:'el medio melódico por excelencia', clsEn:'the melodic medium par excellence', scope:[1,2], z:[
      {car:'cuerda Sol (cubierta): "rather harsh"; rica/robusta [A]', carEn:'G string (covered): "rather harsh"; rich/robust [A]', fza:2, din:'grave sonoro', dinEn:'sonorous low'},
      {car:'cuerda Re: "sweeter and weaker"', carEn:'D string: "sweeter and weaker"', fza:1, din:'velado, lírico', dinEn:'veiled, lyrical'},
      {car:'cuerda La: cantábile, expresivo', carEn:'A string: cantabile, expressive', fza:2, din:'el registro que canta', dinEn:'the register that sings'},
      {car:'cuerda Mi: "brilliant"; arriba de Mi6 pierde calidez', carEn:'E string: "brilliant"; above E6 it loses warmth', fza:2, din:'usar con cuidado; saltos no', dinEn:'use with care; no leaps'} ]},
    viola: { cls:'intensa, plañidera', clsEn:'intense, plaintive', scope:[1,2], z:[
      {car:'cuerda Do (cubierta): "harsh"; oscuro/sombrío [A]', carEn:'C string (covered): "harsh"; dark/somber [A]', fza:2, din:'grave austero', dinEn:'austere low'},
      {car:'cuerda Sol: transición, cálido [A]', carEn:'G string: transition, warm [A]', fza:2, din:'—', dinEn:'—'},
      {car:'cuerda Re: "sweeter and weaker"', carEn:'D string: "sweeter and weaker"', fza:1, din:'la cuerda más floja', dinEn:'the weakest string'},
      {car:'cuerda La: "biting… slightly nasal"', carEn:'A string: "biting… slightly nasal"', fza:2, din:'intenso/plañidero', dinEn:'intense/plaintive'} ]},
    cello: { cls:'el cantante del cuarteto', clsEn:'the singer of the quartet', scope:[2,3], z:[
      {car:'cuerda Do: "harsh"; sonoro por peso [A]', carEn:'C string: "harsh"; sonorous by weight [A]', fza:2, din:'cimiento', dinEn:'foundation'},
      {car:'cuerda Sol: más brillante, cálido [A]', carEn:'G string: brighter, warm [A]', fza:1, din:'—', dinEn:'—'},
      {car:'cuerda Re: "sweeter and weaker"; cálido [A]', carEn:'D string: "sweeter and weaker"; warm [A]', fza:1, din:'lírico', dinEn:'lyrical'},
      {car:'cuerda La: brillante, voz de pecho; "most expressive" [A]', carEn:'A string: bright, chest voice; "most expressive" [A]', fza:3, din:'el tenor famoso del cello', dinEn:"the cello's famous tenor"} ]},
    contrabass: { cls:'cimiento; suele doblar al cello', clsEn:'foundation; usually doubles the cello', scope:[2], z:[
      {car:'cuerda Mi: "duller"; bajo la voz pierde expresión', carEn:'E string: "duller"; below the voice it loses expression', fza:2, din:'grave, peso', dinEn:'low, weight'},
      {car:'cuerda La: "duller"; carácter poco notable', carEn:'A string: "duller"; unremarkable character', fza:2, din:'fundamento', dinEn:'foundation'},
      {car:'cuerda Re: "more penetrating"', carEn:'D string: "more penetrating"', fza:1, din:'registro útil/melódico', dinEn:'useful/melodic register'},
      {car:'cuerda Sol: "more penetrating"; tenso arriba [A]', carEn:'G string: "more penetrating"; tense up high [A]', fza:1, din:'solista, con cuidado', dinEn:'solo, with care'} ]},

    // ── Instrumentos sumados (deep-research del proyecto; carácter por registro estilo R-K) ──
    harp: { cls:"pulsada resonante, decae solo", clsEn:"plucked resonant, free decay", src:"Le Carrou (JASA 2010); Woodhouse & Lynch-Aird (JSV 2022)", scope:[1,2], z:[
      {car:"bordones entorchados oscuros; fundamental débil radiada pero sustain enorme", carEn:"dark wound basses; weakly radiated fundamental but huge sustain", fza:2, din:"de pp a ff; el 'thump' de caja crece con la fuerza", dinEn:"pp to ff; body 'thump' grows with force"},
      {car:"tripa cantable y redonda; fundamental plena con doble caída", carEn:"singing round gut; full fundamental with double decay", fza:2, din:"pp a ff plenos, el registro más expresivo", dinEn:"full pp to ff, the most expressive register"},
      {car:"tripa o nailon clara y brillante, sustain medio", carEn:"bright clear gut or nylon, medium sustain", fza:2, din:"pp a ff, algo menos cuerpo", dinEn:"pp to ff, slightly less body"},
      {car:"cuerda corta casi percusiva; espectro pobre y decay seco", carEn:"short near-percussive string; poor spectrum, dry decay", fza:1, din:"techo bajo, el ff casi no suma volumen", dinEn:"low ceiling, ff barely adds volume"} ]},
    guitar: { cls:"pulsada de nylon, íntima", clsEn:"nylon plucked, intimate", src:"Woodhouse, 'On the synthesis of guitar plucks' (Acta Acustica 2004)", scope:[0,1], z:[
      {car:"6a entorchada oscura; fundamental débil y 'thump' de caja a ~100 Hz", carEn:"dark wound 6th; weak fundamental and body 'thump' near 100 Hz", fza:2, din:"pp a ff; el ff abre agudos y suma golpe", dinEn:"pp to ff; ff opens highs and adds attack"},
      {car:"4a entorchada cálida y cantable, sustain largo", carEn:"warm singing wound 4th, long sustain", fza:2, din:"pp a ff cómodos", dinEn:"comfortable pp to ff"},
      {car:"3a de nylon opaca y nasal, decay más corto: el quiebre timbral", carEn:"opaque nasal nylon 3rd, shorter decay: the timbral break", fza:2, din:"pp a ff con dinámica algo comprimida", dinEn:"pp to ff, somewhat compressed dynamics"},
      {car:"digitada aguda, brillante pero de espectro pobre; cola breve", carEn:"high stopped note, bright but spectrally poor; short tail", fza:1, din:"rango estrecho; ff corto", dinEn:"narrow range; short ff"} ]},
    gamba: { cls:"frotada, delgada y nasal", clsEn:"bowed, thin and nasal", src:"Chatziioannou (JASA 2019); Simpson, 'The Division-Viol' (1659)", scope:[2,3], z:[
      {car:"7a entorchada; fundamental fantasmal bajo la caja, reconstruida por parciales", carEn:"wound 7th; ghostly fundamental below the body, rebuilt from partials", fza:1, din:"pp muy fácil; ff limitado, sin peso de cello", dinEn:"pp very easy; limited ff, no cello weight"},
      {car:"6a de tripa maciza, oscura y nasal: el máximo de opacidad del instrumento", carEn:"thick solid-gut 6th, dark and nasal: the instrument's peak opacity", fza:1, din:"pp a mf; ff modesto", dinEn:"pp to mf; modest ff"},
      {car:"4a al aire sobre el Helmholtz de 123 Hz, redonda y presente", carEn:"open 4th over the 123 Hz Helmholtz, round and present", fza:2, din:"pp a mf; el brillo crece con la fuerza de arco", dinEn:"pp to mf; brightness grows with bow force"},
      {car:"brillante y ágil, 'quick and sprightly'; arriba del último traste se apaga", carEn:"bright and agile, 'quick and sprightly'; dulls above the last fret", fza:2, din:"pp a mf; dinámica corta pasado el último traste", dinEn:"pp to mf; short dynamics past the last fret"} ]},
    banjo: { cls:"pulsada de parche, percusiva", clsEn:"membrane plucked, percussive", src:"Woodhouse & Politzer, 'Acoustics of the banjo' (Acta Acustica 2021)", scope:[1,2], z:[
      {car:"4a entorchada bajo el modo del parche (290 Hz); fundamental débil, casi armónicos", carEn:"wound 4th below the head mode (290 Hz); weak fundamental, mostly harmonics", fza:2, din:"golpe fuerte y cola corta", dinEn:"strong strike, short tail"},
      {car:"brillante y punzante con 'thump' de parche en el ataque", carEn:"bright and cutting with head 'thump' on attack", fza:2, din:"ataque potente que se apaga rápido", dinEn:"powerful attack that decays fast"},
      {car:"sobre el modo fundamental del parche: máxima proyección y doble caída", carEn:"on the head's fundamental mode: maximum projection and double decay", fza:3, din:"el más fuerte; pico +10 dB sobre la guitarra", dinEn:"the loudest; +10 dB peak over guitar"},
      {car:"percusivo y metálico; doble caída fuerte, muy seco", carEn:"percussive and metallic; strong double decay, very dry", fza:2, din:"percusivo; ff seco y brevísimo", dinEn:"percussive; dry, very short ff"} ]},
    mandolin: { cls:"pulsada doble, tensa y brillante", clsEn:"double-course plucked, taut and bright", src:"Cohen & Rossing (2003); Quintavalla et al. (2022)", scope:[0,2], z:[
      {car:"orden grave sobre la resonancia de aire (194 Hz), lleno y redondo", carEn:"low course on the air resonance (194 Hz), full and round", fza:2, din:"pp a ff; apoyada en la caja", dinEn:"pp to ff; supported by the body"},
      {car:"orden entorchado cantable; batido lento del par desafinado", carEn:"wound course, singing; slow beating of the detuned pair", fza:2, din:"pp a ff plenos", dinEn:"full pp to ff"},
      {car:"orden macizo duro y nasal, el más inarmónico del juego", carEn:"solid course, hard and nasal, the most inharmonic of the set", fza:2, din:"ff duro y penetrante", dinEn:"hard, penetrating ff"},
      {car:"'shimmer' del par desafinado; sin sustain, pide trémolo", carEn:"'shimmer' of the detuned pair; no sustain, needs tremolo", fza:1, din:"sin sustain; el trémolo hace la dinámica", dinEn:"no sustain; the tremolo carries the dynamics"} ]},
    celesta: { cls:"timbre plateado, dinámica estrecha", clsEn:"silvery timbre, narrow dynamics", src:"VSL 'plateado, brillante, etéreo'", scope:[1,2], z:[
      {car:"grave 'rico y cálido', caja de madera, resonancia larga", carEn:"warm rich low, wooden box, long resonance", fza:2, din:"suave, canta con pedal", dinEn:"soft, sings with pedal"},
      {car:"láminas limpias, timbre homogéneo, brillo plateado", carEn:"clean bars, homogeneous timbre, silvery shine", fza:2, din:"parejo, claro", dinEn:"even, clear"},
      {car:"centro homogéneo, casi senoidal, decay más corto", carEn:"homogeneous center, near-sinusoidal, shorter decay", fza:1, din:"delicado", dinEn:"delicate"},
      {car:"agudo tenue, decay corto, segundo modo fuera de juego", carEn:"faint top, short decay, second mode gone", fza:1, din:"frágil, breve", dinEn:"fragile, brief"} ]},
    harpsichord: { cls:"cuerda pulsada, nivel fijo", clsEn:"plucked string, fixed level", src:"Fletcher & Bassett ~70 dB(A) uniforme", scope:[1,2], z:[
      {car:"bajo de latón, redondo, decay largo, fundamental pobre", carEn:"brass bass, round, long decay, weak fundamental", fza:2, din:"sin matiz, ruido de mecanismo", dinEn:"no dynamics, mechanism noise"},
      {car:"quiebre de material, redondo y nasal, medio pleno", carEn:"material break, round and nasal, full middle", fza:2, din:"expresión por articulación", dinEn:"expression via articulation"},
      {car:"treble claro, fundamental domina, aflautado", carEn:"clear treble, fundamental dominates, flute-like", fza:2, din:"brillante, seco", dinEn:"bright, dry"},
      {car:"agudo corto, decay bajo un segundo, 4 pies sin apagador", carEn:"short top, sub-second decay, undamped 4-foot", fza:1, din:"tenue, chispeante", dinEn:"faint, sparkling"} ]},
    pipe_organ: { cls:"registro sostenido, Principal 8", clsEn:"sustained rank, Principal 8-foot", src:"Cook 'fundamental fuerte, primeros armónicos repartidos'", scope:[0,1,2], z:[
      {car:"tubo abierto, fundamento grave, 'chiff' de ataque", carEn:"open pipe, deep foundation, attack chiff", fza:2, din:"plano por matiz; suma registros", dinEn:"flat dynamics; adds ranks"},
      {car:"pleno diapasónico, serie completa, cuerpo", carEn:"full diapason body, complete series", fza:3, din:"plano, sostenido puro", dinEn:"flat, pure sustain"},
      {car:"brillante, formante en 6.º parcial, habla rápida", carEn:"bright, formant at 6th partial, quick speech", fza:2, din:"estable, sostenido", dinEn:"steady, sustained"},
      {car:"agudo brillante, parciales altos mueren rápido", carEn:"bright top, high partials die fast", fza:2, din:"firme, sin decay", dinEn:"firm, no decay"} ]},
    piano: { cls:"martillo percutido, dinámica amplia", clsEn:"struck hammer, wide dynamics", src:"Hall & Askenfelt 'treble control on volume'", scope:[1,2], z:[
      {car:"graves entorchados, ricos en parciales, fundamental virtual", carEn:"wound bass, partial-rich, virtual fundamental", fza:3, din:"de pp a fff, decay largo", dinEn:"pp to fff, long decay"},
      {car:"cuerpo cantabile, doble caída, inarmonicidad mínima", carEn:"singing body, double decay, minimal inharmonicity", fza:3, din:"máximo contraste dinámico", dinEn:"max dynamic contrast"},
      {car:"brillante, decay corto, 'killer octave' F5-F6", carEn:"bright, short decay, killer octave F5-F6", fza:2, din:"responde al tacto, ff abre", dinEn:"touch-responsive, ff opens"},
      {car:"agudo percusivo, inarmonicidad alta, decay muy corto", carEn:"percussive top, high inharmonicity, very short decay", fza:1, din:"breve, brillante", dinEn:"brief, bright"} ]},
    accordion: { cls:"lengüeta libre, sostenido", clsEn:"free reed, sustained", src:"Elejalde-García ~70 dBA, 'armonicidad se mantiene'", scope:[1,2], z:[
      {car:"16 pies grave, onda cuadrada, ataque lento", carEn:"16-foot bass, square-wave, slow attack", fza:2, din:"color por presión, no volumen", dinEn:"color by pressure, not volume"},
      {car:"musette, batido dulce, rico en armónicos", carEn:"musette, sweet beating, harmonic-rich", fza:3, din:"matiz de color; brillo con fuelle", dinEn:"color nuance; brightness with bellows"},
      {car:"brillante, batido menor en cents, estable", carEn:"bright, smaller cent beating, stable", fza:2, din:"fuelle abre brillo", dinEn:"bellows opens brightness"},
      {car:"agudo penetrante, bending imposible, seco", carEn:"penetrating top, bending impossible, dry", fza:2, din:"firme, sostenido", dinEn:"firm, sustained"} ]},
    voice_soprano: { cls:"lírica brillante, ágil", clsEn:"bright agile lyric", src:"Miller (passaggi Eb4/F#5); Sundberg R1:f0", scope:[2,3], z:[
      {car:"registro de pecho-mixto, cálido pero corto de proyección", carEn:"chest-mix, warm but short on projection", fza:1, din:"medio; grave modesto", dinEn:"moderate; weak low"},
      {car:"primo passaggio, voz mixta que empieza a florecer", carEn:"primo passaggio, mixed voice starting to bloom", fza:2, din:"amplio, flexible", dinEn:"wide, flexible"},
      {car:"secondo passaggio, cabeza plena, brillo y anillo", carEn:"secondo passaggio, full head voice, ring and shine", fza:3, din:"pleno, mayor rango", dinEn:"full, widest range"},
      {car:"afinación R1:f0, timbre puro y radiante, la vocal se disuelve", carEn:"R1:f0 tuning, pure radiant timbre, vowel dissolves", fza:2, din:"brillante; pp casi imposible", dinEn:"bright; pp nearly impossible"} ]},
    voice_alto: { cls:"cálida, oscura, homogénea", clsEn:"warm, dark, even", src:"Miller (passaggi A4/D5); Garnier R1", scope:[1,2], z:[
      {car:"pecho oscuro y rico, corazón del contralto", carEn:"dark rich chest, the contralto's core", fza:2, din:"lleno, cálido", dinEn:"full, warm"},
      {car:"primo passaggio, mixto templado y parejo", carEn:"primo passaggio, tempered even mix", fza:2, din:"amplio", dinEn:"wide"},
      {car:"secondo passaggio, cabeza firme, nunca cruza R1", carEn:"secondo passaggio, firm head, never crosses R1", fza:3, din:"pleno", dinEn:"full"},
      {car:"techo de cabeza, sostiene color sin quebrar", carEn:"head ceiling, holds color without breaking", fza:2, din:"sostenido, cierra algo", dinEn:"sustained, slightly narrowing"} ]},
    voice_tenor: { cls:"viril, brillante, con squillo", clsEn:"virile, bright, ringing", src:"Miller (passaggi D4/G4); solape M1/M2 260-500 Hz", scope:[2,3], z:[
      {car:"fondo oscuro, poco cuerpo, base de pecho", carEn:"dark bottom, little body, chest floor", fza:1, din:"modesto", dinEn:"modest"},
      {car:"primo passaggio, voz de pecho plena y viril", carEn:"primo passaggio, full virile chest voice", fza:2, din:"amplio", dinEn:"wide"},
      {car:"secondo passaggio, arranca el squillo, decisión M1/M2", carEn:"secondo passaggio, squillo emerges, M1/M2 choice", fza:3, din:"pleno, gran rango", dinEn:"full, wide range"},
      {car:"el Do agudo, squillo brillante y emocionante", carEn:"the high C, brilliant thrilling squillo", fza:3, din:"intenso; pp difícil", dinEn:"intense; pp hard"} ]},
    voice_bass: { cls:"grave, noble, sonora", clsEn:"deep, noble, sonorous", src:"Miller (passaggi Ab3/Db4); formante interp. desde barítono", scope:[1,2], z:[
      {car:"fondo profundo, cimiento grave y sonoro", carEn:"deep bottom, sonorous grave foundation", fza:2, din:"lleno abajo", dinEn:"full below"},
      {car:"primo passaggio, pecho redondo y noble", carEn:"primo passaggio, round noble chest", fza:2, din:"amplio", dinEn:"wide"},
      {car:"secondo passaggio, voz plena y proyectada", carEn:"secondo passaggio, full projected voice", fza:3, din:"pleno", dinEn:"full"},
      {car:"techo, cabeza viril con brillo del cantante", carEn:"ceiling, virile head with singer's ring", fza:2, din:"sostenido", dinEn:"sustained"} ]},
    kena: { cls:"oscura, texturada, aireada", clsEn:"dark, textured, breathy", src:"de la Cuadra et al. 2016; Díaz & Mendes 2015", scope:[2,3], z:[
      {car:"primer registro laminar, muchos parciales, caña velada y débil", carEn:"laminar first register, many partials, veiled reedy weak", fza:1, din:"modesto, cuesta hablar", dinEn:"modest, hard to speak"},
      {car:"tope forzado del primer modo, brillante y aireado", carEn:"forced top of first mode, bright and airy", fza:2, din:"creciente", dinEn:"rising"},
      {car:"reseteo al segundo registro, redondo y lleno, la voz del instrumento", carEn:"reset to second register, round full, the instrument's voice", fza:2, din:"pleno, proyecta", dinEn:"full, projects"},
      {car:"chorro turbulento, casi tono puro con aire encima", carEn:"turbulent jet, near pure tone with air atop", fza:2, din:"aire máximo", dinEn:"maximal air"} ]},
    recorder_alto: { cls:"hueco, dulce, aireado", clsEn:"hollow, sweet, breathy", src:"Giordano & Thacker 2016; Fletcher & Douglas 1980", scope:[1], z:[
      {car:"tubo entero, hueco de impares, radiación pobre, con chiff", carEn:"whole tube, odd-harmonic hollow, poor radiation, chiff", fza:1, din:"débil, rango minúsculo (~6 dB)", dinEn:"weak, tiny range (~6 dB)"},
      {car:"tope del primer registro, la nota más plena y clara", carEn:"top of first register, fullest clearest note", fza:2, din:"el mejor punto, aún ~6 dB", dinEn:"best point, still ~6 dB"},
      {car:"primera octava con pulgar pinzado, más delgada", carEn:"first pinched-thumb octave, thinner", fza:2, din:"estrecho", dinEn:"narrow"},
      {car:"sobre el corte de red, casi senoidal con halo de aire", carEn:"above net cutoff, near sine with air halo", fza:1, din:"muy limitado", dinEn:"very limited"} ]},
    recorder_soprano: { cls:"brillante, dulce, silbante", clsEn:"bright, sweet, whistly", src:"Giordano & Saenger 2023 (YRS-23); física escalada del alto", scope:[1], z:[
      {car:"tubo entero, hueco dulce, algo silbante", carEn:"whole tube, sweet hollow, slightly whistly", fza:2, din:"débil, rango chico", dinEn:"weak, small range"},
      {car:"tope del primer registro, plena y brillante", carEn:"top of first register, full and bright", fza:2, din:"el mejor, ~6 dB", dinEn:"best, ~6 dB"},
      {car:"octava con pulgar pinzado, clara y penetrante", carEn:"pinched-thumb octave, clear and piercing", fza:2, din:"estrecho", dinEn:"narrow"},
      {car:"extremo, silbido casi puro con aire", carEn:"extreme, near-pure whistle with air", fza:1, din:"al límite de habla", dinEn:"at speaking limit"} ]},
    glockenspiel: { cls:"idiófono de acero, brillo cristalino", clsEn:"steel idiophone, crystalline shimmer", src:"VSL 'los armónicos del acero dan un timbre brillante'", scope:[1,2], z:[
      {car:"cuerpo tenue, 'ring' largo que hay que apagar, altura algo campanuda", carEn:"thin body, long ring to damp, faintly bell-like pitch", fza:1, din:"no proyecta, se lava", dinEn:"weak projection, washes"},
      {car:"zona más dulce, fundamental clara, brillo pleno, ataque nítido", carEn:"sweetest zone, clear fundamental, full sheen, crisp attack", fza:2, din:"redondo y presente", dinEn:"round and present"},
      {car:"filoso y penetrante, sustain más corto, click marcado", carEn:"sharp, piercing, shorter sustain, marked click", fza:2, din:"corta y brillante", dinEn:"short and bright"},
      {car:"casi un seno con click, sin cola, altura al límite", carEn:"near sine plus click, no tail, pitch at the edge", fza:1, din:"destello seco", dinEn:"dry flash"} ]},
    xylophone: { cls:"madera dura, seco y punzante", clsEn:"hard wood, dry and biting", src:"euphonics/Bork quint tuning 1:3; Chaigne-Doutaut", scope:[0,1], z:[
      {car:"más cuerpo, acorde 1:3 audible, tubo refuerza, breve aftersound", carEn:"more body, audible 1:3 chord, tube reinforces, short aftersound", fza:2, din:"leñoso y lleno", dinEn:"woody and full"},
      {car:"brillante y hueco, seco, ataque domina, decay cortísimo", carEn:"bright and hollow, dry, attack-led, very short decay", fza:2, din:"proyecta con filo", dinEn:"projects with edge"},
      {car:"puro golpe afinado, undercut mínimo, cola de décimas", carEn:"pure tuned strike, minimal undercut, tenths-long tail", fza:2, din:"penetrante y escueto", dinEn:"piercing, terse"},
      {car:"click con altura, sin armónicos, exige roll para sostener", carEn:"pitched click, no partials, needs roll to sustain", fza:1, din:"puntazo agudo", dinEn:"sharp jab"} ]},
    vibraphone: { cls:"aluminio cálido con motor", clsEn:"warm aluminium, motor tremolo", src:"Rossing 1:4:10, resonadores; VSL 'pobre en armónicos'", scope:[0,1,2], z:[
      {car:"sustain larguísimo, fundamental gorda, doble octava latente, oscuro", carEn:"very long sustain, fat fundamental, latent double octave, dark", fza:1, din:"no se impone, el motor ayuda", dinEn:"weak thrust, motor aids"},
      {car:"cantabile pleno, dulce, bloom hacia la doble octava, aterciopelado", carEn:"full cantabile, sweet, blooms to double octave, velvety", fza:2, din:"redondo y sostenido", dinEn:"round, sustained"},
      {car:"más brillo y ataque, decay menor, tercer modo desafinado", carEn:"brighter attack, shorter decay, third mode off-tune", fza:2, din:"claro pero corto", dinEn:"clear but shorter"},
      {car:"notas cortas, casi sin pedal, cuerpo delgado, campanita", carEn:"short notes, little pedal, thin body, bell-like", fza:1, din:"tenue y fugaz", dinEn:"faint, fleeting"} ]},
    marimba: { cls:"palisandro cálido y redondo", clsEn:"warm round rosewood", src:"Fletcher-Rossing 1:4:10; Stevens ring 1-2 s con resonador", scope:[0,1], z:[
      {car:"grave hondo y envolvente, tubo largo, doble octava audible, acordes a 4 mazas", carEn:"deep enveloping bass, long tube, audible double octave, four-mallet chords", fza:2, din:"profundo y lleno", dinEn:"deep and full"},
      {car:"redondo y vocal, fundamental dominante, decay de un segundo", carEn:"round and vocal, dominant fundamental, one-second decay", fza:2, din:"cálido y presente", dinEn:"warm and present"},
      {car:"más seco y leñoso, cola breve, solo 1:4 afinado", carEn:"drier, woodier, brief tail, only 1:4 tuned", fza:2, din:"claro, decae rápido", dinEn:"clear, fast decay"},
      {car:"decay se desploma bajo 0,5 s, torsional cerca de f0, casi puro golpe", carEn:"decay collapses under 0.5 s, torsional near f0, near-pure strike", fza:1, din:"seco y fino", dinEn:"dry and thin"} ]},
    tubular_bells: { cls:"tubo de metal, altura virtual", clsEn:"metal tube, virtual strike pitch", src:"Hibbert modos 4:5:6; Rossing strike note sin modo físico", scope:[1,2], z:[
      {car:"hum grave audible, campanadas plenas, cola de segundos, altura ambigua", carEn:"audible low hum, full peals, seconds-long tail, ambiguous pitch", fza:2, din:"solemne y grande", dinEn:"solemn, large"},
      {car:"carácter de campana, batidos lentos, brillo de modos altos en el ataque", carEn:"true bell character, slow beats, bright upper modes at attack", fza:2, din:"redondo y sonoro", dinEn:"round, resonant"},
      {car:"más filo y proyección, clac del martillo cerca de la nota, hum se pierde", carEn:"sharper, projecting, hammer clack near the note, hum fades", fza:3, din:"brillante y potente", dinEn:"bright and powerful"},
      {car:"ataque domina, metálico y penetrante, cola más corta", carEn:"attack-led, metallic and piercing, shorter tail", fza:3, din:"cortante y fuerte", dinEn:"cutting and loud"} ]},
    timpani: { cls:"membrana afinada, trueno grave", clsEn:"tuned membrane, low thunder", src:"Rossing/Tronchin modos 1:1.5:1.98; (0,1) thump monopolo", scope:[0,1,2], z:[
      {car:"32 pulgadas, thump hondo, nota que canta segundos, enorme y oscuro", carEn:"32-inch, deep thump, note singing for seconds, huge and dark", fza:3, din:"atronador, pp a fff", dinEn:"thunderous, pp to fff"},
      {car:"cuerpo pleno, doble caída clara, altura firme, ataque de fieltro", carEn:"full body, clear double decay, firm pitch, felt attack", fza:3, din:"potente y noble", dinEn:"powerful, noble"},
      {car:"más tenso y brillante, decay menor, ataque más seco", carEn:"tenser, brighter, shorter decay, drier attack", fza:2, din:"firme, algo tirante", dinEn:"firm, a bit taut"},
      {car:"tambor chico, tono tenso y corto, thump cerca de la nota", carEn:"small drum, tense short tone, thump near the note", fza:2, din:"seca y contenida", dinEn:"dry, contained"} ]},

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
  // Variantes que heredan la card de su instrumento padre (2026-09, Mario): no llevan card propia.
  L.aliases = { clarinet_a:'clarinet', trumpet_f:'trumpet', trombone_alto:'trombone', alto_flute_g:'flute',
    violins_section:'violin', violas_section:'viola', cellos_section:'cello', contrabasses_section:'contrabass',
    violao:'guitar', harpsichord_wt:'harpsichord', accordion_vallenato:'accordion',
    piano_steinway:'piano', piano_grand_tonal:'piano' };
  L.resolve = function(key){ return (L.aliases && L.aliases[key]) || key; };
  L.get = function(key){ return L.reg && L.reg[L.resolve(key)]; };
  L.has = function(key){ return !!(L.reg && L.reg[L.resolve(key)]); };
  // carácter R-K de un instrumento en una posición de registro (o null)
  //   at('flute', 0.1) → { zone:'low', idx:0, scope:false, car, fza, din }
  L.at = function(key, pos){
    var r = L.get(key); if(!r) return null;
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
      es:'En el grave, 77 parciales separados 65 Hz caen de ocho en ocho en cada banda crítica: eso es rugosidad, y se oye como una caja de cubiertos sobre una mesa. En el agudo los mismos parciales se separan y el efecto desaparece — no es un defecto, es aritmética de la serie armónica.',
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
// ═══════════════════════════════════════════════════════════════════════════════════════════
// PERCUSIÓN — orquesta (sin altura) y latina (2026-10-01, con Mario: «completar las fichas»).
// Orquesta: _Investigacion-instrumentos/percusion/percusion-no-afinada-investigacion.md + fuentes de
// notación en fuentes-percusion-no-afinada-notacion.md. Latina: percusion-latina-investigacion.md
// (informe nuevo, con fuentes). Sólo hechos musicales: nada aquí describe cómo lo modela el motor.
// snare_off comparte la ficha de snare (es la misma caja sin bordonas; la ficha tiene su ítem).
// ═══════════════════════════════════════════════════════════════════════════════════════════
(function(L){
  L.reg.snare = { ref: "_Investigacion-instrumentos/percusion/percusion-no-afinada-investigacion.md · fuentes-percusion-no-afinada-notacion.md",
    escribe: [
      {"sig": "Línea única, sin clave", "sigEn": "Single line, no clef", "es": "Desde el siglo XX la caja se escribe en una sola línea sin clave, porque no tiene altura definida. Si comparte pentagrama con otros instrumentos de percusión se usa la clave neutra (dos barras verticales).", "en": "Since the 20th century the snare drum has been written on a single line with no clef, as it has no definite pitch. When it shares a staff with other percussion, the neutral clef (two vertical bars) is used."},
      {"sig": "Redoble: ≡ o z", "sigEn": "Roll: ≡ or z", "es": "Tres barras en la plica piden un redoble cerrado; una «z» sobre la plica pide el buzz (press roll), en que cada baqueta rebota más de tres veces. Los redobles seguidos sin ligadura se separan levemente; si deben enlazar con la nota siguiente, hay que ligarlos.", "en": "Three slashes on the stem ask for a closed roll; a “z” on the stem asks for a buzz (press) roll, each stick bouncing more than three times. Consecutive rolls without ties are slightly separated; if a roll must connect to the next note, tie it."},
      {"sig": "Flam · drag · ruff", "es": "Los adornos se escriben como notas de adorno antes de la nota principal: flam (un golpe débil), drag (dos), ruff de tres y de cuatro golpes. Las manos se indican con R/L, y el golpe doble con RR/LL.", "en": "Ornaments are written as grace notes before the main note: flam (one soft stroke), drag (two), three- and four-stroke ruffs. Hands are marked R/L, double strokes RR/LL."},
      {"sig": "Rim shot · cross-stick", "es": "Se piden por texto, y en la notación de batería es habitual una barra diagonal sobre la cabeza para el rim shot y una cabeza en «x» para el cross-stick. También existen el rim click y el stick on stick, que se indican por su nombre.", "en": "They are requested in words; drum-set notation commonly uses a diagonal slash through the notehead for a rim shot and an “x” notehead for cross-stick. Rim click and stick-on-stick are indicated by name."},
      {"sig": "snares off / sin bordonas", "sigEn": "snares off", "es": "Se escribe en palabras sobre la línea: «snares off», «sin bordonas», en alemán «ohne Schnarrsaiten»; la indicación contraria las devuelve. Sin bordonas la caja suena parecida a un tom de pie: un tambor de parche, sin el siseo.", "en": "Written in words above the line: “snares off”, in German “ohne Schnarrsaiten”; the opposite indication restores them. With snares off the drum sounds much like a floor tom: a plain drumhead, without the hiss."}
    ],
    toca: [
      {"sig": "Casco y bordonas", "sigEn": "Shell and snares", "es": "El casco mide 12–19 cm de profundidad con parche de 35–38 cm. Bajo el parche inferior se tensan 8–18 bordonas de tripa, metal, nailon o seda; en la orquesta suelen ser de nailon o seda entorchados en metal, en jazz y rock de espiral de acero.", "en": "The shell is 12–19 cm deep with a 35–38 cm head. Beneath the lower head lie 8–18 snares of gut, metal, nylon or silk; orchestral drums usually use metal-wound nylon or silk, jazz and rock use wire coils."},
      {"sig": "Punto de golpe", "sigEn": "Striking spot", "es": "El sonido pleno está más o menos en el centro del parche, donde además el modo (0,1) radia con más fuerza. Al acercarse al aro baja el volumen y el sonido se adelgaza: es el recurso habitual para el pianissimo.", "en": "The full sound is roughly at the centre of the head, where the (0,1) mode radiates most strongly. Moving toward the rim lowers the volume and thins the tone: the usual means for pianissimo."},
      {"sig": "Tres redobles", "sigEn": "Three rolls", "es": "Cerrado (press/buzz: cada baqueta rebota varias veces y resulta un sonido continuo), abierto de dos golpes por mano y de golpes simples, que viene de la técnica del timbal. Ninguno debe oírse como golpes separados ni acentuados.", "en": "Closed (press/buzz: each stick bounces several times, giving a continuous sound), open two-stroke, and single-stroke, which comes from timpani technique. None should be heard as separate or accented strokes."},
      {"sig": "Rim shot · rim click · escobillas", "sigEn": "Rim shot · rim click · brushes", "es": "Rim shot: parche y aro a la vez, un estallido «como un pistoletazo». Rim click: el extremo de la baqueta contra el aro, un clic seco y agudo. Las escobillas de alambre dan un sonido brillante de roce, sin impacto.", "en": "Rim shot: head and rim together, a crack “like a pistol shot”. Rim click: the butt of the stick against the rim, a dry, high click. Wire brushes give a bright rushing sound with no impact."},
      {"sig": "Sin bordonas", "sigEn": "Snares off", "es": "Con la palanca (strainer) bajada, las bordonas se separan del parche inferior y desaparece el ruido de banda ancha que producen al rebotar. Queda un tambor de dos parches con su tono propio, de banda estrecha, parecido a un tom de pie; el punto de golpe se nota todavía más.", "en": "With the strainer released the snares leave the lower head, and the broadband noise of their rattling disappears. What remains is a two-headed drum with its own narrow-band tone, close to a floor tom; the striking spot becomes even more audible."},
      {"sig": "Baquetas", "sigEn": "Sticks", "es": "Unos 36 cm, de madera dura, con punta redonda u ovalada. En la música militar se usan gruesas y pesadas; en el jazz, finas y ligeras.", "en": "About 36 cm, hardwood, with round or oval tips. Military music uses thick, heavy sticks; jazz prefers thin, light ones."}
    ]
  };
  L.reg.bass_drum = { ref: "_Investigacion-instrumentos/percusion/percusion-no-afinada-investigacion.md · fuentes-percusion-no-afinada-notacion.md",
    escribe: [
      {"sig": "Línea única, sin clave", "sigEn": "Single line, no clef", "es": "Se escribe en una línea sin clave, o en pentagrama de percusión compartido con los platillos. Nombres en partitura: gran cassa, grosse caisse, Grosse Trommel, bombo.", "en": "Written on a single line with no clef, or on a shared percussion staff with the cymbals. Score names: gran cassa, grosse caisse, Grosse Trommel, bass drum."},
      {"sig": "Redoble ≡", "sigEn": "Roll ≡", "es": "Tres barras en la plica. Se toca con dos mazos iguales (o un mazo de dos cabezas) en golpes simples alternados, como un redoble de timbal.", "en": "Three slashes on the stem. Played with two matching beaters (or a double-ended beater) in alternating single strokes, like a timpani roll."},
      {"sig": "secco · l.v. · duración real", "sigEn": "secco · l.v. · real duration", "es": "El bombo resuena 3–4 s en mezzoforte, así que la figura escrita importa: secco pide apagar ambos parches inmediatamente después del golpe. Como las duraciones suelen estar escritas de forma inconsistente, el percusionista las contrasta con la partitura general; escribe la duración que quieres, o l.v. si debe sonar libre.", "en": "The bass drum rings 3–4 s at mezzoforte, so the written value matters: secco asks for both heads to be damped right after the stroke. Since note values are often written inconsistently, players check them against the full score; write the length you want, or l.v. if it must ring."},
      {"sig": "Implemento por texto", "sigEn": "Implement in words", "es": "El mazo normal (fieltro sobre núcleo de madera) no se indica. Otros se piden por nombre: fieltro duro, cuero, madera, baquetas de caja, escobillas, mazas de marimba; cada uno cambia el timbre.", "en": "The normal beater (felt over a wooden core) need not be marked. Others are named: hard felt, leather, wood, snare sticks, brushes, marimba mallets; each changes the timbre."},
      {"sig": "coperto · con la mano", "es": "Coperto: un paño sobre el parche, fuera de la zona de golpe, da un timbre más duro y apagado. Con la mano: golpe con los dedos, de sonido claro, delgado y suave.", "en": "Coperto: a cloth on the head, away from the beating spot, gives a harder, duller timbre. Con la mano: struck with the fingers, a bright, thin, soft tone."}
    ],
    toca: [
      {"sig": "Tamaño y mazo", "sigEn": "Size and beater", "es": "El bombo de orquesta mide 70–100 cm de diámetro y 35–55 cm de profundidad (el estándar habitual es 36″ × 16″), montado en un marco que permite inclinarlo. El mazo tiene una cabeza de 7–8 cm de fieltro sobre madera y un mango de 25–35 cm.", "en": "The orchestral bass drum is 70–100 cm in diameter and 35–55 cm deep (36″ × 16″ is a common standard), mounted in a tilting frame. The beater has a 7–8 cm felt-over-wood head and a 25–35 cm handle."},
      {"sig": "Punto de golpe", "sigEn": "Striking spot", "es": "El golpe pleno se da a un palmo del centro. En el centro el sonido es oscuro, algo hueco y con poca resonancia (útil para notas cortas); hacia el aro, más brillante y delgado.", "en": "The full stroke is about a hand-width from the centre. At the centre the sound is dark, slightly hollow and short-lived (useful for short notes); toward the rim it is brighter and thinner."},
      {"sig": "Redoble", "sigEn": "Roll", "es": "Con dos mazos, normalmente cerca del centro para un timbre oscuro. Hacia el aro se aclara, pero corre el riesgo de dejar oír una altura definida.", "en": "With two beaters, usually near the centre for a dark timbre. Toward the rim it brightens but risks sounding a definite pitch."},
      {"sig": "Apagado", "sigEn": "Damping", "es": "Se apaga con la mano libre sobre el parche o con la rodilla. Un bombo sin apagar en un final lento sigue sonando durante segundos y llena los compases siguientes.", "en": "It is damped with the free hand on the head or with the knee. An undamped bass drum in a slow ending keeps ringing for seconds and fills the following bars."},
      {"sig": "Dos mazos a la vez · mazo sobre mazo", "sigEn": "Unison strokes · beater on beater", "es": "Para el fortissimo se puede golpear con dos mazos al unísono. Para el pianissimo más extremo, un mazo apoyado en el parche y golpeado con el otro da golpes «suaves como terciopelo».", "en": "For fortissimo, two beaters can strike in unison. For the most extreme pianissimo, one beater resting on the head and struck by the other gives strokes “as soft as velvet”."}
    ]
  };
  L.reg.cymbals = { ref: "_Investigacion-instrumentos/percusion/percusion-no-afinada-investigacion.md · fuentes-percusion-no-afinada-notacion.md",
    escribe: [
      {"sig": "Línea y cabezas", "sigEn": "Line and noteheads", "es": "Se escriben en una línea, o en pentagrama sin clave junto al bombo u otra percusión; las cabezas en «x» son habituales para los platillos.", "en": "Written on a single line, or on a clefless staff with the bass drum or other percussion; “x” noteheads are common for cymbals."},
      {"sig": "a 2 · piatti · sosp.", "es": "Piatti o cinelli, Becken, cymbales. «a 2» (a due) indica volver a los platillos de choque después del suspendido, que se nombra aparte (piatto sospeso, suspended cymbal); en el suspendido hay que precisar tipo de platillo y duración.", "en": "Piatti or cinelli, Becken, cymbales. “a 2” (a due) means back to clash cymbals after the suspended one, which is named separately; for suspended cymbal the type and decay must be specified."},
      {"sig": "l.v. · secco · choke", "es": "Las notas largas se dejan decaer; las cortas se apagan contra el pecho, y secco pide ese apagado inmediatamente después del golpe. En la batería y la música popular el apagado seco se pide con la palabra «choke».", "en": "Long notes are left to decay; short ones are damped against the chest, and secco asks for that damping right after the stroke. In drum-set and popular writing the sudden damping is asked for with the word “choke”."},
      {"sig": "Redoble ≡ · strisciato", "sigEn": "Roll ≡ · strisciato", "es": "El trémolo de tres barras sobre el par se toca agitando los platos juntos (hasta mf) o con choques muy rápidos (también en fuerte). Strisciato: un plato raspa los surcos del otro del centro al borde, un siseo penetrante.", "en": "The three-slash tremolo on the pair is played by shaking the plates together (up to mf) or by very fast repeated crashes (also loud). Strisciato: one plate scrapes the grooves of the other from centre to rim, a penetrating hiss."}
    ],
    toca: [
      {"sig": "Tamaño y peso", "sigEn": "Size and weight", "es": "Platillos de choque de 16–22″ (41–56 cm), 1–2 mm de espesor y 1500–2500 g por plato. Por peso: franceses (ligeros, decaimiento rápido), vieneses (medios) y alemanes o wagnerianos (pesados, respuesta y decaimiento más lentos, sonido brillante).", "en": "Clash cymbals of 16–22″ (41–56 cm), 1–2 mm thick, 1500–2500 g per plate. By weight: French (light, quick decay), Viennese (medium) and German or Wagnerian (heavy, slower response and decay, brilliant sound)."},
      {"sig": "El choque", "sigEn": "The crash", "es": "Es un golpe rasante: los platos se encuentran y se separan de inmediato. Primero se tocan los bordes inferiores y luego los superiores, como un flam, para no atrapar aire, que ahoga el sonido. Después se sostienen en alto para dejarlos sonar o verticales para acortar.", "en": "It is a glancing blow: the plates meet and part at once. The lower edges touch before the upper ones, like a flam, so no air is trapped, which would choke the sound. Afterwards they are held up to ring or vertical to shorten."},
      {"sig": "Umbral, no rampa", "sigEn": "Threshold, not a ramp", "es": "Un platillo golpeado suave suena a placa metálica opaca; por encima de cierta amplitud, la no linealidad del bronce traslada la energía de los modos graves a los agudos y aparece el brillo. Lo último en apagarse son los graves: por eso los apagados se escriben.", "en": "Struck softly a cymbal sounds like a dull metal plate; above a certain amplitude the bronze’s nonlinearity transfers energy from low to high modes and the shimmer appears. The lows are the last to die away: that is why damping is written."},
      {"sig": "Suspendido", "sigEn": "Suspended", "es": "Redoble con dos mazas iguales en el borde, opuestas (hacia las 4 y las 8 del reloj); las mazas blandas dan el sonido más continuo. Baqueta en la cúpula: sonido de campana. Arco de contrabajo en el borde: sólo hasta mf.", "en": "Roll with two matching mallets on the edge, opposite each other (about 4 and 8 o’clock); soft mallets give the most continuous sound. Stick on the dome: bell-like. Double-bass bow on the edge: only up to mf."},
      {"sig": "Sobre el bombo", "sigEn": "Mounted on the bass drum", "es": "Un plato puede ir montado en el bombo y golpearse con el otro, para que un solo músico toque ambos instrumentos a la vez.", "en": "One plate can be mounted on the bass drum and struck with the other, so a single player plays both at once."}
    ]
  };
  L.reg.tam_tam = { ref: "_Investigacion-instrumentos/percusion/percusion-no-afinada-investigacion.md · fuentes-percusion-no-afinada-notacion.md",
    escribe: [
      {"sig": "Línea única + tamaño", "sigEn": "Single line + size", "es": "Se escribe en una línea. La partitura debe precisar el tamaño del tam-tam y cuánto debe durar el sonido.", "en": "Written on a single line. The score should specify the size of the tam-tam and how long the sound should last."},
      {"sig": "Tam-tam ≠ gong", "es": "El tam-tam no tiene altura definida; el gong sí, y con gongs se pueden tocar melodías. Si quieres una nota, pide gong afinado y escribe la altura; si no, tam-tam.", "en": "The tam-tam has no definite pitch; the gong does, and melodies can be played on gongs. If you want a note, ask for a tuned gong and write the pitch; otherwise, tam-tam."},
      {"sig": "l.v. · secco", "es": "La redonda se deja sonar; las notas más cortas las apaga la mano según lo escrito. Secco pide apagarlo nada más golpear: un sonido seco, opaco y metálico. Como puede resonar varios minutos, el final tiene que estar escrito.", "en": "A whole note is left to ring; shorter notes are hand-damped as written. Secco asks for damping right after the stroke: a dry, dull, metallic sound. Since it can ring for minutes, the ending must be written."},
      {"sig": "Redoble ≡", "sigEn": "Roll ≡", "es": "En un tam-tam grande se toca con dos mazos iguales, a una frecuencia de golpes relativamente baja; en uno pequeño, más rápido, como en el platillo suspendido.", "en": "On a large tam-tam it is played with two matching beaters at a relatively slow stroke rate; on a small one faster, as on a suspended cymbal."},
      {"sig": "Efectos por texto", "sigEn": "Effects in words", "es": "Arco de violonchelo o, mejor, de contrabajo en el borde (sólo en suave); raspado con varilla de triángulo; superball; water gong (sumergirlo después de golpear produce un glissando descendente).", "en": "Cello or, better, double-bass bow on the rim (soft only); scraping with a triangle beater; superball; water gong (lowering it into water after striking gives a downward glissando)."}
    ],
    toca: [
      {"sig": "Disco plano", "sigEn": "Flat disc", "es": "Disco de bronce de 60 a 100 cm o más, colgado del borde, plano o casi plano, sin cúpula: por eso no forma altura, a diferencia del gong.", "en": "A bronze disc of 60 to 100 cm or more, hung by its rim, flat or nearly so, with no boss: that is why it forms no pitch, unlike the gong."},
      {"sig": "Mazo y punto", "sigEn": "Beater and spot", "es": "Mazos especiales de fieltro, madera o metal con cabeza de 6–15 cm y mango de 28–35 cm. Se golpea a un palmo del centro, como el bombo. Con mazo blando el ataque se suaviza y el sonido crece despacio.", "en": "Special beaters of felt, wood or metal with 6–15 cm heads and 28–35 cm shafts. It is struck about a hand-width off centre, like the bass drum. A soft beater tempers the attack and the tone builds slowly."},
      {"sig": "Preparar el tam-tam", "sigEn": "Priming", "es": "Antes de un golpe fuerte se roza suavemente para ponerlo en vibración; así responde con todo su volumen.", "en": "Before a loud stroke it is touched gently to set it vibrating, so that it responds at full volume."},
      {"sig": "Llega tarde", "sigEn": "It blooms late", "es": "El agudo no está en el golpe: la no linealidad del metal lo va subiendo desde los graves en el orden de un segundo. En pianissimo esa cascada no arranca y el tam-tam es sólo un zumbido oscuro; entre pp y ff hay dos sonidos distintos.", "en": "The high register is not in the stroke: the metal’s nonlinearity pumps it up from the lows over about a second. In pianissimo the cascade does not start and the tam-tam is only a dark hum; pp and ff are two different sounds."},
      {"sig": "Apagado", "sigEn": "Damping", "es": "Se apaga apretándolo entre la pierna por un lado y la mano por el otro, más eficaz que tomarlo con las dos manos.", "en": "It is damped by pressing it between the leg on one side and a hand on the other, more effective than grabbing it with both hands."}
    ]
  };
  L.reg.triangle = { ref: "_Investigacion-instrumentos/percusion/percusion-no-afinada-investigacion.md · fuentes-percusion-no-afinada-notacion.md",
    escribe: [
      {"sig": "Línea única", "sigEn": "Single line", "es": "Como todo instrumento sin altura definida, se escribe en una línea sin clave.", "en": "Like any instrument of indefinite pitch, it is written on a single line with no clef."},
      {"sig": "Redoble ≡", "sigEn": "Roll ≡", "es": "Tres barras en la plica. El instrumentista mueve la varilla muy rápido entre los dos lados de una esquina, arriba o abajo; se hace con una sola mano.", "en": "Three slashes on the stem. The player moves the beater rapidly between the two sides of a corner, upper or lower; it is done with one hand."},
      {"sig": "Duración y apagado", "sigEn": "Duration and damping", "es": "Por costumbre el triángulo se deja sonar salvo staccati evidentes en unísono con otros. Si quieres notas cortas apagadas, escríbelo explícitamente (secco, apagado).", "en": "By custom the triangle is left to ring except for obvious staccato unisons. If you want short damped notes, write it explicitly (secco, damped)."},
      {"sig": "Varilla por texto", "sigEn": "Beater in words", "es": "La varilla normal es de metal. Otros colores se piden: varilla de madera, o agujas de tejer para un sonido más suave; las varillas finas dan un sonido más brillante y articulado.", "en": "The normal beater is metal. Other colours are requested: a wooden beater, or knitting needles for a softer sound; thin beaters give a brighter, more articulate sound."}
    ],
    toca: [
      {"sig": "Clip y cuerda", "sigEn": "Clip and cord", "es": "Cuelga de un clip con una cuerda corta de nailon o hilo de pescar, que lo deja vibrar libre. La mano sostiene el clip formando una «C» y queda libre para apagar.", "en": "It hangs from a clip on a short nylon or fishing-line cord that lets it vibrate freely. The hand holds the clip in a “C” shape and stays free to damp."},
      {"sig": "Tamaño", "sigEn": "Size", "es": "Los triángulos de orquesta suelen medir 6–8″; los más pequeños suenan más brillantes.", "en": "Orchestral triangles are usually 6–8″; smaller ones sound brighter."},
      {"sig": "Punto de golpe", "sigEn": "Striking spot", "es": "Por fuera en el lado inferior: resonancia plena. Por fuera cerca del vértice superior: textura más fina. Por dentro de la base: menos resonancia.", "en": "Outside on the bottom side: full resonance. Outside near the top vertex: thinner texture. Inside the base: less resonance."},
      {"sig": "Pasajes rápidos", "sigEn": "Fast passages", "es": "En legato, la varilla se mueve por dentro entre los lados. Si deben sonar articulados, se cuelga de dos clips y se toca con dos varillas iguales.", "en": "For legato, the beater moves inside between the sides. If they must be articulated, it is hung from two clips and played with two matching beaters."},
      {"sig": "Apagado", "sigEn": "Damping", "es": "Se cierran los dedos gradualmente alrededor del triángulo, no de golpe; la misma mano que sostiene el clip apaga o modifica el sonido.", "en": "The fingers close gradually around the triangle, not abruptly; the hand holding the clip damps or shades the sound."}
    ]
  };
  L.reg.tambourine = { ref: "_Investigacion-instrumentos/percusion/percusion-no-afinada-investigacion.md · fuentes-percusion-no-afinada-notacion.md",
    escribe: [
      {"sig": "Línea única", "sigEn": "Single line", "es": "Se escribe en una línea sin clave.", "en": "Written on a single line with no clef."},
      {"sig": "Redoble ≡: shake o thumb", "sigEn": "Roll ≡: shake or thumb", "es": "Tres barras en la plica. Hay tres formas: agitarla (shake roll, desde mp hacia arriba), el pulgar sobre el parche (thumb roll) o dos baquetas duras. El thumb roll tiene una duración limitada: un redoble largo se hace agitándola.", "en": "Three slashes on the stem. There are three ways: shaking (shake roll, from mp upward), thumb on the head (thumb roll), or two hard sticks. The thumb roll has a limited length: a long roll is shaken."},
      {"sig": "secco", "es": "Golpe y apagado inmediato: se pone la pandereta horizontal para que callen las sonajas y la mano queda plana sobre el parche.", "en": "Stroke and immediate damping: the tambourine is turned horizontal so the jingles stop, and the striking hand stays flat on the head."},
      {"sig": "Técnica por texto", "sigEn": "Technique in words", "es": "Se puede pedir: con los dedos, con los nudillos, sobre la rodilla, con baquetas, o sólo sacudida (sin parche). Cada indicación cambia la proporción entre parche y sonajas.", "en": "You may ask for: with fingers, with knuckles, on the knee, with sticks, or shaken only (no head). Each changes the balance between head and jingles."}
    ],
    toca: [
      {"sig": "Aro y sonajas", "sigEn": "Frame and jingles", "es": "Aro de 5–7 cm de profundidad con parche de 25–35 cm (piel o plástico; lo habitual en orquesta, unas 10″) y de 4 a 20 pares de sonajas de unos 5 cm. El sonido es el ataque del parche más el tintineo de las sonajas.", "en": "A 5–7 cm deep frame with a 25–35 cm head (skin or plastic; about 10″ is standard in orchestra) and 4 to 20 pairs of jingles of about 5 cm. The sound is the head’s attack plus the jingles’ rattle."},
      {"sig": "Golpes simples", "sigEn": "Single strokes", "es": "Normalmente con el dedo medio apoyado en el pulgar, los nudillos o la palma. Para el fuerte, el parche contra el codo o la rodilla; para el suave, las yemas en el borde del parche.", "en": "Normally with the middle finger backed by the thumb, the knuckles or the palm. For loud strokes, the head against an elbow or knee; for soft ones, the fingertips at the edge of the head."},
      {"sig": "Pasajes rápidos", "sigEn": "Fast passages", "es": "Suaves: apoyada en las rodillas (o en una mesa acolchada) y tocada con las yemas de ambas manos alternadas. Fuertes: se mueve rápidamente entre la rodilla y la mano.", "en": "Soft: resting on the knees (or a padded table) and played with the fingertips of both hands alternately. Loud: moved rapidly between knee and hand."},
      {"sig": "Thumb roll", "es": "El pulgar humedecido sube por el parche cerca del borde y, por fricción, rebota y hace saltar las sonajas sin interrupción. Se suele aplicar cera de abeja o resina para asegurar el agarre.", "en": "The moistened thumb travels up the head near the rim and, by friction, bounces and keeps the jingles sounding. Beeswax or rosin is often applied to ensure grip."}
    ]
  };
  L.reg.woodblock = { ref: "_Investigacion-instrumentos/percusion/percusion-no-afinada-investigacion.md · fuentes-percusion-no-afinada-notacion.md",
    escribe: [
      {"sig": "Línea · dos bloques", "sigEn": "Line · two blocks", "es": "Un woodblock se escribe en una línea. Si se piden dos (agudo y grave), se usa un pentagrama de dos líneas: arriba el agudo, abajo el grave.", "en": "A single woodblock is written on one line. If two are required (high and low), a two-line staff is used: high above, low below."},
      {"sig": "Nombres", "sigEn": "Names", "es": "Bloc de bois o tambour de bois (fr.), Holzblock o Holzblocktrommel (al.), cassa di legno (it.). No confundir con los temple blocks, un juego de cuatro o más bloques de alturas distintas.", "en": "Bloc de bois or tambour de bois (Fr.), Holzblock or Holzblocktrommel (Ger.), cassa di legno (It.). Not to be confused with temple blocks, a set of four or more blocks of different pitches."},
      {"sig": "Implemento por texto", "sigEn": "Implement in words", "es": "Con baqueta de madera da un chasquido seco; con una maza redonda, blanda o dura, un golpe más grave y lleno. Si el color importa, escríbelo.", "en": "A wooden stick gives a sharp crack; a rounder mallet, soft or hard, gives a deeper, fuller knock. If the colour matters, write it."}
    ],
    toca: [
      {"sig": "Construcción", "sigEn": "Construction", "es": "Bloque de madera dura (teca u otra), rectangular o cilíndrico, con una o dos cavidades longitudinales abiertas por una ranura. La cavidad da el tono del bloque; las paredes, el clic.", "en": "A hardwood block (teak or similar), rectangular or cylindrical, with one or two longitudinal cavities opened by a slit. The cavity gives the block its tone; the walls give the click."},
      {"sig": "Punto de golpe", "sigEn": "Striking spot", "es": "La mejor zona está cerca del centro, directamente sobre la ranura. Hacia el extremo se pierde el tono de cavidad y queda casi sólo el clic.", "en": "The best spot is near the centre, directly above the slit. Toward the end the cavity tone fades and almost only the click remains."},
      {"sig": "Mazas", "sigEn": "Mallets", "es": "Los bloques pequeños piden mazas más duras para sonar brillantes; para bloques grandes sirve una maza sintética media. Las mazas de plástico duro se evitan.", "en": "Small blocks need harder mallets to sound bright; a medium synthetic mallet suits large blocks. Hard plastic mallets are avoided."},
      {"sig": "Mano o mesa", "sigEn": "Hand or table", "es": "Puede sostenerse en la mano o apoyarse en una mesa acolchada; para pasajes rápidos a dos baquetas, sobre la mesa.", "en": "It can be held in the hand or placed on a padded table; for fast two-mallet passages, on the table."},
      {"sig": "ff es más agudo", "sigEn": "ff is brighter", "es": "Al golpear más fuerte el contacto de la baqueta se acorta y el clic de las paredes crece más que el tono de cavidad: el woodblock en fortissimo no suena tanto más fuerte como más agudo, y por eso corta un tutti.", "en": "Striking harder shortens the stick contact and the wall click grows more than the cavity tone: in fortissimo the woodblock sounds less louder than brighter, which is why it cuts through a tutti."}
    ]
  };
  L.reg.congas = { ref: "_Investigacion-instrumentos/percusion/percusion-latina-investigacion.md",
    escribe: [
      {"sig": "Pentagrama con leyenda", "sigEn": "Staff with legend", "es": "No hay una norma única: la parte se escribe en pentagrama de percusión (clave neutra) con una línea o un espacio por tambor —quinto, conga, tumba— y una leyenda al comienzo. Cada arreglista asigna posiciones y cabezas de nota a su manera, por eso la leyenda es imprescindible.", "en": "There is no single standard: the part is written on a percussion staff (neutral clef) with one line or space per drum — quinto, conga, tumba — and a legend at the start. Each arranger assigns positions and noteheads differently, so the legend is essential."},
      {"sig": "O · S · B · H · T · R/L", "es": "Los métodos marcan el golpe con letras bajo la nota: O tono abierto, S slap, B bajo (palma), H talón (heel), T punta de los dedos (tip/toe), y R/L para la mano. Las letras exactas cambian de un método a otro.", "en": "Methods mark the stroke with letters under the note: O open tone, S slap, B bass (palm), H heel, T fingertips (tip/toe), plus R/L for the hand. The exact letters vary from method to method."},
      {"sig": "Cabezas de nota", "sigEn": "Noteheads", "es": "Algunos autores escriben el tono abierto con cabeza normal y el slap con cabeza triangular; otros usan la x para el slap. La convención varía según el autor: no la des por sabida.", "en": "Some authors write the open tone with a normal notehead and the slap with a triangle notehead; others use an x for the slap. The convention varies by author: do not take it for granted."},
      {"sig": "Tumbao", "es": "Es el patrón básico de son montuno y salsa. Sus golpes principales son tonos abiertos en las dos últimas corcheas del ciclo (4 y 4+ en 4/4; «2+ y 2a» en 2/2).", "en": "The basic son montuno and salsa pattern. Its main strokes are open tones on the last two eighths of the cycle (4 and 4& in 4/4; ‘2& and 2a’ in cut time)."},
      {"sig": "2-3 / 3-2", "es": "El orden de los compases del tumbao sigue el de la clave, de modo que la parte debe indicar en qué sentido de clave está escrita.", "en": "The order of the tumbao bars follows the clave, so the part must state which clave direction it is written in."}
    ],
    toca: [
      {"sig": "Quinto · conga · tumba", "es": "De agudo a grave: requinto (menos de 25 cm), quinto (unos 28 cm, 11\"), conga o tres dos (11½–12\"), tumba o salidor (12–12½\") y supertumba (hasta 14\"). En la rumba guaguancó, salidor y tres dos sostienen la base y el quinto improvisa.", "en": "From high to low: requinto (under 25 cm), quinto (about 28 cm, 11\"), conga or tres dos (11½–12\"), tumba or salidor (12–12½\") and supertumba (up to 14\"). In rumba guaguancó the salidor and tres dos hold the groove and the quinto improvises."},
      {"sig": "Golpes básicos", "sigEn": "Basic strokes", "es": "Tono abierto: los dedos golpean cerca del borde y rebotan, y el parche suena libre. Bajo: la palma en el centro. Slap: el golpe seco y brillante, el más difícil. Apagado: los dedos se quedan sobre el parche.", "en": "Open tone: the fingers strike near the rim and bounce off, leaving the head ringing. Bass: the palm in the centre. Slap: the dry, bright stroke, the hardest one. Muted: the fingers stay on the head."},
      {"sig": "Talón-punta (heel-toe)", "sigEn": "Heel-toe", "es": "Es un balanceo de la mano (normalmente la izquierda en un músico diestro) entre el talón y las puntas de los dedos. Da golpes suaves de relleno entre los golpes principales.", "en": "A rocking motion of the hand (usually the left in a right-handed player) between heel and fingertips. It gives soft filler strokes between the main ones."},
      {"sig": "Afinación", "sigEn": "Tuning", "es": "Las llaves de tensión se generalizaron desde comienzos de los años 50 (Patato Valdés, Cándido Camero); antes se tensaba con clavos, cuerdas o calor. Las alturas recomendadas varían según el autor: D'Alicandro pone el quinto una 4ª justa sobre la conga y la tumba una 3ª menor debajo.", "en": "Tension lugs became standard from the early 1950s (Patato Valdés, Cándido Camero); earlier heads were tightened with tacks, ropes or heat. Recommended pitches vary by author: D'Alicandro tunes the quinto a perfect 4th above the conga and the tumba a minor 3rd below it."},
      {"sig": "Deslizado", "sigEn": "Glissando (deslizado)", "es": "Además de los golpes básicos existen el glissando (deslizado) y la subida de altura presionando el parche, incluso con el codo.", "en": "Beyond the basic strokes there are the glissando (deslizado) and raising the pitch by pressing on the head, even with the elbow."}
    ]
  };
  L.reg.bongos = { ref: "_Investigacion-instrumentos/percusion/percusion-latina-investigacion.md",
    escribe: [
      {"sig": "Macho / hembra", "es": "Son dos alturas relativas: macho (agudo) y hembra (grave). Se escriben en dos posiciones del pentagrama de percusión con una leyenda; la disposición exacta varía según el arreglista.", "en": "Two relative pitches: macho (high) and hembra (low). They are written in two positions on the percussion staff with a legend; the exact layout varies by arranger."},
      {"sig": "T · TH · O", "es": "En una de las leyendas publicadas, T significa las yemas, TH el pulgar (lado de la mano izquierda) y O el tono abierto. Otras leyendas usan letras distintas.", "en": "In one published key, T means fingertips, TH the thumb (side of the left hand) and O open tone. Other keys use different letters."},
      {"sig": "Martillo", "es": "Es el patrón básico del bongó: ocho golpes continuos por compás. La distribución exacta de los tonos abiertos y de los golpes de pulgar y yemas varía según el autor.", "en": "The bongo’s basic pattern: eight continuous strokes per bar. The exact placement of open tones and thumb or fingertip strokes varies by author."},
      {"sig": "Campana", "sigEn": "Bell (campana)", "es": "En el montuno el bongosero deja el bongó y toca la campana de mano. Ese cambio se marca en la parte con el tiempo suficiente para tomar el instrumento.", "en": "In the montuno the bongo player leaves the bongos for the hand bell. The switch is marked in the part, with enough time to pick up the instrument."},
      {"sig": "Con baquetas", "sigEn": "With sticks", "es": "En la música de concierto los bongós a veces se tocan con baquetas, y eso debe especificarse. Aparecen, por ejemplo, en la Cuban Overture de Gershwin (1932) y en Ionisation de Varèse (1929–31).", "en": "In concert music bongos are sometimes played with sticks, and this must be specified. They appear, for instance, in Gershwin’s Cuban Overture (1932) and Varèse’s Ionisation (1929–31)."}
    ],
    toca: [
      {"sig": "Medidas y posición", "sigEn": "Sizes and position", "es": "Son dos tambores unidos por un puente: el macho mide unos 20 cm (8\") y la hembra unos 25 cm (10\"). El músico sentado los sostiene entre las rodillas, con el macho a la izquierda si es diestro.", "en": "Two drums joined by a bridge: macho about 20 cm (8\"), hembra about 25 cm (10\"). The seated player holds them between the knees, with the macho on the left for a right-handed player."},
      {"sig": "Borde y dedos", "sigEn": "Edge and fingers", "es": "Se toca sobre todo en el borde del parche, con los dedos y la palma. Suena bastante más agudo que las congas.", "en": "Played mainly at the edge of the head, with fingers and palm. It sounds considerably higher than the congas."},
      {"sig": "Bramido", "es": "Es el glissando del bongó: se frota el parche con el dedo medio apoyado en el pulgar. El dedo suele humedecerse, o se usa cera de abeja.", "en": "The bongo glissando: the middle finger, supported by the thumb, is rubbed across the head. The finger is usually moistened, or beeswax is used."},
      {"sig": "Afinación", "sigEn": "Tuning", "es": "Los parches antiguos iban clavados y se tensaban calentándolos con una llama; hoy se usan llaves de tensión. El intervalo entre los dos tambores no está normalizado: lo decide el músico.", "en": "Old heads were tacked and tightened by heating them over a flame; today tension lugs are used. The interval between the two drums is not standardised: the player decides it."},
      {"sig": "Changüí, son, salsa", "es": "Nació en el oriente de Cuba a fines del siglo XIX. En el changüí marca contratiempos y el cuarto tiempo mientras improvisa; en el son y la salsa lleva el martillo y aporta adornos y contrapunto.", "en": "Born in eastern Cuba in the late 19th century. In changüí it marks offbeats and beat four while improvising; in son and salsa it plays the martillo and adds flourishes and counterpoint."}
    ]
  };
  L.reg.timbales = { ref: "_Investigacion-instrumentos/percusion/percusion-latina-investigacion.md",
    escribe: [
      {"sig": "Pentagrama con leyenda", "sigEn": "Staff with legend", "es": "Una parte de timbal reúne varios sonidos: hembra abierta (con baqueta o con la mano), hembra apagada, macho abierto, rim shot del macho, cáscara de cada tambor y las campanas (mambo y cha-cha, cada una en cuello y boca). Se escribe en un pentagrama de percusión con leyenda.", "en": "A timbales part combines several sounds: open hembra (stick or hand), muffled hembra, open macho, macho rim shot, cáscara on each drum and the bells (mambo and cha-cha, each on neck and mouth). It is written on a percussion staff with a legend."},
      {"sig": "cáscara / paila", "es": "Indica tocar en el casco metálico en lugar del parche. «Cáscara» nombra a la vez el casco y el patrón que se toca en él.", "en": "Play on the metal shell instead of the head. ‘Cáscara’ names both the shell and the pattern played on it."},
      {"sig": "Baqueteo", "es": "Es la parte de timbal del danzón. En su notación habitual, la cabeza de nota tachada indica un golpe apagado y la cabeza normal un golpe abierto.", "en": "The timbales part of the danzón. In its usual notation a slashed notehead means a muffled stroke and a normal notehead an open one."},
      {"sig": "Abanico", "es": "Es un redoble rematado con rim shot que anuncia una sección nueva. Puede escribirse con la palabra o como redoble.", "en": "A roll capped with a rim shot that announces a new section. It can be written as the word or as a roll."},
      {"sig": "Rim shot", "es": "Se escribe en el macho, donde puntúa las secciones.", "en": "Written on the macho, where it punctuates sections."}
    ],
    toca: [
      {"sig": "Construcción", "sigEn": "Construction", "es": "Son dos tambores de casco metálico, poco profundos y abiertos por abajo, con un solo parche. El parche original era de piel; hoy es de plástico, por durabilidad y volumen. El diámetro medio es de 33 cm (13\") el macho y 35 cm (14\") la hembra; los timbalitos miden 15, 20 o 25 cm.", "en": "Two shallow, metal-shelled drums open at the bottom, with a single head. The head was originally calfskin and is now plastic, for durability and volume. Average diameters are 33 cm (13\") for the macho and 35 cm (14\") for the hembra; timbalitos measure 15, 20 or 25 cm."},
      {"sig": "Baquetas", "sigEn": "Sticks", "es": "Son palos rectos, más delgados que una baqueta de batería, de grosor uniforme y sin cabeza. La mano libre también toca y apaga el parche.", "en": "Straight sticks, thinner than drumsticks, of uniform thickness and with no tip. The free hand also plays and mutes the head."},
      {"sig": "Cáscara y campana", "sigEn": "Cáscara and bell", "es": "En algunas secciones el timbalero lleva el tiempo en los cascos (cáscara) y en otras en las campanas o el platillo. Ulpiano Díaz fue el primero en añadir el cencerro, en los años 30.", "en": "In some sections the timbalero keeps time on the shells (cáscara) and in others on the bells or cymbal. Ulpiano Díaz was the first to add the cowbell, in the 1930s."},
      {"sig": "Danzón → salsa", "es": "El instrumento deriva de los timbales de orquesta que llegaron a Cuba en el siglo XIX y fueron sustituidos por pailas. Participa en la charanga y el danzón (baqueteo), en el mambo (campanas montadas, años 40), en la salsa y en el songo, este último con montajes de 7 u 8 tambores.", "en": "Derived from orchestral timpani that reached Cuba in the 19th century and were replaced by pailas. It plays in charanga and danzón (baqueteo), mambo (mounted bells, 1940s), salsa and songo, the latter with setups of 7 or 8 drums."}
    ]
  };
  L.reg.claves = { ref: "_Investigacion-instrumentos/percusion/percusion-latina-investigacion.md",
    escribe: [
      {"sig": "Pentagrama de una línea", "sigEn": "One-line staff", "es": "Como instrumento único se escribe en una sola línea con clave neutra de percusión.", "en": "As a single instrument it is written on a one-line staff with the neutral percussion clef."},
      {"sig": "Clave de son / de rumba", "sigEn": "Son / rumba clave", "es": "Conviene indicar cuál de las dos se toca. Se diferencian en un solo golpe: en el lado de tres, la clave de son golpea en 1, 2+ y 4, y la de rumba en 1, 2+ y 4+ (contado en 4/4).", "en": "State which of the two is played. They differ by one stroke: on the three-side, son clave strikes on 1, 2& and 4, and rumba clave on 1, 2& and 4& (counted in 4/4)."},
      {"sig": "3-2 / 2-3", "es": "El primer número indica el lado de la clave con el que empieza la frase. Es una terminología surgida en Nueva York en los años 40, y muchos músicos cubanos no la usan.", "en": "The first number shows which side of the clave the phrase starts on. The terminology arose in 1940s New York, and many Cuban musicians do not use it."},
      {"sig": "4/4 o 2/2", "es": "En la práctica cubana actual la clave cabe en un compás de 4/4; en las partituras norteamericanas de salsa y latin jazz suele escribirse en dos compases de 2/2.", "en": "Current Cuban practice fits the clave into one 4/4 bar; North American salsa and Latin jazz charts usually write it over two bars of 2/2."},
      {"sig": "6/8", "es": "El patrón de campana de 6/8 (bembé), de siete golpes, a veces se llama «clave», pero es otro patrón.", "en": "The seven-stroke 6/8 bell pattern (bembé) is sometimes called ‘clave’, but it is a different pattern."}
    ],
    toca: [
      {"sig": "Macho y hembra", "sigEn": "Macho and hembra", "es": "La hembra reposa en la mano no dominante, sostenida sin apretar con el pulgar y las yemas y con la palma hacia arriba; la mano ahuecada sirve de resonador. El macho se empuña como una baqueta y golpea la hembra en el centro.", "en": "The hembra rests loosely in the non-dominant hand, held by thumb and fingertips with the palm up; the cupped hand acts as a resonator. The macho is gripped like a drumstick and strikes the hembra in the middle."},
      {"sig": "Madera", "sigEn": "Wood", "es": "Son dos palos de 20–25 cm de largo y unos 2,5 cm de diámetro, de palisandro, ébano, granadilla o materiales sintéticos. La madera dura da un sonido claro y cortante; la blanda, uno más apagado.", "en": "Two sticks 20–25 cm long and about 2.5 cm across, made of rosewood, ebony, grenadilla or synthetics. Hard wood sounds clear and cutting; softer wood more muted."},
      {"sig": "Patrón guía", "sigEn": "Guide pattern", "es": "Repite la clave como ostinato durante toda la pieza, y el resto del conjunto se ordena respecto de ella. Es central en el son y en el guaguancó.", "en": "Plays the clave as an ostinato throughout the piece, and the rest of the ensemble is organised around it. Central to son and guaguancó."},
      {"sig": "Ocupa las dos manos", "sigEn": "Both hands busy", "es": "Por eso no se puede combinar con otro instrumento en el mismo pasaje. Aparece en la música de concierto: Gershwin (Cuban Overture), Varèse (Ionisation), Reich.", "en": "Both hands are needed, so it cannot be combined with another instrument in the same passage. Used in concert music: Gershwin (Cuban Overture), Varèse (Ionisation), Reich."}
    ]
  };
  L.reg.cowbell = { ref: "_Investigacion-instrumentos/percusion/percusion-latina-investigacion.md",
    escribe: [
      {"sig": "o / +", "es": "En una leyenda publicada, «o» es el sonido grave y abierto de la boca de la campana y «+» el sonido agudo del cuello. En otros contextos el «+» significa apagado, así que la convención varía y necesita leyenda.", "en": "In one published key, ‘o’ is the low open sound on the mouth of the bell and ‘+’ the high sound on the neck. Elsewhere ‘+’ means muted, so the convention varies and needs a legend."},
      {"sig": "Campana · mambo bell · cha-cha bell", "es": "Hay que precisar cuál se pide: la campana de mano del bongosero o las campanas montadas en el timbal (mambo y cha-cha). Cada una tiene sonido de cuello y de boca.", "en": "Specify which one: the bongo player’s hand bell or the bells mounted on the timbales (mambo and cha-cha). Each has a neck and a mouth sound."},
      {"sig": "Cambio bongó → campana", "sigEn": "Bongo → bell switch", "es": "El bongosero toca la campana en el montuno. La parte debe marcar el cambio de instrumento y dejar tiempo para hacerlo.", "en": "The bongo player switches to the bell in the montuno. The part must mark the change and leave time for it."},
      {"sig": "Implemento", "sigEn": "Beater", "es": "Se toca con baqueta. En la música de concierto conviene precisar cuál; Varèse incluye el cencerro en Ionisation.", "en": "Played with a stick. In concert music the stick should be specified; Varèse includes cowbell in Ionisation."}
    ],
    toca: [
      {"sig": "Sin badajo", "sigEn": "Clapperless", "es": "Es una campana sin badajo golpeada con un palo. El sonido cambia según la parte de la campana que se golpea y según cuánto la apaga la mano que la sostiene.", "en": "A clapperless bell struck with a stick. The sound changes with the part of the bell that is struck and with how much the holding hand damps it."},
      {"sig": "Boca y cuello", "sigEn": "Mouth and neck", "es": "La boca da el sonido grave y abierto; el cuello, el agudo. El patrón de campana alterna ambos sonidos.", "en": "The mouth gives the low, open sound; the neck, the high one. The bell pattern alternates the two."},
      {"sig": "Historia", "sigEn": "History", "es": "Arsenio Rodríguez hizo que el bongosero doblara en cencerro. En el songo de los años 70, Changuito combinó a la vez el timbal y la campana de bongó.", "en": "Arsenio Rodríguez had the bongo player double on cowbell. In 1970s songo, Changuito played timbales and bongo bell simultaneously."}
    ]
  };
  L.reg.maracas = { ref: "_Investigacion-instrumentos/percusion/percusion-latina-investigacion.md",
    escribe: [
      {"sig": "Una línea", "sigEn": "One line", "es": "Se escribe en una sola línea con clave neutra.", "en": "Written on a single line with neutral clef."},
      {"sig": "Trémolo (redoble)", "sigEn": "Tremolo (roll)", "es": "El redoble puede hacerse sacudiendo hacia adelante y atrás o con un movimiento giratorio (swirl). Si importa cuál, hay que indicarlo.", "en": "A roll can be shaken back and forth or swirled. If the choice matters, say so."},
      {"sig": "Staccato", "es": "Un golpe corto y controlado produce un ataque seco y aislado, en lugar del ruido continuo de la sacudida.", "en": "A short, controlled shake gives a dry, separate attack instead of continuous shaking noise."},
      {"sig": "Tomar y dejar", "sigEn": "Pick up / put down", "es": "Las maracas suenan al levantarlas o dejarlas, así que la parte debe dar tiempo para manipularlas en silencio. Tampoco se combinan con instrumentos que ocupan las dos manos, como los platillos de choque.", "en": "Maracas sound when picked up or put down, so the part must allow time to handle them silently. They cannot be combined with two-handed instruments such as clash cymbals."}
    ],
    toca: [
      {"sig": "Construcción", "sigEn": "Construction", "es": "Un recipiente hueco (totumo o calabaza, cuero, madera o plástico) contiene semillas o piedras pequeñas y va montado en un mango. Las de plástico suenan más brillantes y fuertes que las de madera.", "en": "A hollow vessel (gourd, rawhide, wood or plastic) holds seeds or pebbles and is mounted on a handle. Plastic ones sound brighter and louder than wooden ones."},
      {"sig": "Lanzar las semillas", "sigEn": "Throwing the seeds", "es": "Se toca un par, una en cada mano. El sonido se produce cuando el relleno golpea la pared: el brazo lanza las semillas hacia adelante y hacia atrás, y en los pasajes rápidos ayuda un ligero ángulo hacia abajo.", "en": "Played as a pair, one in each hand. The sound comes when the filling hits the wall: the arm throws the seeds forward and back, and a slight downward angle helps in fast passages."},
      {"sig": "Dos alturas", "sigEn": "Two pitches", "es": "Las dos maracas del par suenan distinto (macho y hembra). Los maraqueros llaneros llevan dos o más pares para elegir la sonoridad: más aguda o más grave, más nítida o más suave.", "en": "The two maracas of a pair sound different (macho and hembra). Llanero maraqueros carry two or more pairs to choose the sonority: higher or lower, crisper or softer."},
      {"sig": "Son, salsa, joropo", "es": "Se usan en el son, la guaracha, el danzón y la salsa; en la bomba puertorriqueña se toca una sola. En el joropo colombo-venezolano tienen un papel protagonista, con solos.", "en": "Used in son, guaracha, danzón and salsa; Puerto Rican bomba uses a single one. In Colombian-Venezuelan joropo they take a leading role, with solos."}
    ]
  };
  L.reg.cajon = { ref: "_Investigacion-instrumentos/percusion/percusion-latina-investigacion.md",
    escribe: [
      {"sig": "Sin norma fija", "sigEn": "No fixed standard", "es": "No existe una convención estándar para el cajón: los métodos marcan el golpe (grave, agudo, slap) y la mano (R/L) con una leyenda propia, que la parte debe incluir.", "en": "There is no standard convention for the cajón: methods mark the stroke (bass, tone, slap) and the hand (R/L) with their own legend, which the part must include."},
      {"sig": "Festejo · landó · marinera", "es": "El festejo se escribe por lo general en 6/8; el landó y la marinera, con su juego entre 6/8 y 3/4, se escriben de distinta manera según el autor.", "en": "Festejo is usually written in 6/8; landó and marinera, with their interplay of 6/8 and 3/4, are written differently from author to author.", "sigEn": "Festejo · landó · marinera"},
      {"sig": "Peruano / flamenco", "sigEn": "Peruvian / flamenco", "es": "Hay que especificar cuál se pide: el cajón peruano clásico no tiene cuerdas ni bordones, mientras que el flamenco suele llevarlos.", "en": "Specify which: the classic Peruvian cajón has no strings or snares, whereas the flamenco one usually does."}
    ],
    toca: [
      {"sig": "La caja", "sigEn": "The box", "es": "Cinco caras son de madera de 13–19 mm y la sexta, la tapa, es de contrachapado más delgado; la boca está detrás. El músico se sienta encima y golpea la tapa con las manos.", "en": "Five sides are 13–19 mm wood and the sixth, the tapa, is thinner plywood; the sound hole is at the back. The player sits on it and strikes the tapa with the hands."},
      {"sig": "Grave", "sigEn": "Bass", "es": "Se toca con la mano plana, la muñeca a la altura del borde superior, dejando caer el peso del brazo. La mano rebota enseguida para no apagar el sonido.", "en": "Played with a flat hand, the wrist level with the top edge, letting the arm’s weight fall. The hand bounces off at once so as not to choke the sound."},
      {"sig": "Agudo / slap", "sigEn": "Tone / slap", "es": "Se toca en la parte alta de la tapa con la palma y los dedos a la vez, desde la muñeca; con solo las yemas da un agudo más suave. Se usa sobre todo el tercio superior de la tapa.", "en": "Played on the top of the tapa with palm and fingers together, from the wrist; fingertips alone give a softer high tone. Mainly the top third of the tapa is used."},
      {"sig": "Festejo, landó, criollo", "es": "Es el instrumento afroperuano más usado desde fines del siglo XIX: acompaña el festejo, el landó (más lento que el festejo), la zamacueca, la marinera y el vals criollo. Fue declarado Patrimonio Cultural de la Nación el 2 de agosto de 2001.", "en": "The most widely used Afro-Peruvian instrument since the late 19th century: it accompanies festejo, landó (slower than festejo), zamacueca, marinera and vals criollo. It was declared National Cultural Heritage on 2 August 2001."},
      {"sig": "Al flamenco", "sigEn": "Into flamenco", "es": "Paco de Lucía lo llevó a España después de una visita a Lima en 1977, donde conoció al cajonero Caitro Soto.", "en": "Paco de Lucía took it to Spain after a 1977 visit to Lima, where he met cajonero Caitro Soto."}
    ]
  };
  L.reg.snare_off = L.reg.snare;
})(window.MM_TECH);
// ═══════════════════════════════════════════════════════════════════════════════════════════
// CUERDAS EN SECCIÓN, PIZZICATO, BAJO ELÉCTRICO Y RHODES (2026-10-01, misma tanda que la percusión).
// strings sirve también a full_strings; pizzicato a strings_pizzicato. Fuentes en los ref.
// ═══════════════════════════════════════════════════════════════════════════════════════════
(function(L){
  L.reg.strings = { ref: "_Investigacion-instrumentos/cuerdas/cuerdas-articulacion-expresion-investigacion.md · cuerdas/fuentes-cuerdas-seccion.md",
    escribe: [
      {"sig": "div. · a 3 · metà · unis.", "es": "«div.» divide la fila en subgrupos; con varias notas en un solo pentagrama y sin indicación, la fila las toca divididas: el músico de afuera de cada atril toma la nota aguda y el de adentro la grave. «div. a 3», «a 4» o «por atril» (al. Pult) precisan el reparto; «metà» o «die eine Hälfte» piden la mitad. Se vuelve con «unis.» o «tutti» (al. geteilt / zus.); si la división alterna seguido, basta marcar la primera vez y «sim.».", "en": "“div.” splits the section into sub-groups; several notes on one staff with no marking are played divisi by default: the outside player of each desk takes the upper note, the inside player the lower. “div. a 3”, “a 4” or “by desk” (Ger. Pult) specify the split; “metà” or “die eine Hälfte” asks for half. It is cancelled by “unis.” or “tutti” (Ger. geteilt / zus.); if the split alternates often, mark the first instance and then “sim.”."},
      {"sig": "⊓ · V · ligadura = arcada", "sigEn": "⊓ · V · slur = bowing", "es": "⊓ es arco abajo (del talón a la punta) y V arco arriba (de la punta al talón); no hace falta escribirlos salvo que se quiera un patrón concreto. La ligadura es arcada: todas las notas bajo ella van en un mismo arco, y las notas sueltas cambian de arco en cada una (détaché). En una nota larga, ⊓ y V juntos, o el cambio de arco entre paréntesis, piden que cada músico cambie en otro momento para que la fila no corte el sonido.", "en": "⊓ is down-bow (frog to tip) and V up-bow (tip to frog); they need not be written unless a specific pattern is wanted. A slur is a bowing: every note under it is taken in one bow, and unslurred notes change bow on each note (détaché). On a long note, ⊓ and V side by side, or the bow change in parentheses, ask each player to change at a different moment so the section does not break the sound."},
      {"sig": "con sord. · senza sord.", "es": "«con sord.» pide la sordina sobre el puente y «senza sord.» quitarla; la segunda sólo se escribe si antes hubo un pasaje con sordina. Hay que dejar unos compases de silencio para ponerla o sacarla. Existen dos tipos: la de madera, que se coloca sobre el puente, y la de goma deslizante, fija en las cuerdas.", "en": "“con sord.” asks for the mute on the bridge and “senza sord.” for its removal; the latter is written only after a muted passage. Allow a few bars of rest to put it on or take it off. There are two types: the wooden mute, placed on the bridge, and the sliding rubber mute, permanently fitted to the strings."},
      {"sig": "sul pont. · sul tasto · ord.", "es": "«sul ponticello» pide el arco junto al puente; «sul tasto» (o «flautando») sobre el diapasón. Ambos rigen hasta que se escribe «ord.» o «normale». «col legno battuto» (golpear con la madera) y «col legno tratto» (frotar con la madera) se distinguen siempre por escrito.", "en": "“sul ponticello” asks for the bow next to the bridge; “sul tasto” (or “flautando”) over the fingerboard. Both stay in force until “ord.” or “normale” is written. “col legno battuto” (striking with the wood) and “col legno tratto” (drawing with the wood) are always specified in words."},
      {"sig": "trem. · trémolo medido · trémolo digitado", "sigEn": "trem. · measured tremolo · fingered tremolo", "es": "El trémolo de arco no medido es un vaivén muy rápido, con barras en la plica y a menudo la palabra «trem.»; el medido subdivide el pulso exactamente según el número de barras. El trémolo digitado alterna dos notas con los dedos, como un trino de intervalo mayor: se escriben ambas notas unidas por las barras.", "en": "Unmeasured bowed tremolo is a very rapid back-and-forth, with strokes on the stem and often the word “trem.”; measured tremolo subdivides the beat exactly by the number of strokes. Fingered tremolo alternates two notes with the fingers, like a trill on a wider interval: both notes are written joined by the strokes."},
      {"sig": "Armónicos: ○ y ◇", "sigEn": "Harmonics: ○ and ◇", "es": "El armónico natural se indica con un círculo pequeño sobre la nota real, o con una cabeza en rombo donde se apoya el dedo. El artificial se pisa una nota normal y se roza con el meñique la cuarta (o la quinta) superior, escrita en rombo; la nota real suele añadirse pequeña entre paréntesis. En cello los naturales son más fuertes y seguros que en violín o viola.", "en": "A natural harmonic is shown by a small circle over the sounding note, or by a diamond notehead where the finger touches. For an artificial harmonic a note is stopped normally and the little finger lightly touches the fourth (or fifth) above, written as a diamond; the sounding pitch is often added small in brackets. On cello natural harmonics are stronger and more reliable than on violin or viola."}
    ],
    toca: [
      {"sig": "détaché · martelé · spiccato", "es": "détaché: notas separadas, un arco por nota, en la cuerda. martelé: «martillado», arranca con mucha presión que se suelta de inmediato, y da un acento neto. spiccato: el arco rebota y sale de la cuerda; varias notas rebotadas en un solo arco abajo se llaman saltando, en un solo arco arriba volante.", "en": "détaché: separate notes, one bow per note, on the string. martelé: “hammered”, it starts with strong pressure released at once, giving a clean accent. spiccato: the bow bounces off the string; several bounced notes in one down-bow are called saltando, in one up-bow volante."},
      {"sig": "Talón y punta", "sigEn": "Frog and tip", "es": "El arco pesa más en el talón y menos en la punta: el arco abajo tiende a empezar fuerte y aflojar, el arco arriba a crecer. El intérprete lo compensa aliviando con el meñique cerca del talón y apretando con el índice cerca de la punta.", "en": "The bow is heavier at the frog and lighter at the tip: a down-bow tends to start strong and relax, an up-bow to grow. The player compensates by easing with the little finger near the frog and pressing with the index finger near the tip."},
      {"sig": "Ponticello · tasto · col legno", "es": "sul tasto: el arco sobre el diapasón (a unos 55 mm del puente en violín), fuerza liviana, sonido oscuro y aflautado. sul ponticello: sonido vidrioso que casi borra la altura; el brillo viene sobre todo de la mayor fuerza que exige tocar tan cerca del puente. col legno: la madera da un clic de altura poco definida, sin sostén.", "en": "sul tasto: the bow over the fingerboard (about 55 mm from the bridge on violin), light force, a dark, flute-like sound. sul ponticello: a glassy sound that nearly obliterates pitch; the brightness comes mainly from the higher bow force that playing so close to the bridge requires. col legno: the wood gives a click of indefinite pitch, with no sustain."},
      {"sig": "con sord.", "es": "La sordina agrega masa al puente y atenúa la zona de 2–3 kHz que da el brillo de la cuerda. La sordina orquestal liviana reduce la sonoridad de un violín en torno a un 23 % y conserva algo de grave; las sordinas pesadas de estudio la reducen más de un 70 %.", "en": "The mute adds mass to the bridge and attenuates the 2–3 kHz region that gives strings their brilliance. A light orchestral mute reduces a violin’s loudness by about 23 % and keeps some low-end; heavy practice mutes reduce it by more than 70 %."},
      {"sig": "Empaste y duplicaciones", "sigEn": "Blend and doublings", "es": "Las cuerdas empastan como un coro: un coral a cuatro voces pasa a violín I, violín II, viola y cello, y el contrabajo, que suena una octava más grave de lo escrito, duplica al cello a la octava inferior. Dividir la fila no la debilita necesariamente: en forte sigue firme, sobre todo si los vientos duplican.", "en": "Strings blend like a choir: a four-part chorale goes to violin I, violin II, viola and cello, and the double bass, sounding an octave below written pitch, doubles the cello an octave lower. Dividing the section does not necessarily weaken it: at forte it stays solid, especially when doubled by winds."}
    ]
  };
  L.reg.pizzicato = { ref: "_Investigacion-instrumentos/cuerdas/pizzicato-investigacion.md · cuerdas/fuentes-cuerdas-seccion.md",
    escribe: [
      {"sig": "pizz. · arco", "es": "«pizz.» pide pulsar con el dedo y «arco» volver al arco; cada indicación rige hasta la contraria. Si la nota anterior se toca con arco, el paso a pizz. puede ser casi inmediato; en pasajes largos el músico suele dejar el arco, y conviene prever unos compases de silencio para el cambio.", "en": "“pizz.” asks for plucking and “arco” for the return to the bow; each stays in force until the other. If the preceding note is bowed, the change to pizz. can be almost immediate; in long passages players often put the bow down, and a few bars of rest should be allowed for the change."},
      {"sig": "+ (pizz. de mano izquierda)", "sigEn": "+ (left-hand pizz.)", "es": "Una cruz sobre la nota pide pulsar con un dedo de la mano izquierda. Permite mezclar notas pulsadas con notas de arco sin soltar el arco; la digitación tiene que dejar libre el dedo que pulsa.", "en": "A cross over the note asks for plucking with a left-hand finger. It allows plucked notes to be mixed with bowed ones without putting the bow down; the fingering must leave the plucking finger free."},
      {"sig": "⦽ pizz. Bartók (snap)", "sigEn": "⦽ Bartók (snap) pizz.", "es": "Un círculo con una raya vertical sobre la nota pide levantar la cuerda y soltarla para que choque contra el diapasón con un chasquido. Funciona mejor en fuerte; el nombre viene del uso frecuente que le dio Bartók.", "en": "A circle with a vertical line above the note asks for the string to be pulled up and released so it snaps against the fingerboard. It works best loud; the name comes from Bartók’s frequent use of it."},
      {"sig": "Acordes en pizz.", "sigEn": "Pizz. chords", "es": "Se pueden pulsar intervalos y acordes de tres y cuatro notas. La línea ondulada de arpegio, con flecha, indica la dirección del barrido; para el rasgueo conviene mantener acordes sencillos.", "en": "Intervals and three- and four-note chords can be played pizz. The wavy arpeggio line, with an arrow, shows the direction of the sweep; for strumming, keep the chords simple."},
      {"sig": "sos. · secco (en vez de l.v.)", "sigEn": "sos. · secco (instead of l.v.)", "es": "Para un pizz. de contrabajo especialmente resonante es más claro escribir «sos.» al comienzo que llenar de ligaduras colgadas o «l.v.»; para notas cortas, «secco» o staccato. No se ligan grupos de pizz. para pedir sostén: la ligadura se lee como legato de arco.", "en": "For an especially resonant double-bass pizz. it is clearer to write “sos.” at the start than to fill the part with hanging ties or “l.v.”; for short notes, “secco” or staccato. Groups of pizz. notes are not slurred to ask for sustain: a slur reads as bowed legato."}
    ],
    toca: [
      {"sig": "Ataque y caída", "sigEn": "Attack and decay", "es": "El pizz. arranca casi como un escalón: el ataque no supera unos 4 ms, en cualquier registro. No hay sostén: la nota sólo decae, y los agudos mueren antes que el fundamental. Las notas agudas y las pisadas se apagan antes que las cuerdas graves al aire; un La al aire de cello todavía se oye a los 2 s.", "en": "Pizz. starts almost as a step: the attack is no longer than about 4 ms, in any register. There is no sustain: the note only decays, and the upper partials die before the fundamental. High and stopped notes fade sooner than low open strings; an open cello A is still audible after 2 s."},
      {"sig": "Punto de pulsación", "sigEn": "Plucking point", "es": "Pulsar cerca del puente da un sonido más brillante y seco; sobre el diapasón, más redondo y oscuro. Si se pulsa a 1/m del largo de la cuerda faltan los armónicos múltiplos de m.", "en": "Plucking near the bridge gives a brighter, drier sound; over the fingerboard, rounder and darker. Plucking at 1/m of the string length removes the harmonics that are multiples of m."},
      {"sig": "Mano izquierda y apagado", "sigEn": "Left hand and damping", "es": "Sin trastes, el dedo izquierdo que pisa amortigua la nota más que una cuerda al aire. En las cuerdas graves el pizz. sigue sonando varios segundos: el intérprete decide con qué dedo y cuándo apagarlo.", "en": "With no frets, the stopping left-hand finger damps the note more than an open string does. On the low strings pizz. keeps ringing for several seconds: the player decides which finger damps it and when."},
      {"sig": "Velocidad y registro", "sigEn": "Speed and register", "es": "Las figuraciones muy rápidas tienen en pizz. un límite de velocidad bastante más bajo que con arco, y el pizz. muy agudo se apaga enseguida. Dentro de esos límites todas las dinámicas son posibles, desde acordes fuertes y acentuados hasta notas sueltas.", "en": "Very fast figuration has a much lower speed limit in pizz. than with the bow, and very high pizz. dies away at once. Within those limits every dynamic is possible, from strong accented chords to single notes."},
      {"sig": "Contrabajo en pizz.", "sigEn": "Double-bass pizz.", "es": "El contrabajo, que suena una octava más grave de lo escrito, tiene un pizz. largo y el bajista tiende a sostenerlo cuanto puede. El cello no alcanza ese sostén; aun así, en duplicación a la octava conviene escribir ambas partes igual: la resonancia del bajo ya le da carácter sostenuto al conjunto.", "en": "The double bass, sounding an octave below written pitch, has a long pizz. and bassists tend to sustain it as long as possible. The cello cannot match that sustain; even so, in octave doubling it is best to write both parts the same way: the bass’s resonance already gives the pair a sostenuto character."}
    ]
  };
  L.reg.electric_bass = { ref: "_Investigacion-instrumentos/teclados/bajo-electrico-rhodes-investigacion.md",
    escribe: [
      {"sig": "Clave de fa, suena 8vb", "sigEn": "Bass clef, sounds 8vb", "es": "Se escribe en clave de fa una octava más alta de lo que suena, igual que el contrabajo, para evitar líneas adicionales. Las cuerdas al aire del bajo de cuatro cuerdas suenan Mi1–La1–Re2–Sol2; el de cinco añade un Si0 grave.", "en": "It is written in bass clef an octave higher than it sounds, like the double bass, to avoid ledger lines. The open strings of the four-string bass sound E1–A1–D2–G2; the five-string adds a low B0."},
      {"sig": "Pentagrama + tablatura", "sigEn": "Staff + tablature", "es": "La música para bajo se publica en pentagrama, en tablatura o en ambos sistemas superpuestos. En la tablatura cada línea es una cuerda y cada número un traste; el pentagrama da el ritmo con precisión.", "en": "Bass music is published on the staff, in tablature, or with both systems stacked. In tablature each line is a string and each number a fret; the staff carries the exact rhythm."},
      {"sig": "T / P (slap / pop)", "es": "Sobre la nota, T indica golpe con el pulgar (slap) y P el tirón de la cuerda con índice o medio (pop). Algunos métodos usan S en lugar de T para el slap: la convención varía según el autor, por eso la leyenda es necesaria.", "en": "Above the note, T marks a thumb strike (slap) and P a string pulled by the index or middle finger (pop). Some methods use S instead of T for the slap: the convention varies by author, so a legend is needed."},
      {"sig": "H · PO · sl. · harm.", "es": "La ligadura con H (hammer-on) o PO/P (pull-off) indica que la segunda nota la produce sólo la mano izquierda. Sl. o una línea diagonal marcan el glissando sobre el traste (con o sin nuevo ataque). El armónico natural se toca rozando la cuerda justo sobre el traste indicado.", "en": "A slur with H (hammer-on) or PO/P (pull-off) means the second note is produced by the left hand alone. Sl. or a diagonal line marks a slide along the fret (with or without a new attack). A natural harmonic is played by lightly touching the string directly over the indicated fret."},
      {"sig": "x (nota muerta)", "sigEn": "x (dead note)", "es": "La cabeza en x es una nota apagada: la mano izquierda descansa sobre la cuerda sin pisarla y la derecha la ataca. Da un golpe percusivo sin altura, muy usado entre notas en el funk y en el slap.", "en": "An x notehead is a muted note: the left hand rests on the string without pressing it and the right hand attacks it. It gives a pitchless percussive hit, common between notes in funk and slap playing."},
      {"sig": "Cifrado (walking bass)", "sigEn": "Chord symbols (walking bass)", "es": "En jazz la parte suele darse sólo con cifrado, a veces con barras de ritmo, y el bajista construye la línea. El walking bass camina en negras: fundamental en el tiempo 1, notas del acorde en 1 y 3 y movimiento por grados o notas de aproximación cromáticas hacia el acorde siguiente.", "en": "In jazz the part is often given as chord symbols only, sometimes with rhythm slashes, and the bassist builds the line. Walking bass moves in quarter notes: root on beat 1, chord tones on 1 and 3, and stepwise or chromatic approach notes into the next chord."}
    ],
    toca: [
      {"sig": "Instrumento", "sigEn": "Instrument", "es": "Bajo eléctrico de cuerpo macizo con trastes, en producción desde 1951 (Fender Precision): los trastes permiten afinar con más facilidad que en el contrabajo. Las pastillas magnéticas bajo las cuerdas convierten la vibración en señal eléctrica. El bajo sin trastes (fretless) se comercializa desde 1966.", "en": "Solid-body fretted electric bass, produced since 1951 (Fender Precision): the frets make playing in tune easier than on the double bass. Magnetic pickups under the strings convert the vibration into an electrical signal. The fretless bass has been on the market since 1966."},
      {"sig": "Dedos índice-medio", "sigEn": "Index-middle fingerstyle", "es": "La técnica básica alterna índice y medio de la mano derecha, con el pulgar apoyado en la pastilla o en un apoyo. Tocar sólo con el pulgar da un sonido más concentrado; con púa el ataque gana armónicos agudos.", "en": "The basic technique alternates the right-hand index and middle fingers, with the thumb anchored on the pickup or a thumb rest. Playing with the thumb alone gives a more focused sound; a pick adds upper harmonics to the attack."},
      {"sig": "Punto de pulsación", "sigEn": "Plucking position", "es": "Cerca del puente el sonido es más tenso y rico en armónicos agudos; hacia el mástil predomina la fundamental y el sonido se vuelve redondo. Sobre el diapasón, con el tono cerrado, se acerca al color del contrabajo.", "en": "Near the bridge the sound is tighter and richer in upper harmonics; towards the neck the fundamental dominates and the sound becomes round. Over the fingerboard, with the tone control rolled off, it approaches a double-bass colour."},
      {"sig": "Palm muting", "es": "El canto de la mano derecha apoyado junto al puente acorta la nota: sonido corto y grueso, de caída rápida, característico del bajo eléctrico de los años cincuenta y sesenta.", "en": "The edge of the right hand resting by the bridge shortens the note: a short, fat sound with a fast decay, characteristic of 1950s and 60s electric bass playing."},
      {"sig": "Slap & pop", "es": "Con un giro de muñeca el costado del pulgar golpea una cuerda grave al final del diapasón; el índice engancha una cuerda aguda y la suelta contra los trastes. Las notas muertas y los ligados de la mano izquierda rellenan el ritmo. Es la técnica característica del funk.", "en": "With a twist of the wrist the side of the thumb strikes a low string at the end of the fingerboard; the index finger hooks a high string and lets it snap against the frets. Dead notes and left-hand slurs fill in the rhythm. It is the signature technique of funk."},
      {"sig": "Tumbao (bajo anticipado)", "sigEn": "Tumbao (anticipated bass)", "es": "En el son montuno, la salsa y el latin jazz el bajo ataca en 2+ y en 4 (compás de 4/4), anticipando los tiempos 3 y 1; la última nota suele ligarse por encima del tiempo 1 del compás siguiente, que no se ataca. La figura parte del tresillo y se alinea con la clave.", "en": "In son montuno, salsa and Latin jazz the bass attacks on 2& and 4 (in 4/4), anticipating beats 3 and 1; the last note is usually tied over beat 1 of the next bar, which is not struck. The figure derives from the tresillo and is aligned with the clave."}
    ]
  };
  L.reg.rhodes = { ref: "_Investigacion-instrumentos/teclados/bajo-electrico-rhodes-investigacion.md",
    escribe: [
      {"sig": "Gran pentagrama", "sigEn": "Grand staff", "es": "Se escribe como el piano, en dos pentagramas (sol y fa), en sonidos reales. El modelo de 73 teclas abarca Mi1–Mi7; el de 88 tiene la extensión del piano.", "en": "It is written like the piano, on two staves (treble and bass), at sounding pitch. The 73-key model spans E1–E7; the 88-key model has the piano’s range."},
      {"sig": "Ped.", "es": "Sólo tiene pedal de resonancia: una barra que levanta todos los apagadores a la vez. Se indica con Ped. y asterisco o con línea de pedal, como en el piano. Sin pedal, el apagador corta la nota al soltar la tecla.", "en": "It has only a sustain pedal: a bar that lifts all dampers at once. It is marked with Ped. and asterisk or a pedal line, as on the piano. Without pedal, the damper stops the note when the key is released."},
      {"sig": "Cifrado y barras", "sigEn": "Chord symbols and slashes", "es": "En jazz, soul y pop la parte suele llevar cifrado con barras sin altura: barras simples piden acompañamiento libre en el estilo; barras con plica fijan el ritmo y dejan la disposición al intérprete. Los pasajes con disposición obligada se escriben en notas.", "en": "In jazz, soul and pop the part often carries chord symbols over pitchless slashes: plain slashes ask for free comping in the style; stemmed slashes fix the rhythm and leave the voicing to the player. Passages with a required voicing are written out in notes."},
      {"sig": "p … f = timbre", "es": "En el Rhodes la dinámica cambia el color, no sólo el volumen: en p el ataque es de campana; en f aparece el «bark», un sonido áspero y gruñido. Escribir la dinámica es, en la práctica, elegir el timbre.", "en": "On the Rhodes dynamics change colour, not just volume: in p the attack is bell-like; in f the ‘bark’ appears, a rough, growling sound. Writing the dynamic is, in practice, choosing the timbre."},
      {"sig": "Vibrato (Suitcase)", "sigEn": "Vibrato (Suitcase)", "es": "El «vibrato» del modelo Suitcase no cambia la afinación: hace saltar el sonido entre los dos altavoces con una onda cuadrada (en las versiones mono, era un trémolo de amplitud). Se regula con los mandos Speed e Intensity del panel; si se desea, la parte lo pide con texto.", "en": "The Suitcase model’s ‘vibrato’ does not change pitch: it bounces the sound between the two speakers with a square wave (in mono versions it was an amplitude tremolo). It is set with the Speed and Intensity panel controls; if wanted, the part asks for it in words."}
    ],
    toca: [
      {"sig": "Diapasón: tine + tone bar", "sigEn": "Tuning fork: tine + tone bar", "es": "Cada tecla mueve un martillo que golpea una varilla de acero (tine), unida a una barra mayor (tone bar): juntas funcionan como un diapasón de brazos desiguales. Un resorte enrollado sobre la varilla la afina. Una pastilla electromagnética frente a la punta capta la vibración; sin amplificar, suena muy débil.", "en": "Each key drives a hammer that strikes a steel rod (tine) joined to a larger bar (tone bar): together they act as a tuning fork with unequal prongs. A coiled spring on the tine tunes it. An electromagnetic pickup facing its tip captures the vibration; unamplified, it sounds very faint."},
      {"sig": "Campana", "sigEn": "Bell", "es": "En el ataque aparecen parciales inarmónicos de corta duración que dan el color de campana; luego queda casi sólo la fundamental. Por eso el sonido es dulce y tiene un sostenido largo.", "en": "The attack contains short-lived inharmonic partials that give the bell-like colour; then little more than the fundamental remains. This is why the sound is sweet and has a long sustain."},
      {"sig": "Bark", "es": "Al tocar más fuerte, la varilla se desplaza más dentro del campo magnético de la pastilla y se captan más armónicos: el sonido gruñe. Cuánto «bark» da un instrumento depende del escape del martillo y de la distancia de la pastilla, de modo que la respuesta varía de un piano a otro.", "en": "Playing harder moves the tine further into the pickup’s magnetic field and more harmonics are captured: the sound growls. How much ‘bark’ an instrument gives depends on hammer escapement and pickup distance, so the response varies from one piano to another."},
      {"sig": "Voicing", "es": "El técnico regula cada nota: la distancia varilla-pastilla (entre 1/16\" y 1/8\", 1,6–3,2 mm) fija volumen y respuesta dinámica, y la altura de la punta frente al eje de la pastilla fija el timbre. Centrada sobre el eje, la fundamental y los parciales impares se atenúan y domina el segundo parcial.", "en": "The technician regulates each note: the tine-pickup gap (between 1/16\" and 1/8\", 1.6–3.2 mm) sets volume and dynamic response, and the height of the tip relative to the pickup axis sets the timbre. Centred on the axis, the fundamental and odd partials are attenuated and the second partial dominates."},
      {"sig": "Modelos", "sigEn": "Models", "es": "Hubo dos versiones: Stage (sin amplificador, con pedal y una sola salida) y Suitcase (con amplificador estéreo, altavoces y vibrato). El Mark II (1979) fue un cambio sobre todo estético, con tapa plana para apoyar otro teclado.", "en": "There were two versions: Stage (no amplifier, with pedal and a single output) and Suitcase (with stereo amplifier, speakers and vibrato). The Mark II (1979) was mainly a cosmetic change, with a flat top to hold another keyboard."},
      {"sig": "Función", "sigEn": "Role", "es": "Instrumento central del jazz, el jazz-fusión, el soul y el pop de los años setenta, y muy usado en el rock. Su espectro deja un hueco en la zona de la voz cantada, por eso acompaña a un cantante sin taparlo.", "en": "A central instrument of 1970s jazz, jazz fusion, soul and pop, and widely used in rock. Its spectrum leaves a gap in the sung-voice region, so it accompanies a singer without covering them."}
    ]
  };
  L.reg.full_strings = L.reg.strings;
  L.reg.strings_pizzicato = L.reg.pizzicato;
})(window.MM_TECH);
// ═══════════════════════════════════════════════════════════════════════════════════════════
// SONIDOS DE LA CASA (2026-10-01): fichas escritas desde sus parámetros en mm-presets.js, revisadas con
// Mario. organ queda sin ficha a propósito: se está rehaciendo como órgano de jazz (_Tests/banco-organo/).
// ═══════════════════════════════════════════════════════════════════════════════════════════
(function(L){
  L.reg.ping = { ref: "_BASE/mm-presets.js (sonidos de la casa — ficha escrita desde sus parámetros, a confirmar de oído con Mario)",
    escribe: [
      {"sig": "extensión C1–C8", "es": "Cubre casi todo el teclado. Es un sonido de referencia: sirve para oír alturas, no para imitar un instrumento.", "en": "It covers almost the whole keyboard. It is a reference sound: it serves to hear pitches, not to imitate an instrument.", "sigEn": "range C1–C8"},
      {"sig": "staccato · acento", "es": "Son sus únicas articulaciones. La nota se apaga sola en menos de un segundo, así que una figura larga no la alarga: escribe la duración pensando en el silencio que sigue.", "en": "They are its only articulations. The note dies by itself in under a second, so a long note value does not lengthen it: write the duration with the following silence in mind."}
    ],
    toca: [
      {"sig": "golpe breve", "es": "Ataque de 4 ms con un pequeño golpe al comienzo y caída completa en unos 0,8 s, mantengas o no la tecla. No tiene vibrato ni ruido: sólo la nota.", "en": "A 4 ms attack with a small knock at the start and a complete decay in about 0.8 s, whether or not the key is held. It has no vibrato and no noise: only the note.", "sigEn": "short strike"},
      {"sig": "más claro hacia el agudo", "es": "El timbre es armónico y se abre hacia el agudo: oscuro en el grave, brillante arriba. Por su ataque neto es útil para comprobar un acorde arpegiado nota por nota.", "en": "The timbre is harmonic and opens toward the top: dark in the bass, bright above. Its clean attack makes it useful for checking an arpeggiated chord note by note.", "sigEn": "brighter toward the top"}
    ]
  };
  L.reg.sine = { ref: "_BASE/mm-presets.js (sonidos de la casa — ficha escrita desde sus parámetros, a confirmar de oído con Mario)",
    escribe: [
      {"sig": "extensión C1–C8", "es": "Cubre casi todo el teclado y acepta legato, staccato, tenuto y acento. Sostiene mientras dura la nota escrita.", "en": "It covers almost the whole keyboard and accepts legato, staccato, tenuto and accent. It sustains for as long as the written note lasts.", "sigEn": "range C1–C8"},
      {"sig": "para oír intervalos", "es": "Es la herramienta para escuchar una relación de alturas sin timbre: dos senoidales muestran el intervalo desnudo, sin los parciales de un instrumento real.", "en": "It is the tool for hearing a pitch relationship without timbre: two sine tones show the bare interval, without the partials of a real instrument.", "sigEn": "for hearing intervals"}
    ],
    toca: [
      {"sig": "casi senoidal pura", "es": "Los armónicos están tan atenuados (−30 dB por octava) que se oye prácticamente sólo la fundamental. Ataque suave de 10 ms, sin vibrato ni ruido, sonido constante.", "en": "The harmonics are so attenuated (−30 dB per octave) that practically only the fundamental is heard. A soft 10 ms attack, no vibrato or noise, a steady tone.", "sigEn": "almost a pure sine"},
      {"sig": "sin batidos de parciales", "es": "Como casi no hay armónicos, no hay parciales que coincidan ni que batan. En dos notas simultáneas, lo que puede aparecer es un tono de combinación (diferencial) que produce el oído mismo.", "en": "Since there are almost no harmonics, there are no partials to coincide or beat. In two simultaneous notes, what may appear is a combination (difference) tone produced by the ear itself.", "sigEn": "no partial beating"}
    ]
  };
  L.reg.synth_aahs = { ref: "_BASE/mm-presets.js (sonidos de la casa — ficha escrita desde sus parámetros, a confirmar de oído con Mario)",
    escribe: [
      {"sig": "extensión C2–C6", "es": "El rango de un coro: del grave del bajo al agudo de la soprano. Fuera de ese rango no se escribe.", "en": "The range of a choir: from the bass’s low notes to the soprano’s high ones. It is not written outside that range.", "sigEn": "range C2–C6"},
      {"sig": "legato · tenuto", "es": "Son sus únicas articulaciones: es un sonido para notas sostenidas y líneas ligadas, como un coro que canta «aah». No sirve para staccato.", "en": "They are its only articulations: it is a sound for sustained notes and slurred lines, like a choir singing “aah”. It is not for staccato."}
    ],
    toca: [
      {"sig": "vocal «a»", "es": "Dos formantes, hacia 750 Hz y 1200 Hz, colocan el timbre en la vocal «a» abierta. Lleva un poco de soplo, como una voz.", "en": "Two formants, around 750 Hz and 1200 Hz, place the timbre on an open “a” vowel. It carries a little breath, like a voice.", "sigEn": "“a” vowel"},
      {"sig": "entrada suave · vibrato leve", "es": "La nota tarda unos 240 ms en entrar del todo: los ataques rápidos se suavizan. Vibrato discreto (4–6 cents, a unos 5,5 Hz), un poco más amplio hacia el agudo. Al entrar es algo más clara y en menos de un segundo se asienta.", "en": "The note takes about 240 ms to enter fully: quick attacks are softened. A discreet vibrato (4–6 cents, at about 5.5 Hz), a little wider toward the top. It enters slightly brighter and settles in under a second.", "sigEn": "soft entry · light vibrato"}
    ]
  };
  L.reg.warm_pad = { ref: "_BASE/mm-presets.js (sonidos de la casa — ficha escrita desde sus parámetros, a confirmar de oído con Mario)",
    escribe: [
      {"sig": "extensión C1–C7", "es": "Un colchón armónico: acordes y notas largas que sostienen a otras voces.", "en": "A harmonic bed: chords and long notes supporting other voices.", "sigEn": "range C1–C7"},
      {"sig": "legato · tenuto · notas largas", "es": "Son sus únicas articulaciones. La entrada es lenta (casi medio segundo), así que en un ritmo rápido la nota no llega a sonar entera: escríbelo en valores largos.", "en": "They are its only articulations. The entry is slow (almost half a second), so in a fast rhythm the note never sounds in full: write it in long values.", "sigEn": "legato · tenuto · long notes"}
    ],
    toca: [
      {"sig": "cálido y oscuro", "es": "Pocos armónicos (−16 dB por octava) y dos realces suaves, hacia 450 Hz y 1600 Hz: un color redondo que no tapa la melodía.", "en": "Few harmonics (−16 dB per octave) and two gentle boosts, around 450 Hz and 1600 Hz: a round colour that does not cover the melody.", "sigEn": "warm and dark"},
      {"sig": "entrada lenta · se asienta", "es": "Entra en unos 420 ms, algo más brillante, y en poco más de dos segundos se cierra hacia su color cálido. Vibrato muy leve y lento (3–4 cents, a unos 4,5 Hz).", "en": "It enters in about 420 ms, somewhat brighter, and in a little over two seconds closes toward its warm colour. A very slight, slow vibrato (3–4 cents, at about 4.5 Hz).", "sigEn": "slow entry · settles"}
    ]
  };
  L.reg.space_sweep = { ref: "_BASE/mm-presets.js (sonidos de la casa — ficha escrita desde sus parámetros, a confirmar de oído con Mario)",
    escribe: [
      {"sig": "extensión C1–C7", "es": "Un sonido de efecto y de textura, para transiciones, fondos y atmósferas.", "en": "A sound for effects and texture, for transitions, backgrounds and atmospheres.", "sigEn": "range C1–C7"},
      {"sig": "notas de tres segundos o más", "es": "Sólo legato y tenuto. El barrido tarda unos tres segundos en completarse: si la nota es más corta, se corta a mitad de camino.", "en": "Only legato and tenuto. The sweep takes about three seconds to complete: if the note is shorter, it is cut halfway.", "sigEn": "notes of three seconds or more"}
    ],
    toca: [
      {"sig": "barrido del filtro", "es": "Cada nota empieza muy abierta y un filtro resonante baja unas dos octavas y media durante unos tres segundos: se oye un «barrido» de brillo que desciende hasta el color de base.", "en": "Each note starts wide open and a resonant filter descends some two and a half octaves over about three seconds: a sweep of brightness is heard falling to the base colour.", "sigEn": "filter sweep"},
      {"sig": "entrada lenta · vibrato lento", "es": "Entra en algo más de medio segundo, con un poco de soplo y un vibrato lento y ondulante (5–7 cents, a 3,4–3,9 Hz).", "en": "It enters in a little over half a second, with a little breath and a slow, undulating vibrato (5–7 cents, at 3.4–3.9 Hz).", "sigEn": "slow entry · slow vibrato"}
    ]
  };
  L.reg.cosmic_whistle = { ref: "_BASE/mm-presets.js (sonidos de la casa — ficha escrita desde sus parámetros, a confirmar de oído con Mario)",
    escribe: [
      {"sig": "sólo agudo: C4–C8", "es": "Empieza en el do central y sube hasta el final del teclado: es una voz aguda para melodías.", "en": "It starts at middle C and rises to the top of the keyboard: a high voice for melodies.", "sigEn": "high only: C4–C8"},
      {"sig": "legato · tenuto", "es": "Sólo articulaciones ligadas y sostenidas: canta como un silbido o un theremin.", "en": "Only slurred and sustained articulations: it sings like a whistle or a theremin."}
    ],
    toca: [
      {"sig": "casi un silbido", "es": "Muy pocos armónicos (−22 dB por octava) y un toque de aire: el timbre de un silbido. Entra en unos 120 ms.", "en": "Very few harmonics (−22 dB per octave) and a touch of air: the timbre of a whistle. It enters in about 120 ms.", "sigEn": "almost a whistle"},
      {"sig": "vibrato amplio", "es": "Es el sonido de la casa con más vibrato: de 7 a 11 cents, a 5,5–6 Hz, y crece hacia el agudo.", "en": "It is the house sound with the most vibrato: from 7 to 11 cents, at 5.5–6 Hz, growing toward the top.", "sigEn": "wide vibrato"}
    ]
  };
  L.reg.glass_bells = { ref: "_BASE/mm-presets.js (sonidos de la casa — ficha escrita desde sus parámetros, a confirmar de oído con Mario)",
    escribe: [
      {"sig": "extensión C3–C7", "es": "Campanas de cristal para el registro medio y agudo.", "en": "Glass bells for the middle and high register.", "sigEn": "range C3–C7"},
      {"sig": "staccato · acento", "es": "Es percusivo: la nota se apaga sola, así que la figura escrita no la alarga. Las notas graves resuenan más tiempo que las agudas.", "en": "It is percussive: the note dies by itself, so the written value does not lengthen it. Low notes ring longer than high ones."}
    ],
    toca: [
      {"sig": "ligeramente inarmónico", "es": "Los parciales están un poco estirados respecto de la serie armónica, como en una campana: el sonido es brillante (realces hacia 2 kHz y 4,5 kHz) y algo «de cristal».", "en": "The partials are slightly stretched relative to the harmonic series, as in a bell: the sound is bright (boosts around 2 kHz and 4.5 kHz) and somewhat “glassy”.", "sigEn": "slightly inharmonic"},
      {"sig": "resonancia por registro", "es": "Ataque de 8 ms con un pequeño golpe. La caída dura unos 3 s en el grave y baja a 1,5 s en el agudo; el brillo inicial se cierra en el primer segundo. Lleva un vibrato muy leve.", "en": "An 8 ms attack with a small knock. The decay lasts about 3 s in the bass and falls to 1.5 s in the treble; the initial brightness closes in the first second. It carries a very slight vibrato.", "sigEn": "resonance by register"}
    ]
  };
})(window.MM_TECH);
