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
