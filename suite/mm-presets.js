// 2026-09-15 (checkpoint · Score V2.7.109 · Cosmic V2.3.37 · Register V2.1.14) — LA LISTA HABLA TU IDIOMA.
//   Reporte de Mario con captura: la lista de instrumentos salía mezclada. De las 81 fichas, 73 traían
//   class.label en inglés y 8 en castellano (Órgano de Tubos · Acordeón · las cuatro Sección de… ·
//   Acordeón vallenato · Cajón), y los once rótulos de sección existían sólo en inglés; ni
//   MM_instrumentOptionsHTML ni la paleta en columnas miraban el idioma. class.label NO se traduce: es la
//   etiqueta canónica de la ficha, la que usa el banco. Los nombres de PANTALLA viven ahora en
//   MM_INSTRUMENT_NAMES, al lado de MM_INSTRUMENT_SECTIONS, con sólo el nombre que faltaba por entrada
//   (es para las 73, en para las 8); sin par manda class.label, así que una ficha nueva aparece igual.
//   Eligen MM_instLabel y MM_instSection leyendo coachLang() y, si la app no lo define, mmCoachLang del
//   storage — esta lista la abren cuatro apps y no puede depender de ninguna. Los once rótulos de sección
//   ganaron su `es`. Verificado cargando la página en los dos idiomas: 81 opciones y once grupos en cada uno.
//
// 2026-09-13 (checkpoint · Cosmic V2.3.35 · Score V2.7.107) — DIEZ INSTRUMENTOS POPULARES, A OÍDO CON MARIO.
//   Entran al banco, clase «Popular · Latino»: acordeón vallenato, bajo eléctrico, Rhodes, congas, bongós,
//   timbales, claves, cencerro, maracas y cajón. Afinados por reporte de Mario, no por defaults de biblioteca:
//   se cortó la resonancia colgada del bajo eléctrico y el Rhodes; congas y bongós más huecos y con menos
//   definición de frecuencia; maracas con menos golpe de entrada; los dos acordeones acercados al cello (menos
//   ataque). Ganancias recalibradas por medición (acordeón, timbales, cencerro, claves, cajón — el cajón en
//   modo ruido no responde a ganancia: su pico es el transitorio).
//
// 2026-09-10 (con Mario, sobre la Shéhérazade y la muestra VSCO `VlnEns_Pizz_A3_v2_rr2`) — EL PIZZICATO NACE
//   COMO UNA CUERDA PULSADA. Mario, oyendo el pizz de los violines segundos: «suena correctamente como sonaría
//   con arco». Tenía razón y la prueba estaba en el propio banco: el CLAVECÍN —la otra cuerda pulsada— declara
//   resp.atk [0.06, 0.05, 0.04, 0.04] y mide 4,8 ms de ataque, mientras `strings_pizzicato` declaraba
//   [2.4, 2.0, 1.8, 1.4] y medía 67,3 ms. Catorce veces más lento: eso es un arco empujando la cuerda hasta que
//   arranca, no un dedo soltándola. Su idea, textual: «¿deberían parecerse más los pizzicatos a un clavecín en
//   su ataque?». Dos casillas, medidas contra la muestra en el A4 y aprobadas de oído:
//   · resp.atk [2.4, 2.0, 1.8, 1.4] → [0.48, 0.40, 0.36, 0.28] — 67,3 ms → 13,6 ms. NO se puso el ataque de la
//     muestra (27 ms) porque ése es de ENSEMBLE: adentro está el escalonado de los atriles, que el Cosmic pone
//     aparte con el coro de sección (Rasch 10-40 ms, contrato del 30-08). La ficha declara el ataque de UN
//     ejecutante y la sección agrega la dispersión; declarar 27 acá lo sumaría dos veces.
//   · env.decay [22, 8.7, 2.5, 0.8] → [1.76, 0.70, 0.20, 0.064] — a los 200 ms del pico: −2,3 dB → −31,0 dB,
//     contra los −31,9 dB de la muestra. Antes la nota no se moría: era una nota sostenida con otro nombre.
//   La SOLISTA `pizzicato` va por la misma ley, con sus números: resp.atk [1.4, 1.2, 1.0, 0.8] → [0.28, 0.24,
//   0.20, 0.16] (36,2 ms → 7,7 ms, más rápido que la de sección porque es UN ejecutante) y env.decay
//   [6.7, 4.5, 1.9, 0.7] → [2.01, 1.35, 0.57, 0.21] (cola más larga que la de sección: no hay coro que la tape).
//   Mario, oyendo las dos: «ambos están muy buenos, y creo que son comunes a las cuerdas pulsadas».
//   EL HUECO DE LA CAJA (mismo día, idea de Mario: «lo único que aumentaría es el hueco de la caja del
//   violín»). Medido en el ataque, banda 250-300 Hz relativa a 100-1200: la muestra da −17,1 dB y nosotros
//   −31,7. Primero probé una entrada en `form.bank` a 275 Hz y NO HACE NADA (0,4 dB con siete combinaciones):
//   `form.bank` es una cadena de filtros PEAKING, o sea ecualización sobre lo que pasa, y en 275 Hz no pasa
//   nada — la nota tiene parciales en 440, 880, 1320. Realzar una banda vacía realza silencio; es la misma ley
//   del contrato de la resonancia del 09-09. Lo que lleva la caja en un pellizco es el GOLPE, y para eso está
//   `onset.band`: ruido por resonadores fijos Q 8, lo que vibra igual toque lo que toque. Entra
//   band [275, 460] — el aire del violín (A0, las efes) y el cuerpo principal (B1+) — con bandMs 60.
//   `bandHit` va por REGISTRO y no escalar, porque estas dos fichas cubren toda la cuerda: en el ancla grave
//   queda en 0 (un contrabajo no tiene la caja del violín) y sube hacia el agudo. Medido en el A4: −31,7 →
//   −15,3 dB con la curva, contra los −17,1 de la muestra; el escalar daba −12,4 y le ponía caja de violín al
//   contrabajo. La banda se mide en el A4 a propósito: en el Sol2 el tercer parcial cae en 294 Hz y contamina.
//   NOTA DE MÉTODO: hasta hoy medí con `startVoice(f,fenv,noOnset)` en `true` —copiado de guardia-parcial—, o
//   sea SIN el golpe del pellizco, justo la parte que hace que un pizz sea un pizz. Corregido en la guardia.
//   EL RANGO DINÁMICO DE UNA CUERDA PULSADA (mismo día, pedido de Mario: «los pizz deberían salir un poquito
//   más como sección, sin cambiar la dinámica para respetar a RK»). Las dos fichas no declaraban
//   `class.velRangeDb`, así que corrían por la ley LINEAL y la `p` escrita se traducía a 16/127 pelado: −18,0 dB,
//   el MISMO lugar donde cae una sección de cellos con arco (velRangeDb 30 → −18,7). Está al revés de la física:
//   un pizzicato tiene rango ESTRECHO —no se puede pellizcar muy suave ni muy fuerte, la cuerda da lo que da—, y
//   un rango estrecho pone la `p` cerca de la `f`, que es justo por qué el pizz de la sección SALE aunque esté
//   escrito piano. No es subirle el volumen: es declarar el rango que el instrumento tiene. Con 18 dB la `p` pasa
//   de −18,0 a −11,2 y el recorrido entero de ppp a fff se comprime a 11 dB. El solista lleva 20: puede variar
//   algo más con el punto y la carne del dedo. La partitura no se toca — sigue diciendo `p`.
//   Y EL NIVEL DE FÁBRICA (mismo día, medido por Mario con el fader de la Console): con el rango declarado
//   todavía le faltaban 4 dB, y para conseguirlos tuvo que subir el fader del canal a 117 sobre 127 —casi el
//   tope—. Que haga falta ir al máximo del fader es la señal de que el número no es de la mezcla de esta obra
//   sino del instrumento: `mix.vol` es el nivel de fábrica y el Score lo aplica al canal como round(vol×127).
//   Ninguna ficha del banco lo declaraba, así que todas arrancan en el nominal 100. Las dos de pizz declaran
//   ahora 0.874 → 111, y ahí llegó por dos pasos: primero 0.92 → 117, el número que sacó con el fader, y
//   después −5 % al oírlo en contexto con las notas del pasaje en velocity 60. Su criterio, textual: «es muy
//   claro y similar a como se escucha en el podium» — que es el calibre que vale, cuarenta y cinco años de
//   oírlo desde el atril. Con eso el fader vuelve a 100 y el balance queda puesto para esta obra y para la
//   próxima. Son las primeras fichas del banco con mix.vol: el nominal sigue siendo 100 y sólo se aparta la
//   que tenga un motivo medido.
//   REPARTO, para que ningún número esté dos veces: `velRangeDb` es la LEY del instrumento (una cuerda pulsada
//   tiene poco recorrido, vale en toda obra), `mix.vol` es su nivel de fábrica, y la velocity de las notas es
//   la INTERPRETACIÓN de la página — Mario: «para RK, p pizz = 60». Los tres empujan en la misma dirección, así
//   que se midieron sumados: p=16 lineal −18,0 dB · p=16 con el rango −11,2 · p=60 con el rango −5,0 · más el
//   nivel de fábrica. Si algún día suena de más, lo que sobra es el nivel de fábrica, no la ley.
//   Medido con `guardia-pizz.js` (envolvente del render, no lo que declara la ficha). Y hubo que arreglar el
//   banco primero: el Register clampeaba el sustain en 0,05 (−26 dB) y ninguna ficha pulsada podía apagarse ahí
//   — ver mm-guardia.md. PENDIENTE del mismo parentesco: la GUITARRA (atk [1.0, 1.0, 1.1, 0.8]) y el ARPA
//   ([1.6, 1.0, 1.15, 0.85]) arrastran ataques de arco igual que el pizz; y las cuatro anclas de estas dos
//   fichas salieron de UNA sola muestra (A4) escalando la curva — hacen falta un pizz agudo y uno de contrabajo
//   para que las otras tres se midan en vez de escalarse.
// 2026-09-09 (2a sesion, pedido de Mario: «por que no esta puesto en flute?») — LAS VARIANTES APROBADAS PASAN A SU
//   CLAVE BASE. `flute_medido`, `bassoon_medido` y `oboe_medido` se funden en `flute`, `bassoon` y `oboe`, y las tres
//   variantes se retiran; `horn_medido` se retira sin fundir porque era un DUPLICADO EXACTO de `horn` (sus recorridos
//   de srcTilt se retiraron el 01-09 y la clave quedo vacia, prometiendo algo que no tenia). Motivo: los mmf de las
//   demos declaran la clave BASE, asi que nada de lo medido sonaba salvo cambiando el canal a mano — el Bruckner
//   tocaba `flute`, `oboe` y `bassoon` sin una sola de las correcciones. Las referencias a las cuatro variantes en
//   los .mmf de _Tests se reescribieron a su clave base. Los comentarios con el porque de cada numero quedan arriba
//   de la ficha base. Y la CONVENCION cambia (Mario, mismo dia): las variantes `_medido` fueron iniciativa mia y no
//   suya, justificadas como «proteger lo hecho», y el argumento no se sostiene porque los backups ya existen
//   (_HISTORY/versiones-presets, los .bak con fecha, git). El costo fue real: lo que su oido aprobaba no sonaba en
//   sus demos, que declaran la clave base. De aca en adelante se mide, lo oye, y se escribe SOBRE LA CLAVE BASE, con
//   el valor viejo y el porque en el comentario. `pizzicato_medido` se borro a pedido suyo («por el momento no
//   estamos ahi») y sus numeros quedaron como pendiente arriba de `pizzicato`. `cellos_section_medido` se borro despues («estamos en violines») y su contenido quedo
//   anotado arriba de `cellos_section`. NO QUEDA NINGUNA VARIANTE `_medido` EN EL BANCO.
// 2026-09-09 (checkpoint · Cosmic V2.3.33 · Register V2.1.12 · Register·WAV v0.3.2) — EL FAGOT DEJA DE SER UN CLAXON,
//   Y LA FLAUTA DEJA DE TENER EL MISMO TECHO EN TODA SU EXTENSIÓN. Dos claves NUEVAS de variante para el A/B; `bassoon` y
//   `flute` quedan INTACTAS. Todo salió de comparar contra la VSCO-2-CE con el oído de Mario, un cambio por vez.
//   (1) bassoon_medido — cinco cambios. EL CLAXON ERA EL FILTRO, no el brillo: del k3 al k8 el fagot real cae 47,6 dB
//   (−34 dB/oct) y el nuestro 3,9 (−2,8), dieciséis armónicos casi al mismo nivel. Con src.tilt −8 la fuente no puede caer
//   más de −8 dB/oct ni con el brillo en el piso, así que el trabajo es del corte: filt.cut [38,25,13,4] → [25, 6.5, 2.6, 1.7]
//   (medido en las cuatro anclas; el techo pasa de ~2.200 Hz a ~500-600 en el registro medio). Mover el brillo a fondo ganaba
//   6 dB; bajar el corte, 20. · resp.atk ×0.68 → 35 ms en el A3, donde la muestra llega al 90 % (el nuestro tardaba 300).
//   · onset.air 0.05 → 0.90: la perilla va AL REVÉS de su nombre (1200+(1−air)·2600), así que el 0.05 ponía la consonante
//   en 3.670 Hz — un tic de teclado; el centroide de los primeros 10 ms de la muestra es 1.114 Hz. onset.ms 45 → 120.
//   · filt.env 0.2 → 0 (la entrada no abre el filtro; coincide con la ficha propia de Mario, Notes_basoons.txt).
//   · EL HUECO Y LA QUINTA, las dos entradas NEGATIVAS del bank [-1,-12,1.1] y [-3,+12,1.6] (parcial, no Hz — contrato
//   nuevo del Cosmic V2.3.33): en el A3 real la fundamental está 23,5 dB bajo la octava y el 3er parcial a 3,4, o sea
//   440 con 660, una quinta justa sin raíz. Fichas medidas: INSTRUMENTS WAV TESTS/fagotes/bassoon_medido-vsco-sus-v{1,2}.txt.
//   (2) flute_medido — UN cambio: filt.cut 5 (escalar) → [7, 4, 1.7, 1.3]. Un escalar mantiene el techo siempre en 5·f0,
//   la misma cantidad de armónicos en toda la extensión; la flauta real es rica abajo (en el C4 el parcial más fuerte es
//   el 4º) y casi una sinusoide arriba (en el C7 el k2 está a −24,4). Error contra la muestra: 8,0 dB de media con el
//   escalar, 4,2 con la curva.
//   MEDIDO Y NO ESCRITO (necesita el contrato del arco): la flauta arma su color en 100 ms y la nuestra lo tiene completo
//   en la muestra cero; su aire es 20 dB más fuerte en el C4 que en el E5 (resp.air dice lo contrario) y su vibrato se
//   ACHICA hacia el agudo (±6,9 ¢ en el E5, ±4,4 en el E6) mientras resp.vib [4,8,10,8] lo agranda.
// 2026-09-08 (checkpoint · Cosmic V2.3.32) — LOS MATICES SE SEPARAN, Y LA FLAUTA ENCUENTRA SU FORMANTE.
//   (1) MM_VELRANGE_SOSTENIDO = 25 (abajo, antes del banco): la BASE del rango dinámico para las 23 claves de
//   régimen sostenido que no declaran class.velRangeDb. Con la ley lineal, la escalera del Score dejaba mf·f·ff·fff
//   dentro de 4,7 dB; con la base son 7,1 y el mf no se mueve. Percusivo/pulsado/percutido siguen lineales.
//   (2) FLAUTA: form.f2 [9000,2,1.2] → [1550,4,1.6] (el pico medido más fuerte, debajo del cutoff de Boehm; el 9000
//   del riser cae fuera de la banda medida) · resp.air [0.18,0.14,0.12,0.10] → [0.06,0.14,0.16,0.05] (la pendiente
//   estaba invertida) · resp.atk 65/60/55/50 ms → 95/90/75/60. Con el 1550 puesto, el resp.tilt que puso el oído el
//   01-09 cae sobre el centroide medido. Ficha flute-settings.md §10; guardia del banco: dos filas nuevas.
// 2026-09-16 — EL VIOLÍN NO SE CAE EN EL AGUDO (Mario, sobre la Shéhérazade: «por qué no suena? está en CH 10»).
//   El Violín I, con su p escrito, salía 18 dB debajo de las violas y 25 debajo del pizz de los segundos. La
//   corrección del 10-09 se midió con playAudio, y ahí la velocity casi no mueve el nivel (de 44 a 92 el violín
//   se movía 0,5 dB): por el camino real —NOTE_ON al Cosmic, que es como toca el Score— ese mismo tramo vale
//   30,7 dB, y la curva por ancla que quedó escrita CAÍA 21,5 dB de G3 a E5 en p. El Violín I de este pasaje vive
//   en E5-G5: su melodía entraba por debajo de todo. Es la misma queja que Mario hizo el 10-09 con las violas —
//   «la nota de arriba suena mucho menos»—, en el instrumento de al lado y sin ver, porque la guardia medía la
//   magnitud que no se mueve.
//   violins_section resp.gain [0.1473,0.0772,0.0507,0.0079] → [0.0947,0.0772,0.0818,0.0603], corregido por ancla
//   contra el D4 (que es el que cumple el bal): medido en p, G3 −49,4 · D4 −50,0 · A4 −49,7 · E5 −49,7, swing
//   21,5 → 0,6 dB. El D4 no se movió, así que la distancia a las violas sigue siendo la que pide class.bal.
//   Timbre intacto: resp.tilt, form y filt no se tocan.
//   Y DESPUÉS, DE OÍDO (Mario, escuchando el pasaje ya plano): «suena muy poco, queda cubierto, subile
//   bastante». La curva se sube entera ×7,943 (+18 dB) sin cambiar su forma: [0.0947,0.0772,0.0818,0.0603] →
//   [0.7522,0.6132,0.6497,0.4790]. En la obra el Violín I pasa de −27,6 a −9,8 dB: queda 4 dB encima del pizz de
//   los segundos y 11 encima de las violas, que es el melodía-sobre-acompañamiento que él oye desde el podio.
//   LO QUE ESTO DEJA DICHO, y es más grande que el violín: sobre el camino real la casa NO está entre −5 y +5.
//   Medido en p, D4/A3/G2/D2: violines −50,2 · violas −50,6 · chelos −44,6 · CONTRABAJOS −22,7. El contrabajo
//   está 28 dB encima de todos y 23 fuera de lo que declara su propio bal. O sea que el `class.bal` de la cuerda
//   describe una escala que existía en la medición con playAudio y no en la que suena. Este +18 sube al violín
//   HACIA esa casa real, no por encima de ella, pero deja al violín 18 dB lejos de su bal declarado: la fila del
//   bal queda `pendiente` en la guardia, con el mismo motivo que chelos y contrabajos. Re-escalar la familia
//   entera sobre el camino real es el próximo trabajo, y es de oído de Mario, no de tabla.
//   Guardia nueva: _Tests/regresiones/guardia-escala-dinamica.js — mide por el camino NOTE_ON y en TRES dinámicas
//   (p 44 · mf 62 · f 75, los tres valores escritos en la Shéhérazade), con silencio verificado antes de cada
//   toma (sin eso la misma nota daba −47,7 y −33,2 en la misma corrida). Verificada ROJA antes del cambio.
//   PENDIENTE, visto por la guardia y no tocado: violas_section SUBE 17,5 dB de C3 a A6 en p — el agudo que se
//   abrió el 10-09 quedó abierto de más.
//   Y UN DATO QUE CONVIENE SABER ANTES DE TOCAR ESA CASILLA: `class.velRangeDb` NO mueve este preset. Medido con
//   51,5 (lo que dice la ficha) y con 32 (lo que escribió la investigación del 01-09, acá abajo), el violín da el
//   mismo tramo de 32 dB de p a ff. La casilla está en la ficha pero no en el camino del sonido.
// 2026-09-10 — EL VIOLÍN VUELVE A LA ESCALA DE LA CASA, Y LA VIOLA ABRE EL AGUDO. Mario, sobre el pasaje de
//   violas de la Shéhérazade: «para lograr un balance como está ahora tengo que darle a las violas fff y la nota
//   de arriba suena mucho menos, este pasaje lo marca RK como piano... pero se tiene que oír». Medido en el
//   Cosmic a velocity 52, una nota en el registro donde cada uno toca: flauta −0,1 · clarinete +4,0 · fagot +1,6
//   · oboe −5,2 · corno −9,5 · violas +4,5 · contrabajos +5,2 · chelos −14,9 · VIOLINES +46,4. La casa entera
//   entre −5 y +5 y el violín 40 dB encima — las tres cosas que Mario reportó el mismo día (las violas no se
//   oyen, V I en p=16 tapa a todos, el master satura en pocos compases) eran ésta.
//   (1) violins_section resp.gain [0.8,0.95,1,0.95] → [0.1473,0.0772,0.0507,0.0079] y violin (solista)
//   → [0.2845,0.1496,0.0998,0.0220]: el arreglo NO es un factor único porque el violín además SUBÍA 25 dB de
//   G3 a E5; la corrección va por ancla y lo deja plano. Timbre intacto (resp.tilt, form y filt no se tocan).
//   (2) violas_section: el agudo se apagaba —resp.tilt [0.9,0.8,0.6,0.42] y filt.cut [30.58,19.09,8.12,2.84],
//   casi sólo fundamental arriba—, así que en la figura de Mario (F3 contra F4) la nota que canta entraba 6 dB
//   por debajo del pedal. tilt → [0.9,0.88,0.85,0.82] · filt.cut → [30.58,22,16,12] · resp.gain
//   [0.0404,0.0549,0.058,0.0492] → [0.0100,0.0146,0.0383,0.2466]. Medido después: F3 y F4 a vel 52 dan las dos
//   +5,4 dB — la de arriba ya no se cae.
//   Verificado en la obra: CH10 (Vln I) pasa de +5,5 dB a −24,2 y la suma pre-limitador de +1,8 a −11,1 — el
//   limitador del master deja de morder, que es la saturación que Mario oía.
//   Guardia nueva: _Tests/regresiones/guardia-secciones.js (swing ≤12 dB por sección · distancia entre secciones
//   = class.bal ±3 dB). CHELOS Y CONTRABAJOS quedan `pendiente`: el chelo está 13 dB por debajo de lo que declara
//   su bal y es el próximo paso, acordado con Mario.
// 2026-09-01 — EL RANGO DINÁMICO ENTRA AL BANCO (contrato spl.* → class.velRangeDb, escalar o a4). Metales por DPA/Meyer (corno
//   [40 40 30 20] en horn_medido); cuerdas por la escalera de Meyer (Rindel; _Investigacion-instrumentos/dinamica): violín 32 ·
//   viola 25 · cello 30 · contrabajo 22, solo y sección. Sin desglose por registro publicado para cuerdas: escalar.
// mm-presets.js — banco de presets Default de Music Motion (v2 · baseline acústica · +lista canónica de instrumentos 2026-06-17 · +paleta de instrumentos en columnas MM_openInstrumentPalette 2026-08-23)
// 2026-08-29 — ENTRA LA INVESTIGACION, DOCE FICHAS DE UNA VEZ (pedido de Mario: «meter todos los valores
//   tal cual y seguimos abriendo uno a uno empezando con el cello»). De la baseline de junio salen, con su
//   informe citado detras: violin · viola · cello (deep-research nueva, 2026-08-29) · horn · trumpet ·
//   trombone · tuba · oboe · english_horn · bassoon · contrabassoon · alto_flute_g. La flauta se verifico
//   campo por campo y ya estaba aplicada (no-op). Regla de siempre: la medicion se escribe SOBRE la ficha y
//   lo que no se mide no se toca — name, class, lo, hi intactos en las doce.
//   LO QUE CAMBIA EL SONIDO, en una linea: la INVERSION DE BRILLO se corrige en las nueve fichas que la
//   tenian (resp.tilt bajaba hacia el agudo en la realidad y subia en el banco); el violin recupera sus
//   formantes DENTRO de su caja (3000/5000 Hz -> 500/2400, con form.bank de los modos de McLennan); la viola
//   baja su f1 de 500 a 220/350 y estrena el formante de 1600 que es su nasalidad; el cello ancla en el
//   racimo de modos que termina en su La al aire (C2·G2·A3·A5) y estrena filt.cut a4; el corno pierde el
//   formante del trombon (450/1000 -> 340/750); la trompeta corrige un src.tilt de -8.5 que era un ff
//   aplicado a todo el registro (-20.5); la tuba pierde una inarmonicidad que no tiene (0.005 -> 0). Y las
//   cuerdas frotadas estrenan vibrato: estaban en cero, en los instrumentos del vibrato.
//   UNIDADES: filt.cut es MULTIPLICADOR de f0 (cbase = f*fcM), no kHz. Los informes lo dan en kHz y se
//   convirtio dividiendo por la f0 de cada ancla. El informe del contrabajo tiene ese error de unidad sin
//   corregir: NO aplicar su tabla tal cual.
//   NO ESCRITO por no existir el contrato: nl.* (no linealidad de metales), spl.* (capacidad dinamica en dB),
//   form.f1 como vector por ancla (trombon, 386 cents medidos), resp.ring, src.hasFundamental. Y ojo:
//   src.partials solo se lee en modo inharm — en harm el motor arma 16 parciales fijos, asi que en las
//   cuerdas queda escrito pero inerte hasta que buildWaveG acepte un techo.
//   PENDIENTE DE OIDO (Mario, una por una, empezando por el cello): el signo de filt.env. El motor arranca en
//   cbase*2^env y BAJA (mordida y se cierra); los informes describen lo contrario («entra oscuro y se
//   aclara»), que pediria env negativo — y el knob del Register declara 0..4, asi que un negativo le da NaN
//   al dibujo. Se dejo el valor POSITIVO de las tablas: el signo es decision de motor, no de ficha.
//   Respaldo del banco anterior: _HISTORY/versiones-presets/mm-presets-2026-08-29-pre-numerizacion.js (hasta el 02-09 estaba en _BASE)
// 2026-08-26 (Score V2.7.87 / Keyboard V2.3.22, con Mario sobre el bajo del 2do mov del Ravel — todo de oido,
//   nota por nota, con G3 como control intocable). EL BAJO DEL PIANO, EN CUATRO PASOS.
//   (1) decayTilt de piano_grand_tonal: escalar 0.2 -> a4 [1.6, 2.4, 2.8, 3.0]. Con 0.2 los parciales 2-5 duraban MAS que
//   la fundamental (La1: 61/30/20/15 s contra 4,07 del master): el nivel bajaba y el timbre se quedaba entero, y eso el
//   oido no lo lee como que la nota se apaga («queda sostenido el sonido sin ningun fade»). El valor FISICO del knob es 3
//   —con decay = 3*tau1 es el que da tau_k = tau1/k— y la primera correccion lo puso mas empinado justo en el GRAVE, que
//   es donde menos corresponde: la entorchada larga y de baja perdida sostiene sus parciales medios muchos segundos (el
//   gruñido del bajo) y los que mueren rapido son los del agudo, donde el amortiguamiento crece como k^2. Curva final al reves.
//   (2) bloom [1.2,0.9,0.5,0.25] -> [0.60,0.50,0.35,0.20] y bloomDepth [0.22,0.26,0.34,0.42] NUEVO (contrato del Keyboard):
//   el prompt tardaba 1,2 s en el grave y caia solo -7,5 dB — el martillo se disolvia en vez de golpear. Ahora -12,5 dB en 0,6 s.
//   Los tres pianos.
//   (3) src.partials [44,16,12,8] NUEVO en los tres pianos y resp.tilt del ancla grave 0.90 -> 1.00 en los dos de cola
//   («G3 y G2 o G1 fisicamente tienen una cuerda con diferente peso... lo que oigo es como si las cuerdas fueran del mismo
//   tamaño», y «G3 es perfecto»). No estaba declarado: NHG = 16 parciales para las 88 teclas, y entre el ancla grave y la
//   del tenor NADA se movia en el espectro — de La0 a Do3 el piano era la MISMA cuerda transpuesta. Anclas 2-4 clavadas en
//   lo de hoy para no tocar G3 (queda a 0,15 dB): G1 pasa a 36 parciales y sostiene el parcial 10 unos 4 dB mas arriba.
//   BANDERA en los tres puntos: todo a calibrar de oido.
// 2026-08-25 (EL ARPA POR MATERIAL, con el oído de Mario sobre el Ginastera y una anécdota de Mahler): seis retoques,
//   todos del arpa, todos con el A2 como referencia intacta. (1) onset.pitch pasa de escalar a a4 [3,12,26,26]: el glide de
//   tensión depende del MATERIAL — el entorchado de acero casi no cede, la tripa ~15 cents, el nailon el doble (>2% en los
//   primeros 100 ms, Woodhouse sobre un Mi4 de nailon de 390 mm); plano de F5 para arriba, que ya es todo nailon.
//   (2) onset.ms pasa a a4 [14,10,5,4]: abajo son los ~15 ms del golpe de tapa, arriba el deslizamiento de la yema medido en
//   1,2-6,1 ms (Chadefaux) — con 14 ms parejos el agudo se llevaba una ráfaga tres veces más larga que lo medido, en plena
//   banda de fricción: eso era la «uña». (3) EL SEGUNDO QUIEBRE DE MATERIAL: anclas ["Cb1","A2","F5","G7"] — el ancla 3
//   estaba en F4, una OCTAVA abajo del quiebre tripa→nailon (el mismo error que el del metal pero al doble). La numeración
//   de cuerdas de la ficha (7E=Mi1 · 6E=Mi2 · 5A=La2) sitúa las octavas de Fa a Mi contando hacia abajo, así que «octavas
//   3-4 tripa» = F3-E5: Mi4, Sol4 y La4 son TRIPA y recibían valores de nailon. Recién con F5 las cuatro anclas dicen los
//   cuatro estados de la cuerda: entorchada · tripa · nailon · la más corta. (4) onset.hit [0.30,0.18,0.06,0.07]: arriba el
//   dedo no viaja, ya está apoyado sobre la cuerda, y sin viaje no hay impacto — el punteo queda de puro desplazamiento y
//   suelta (la «excitación casi ideal» del informe). onset.hit modela justo la parte cinética, la del dedo que LLEGA. Se
//   hunde en el ancla 3 y no en la 4, que quedó calibrada para el ff de Mahler. (5) resp.atk [1.6,1.0,1.15,0.85] y filt.cut
//   [48,28,12,6]: los 2 cm de yema son el 5% de una cuerda de 40 cm y más de un cuarto de una de 7,5 — cuanto más corta la
//   cuerda, MÁS manda el dedo, y el ataque dejaba de alargarse hacia el agudo como si la yema pesara menos allá.
//   (6) onset.bandHit [0.18,0.08,0.05,0.08]: el agudo deja de ser CERO. Los modos de la caja están en 134/157 Hz y no
//   dependen de la nota; en el grave el ring queda TAPADO por el fundamental de la propia cuerda, arriba la cuerda muere en
//   0,4 s y la caja queda sola. Mario, sobre el arpa de Mahler en ff: «suena corto, agudo, instantáneo, doloroso — como
//   jalarse un pelo de la nariz», y después: «esa nota decae rapidísimo pero queda la resonancia de la caja». Son dos
//   eventos, el tirón y lo que zumba después. Requiere Cosmic Keyboard V2.3.21 (contrato a4 de onset.pitch/onset.ms).
// 2026-08-24 (EL QUIEBRE DE MATERIAL DEL ARPA, en La2): el arpa tenia sus anclas en Cb1·C3·F4·G7, pero el
//   material no cambia en Do3 sino en LA2 — las doce cuerdas graves (Do1-Sol2) son entorchadas de acero/cobre
//   y la primera de tripa es el 5A. Con el ancla en C3 el motor interpolaba el metal media octava de mas, y el
//   quiebre —que en la referencia del Ginastera esta MEDIDO (E1 51 parciales utiles · E2 25 · A2 11)— no se oia.
//   Tres numeros: anclas ["Cb1","A2","F4","G7"] · src.partials [56,32,14,8] -> [56,12,10,8] · y el dedo, que en
//   la tripa vuelve a ser solo yema (apunte de Mario §9): onset.hit 0.25 -> 0.18 y onset.bandHit 0.12 -> 0.08 en
//   esa ancla. Todo lo demas del arpa intacto. A/B: los primeros compases del Ginastera (arpegio Mi1·Mi2·La2·Re3,
//   que cruza el quiebre). Los valores previos quedan anotados en cada linea para volver en un renglon.
// 2026-08-23 2º (EL METAL ENTORCHADO del arpa, medido sobre el WAV de referencia del Ginastera — primeros 4 compases,
//   arpegio E1·E2·A2·D3): el E1 de la referencia tiene 51 parciales útiles hasta 2,2 kHz, la banda 700-2000 Hz a −14,5 dB
//   de la base y los parciales MÁS FUERTES en k6-k11 (el fundamental −4,7 dB); el nuestro tenía techo duro en el parcial 32
//   (1318 Hz — el src.partials grave), 700-2k a −25 dB y nada sobre 2 kHz. A/B con el motor real (OfflineAudioContext):
//   src.partials grave 32 → 56 · resp.tilt grave 0.55 → 0.75 · las dos resonancias ALTAS del banco de caja suben
//   ([270,1.5,5]/[420,1,4] → [300,3,4]/[430,2.5,4]) — las bandas quedan clavadas a la referencia (700-2k −15,4 ·
//   2k-6k −25,8 · 60 parciales hasta 2,5 kHz). El material y las anclas se reparten bien: las entorchadas de acero/cobre
//   llegan hasta el quiebre en C3 (las tres primeras del arpegio: E1·E2·A2) — el D3 ya es TRIPA y toma poco del cambio
//   (el ancla C3 lo frena); el nailon recién en el agudo. BANDERA para el oído de Mario: toca dos valores del banco de
//   caja calibrados el 20-08 (los dos MEDIDOS de Le Carrou, 134/157, quedan intactos); el fino de la joroba k6-k11
//   (bajar un punto el gain del fundamental grave) es del Register.
// 2026-08-23 (deep-research del Demo 4 — Harp; numerización de CONTRABAJO FROTADO, CLARINETES y deltas de FLAUTA;
//   informes citados en _Investigacion-instrumentos/cuerdas/contrabajo-investigacion.md y maderas/clarinete-investigacion.md
//   + maderas/flauta-addendum-2026-08-23.md; TODO BANDERA hasta el A/B de oído de Mario en el Register):
//   CONTRABASS gana anclas ["E1","G2","D3","G4"] (grave sin fundamental radiada / cuerpo pleno / cantabile del solo del
//   Ginastera / agudo delgado) · form.bank de cuerpo medido [[62,+5,7],[110,+4,5],[155,+3,5],[420,+2,4]] (A0 57-70 Hz Meyer,
//   T1 110 y C3 155 Brown 2004) · atk por período del transitorio de arco (Guettler & Askenfelt: 10 períodos = 243 ms en E1
//   vs 26 en G4) → [2.2,1.6,1.1,0.8] con onset.hit por anclas y ms 60 (el motor no tiene onset.ms por anclas: pendiente) ·
//   VIBRATO PROPIO del CB medido (Mick 2025): 5,2 Hz / 19 cents de media → vib [10,14,19,24] · vibRate [4.6,5.0,5.2,5.5]
//   (más lento y angosto que el violín — copiarle el vibrato al cello lo delata) · filt.env 0.15 (el brillo respira con la
//   dinámica) · src.mode "harm" con inharm 0.002: bajo arco los parciales quedan mode-locked (Woodhouse) — nada del molde
//   percusivo (release/bloom/decayTilt los pone el arco, no el tiempo). CLARINET/BASS_CLARINET: la ley del IMPAR medida —
//   pares 20-28 dB bajo los impares en chalumeau y la regla muere sobre el cutoff (~1,5 kHz; Kay 2017, Dickens 2007,
//   Petersen 2020) → oddEven [0.12,0.20,0.45,0.50] (bajo [0.12,0.22,…], subido de 0.10: sin evidencia de más impar que el
//   soprano) · anclas soprano ["D3","F4","A4","G6"] con F4-A4 pegadas para capturar GARGANTA y break (UNSW G4: dos picos de
//   impedancia) · bajo ["Bb1","Eb3","A3","F5"] chalumeau «de órgano» y clarion NEUTRO (TOR: no abrir el agudo como en el
//   soprano) · form.f1 pasa a modelar la banda reforzada del lattice (soprano [1400,4,1.5], medido 1130-1450 Hz por
//   digitación — Moers & Kergomard) y f2 la campana ([2100,2,3] Petersen; bajo escalado [750,4,1.5]/[1050,2,3], BANDERA sin
//   medición publicada — el [400] viejo no tenía fundamento) · vibrato clásico = 0 CONFIRMADO (vibRate queda de semilla
//   jazz/klezmer) · inharm → 0 (tono soplado, armónicos exactos) · onset water-hammer (Almeida 2017): soprano hit 0.03 /
//   bajo 0.06 (el pop de llave es real en el grave del bajo). FLUTE (addendum, cierra el pendiente del 17-06): f1 se queda
//   en ~800 pero ANCHO ([800,3,1.4]) — Fletcher 1975 midió el formante PLANO en 500-1000 Hz y el ~2 kHz es codo de CAÍDA,
//   no realce; el f1 3000 de la renovación del 03-07 caía en el notch de 3-5 kHz; H2 +9,5 dB sobre H1 en C4 (el grave
//   aterciopelado del solo de la Pavane sale de este formante, sin parámetro nuevo) · f2 [9000,2,1.2] (riser, ganancia
//   chica, BANDERA) · char.noise 0.12 → 0.30 (el orden validado el 17-06; BANDERA fuerte para el A/B).
// 2026-08-20 (EL ARPA, afinada de oído con Mario sobre el Ginastera — Variaciones Concertantes, arpa + contrabajo):
//   cuatro valores y un contrato nuevo. (1) `onset.freq` 150 → null: el thump de tapa estaba clavado en 150 Hz para toda la
//   extensión, y 150 Hz es un re grave ajeno a la serie de cualquier bajo del arpa (mi1: 124 y 165 · si1: 124 y 186 — el golpe
//   caía en el hueco). Mario lo oía como «un re fantasma» sobre las notas graves; ahora el chiff vuelve a seguir a la nota.
//   (2) banco de caja: las frecuencias son los modos medidos (Le Carrou 2010) y no se tocan, pero el filtro estaba fuera de
//   escala — +6 dB con Q 12 en 134 Hz y +5 con Q 8 en 157 no es una tabla que radia, es un pico angosto que salta 6 dB cada vez
//   que un parcial le cae encima. A la escala del clavecín (3 · 2 · 1,5 · 1 dB con Q 8 · 6 · 5 · 4), que se afinó de oído. De
//   referencia: el espectro promediado del render de Finale no tiene realce alguno en 134 Hz — está 10 dB por debajo de 250.
//   (3) `decay` [17, 9, 4.5, 0.5] → [8, 4.5, 2.2, 0.4]. (4) `release` [1.2, 0.8, 0.45, 0.2] — NUEVO: LAS MANOS DEL ARPISTA.
//   El arpa nació l.v. (sin release, la cuerda muere sola) y de oído eso es un arpa sin arpista: cada cuerda tirada al máximo y
//   nadie que la calle. Se asume que el arpista apaga cada nota al tocar la siguiente y queda sólo la caja. La rampa cae a −60 dB
//   en `release` segundos, así que a un tercio ya está 20 dB abajo: la mano frena rápido y la madera zumba un instante. Más lento
//   que el fieltro del piano en el agudo (una mano no es un apagador por cuerda) y más rápido en el grave. Con el release puesto,
//   `relNoise` —declarado el 18-08 esperando este momento— por fin suena: el roce del dedo al frenar. El l.v. deja de ser el
//   default del arpa y pasa a ser MARCA por nota (`lv` en el NOTE_ON), que es como se escribe en la página.
// 2026-08-18 (cierre del clavecín, oído de Mario: «el C2 es perfecto — la caja de cubiertos sobre una mesa: el golpe hum y la
//   cajita que salta y cae; el efecto se disminuye en los agudos»): NO estaba mal. Medido con el harness: la energía de 3-8 kHz
//   no baja hacia el agudo (en el ataque, C2 la tiene a 0 dB del cuerpo y C5 a +2 dB); lo que cae es la DENSIDAD de la banda —
//   77 parciales separados 65 Hz en C2 (8,6 por banda crítica a 5 kHz: rugosidad = cubiertos) contra 10 separados 523 Hz en C5
//   (1,1 por banda crítica: tonos resueltos = brillo). Más parciales no lo arreglan: es aritmética de la serie armónica. Los dos
//   clavecines estrenan el contrato onset.band / bandHit / bandMs del Keyboard: [3500, 5200, 7000] Hz con Q 8, nivel
//   [0.02, 0.06, 0.18, 0.22] (el grave casi no lo necesita) y 60 ms de cola — un segundo golpe de ruido en banda FIJA, igual
//   para cualquier nota, escalonado 1,5 ms entre bandas. Es la aproximación barata de la resonancia simpática (SympBank, fase 2).
//   Y el balance grave/agudo (misma escucha): el clavecín salía PLANO — 60 dBA en C2, C3, C4 y C5, cosa que ningún
//   instrumento real hace. La tabla radia mal bajo sus modos (eficiencia ∝ f⁴), el plectro pellizca a una fracción mucho
//   menor de la cuerda en el grave (línea recta del saltador, cuerdas largas: menos fundamental), y en el contrapunto el
//   bajo lleva la armonía, no el volumen. resp.gain [0.50,0.62,...] → [0.32,0.52,...]: −3,9 dB en F1 y −1,5 en C3, agudo
//   intacto. Sólo toca las CUERDAS: resp.gain se aplica al `car` (camino tonal), y el golpe de 160 Hz y el sacudón de banda
//   van directo a la salida — la cajita de cubiertos queda donde estaba. El grave cobra su presencia en duración (22 s).
// 2026-08-18 (Capa 1, Sesión B — la cuerda pulsada de la familia): ARPA, GUITARRA y PIZZICATO (solo y sección) pasan del
//   preset plano (escalar, mode 'harm', sin anclas) al molde del Grand/clavecín, con las tablas §7 de la deep-research
//   (_Investigacion-instrumentos/cuerdas/arpa|guitarra|pizzicato-investigacion.md). Sin tocar el motor: todo es a4 + inharm.
//   harp: anclas Cb1·C3·F4·G7 (entorchado→tripa en C3, donde están T1/A0 de la caja), decay [17,9,4.5,0.5] (Le Carrou: 8 s
//     medidos a 123 Hz), B [2e-4,1.2e-4,4e-4,6e-4] (escrito ×100 como el piano), banco de caja 134/157/270/420 Hz (Le Carrou
//     2010), thump de tapa fijo en 150 Hz, glide +20 c/100 ms (Woodhouse), duet de cuerdas simpáticas a −18 dB. SIN
//     env.release: el arpa no tiene apagador, la cuerda muere sola (l.v.); el étouffé es técnica, no default (relNoise queda
//     declarado para cuando una técnica lo pida — el motor solo lo usa si hay release).
//   guitar: anclas E2·D3·G3·B5 con el ESCALÓN entorchado→liso (B ×7 en la 3ª: 0.0017 → 0.012, Woodhouse Guitar II tabla I),
//     decay [9.5,7.5,6.2,1.1], banco de caja 100/200/250/400/520 Hz (Christensen & Vistisen + Woodhouse), también l.v.
//   pizzicato (solo) y strings_pizzicato (sección): el puente alto drena rápido — decay corto y decayTilt alto (0.5→0.8, los
//     agudos mueren en 50–100 ms), thump del A0 en onset.freq, y release declarado (en pizz orquestal el intérprete apaga:
//     30–80 ms con relNoise). La sección suma trio + duet ±8 c a 0.8, atk ×2, hit −4 dB y decay ×1.3 (Rasch: asincronía
//     30–50 ms en conjuntos). El `pizzicato` genérico interpola cello (G2·D3) → violín (D4·G5) sobre su propio rango.
//   Nodos nuevos del Lexicon (harp · guitar · pizzicato · strings_pizzicato): hasta hoy caían en la ley de la familia
//   `cuerdas`, que es la del ARCO (el brillo abre con la fuerza). El pulsado es casi lineal (Woodhouse): el dedo y el punto
//   de pulsado fijan la forma espectral, no la fuerza; lo que crece con la dinámica es el golpe y el ruido de contacto.
//   Pendiente del motor (informes §7): peine a/L del punto de pulsado · selector de cuerda · spread de onset de sección ·
//   buzz de pedal · Bartók. Todo BANDERA hasta el A/B de oído en el Register.
// 2026-08-19 (Mario, el `p` del arranque de las Sinfonías: «me parece que arranca bastante más alto»): los DOS
//   clavecines pasan de class.velRangeDb 3 a 6 — afinado de oído sobre la Sinfonía 3. Con 3, el `p` quedaba a 0,73 dB
//   del mf y toda la escala ppp→fff medía 2,6 dB: el instrumento no tiene dinámica por tecla, pero tampoco es sordo
//   (la velocidad de la tecla cambia el punto y la firmeza del pellizco). Con 6, `p` cae 1,46 dB, `pp` 2,22 y el rango
//   llega a 5,2 dB — sigue siendo un clavecín (el lineal, sin la clave, daría `p` a −4,3 y 18 dB de rango: eso es un
//   piano). Efecto de borde buscado: velRangeDb también acota lo que hacen INT·BEAMS y las velocities bajas del import,
//   así que el decrescendo del grupo barrado —casi anulado con 3— vuelve a oírse.
// 2026-08-17 (Capa 1 del plan de sonido — la familia física del piano): NACE «Harpsichord» (harpsichord, teclados) con el molde
//   del Grand y la deep-research citada (_Investigacion-instrumentos/teclados/clavecin-investigacion.md): 8' fondo, anclas
//   F1·C3·C5·F6 (bajo de latón · quiebre latón→hierro y valle de B · treble · tope), decay [22,11,3.5,1.0], apagador de paño
//   [0.06…0.02] con relNoise (el «tac» del salterio), bloom débil, decayTilt 0.7 (el latón mata antes los parciales altos), B en
//   valle [2e-5,1e-5,7e-5,3e-4] (escrito ×100 como el piano: [0.002,0.001,0.007,0.03]), hit [0.20…0.35] con knock fijo en 160 Hz (MacRitchie & Nuti 172 Hz), src.tilt −12 (pluck a
//   1/8: más armónicos que el piano), banco de tapa 40–2500 Hz (Savage 1992 / F&B). SIN dinámica por tecla: el Lexicon lo
//   aplana (nodo harpsichord). Registración (8'+8', 4', laúd, buff) y latencia del pluck: pendientes del motor. Sumado a
//   MM_INSTRUMENT_SECTIONS (Harp & Keyboards). Todo BANDERA hasta el A/B de oído en el Register.
//   2026-08-17 (oído de Mario, Sinfonía 9): «los bajos con más tac y menos sonido» → gain grave 0.95/1.0 → 0.80/0.90 ·
//   hit grave 0.20/0.22 → 0.38/0.32 · relNoise grave 0.20/0.18 → 0.32/0.26 · air grave ↑; class.detache 0.15 (non legato).
//   2026-08-17 (2º): «las negras un tris más cortas · las cuerdas graves menos sonoras» → detache 0.22 · gain grave 0.72/0.88 ·
//   la tapa no radia bajo ~60–80 Hz (F&B, Helmholtz 37 Hz): el 40 Hz +4 dB del banco pasa a 50 Hz −6 dB (fundamental vaciada, como el Grand).
//   2026-08-17 (3º, Mario): DOS clavecines — «Harpsichord (Tonal)» (harpsichord: la afinación de la casa, 3ⁿ/2ᵐ por deletreo, sin
//   lobo) y «Harpsichord (Well-tempered)» (harpsichord_wt: clon con class.temperament 'werckmeister3' — el Keyboard re-afina cada
//   nota a la tecla del temperamento, A=440 fijo). Contratos nuevos del Keyboard: class.velRangeDb · class.temperament · class.detache.
//   2026-08-17 (4º, Mario: «el sustain de las negras debe sonar como el de las corcheas — pluma de ganso vs avestruz»): los parciales
//   altos del bajo vivían segundos (decayTilt 0.7 con decay 22 s → k=8 en 4.5 s) y la negra tenía tiempo de mostrar la panza que la
//   corchea no llegaba a mostrar. decayTilt pasa a a4 [3.0,2.2,1.0,0.7] (Keyboard lo interpola) y el sfumato del filtro se acorta
//   (t 1.2 → 0.4 s, env 0.5): el brillo del pluck cae en las primeras décimas en TODA figura.
//   2026-08-17 (5º, oído de Mario: «mejor, un poco seco, perdió brillo en agudos» + «¿el clavecín tiene techo de dB?»): decayTilt
//   [2.4,1.8,0.9,0.6] · filt cut 8 / t 0.55 / env 0.45 · tilt agudo 0.92/0.90 · y NIVEL PROPIO del instrumento: gain ×0.7 en las
//   cuatro anclas (Fletcher & Beebe: un 8' ≈ 70 dB(A) a 2 m, el piano mf ≈ 80): a VOL igual el clavecín queda debajo del piano —
//   subir VOL es acercar el oído, no agrandar el plectro.
//   2026-08-17 (6º, Mario con un wav de clavecín real: «de lejos suena como sacudir el cajón de los cubiertos, y eso es lo
//   característico» — y debajo de A4 el nuestro no lo tenía): un G2 real tiene líneas hasta 10 kHz (parcial 60) y la banda 3–9 kHz
//   a solo −10 dB de los medios; el motor tenía 16 parciales fijos y corte 8·f0 (G2: nada sobre 1.6 kHz). Contratos nuevos del
//   Keyboard: src.partials (tope por voz, default 16) y filt.cut a4. Clavecines: partials 48 · cut [48,32,8,8] (F1 → 2.1 kHz,
//   C3 → 4.2 kHz; C5/F6 como estaban) · tilt grave 0.98/0.96 → 0.80/0.86 (los 48 caen −2 dB/oct, no pared) · src.phaseMs 2 (48
//   parciales en fase daban picos 4× el rms y el limitador bombeaba; con el arranque revuelto el pico vuelve al del piano). Agudo intacto.
//   2026-08-17 (7º, Mario: «CH1 y CH2 bien; CH3 bajo E4 suena a bajo eléctrico, más cajón de cubiertos»): tilt grave 0.94/0.94 ·
//   decayTilt grave 1.6/1.4 (los parciales altos del bajo viven más) · cut [64,48,8,8] · tapa: 50 Hz −10 dB, 75 Hz 0 dB (fundamental
//   del bajo más vaciada — el «eléctrico» era fundamental gorda y poco sizzle). C5/F6 intactos.
//   2026-08-17 (8º, Mario: «oigo poco cambio; no oigo la vibración metálica bajo E4»): el zumbido metálico del agudo lo hace la
//   INARMONICIDAD (B agudo 7e-5/3e-4: los parciales altos se estiran y baten entre sí y con las voces vecinas); el grave tenía B
//   2e-5/1e-5 = cuerda perfectamente armónica = bajo eléctrico. inharm grave 0.002/0.001 → 0.012/0.008 (B 1.2e-4/8e-5: el parcial
//   40 se corre ~9 %, batido metálico). Los 48 parciales de un G2 llegan a 4.7 kHz; el real tiene líneas hasta 10 kHz (k≈100).
//   2026-08-17 (9º, Mario, «probemos»): 8'+8' del grave — src.duet [+3 c, gain 0.6] en F1/C3 (0 en C5/F6): la segunda cuerda
//   del unísono bate en los primeros 12 parciales (Weinreich); es la 2ª de las tres fuentes del «cajón» (la simpática, SympBank, fase 2).
//   2026-08-17 (10º, Mario: «el zumbido de E4 arriba es otra cosa que vibra igual sea cual sea la nota, y eso falta abajo»): en el
//   agudo los parciales 8-16 caen siempre en la MISMA banda (3-8 kHz) — un sizzle fijo; el grave con tope 48 no llegaba (G2 → 4.7 kHz).
//   src.partials pasa a a4 [96,64,16,16] (Keyboard: escalar o a4, tope 96) y cut [96,64,8,8]: G2 llega a ~8 kHz con su propio sizzle
//   en la banda del agudo; el agudo no cambia. La versión física de «otra cosa que vibra igual» es la simpática (SympBank, fase 2).
// 2026-08-15 (Score V2.7.71 · Keyboard V2.3.13, checkpoint): PIANO (GRAND) — etiquetas «Piano (Grand)» (piano_steinway) y
//   «Piano (Upright)» (piano); Grand corregido contra la literatura (agente con 14 fuentes primarias): tilt/atk high-top,
//   hit por registro [0.35,0.42,0.55,0.75], inharm [0.016,0.017,0.085,1.5] (Steinway D, interpolado en LOG por el motor),
//   duet/trio en Hz casi constantes (cents que BAJAN con la altura, A0 monocordio), decay [15,8.7,2.6,0.42], thump 16 ms.
//   NACE piano_grand_tonal «Piano (Grand · Tonal)»: clon del Grand con cuerdas ideales (B al 10%, unísonos enganchados ±0.08 c)
//   para la afinación 3ⁿ/2ᵐ (coincidencias exactas de parciales); fase 2 = SympBank. Sumado a MM_INSTRUMENT_SECTIONS.
// 2026-07-17 2º (Keyboard V2.3.6, escucha de Mario): relNoise por MECÁNICA — piano (carácter vertical, apagadores
//   ruidosos) [0.3, 0.22, 0.15, 0.09] · piano_steinway (gran cola del Ravel, mecánica silenciosa) [0.16, 0.12,
//   0.08, 0.05]. Además el motor escala el soplo por recorrido de la tecla (nota corta ≈ sin soplo) y ×0.35 si la
//   suelta es dentro de un ligado (el dedo camina). Antes ambos [0.4, 0.3, 0.2, 0.12] — "demasiado notorio acá".
// 2026-07-17 (Keyboard V2.3.5): "pfh" del fieltro — env.relNoise en los dos pianos (opt-in):
//   el apagador que cae sopla, PROPORCIONAL a cuánto vibraba la cuerda al soltar (nivel relativo al valor computado
//   de la voz); frontera física f<1480 Hz (F#6, fin de apagadores) · duración = release×0.12 por registro (el grave
//   frena largo y sopla largo) · solo el NOTE_OFF musical (stopVoice) — pool y retrigger no soplan. A afinar de oído.
// 2026-07-15 (render Keyboard V2.3.1): pianos a oído (bloque 2, A/B vs Yamaha C2 de Mario) — inharm A0 0.030→0.045
//   (filo metálico de la entorchada en C2–G2) · src.duet [1.2, 0.85] (segunda cuerda del unísono; batido Weinreich) ·
// 2026-07-16 (nota, experimento tricordio — Mario): pianos con duet POR REGISTRO (cents [0.9,1.2,1.4,1.6] · gain
//   [0.8,0.95,0.9,0.85] — C2 bicordio con el G4 respirando un poco más) + src.trio = TERCERA CUERDA (cents
//   NEGATIVOS [-0.8,-1.0,-1.2,-1.4] — detune asimétrico Weinreich — · gain [0,0.6,0.9,0.85]); la 3ª cuerda tiene
//   frontera física en el motor (~C3, 126 Hz): abajo nunca suena, por curva que haya. Normalización a 2-3 cuerdas
//   · release (apagador) medio más respirado [1.5, 0.6, 0.16, 0.05] (antes 0.5/0.1/0.04): la resonancia del
//   acorde suelto se oye un poquito bajo el ataque siguiente (pedido M1 B2.5 vs acorde de B2, sesión Ravel).
//   · onset.ms de los pianos 3→10 y 2→9: una ráfaga de 2-3ms ES un click (salpica todo el espectro) — se oía
//   como "crujidito" en el bajo repetido (M1 B2.5) y en las notas cortas (M7 B3); a 9-10ms el golpe del
//   martillo suena a golpe sordo, no a púa (el thump real dura 10-25ms). El nivel (hit) no se tocó.
//   en el Keyboard (_duetN) — el preset no sube de volumen. ·
//   onset.pitch 3.5 cents / 45 ms (glide de tensión del martillo) · env.decayTilt 0.2 (cola se purifica hacia la
//   fundamental sin matar el G4 emergente de C2) · release (apagador) [0.28,…]→[1.5, 0.5, 0.1, 0.04] (el apagador
//   grave FRENA, no corta — el MI del vals del Ravel muere bajo los acordes hacia el pulso 2.5).
// 2026-07-14 (checkpoint Keyboard V2.3.0): piano y piano_steinway NUMERIZADOS (track teclados F3+F4 — investigación
//   _Investigacion-instrumentos/teclados/ + afinado de oído sobre el Ravel): anchors A0·C3·C5·C8 · mode inharm +
//   curva V de B [0.03,0.013,0.1,1.5] (gran cola, ambos tras A/B) · decay [15,4.8,1.7,0.42] · release (apagador)
//   [0.28,0.15,0.075,0.025] · bloom [1.2,0.9,0.5,0.25] · atk [0.2,0.12,0.1,0.1] · onset.freq 120 (thump) ·
//   form.bank con corte [35,-10,1.4] (fundamental no radiado del grave profundo).
// 2026-07-03: banco actualizado con la investigación de Mario (41 presets renovados + 9 nuevos = 55) ·
// orden canónico compartido con las listas investigacion / inv-dinamica · previo en _history (PRE-INVESTIGACION)
// Valores de arranque traducidos de acústica de instrumentos (formantes, odd/even, ruido,
// ataque, registro) — Fletcher&Rossing, Meyer, UNSW/Wolfe, Euphonics, Rossing perc., Sundberg voz.
// Punto de partida para afinar de oído en el Register. Carga via <script src> (file:// ok).
// 2026-06-17 (render Score .96): flauta numerizada (air/vib/f1/char.noise); 10 correcciones de rango SONANTE
//   (piccolo D6–C9 · kena G4–A6 · oboe→G6 · corno inglés→C6 · fagot→E5 · contrafagot→D3 · gamba D2–D5 ·
//    xilófono F5–C9 · guitarra→B5 · contrabajo→G3).
// 2026-06-17 (render Score .97): flauta en Sol — grave "hueco" (air 0.30/0.24/0.18/0.20 · tilt 0.28/0.34/0.30/0.25 · f1 700/+3).
// 2026-06-18 (checkpoint Score .100): corno hi F5→A5 sonante (DO6→MI6 escrito) — techo del repertorio (Strauss/Schumann),
//   logro del corno doble (post-R-K). Ref: _Investigacion-instrumentos/metales/corno-rango-agudo-investigacion.md
// 2026-06-19 (render Score .102): cuerpo por BANCO de resonancias (form.bank → motor en serie): violín
//   (formantes 470/3000 + 6 res · ataque de arco ~90 ms medido) · contrabajo (6 res graves · arco lento ~110 ms).
//   Flauta en Sol: aire movido al registro grave (0.42→0.20). Medido de WAV reales (violin.wav / bass.wav).

// 2026-09-08 (Mario: «igualarlas en las claves que no lo declaren para tener una misma base de trabajo»).
// BASE DEL RANGO DINÁMICO. La escalera del Score (POINT_DYN_VEL: ppp 6 · pp 9 · p 16 · mp 29 · mf 50 ·
// f 59 · ff 74 · fff 86 sobre 127) con la ley LINEAL —la que corre cuando la clave no declara
// class.velRangeDb— deja los cuatro matices de arriba dentro de 4,7 dB, en pasos de 1,3 a 2,0: por
// debajo de lo que se distingue en contexto. Con este número, las claves de régimen SOSTENIDO que no
// declaran el suyo corren la misma ley exponencial que el fagot, el saxo y las cuerdas: mismo mf que
// antes (−8,9 dB contra −8,1) y 7,1 dB de mf a fff en vez de 4,7.
// Es una BASE, no una medición: el número que cada clave se merezca sale de su informe o del oído, y
// cuando lo declare deja de usar ésta. Los regímenes percusivo/pulsado/percutido NO la usan — ahí la
// velocity es el golpe o la pulsación y su ley ya se afinó de oído (piano, arpa, clavecín 6 dB).
window.MM_VELRANGE_SOSTENIDO = 25;

window.MM_PRESETS_DEFAULT = {
  "piccolo": {
    "name": "piccolo",
    "class": {
      "bal": 2,
      "family": "maderas",
      "instrument": "piccolo",
      "label": "Piccolo",
      "regime": "sostenido",
      "articulations": [
        "legato",
        "staccato",
        "tenuto"
      ]
    },
    "lo": "D5",
    "hi": "C8",
    "resp": {
      "gain": [
        0.7,
        0.85,
        1.0,
        0.95
      ],
      "air": [
        0.15,
        0.2,
        0.25,
        0.3
      ],
      "tilt": [
        0.9,
        0.85,
        0.8,
        0.75
      ],
      "atk": [
        1.0,
        0.9,
        0.8,
        0.7
      ],
      "vib": [
        3,
        6,
        8,
        6
      ],
      "vibRate": [
        6.0,
        6.0,
        6.0,
        6.0
      ],
      "oddEven": [
        0.5,
        0.5,
        0.5,
        0.5
      ]
    },
    "src": {
      "tilt": -14.0,
      "inharm": 0.01,
      "mode": "harm",
      "nb": [
        2000,
        1.2
      ]
    },
    "form": {
      "f1": [
        4000,
        6.0,
        1.2
      ],
      "f2": [
        0,
        0,
        0
      ]
    },
    "filt": {
      "cut": 8.0,
      "q": 0.75,
      "env": 0.0,
      "t": 0.05
    },
    "env": {
      "decay": 0.08,
      "sustain": 1
    },
    "char": {
      "noise": 0.18,
      "noiseAM": 0.08
    },
    "onset": {
      "hit": 0.04,
      "air": 0.2,
      "ms": 25
    }
  },
  // 2026-09-01 — flauta, paso 1 (Bartók N123, las quintas): resp.tilt [0.95 0.90 0.85 0.80] → [0.95 0.82 0.78 0.60] — la referencia
  //   coincide en el grave (0.94) y cierra hacia arriba (0.75 · 0.72 · 0.43, flute/medido-flute-2026-09-01); a mitad de camino en el
  //   agudo. La ficha era la más sana de las maderas. Todo lo demás intacto.
  // 2026-09-08 — flauta, color (medido-flute-2026-09-01 + maderas/flauta-addendum-2026-08-23.md): form.f2 9000 → 1550
  //   (+4, Q 1.6) — el pico medido mas fuerte, +9.6 dB sobre la recta, es el amontonamiento debajo del cutoff de agujeros;
  //   el 9000 del riser nunca se midio (el whitening llega a 6 kHz) y era BANDERA. Con el 1550 puesto, la curva resp.tilt
  //   que puso el oido el 01-09 cae sobre el centroide medido (pide 0.95/0.80/0.83/0.58): el oido estaba compensando un
  //   formante que faltaba. resp.air [0.18 0.14 0.12 0.10] → [0.06 0.14 0.16 0.05]: la pendiente estaba invertida — medido
  //   0.06/0.13/0.15/0.04, la flauta es limpia en el grave y soplada en el medio (ruido de chorro ∝ Uj², misma direccion
  //   que la flauta en Sol §5). resp.atk 65/60/55/50 ms → 95/90/75/60: la subida medida es 102/131/112/250 ms.
  "flute": {
    "name": "flute",
    "class": {
      "bal": -2,
      "family": "maderas",
      "instrument": "flute",
      "label": "Flute",
      "regime": "sostenido",
      "articulations": [
        "legato",
        "staccato",
        "tenuto"
      ]
    },
    "lo": "C4",
    "hi": "C7",
    "resp": {
      "gain": [
        0.85,
        1.0,
        1.0,
        0.9
      ],
      "air": [
        0.06,
        0.14,
        0.16,
        0.05
      ],
      "tilt": [
        0.95,
        0.82,
        0.78,
        0.6
      ],
      "atk": [
        1.9,
        1.8,
        1.5,
        1.2
      ],
      "vib": [
        4,
        8,
        10,
        8
      ],
      "vibRate": [
        5.2,
        5.5,
        5.6,
        5.8
      ],
      "oddEven": [
        0.5,
        0.5,
        0.5,
        0.5
      ]
    },
    "src": {
      "tilt": -17.0,
      "inharm": 0.01,
      "mode": "harm",
      "nb": [
        2000,
        1.2
      ]
    },
    "form": {
      "f1": [
        800,
        3,
        1.4
      ],
      "f2": [
        1550,
        4,
        1.6
      ]
    },
    "filt": {
      "cut": [
        7,
        4,
        1.7,
        1.3
      ],
      "q": 0.7,
      "env": 0.0,
      "t": 0.08
    },
    "env": {
      "decay": 0.09,
      "sustain": 1
    },
    "char": {
      "noise": 0.3,
      "noiseAM": 0.05
    },
    "onset": {
      "hit": 0.03,
      "air": 0.15,
      "ms": 30
    }
  },
  "alto_flute_g": {
    "name": "alto_flute_g",
    "class": {
      "family": "maderas",
      "instrument": "alto_flute",
      "label": "Alto Flute (G)",
      "regime": "sostenido",
      "articulations": [
        "legato",
        "staccato",
        "tenuto"
      ]
    },
    "lo": "G3",
    "hi": "G6",
    "resp": {
      "gain": [
        1.0,
        0.95,
        0.85,
        0.7
      ],
      "air": [
        0.16,
        0.22,
        0.32,
        0.44
      ],
      "tilt": [
        0.18,
        0.24,
        0.32,
        0.4
      ],
      "atk": [
        1.4,
        1.4,
        1.2,
        1.2
      ],
      "vib": [
        4,
        8,
        10,
        8
      ],
      "vibRate": [
        4.75,
        4.75,
        4.75,
        4.75
      ],
      "oddEven": [
        0.5,
        0.5,
        0.5,
        0.5
      ]
    },
    "src": {
      "tilt": -11.5,
      "inharm": 0.0,
      "mode": "harm",
      "nb": [
        2000,
        1.2
      ]
    },
    "form": {
      "f1": [
        1700,
        0,
        1.0
      ],
      "f2": [
        0,
        0,
        0
      ]
    },
    "filt": {
      "cut": 6.5,
      "q": 0.7,
      "env": 0.0,
      "t": 0.1
    },
    "env": {
      "decay": 0.1,
      "sustain": 1
    },
    "char": {
      "noise": 0.08,
      "noiseAM": 0.03
    },
    "onset": {
      "hit": 0.02,
      "air": 0.1,
      "ms": 60
    }
  },
  // 2026-09-01 — oboe, paso 1 (Bartók N123, los tercios de M8+): resp.tilt [0.72 0.75 0.62 0.42] → [0.50 0.43 0.30 0.20], a mitad
  //   de camino hacia la referencia medida ([0.29 0.12 0 0], oboes/medido-oboe-2026-09-01 con src −9) — la ficha era casi pendiente
  //   cero, el instrumento más brillante del banco; la caña real es más oscura que la caricatura. src −9 y formantes (1400/2500) intactos.
  //   Paso 2 (Mario: «el oboe puede ser más nasal»): el formante principal 1400 Hz de [+7, Q 3] → [+9, Q 3.5] — más alto y más
  //   angosto, la vocal nasal del oboe. El 2500 queda.
  "oboe": {
    "name": "oboe",
    "class": {
      "bal": 0,
      "family": "maderas",
      "instrument": "oboe",
      "label": "Oboe",
      "regime": "sostenido",
      "articulations": [
        "legato",
        "staccato",
        "tenuto"
      ]
    },
    "lo": "Bb3",
    "hi": "G6",
    "anchors": [
      "Bb3",
      "C5",
      "A5",
      "G6"
    ],
    "resp": {
      "gain": [
        0.95,
        1.0,
        0.92,
        0.72
      ],
      "air": [
        0.06,
        0.04,
        0.04,
        0.07
      ],
      "tilt": [
        0.5,
        0.43,
        1.0,
        0.65
      ],
      "atk": [
        2.4,
        1.0,
        0.8,
        0.68
      ],
      "vib": [
        2.2,
        1.5,
        2.9,
        4.7
      ],
      "vibRate": [
        5.0,
        5.4,
        5.6,
        5.6
      ],
      "oddEven": [
        0.5,
        0.5,
        0.5,
        0.5
      ]
    },
    "src": {
      "tilt": -9.0,
      "inharm": 0.0012,
      "mode": "harm",
      "nb": [
        2000,
        1.2
      ]
    },
    "form": {
      "f1": [
        1400,
        13,
        4.5
      ],
      "f2": [
        2500,
        4.0,
        2.5
      ],
      "bank": [
        [
          1400,
          13,
          4.5
        ],
        [
          2500,
          4,
          2.5
        ],
        [
          240,
          -24,
          3.0
        ],
        [
          2000,
          -12,
          1.0
        ],
        [
          3200,
          -12,
          1.0
        ]
      ]
    },
    "filt": {
      "cut": [
        7.7,
        3.4,
        2.0,
        1.15
      ],
      "q": 0.8,
      "env": -0.6,
      "t": 0.08
    },
    "env": {
      "decay": 0.05,
      "sustain": 1,
      "release": [
        0.1,
        0.07,
        0.05,
        0.03
      ]
    },
    "char": {
      "noise": 0.05,
      "noiseAM": 0.02
    },
    "onset": {
      "hit": [
        0.16,
        0.08,
        0.07,
        0.09
      ],
      "air": 1.0,
      "ms": [
        120,
        45,
        30,
        25
      ]
    }
  },
  "english_horn": {
    "name": "english_horn",
    "class": {
      "family": "maderas",
      "instrument": "english_horn",
      "label": "English Horn",
      "regime": "sostenido",
      "articulations": [
        "legato",
        "staccato",
        "tenuto"
      ]
    },
    "lo": "E3",
    "hi": "C6",
    "anchors": [
      "E3",
      "F4",
      "D5",
      "F5"
    ],
    "resp": {
      "gain": [
        0.85,
        1.0,
        0.95,
        0.8
      ],
      "air": [
        0.06,
        0.05,
        0.05,
        0.06
      ],
      "tilt": [
        0.55,
        0.48,
        0.35,
        0.25
      ],
      "atk": [
        1.1,
        1.0,
        0.9,
        0.8
      ],
      "vib": [
        8,
        16,
        20,
        14
      ],
      "vibRate": [
        5.2,
        5.4,
        5.5,
        5.5
      ],
      "oddEven": [
        0.5,
        0.5,
        0.5,
        0.5
      ]
    },
    "src": {
      "tilt": -11.0,
      "inharm": 0.0012,
      "mode": "harm",
      "nb": [
        2000,
        1.2
      ]
    },
    "form": {
      "f1": [
        950,
        7.0,
        3.0
      ],
      "f2": [
        1900,
        4.0,
        2.5
      ]
    },
    "filt": {
      "cut": 6.5,
      "q": 0.9,
      "env": 0.4,
      "t": 0.027
    },
    "env": {
      "decay": 0.06,
      "sustain": 1
    },
    "char": {
      "noise": 0.05,
      "noiseAM": 0.03
    },
    "onset": {
      "hit": 0.05,
      "air": 0.06,
      "ms": [
        144,
        54,
        36,
        30
      ]
    }
  },
  // 2026-09-01 — clarinete, paso 1 (Bartók N123; Mario: «le falta hueco»): oddEven [0.12 0.20 0.45 0.50] → [0.90 0.85 0.65 0.55].
  //   En el motor 1 = solo IMPARES y 0 = pares dominantes: la ficha tenía el chalumeau al revés (pares más fuertes). La referencia
  //   mide 0.86-0.94 abajo con la misma métrica (clarinets/medido-clarinet-2026-09-01) — el «hueco» del clarinete SON los impares;
  //   sobre el quiebre los pares vuelven (0.63 medido en G6). Lo demás intacto.
  "clarinet": {
    "name": "clarinet",
    "class": {
      "bal": 0,
      "family": "maderas",
      "instrument": "clarinet",
      "label": "Clarinet",
      "regime": "sostenido",
      "articulations": [
        "legato",
        "staccato",
        "tenuto"
      ]
    },
    "lo": "D3",
    "hi": "A6",
    "resp": {
      "gain": [
        0.95,
        0.88,
        1,
        0.9
      ],
      "air": [
        0.08,
        0.09,
        0.05,
        0.07
      ],
      "tilt": [
        0.82,
        0.7,
        0.88,
        0.8
      ],
      "atk": [
        1.1,
        1.0,
        0.85,
        0.7
      ],
      "vib": [
        0.0,
        0.0,
        0.0,
        0.0
      ],
      "vibRate": [
        5.5,
        5.5,
        5.5,
        5.5
      ],
      "oddEven": [
        0.9,
        0.85,
        0.65,
        0.55
      ]
    },
    "src": {
      "tilt": -12.0,
      "inharm": 0,
      "mode": "harm",
      "nb": [
        2000,
        1.2
      ]
    },
    "form": {
      "f1": [
        1400,
        4,
        1.5
      ],
      "f2": [
        2100,
        2,
        3
      ]
    },
    "filt": {
      "cut": 6,
      "q": 0.7,
      "env": 0.0,
      "t": 0.08
    },
    "env": {
      "decay": 0.06,
      "sustain": 1
    },
    "char": {
      "noise": 0.05,
      "noiseAM": 0.03
    },
    "onset": {
      "hit": 0.03,
      "air": 0.06,
      "ms": 25
    },
    "anchors": [
      "D3",
      "F4",
      "A4",
      "G6"
    ]
  },
  "clarinet_a": {
    "name": "clarinet_a",
    "class": {
      "bal": 0,
      "family": "maderas",
      "instrument": "clarinet_a",
      "label": "Clarinet in A",
      "regime": "sostenido",
      "articulations": [
        "legato",
        "staccato",
        "tenuto"
      ]
    },
    "lo": "C#3",
    "hi": "G#6",
    "resp": {
      "gain": [
        0.95,
        0.88,
        1,
        0.9
      ],
      "air": [
        0.08,
        0.09,
        0.05,
        0.07
      ],
      "tilt": [
        0.82,
        0.7,
        0.88,
        0.8
      ],
      "atk": [
        1.1,
        1.0,
        0.85,
        0.7
      ],
      "vib": [
        0.0,
        0.0,
        0.0,
        0.0
      ],
      "vibRate": [
        5.5,
        5.5,
        5.5,
        5.5
      ],
      "oddEven": [
        0.9,
        0.85,
        0.65,
        0.55
      ]
    },
    "src": {
      "tilt": -12.0,
      "inharm": 0,
      "mode": "harm",
      "nb": [
        2000,
        1.2
      ]
    },
    "form": {
      "f1": [
        1400,
        4,
        1.5
      ],
      "f2": [
        2100,
        2,
        3
      ]
    },
    "filt": {
      "cut": 6,
      "q": 0.7,
      "env": 0.0,
      "t": 0.08
    },
    "env": {
      "decay": 0.06,
      "sustain": 1
    },
    "char": {
      "noise": 0.05,
      "noiseAM": 0.03
    },
    "onset": {
      "hit": 0.03,
      "air": 0.06,
      "ms": 25
    },
    "anchors": [
      "D3",
      "F4",
      "A4",
      "G6"
    ]
  },
  "bass_clarinet": {
    "name": "bass_clarinet",
    "class": {
      "bal": -1,
      "family": "maderas",
      "instrument": "bass_clarinet",
      "label": "Bass Clarinet",
      "regime": "sostenido",
      "articulations": [
        "legato",
        "staccato",
        "tenuto"
      ]
    },
    "lo": "Bb1",
    "hi": "F5",
    "resp": {
      "gain": [
        1,
        0.92,
        0.95,
        0.85
      ],
      "air": [
        0.11,
        0.1,
        0.07,
        0.08
      ],
      "tilt": [
        0.85,
        0.72,
        0.8,
        0.75
      ],
      "atk": [
        1.35,
        1.15,
        0.95,
        0.85
      ],
      "vib": [
        0.0,
        0.0,
        0.0,
        0.0
      ],
      "vibRate": [
        5,
        5,
        5.2,
        5.2
      ],
      "oddEven": [
        0.9,
        0.85,
        0.65,
        0.55
      ]
    },
    "src": {
      "tilt": -14.0,
      "inharm": 0,
      "mode": "harm",
      "nb": [
        2000,
        1.2
      ]
    },
    "form": {
      "f1": [
        750,
        4,
        1.5
      ],
      "f2": [
        1050,
        2,
        3
      ]
    },
    "filt": {
      "cut": 4,
      "q": 0.7,
      "env": 0.0,
      "t": 0.1
    },
    "env": {
      "decay": 0.08,
      "sustain": 1
    },
    "char": {
      "noise": 0.07,
      "noiseAM": 0.04
    },
    "onset": {
      "hit": 0.06,
      "air": 0.1,
      "ms": 30
    },
    "anchors": [
      "Bb1",
      "Eb3",
      "A3",
      "F5"
    ]
  },
  // 2026-09-01 — fagot, paso 1 (Bartók N123, las sextas que abren el movimiento): resp.tilt [0.85 0.80 0.65 0.35] → [1.00 0.75 0.40 0.20]
  //   — la forma medida (fagotes/medido-bassoon-2026-09-01 con src −8: 1.17 · 0.73 · 0.15 · 0.02, tomada a mitad de camino arriba):
  //   la caña gorda vive ABAJO (más brillante que la ficha en Bb1) y se cierra mucho antes hacia el agudo. Formantes (600 medido ≈
  //   470 del informe) y src intactos.
  //   Paso 2 (Mario: «no tienen sonido de fagot, les falta tudel y mucho más hueco»): el TUDEL es el formante de 440-500 Hz —
  //   la vocal «o» del fagot, el andamio de todo el registro (Fletcher & Rossing; Pätynen ve la anomalía en 400-500)— y sube de
  //   [+6, Q 2] a [+9, Q 2.8] en f1 y en el bank; el HUECO es la fundamental débil del grave (la caña cierra del todo y k1 nace
  //   pobre — Wolfe/Fransson): el estante de 80 Hz baja de −6 a −11 dB. La nota vive en el formante, no en su fundamental.
  //   Paso 3 (Mario: «las dinámicas están exageradas en los bajos, ff = 96 — un fagot ni puede eso»): class.velRangeDb 22 —
  //   el sobre MEDIDO del fagot (Weinzierl 2018: ff 104 / pp 82; «a minimum of 18-22 dB for the double reeds»). La caña doble es
  //   de piso alto y techo normal: ni susurra ni grita. Con 22, ff queda +1.4 dB sobre el centro y pp −5.4 — la escalera real.
  //   Paso 4 (Mario, las entradas de fagot 1 y 2: «hay que quitarles ataque — ¿qué diferencia hace el tudel?»): el tudel es la
  //   punta del cono — el pulso de la caña pasa por el cuello angosto y llega REDONDEADO al tubo (Wolfe: «no es un accesorio»).
  //   onset.hit 0.07 → 0.03 · onset.air 0.10 → 0.05: la entrada cubierta; el picado lo sigue poniendo el gate del staccato.
  "bassoon": {
    "name": "bassoon",
    "class": {
      "bal": 0,
      "family": "maderas",
      "instrument": "bassoon",
      "label": "Bassoon",
      "velRangeDb": 22,
      "regime": "sostenido",
      "articulations": [
        "legato",
        "staccato",
        "tenuto"
      ]
    },
    "lo": "Bb1",
    "hi": "Eb5",
    "anchors": [
      "Bb1",
      "F2",
      "F3",
      "D5"
    ],
    "resp": {
      "gain": [
        0.4,
        1,
        0.84,
        0.93
      ],
      "air": [
        0.71,
        0.51,
        0.35,
        0.3
      ],
      "tilt": [
        0.74,
        0.52,
        0.14,
        0.16
      ],
      "atk": [
        1.77,
        1.29,
        0.75,
        0.51
      ],
      "vib": [
        2,
        2.5,
        2.9,
        2.5
      ],
      "vibRate": [
        4.6,
        4.9,
        5.2,
        5.4
      ],
      "oddEven": [
        0.5,
        0.5,
        0.5,
        0.5
      ]
    },
    "src": {
      "tilt": -8,
      "inharm": 0,
      "mode": "harm",
      "nb": [
        2000,
        1.2
      ]
    },
    "form": {
      "f1": [
        470,
        9,
        2.8
      ],
      "f2": [
        1250,
        3,
        2
      ],
      "bank": [
        [
          80,
          -11,
          1
        ],
        [
          470,
          9,
          2.8
        ],
        [
          1250,
          3,
          2
        ],
        [
          -1,
          -12,
          1.1
        ],
        [
          -3,
          12,
          1.6
        ]
      ]
    },
    "filt": {
      "cut": [
        25,
        6.5,
        2.6,
        1.7
      ],
      "q": 0.9,
      "env": 0,
      "t": 0.1
    },
    "env": {
      "decay": 0.06,
      "sustain": 1,
      "release": [
        0.1,
        0.08,
        0.05,
        0.04
      ]
    },
    "char": {
      "noise": 0.1,
      "noiseAM": 0.05
    },
    "onset": {
      "hit": 0.03,
      "air": 0.9,
      "ms": 120
    }
  },
"contrabassoon": {
    "name": "contrabassoon",
    "class": {
      "family": "maderas",
      "instrument": "contrabassoon",
      "label": "Contrabassoon",
      "regime": "sostenido",
      "articulations": [
        "legato",
        "staccato",
        "tenuto"
      ]
    },
    "lo": "Bb0",
    "hi": "D4",
    "anchors": [
      "Bb0",
      "F1",
      "F2",
      "D4"
    ],
    "resp": {
      "gain": [
        0.9,
        1.0,
        1.0,
        0.8
      ],
      "air": [
        0.2,
        0.14,
        0.1,
        0.08
      ],
      "tilt": [
        0.88,
        0.82,
        0.68,
        0.38
      ],
      "atk": [
        3.4,
        2.4,
        1.4,
        0.9
      ],
      "vib": [
        0.0,
        0.0,
        0.0,
        0.0
      ],
      "vibRate": [
        4.5,
        4.8,
        5.0,
        5.2
      ],
      "oddEven": [
        0.5,
        0.5,
        0.5,
        0.5
      ]
    },
    "src": {
      "tilt": -9.0,
      "inharm": 0,
      "mode": "harm",
      "nb": [
        2000,
        1.2
      ]
    },
    "form": {
      "f1": [
        240,
        6,
        2.0
      ],
      "f2": [
        640,
        3,
        2.0
      ],
      "bank": [
        [
          45,
          -7,
          1.0
        ],
        [
          240,
          6,
          2.0
        ],
        [
          640,
          3,
          2.0
        ]
      ]
    },
    "filt": {
      "cut": [
        38,
        25,
        13,
        4
      ],
      "q": 0.9,
      "env": 0.18,
      "t": 0.14
    },
    "env": {
      "decay": 0.08,
      "sustain": 1,
      "release": [
        0.16,
        0.12,
        0.08,
        0.06
      ]
    },
    "char": {
      "noise": 0.16,
      "noiseAM": 0.08
    },
    "onset": {
      "hit": 0.09,
      "air": 0.16,
      "ms": 45
    }
  },
  "saxophone": {
    "name": "saxophone",
    "class": {
      "bal": 5,
      "family": "maderas",
      "instrument": "saxophone",
      "label": "Saxophone",
      "regime": "sostenido",
      "articulations": [
        "legato",
        "staccato",
        "tenuto",
        "portato"
      ],
      "velRangeDb": 29
    },
    "lo": "Db3",
    "hi": "A5",
    "resp": {
      "gain": [
        0.8,
        1.0,
        1.0,
        0.92
      ],
      "air": [
        0.14,
        0.07,
        0.06,
        0.09
      ],
      "tilt": [
        0.88,
        0.78,
        0.66,
        0.5
      ],
      "atk": [
        2.4,
        1.7,
        1.35,
        1.1
      ],
      "vib": [
        34,
        40,
        46,
        50
      ],
      "vibRate": [
        5.4,
        5.6,
        5.8,
        6.0
      ],
      "oddEven": [
        0.5,
        0.5,
        0.5,
        0.5
      ]
    },
    "src": {
      "tilt": -7.5,
      "inharm": 0.0005,
      "mode": "harm",
      "nb": [
        1800,
        1.0
      ]
    },
    "form": {
      "f1": [
        840,
        6,
        1.4
      ],
      "f2": [
        2150,
        4,
        1.0
      ]
    },
    "filt": {
      "cut": [
        6.0,
        2.5,
        1.8,
        1.2
      ],
      "q": 0.9,
      "env": -0.45,
      "t": 0.05
    },
    "env": {
      "decay": 0.06,
      "sustain": 1
    },
    "char": {
      "noise": 0.09,
      "noiseAM": 0.06
    },
    "onset": {
      "hit": [
        0.1,
        0.09,
        0.08,
        0.08
      ],
      "air": 0.08,
      "ms": [
        40,
        28,
        22,
        18
      ]
    },
    "anchors": [
      "Db3",
      "F4",
      "C5",
      "Ab5"
    ]
  },
  "kena": {
    "name": "kena",
    "class": {
      "family": "maderas",
      "instrument": "kena",
      "label": "Kena",
      "regime": "sostenido",
      "articulations": [
        "legato",
        "staccato",
        "tenuto"
      ]
    },
    "lo": "G4",
    "hi": "A6",
    "resp": {
      "gain": [
        0.72,
        0.9,
        1.0,
        0.88
      ],
      "air": [
        0.22,
        0.34,
        0.26,
        0.42
      ],
      "tilt": [
        0.85,
        0.78,
        0.62,
        0.42
      ],
      "atk": [
        1.4,
        1.15,
        1.0,
        0.85
      ],
      "vib": [
        8,
        10,
        12,
        14
      ],
      "vibRate": [
        4.8,
        5.0,
        5.2,
        5.4
      ],
      "oddEven": [
        0.5,
        0.5,
        0.5,
        0.5
      ]
    },
    "src": {
      "tilt": -14,
      "inharm": 0.001,
      "mode": "harm",
      "nb": [
        1600,
        0.7
      ]
    },
    "form": {
      "f1": [
        0,
        0,
        0
      ],
      "f2": [
        0,
        0,
        0
      ]
    },
    "filt": {
      "cut": [
        12,
        9,
        8,
        4.5
      ],
      "q": 0.7,
      "env": 0.8,
      "t": 0.04
    },
    "env": {
      "decay": 0.08,
      "sustain": 1
    },
    "char": {
      "noise": 0.22,
      "noiseAM": 0.18
    },
    "onset": {
      "hit": [
        0.03,
        0.03,
        0.02,
        0.02
      ],
      "air": 0.25,
      "ms": [
        48,
        38,
        32,
        26
      ]
    },
    "anchors": [
      "G4",
      "F#5",
      "G5",
      "F#6"
    ]
  },
  // 2026-09-01 — EL CORNO TOMA LO DEL horn_medido (Mario: «ahora está bien, ¿puedes hacer el corno en F lo mismo?»): src.tilt −23.3 ·
  //   tilt [0.68 0.43 0.29 0.00] · air [0.02 0.03 0.06 0.17] · atk [2.6 2.2 1.8 1.4] · filt.env −0.6 · onset.hit −12 dB · onset.air 0.03.
  //   gain, form (Meyer 340/750/1225/2000), oddEven, onset.ms, release: intactos. Afinado de oído sobre Bruckner 7, M3-M6, con la
  //   respiración bloom +3/−2. horn_medido queda idéntico como testigo hasta el render, donde se retira.
  // 2026-09-02 — form.bank MEDIDO sobre la VSCO-2-CE (Mario: la librería pasa a ser la referencia principal,
  //   los renders de Finale quedan de contraste). Método nuevo: LTAS sobre los 29 samples del sostenido
  //   (INSTRUMENTS WAV TESTS/mm-ltas.py) — cada nota normalizada en energía, promedio de todas las alturas,
  //   menos la recta global, suavizado a 1/6 de octava. El whitening por armónico de mm-medir.py no sirve con
  //   samples sueltos: el pico seguía al fundamental (250 Hz grave · 1025 medio · 4175 agudo). Con LTAS se
  //   queda quieto: 675 Hz aparece en grave (+11.2), medio (+10.7) y agudo (+21.7, solo 2 samples).
  //   340/750/1225/2000 (Meyer) → 525/675/1050/1325: lo real está más apretado y con el peso en 675. El render
  //   de Finale, con el otro método y otro corno, había dado F1 650 · F2 1050 — dos referencias que convergen.
  //   Las FRECUENCIAS son las medidas; dB y Q no se copian del residuo (no es la ganancia de un peaking en
  //   serie y las Q altas están en el límite del suavizado): se entra plano, Q 2.0-2.8, y lo afina el oído.
  //   f1/f2 se mueven con el banco: no cambian el sonido (bodyRes pisa f1/f2 en el motor) pero son lo que usa
  //   la medición, y con 340/750 el tilt se pegaba al techo de 1.2 en todo el registro. Sin tocar nada más.
  // 2026-09-02 quater — LA ESCALERA (Mario: «los mf que corregimos los bajamos a +/- 50»). El 50 no era
  //   un nivel: era el tramo donde la ley LINEAL todavia separa una dinamica de otra. Sin velRangeDb el
  //   nivel es 20*log10(v) y los escalones se aplastan hacia arriba — mf→f 1.6 dB y ff→fff 1.1, contra
  //   6.3 de ppp→pp. Toda la resolucion en el piano y nada en el forte, que es justo al reves.
  //   Vuelve class.velRangeDb [40 40 30 20] (DPA/Meyer, dinamica/capacidad-dinamica-metales §2.2: el
  //   rango REAL por ancla, mas ancho abajo que arriba). Se habia probado el 2026-09-01 y se retiro en la
  //   vuelta al punto, pero no por estar mal: venia apilado con otras cuatro capas sin oido entre ellas.
  //   Esta vez va SOLO, y el mf casi no se mueve — vel 80 pasa de -4.0 a -4.8 dB. Lo que cambia es la
  //   escalera: p -13.6 (era -8.3) y ff +5.3 (era -1.1). horn_medido queda sin el, de testigo.
  "horn": {
    "name": "horn",
    "class": {
      "bal": 9,
      "family": "metales",
      "instrument": "horn",
      "label": "Horn in F",
      "regime": "sostenido",
      "_velRangeDb_retirado_2026-09-08": [40, 40, 30, 20],
      "articulations": [
        "legato",
        "staccato",
        "tenuto"
      ]
    },
    "lo": "F1",
    "hi": "A5",
    "anchors": [
      "B1",
      "F3",
      "C4",
      "F5"
    ],
    "resp": {
      "gain": [
        0.72,
        0.9,
        1.0,
        0.9
      ],
      "air": [
        0.02,
        0.03,
        0.06,
        0.17
      ],
      "tilt": [
        0.68,
        0.43,
        0.29,
        0.0
      ],
      "atk": [
        2.6,
        2.2,
        1.8,
        1.4
      ],
      "vib": [
        2,
        3,
        3,
        2
      ],
      "vibRate": [
        5.2,
        5.2,
        5.4,
        5.5
      ],
      "oddEven": [
        0.5,
        0.5,
        0.5,
        0.5
      ]
    },
    "src": {
      "tilt": -23.3,
      "inharm": 0.0,
      "mode": "harm",
      "nb": [
        1600,
        1.1
      ]
    },
    "form": {
      "f1": [
        340,
        6,
        2.8
      ],
      "f2": [
        750,
        4,
        2.2
      ],
      "bank": [
        [
          340,
          6,
          2.8
        ],
        [
          750,
          4,
          2.2
        ],
        [
          1225,
          2.5,
          2
        ],
        [
          2000,
          1.5,
          2
        ]
      ]
    },
    "filt": {
      "cut": [
        42.1,
        16.0,
        11.5,
        4.6
      ],
      "q": 0.85,
      "env": -0.6,
      "t": 0.07
    },
    "env": {
      "decay": 0.08,
      "sustain": 1,
      "release": [
        0.12,
        0.1,
        0.07,
        0.05
      ]
    },
    "char": {
      "noise": 0.05,
      "noiseAM": 0.02
    },
    "onset": {
      "hit": [
        0.01,
        0.012,
        0.02,
        0.035
      ],
      "air": 0.03,
      "ms": [
        80,
        60,
        40,
        30
      ]
    }
  },
  // 2026-09-01 — trompeta, paso 1 (Bartók N123, coral M1-M8): filt.env +0.5 → −0.5 — el Cosmic ARRANCA en cbase·2^env y va a cbase:
  //   con signo positivo entraba abierta y se cerraba; Luce & Clark miden en toda la familia que los parciales agudos llegan tarde
  //   (entra oscura y se abre). Mismo arreglo que el corno. Un paso por vez, el oído entre cada uno.
  //   → REVERTIDO el mismo día (Mario: «las trompetas suenan un poco a horn»): el signo del filtro NO es de familia. La trompeta
  //   entra con su consonante de lengua, brillante (Luce & Clark: banda ancha donde dominan los agudos, 30-50 ms; blip 3-10 ms);
  //   el corno entra cerrado. filt.env queda +0.5. Referencia medida: trumpets/medido-trumpet-2026-09-01 (tilt 1.2 en E3/C4).
  //   Paso 2 (Mario: «las encuentro muy opacas»; su derivación del banco de medición y la mía coinciden): src.tilt −20.5 → −14.5.
  //   Pendiente efectiva (src + 12·tilt): la referencia a mf está en −6…−10 dB/oct y la ficha estaba en −12…−16; con −14.5 queda
  //   E3 −6.1 · C4 −7.2 · C5 −8.6 · C6 −10.2. Pätynen (−20.5) mide por encima de 1.5 kHz; el modelo de una pendiente + formantes
  //   necesita la fuente más abierta para dar el mismo espectro. Formantes intactos (1200/2000/3000 = Meyer = la derivación).
  //   Paso 3 (Mario: «mucho mejor; ¿puedes aumentar ruido de embocadura? algo así como thrhrhrhh»): char.noise 0.03 → 0.05 (el soplo
  //   en banda 2·f) y char.noiseAM 0.02 → 0.12 (la modulación de amplitud por ruido — el granulado del labio, el «thrr»). BANDERA
  //   en el informe (no hay medición de ruido de labio de trompeta): esto es oído.
  "trumpet": {
    "name": "trumpet",
    "class": {
      "bal": 8,
      "family": "metales",
      "instrument": "trumpet",
      "label": "Trumpet",
      "regime": "sostenido",
      "articulations": [
        "legato",
        "staccato",
        "tenuto"
      ]
    },
    "lo": "E3",
    "hi": "C6",
    "anchors": [
      "E3",
      "C4",
      "C5",
      "C6"
    ],
    "resp": {
      "gain": [
        0.82,
        0.95,
        1.0,
        0.92
      ],
      "air": [
        0.03,
        0.03,
        0.03,
        0.04
      ],
      "tilt": [
        0.7,
        0.61,
        0.49,
        0.36
      ],
      "atk": [
        1.45,
        1.1,
        1.0,
        0.9
      ],
      "vib": [
        0.0,
        0.0,
        0.0,
        0.0
      ],
      "vibRate": [
        5.5,
        5.5,
        5.8,
        6.0
      ],
      "oddEven": [
        0.5,
        0.5,
        0.5,
        0.5
      ]
    },
    "src": {
      "tilt": -14.5,
      "inharm": 0.0,
      "mode": "harm",
      "nb": [
        3000,
        1.1
      ]
    },
    "form": {
      "f1": [
        1200,
        6.0,
        1.3
      ],
      "f2": [
        2000,
        4.0,
        1.2
      ],
      "bank": [
        [
          1200,
          6.0,
          1.3
        ],
        [
          2000,
          4.0,
          1.2
        ],
        [
          3000,
          2.5,
          1.2
        ]
      ]
    },
    "filt": {
      "cut": [
        27.3,
        19.1,
        10.5,
        5.7
      ],
      "q": 1.0,
      "env": 0.5,
      "t": 0.02
    },
    "env": {
      "decay": 0.04,
      "sustain": 1,
      "release": [
        0.07,
        0.06,
        0.04,
        0.03
      ]
    },
    "char": {
      "noise": 0.05,
      "noiseAM": 0.12
    },
    "onset": {
      "hit": [
        0.08,
        0.08,
        0.09,
        0.11
      ],
      "air": 0.03,
      "ms": [
        16,
        12,
        11,
        10
      ]
    }
  },
  "trumpet_f": {
    "name": "trumpet_f",
    "class": {
      "family": "metales",
      "instrument": "trumpet_f",
      "label": "Trumpet in F",
      "regime": "sostenido",
      "articulations": [
        "legato",
        "staccato",
        "tenuto"
      ]
    },
    "lo": "A3",
    "hi": "C6",
    "anchors": [
      "E3",
      "C4",
      "C5",
      "C6"
    ],
    "resp": {
      "gain": [
        0.82,
        0.95,
        1.0,
        0.92
      ],
      "air": [
        0.03,
        0.03,
        0.03,
        0.04
      ],
      "tilt": [
        0.7,
        0.61,
        0.49,
        0.36
      ],
      "atk": [
        1.45,
        1.1,
        1.0,
        0.9
      ],
      "vib": [
        0.0,
        0.0,
        0.0,
        0.0
      ],
      "vibRate": [
        5.5,
        5.5,
        5.8,
        6.0
      ],
      "oddEven": [
        0.5,
        0.5,
        0.5,
        0.5
      ]
    },
    "src": {
      "tilt": -20.5,
      "inharm": 0.0,
      "mode": "harm",
      "nb": [
        3000,
        1.1
      ]
    },
    "form": {
      "f1": [
        1200,
        6.0,
        1.3
      ],
      "f2": [
        2000,
        4.0,
        1.2
      ],
      "bank": [
        [
          1200,
          6.0,
          1.3
        ],
        [
          2000,
          4.0,
          1.2
        ],
        [
          3000,
          2.5,
          1.2
        ]
      ]
    },
    "filt": {
      "cut": [
        27.3,
        19.1,
        10.5,
        5.7
      ],
      "q": 1.0,
      "env": 0.5,
      "t": 0.02
    },
    "env": {
      "decay": 0.04,
      "sustain": 1,
      "release": [
        0.07,
        0.06,
        0.04,
        0.03
      ]
    },
    "char": {
      "noise": 0.03,
      "noiseAM": 0.02
    },
    "onset": {
      "hit": [
        0.08,
        0.08,
        0.09,
        0.11
      ],
      "air": 0.03,
      "ms": [
        16,
        12,
        11,
        10
      ]
    }
  },
  // 2026-09-01 — trombón, paso 1 (Bartók N123, coral): resp.tilt [0.70 0.63 0.56 0.38] → [1.00 1.00 0.87 0.41] — la FORMA por registro
  //   medida en el render de Finale (trombons/medido-trombone-2026-09-01, conversión con src −13) y en la derivación de Mario: la
  //   referencia cae de 1.2 en el grave a 0.2 en el agudo; la ficha estaba casi plana, 4-5 dB/oct opaca en grave y medio. Es la
  //   escalera del informe (9 parciales resonantes en E2 → 1.6 en Bb4). src.tilt, formantes (Meyer), filt.env: intactos.
  //   Paso 2 (Mario: «muy abierto el sonido, un poco liso»): a mitad de camino entre la ficha y la referencia, [0.85 0.81 0.71 0.40] —
  //   como en el corno, el oído quiere el metal más cerrado que la biblioteca. El «liso» va aparte (char.noiseAM, siguiente paso).
  //   Paso 3 (Mario: «le falta bastante labio, sobre todo en los agudos»): char.noiseAM 0.02 → 0.14 (el grano del labio) y noise 0.04 →
  //   0.05; el grano escala con resp.air por ancla, así que air [0.04 0.03 0.03 0.04] → [0.04 0.04 0.06 0.09] lo pone en el agudo.
  //   BANDERA en el informe (sin medición de ruido de labio de trombón): oído.
  //   Paso 4 (Mario: «le falta grano»): la cuenta del Cosmic — carAM = noise·air·2.5·noiseAM — daba 0.001 con los valores de arriba:
  //   inaudible. El camino del grano está ~10× subescalado en el motor (a corregir en el Cosmic y renormalizar las fichas); mientras,
  //   noise 0.30 · noiseAM 0.60 · air [0.06 0.07 0.10 0.14] → grano 0.02-0.06 y soplo aditivo −32 dB (noise·air·1.5·(1−AM)).
  "trombone": {
    "name": "trombone",
    "class": {
      "bal": 11,
      "family": "metales",
      "instrument": "trombone",
      "label": "Trombone",
      "regime": "sostenido",
      "articulations": [
        "legato",
        "staccato",
        "tenuto"
      ]
    },
    "lo": "E2",
    "hi": "Bb5",
    "anchors": [
      "E2",
      "Bb2",
      "F3",
      "Bb4"
    ],
    "resp": {
      "gain": [
        0.88,
        0.96,
        1.0,
        0.92
      ],
      "air": [
        0.06,
        0.07,
        0.10,
        0.14
      ],
      "tilt": [
        0.85,
        0.81,
        0.71,
        0.40
      ],
      "atk": [
        1.2,
        1.0,
        1.35,
        1.8
      ],
      "vib": [
        0.0,
        0.0,
        0.0,
        0.0
      ],
      "vibRate": [
        5.0,
        5.0,
        5.2,
        5.4
      ],
      "oddEven": [
        0.5,
        0.5,
        0.5,
        0.5
      ]
    },
    "src": {
      "tilt": -13.0,
      "inharm": 0.0,
      "mode": "harm",
      "nb": [
        1500,
        1.1
      ]
    },
    "form": {
      "f1": [
        520,
        6.0,
        1.4
      ],
      "f2": [
        1000,
        4.0,
        1.2
      ],
      "bank": [
        [
          520,
          6.0,
          1.4
        ],
        [
          1000,
          4.0,
          1.2
        ],
        [
          1500,
          2.5,
          1.2
        ]
      ]
    },
    "filt": {
      "cut": [
        29.1,
        23.2,
        17.2,
        7.3
      ],
      "q": 0.9,
      "env": 0.8,
      "t": 0.06
    },
    "env": {
      "decay": 0.06,
      "sustain": 1,
      "release": [
        0.12,
        0.1,
        0.08,
        0.05
      ]
    },
    "char": {
      "noise": 0.30,
      "noiseAM": 0.60
    },
    "onset": {
      "hit": [
        0.06,
        0.06,
        0.08,
        0.11
      ],
      "air": 0.035,
      "ms": [
        26,
        22,
        30,
        40
      ]
    }
  },
  "trombone_alto": {
    "name": "trombone_alto",
    "class": {
      "family": "metales",
      "instrument": "trombone_alto",
      "label": "Alto Trombone",
      "regime": "sostenido",
      "articulations": [
        "legato",
        "staccato",
        "tenuto"
      ]
    },
    "lo": "A2",
    "hi": "E5",
    "anchors": [
      "E2",
      "Bb2",
      "F3",
      "Bb4"
    ],
    "resp": {
      "gain": [
        0.88,
        0.96,
        1.0,
        0.92
      ],
      "air": [
        0.04,
        0.03,
        0.03,
        0.04
      ],
      "tilt": [
        0.7,
        0.63,
        0.56,
        0.38
      ],
      "atk": [
        1.2,
        1.0,
        1.35,
        1.8
      ],
      "vib": [
        0.0,
        0.0,
        0.0,
        0.0
      ],
      "vibRate": [
        5.0,
        5.0,
        5.2,
        5.4
      ],
      "oddEven": [
        0.5,
        0.5,
        0.5,
        0.5
      ]
    },
    "src": {
      "tilt": -13.0,
      "inharm": 0.0,
      "mode": "harm",
      "nb": [
        1500,
        1.1
      ]
    },
    "form": {
      "f1": [
        520,
        6.0,
        1.4
      ],
      "f2": [
        1000,
        4.0,
        1.2
      ],
      "bank": [
        [
          520,
          6.0,
          1.4
        ],
        [
          1000,
          4.0,
          1.2
        ],
        [
          1500,
          2.5,
          1.2
        ]
      ]
    },
    "filt": {
      "cut": [
        29.1,
        23.2,
        17.2,
        7.3
      ],
      "q": 0.9,
      "env": 0.8,
      "t": 0.06
    },
    "env": {
      "decay": 0.06,
      "sustain": 1,
      "release": [
        0.12,
        0.1,
        0.08,
        0.05
      ]
    },
    "char": {
      "noise": 0.04,
      "noiseAM": 0.02
    },
    "onset": {
      "hit": [
        0.06,
        0.06,
        0.08,
        0.11
      ],
      "air": 0.035,
      "ms": [
        26,
        22,
        30,
        40
      ]
    }
  },
  // 2026-09-01 — tuba, paso 1 (Bartók N123; Mario: «muy forte, tengo que ponerle ppp o suena mucho en los graves»): resp.gain
  //   [0.72 0.92 1.00 0.90] → [0.40 0.55 0.75 0.85] — con filt.cut 51×f0 el grave enciende ~50 parciales y el rms se dispara a igual
  //   gain; el Bb0 real es pedal, sin pico de impedancia (informe §6.4). Y la ley de Mario, de tubista: «entre más bajo necesita más
  //   aire que un tubista no puede mantener» — el grave se paga en soplo: resp.air [0.08 0.06 0.05 0.05] → [0.14 0.10 0.06 0.05].
  //   Color (tilt) y formantes (250/400, Mertens · Strong & Clark) intactos.
  "tuba": {
    "name": "tuba",
    "class": {
      "bal": 11,
      "family": "metales",
      "instrument": "tuba",
      "label": "Tuba",
      "regime": "sostenido",
      "articulations": [
        "legato",
        "staccato",
        "tenuto"
      ]
    },
    "lo": "Bb0",
    "hi": "F4",
    "anchors": [
      "Bb0",
      "Bb1",
      "F2",
      "Bb3"
    ],
    "resp": {
      "gain": [
        0.4,
        0.55,
        0.75,
        0.85
      ],
      "air": [
        0.14,
        0.1,
        0.06,
        0.05
      ],
      "tilt": [
        0.77,
        0.65,
        0.58,
        0.4
      ],
      "atk": [
        1.3,
        1.0,
        0.9,
        0.8
      ],
      "vib": [
        0.0,
        0.0,
        0.0,
        0.0
      ],
      "vibRate": [
        4.5,
        4.5,
        4.8,
        4.8
      ],
      "oddEven": [
        0.5,
        0.5,
        0.5,
        0.5
      ]
    },
    "src": {
      "tilt": -15.0,
      "inharm": 0.0,
      "mode": "harm",
      "nb": [
        800,
        1.2
      ]
    },
    "form": {
      "f1": [
        250,
        6.0,
        1.5
      ],
      "f2": [
        400,
        4.0,
        1.3
      ],
      "bank": [
        [
          250,
          6.0,
          1.5
        ],
        [
          400,
          4.0,
          1.3
        ]
      ]
    },
    "filt": {
      "cut": [
        51.5,
        29.2,
        21.8,
        9.4
      ],
      "q": 0.8,
      "env": 0.6,
      "t": 0.1
    },
    "env": {
      "decay": 0.1,
      "sustain": 1,
      "release": [
        0.22,
        0.16,
        0.12,
        0.07
      ]
    },
    "char": {
      "noise": 0.05,
      "noiseAM": 0.03
    },
    "onset": {
      "hit": [
        0.1,
        0.09,
        0.08,
        0.08
      ],
      "air": 0.08,
      "ms": [
        65,
        50,
        45,
        40
      ]
    }
  },
  "timpani": {
    "name": "timpani",
    "class": {
      "family": "percusion",
      "instrument": "timpani",
      "label": "Timpani",
      "regime": "percutido",
      "articulations": [
        "golpe",
        "redoble"
      ],
      "velRangeDb": 40
    },
    "lo": "C2",
    "hi": "C4",
    "resp": {
      "gain": [
        0.24,
        0.3,
        0.3,
        0.255
      ],
      "air": [
        0,
        0,
        0,
        0
      ],
      "tilt": [
        0.4,
        0.45,
        0.5,
        0.5
      ],
      "atk": [
        0.3,
        0.3,
        0.3,
        0.3
      ],
      "vib": [
        0,
        0,
        0,
        0
      ],
      "vibRate": [
        5.5,
        5.5,
        5.5,
        5.5
      ],
      "oddEven": [
        0.5,
        0.5,
        0.5,
        0.5
      ]
    },
    "src": {
      "tilt": -14,
      "inharm": 0.2,
      "mode": "inharm",
      "nb": [
        2000,
        1.2
      ]
    },
    "form": {
      "f1": [
        1200,
        3,
        0.7
      ],
      "f2": [
        400,
        4,
        1.5
      ]
    },
    "filt": {
      "cut": 4,
      "q": 0.8,
      "env": 0.0,
      "t": 0.1
    },
    "env": {
      "decay": [
        3.5,
        3,
        2.2,
        1.6
      ],
      "sustain": 0
    },
    "char": {
      "noise": 0.0,
      "noiseAM": 0.0
    },
    "onset": {
      "hit": [
        0.5,
        0.55,
        0.6,
        0.7
      ],
      "air": 0,
      "ms": [
        8,
        7,
        6,
        5
      ]
    }
  },
  "glockenspiel": {
    "name": "glockenspiel",
    "class": {
      "family": "percusion",
      "instrument": "glockenspiel",
      "label": "Glockenspiel",
      "regime": "percusivo",
      "articulations": [
        "clear"
      ],
      "velRangeDb": 25
    },
    "lo": "G5",
    "hi": "C9",
    "resp": {
      "gain": [
        0.24,
        0.27,
        0.3,
        0.27
      ],
      "air": [
        0.0,
        0.0,
        0.0,
        0.0
      ],
      "tilt": [
        0.5,
        0.55,
        0.6,
        0.65
      ],
      "atk": [
        0.3,
        0.3,
        0.3,
        0.3
      ],
      "vib": [
        0.0,
        0.0,
        0.0,
        0.0
      ],
      "oddEven": [
        0.5,
        0.5,
        0.5,
        0.5
      ]
    },
    "src": {
      "tilt": -8.0,
      "inharm": 0.055,
      "mode": "harm",
      "nb": [
        2000,
        1.2
      ]
    },
    "form": {
      "f1": [
        2500,
        2,
        1
      ],
      "f2": [
        0,
        0,
        0
      ]
    },
    "filt": {
      "cut": 10.0,
      "q": 0.9,
      "env": 0.3,
      "t": 0.06
    },
    "env": {
      "decay": [
        2.5,
        2,
        1.3,
        0.9
      ],
      "sustain": 0
    },
    "char": {
      "noise": 0.0,
      "noiseAM": 0.0
    },
    "onset": {
      "hit": [
        0.4,
        0.42,
        0.45,
        0.5
      ],
      "air": 0.0,
      "ms": 2
    }
  },
  "xylophone": {
    "name": "xylophone",
    "class": {
      "family": "percusion",
      "instrument": "xylophone",
      "label": "Xylophone",
      "regime": "percusivo",
      "articulations": [
        "seco"
      ],
      "velRangeDb": 30
    },
    "lo": "F4",
    "hi": "C8",
    "resp": {
      "gain": [
        1.0,
        1.0,
        0.95,
        0.85
      ],
      "air": [
        0.0,
        0.0,
        0.0,
        0.0
      ],
      "tilt": [
        0.65,
        0.7,
        0.75,
        0.8
      ],
      "atk": [
        0.3,
        0.3,
        0.3,
        0.3
      ],
      "vib": [
        0.0,
        0.0,
        0.0,
        0.0
      ],
      "oddEven": [
        0.5,
        0.5,
        0.5,
        0.5
      ]
    },
    "src": {
      "tilt": -12.0,
      "inharm": 0.05,
      "mode": "harm",
      "nb": [
        2000,
        1.2
      ]
    },
    "form": {
      "f1": [
        1200,
        6.0,
        1.2
      ],
      "f2": [
        0,
        0,
        0
      ]
    },
    "filt": {
      "cut": 6.5,
      "q": 0.7,
      "env": 0.3,
      "t": 0.04
    },
    "env": {
      "decay": [
        0.45,
        0.15,
        0.08,
        0.08
      ],
      "sustain": 0
    },
    "char": {
      "noise": 0.0,
      "noiseAM": 0.0
    },
    "onset": {
      "hit": [
        0.5,
        0.6,
        0.7,
        0.8
      ],
      "air": 0.0,
      "ms": 2
    }
  },
  "vibraphone": {
    "name": "vibraphone",
    "class": {
      "family": "percusion",
      "instrument": "vibraphone",
      "label": "Vibraphone",
      "regime": "percusivo",
      "articulations": [
        "sustained",
        "staccato"
      ],
      "velRangeDb": 30
    },
    "lo": "F3",
    "hi": "F6",
    "resp": {
      "gain": [
        0.27,
        0.285,
        0.3,
        0.27
      ],
      "air": [
        0.0,
        0.0,
        0.0,
        0.0
      ],
      "tilt": [
        0.75,
        0.8,
        0.85,
        0.9
      ],
      "atk": [
        0.3,
        0.3,
        0.3,
        0.3
      ],
      "vib": [
        0.15,
        0.15,
        0.15,
        0.15
      ],
      "vibRate": [
        6.0,
        6.0,
        6.0,
        6.0
      ],
      "oddEven": [
        0.5,
        0.5,
        0.5,
        0.5
      ]
    },
    "src": {
      "tilt": -15.0,
      "inharm": 0.028,
      "mode": "harm",
      "nb": [
        2000,
        1.2
      ]
    },
    "form": {
      "f1": [
        700,
        6.0,
        1.3
      ],
      "f2": [
        0,
        0,
        0
      ]
    },
    "filt": {
      "cut": 5.0,
      "q": 0.8,
      "env": 0.4,
      "t": 0.08
    },
    "env": {
      "decay": 3.0,
      "sustain": 0
    },
    "char": {
      "noise": 0.0,
      "noiseAM": 0.0
    },
    "onset": {
      "hit": [
        0.1,
        0.12,
        0.16,
        0.22
      ],
      "air": 0.0,
      "ms": 3
    }
  },
  "marimba": {
    "name": "marimba",
    "class": {
      "family": "percusion",
      "instrument": "marimba",
      "label": "Marimba",
      "regime": "percusivo",
      "articulations": [
        "normal",
        "staccato"
      ],
      "velRangeDb": 30
    },
    "lo": "A1",
    "hi": "C7",
    "resp": {
      "gain": [
        0.95,
        1.0,
        0.9,
        0.8
      ],
      "air": [
        0.0,
        0.0,
        0.0,
        0.0
      ],
      "tilt": [
        0.85,
        0.9,
        0.95,
        1.0
      ],
      "atk": [
        0.3,
        0.3,
        0.3,
        0.3
      ],
      "vib": [
        0.0,
        0.0,
        0.0,
        0.0
      ],
      "oddEven": [
        0.5,
        0.5,
        0.5,
        0.5
      ]
    },
    "src": {
      "tilt": -20.0,
      "inharm": 0.035,
      "mode": "harm",
      "nb": [
        2000,
        1.2
      ]
    },
    "form": {
      "f1": [
        350,
        6.0,
        1.4
      ],
      "f2": [
        0,
        0,
        0
      ]
    },
    "filt": {
      "cut": 3.0,
      "q": 0.6,
      "env": 0.4,
      "t": 0.03
    },
    "env": {
      "decay": [
        2.0,
        1.2,
        0.38,
        0.2
      ],
      "sustain": 0
    },
    "char": {
      "noise": 0.0,
      "noiseAM": 0.0
    },
    "onset": {
      "hit": [
        0.25,
        0.3,
        0.4,
        0.5
      ],
      "air": 0.0,
      "ms": 3
    }
  },
  "tubular_bells": {
    "name": "tubular_bells",
    "class": {
      "family": "percusion",
      "instrument": "tubular_bells",
      "label": "Tubular Bells",
      "regime": "percusivo",
      "articulations": [
        "sustained"
      ],
      "velRangeDb": 35
    },
    "lo": "C4",
    "hi": "G5",
    "resp": {
      "gain": [
        0.3,
        0.3,
        0.285,
        0.27
      ],
      "air": [
        0.0,
        0.0,
        0.0,
        0.0
      ],
      "tilt": [
        0.6,
        0.65,
        0.7,
        0.75
      ],
      "atk": [
        0.3,
        0.3,
        0.3,
        0.3
      ],
      "vib": [
        0.0,
        0.0,
        0.0,
        0.0
      ],
      "oddEven": [
        0.5,
        0.5,
        0.5,
        0.5
      ]
    },
    "src": {
      "tilt": -9.0,
      "inharm": 0.095,
      "mode": "harm",
      "nb": [
        2000,
        1.2
      ]
    },
    "form": {
      "f1": [
        0,
        0,
        0
      ],
      "f2": [
        3500,
        6.0,
        1.4
      ]
    },
    "filt": {
      "cut": 8.0,
      "q": 0.7,
      "env": 0.5,
      "t": 0.25
    },
    "env": {
      "decay": [
        6,
        5,
        4,
        3
      ],
      "sustain": 0
    },
    "char": {
      "noise": 0.02,
      "noiseAM": 0.0
    },
    "onset": {
      "hit": [
        0.55,
        0.6,
        0.7,
        0.8
      ],
      "air": 0.0,
      "ms": 4
    }
  },
  "snare": {
    "name": "snare",
    "class": {
      "family": "percusion",
      "instrument": "snare",
      "label": "Snare",
      "regime": "percutido",
      "articulations": [
        "staccato",
        "acento"
      ]
    },
    "lo": "C3",
    "hi": "C5",
    "resp": {
      "gain": [
        1.4,
        1.8,
        1.8,
        1.6
      ],
      "air": [
        0.0,
        0.0,
        0.0,
        0.0
      ],
      "tilt": [
        0.7,
        0.7,
        0.7,
        0.7
      ],
      "atk": [
        1.0,
        1.0,
        0.9,
        0.85
      ],
      "vib": [
        0.0,
        0.0,
        0.0,
        0.0
      ],
      "vibRate": [
        5.5,
        5.5,
        5.5,
        5.5
      ],
      "oddEven": [
        0.5,
        0.5,
        0.5,
        0.5
      ]
    },
    "src": {
      "tilt": -10.0,
      "inharm": 0.0,
      "mode": "noise",
      "nb": [
        4200,
        0.6
      ]
    },
    "form": {
      "f1": [
        1000,
        0,
        2.0
      ],
      "f2": [
        3000,
        0,
        2.5
      ]
    },
    "filt": {
      "cut": 22.0,
      "q": 1.0,
      "env": 0.0,
      "t": 0.1
    },
    "env": {
      "decay": 0.2,
      "sustain": 0
    },
    "char": {
      "noise": 1.0,
      "noiseAM": 0.0
    },
    "onset": {
      "hit": 1.2,
      "air": 0.0,
      "ms": 10
    }
  },
  // 2026-09-01 — snare_off «Snare drum (snares off)» (Mario, Bartók N123: el «tamburo piccolo senza corde» que abre y cierra el
  //   movimiento — CH10 dice Allways without snares). La caja sin la alfombrilla: sin el fritado de 4.2 kHz — queda el parche:
  //   banda 4200/Q0.6 → 1100/Q2.2, src.tilt −13, tilt 0.55, cola 0.2 → 0.3 (sin bordones el parche suena un pelo más). Copia de
  //   snare en lo demás; afinar de oído.
  //   Paso 2 (Mario: «suena como si le pega al borde, le falta cuero»): la banda baja al parche — 1100/Q2.2 → 550/Q1.6 (el
  //   fundamental de membrana de una caja de 14", más ancho = más cuerpo); el click del palo queda en el onset.
  "snare_off": {
    "name": "snare_off",
    "class": {
      "family": "percusion",
      "instrument": "snare_off",
      "label": "Snare drum (snares off)",
      "regime": "percutido",
      "articulations": [
        "staccato",
        "acento"
      ]
    },
    "lo": "C3",
    "hi": "C5",
    "resp": {
      "gain": [
        1.4,
        1.8,
        1.8,
        1.6
      ],
      "air": [
        0.0,
        0.0,
        0.0,
        0.0
      ],
      "tilt": [
        0.55,
        0.55,
        0.55,
        0.55
      ],
      "atk": [
        1.0,
        1.0,
        0.9,
        0.85
      ],
      "vib": [
        0.0,
        0.0,
        0.0,
        0.0
      ],
      "vibRate": [
        5.5,
        5.5,
        5.5,
        5.5
      ],
      "oddEven": [
        0.5,
        0.5,
        0.5,
        0.5
      ]
    },
    "src": {
      "tilt": -13.0,
      "inharm": 0.0,
      "mode": "noise",
      "nb": [
        550,
        1.6
      ]
    },
    "form": {
      "f1": [
        1000,
        0,
        2.0
      ],
      "f2": [
        3000,
        0,
        2.5
      ]
    },
    "filt": {
      "cut": 22.0,
      "q": 1.0,
      "env": 0.0,
      "t": 0.1
    },
    "env": {
      "decay": 0.3,
      "sustain": 0
    },
    "char": {
      "noise": 1.0,
      "noiseAM": 0.0
    },
    "onset": {
      "hit": 1.2,
      "air": 0.0,
      "ms": 10
    }
  },
  "bass_drum": {
    "name": "bass_drum",
    "class": {
      "family": "percusion",
      "instrument": "bass_drum",
      "label": "Bass Drum",
      "regime": "percutido",
      "articulations": [
        "staccato",
        "acento"
      ],
      "velRangeDb": 60
    },
    "lo": "C1",
    "hi": "C3",
    "resp": {
      "gain": [
        0.21,
        0.3,
        0.3,
        0.255
      ],
      "air": [
        0.0,
        0.0,
        0.0,
        0.0
      ],
      "tilt": [
        0.14,
        0.2,
        0.3,
        0.45
      ],
      "atk": [
        1.0,
        1.0,
        0.9,
        0.85
      ],
      "vib": [
        0.0,
        0.0,
        0.0,
        0.0
      ],
      "vibRate": [
        5.5,
        5.5,
        5.5,
        5.5
      ],
      "oddEven": [
        0.5,
        0.5,
        0.5,
        0.5
      ]
    },
    "src": {
      "tilt": -14,
      "inharm": 0.0,
      "mode": "noise",
      "nb": [
        80,
        1.0
      ]
    },
    "form": {
      "f1": [
        200,
        4,
        1.2
      ],
      "f2": [
        1800,
        3,
        1.0
      ]
    },
    "filt": {
      "cut": 10.0,
      "q": 1.0,
      "env": 0.6,
      "t": 0.25
    },
    "env": {
      "decay": 2.5,
      "sustain": 0
    },
    "char": {
      "noise": 0.12,
      "noiseAM": 0.0
    },
    "onset": {
      "hit": 0.55,
      "air": 0.0,
      "ms": 14
    }
  },
  "cymbals": {
    "name": "cymbals",
    "class": {
      "family": "percusion",
      "instrument": "cymbals",
      "label": "Cymbals",
      "regime": "percutido",
      "articulations": [
        "staccato",
        "acento"
      ],
      "velRangeDb": 60
    },
    "lo": "C4",
    "hi": "C7",
    "resp": {
      "gain": [
        0.21,
        0.3,
        0.3,
        0.255
      ],
      "air": [
        0.0,
        0.0,
        0.0,
        0.0
      ],
      "tilt": [
        0.86,
        0.92,
        0.95,
        0.8
      ],
      "atk": [
        1.0,
        1.0,
        0.9,
        0.85
      ],
      "vib": [
        0.0,
        0.0,
        0.0,
        0.0
      ],
      "vibRate": [
        5.5,
        5.5,
        5.5,
        5.5
      ],
      "oddEven": [
        0.5,
        0.5,
        0.5,
        0.5
      ]
    },
    "src": {
      "tilt": -3.0,
      "inharm": 0.0,
      "mode": "noise",
      "nb": [
        4000,
        0.45
      ]
    },
    "form": {
      "f1": [
        350,
        5,
        3.0
      ],
      "f2": [
        3500,
        4,
        1.0
      ]
    },
    "filt": {
      "cut": 10.0,
      "q": 1.0,
      "env": -1.8,
      "t": 0.6
    },
    "env": {
      "decay": 3.0,
      "sustain": 0
    },
    "char": {
      "noise": 0.3,
      "noiseAM": 0.0
    },
    "onset": {
      "hit": 0.4,
      "air": 0.55,
      "ms": 2
    }
  },
  "tam_tam": {
    "name": "tam_tam",
    "class": {
      "family": "percusion",
      "instrument": "tam_tam",
      "label": "Tam-tam",
      "regime": "percutido",
      "articulations": [
        "staccato",
        "acento"
      ],
      "velRangeDb": 70
    },
    "lo": "C2",
    "hi": "C4",
    "resp": {
      "gain": [
        0.21,
        0.3,
        0.3,
        0.255
      ],
      "air": [
        0.0,
        0.0,
        0.0,
        0.0
      ],
      "tilt": [
        0.22,
        0.72,
        0.8,
        0.95
      ],
      "atk": [
        1.0,
        1.0,
        0.9,
        0.85
      ],
      "vib": [
        0.0,
        0.0,
        0.0,
        0.0
      ],
      "vibRate": [
        5.5,
        5.5,
        5.5,
        5.5
      ],
      "oddEven": [
        0.5,
        0.5,
        0.5,
        0.5
      ]
    },
    "src": {
      "tilt": -6.0,
      "inharm": 0.0,
      "mode": "noise",
      "nb": [
        250,
        0.35
      ]
    },
    "form": {
      "f1": [
        250,
        6,
        1.5
      ],
      "f2": [
        2500,
        5,
        0.8
      ]
    },
    "filt": {
      "cut": 10.0,
      "q": 1.0,
      "env": 0.0,
      "t": 0.1
    },
    "env": {
      "decay": 6.0,
      "sustain": 0
    },
    "char": {
      "noise": 0.3,
      "noiseAM": 0.0
    },
    "onset": {
      "hit": 0.25,
      "air": 0.0,
      "ms": 25
    }
  },
  "triangle": {
    "name": "triangle",
    "class": {
      "family": "percusion",
      "instrument": "triangle",
      "label": "Triangle",
      "regime": "percutido",
      "articulations": [
        "staccato",
        "acento"
      ],
      "velRangeDb": 60
    },
    "lo": "C5",
    "hi": "C7",
    "resp": {
      "gain": [
        0.21,
        0.3,
        0.3,
        0.255
      ],
      "air": [
        0.0,
        0.0,
        0.0,
        0.0
      ],
      "tilt": [
        0.3,
        0.5,
        0.7,
        0.8
      ],
      "atk": [
        1.0,
        1.0,
        0.9,
        0.85
      ],
      "vib": [
        0.0,
        0.0,
        0.0,
        0.0
      ],
      "vibRate": [
        5.5,
        5.5,
        5.5,
        5.5
      ],
      "oddEven": [
        0.5,
        0.5,
        0.5,
        0.5
      ]
    },
    "src": {
      "tilt": -12,
      "inharm": 0.0,
      "mode": "harm",
      "nb": [
        2000,
        1.2
      ]
    },
    "form": {
      "f1": [
        1000,
        0,
        2
      ],
      "f2": [
        3000,
        0,
        2.5
      ]
    },
    "filt": {
      "cut": 10.0,
      "q": 1.0,
      "env": 0.0,
      "t": 0.1
    },
    "env": {
      "decay": 0.8,
      "sustain": 0
    },
    "char": {
      "noise": 0.0,
      "noiseAM": 0.0
    },
    "onset": {
      "hit": 0.2,
      "air": 0.0,
      "ms": 4
    }
  },
  "tambourine": {
    "name": "tambourine",
    "class": {
      "family": "percusion",
      "instrument": "tambourine",
      "label": "Tambourine",
      "regime": "percutido",
      "articulations": [
        "staccato",
        "acento"
      ],
      "velRangeDb": 55
    },
    "lo": "C4",
    "hi": "C6",
    "resp": {
      "gain": [
        0.7,
        1.0,
        1.0,
        0.85
      ],
      "air": [
        0.55,
        0.5,
        0.4,
        0.7
      ],
      "tilt": [
        0.9,
        0.84,
        0.72,
        0.95
      ],
      "atk": [
        1.0,
        1.0,
        0.9,
        0.85
      ],
      "vib": [
        0.0,
        0.0,
        0.0,
        0.0
      ],
      "vibRate": [
        5.5,
        5.5,
        5.5,
        5.5
      ],
      "oddEven": [
        0.5,
        0.5,
        0.5,
        0.5
      ]
    },
    "src": {
      "tilt": -5.0,
      "inharm": 0.0,
      "mode": "noise",
      "nb": [
        3500,
        0.5
      ]
    },
    "form": {
      "f1": [
        400,
        6,
        2.5
      ],
      "f2": [
        2200,
        4,
        1.2
      ]
    },
    "filt": {
      "cut": 10.0,
      "q": 1.0,
      "env": 0.0,
      "t": 0.1
    },
    "env": {
      "decay": 0.3,
      "sustain": 0
    },
    "char": {
      "noise": 0.3,
      "noiseAM": 0.0
    },
    "onset": {
      "hit": 0.5,
      "air": 0.65,
      "ms": 2
    }
  },
  "woodblock": {
    "name": "woodblock",
    "class": {
      "family": "percusion",
      "instrument": "woodblock",
      "label": "Woodblock",
      "regime": "percutido",
      "articulations": [
        "golpe"
      ],
      "velRangeDb": 45
    },
    "lo": "C4",
    "hi": "C6",
    "resp": {
      "gain": [
        0.8,
        1.0,
        1.0,
        0.85
      ],
      "air": [
        0,
        0,
        0,
        0
      ],
      "tilt": [
        0.45,
        0.62,
        0.8,
        0.92
      ],
      "atk": [
        0.3,
        0.3,
        0.3,
        0.3
      ],
      "vib": [
        0,
        0,
        0,
        0
      ],
      "vibRate": [
        5.5,
        5.5,
        5.5,
        5.5
      ],
      "oddEven": [
        0.5,
        0.5,
        0.5,
        0.5
      ]
    },
    "src": {
      "tilt": -12.0,
      "inharm": 0.0,
      "mode": "noise",
      "nb": [
        1500,
        6
      ]
    },
    "form": {
      "f1": [
        1100,
        7,
        4
      ],
      "f2": [
        2800,
        5,
        3
      ]
    },
    "filt": {
      "cut": 10,
      "q": 2,
      "env": 0.8,
      "t": 0.015
    },
    "env": {
      "decay": 0.1,
      "sustain": 0
    },
    "char": {
      "noise": 0.04,
      "noiseAM": 0.0
    },
    "onset": {
      "hit": 0.9,
      "air": 0,
      "ms": 2
    }
  },
  "harp": {
    "name": "harp",
    "class": {
      "bal": -1,
      "family": "cuerdas",
      "instrument": "harp",
      "label": "Harp",
      "regime": "percusivo",
      "articulations": [
        "legato",
        "staccato",
        "lauto"
      ]
    },
    "lo": "Cb1",
    "hi": "G7",
    "anchors": ["Cb1", "A2", "F5", "G7"],   // 2026-08-25 (Mario, M1-M3 de CH2: «les falta ese paso que suaviza»): el ancla 3 se muda al SEGUNDO quiebre de material, tripa→nailon (era F4, una OCTAVA abajo — el mismo error que el del metal pero al doble). La numeración de cuerdas de la ficha (7E=Mi1 · 6E=Mi2 · 5A=La2) sitúa las octavas del arpa de Fa a Mi contando hacia abajo, así que «octavas 3-4 tripa» = F3-E5 y «octavas 1-2 nailon» = F5-E7: Mi4, Sol4 y La4 son TRIPA y estaban recibiendo valores de nailon. La propuesta de anclas del informe decía «F4 ≈ región donde en muchas arpas la tripa da paso al nailon» y se contradecía con su propia tabla de materiales; manda la tabla. Recién con F5 las cuatro anclas dicen los cuatro estados de la cuerda: entorchada · tripa · nailon · la más corta.
    // 2026-08-24: el ancla 2 se muda al QUIEBRE DE MATERIAL (era C3). Las doce graves son entorchadas de acero/cobre (Do1-Sol2) y la PRIMERA DE TRIPA es el La2 (5A); con el ancla en C3 el motor estiraba el metal media octava de mas.
    "resp": {
      "gain": [0.65, 1.00, 0.95, 0.75],   // 2026-08-23 4º (oído de Mario, medido: en la ref el E1 pica −3,1 dB bajo el E2; el nuestro +0,6): el bordón grave es menos sonoro — y el fundamental deja de taparlo todo
      "air": [0.10, 0.12, 0.15, 0.20],
      "tilt": [0.75, 0.50, 0.45, 0.30],   // 2026-08-23 2º: grave 0.55→0.75 — el metal entorchado medido (ver cabecera)
      "atk": [1.6, 1.0, 1.15, 0.85],   // 2026-08-25 (Mario, D4-D5: «necesita cada vez más carne para compensar la tensión de la cuerda»):
      // el ataque dejaba de alargarse hacia el agudo (0.9 · 0.7) como si la yema pesara menos allá. Es al revés: los 2 cm de
      // contacto son el 5% de una cuerda de 40 cm y más de un cuarto de una de 7,5 — cuanto más corta la cuerda, MÁS manda
      // el dedo. Previo [1.6, 1.0, 0.9, 0.7]. BANDERA: a calibrar de oído.   // 2026-08-23 4º: la cuerda grave DURA en llegar (ref: pico a 80 ms; nuestro llegaba en 45) — período de 24 ms + tapa que no radia el fundamental + modos graves lentos
      "vib": [0, 0, 0, 0],
      "vibRate": [0, 0, 0, 0],
      "oddEven": [0.5, 0.5, 0.5, 0.5]
    },
    "src": {
      "tilt": -14.0,
      "inharm": [0.02, 0.012, 0.04, 0.06],
      "duet": [[1, 3, 4, 8], [0.16, 0.13, 0.10, 0.06]],
      "mode": "inharm",
      "partials": [56, 12, 10, 8],   // 2026-08-24: el derrumbe esta medido en la referencia del Ginastera — E1 51 parciales utiles · E2 25 · A2 (primera de tripa) 11. El 32 del ancla 2 era el metal llegando hasta C3. Valores previos [56, 32, 14, 8].   // 2026-08-23 2º: la referencia tiene 51 parciales en el E1 (techo era k=32/1318 Hz)
      "phaseMs": 1.5,
      "nb": [2500, 1.2]
    },
    "form": {
      // 2026-08-20 (Mario, "resonancia exagerada"): las frecuencias son los modos medidos (Le Carrou 2010) y no se
      // tocan; lo que estaba fuera de escala era el filtro. [f, dB, Q] con +6 dB a Q 12 no es una tabla que radia:
      // es un pico angosto que salta 6 dB cada vez que un parcial le cae encima, y el LTAS del render de Finale no
      // tiene ningun realce ahi (134 Hz esta 10 dB POR DEBAJO de 250). A la escala del clavecin, que se afino de oido.
      "f1": [134, 2, 8],   // 2026-08-23 3º: los dos modos graves ceden 1 dB — en la referencia la joroba vive una octava ARRIBA (k6-k11, pico k8=330 Hz; nuestro pico caía en k4=165)
      "f2": [270, 1.5, 5],
      "bank": [
        [134, 2, 8],
        [157, 1, 6],
        [300, 4, 4],   // 2026-08-23 2º/3º: las dos ALTAS suben (la joroba k6-k11 de la referencia está en 250-450 Hz); las dos MEDIDAS (Le Carrou) intactas en frecuencia
        [430, 3.5, 4]
      ]
    },
    "filt": {
      "cut": [48, 28, 12, 6],   // 2026-08-25: la misma yema, del otro lado — excitación más ancha = menos parciales que sobreviven.
      // D5 baja de 8,4 a 7,3 kHz (k14→k12), sigue por encima del piso de 6,8 kHz que mide Chadefaux. Previo [48, 28, 14, 7].
      "q": 0.7,
      "env": 0.35,
      "t": 0.5
    },
    "env": {
      "decay": [8, 4.5, 2.2, 0.4],   // 2026-08-20 (Mario, A/B contra el piano en el Keyboard: "puede durar mas de 10 s, es como si le faltan las manos del arpista"): antes [17, 9, 4.5, 0.5]. El piano no cuelga porque TIENE apagador (release 1.5/0.6/0.16/0.05); el arpa es l.v. y cada nota corre su decay entero, asi que el decay ES la duracion. El unico punto medido (Le Carrou: 8 s a 123 Hz) queda respetado en el grave; el 17 del bajo era extrapolacion.
      "sustain": 0,
      // 2026-08-20 (Mario): LAS MANOS DEL ARPISTA. El arpa nacio l.v. (sin release, la cuerda muere sola), y de
      // oido eso es un arpa sin arpista: cada cuerda tirada al maximo y nadie que la calle. Se asume que el
      // arpista apaga cada nota al tocar la siguiente y queda solo la caja. La rampa del motor cae a -60 dB en
      // `release` segundos, asi que a un tercio de ese tiempo ya esta 20 dB abajo: la mano frena rapido y la
      // madera zumba un instante. Mas lento que el fieltro del piano en el agudo (una mano no es un apagador
      // por cuerda) y mas rapido en el grave (la cuerda del arpa guarda mucha menos energia que la del piano).
      // relNoise, declarado desde el 18-08 esperando este momento, ahora suena: el roce del dedo al frenar.
      "release": [1.2, 0.8, 0.45, 0.2],
      "bloom": [0.35, 0.25, 0.20, 0.05],
      "decayTilt": [0.25, 0.30, 0.40, 0.60],
      "relNoise": [0.10, 0.12, 0.10, 0.06]
    },
    "char": {
      "noise": 0,
      "noiseAM": 0
    },
    "onset": {
      "hit": [0.30, 0.18, 0.06, 0.07],   // 2026-08-25 2º (Mario: «la mano en las notas agudas queda más cerca DE LA CUERDA»): arriba el
      // dedo no viaja — ya está apoyado. Sin viaje no hay impacto: el punteo queda de puro desplazamiento-y-suelta, que es la
      // «excitación casi ideal» del informe §? (63-85% de la energía es potencial, 15-37% cinética). onset.hit modela justo la
      // parte cinética, la del dedo que LLEGA — y esa es la uña que Mario seguía oyendo. Se hunde en el ancla 3 y NO en la 4:
      // el extremo agudo quedó calibrado hoy mismo para el ff de Mahler y no se toca sin volver a escucharlo. Los fuertes
      // recuperan el golpe por el otro eje (Lexicon: ff ×1.75-2.10, fff ×2.25-2.80 en el agudo). Previo [0.30,0.18,0.10,0.07].
      "air": 0.18,
      "freqMul": 4,   // 2026-08-23 5º (Mario: «tzh en vez de dhon»): contrato NUEVO opt-in del motor — el chiff centra en 4·f0 y SIGUE a la nota (E1→165 Hz, la zona T1/A0 de la caja, consonante con su serie); antes caía en la banda 1200+(1-air)·2600 ≈ 3,3 kHz: siseo de dedo. El fijo de 150 sigue desterrado (re fantasma, 20-08).
      "ms": [14, 10, 5, 4],   // 2026-08-25: dos fenómenos, no uno. Abajo son los ~15 ms del golpe de tapa (informe §4); arriba es el deslizamiento de la yema, medido en 1,2-6,1 ms (Chadefaux 2012). Requiere el contrato a4 de onset.ms (Keyboard, 2026-08-25). BANDERA: a calibrar de oído.   // 2026-08-23 5º: el thump de tapa real dura ~15 ms (informe §4) — con 5 ms era un chasquido
      "band": [134, 157],   // 2026-08-23 6º (Mario: «me falta el sonido de hueco de la caja»): la caja habla en SU altura FIJA — onset.band (el contrato del clavecín) con los DOS modos medidos de Le Carrou; el D2 del compás 2 sonaba tan lleno porque su serie CAE en los modos (147→134/157 · 294→300) — esto le da ese golpe de caja a TODAS las notas
      "bandHit": [0.18, 0.08, 0.05, 0.08],   // 2026-08-25 (Mario: «esa nota decae rapidísimo pero queda la resonancia de la caja»): el agudo
      // deja de ser CERO. El razonamiento del 24-08 —«la caja habla menos donde la cuerda es de tripa»— vale para el nivel
      // absoluto, pero los modos de la caja están en 134/157 Hz y no dependen de la nota: en el grave el ring queda TAPADO
      // por el fundamental de la propia cuerda, que vive en esa misma banda y dura ocho segundos; arriba la cuerda muere en
      // 0,4 s y la caja queda sola. Más expuesto, no menos — el sonido de Mahler son dos eventos, el tirón y lo que zumba
      // después. Previo [0.18, 0.08, 0.04, 0]. BANDERA: a calibrar de oído.
      "bandMs": 120,   // el ring de caja dura más que el thump (~15 ms); las simpáticas siguen 0,3-1 s (Le Carrou)
      "freq": null,   // 2026-08-20 (Mario, "re fantasma" sobre el mi1 y el si1 del arpegio): el thump de tapa fijo en 150 Hz es un re grave, ajeno a la serie de cualquier bajo del arpa (mi1: 124-165 · si1: 124-186); vuelve a seguir a la nota
      "pitch": [3, 12, 26, 26],   // 2026-08-25 (Mario, Mi4 de CH2): el glide de tensión por MATERIAL, no uno solo para todo.
      // El entorchado de acero/cobre casi no cede (3); la tripa del A2 son los ~15 cents del informe (12); en el F4
      // ya es nailon y salta al doble (26 — Woodhouse mide >2% en los primeros 100 ms en un E4 de nailon de
      // 390 mm; el material del agudo depende del encordado, y el oído de Mario puso el quiebre en F5,
      // no en E4); de ahí para arriba PLANO: ya es todo nailon, el material no cambia
      // más. El 34 del primer intento era extrapolación y el oído de Mario lo cazó — el Si5 se llevaba 29,7 cents
      // contra los 25,9 del Mi4 aprobado.
      // Requiere el contrato a4 de onset.pitch (Keyboard, 2026-08-25). BANDERA: a calibrar de oído.
      "pitchMs": 100
    }
  },
  "piano": {
    "name": "piano",
    "class": {
      "family": "teclados",
      "instrument": "piano",
      "label": "Piano (Upright)",   // 2026-08-15 (Mario): el vertical, mecánica ruidosa — hermano de Piano (Grand); tercer piano por venir (resonancia pitagórica, SympBank)
      "regime": "percusivo",
      "articulations": [
        "legato",
        "staccato",
        "tenuto"
      ]
    },
    "lo": "A0",
    "hi": "C8",
    "anchors": ["A0", "C3", "C5", "C8"],
    "resp": {
      "gain": [
        1.0,
        1.0,
        0.95,
        0.85
      ],
      "air": [
        0.0,
        0.0,
        0.0,
        0.0
      ],
      "tilt": [
        0.7,
        0.75,
        0.8,
        0.85
      ],
      "atk": [
        0.2,
        0.12,
        0.1,
        0.1
      ],
      "vib": [
        0.0,
        0.0,
        0.0,
        0.0
      ],
      "vibRate": [
        0.0,
        0.0,
        0.0,
        0.0
      ],
      "oddEven": [
        0.5,
        0.5,
        0.5,
        0.5
      ]
    },
    "src": {
      "tilt": -11.0,
      "inharm": [0.045, 0.013, 0.1, 1.5],
      "partials": [44, 16, 12, 8],   // 2026-08-26 (Mario, bajos del Ravel: «G3 y G2 o G1 fisicamente tienen una cuerda con diferente peso, lo que oigo es como si las cuerdas fueran del mismo tamano»; y «G3 es perfecto»). No estaba declarado: NHG = 16 parciales para las 88 teclas. Entre el ancla grave y la del tenor NADA se movia en el espectro (inharm 0.0016->0.0017, tilt 0.90->0.90, gain 1.0->1.0): de La0 a Do3 el piano era la MISMA cuerda transpuesta. La entorchada del grave suena casi toda en sus parciales —la tapa no radia los 49 Hz de la fundamental— y la del tenor vive en la suya. Anclas 2-4 clavadas en el 16 de hoy para no tocar G3 (queda identico): G2 pasa a 20 parciales y G1 a 36. BANDERA: a calibrar de oido.
      "duet": [[0.9, 1.2, 1.4, 1.6], [0.8, 0.95, 0.9, 0.85]],
      "trio": [[-0.8, -1.0, -1.2, -1.4], [0, 0.6, 0.9, 0.85]],
      "mode": "inharm",
      "nb": [
        2000,
        1.2
      ]
    },
    "form": {
      "f1": [
        350,
        6.0,
        1.4
      ],
      "f2": [
        1500,
        6.0,
        1.2
      ],
      "bank": [
        [35, -10.0, 1.4],
        [350, 6.0, 1.4],
        [1500, 6.0, 1.2]
      ]
    },
    "filt": {
      "cut": 5.5,
      "q": 0.8,
      "env": 0.45,
      "t": 0.2
    },
    "env": {
      "decay": [15, 4.8, 1.7, 0.42],
      "sustain": 0,
      "release": [1.5, 0.6, 0.16, 0.05],
      "relNoise": [0.3, 0.22, 0.15, 0.09],
      "bloom": [0.60, 0.50, 0.35, 0.20],   // 2026-08-26 (Mario: «puede tener el fade más acentuado después del martillo»): el prompt de la doble caída tardaba 1,2 s en el grave — el golpe del martillo se disolvía en vez de caer. Previo [1.2, 0.9, 0.5, 0.25].
      "bloomDepth": [0.22, 0.26, 0.34, 0.42],   // 2026-08-26: hondura del prompt (contrato env.bloomDepth, Keyboard 2026-08-26). El motor la tenía clavada en 0.42 (−7,5 dB) para todos: acá el grave cae −13,2 dB y el agudo queda como estaba. Weinreich mide 10-20 dB entre prompt y aftersound en el bajo. BANDERA: a calibrar de oído.
      "decayTilt": 0.2
    },
    "char": {
      "noise": 0.0,
      "noiseAM": 0.0
    },
    "onset": {
      "hit": 0.65,
      "air": 0.0,
      "ms": 10,
      "freq": 120,
      "pitch": 3.5,
      "pitchMs": 45
    }
  },
  "piano_steinway": {
    "name": "piano_steinway",
    "class": {
      "family": "teclados",
      "instrument": "piano_steinway",
      "label": "Piano (Grand)",   // 2026-08-15 (Mario): sin marca en toda la suite — la clave piano_steinway queda (mmf/Lexicon)
      "regime": "percusivo",
      "articulations": [
        "legato",
        "staccato",
        "tenuto"
      ]
    },
    "lo": "A0",
    "hi": "C8",
    "anchors": ["A0", "C3", "C5", "C8"],
    "resp": {
      "gain": [
        1.0,
        1.0,
        0.95,
        0.85
      ],
      "air": [
        0.0,
        0.0,
        0.0,
        0.0
      ],
      "tilt": [1.00, 0.90, 0.85, 0.90],   // 2026-08-26: la pendiente del grave, misma escucha. exp = (srcTilt + tilt*12)*0.1661, asi que 0.90 -> 1.00 en el ancla grave lleva la caida de k^-0.95 a k^-0.75: el parcial 10 sube ~4 dB. La cuerda gorda que suena por sus armonicos y no por su fundamental. Anclas 2-4 sin tocar (G3 identico). Previo [0.9, 0.9, 0.85, 0.9].   // 2026-08-15 (Mario, C6 en el Register: «más cuerda que martillo, muy brillante») high/top 0.95/1.0 → 0.85/0.90,
      "atk": [0.2, 0.12, 0.06, 0.06],   // 2026-08-15: ataque más corto en high/top (0.10 → 0.06) — más martillo relativo,
      "vib": [
        0.0,
        0.0,
        0.0,
        0.0
      ],
      "vibRate": [
        0.0,
        0.0,
        0.0,
        0.0
      ],
      "oddEven": [
        0.5,
        0.5,
        0.5,
        0.5
      ]
    },
    "src": {
      "tilt": -16.5,
      "inharm": [0.016, 0.017, 0.085, 1.5],
      "partials": [44, 16, 12, 8],   // 2026-08-26 (Mario, bajos del Ravel: «G3 y G2 o G1 fisicamente tienen una cuerda con diferente peso, lo que oigo es como si las cuerdas fueran del mismo tamano»; y «G3 es perfecto»). No estaba declarado: NHG = 16 parciales para las 88 teclas. Entre el ancla grave y la del tenor NADA se movia en el espectro (inharm 0.0016->0.0017, tilt 0.90->0.90, gain 1.0->1.0): de La0 a Do3 el piano era la MISMA cuerda transpuesta. La entorchada del grave suena casi toda en sus parciales —la tapa no radia los 49 Hz de la fundamental— y la del tenor vive en la suya. Anclas 2-4 clavadas en el 16 de hoy para no tocar G3 (queda identico): G2 pasa a 20 parciales y G1 a 36. BANDERA: a calibrar de oido.   // 2026-08-15 (literatura, Steinway D: Galembo&Askenfelt A0 1.6e-4 · Rigaud 2013 ×3/oct): B×100 · antes [0.045,0.013,0.1,1.5] lineal; ahora se interpola en LOG
      "duet": [[0, 1.0, 0.5, 0.15], [0, 0.95, 0.9, 0.85]],   // 2026-08-15: el afinador sostiene ~0.3 Hz, no cents (Weinreich · Kirk 1–2 c en el medio) — los cents BAJAN con la altura; A0 monocordio (gain 0). Antes [0.9,1.2,1.4,1.6]/[0.8,0.95,0.9,0.85]
      "trio": [[0, -0.9, -0.45, -0.15], [0, 0.6, 0.9, 0.85]],   // 2026-08-15: ídem (3ª cuerda) · antes [-0.8,-1.0,-1.2,-1.4]
      "mode": "inharm",
      "nb": [
        2000,
        1.2
      ]
    },
    "form": {
      "f1": [
        280,
        6.0,
        1.5
      ],
      "f2": [
        0,
        0,
        0
      ],
      "bank": [
        [35, -10.0, 1.4],
        [280, 6.0, 1.5]
      ]
    },
    "filt": {
      "cut": 3.2,
      "q": 0.6,
      "env": 0.6,
      "t": 0.08
    },
    "env": {
      "decay": [15, 8.7, 2.6, 0.42],   // 2026-08-15: aftersound C3–C5 iba ~2× rápido vs Weinreich (<2 dB/s) · antes [15,4.8,1.7,0.42]
      "sustain": 0,
      "release": [1.5, 0.6, 0.16, 0.05],
      "relNoise": [0.16, 0.12, 0.08, 0.05],
      "bloom": [0.60, 0.50, 0.35, 0.20],   // 2026-08-26 (Mario: «puede tener el fade más acentuado después del martillo»): el prompt de la doble caída tardaba 1,2 s en el grave — el golpe del martillo se disolvía en vez de caer. Previo [1.2, 0.9, 0.5, 0.25].
      "bloomDepth": [0.22, 0.26, 0.34, 0.42],   // 2026-08-26: hondura del prompt (contrato env.bloomDepth, Keyboard 2026-08-26). El motor la tenía clavada en 0.42 (−7,5 dB) para todos: acá el grave cae −13,2 dB y el agudo queda como estaba. Weinreich mide 10-20 dB entre prompt y aftersound en el bajo. BANDERA: a calibrar de oído.
      "decayTilt": 0.2
    },
    "char": {
      "noise": 0.0,
      "noiseAM": 0.0
    },
    "onset": {
      "hit": [0.35, 0.42, 0.55, 0.75],   // 2026-08-15 (Mario): el golpe pesa más hacia el agudo — curva A0·C3·C5·C8 (antes 0.45 plano); el Keyboard y el Register interpolan
      "air": 0.0,
      "ms": 16,   // 2026-08-15: thump medido 15–30 ms (Askenfelt 1993) · antes 9
      "freq": 120,
      "pitch": 3.5,
      "pitchMs": 45
    }
  },
  // ── PIANO (GRAND · TONAL) — 2026-08-15 (idea de Mario 07-18): el piano que la afinación 3ⁿ/2ᵐ merece y que
  // físicamente no existe. Clon del Grand (martillo, thump, decay, bloom, release, ley de dinámica heredada) con
  // cuerdas IDEALES: inharm al 10% del real (parciales casi exactos → las coincidencias pitagóricas —3f de Do = 2f
  // de Sol— quedan al hercio; el cero absoluto suena a órgano, se prueba como variante) y unísonos ENGANCHADOS
  // (±0.08 c, bajo el umbral de acople de Weinreich; monocordio · bicordio · tricordio como el D). La doble caída
  // la sigue dando bloom. Fase 2 (sesión propia): SympBank — resonancia simpática sobre armónicos perfectos.
  "piano_grand_tonal": {
    "name": "piano_grand_tonal",
    "class": {
      "family": "teclados",
      "instrument": "piano_grand_tonal",
      "label": "Piano (Grand · Tonal)",
      "regime": "percusivo",
      "articulations": [
        "legato",
        "staccato",
        "tenuto"
      ]
    },
    "lo": "A0",
    "hi": "C8",
    "anchors": [
      "A0",
      "C3",
      "C5",
      "C8"
    ],
    "resp": {
      "gain": [
        1,
        1,
        0.95,
        0.85
      ],
      "air": [
        0,
        0,
        0,
        0
      ],
      "tilt": [1.00, 0.90, 0.85, 0.90],   // 2026-08-26: la pendiente del grave, misma escucha. exp = (srcTilt + tilt*12)*0.1661, asi que 0.90 -> 1.00 en el ancla grave lleva la caida de k^-0.95 a k^-0.75: el parcial 10 sube ~4 dB. La cuerda gorda que suena por sus armonicos y no por su fundamental. Anclas 2-4 sin tocar (G3 identico). Previo [0.9, 0.9, 0.85, 0.9].
      "atk": [
        0.2,
        0.12,
        0.06,
        0.06
      ],
      "vib": [
        0,
        0,
        0,
        0
      ],
      "vibRate": [
        0,
        0,
        0,
        0
      ],
      "oddEven": [
        0.5,
        0.5,
        0.5,
        0.5
      ]
    },
    "src": {
      "tilt": -16.5,
      "inharm": [
        0.0016,
        0.0017,
        0.0085,
        0.15
      ],
      "partials": [44, 16, 12, 8],   // 2026-08-26 (Mario, bajos del Ravel: «G3 y G2 o G1 fisicamente tienen una cuerda con diferente peso, lo que oigo es como si las cuerdas fueran del mismo tamano»; y «G3 es perfecto»). No estaba declarado: NHG = 16 parciales para las 88 teclas. Entre el ancla grave y la del tenor NADA se movia en el espectro (inharm 0.0016->0.0017, tilt 0.90->0.90, gain 1.0->1.0): de La0 a Do3 el piano era la MISMA cuerda transpuesta. La entorchada del grave suena casi toda en sus parciales —la tapa no radia los 49 Hz de la fundamental— y la del tenor vive en la suya. Anclas 2-4 clavadas en el 16 de hoy para no tocar G3 (queda identico): G2 pasa a 20 parciales y G1 a 36. BANDERA: a calibrar de oido.
      "duet": [
        [
          0,
          0.08,
          0.08,
          0.08
        ],
        [
          0,
          0.95,
          0.9,
          0.85
        ]
      ],
      "trio": [
        [
          0,
          -0.08,
          -0.08,
          -0.08
        ],
        [
          0,
          0.6,
          0.9,
          0.85
        ]
      ],
      "mode": "inharm",
      "nb": [
        2000,
        1.2
      ]
    },
    "form": {
      "f1": [
        280,
        6,
        1.5
      ],
      "f2": [
        0,
        0,
        0
      ],
      "bank": [
        [
          35,
          -10,
          1.4
        ],
        [
          280,
          6,
          1.5
        ]
      ]
    },
    "filt": {
      "cut": 3.2,
      "q": 0.6,
      "env": 0.6,
      "t": 0.08
    },
    "env": {
      "decay": [
        15,
        8.7,
        2.6,
        0.42
      ],
      "sustain": 0,
      "release": [
        1.5,
        0.6,
        0.16,
        0.05
      ],
      "relNoise": [
        0.16,
        0.12,
        0.08,
        0.05
      ],
      "bloom": [0.60, 0.50, 0.35, 0.20],   // 2026-08-26 (Mario: «puede tener el fade más acentuado después del martillo»): el prompt de la doble caída tardaba 1,2 s en el grave — el golpe del martillo se disolvía en vez de caer. Previo [1.2, 0.9, 0.5, 0.25].
      "bloomDepth": [0.22, 0.26, 0.34, 0.42],   // 2026-08-26: hondura del prompt (contrato env.bloomDepth, Keyboard 2026-08-26). El motor la tenía clavada en 0.42 (−7,5 dB) para todos: acá el grave cae −13,2 dB y el agudo queda como estaba. Weinreich mide 10-20 dB entre prompt y aftersound en el bajo. BANDERA: a calibrar de oído.
      "decayTilt": [1.6, 2.4, 2.8, 3.0]   // 2026-08-26 2do (Mario, tras subir src.partials a 36 en el grave: «perdimos el decay que hicimos»). La curva estaba AL REVES. El 3.0 es exactamente la ley tau_k = tau1/k, y la habia puesto mas empinada justo en el grave: con 36 parciales, los veinte nuevos se evaporaban en menos de un cuarto de segundo (parcial 10 en 0,44 s, el 20 en 0,22) — ataque riquisimo y hueco en el medio. La cuerda entorchada, larga y de baja perdida, sostiene sus parciales medios muchos segundos: ese es el gruñido del bajo. Los que mueren rapido son los del agudo, donde el amortiguamiento crece como k^2. Ahora en G1 el parcial 5 dura 1,41 s y el 10, 0,76. La caida de NIVEL no se toca: la mandan el ring por matiz (Lexicon) y bloomDepth. G3 pasa de 2,33 a 2,43, dentro del ruido.   // 2026-08-26 (Mario, bajo del Ravel: «queda sostenido el sonido sin ningun fade»): la cola no se purificaba. tau_k = decay/(tilt*(k-1)) y con 0.2 los parciales 2-5 duraban MAS que la fundamental (La1: 61/30/20/15 s contra 4,07 del master) — el nivel bajaba y el timbre se quedaba entero, y eso el oido no lo lee como que la nota se apaga. El valor FISICO es 3: con decay = 3*tau1 es el que da tau_k = tau1/k, la ley de la cuerda real. Grave fisico, mas suave al agudo (cuerda corta, pocos parciales). Previo 0.2 escalar. BANDERA: a calibrar de oido.
    },
    "char": {
      "noise": 0,
      "noiseAM": 0
    },
    "onset": {
      "hit": [
        0.35,
        0.42,
        0.55,
        0.75
      ],
      "air": 0,
      "ms": 16,
      "freq": 120,
      "pitch": 3.5,
      "pitchMs": 45
    }
  },
  "harpsichord": {
    "name": "harpsichord",
    "class": {
      "family": "teclados",
      "instrument": "harpsichord",
      "label": "Harpsichord (Cosmic)",
      "regime": "percusivo",
      "detache": 0.22,
      "velRangeDb": 6,
      "articulations": [
        "legato",
        "staccato",
        "tenuto"
      ]
    },
    "lo": "F1",
    "hi": "F6",
    "anchors": [
      "F1",
      "C3",
      "C5",
      "F6"
    ],
    "resp": {
      // 2026-09-12 (Mario, de oido): salia fortisimo y saturaba -> bajado en dos escuchas a la cuarta parte (-12 dB). Antes: [0.32,0.52,0.7,0.63]
      "gain": [
        0.08,
        0.13,
        0.175,
        0.1575
      ],
      "air": [
        0.1,
        0.07,
        0.05,
        0.07
      ],
      "tilt": [
        0.94,
        0.94,
        0.92,
        0.9
      ],
      "atk": [
        0.06,
        0.05,
        0.04,
        0.04
      ],
      "vib": [
        0,
        0,
        0,
        0
      ],
      "vibRate": [
        0,
        0,
        0,
        0
      ],
      "oddEven": [
        0.5,
        0.5,
        0.55,
        0.62
      ]
    },
    "src": {
      "tilt": -12.0,
      "inharm": [
        0.012,
        0.008,
        0.007,
        0.03
      ],
      "duet": [
        [
          3,
          3,
          0,
          0
        ],
        [
          0.6,
          0.6,
          0,
          0
        ]
      ],
      "trio": [
        [
          0,
          0,
          0,
          0
        ],
        [
          0,
          0,
          0,
          0
        ]
      ],
      "mode": "inharm",
      "partials": [
        96,
        64,
        16,
        16
      ],
      "phaseMs": 2,
      "nb": [
        2500,
        1.2
      ]
    },
    "form": {
      "f1": [
        130,
        3,
        9
      ],
      "f2": [
        330,
        2,
        12
      ],
      "bank": [
        [
          50,
          -10,
          1.4
        ],
        [
          75,
          0,
          7
        ],
        [
          130,
          3,
          9
        ],
        [
          210,
          2,
          10
        ],
        [
          330,
          2,
          12
        ],
        [
          520,
          1.5,
          14
        ],
        [
          900,
          1,
          10
        ],
        [
          2500,
          1,
          6
        ]
      ]
    },
    "filt": {
      "cut": [
        96,
        64,
        8,
        8
      ],
      "q": 0.7,
      "env": 0.45,
      "t": 0.55
    },
    "env": {
      "decay": [
        22,
        11,
        3.5,
        1.0
      ],
      "sustain": 0,
      "release": [
        0.06,
        0.045,
        0.03,
        0.02
      ],
      "relNoise": [
        0.32,
        0.26,
        0.15,
        0.12
      ],
      "bloom": [
        0.25,
        0.18,
        0.1,
        0.05
      ],
      "decayTilt": [
        1.6,
        1.4,
        0.9,
        0.6
      ]
    },
    "char": {
      "noise": 0,
      "noiseAM": 0
    },
    "onset": {
      "hit": [
        0.38,
        0.32,
        0.28,
        0.35
      ],
      "air": 0.15,
      "ms": 6,
      "freq": 160,
      "pitch": 4,
      "pitchMs": 10,
      "band": [3500, 5200, 7000],
      "bandHit": [0.02, 0.06, 0.18, 0.22],
      "bandMs": 60
    }
  },
  "harpsichord_wt": {
    "name": "harpsichord_wt",
    "class": {
      "family": "teclados",
      "instrument": "harpsichord_wt",
      "label": "Harpsichord (Well-tempered)",
      "regime": "percusivo",
      "detache": 0.22,
      "velRangeDb": 6,
      "temperament": "werckmeister3",
      "articulations": [
        "legato",
        "staccato",
        "tenuto"
      ]
    },
    "lo": "F1",
    "hi": "F6",
    "anchors": [
      "F1",
      "C3",
      "C5",
      "F6"
    ],
    "resp": {
      // 2026-09-12 (Mario, de oido): salia fortisimo y saturaba -> bajado en dos escuchas a la cuarta parte (-12 dB). Antes: [0.32,0.52,0.7,0.63]
      "gain": [
        0.08,
        0.13,
        0.175,
        0.1575
      ],
      "air": [
        0.1,
        0.07,
        0.05,
        0.07
      ],
      "tilt": [
        0.94,
        0.94,
        0.92,
        0.9
      ],
      "atk": [
        0.06,
        0.05,
        0.04,
        0.04
      ],
      "vib": [
        0,
        0,
        0,
        0
      ],
      "vibRate": [
        0,
        0,
        0,
        0
      ],
      "oddEven": [
        0.5,
        0.5,
        0.55,
        0.62
      ]
    },
    "src": {
      "tilt": -12.0,
      "inharm": [
        0.012,
        0.008,
        0.007,
        0.03
      ],
      "duet": [
        [
          3,
          3,
          0,
          0
        ],
        [
          0.6,
          0.6,
          0,
          0
        ]
      ],
      "trio": [
        [
          0,
          0,
          0,
          0
        ],
        [
          0,
          0,
          0,
          0
        ]
      ],
      "mode": "inharm",
      "partials": [
        96,
        64,
        16,
        16
      ],
      "phaseMs": 2,
      "nb": [
        2500,
        1.2
      ]
    },
    "form": {
      "f1": [
        130,
        3,
        9
      ],
      "f2": [
        330,
        2,
        12
      ],
      "bank": [
        [
          50,
          -10,
          1.4
        ],
        [
          75,
          0,
          7
        ],
        [
          130,
          3,
          9
        ],
        [
          210,
          2,
          10
        ],
        [
          330,
          2,
          12
        ],
        [
          520,
          1.5,
          14
        ],
        [
          900,
          1,
          10
        ],
        [
          2500,
          1,
          6
        ]
      ]
    },
    "filt": {
      "cut": [
        96,
        64,
        8,
        8
      ],
      "q": 0.7,
      "env": 0.45,
      "t": 0.55
    },
    "env": {
      "decay": [
        22,
        11,
        3.5,
        1.0
      ],
      "sustain": 0,
      "release": [
        0.06,
        0.045,
        0.03,
        0.02
      ],
      "relNoise": [
        0.32,
        0.26,
        0.15,
        0.12
      ],
      "bloom": [
        0.25,
        0.18,
        0.1,
        0.05
      ],
      "decayTilt": [
        1.6,
        1.4,
        0.9,
        0.6
      ]
    },
    "char": {
      "noise": 0,
      "noiseAM": 0
    },
    "onset": {
      "hit": [
        0.38,
        0.32,
        0.28,
        0.35
      ],
      "air": 0.15,
      "ms": 6,
      "freq": 160,
      "pitch": 4,
      "pitchMs": 10,
      "band": [3500, 5200, 7000],
      "bandHit": [0.02, 0.06, 0.18, 0.22],
      "bandMs": 60
    }
  },
  "celesta": {
    "name": "celesta",
    "class": {
      "family": "teclados",
      "instrument": "celesta",
      "label": "Celesta",
      "regime": "percusivo",
      "articulations": [
        "legato",
        "staccato"
      ]
    },
    "lo": "C3",
    "hi": "C8",
    "resp": {
      "gain": [
        0.8,
        0.95,
        1.0,
        0.9
      ],
      "air": [
        0.02,
        0.02,
        0.02,
        0.03
      ],
      "tilt": [
        0.95,
        0.95,
        1.0,
        1.0
      ],
      "atk": [
        1,
        1,
        1,
        1
      ],
      "vib": [
        0.0,
        0.0,
        0.0,
        0.0
      ],
      "vibRate": [
        0.0,
        0.0,
        0.0,
        0.0
      ],
      "oddEven": [
        0.5,
        0.5,
        0.5,
        0.5
      ]
    },
    "src": {
      "tilt": -22.0,
      "inharm": 0,
      "mode": "harm",
      "nb": [
        2000,
        1.2
      ]
    },
    "form": {
      "f1": [
        2000,
        6.0,
        1.3
      ],
      "f2": [
        0,
        0,
        0
      ]
    },
    "filt": {
      "cut": 4.0,
      "q": 0.6,
      "env": 0.5,
      "t": 0.04
    },
    "env": {
      "decay": 2.8,
      "sustain": 0
    },
    "char": {
      "noise": 0.0,
      "noiseAM": 0.0
    },
    "onset": {
      "hit": [
        0.08,
        0.1,
        0.12,
        0.15
      ],
      "air": 0.0,
      "ms": 2
    },
    "anchors": [
      "C4",
      "C5",
      "C6",
      "C8"
    ]
  },
  "pipe_organ": {
    "name": "pipe_organ",
    "class": {
      "family": "vientos",
      "instrument": "pipe_organ",
      "label": "Órgano de Tubos",
      "regime": "sostenido",
      "articulations": [
        "legato",
        "staccato"
      ]
    },
    "lo": "C1",
    "hi": "C7",
    "resp": {
      "gain": [
        1.0,
        1.0,
        1.0,
        1.0
      ],
      "air": [
        0.03,
        0.03,
        0.04,
        0.05
      ],
      "tilt": [
        0.5,
        0.5,
        0.5,
        0.5
      ],
      "atk": [
        0.6,
        0.5,
        0.4,
        0.3
      ],
      "vib": [
        0.0,
        0.0,
        0.0,
        0.0
      ],
      "vibRate": [
        0.0,
        0.0,
        0.0,
        0.0
      ],
      "oddEven": [
        0.5,
        0.5,
        0.5,
        0.5
      ]
    },
    "src": {
      "tilt": -11.0,
      "inharm": 0.0,
      "mode": "harm",
      "nb": [
        2000,
        1.2
      ]
    },
    "form": {
      "f1": [
        300,
        6.0,
        1.4
      ],
      "f2": [
        2000,
        6.0,
        1.2
      ]
    },
    "filt": {
      "cut": 7.5,
      "q": 0.8,
      "env": 0.0,
      "t": 0.05
    },
    "env": {
      "decay": 0.02,
      "sustain": 1
    },
    "char": {
      "noise": 0.04,
      "noiseAM": 0.02
    },
    "onset": {
      "hit": 0.1,
      "air": 0.06,
      "ms": 12
    },
    "anchors": [
      "C1",
      "C3",
      "C5",
      "C7"
    ]
  },
  "accordion": {
    "name": "accordion",
    "class": {
      "family": "vientos",
      "instrument": "accordion",
      "label": "Acordeón",
      "regime": "sostenido",
      "articulations": [
        "legato",
        "staccato",
        "bellows_shake"
      ]
    },
    "lo": "F2",
    "hi": "A6",
    "resp": {
      "gain": [
        0.82,
        1,
        0.95,
        0.85
      ],
      "air": [
        0.04,
        0.03,
        0.03,
        0.04
      ],
      "tilt": [
        0.65,
        0.7,
        0.75,
        0.8
      ],
      "atk": [
        2.2,
        1.8,
        1.3,
        0.9
      ],
      "vib": [
        0.0,
        0.0,
        0.0,
        0.0
      ],
      "vibRate": [
        0.0,
        0.0,
        0.0,
        0.0
      ],
      "oddEven": [
        0.44,
        0.46,
        0.48,
        0.5
      ]
    },
    "src": {
      "tilt": -10.5,
      "inharm": 0.0,
      "mode": "harm",
      "nb": [
        2000,
        1.2
      ]
    },
    "form": {
      "f1": [
        800,
        6.0,
        1.3
      ],
      "f2": [
        2500,
        6.0,
        1.1
      ]
    },
    "filt": {
      "cut": [
        24,
        20,
        16,
        10
      ],
      "q": 0.8,
      "env": 0.3,
      "t": 0.05
    },
    "env": {
      "decay": 0.03,
      "sustain": 1,
      "release": [
        0.1,
        0.08,
        0.06,
        0.05
      ]
    },
    "char": {
      "noise": 0.05,
      "noiseAM": 0.03
    },
    "onset": {
      "hit": 0.0,
      "air": 0.14,
      "ms": 65
    },
    "anchors": [
      "F2",
      "C4",
      "C5",
      "A6"
    ]
  },
  "violin": {
    "name": "violin",
    "class": {
      "bal": -4,
      "family": "cuerdas",
      "instrument": "violin",
      "label": "Violin",
      "velRangeDb": 32,
      "regime": "sostenido",
      "articulations": [
        "legato",
        "staccato",
        "détaché"
      ]
    },
    "lo": "G3",
    "hi": "E7",
    "resp": {
      "gain": [
          0.2845,
          0.1496,
          0.0998,
          0.0220
        ],
      "air": [
        0.07,
        0.06,
        0.06,
        0.08
      ],
      "tilt": [
        0.5,
        0.65,
        0.8,
        0.97
      ],
      "atk": [
        1.7,
        1.15,
        0.8,
        0.55
      ],
      "vib": [
        24,
        30,
        36,
        44
      ],
      "vibRate": [
        5.6,
        5.8,
        6.0,
        6.3
      ],
      "oddEven": [
        0.5,
        0.5,
        0.5,
        0.5
      ]
    },
    "src": {
      "tilt": -9.0,
      "inharm": [
        0.0005,
        0.0005,
        0.0008,
        0.0015
      ],
      "mode": "harm",
      "nb": [
        2500,
        1.5
      ],
      "partials": [
        26,
        17,
        12,
        14
      ]
    },
    "form": {
      "f1": [
        500,
        6.0,
        4.0
      ],
      "f2": [
        2400,
        5.0,
        2.2
      ],
      "bank": [
        [
          285,
          4.0,
          10
        ],
        [
          385,
          2.5,
          40
        ],
        [
          422,
          5.5,
          45
        ],
        [
          528,
          5.5,
          45
        ],
        [
          600,
          3.0,
          45
        ],
        [
          2400,
          5.0,
          2.5
        ]
      ]
    },
    "filt": {
      "cut": [
        25.51,
        17.03,
        12.5,
        13.65
      ],
      "q": 0.8,
      "env": 0.4,
      "t": 0.04
    },
    "env": {
      "decay": 0.06,
      "sustain": 1,
      "release": [
        0.09,
        0.07,
        0.05,
        0.04
      ]
    },
    "char": {
      "noise": 0.06,
      "noiseAM": 0.03
    },
    "onset": {
      "hit": [
        0.1,
        0.09,
        0.08,
        0.07
      ],
      "air": 0.15,
      "ms": [
        50,
        34,
        23,
        15
      ],
      "freq": 285,
      "band": [
        285,
        528
      ],
      "bandHit": [
        0.06,
        0.09,
        0.1,
        0.12
      ],
      "bandMs": 35
    },
    "anchors": [
      "G3",
      "D4",
      "A4",
      "E5"
    ]
  },
  // 2026-09-02 — LA VIOLA ENTRA OSCURA (Mario: «ningún instrumento de la orquesta tiene ataque directo salvo
  //   percusión, teclados y cuerdas pulsadas; el sonido viene DESPUÉS de poner la cuerda en movimiento — por eso
  //   suenan artificiales»). De las 41 fichas de régimen sostenido, la única con filt.env negativo era el corno,
  //   y el corno es justo la que su oído salva. filt.env +0.35 → −0.35: el Cosmic arranca en cbase·2^env, así que
  //   con negativo entra por debajo y ABRE — el gesto de establecimiento. Mismo giro que el corno el 2026-09-01,
  //   con la magnitud propia de la viola, no la del corno. Un solo número; si falta, el paso siguiente es −0.6.
  //   Solo y sección juntas: la obra suena la sección, y son el mismo instrumento.
  // 2026-09-02 bis — NIVEL: −19 dB (Mario midió 19 dB entre la viola en mf y el corno en mf, que es su techo
  //   para la sección). gain × 0.112, la curva entera sin cambiar de forma: [0.70 0.95 1.00 0.85] → [0.078 0.106
  //   0.112 0.095]. Es una compensación, no una corrección: lo que está mal es que el motor iguala AMPLITUD y no
  //   sonoridad, y la fuente del corno (src.tilt −23.3) es 13 dB/oct más oscura que la de la viola (−10.5), así que
  //   con el mismo rms el corno suena mucho menos. Si algún día el corno recupera su sonoridad, esto vuelve a subir.
  //   Y hay causa debajo: la pendiente efectiva de la viola es +0.3 dB/oct en C3 (src.tilt + 12·tilt) — una fuente
  //   PLANA. Una cuerda frotada va cerca de −6 (Helmholtz; la VSCO mide −5.6 y −6.0 en el cello, −2.5 y −3.7 en la
  //   viola). Arreglar eso se lleva ~7 de los 19 dB y de paso saca dureza; cuando se haga, el gain sube otro tanto.
  // 2026-09-02 ter — EL NIVEL VUELVE A LA FICHA (Mario: «baja la ficha»). Habia bajado a mano el vel
  //   de UNA marca de mf de la viola, de 80 a 51, y con velRangeDb 25 eso son −5.71 dB. Una marca no
  //   es el lugar: quince mf mas en ese pentagrama seguian en 80 y cada uno hubiera quedado a un nivel
  //   distinto. El recorte pasa al gain (×0.518) y la marca vuelve a 80, que es lo que dice la pagina.
  "viola": {
    "name": "viola",
    "class": {
      "bal": -6,
      "family": "cuerdas",
      "instrument": "viola",
      "label": "Viola",
      "velRangeDb": 25,
      "regime": "sostenido",
      "articulations": [
        "legato",
        "staccato",
        "détaché"
      ]
    },
    "lo": "C3",
    "hi": "A6",
    "resp": {
      "gain": [
        0.0404,
        0.0549,
        0.058,
        0.0492
      ],
      "air": [
        0.09,
        0.07,
        0.06,
        0.08
      ],
      "tilt": [
        0.9,
        0.8,
        0.6,
        0.42
      ],
      "atk": [
        1.7,
        1.0,
        0.55,
        0.33
      ],
      "vib": [
        16,
        20,
        30,
        38
      ],
      "vibRate": [
        5.0,
        5.2,
        5.5,
        5.7
      ],
      "oddEven": [
        0.5,
        0.5,
        0.5,
        0.5
      ]
    },
    "src": {
      "tilt": -10.5,
      "inharm": 0.002,
      "mode": "harm",
      "nb": [
        1600,
        1.2
      ],
      "partials": [
        76,
        45,
        18,
        6
      ]
    },
    "form": {
      "f1": [
        220,
        6.0,
        3.0
      ],
      "f2": [
        350,
        5.0,
        3.0
      ],
      "bank": [
        [
          220,
          6.0,
          3.0
        ],
        [
          350,
          5.0,
          3.0
        ],
        [
          600,
          3.0,
          2.5
        ],
        [
          1600,
          4.5,
          2.0
        ]
      ]
    },
    "filt": {
      "cut": [
        30.58,
        19.09,
        8.12,
        2.84
      ],
      "q": 0.85,
      "env": -0.35,
      "t": 0.06
    },
    "env": {
      "decay": 0.06,
      "sustain": 1,
      "release": [
        0.9,
        0.54,
        0.21,
        0.067
      ],
      "decayTilt": [
        0.45,
        0.45,
        0.45,
        0.45
      ]
    },
    "char": {
      "noise": 0.07,
      "noiseAM": 0.04
    },
    "onset": {
      "hit": [
        0.1,
        0.07,
        0.05,
        0.04
      ],
      "air": 0.09,
      "ms": [
        76,
        45,
        18,
        6
      ],
      "band": [
        220,
        350
      ],
      "bandHit": [
        0.1,
        0.08,
        0.07,
        0.07
      ],
      "bandMs": 140
    },
    "anchors": [
      "C3",
      "A3",
      "C#5",
      "A6"
    ]
  },
  // 2026-09-02 — NIVEL, junto con la viola (Mario: «baja la ficha al igual que la del violoncello»).
  //   Medido sobre el espectro que arma la ficha con ponderacion A —la sonoridad que el motor NO iguala,
  //   porque normaliza amplitud— el cello quedaba +20.5 dB sobre la viola ya corregida, parejo en toda la
  //   zona comun (G2 +19.6 · C3 +20.5 · G3 +19.3 · C4 +20.5 · G4 +21.5). gain ×0.095, un solo factor.
  "cello": {
    "name": "cello",
    "class": {
      "bal": -3,
      "family": "cuerdas",
      "instrument": "cello",
      "label": "Cello",
      "velRangeDb": 30,
      "regime": "sostenido",
      "articulations": [
        "legato",
        "staccato",
        "détaché"
      ]
    },
    "lo": "C2",
    "hi": "C6",
    "resp": {
      "gain": [
        0.0779,
        0.095,
        0.095,
        0.0836
      ],
      "air": [
        0.06,
        0.05,
        0.05,
        0.07
      ],
      "tilt": [
        0.62,
        0.56,
        0.44,
        0.26
      ],
      "atk": [
        2.4,
        1.9,
        1.1,
        0.5
      ],
      "vib": [
        14,
        20,
        30,
        40
      ],
      "vibRate": [
        5.2,
        5.5,
        6.0,
        6.5
      ],
      "oddEven": [
        0.5,
        0.5,
        0.5,
        0.5
      ]
    },
    "src": {
      "tilt": -12.0,
      "inharm": 0.001,
      "mode": "harm",
      "nb": [
        2000,
        1.2
      ],
      "partials": [
        40,
        32,
        20,
        10
      ]
    },
    "form": {
      "f1": [
        175,
        7.0,
        6.0
      ],
      "f2": [
        1300,
        4.0,
        2.5
      ],
      "bank": [
        [
          104,
          6.0,
          8
        ],
        [
          145,
          4.0,
          6
        ],
        [
          175,
          7.0,
          6
        ],
        [
          219,
          6.0,
          6
        ],
        [
          400,
          3.0,
          3
        ],
        [
          1300,
          4.0,
          2.5
        ]
      ]
    },
    "filt": {
      "cut": [
        30,
        24,
        15,
        7
      ],
      "q": 0.8,
      "env": 0.25,
      "t": 0.1
    },
    "env": {
      "decay": 0.08,
      "sustain": 1,
      "release": [
        0.24,
        0.16,
        0.08,
        0.04
      ]
    },
    "char": {
      "noise": 0.055,
      "noiseAM": 0.035
    },
    "onset": {
      "hit": [
        0.08,
        0.07,
        0.05,
        0.04
      ],
      "air": 0.085,
      "ms": [
        110,
        80,
        45,
        22
      ],
      "freq": 1400,
      "band": [
        104,
        175,
        219
      ],
      "bandHit": [
        0.06,
        0.05,
        0.03,
        0.02
      ],
      "bandMs": 70
    },
    "anchors": [
      "C2",
      "G2",
      "A3",
      "A5"
    ]
  },
  "contrabass": {
    "name": "contrabass",
    "class": {
      "bal": -1,
      "family": "cuerdas",
      "instrument": "contrabass",
      "label": "Contrabass",
      "velRangeDb": 22,
      "regime": "sostenido",
      "articulations": [
        "legato",
        "staccato",
        "détaché"
      ]
    },
    "lo": "C1",
    "hi": "G4",
    "resp": {
      "gain": [
        0.85,
        1,
        1,
        0.9
      ],
      "air": [
        0.05,
        0.06,
        0.08,
        0.1
      ],
      "tilt": [
        0.7,
        0.75,
        0.85,
        0.9
      ],
      "atk": [
        2.2,
        1.6,
        1.1,
        0.8
      ],
      "vib": [
        10,
        14,
        19,
        24
      ],
      "vibRate": [
        4.6,
        5.0,
        5.2,
        5.5
      ],
      "oddEven": [
        0.5,
        0.5,
        0.5,
        0.5
      ]
    },
    "src": {
      "tilt": -12,
      "inharm": 0.002,
      "mode": "harm",
      "nb": [
        2000,
        1.2
      ]
    },
    "form": {
      "f1": [
        62,
        5,
        7
      ],
      "f2": [
        420,
        2,
        4
      ],
      "bank": [
        [
          62,
          5,
          7
        ],
        [
          110,
          4,
          5
        ],
        [
          155,
          3,
          5
        ],
        [
          420,
          2,
          4
        ]
      ]
    },
    "filt": {
      "cut": 4.0,
      "q": 0.8,
      "env": 0.15,
      "t": 0.15
    },
    "env": {
      "decay": 0.1,
      "sustain": 1
    },
    "char": {
      "noise": 0.07,
      "noiseAM": 0.05
    },
    "onset": {
      "hit": [
        0.1,
        0.08,
        0.06,
        0.05
      ],
      "air": 0.09,
      "ms": 60
    },
    "anchors": [
      "E1",
      "G2",
      "D3",
      "G4"
    ]
  },
  "violins_section": {
    "name": "violins_section",
    "class": {
      "bal": -4,
      "family": "cuerdas",
      "instrument": "violins_section",
      "players": 16,
      "label": "Sección de Violines",
      "velRangeDb": 51.5,
      "regime": "sostenido",
      "articulations": [
        "legato",
        "staccato",
        "sostenuto"
      ]
    },
    "lo": "G3",
    "hi": "E7",
    "resp": {
      "gain": [
          0.7522,
          0.6132,
          0.6497,
          0.4790
        ],
      "air": [
        0.07,
        0.06,
        0.06,
        0.08
      ],
      "tilt": [
        0.5,
        0.65,
        0.8,
        0.97
      ],
      "atk": [
        1.7,
        1.15,
        0.8,
        0.55
      ],
      "vib": [
        16,
        20,
        24,
        29
      ],
      "vibRate": [
        5.6,
        5.8,
        6.0,
        6.3
      ],
      "oddEven": [
        0.5,
        0.5,
        0.5,
        0.5
      ]
    },
    "src": {
      "tilt": -9.0,
      "inharm": [
        0.0005,
        0.0005,
        0.0008,
        0.0015
      ],
      "mode": "harm",
      "nb": [
        2500,
        1.5
      ],
      "partials": [
        26,
        17,
        12,
        14
      ]
    },
    "form": {
      "f1": [
        500,
        3.0,
        2.8
      ],
      "f2": [
        2400,
        2.5,
        1.54
      ],
      "bank": [
        [
          285,
          2.0,
          7.0
        ],
        [
          385,
          1.25,
          28.0
        ],
        [
          422,
          2.75,
          31.5
        ],
        [
          528,
          2.75,
          31.5
        ],
        [
          600,
          1.5,
          31.5
        ],
        [
          2400,
          2.5,
          1.75
        ]
      ]
    },
    "filt": {
      "cut": [
        25.51,
        17.03,
        12.5,
        13.65
      ],
      "q": 0.8,
      "env": 0.4,
      "t": 0.04
    },
    "env": {
      "decay": 0.06,
      "sustain": 1,
      "release": [
        0.09,
        0.07,
        0.05,
        0.04
      ]
    },
    "char": {
      "noise": 0.06,
      "noiseAM": 0.03
    },
    "onset": {
      "hit": [
        0.05,
        0.045,
        0.04,
        0.035
      ],
      "air": 0.15,
      "ms": [
        75,
        51,
        34,
        22
      ],
      "freq": 285,
      "band": [
        285,
        528
      ],
      "bandHit": [
        0.06,
        0.09,
        0.1,
        0.12
      ],
      "bandMs": 35
    },
    "anchors": [
      "G3",
      "D4",
      "A4",
      "E5"
    ]
  },
  // 2026-09-02 — LA VIOLA ENTRA OSCURA (Mario: «ningún instrumento de la orquesta tiene ataque directo salvo
  //   percusión, teclados y cuerdas pulsadas; el sonido viene DESPUÉS de poner la cuerda en movimiento — por eso
  //   suenan artificiales»). De las 41 fichas de régimen sostenido, la única con filt.env negativo era el corno,
  //   y el corno es justo la que su oído salva. filt.env +0.35 → −0.35: el Cosmic arranca en cbase·2^env, así que
  //   con negativo entra por debajo y ABRE — el gesto de establecimiento. Mismo giro que el corno el 2026-09-01,
  //   con la magnitud propia de la viola, no la del corno. Un solo número; si falta, el paso siguiente es −0.6.
  //   Solo y sección juntas: la obra suena la sección, y son el mismo instrumento.
  // 2026-09-02 bis — NIVEL: −19 dB (Mario midió 19 dB entre la viola en mf y el corno en mf, que es su techo
  //   para la sección). gain × 0.112, la curva entera sin cambiar de forma: [0.70 0.95 1.00 0.85] → [0.078 0.106
  //   0.112 0.095]. Es una compensación, no una corrección: lo que está mal es que el motor iguala AMPLITUD y no
  //   sonoridad, y la fuente del corno (src.tilt −23.3) es 13 dB/oct más oscura que la de la viola (−10.5), así que
  //   con el mismo rms el corno suena mucho menos. Si algún día el corno recupera su sonoridad, esto vuelve a subir.
  //   Y hay causa debajo: la pendiente efectiva de la viola es +0.3 dB/oct en C3 (src.tilt + 12·tilt) — una fuente
  //   PLANA. Una cuerda frotada va cerca de −6 (Helmholtz; la VSCO mide −5.6 y −6.0 en el cello, −2.5 y −3.7 en la
  //   viola). Arreglar eso se lleva ~7 de los 19 dB y de paso saca dureza; cuando se haga, el gain sube otro tanto.
  // 2026-09-02 ter — EL NIVEL VUELVE A LA FICHA (Mario: «baja la ficha»). Habia bajado a mano el vel
  //   de UNA marca de mf de la viola, de 80 a 51, y con velRangeDb 25 eso son −5.71 dB. Una marca no
  //   es el lugar: quince mf mas en ese pentagrama seguian en 80 y cada uno hubiera quedado a un nivel
  //   distinto. El recorte pasa al gain (×0.518) y la marca vuelve a 80, que es lo que dice la pagina.
  "violas_section": {
    "name": "violas_section",
    "class": {
      "bal": -6,
      "family": "cuerdas",
      "instrument": "violas_section",
      "players": 12,
      "label": "Sección de Violas",
      "velRangeDb": 25,
      "regime": "sostenido",
      "articulations": [
        "legato",
        "staccato",
        "sostenuto"
      ]
    },
    "lo": "C3",
    "hi": "A6",
    "resp": {
      "gain": [
          0.0100,
          0.0146,
          0.0383,
          0.2466
        ],
      "air": [
        0.09,
        0.07,
        0.06,
        0.08
      ],
      "tilt": [
          0.9,
          0.88,
          0.85,
          0.82
        ],
      "atk": [
        1.7,
        1.0,
        0.55,
        0.33
      ],
      "vib": [
        10,
        11,
        12,
        14
      ],
      "vibRate": [
        5.0,
        5.2,
        5.5,
        5.7
      ],
      "oddEven": [
        0.5,
        0.5,
        0.5,
        0.5
      ]
    },
    "src": {
      "tilt": -10.5,
      "inharm": 0.002,
      "mode": "harm",
      "nb": [
        1600,
        1.2
      ],
      "partials": [
        76,
        45,
        18,
        6
      ]
    },
    "form": {
      "f1": [
        220,
        3.0,
        2.1
      ],
      "f2": [
        350,
        2.5,
        2.1
      ],
      "bank": [
        [
          220,
          3.0,
          2.1
        ],
        [
          350,
          2.5,
          2.1
        ],
        [
          600,
          1.5,
          1.75
        ],
        [
          1600,
          2.25,
          1.4
        ]
      ]
    },
    "filt": {
      "cut": [
          30.58,
          22.0,
          16.0,
          12.0
        ],
      "q": 0.85,
      "env": -0.35,
      "t": 0.06
    },
    "env": {
      "decay": 0.06,
      "sustain": 1,
      "release": [
        0.9,
        0.54,
        0.21,
        0.067
      ],
      "decayTilt": [
        0.45,
        0.45,
        0.45,
        0.45
      ]
    },
    "char": {
      "noise": 0.07,
      "noiseAM": 0.04
    },
    "onset": {
      "hit": 0.02,
      "air": 0.09,
      "ms": [
        106,
        63,
        25,
        8
      ],
      "band": [
        220,
        350
      ],
      "bandHit": [
        0.1,
        0.08,
        0.07,
        0.07
      ],
      "bandMs": 140
    },
    "anchors": [
      "C3",
      "A3",
      "C#5",
      "A6"
    ]
  },
  // 2026-09-02 — NIVEL, junto con la viola (Mario: «baja la ficha al igual que la del violoncello»).
  //   Medido sobre el espectro que arma la ficha con ponderacion A —la sonoridad que el motor NO iguala,
  //   porque normaliza amplitud— el cello quedaba +20.5 dB sobre la viola ya corregida, parejo en toda la
  //   zona comun (G2 +19.6 · C3 +20.5 · G3 +19.3 · C4 +20.5 · G4 +21.5). gain ×0.095, un solo factor.
  // 2026-09-09 — SECCION DE CELLOS: lo que decia la variante que se borro. Existio un `cellos_section_medido` sin
  //   comentario de origen, nunca pasado por el oido de Mario y sin respaldo: medido contra la VSCO Cello Section
  //   (susvib, seis alturas) empata con esta ficha —error de forma 6,5 dB la base contra 6,4 el testigo, gana en tres
  //   notas y pierde en tres—, y ademas le faltaba `class.bal: -3`, el asiento de la seccion. Lo que proponia, por si
  //   alguna vez se retoma: resp.tilt [0.62, 0.56, 0.44, 0.26] → [0.50, 0.46, 0.42, 0.39] · resp.atk [3.4, 2.9, 2.1,
  //   1.5] → [2.4, 1.9, 1.1, 0.5] · oddEven 0.50 → 0.53 · src.tilt −12 → −11.5 · env.release [0.24, 0.16, 0.08, 0.04]
  //   → [0.71, 0.64, 0.69, 0.73] (tres veces mas cola, pareja en todo el registro) · y los formantes del cuerpo mucho
  //   mas altos, sobre todo el f2 de 1300 Hz, de +2 a +7 dB. Lo que lo separa de esta ficha es cola y cuerpo, que se
  //   deciden de oido y no por tabla. Borrada a pedido de Mario: «estamos en violines».
  "cellos_section": {
    "name": "cellos_section",
    "class": {
      "bal": -3,
      "family": "cuerdas",
      "instrument": "cellos_section",
      "players": 10,
      "label": "Sección de Violonchelos",
      "velRangeDb": 30,
      "regime": "sostenido",
      "articulations": [
        "legato",
        "staccato",
        "sostenuto"
      ]
    },
    "lo": "C2",
    "hi": "C6",
    "resp": {
      "gain": [
        0.0779,
        0.095,
        0.095,
        0.0836
      ],
      "air": [
        0.078,
        0.065,
        0.065,
        0.091
      ],
      "tilt": [
        0.62,
        0.56,
        0.44,
        0.26
      ],
      "atk": [3.4, 2.9, 2.1, 1.5],   // 2026-09-02 (paso 3, cuerdas con el modelo del toque): la sección arranca DESPUÉS que el solista — el solo (informe §4, Guettler) es 120/95/55/25 ms y la sección le suma el desfase de los atriles (Rasch 30-50 ms) en vez de multiplicarlo: +50 ms por ancla. Medido en el Cello Section de la VSCO (rise 10-90 % en forte 120-270 ms, con el swell de los samples adentro). BANDERA: a calibrar de oído. Previo [2.4, 1.9, 1.1, 0.5] (= el solo)
      "vib": [
        12,
        14,
        17,
        20
      ],
      "vibRate": [
        5.2,
        5.5,
        6.0,
        6.5
      ],
      "oddEven": [
        0.5,
        0.5,
        0.5,
        0.5
      ]
    },
    "src": {
      "tilt": -12.0,
      "inharm": 0.001,
      "mode": "harm",
      "nb": [
        2000,
        1.2
      ],
      "partials": [
        40,
        32,
        20,
        10
      ]
    },
    "form": {
      "f1": [
        175,
        3.5,
        4.2
      ],
      "f2": [
        1300,
        2.0,
        1.75
      ],
      "bank": [
        [
          104,
          5.0,
          5.6
        ],
        [
          145,
          3.5,
          4.2
        ],
        [
          175,
          5.5,
          4.2
        ],
        [
          219,
          4.5,
          4.2
        ],
        [
          400,
          1.0,
          2.1
        ],
        [
          1300,
          0.5,
          1.75
        ]
      ]
    },
    "filt": {
      "cut": [
        30,
        24,
        15,
        7
      ],
      "q": 0.8,
      "env": 0.25,
      "t": 0.1
    },
    "env": {
      "decay": 0.08,
      "sustain": 1,
      "release": [
        0.24,
        0.16,
        0.08,
        0.04
      ]
    },
    "char": {
      "noise": 0.055,
      "noiseAM": 0.035
    },
    "onset": {
      "hit": [
        0.04,
        0.035,
        0.025,
        0.02
      ],
      "air": 0.085,
      "ms": [
        165,
        120,
        68,
        33
      ],
      "freq": 1400,
      "band": [
        104,
        175,
        219
      ],
      "bandHit": [
        0.06,
        0.05,
        0.03,
        0.02
      ],
      "bandMs": 70
    },
    "anchors": [
      "C2",
      "G2",
      "A3",
      "A5"
    ]
  },
  "contrabasses_section": {
    "name": "contrabasses_section",
    "class": {
      "bal": -1,
      "family": "cuerdas",
      "instrument": "contrabasses_section",
      "players": 8,
      "label": "Sección de Contrabajos",
      "velRangeDb": 22,
      "regime": "sostenido",
      "articulations": [
        "legato",
        "staccato",
        "sostenuto"
      ]
    },
    "lo": "C1",
    "hi": "G4",
    "resp": {
      "gain": [
        1.0,
        1.0,
        0.9,
        0.8
      ],
      "air": [
        0.0,
        0.0,
        0.0,
        0.0
      ],
      "tilt": [
        0.8,
        0.85,
        0.9,
        0.95
      ],
      "atk": [
        2.0,
        2.0,
        2.0,
        2.0
      ],
      "vib": [
        7,
        10,
        13,
        16
      ],
      "vibRate": [
        4.2,
        4.5,
        4.8,
        5.0
      ],
      "oddEven": [
        0.5,
        0.5,
        0.5,
        0.5
      ]
    },
    "src": {
      "tilt": -15.0,
      "inharm": 0.022,
      "mode": "harm",
      "nb": [
        2000,
        1.2
      ]
    },
    "form": {
      "f1": [
        110,
        6.0,
        1.5
      ],
      "f2": [
        750,
        6.0,
        1.2
      ]
    },
    "filt": {
      "cut": 3.5,
      "q": 0.65,
      "env": 0.0,
      "t": 0.12
    },
    "env": {
      "decay": 0.18,
      "sustain": 1
    },
    "char": {
      "noise": 0.08,
      "noiseAM": 0.04
    },
    "onset": {
      "hit": 0.03,
      "air": 0.0,
      "ms": 85
    }
  },
  "strings": {
    "name": "strings",
    "class": {
      "family": "cuerdas",
      "instrument": "strings",
      "label": "Strings",
      "regime": "sostenido",
      "articulations": [
        "legato",
        "staccato",
        "tenuto",
        "acento"
      ]
    },
    "lo": "C2",
    "hi": "E7",
    "resp": {
      "gain": [
        0.7,
        1.0,
        1.0,
        0.85
      ],
      "air": [
        0.1,
        0.1,
        0.1,
        0.1
      ],
      "tilt": [
        0.4,
        0.55,
        0.68,
        0.75
      ],
      "atk": [
        1.0,
        1.0,
        0.9,
        0.85
      ],
      "vib": [
        11,
        14,
        17,
        20
      ],
      "vibRate": [
        5.2,
        5.4,
        5.6,
        5.8
      ],
      "oddEven": [
        0.5,
        0.5,
        0.5,
        0.5
      ]
    },
    "src": {
      "tilt": -8.0,
      "inharm": 0.0,
      "mode": "harm",
      "nb": [
        2000,
        1.2
      ]
    },
    "form": {
      "f1": [
        500,
        5,
        1.2
      ],
      "f2": [
        2500,
        6,
        1.0
      ]
    },
    "filt": {
      "cut": 13,
      "q": 1.0,
      "env": 0.0,
      "t": 0.1
    },
    "env": {
      "decay": 0.6,
      "sustain": 1
    },
    "char": {
      "noise": 0.12,
      "noiseAM": 0.0
    },
    "onset": {
      "hit": 0.0,
      "air": 0.0,
      "ms": 90
    }
  },
  "full_strings": {
    "name": "full_strings",
    "class": {
      "family": "cuerdas",
      "instrument": "full_strings",
      "label": "Full Strings",
      "regime": "sostenido",
      "articulations": [
        "legato",
        "staccato",
        "sostenuto"
      ]
    },
    "lo": "C1",
    "hi": "E7",
    "resp": {
      "gain": [
        1.0,
        1.0,
        0.95,
        0.9
      ],
      "air": [
        0.0,
        0.0,
        0.0,
        0.0
      ],
      "tilt": [
        0.75,
        0.8,
        0.85,
        0.9
      ],
      "atk": [
        2.0,
        2.0,
        2.0,
        2.0
      ],
      "vib": [
        11,
        14,
        17,
        20
      ],
      "vibRate": [
        5.2,
        5.4,
        5.6,
        5.8
      ],
      "oddEven": [
        0.5,
        0.5,
        0.5,
        0.5
      ]
    },
    "src": {
      "tilt": -13.5,
      "inharm": 0,
      "mode": "harm",
      "nb": [
        2000,
        1.2
      ]
    },
    "form": {
      "f1": [
        180,
        6.0,
        1.6
      ],
      "f2": [
        2800,
        6.0,
        1.3
      ]
    },
    "filt": {
      "cut": 5.8,
      "q": 0.65,
      "env": 0.0,
      "t": 0.1
    },
    "env": {
      "decay": 0.2,
      "sustain": 1
    },
    "char": {
      "noise": 0.08,
      "noiseAM": 0.04
    },
    "onset": {
      "hit": 0.01,
      "air": 0.0,
      "ms": 80
    }
  },
  // 2026-09-09 — PIZZ: MEDIDO Y NO ESCRITO. Se probó una variante con tres cambios y Mario la retiró («por el momento
  //   no estamos ahí»), así que `pizzicato` queda como estaba y acá quedan los números para cuando toque. Todo medido
  //   contra `LLVln_Pizz_A4` de la VSCO —la toma que él dio por buena— y contra sus grabaciones del Barbé del 06-09.
  //   (1) resp.atk [1.4, 1.2, 1.0, 0.8] → 0.15: una cuerda pellizcada NO TIENE RAMPA. Pico de cada período: la muestra
  //   llega al máximo en el 4º (9 ms) con el primero ya a −6,8 dB del máximo; la ficha empieza 11,6 dB abajo y llega
  //   en el período 16 (32 ms). Con 0.15 el arranque queda calcado (−6,9 · máximo en el 3º-4º). Mario lo oyó como
  //   «menos tensión».
  //   (2) env.decay [6.7, 4.5, 1.9, 0.7] → [2.0, 1.3, 0.5, 0.13]: el Do3 pierde 8,8 dB en un segundo, o sea que suena
  //   MÁS LARGO que la cuerda al aire de su Barbé (T60 3,3 a 6,2 s medido en sus tomas; el Do queda fuera, mal grabado)
  //   y mucho más que la nota PISADA del violín de la biblioteca (0,97 · 1,16 · 1,03 s). El pizz de orquesta es casi
  //   siempre pisado. Falta además distinguir pisada de al aire: hoy la curva es sólo por registro.
  //   (3) src.tilt −14 → −22 dB/oct: el pellizco nace con doce parciales arriba y la muestra con tres y medio.
  //   Y sin resolver: la caída de altura del pellizco (la medición cambia de SIGNO según cómo se detecte el arranque)
  //   y el golpe del dedo (la muestra tiene 10 dB más entre 60 y 250 Hz en los primeros 12 ms, y es brillante en el
  //   golpe y oscura en el cuerpo; mover onset.freq y hit no movió ninguna de las dos bandas).
  "pizzicato": {
    "name": "pizzicato",
    "mix": { "vol": 0.874 },
    "class": {
      "velRangeDb": 20,
      "family": "cuerdas",
      "instrument": "pizzicato",
      "label": "Pizzicato",
      "regime": "pulsado",
      "articulations": [
        "staccato",
        "acento",
        "armonicos"
      ]
    },
    "lo": "G2",
    "hi": "G5",
    "anchors": ["G2", "D3", "D4", "G5"],
    "resp": {
      "gain": [0.90, 0.95, 1.00, 0.85],
      "air": [0.10, 0.10, 0.12, 0.15],
      "tilt": [0.30, 0.35, 0.40, 0.50],
      "atk": [0.28, 0.24, 0.20, 0.16],
      "vib": [
        6,
        8,
        10,
        8
      ],
      "vibRate": [
        5.0,
        5.2,
        5.5,
        5.7
      ],
      "oddEven": [0.5, 0.5, 0.5, 0.5]
    },
    "src": {
      "tilt": -14.0,
      "inharm": [0.001, 0.001, 0.0015, 0.005],
      "duet": [[1.5, 1.5, 2, 2], [0.25, 0.25, 0.20, 0.20]],
      "mode": "inharm",
      "partials": [32, 24, 16, 8],
      "phaseMs": 1.5,
      "nb": [2500, 1.2]
    },
    "form": {
      "f1": [275, 8, 15],
      "f2": [2300, 6, 3],
      "bank": [
        [100, 6, 12],
        [275, 8, 15],
        [420, 4, 20],
        [470, 8, 20],
        [550, 8, 20],
        [2300, 6, 3]
      ]
    },
    "filt": {
      "cut": [40, 32, 18, 8],
      "q": 0.7,
      "env": 0.5,
      "t": 0.12
    },
    "env": {
      "decay": [2.01, 1.35, 0.57, 0.21],
      "sustain": 0,
      "release": [0.05, 0.05, 0.04, 0.03],
      "bloom": [0.45, 0.35, 0.20, 0.10],
      "decayTilt": [0.50, 0.60, 0.70, 0.80],
      "relNoise": [0.30, 0.30, 0.25, 0.20]
    },
    "char": {
      "noise": 0.05,
      "noiseAM": 0
    },
    "onset": {
      "band": [275, 460],
      "bandHit": [0, 0.10, 0.40, 0.50],
      "bandMs": 60,
      "hit": [0.48, 0.42, 0.38, 0.35],
      "air": 0.30,
      "ms": 15,
      "freq": 200,
      "pitch": 3,
      "pitchMs": 30
    }
  },
  "strings_pizzicato": {
    "name": "strings_pizzicato",
    "mix": { "vol": 0.874 },
    "class": {
      "velRangeDb": 18,
      "family": "cuerdas",
      "instrument": "strings_pizzicato",
      "label": "Strings Pizzicato",
      "regime": "percusivo",
      "articulations": [
        "staccato",
        "seco"
      ]
    },
    "lo": "C2",
    "hi": "C6",
    "anchors": ["C2", "G2", "D4", "C6"],
    "resp": {
      "gain": [1.00, 1.00, 0.95, 0.85],
      "air": [0.20, 0.20, 0.22, 0.25],
      "tilt": [0.25, 0.30, 0.38, 0.48],
      "atk": [0.48, 0.40, 0.36, 0.28],
      "vib": [
        5,
        6,
        8,
        6
      ],
      "vibRate": [
        5.0,
        5.2,
        5.5,
        5.7
      ],
      "oddEven": [0.5, 0.5, 0.5, 0.5]
    },
    "src": {
      "tilt": -16.0,
      "inharm": [0.002, 0.001, 0.001, 0.004],
      "duet": [[6, 7, 8, 8], [0.80, 0.80, 0.80, 0.80]],
      "trio": [[-5, -6, -7, -8], [0.70, 0.70, 0.70, 0.70]],
      "mode": "inharm",
      "partials": [32, 24, 16, 8],
      "phaseMs": 1.5,
      "nb": [2500, 1.2]
    },
    "form": {
      "f1": [110, 8, 20],
      "f2": [2300, 5, 3],
      "bank": [
        [60, 6, 10],
        [110, 8, 20],
        [219, 8, 20],
        [420, 4, 20],
        [550, 6, 20],
        [2300, 5, 3]
      ]
    },
    "filt": {
      "cut": [32, 24, 16, 8],
      "q": 0.7,
      "env": 0.5,
      "t": 0.15
    },
    "env": {
      "decay": [1.76, 0.70, 0.20, 0.064],
      "sustain": 0,
      "release": [0.08, 0.07, 0.06, 0.05],
      "bloom": [0.50, 0.45, 0.30, 0.15],
      "decayTilt": [0.50, 0.50, 0.60, 0.70],
      "relNoise": [0.35, 0.35, 0.30, 0.25]
    },
    "char": {
      "noise": 0.05,
      "noiseAM": 0
    },
    "onset": {
      "band": [275, 460],
      "bandHit": [0, 0.08, 0.35, 0.45],
      "bandMs": 60,
      "hit": [0.32, 0.28, 0.24, 0.22],
      "air": 0.35,
      "ms": 22,
      "freq": 150,
      "pitch": 4,
      "pitchMs": 40
    }
  },
  "gamba": {
    "name": "gamba",
    "class": {
      "family": "cuerdas",
      "instrument": "gamba",
      "label": "Viola da gamba",
      "regime": "sostenido",
      "articulations": [
        "legato",
        "staccato",
        "notes_tenues",
        "detache",
        "legatissimo",
        "tenuto"
      ]
    },
    "lo": "A1",
    "hi": "D5",
    "resp": {
      "gain": [
        0.68,
        0.82,
        1,
        0.9
      ],
      "air": [
        0.09,
        0.08,
        0.07,
        0.09
      ],
      "tilt": [
        0.55,
        0.45,
        0.7,
        0.85
      ],
      "atk": [
        1.8,
        1.4,
        0.8,
        0.3
      ],
      "vib": [
        0,
        0,
        0,
        18
      ],
      "vibRate": [
        0,
        0,
        0,
        5
      ],
      "oddEven": [
        0.5,
        0.5,
        0.5,
        0.5
      ]
    },
    "src": {
      "tilt": -12.0,
      "inharm": 0.001,
      "mode": "harm",
      "nb": [
        1500,
        1.2
      ]
    },
    "form": {
      "f1": [
        260,
        6,
        3.5
      ],
      "f2": [
        1800,
        6.0,
        1.3
      ]
    },
    "filt": {
      "cut": 4.5,
      "q": 0.8,
      "env": 0.5,
      "t": 0.06
    },
    "env": {
      "decay": 0.08,
      "sustain": 1,
      "release": [
        0.16,
        0.13,
        0.08,
        0.05
      ]
    },
    "char": {
      "noise": 0.07,
      "noiseAM": 0.03
    },
    "onset": {
      "hit": [
        0.05,
        0.05,
        0.04,
        0.04
      ],
      "air": 0.0,
      "ms": [
        90,
        68,
        38,
        14
      ]
    },
    "anchors": [
      "A1",
      "D2",
      "C3",
      "A4"
    ]
  },
  "guitar": {
    "name": "guitar",
    "class": {
      "family": "cuerdas",
      "instrument": "guitar",
      "label": "Guitar",
      "regime": "percusivo",
      "articulations": [
        "legato",
        "staccato",
        "apoyado"
      ]
    },
    "lo": "E2",
    "hi": "B5",
    "anchors": ["E2", "D3", "G3", "B5"],
    "resp": {
      "gain": [1.00, 1.00, 0.95, 0.80],
      "air": [0.05, 0.06, 0.08, 0.10],
      "tilt": [0.45, 0.55, 0.40, 0.35],
      "atk": [1.0, 1.0, 1.1, 0.8],
      "vib": [0, 0, 0, 0],
      "vibRate": [0, 0, 0, 0],
      "oddEven": [0.5, 0.5, 0.5, 0.5]
    },
    "src": {
      "tilt": -13.0,
      "inharm": [0.0019, 0.0017, 0.012, 0.035],
      "duet": [[1, 1, 1.5, 2], [0.30, 0.30, 0.30, 0.20]],
      "mode": "inharm",
      "partials": [32, 24, 20, 8],
      "phaseMs": 1.5,
      "nb": [3000, 1.2]
    },
    "form": {
      "f1": [100, 8, 16],
      "f2": [520, 2, 20],
      "bank": [
        [100, 8, 16],
        [200, 6, 24],
        [250, 3, 30],
        [400, 3, 30],
        [520, 2, 20]
      ]
    },
    "filt": {
      "cut": [60, 40, 32, 7],
      "q": 0.7,
      "env": 0.45,
      "t": 0.25
    },
    "env": {
      "decay": [9.5, 7.5, 6.2, 1.1],
      "sustain": 0,
      "bloom": [0.45, 0.40, 0.35, 0.15],
      "decayTilt": [0.25, 0.30, 0.30, 0.40],
      "relNoise": [0.15, 0.15, 0.12, 0.10]
    },
    "char": {
      "noise": 0,
      "noiseAM": 0
    },
    "onset": {
      "hit": [0.30, 0.32, 0.35, 0.40],
      "air": 0.28,
      "ms": 8,
      "freq": 120,
      "pitch": 6,
      "pitchMs": 40
    }
  },

  // ── 2026-08-24 · OTRAS FAMILIAS, primera tanda ────────────────────────────────────────────────
  // Cuatro instrumentos que hasta hoy no existian en el banco, numerizados de los informes de la
  // deep-research (maderas/flauta-dulce-investigacion.md y cuerdas/pulsados-folk-investigacion.md).
  // Entran a la lista en dos secciones nuevas al final (Other · Recorders / Other · Folk plucked)
  // para no mezclarse con la orquesta. Todo BANDERA hasta el A/B de oido de Mario.
  //
  // FLAUTAS DE PICO — lo que las separa de la travesera, medido: char.noise 0.55/0.50 contra 0.30
  //   (el chorro es MENOS turbulento pero el tono es 10-15 dB mas debil: el cociente sube) ·
  //   oddEven 0.30-0.44 y no 0.50 (resonador abierto = serie completa, pero el labium centrado
  //   anula los pares: Fletcher y Douglas 1980; medido p2/p1 = -21.8 dB a presion baja) ·
  //   form.f2 = banda de ruido de borde 2400/3000 Hz, una DECADA mas abajo que el 9000 de la
  //   travesera · onset.ms 60 ms MEDIDOS en C5 (Giordano y Thacker 2016) contra 30 de la travesera.
  //   filt.cut va como multiplo de f0 (contrato del motor) con piso 2.5: el corte de red real cae
  //   POR DEBAJO de la f0 en el agudo y escribirlo literal apagaba la nota — la pobreza del agudo
  //   la lleva resp.tilt, que es donde corresponde.
  "recorder_alto": {
    "name": "recorder_alto",
    "class": {
      "family": "maderas",
      "instrument": "recorder_alto",
      "label": "Recorder (alto)",
      "regime": "sostenido",
      "articulations": [
        "legato",
        "staccato",
        "tenuto"
      ],
      "velRangeDb": 6
    },
    "lo": "F4",
    "hi": "G6",
    "anchors": [
      "F4",
      "C5",
      "F5",
      "G6"
    ],
    "resp": {
      "gain": [
        0.8,
        1.0,
        0.95,
        0.62
      ],
      "air": [
        0.34,
        0.28,
        0.26,
        0.3
      ],
      "tilt": [
        0.62,
        0.55,
        0.45,
        0.28
      ],
      "atk": [
        2.2,
        1.8,
        1.5,
        1.2
      ],
      "vib": [
        0,
        3,
        4,
        3
      ],
      "vibRate": [
        4.5,
        5.0,
        5.2,
        5.2
      ],
      "oddEven": [
        0.3,
        0.33,
        0.36,
        0.42
      ]
    },
    "src": {
      "tilt": -18.0,
      "inharm": 0.0008,
      "mode": "harm",
      "nb": [
        2400,
        1.1
      ]
    },
    "form": {
      "f1": [
        900,
        2.5,
        1.2
      ],
      "f2": [
        2400,
        2.0,
        0.9
      ]
    },
    "filt": {
      "cut": [
        8.6,
        5.0,
        3.2,
        1.15
      ],
      "q": 0.7,
      "env": 0.5,
      "t": 0.06
    },
    "env": {
      "decay": 0.1,
      "sustain": 1,
      "release": [
        0.16,
        0.1,
        0.08,
        0.04
      ]
    },
    "char": {
      "noise": 0.55,
      "noiseAM": 0.03
    },
    "onset": {
      "hit": [
        0.1,
        0.08,
        0.07,
        0.06
      ],
      "air": 0.42,
      "ms": [
        70,
        55,
        45,
        35
      ]
    }
  },
  "recorder_soprano": {
    "name": "recorder_soprano",
    "class": {
      "family": "maderas",
      "instrument": "recorder_soprano",
      "label": "Recorder (soprano)",
      "regime": "sostenido",
      "articulations": [
        "legato",
        "staccato",
        "tenuto"
      ],
      "velRangeDb": 5
    },
    "lo": "C5",
    "hi": "D7",
    "anchors": [
      "C5",
      "G5",
      "C6",
      "D7"
    ],
    "resp": {
      "gain": [
        0.82,
        1.0,
        0.93,
        0.55
      ],
      "air": [
        0.32,
        0.26,
        0.25,
        0.3
      ],
      "tilt": [
        0.58,
        0.5,
        0.4,
        0.22
      ],
      "atk": [
        1.9,
        1.6,
        1.4,
        1.1
      ],
      "vib": [
        0,
        3,
        4,
        3
      ],
      "vibRate": [
        4.8,
        5.2,
        5.4,
        5.4
      ],
      "oddEven": [
        0.3,
        0.33,
        0.36,
        0.44
      ]
    },
    "src": {
      "tilt": -18.5,
      "inharm": 0.0008,
      "mode": "harm",
      "nb": [
        3000,
        1.1
      ]
    },
    "form": {
      "f1": [
        1350,
        2.5,
        1.2
      ],
      "f2": [
        3000,
        2.0,
        0.9
      ]
    },
    "filt": {
      "cut": [
        8.0,
        4.6,
        2.9,
        1.02
      ],
      "q": 0.7,
      "env": 0.5,
      "t": 0.06
    },
    "env": {
      "decay": 0.09,
      "sustain": 1,
      "release": [
        0.11,
        0.07,
        0.05,
        0.025
      ]
    },
    "char": {
      "noise": 0.5,
      "noiseAM": 0.03
    },
    "onset": {
      "hit": [
        0.11,
        0.09,
        0.08,
        0.06
      ],
      "air": 0.38,
      "ms": [
        55,
        45,
        38,
        28
      ]
    }
  },

  // PULSADOS FOLK — el banjo es OTRO instrumento, no una guitarra con parche: Woodhouse mide su
  //   admitancia de puente 20-30 dB POR ENCIMA de seis guitarras de concierto, y la cuerda pierde
  //   diez veces mas rapido (T60 0.7-1.4 s contra 2.1-2.8 de la guitarra). Suena +10 dB al empezar
  //   y a los 400 ms ya perdio. form.bank = los modos del PARCHE medidos (290 fundamental con carga
  //   de aire, 462 de la serie, 750 el formante principal) + el bridge hill de 3.2 kHz.
  //   La MANDOLINA trae el cuerpo medido en siete instrumentos (A0 194 Hz, monopolo 554, 740) y lo
  //   que la define: el par de cuerdas desafinado 3-5 cents = duet, que da batidos de 0.34 Hz en el
  //   Sol3 y 3.8 Hz en el Mi6. Ojo: duet solo suena en mode inharm, y los dos son inharm.
  //   src.tilt: el informe lo da por ancla y el motor lo tiene escalar — se escribe escalar, mas
  //   brillante que la guitarra (-13.0), y la forma por registro la lleva resp.tilt. BANDERA.
  "banjo": {
    "name": "banjo",
    "class": { "family": "cuerdas", "instrument": "banjo", "label": "Banjo", "regime": "percusivo",
      "articulations": ["legato", "staccato", "roll"] },
    "lo": "D3", "hi": "C6",
    "anchors": ["D3", "G3", "D4", "C6"],
    "resp": {
      "gain": [0.80, 0.95, 1.00, 0.90],
      "air": [0.20, 0.22, 0.25, 0.30],
      "tilt": [0.55, 0.55, 0.50, 0.40],
      "atk": [1.0, 1.0, 1.1, 1.2],
      "vib": [0, 0, 0, 0],
      "vibRate": [0, 0, 0, 0],
      "oddEven": [0.50, 0.50, 0.52, 0.55]
    },
    "src": {
      "tilt": -10.0,
      "inharm": [0.0015, 0.0056, 0.0018, 0.0228],
      "duet": [[2, 2, 3, 4], [0.50, 0.50, 0.50, 0.40]],
      "mode": "inharm",
      "partials": [40, 32, 24, 10],
      "phaseMs": 1.5,
      "nb": [3200, 1.2]
    },
    "form": {
      "f1": [290, 8, 4],
      "f2": [750, 9, 5],
      "bank": [ [290, 8, 4], [462, 5, 4], [750, 9, 5], [3200, 6, 6], [5000, 4, 7] ]
    },
    "filt": { "cut": [68, 56, 41, 12], "q": 0.7, "env": -0.8, "t": 0.15 },
    "env": {
      "decay": [1.5, 1.1, 0.75, 0.25],
      "sustain": 0,
      "release": 0.02,
      "bloom": [0.05, 0.10, 0.20, 0.35],
      "decayTilt": [0.45, 0.50, 0.55, 0.65],
      "relNoise": [0.10, 0.10, 0.08, 0.06]
    },
    "char": { "noise": 0.12, "noiseAM": 0 },
    "onset": { "hit": [0.45, 0.45, 0.50, 0.55], "air": 0.27, "ms": 3, "freq": 290, "pitch": 20, "pitchMs": 60 }
  },
  "mandolin": {
    "name": "mandolin",
    "class": { "family": "cuerdas", "instrument": "mandolin", "label": "Mandolin", "regime": "percusivo",
      "articulations": ["legato", "staccato", "tremolo"] },
    "lo": "G3", "hi": "E6",
    "anchors": ["G3", "D4", "A4", "E6"],
    "resp": {
      "gain": [1.00, 0.90, 0.95, 0.80],
      "air": [0.12, 0.14, 0.16, 0.20],
      "tilt": [0.45, 0.45, 0.42, 0.35],
      "atk": [1.1, 1.1, 1.2, 1.3],
      "vib": [0, 0, 0, 0],
      "vibRate": [0, 0, 0, 0],
      "oddEven": [0.55, 0.55, 0.58, 0.60]
    },
    "src": {
      "tilt": -11.5,
      "inharm": [0.0064, 0.0064, 0.0192, 0.0183],
      "duet": [[3, 3, 4, 5], [0.89, 0.89, 0.89, 0.79]],
      "mode": "inharm",
      "partials": [32, 28, 22, 8],
      "phaseMs": 1.2,
      "nb": [2500, 1.2]
    },
    "form": {
      "f1": [194, 7, 10],
      "f2": [554, 6, 8],
      "bank": [ [194, 7, 10], [554, 6, 8], [740, 4, 7], [2500, 2, 4] ]
    },
    "filt": { "cut": [36, 27, 20, 8], "q": 0.7, "env": -0.6, "t": 0.25 },
    "env": {
      "decay": [2.2, 1.8, 1.4, 0.45],
      "sustain": 0,
      "release": 0.04,
      "bloom": [0.10, 0.20, 0.35, 0.40],
      "decayTilt": [0.35, 0.40, 0.45, 0.55],
      "relNoise": [0.12, 0.12, 0.10, 0.08]
    },
    "char": { "noise": 0.16, "noiseAM": 0 },
    "onset": { "hit": [0.25, 0.25, 0.28, 0.30], "air": 0.22, "ms": 2, "freq": 194, "pitch": 8, "pitchMs": 40 }
  },
  "voice_soprano": {
    "name": "voice_soprano",
    "class": {
      "family": "voz",
      "instrument": "voice_soprano",
      "label": "Soprano",
      "regime": "sostenido",
      "articulations": [
        "legato",
        "staccato",
        "tenuto"
      ],
      "velRangeDb": [
        40,
        45,
        45,
        30
      ]
    },
    "lo": "C4",
    "hi": "C6",
    "resp": {
      "gain": [
        0.8,
        1.0,
        1.0,
        0.85
      ],
      "air": [
        0.05,
        0.05,
        0.06,
        0.08
      ],
      "tilt": [
        0.72,
        0.7,
        0.56,
        0.42
      ],
      "atk": [
        1.2,
        1.1,
        1,
        0.9
      ],
      "vib": [
        6,
        8,
        10,
        10
      ],
      "vibRate": [
        5.5,
        5.7,
        6,
        6
      ],
      "oddEven": [
        0.5,
        0.5,
        0.5,
        0.5
      ]
    },
    "src": {
      "tilt": -8.0,
      "inharm": 0.0,
      "mode": "harm",
      "nb": [
        2000,
        1.2
      ]
    },
    "form": {
      "f1": [
        825,
        8,
        8.0
      ],
      "f2": [
        3050,
        5,
        2.5
      ]
    },
    "filt": {
      "cut": 6,
      "q": 0.8,
      "env": 0.0,
      "t": 0.1
    },
    "env": {
      "decay": 0.15,
      "sustain": 1
    },
    "char": {
      "noise": 0.05,
      "noiseAM": 0.02
    },
    "onset": {
      "hit": 0.02,
      "air": 0.08,
      "ms": 40
    },
    "anchors": [
      "C4",
      "Eb4",
      "F#5",
      "C6"
    ]
  },
  "voice_alto": {
    "name": "voice_alto",
    "class": {
      "family": "voz",
      "instrument": "voice_alto",
      "label": "Alto",
      "regime": "sostenido",
      "articulations": [
        "legato",
        "staccato",
        "tenuto"
      ],
      "velRangeDb": [
        42,
        45,
        45,
        38
      ]
    },
    "lo": "F3",
    "hi": "F5",
    "resp": {
      "gain": [
        0.8,
        1.0,
        1.0,
        0.85
      ],
      "air": [
        0.05,
        0.05,
        0.06,
        0.07
      ],
      "tilt": [
        0.7,
        0.64,
        0.55,
        0.48
      ],
      "atk": [
        1.3,
        1.2,
        1.1,
        1
      ],
      "vib": [
        6,
        8,
        9,
        9
      ],
      "vibRate": [
        5.2,
        5.4,
        5.6,
        5.6
      ],
      "oddEven": [
        0.5,
        0.5,
        0.5,
        0.5
      ]
    },
    "src": {
      "tilt": -7.5,
      "inharm": 0.0,
      "mode": "harm",
      "nb": [
        2000,
        1.2
      ]
    },
    "form": {
      "f1": [
        830,
        8,
        9.0
      ],
      "f2": [
        2950,
        10,
        2.5
      ]
    },
    "filt": {
      "cut": 5.5,
      "q": 0.8,
      "env": 0.0,
      "t": 0.1
    },
    "env": {
      "decay": 0.15,
      "sustain": 1
    },
    "char": {
      "noise": 0.05,
      "noiseAM": 0.02
    },
    "onset": {
      "hit": 0.02,
      "air": 0.07,
      "ms": 42
    },
    "anchors": [
      "F3",
      "A4",
      "D5",
      "F5"
    ]
  },
  "voice_tenor": {
    "name": "voice_tenor",
    "class": {
      "family": "voz",
      "instrument": "voice_tenor",
      "label": "Tenor",
      "regime": "sostenido",
      "articulations": [
        "legato",
        "staccato",
        "tenuto"
      ],
      "velRangeDb": [
        42,
        45,
        45,
        32
      ]
    },
    "lo": "C3",
    "hi": "C5",
    "resp": {
      "gain": [
        0.8,
        1.0,
        1.0,
        0.85
      ],
      "air": [
        0.04,
        0.05,
        0.05,
        0.06
      ],
      "tilt": [
        0.72,
        0.66,
        0.58,
        0.5
      ],
      "atk": [
        1.3,
        1.2,
        1.1,
        1
      ],
      "vib": [
        6,
        8,
        9,
        9
      ],
      "vibRate": [
        5,
        5.2,
        5.5,
        5.5
      ],
      "oddEven": [
        0.5,
        0.5,
        0.5,
        0.5
      ]
    },
    "src": {
      "tilt": -7.0,
      "inharm": 0.0,
      "mode": "harm",
      "nb": [
        2000,
        1.2
      ]
    },
    "form": {
      "f1": [
        700,
        8,
        9.0
      ],
      "f2": [
        2850,
        11,
        2.5
      ]
    },
    "filt": {
      "cut": 5.5,
      "q": 0.8,
      "env": 0.0,
      "t": 0.1
    },
    "env": {
      "decay": 0.15,
      "sustain": 1
    },
    "char": {
      "noise": 0.05,
      "noiseAM": 0.02
    },
    "onset": {
      "hit": 0.03,
      "air": 0.07,
      "ms": 40
    },
    "anchors": [
      "C3",
      "D4",
      "G4",
      "C5"
    ]
  },
  "voice_bass": {
    "name": "voice_bass",
    "class": {
      "family": "voz",
      "instrument": "voice_bass",
      "label": "Bass",
      "regime": "sostenido",
      "articulations": [
        "legato",
        "staccato",
        "tenuto"
      ],
      "velRangeDb": [
        42,
        45,
        45,
        38
      ]
    },
    "lo": "E2",
    "hi": "E4",
    "resp": {
      "gain": [
        0.8,
        1.0,
        1.0,
        0.85
      ],
      "air": [
        0.04,
        0.04,
        0.05,
        0.06
      ],
      "tilt": [
        0.75,
        0.68,
        0.6,
        0.52
      ],
      "atk": [
        1.4,
        1.3,
        1.2,
        1.1
      ],
      "vib": [
        5,
        7,
        8,
        8
      ],
      "vibRate": [
        4.8,
        5,
        5.2,
        5.2
      ],
      "oddEven": [
        0.5,
        0.5,
        0.5,
        0.5
      ]
    },
    "src": {
      "tilt": -7.0,
      "inharm": 0.0,
      "mode": "harm",
      "nb": [
        2000,
        1.2
      ]
    },
    "form": {
      "f1": [
        700,
        8,
        9.0
      ],
      "f2": [
        2400,
        11,
        2.5
      ]
    },
    "filt": {
      "cut": 5,
      "q": 0.8,
      "env": 0.0,
      "t": 0.1
    },
    "env": {
      "decay": 0.15,
      "sustain": 1
    },
    "char": {
      "noise": 0.05,
      "noiseAM": 0.02
    },
    "onset": {
      "hit": 0.03,
      "air": 0.06,
      "ms": 45
    },
    "anchors": [
      "E2",
      "Ab3",
      "Db4",
      "E4"
    ]
  },
  "ping": {
    "name": "ping",
    "class": {
      "family": "sinteticos",
      "instrument": "ping",
      "label": "Ping",
      "regime": "percutido",
      "articulations": [
        "staccato",
        "acento"
      ]
    },
    "lo": "C1",
    "hi": "C8",
    "resp": {
      "gain": [
        0.7,
        1.0,
        1.0,
        0.85
      ],
      "air": [
        0.0,
        0.0,
        0.0,
        0.0
      ],
      "tilt": [
        0.3,
        0.5,
        0.7,
        0.8
      ],
      "atk": [
        1.0,
        1.0,
        0.9,
        0.85
      ],
      "vib": [
        0.0,
        0.0,
        0.0,
        0.0
      ],
      "vibRate": [
        5.5,
        5.5,
        5.5,
        5.5
      ],
      "oddEven": [
        0.5,
        0.5,
        0.5,
        0.5
      ]
    },
    "src": {
      "tilt": -12.0,
      "inharm": 0.0,
      "mode": "harm",
      "nb": [
        2000,
        1.2
      ]
    },
    "form": {
      "f1": [
        1000,
        0,
        2.0
      ],
      "f2": [
        3000,
        0,
        2.5
      ]
    },
    "filt": {
      "cut": 10.0,
      "q": 1.0,
      "env": 0.0,
      "t": 0.1
    },
    "env": {
      "decay": 0.8,
      "sustain": 0
    },
    "char": {
      "noise": 0.0,
      "noiseAM": 0.0
    },
    "onset": {
      "hit": 0.2,
      "air": 0.0,
      "ms": 4
    }
  },
  "sine": {
    "name": "sine",
    "class": {
      "family": "sinteticos",
      "instrument": "sine",
      "label": "Sine",
      "regime": "sostenido",
      "articulations": [
        "legato",
        "staccato",
        "tenuto",
        "acento"
      ]
    },
    "lo": "C1",
    "hi": "C8",
    "resp": {
      "gain": [
        0.7,
        1.0,
        1.0,
        0.85
      ],
      "air": [
        0.0,
        0.0,
        0.0,
        0.0
      ],
      "tilt": [
        0.2,
        0.2,
        0.2,
        0.2
      ],
      "atk": [
        1.0,
        1.0,
        0.9,
        0.85
      ],
      "vib": [
        0.0,
        0.0,
        0.0,
        0.0
      ],
      "vibRate": [
        5.5,
        5.5,
        5.5,
        5.5
      ],
      "oddEven": [
        0.5,
        0.5,
        0.5,
        0.5
      ]
    },
    "src": {
      "tilt": -30.0,
      "inharm": 0.0,
      "mode": "harm",
      "nb": [
        2000,
        1.2
      ]
    },
    "form": {
      "f1": [
        1000,
        0,
        2.0
      ],
      "f2": [
        3000,
        0,
        2.5
      ]
    },
    "filt": {
      "cut": 10.0,
      "q": 1.0,
      "env": 0.0,
      "t": 0.1
    },
    "env": {
      "decay": 0.6,
      "sustain": 1
    },
    "char": {
      "noise": 0.0,
      "noiseAM": 0.0
    },
    "onset": {
      "hit": 0.0,
      "air": 0.0,
      "ms": 10
    }
  },
  "organ": {
    "name": "organ",
    "class": {
      "family": "sinteticos",
      "instrument": "organ",
      "label": "Organ",
      "regime": "sostenido",
      "articulations": [
        "legato",
        "staccato",
        "tenuto",
        "acento"
      ]
    },
    "lo": "C1",
    "hi": "C8",
    "resp": {
      "gain": [
        0.7,
        1.0,
        1.0,
        0.85
      ],
      "air": [
        0.0,
        0.0,
        0.0,
        0.0
      ],
      "tilt": [
        0.55,
        0.6,
        0.65,
        0.7
      ],
      "atk": [
        1.0,
        1.0,
        0.9,
        0.85
      ],
      "vib": [
        0.0,
        0.0,
        0.0,
        0.0
      ],
      "vibRate": [
        5.5,
        5.5,
        5.5,
        5.5
      ],
      "oddEven": [
        0.5,
        0.5,
        0.5,
        0.5
      ]
    },
    "src": {
      "tilt": -9.0,
      "inharm": 0.0,
      "mode": "harm",
      "nb": [
        2000,
        1.2
      ]
    },
    "form": {
      "f1": [
        1500,
        4,
        1.2
      ],
      "f2": [
        3000,
        3,
        1.2
      ]
    },
    "filt": {
      "cut": 10.0,
      "q": 1.0,
      "env": 0.0,
      "t": 0.1
    },
    "env": {
      "decay": 0.5,
      "sustain": 1
    },
    "char": {
      "noise": 0.0,
      "noiseAM": 0.0
    },
    "onset": {
      "hit": 0.0,
      "air": 0.0,
      "ms": 8
    }
  },
  // 2026-09-12 (Mario, «estilo Tomita, transparentes y misteriosos»): pads a bajo nivel, vibrato marcado,
  //   barridos de filtro resonantes y espectro limpio. El motor no tiene reverb/eco/phaser (el "wash" de
  //   Tomita) — eso se prototipa en un lab aparte. Max 5. A afinar de oido.
  "synth_aahs": {
    "name": "synth_aahs",
    "class": { "family": "sinteticos", "instrument": "synth_aahs", "label": "Synth Aahs", "regime": "sostenido", "articulations": ["legato", "tenuto"] },
    "lo": "C2", "hi": "C6",
    "resp": { "gain": [0.4, 0.46, 0.48, 0.42], "air": [0, 0, 0, 0], "tilt": [0.5, 0.5, 0.46, 0.4], "atk": [1, 1, 0.9, 0.85], "vib": [4, 5, 6, 6], "vibRate": [5.2, 5.4, 5.6, 5.6], "oddEven": [0.5, 0.5, 0.5, 0.5] },
    "src": { "tilt": -12, "inharm": 0, "mode": "harm", "nb": [2000, 1.2] },
    "form": { "f1": [750, 7, 6], "f2": [1200, 6, 4] },
    "filt": { "cut": 8, "q": 1.4, "env": 0.5, "t": 0.8 },
    "env": { "decay": 0.4, "sustain": 1 },
    "char": { "noise": 0.04, "noiseAM": 0.03 },
    "onset": { "hit": 0.02, "air": 0.06, "ms": 240 }
  },
  "warm_pad": {
    "name": "warm_pad",
    "class": { "family": "sinteticos", "instrument": "warm_pad", "label": "Warm Pad", "regime": "sostenido", "articulations": ["legato", "tenuto"] },
    "lo": "C1", "hi": "C7",
    "resp": { "gain": [0.4, 0.45, 0.48, 0.42], "air": [0, 0, 0, 0], "tilt": [0.38, 0.4, 0.42, 0.46], "atk": [1, 1, 0.9, 0.85], "vib": [3, 3, 4, 4], "vibRate": [4.4, 4.5, 4.7, 4.7], "oddEven": [0.5, 0.5, 0.5, 0.5] },
    "src": { "tilt": -16, "inharm": 0, "mode": "harm", "nb": [2000, 1.2] },
    "form": { "f1": [450, 3, 1.5], "f2": [1600, 2, 1.5] },
    "filt": { "cut": 6, "q": 1.6, "env": 1.0, "t": 2.2 },
    "env": { "decay": 0.5, "sustain": 1 },
    "char": { "noise": 0, "noiseAM": 0 },
    "onset": { "hit": 0, "air": 0, "ms": 420 }
  },
  "space_sweep": {
    "name": "space_sweep",
    "class": { "family": "sinteticos", "instrument": "space_sweep", "label": "Space Sweep", "regime": "sostenido", "articulations": ["legato", "tenuto"] },
    "lo": "C1", "hi": "C7",
    "resp": { "gain": [0.35, 0.42, 0.45, 0.4], "air": [0, 0, 0, 0], "tilt": [0.5, 0.55, 0.6, 0.55], "atk": [1, 1, 0.9, 0.85], "vib": [5, 6, 7, 7], "vibRate": [3.4, 3.7, 3.9, 3.9], "oddEven": [0.5, 0.5, 0.5, 0.5] },
    "src": { "tilt": -10, "inharm": 0, "mode": "harm", "nb": [2000, 1.2] },
    "form": { "f1": [1100, 5, 2], "f2": [3200, 4, 2] },
    "filt": { "cut": 10, "q": 3, "env": 2.6, "t": 3.0 },
    "env": { "decay": 0.6, "sustain": 1 },
    "char": { "noise": 0.02, "noiseAM": 0.03 },
    "onset": { "hit": 0, "air": 0.04, "ms": 520 }
  },
  "cosmic_whistle": {
    "name": "cosmic_whistle",
    "class": { "family": "sinteticos", "instrument": "cosmic_whistle", "label": "Cosmic Whistle", "regime": "sostenido", "articulations": ["legato", "tenuto"] },
    "lo": "C4", "hi": "C8",
    "resp": { "gain": [0.42, 0.46, 0.46, 0.4], "air": [0, 0, 0, 0], "tilt": [0.3, 0.3, 0.3, 0.3], "atk": [1, 1, 0.9, 0.85], "vib": [7, 9, 11, 11], "vibRate": [5.5, 5.8, 6, 6], "oddEven": [0.5, 0.5, 0.5, 0.5] },
    "src": { "tilt": -22, "inharm": 0, "mode": "harm", "nb": [2000, 1.2] },
    "form": { "f1": [1000, 0, 2], "f2": [3000, 0, 2] },
    "filt": { "cut": 10, "q": 1, "env": 0.2, "t": 0.3 },
    "env": { "decay": 0.3, "sustain": 1 },
    "char": { "noise": 0.02, "noiseAM": 0.02 },
    "onset": { "hit": 0.01, "air": 0.05, "ms": 120 }
  },
  "glass_bells": {
    "name": "glass_bells",
    "class": { "family": "sinteticos", "instrument": "glass_bells", "label": "Glass Bells", "regime": "percusivo", "articulations": ["staccato", "acento"] },
    "lo": "C3", "hi": "C7",
    "resp": { "gain": [0.4, 0.45, 0.45, 0.4], "air": [0, 0, 0, 0], "tilt": [0.5, 0.55, 0.6, 0.6], "atk": [1, 1, 0.9, 0.85], "vib": [2, 3, 4, 4], "vibRate": [4, 4.5, 5, 5], "oddEven": [0.5, 0.5, 0.5, 0.5] },
    "src": { "tilt": -12, "inharm": 0.06, "mode": "harm", "nb": [2000, 1.2] },
    "form": { "f1": [2000, 3, 2], "f2": [4500, 3, 2] },
    "filt": { "cut": 10, "q": 2, "env": 1.0, "t": 1.0 },
    "env": { "decay": [3, 2.5, 2, 1.5], "sustain": 0 },
    "char": { "noise": 0.02, "noiseAM": 0.02 },
    "onset": { "hit": 0.1, "air": 0.02, "ms": 8 }
  },

  // ── 2026-09-12 (con Mario): POPULAR · LATINO — bajo eléctrico, acordeón vallenato, Rhodes y percusión
  //   latina. Aditivo, mismo motor; primeros borradores para afinar de oído (la musette del acordeón queda
  //   como paso de oído). ────────────────────────────────────────────────────────────────────────────
  "electric_bass": {
    "name": "electric_bass",
    "class": { "family": "cuerdas", "instrument": "electric_bass", "label": "Electric Bass", "regime": "percusivo", "articulations": ["legato","staccato","apoyado"], "velRangeDb": 18 },
    "lo": "E1", "hi": "G4",
    "anchors": ["E1","A2","D3","G4"],
    "resp": { "gain": [1.0,1.0,0.9,0.72], "air": [0.02,0.03,0.04,0.05], "tilt": [0.30,0.38,0.42,0.38], "atk": [1.0,1.0,1.0,0.9], "vib": [0,0,0,0], "vibRate": [0,0,0,0], "oddEven": [0.42,0.45,0.48,0.5] },
    "src": { "tilt": -13.0, "inharm": [0.0012,0.0011,0.0016,0.004], "mode": "inharm", "partials": [28,24,18,10], "phaseMs": 1.2, "nb": [1600,1.2] },
    "form": { "f1": [110,6,12], "f2": [750,3,3], "bank": [[110,6,12],[250,3,6],[750,3,3]] },
    "filt": { "cut": [20,14,9,5], "q": 0.8, "env": 0.4, "t": 0.22 },
    "env": { "decay": [2.0,1.7,1.3,0.8], "sustain": 0, "bloom": [0.35,0.30,0.25,0.15], "decayTilt": [0.30,0.32,0.34,0.42], "relNoise": [0.10,0.10,0.08,0.06] },
    "char": { "noise": 0.02, "noiseAM": 0.0 },
    "onset": { "hit": [0.30,0.32,0.34,0.40], "air": 0.14, "ms": 9, "freq": 90, "pitch": 4, "pitchMs": 30 }
  },
  "accordion_vallenato": {
    "name": "accordion_vallenato",
    "class": { "family": "vientos", "instrument": "accordion_vallenato", "label": "Acordeón vallenato", "regime": "sostenido", "articulations": ["legato","staccato","bellows_shake"] },
    "lo": "F3", "hi": "A6",
    "resp": { "gain": [0.035,0.041,0.040,0.037], "air": [0.05,0.04,0.04,0.05], "tilt": [0.72,0.8,0.88,0.92], "atk": [2.0,1.7,1.2,0.8], "vib": [0.10,0.12,0.14,0.14], "vibRate": [5.2,5.4,5.6,5.6], "oddEven": [0.5,0.52,0.54,0.55] },
    "src": { "tilt": -6.0, "inharm": 0.0, "mode": "harm", "nb": [2500,1.0] },
    "form": { "f1": [950,5,1.2], "f2": [2900,5,1.0] },
    "filt": { "cut": [32,28,24,18], "q": 0.8, "env": 0.25, "t": 0.04 },
    "env": { "decay": 0.03, "sustain": 1, "release": [0.1,0.08,0.06,0.05] },
    "char": { "noise": 0.12, "noiseAM": 0.06 },
    "onset": { "hit": 0.0, "air": 0.12, "ms": 55 }
  },
  "rhodes": {
    "name": "rhodes",
    "class": { "family": "teclados", "instrument": "rhodes", "label": "Rhodes (e-piano)", "regime": "percusivo", "articulations": ["legato","staccato"], "velRangeDb": 26 },
    "lo": "C1", "hi": "C7",
    "resp": { "gain": [0.9,1.0,0.95,0.85], "air": [0.02,0.02,0.02,0.03], "tilt": [0.55,0.65,0.7,0.7], "atk": [1,1,1,1], "vib": [0,0,0,0], "vibRate": [0,0,0,0], "oddEven": [0.5,0.5,0.5,0.5] },
    "src": { "tilt": -15.0, "inharm": 0.0016, "mode": "harm", "nb": [2000,1.2] },
    "form": { "f1": [1400,4,1.4], "f2": [3000,3,1.6] },
    "filt": { "cut": [8,6,5,4], "q": 0.7, "env": 0.55, "t": 0.05 },
    "env": { "decay": [2.5,2.1,1.6,1.0], "sustain": 0 },
    "char": { "noise": 0.0, "noiseAM": 0.0 },
    "onset": { "hit": [0.15,0.2,0.3,0.4], "air": 0.0, "ms": 6 }
  },
  "congas": {
    "name": "congas",
    "class": { "family": "percusion", "instrument": "congas", "label": "Congas", "regime": "percutido", "articulations": ["golpe","slap"], "velRangeDb": 40 },
    "lo": "A2", "hi": "A4",
    "resp": { "gain": [0.85,1.0,1.0,0.9], "air": [0,0,0,0], "tilt": [0.4,0.5,0.6,0.7], "atk": [1,1,0.9,0.85], "vib": [0,0,0,0], "vibRate": [5.5,5.5,5.5,5.5], "oddEven": [0.5,0.5,0.5,0.5] },
    "src": { "tilt": -15.0, "inharm": 0.30, "mode": "harm", "nb": [400,1.0] },
    "form": { "f1": [280,6,1.1], "f2": [1400,3,1.2] },
    "filt": { "cut": 6.0, "q": 1.0, "env": 0.5, "t": 0.05 },
    "env": { "decay": [0.55,0.45,0.35,0.28], "sustain": 0 },
    "char": { "noise": 0.40, "noiseAM": 0.0 },
    "onset": { "hit": 0.5, "air": 0.0, "ms": 8 }
  },
  "bongos": {
    "name": "bongos",
    "class": { "family": "percusion", "instrument": "bongos", "label": "Bongos", "regime": "percutido", "articulations": ["golpe","slap"], "velRangeDb": 40 },
    "lo": "C4", "hi": "C6",
    "resp": { "gain": [0.85,1.0,1.0,0.9], "air": [0,0,0,0], "tilt": [0.5,0.6,0.7,0.8], "atk": [1,1,0.9,0.85], "vib": [0,0,0,0], "vibRate": [5.5,5.5,5.5,5.5], "oddEven": [0.5,0.5,0.5,0.5] },
    "src": { "tilt": -13.0, "inharm": 0.30, "mode": "harm", "nb": [700,1.0] },
    "form": { "f1": [560,6,1.1], "f2": [2200,3,1.2] },
    "filt": { "cut": 8.0, "q": 1.0, "env": 0.5, "t": 0.04 },
    "env": { "decay": [0.35,0.28,0.22,0.18], "sustain": 0 },
    "char": { "noise": 0.42, "noiseAM": 0.0 },
    "onset": { "hit": 0.6, "air": 0.0, "ms": 6 }
  },
  "timbales": {
    "name": "timbales",
    "class": { "family": "percusion", "instrument": "timbales", "label": "Timbales", "regime": "percutido", "articulations": ["golpe","cascara"], "velRangeDb": 45 },
    "lo": "C4", "hi": "C6",
    "resp": { "gain": [0.22,0.25,0.25,0.22], "air": [0,0,0,0], "tilt": [0.6,0.7,0.8,0.88], "atk": [1,1,0.9,0.85], "vib": [0,0,0,0], "vibRate": [5.5,5.5,5.5,5.5], "oddEven": [0.5,0.5,0.5,0.5] },
    "src": { "tilt": -9.0, "inharm": 0.12, "mode": "harm", "nb": [900,0.9] },
    "form": { "f1": [500,3,1.2], "f2": [3200,3,1.0] },
    "filt": { "cut": 12.0, "q": 1.0, "env": 0.4, "t": 0.05 },
    "env": { "decay": [0.4,0.32,0.25,0.2], "sustain": 0 },
    "char": { "noise": 0.15, "noiseAM": 0.0 },
    "onset": { "hit": 0.7, "air": 0.0, "ms": 5 }
  },
  "claves": {
    "name": "claves",
    "class": { "family": "percusion", "instrument": "claves", "label": "Claves", "regime": "percutido", "articulations": ["golpe"], "velRangeDb": 40 },
    "lo": "C5", "hi": "C7",
    "resp": { "gain": [2.7,3.0,3.0,2.7], "air": [0,0,0,0], "tilt": [0.7,0.8,0.9,0.95], "atk": [0.3,0.3,0.3,0.3], "vib": [0,0,0,0], "vibRate": [5.5,5.5,5.5,5.5], "oddEven": [0.5,0.5,0.5,0.5] },
    "src": { "tilt": -10.0, "inharm": 0.0, "mode": "noise", "nb": [2500,7] },
    "form": { "f1": [2500,7,5], "f2": [4200,4,3] },
    "filt": { "cut": 12, "q": 2, "env": 0.8, "t": 0.012 },
    "env": { "decay": 0.11, "sustain": 0 },
    "char": { "noise": 0.03, "noiseAM": 0.0 },
    "onset": { "hit": 0.9, "air": 0.0, "ms": 4 }
  },
  "cowbell": {
    "name": "cowbell",
    "class": { "family": "percusion", "instrument": "cowbell", "label": "Cowbell", "regime": "percutido", "articulations": ["golpe"], "velRangeDb": 40 },
    "lo": "C4", "hi": "C6",
    "resp": { "gain": [0.083,0.099,0.099,0.088], "air": [0,0,0,0], "tilt": [0.7,0.8,0.85,0.9], "atk": [0.4,0.4,0.4,0.4], "vib": [0,0,0,0], "vibRate": [5.5,5.5,5.5,5.5], "oddEven": [0.6,0.6,0.6,0.6] },
    "src": { "tilt": -7.0, "inharm": 0.5, "mode": "harm", "nb": [2000,1.0] },
    "form": { "f1": [540,4,1.5], "f2": [850,4,1.5] },
    "filt": { "cut": 14, "q": 1.5, "env": 0.3, "t": 0.04 },
    "env": { "decay": [0.4,0.35,0.3,0.25], "sustain": 0 },
    "char": { "noise": 0.05, "noiseAM": 0.0 },
    "onset": { "hit": 0.7, "air": 0.0, "ms": 5 }
  },
  "maracas": {
    "name": "maracas",
    "class": { "family": "percusion", "instrument": "maracas", "label": "Maracas", "regime": "percutido", "articulations": ["golpe"], "velRangeDb": 35 },
    "lo": "C5", "hi": "C6",
    "resp": { "gain": [0.7,0.8,0.8,0.7], "air": [0,0,0,0], "tilt": [0.9,0.9,0.9,0.9], "atk": [0.3,0.3,0.3,0.3], "vib": [0,0,0,0], "vibRate": [5.5,5.5,5.5,5.5], "oddEven": [0.5,0.5,0.5,0.5] },
    "src": { "tilt": -2.0, "inharm": 0.0, "mode": "noise", "nb": [7000,0.5] },
    "form": { "f1": [5000,2,1.5], "f2": [9000,2,1.2] },
    "filt": { "cut": 20, "q": 1.0, "env": 0.0, "t": 0.02 },
    "env": { "decay": 0.07, "sustain": 0 },
    "char": { "noise": 1.0, "noiseAM": 0.0 },
    "onset": { "hit": 0.25, "air": 0.0, "ms": 6 }
  },
  "cajon": {
    "name": "cajon",
    "class": { "family": "percusion", "instrument": "cajon", "label": "Cajón", "regime": "percutido", "articulations": ["bajo","slap"], "velRangeDb": 50 },
    "lo": "C2", "hi": "C4",
    "resp": { "gain": [3.5,5,5.5,5], "air": [0,0,0,0], "tilt": [0.3,0.45,0.6,0.75], "atk": [1,1,0.9,0.85], "vib": [0,0,0,0], "vibRate": [5.5,5.5,5.5,5.5], "oddEven": [0.5,0.5,0.5,0.5] },
    "src": { "tilt": -12.0, "inharm": 0.0, "mode": "noise", "nb": [120,1.0] },
    "form": { "f1": [110,4,1.2], "f2": [2500,4,1.0] },
    "filt": { "cut": 10.0, "q": 1.0, "env": 0.5, "t": 0.08 },
    "env": { "decay": [0.7,0.5,0.35,0.25], "sustain": 0 },
    "char": { "noise": 0.35, "noiseAM": 0.0 },
    "onset": { "hit": 1.0, "air": 0.0, "ms": 10 }
  }
};

// ============================================================================
// Lista canonica de instrumentos — FUENTE UNICA para Keyboard · Register · Console · Score.
// Orden de partitura orquestal: maderas → metales → percusion → arpa/teclados → cuerdas → voz;
// sinteticos al final. Las etiquetas salen de class.label (EN). Las apps arman su <select> con
// MM_instrumentOptionsHTML(map, selected, opts) para que la lista sea identica en toda la suite.
// ============================================================================
// ── TIPO DE ORQUESTA (2026-08-30, Mario: «gran orquesta tiene 8 contrabajos, en mis tiempos fueron 10») ──
// La sección no tiene UN tamaño: lo declara la ORQUESTA de la obra (scoreInfo.orchestra, popup
// Score Info). class.players de cada ficha _section es el default (sinfónica moderna); esta tabla
// da los atriles por tipo. Hoy es dato e información (tooltip de la paleta); el contrato de motor
// (spread y coro escalando con el tamaño real) queda pendiente, como spl.* y nl.*.
window.MM_ORCHESTRAS = {
  chamber:   { es:'Orquesta de cámara',        en:'Chamber orchestra',        strings:{ violins_section:8,  violas_section:4,  cellos_section:4,  contrabasses_section:2  } },
  classical: { es:'Orquesta clásica',          en:'Classical orchestra',      strings:{ violins_section:10, violas_section:6,  cellos_section:4,  contrabasses_section:3  } },
  modern:    { es:'Sinfónica moderna',         en:'Modern symphonic',         strings:{ violins_section:16, violas_section:12, cellos_section:10, contrabasses_section:8  } },
  grand:     { es:'Gran orquesta romántica',   en:'Grand romantic orchestra', strings:{ violins_section:16, violas_section:14, cellos_section:12, contrabasses_section:10 } },
};

window.MM_INSTRUMENT_SECTIONS = [
  { section:'Woodwinds', es:'Maderas', items:['piccolo','flute','alto_flute_g','oboe','english_horn','clarinet','clarinet_a','bass_clarinet','bassoon','contrabassoon','saxophone','kena'] },
  { section:'Brass', es:'Metales', items:['horn','trumpet','trumpet_f','trombone','trombone_alto','tuba'] },
  { section:'Percussion', es:'Percusión', items:['timpani','glockenspiel','xylophone','vibraphone','marimba','tubular_bells','snare','snare_off','bass_drum','cymbals','tam_tam','triangle','tambourine','woodblock'] },
  { section:'Harp & Keyboards', es:'Arpa y teclados', items:['harp','piano','piano_steinway','piano_grand_tonal','harpsichord','harpsichord_wt','celesta','pipe_organ','accordion'] },
  { section:'Strings', es:'Cuerdas', items:['violin','viola','cello','contrabass','violins_section','violas_section','cellos_section','contrabasses_section','strings','full_strings','pizzicato','strings_pizzicato','gamba','guitar'] },
  { section:'Voice', es:'Voz', items:['voice_soprano','voice_alto','voice_tenor','voice_bass'] },
  { section:'Synths', es:'Sintetizadores', items:['ping','sine','organ'] },
  { section:'Synths \u00b7 Pads', es:'Sintetizadores \u00b7 Pads', items:['synth_aahs','warm_pad','space_sweep','cosmic_whistle','glass_bells'] },
  // 2026-08-24 (idea de Mario): los parientes NO orquestales viven aparte y por familia, para que
  // la lista de la orquesta no se llene de repeticiones. Se suman al final; la paleta los muestra
  // como dos grupos propios en las cuatro apps.
  { section:'Other · Recorders', es:'Otros · Flautas dulces', items:['recorder_soprano','recorder_alto'] },
  { section:'Other · Folk plucked', es:'Otros · Pulsados folk', items:['banjo','mandolin'] },
  { section:'Popular · Latino', es:'Popular · Latino', items:['electric_bass','accordion_vallenato','rhodes','congas','bongos','timbales','claves','cowbell','maracas','cajon'] }
];
window.MM_INSTRUMENT_ORDER = window.MM_INSTRUMENT_SECTIONS.reduce(function(a,s){ return a.concat(s.items); }, []);

// ── LA LISTA HABLA EL IDIOMA DEL COACH (2026-09-15, Mario: «están mezclados») ──────────────────
// La lista salía en los dos idiomas a la vez: de las 81 fichas, 73 traían class.label en inglés y
// 8 en castellano, y los rótulos de sección existían sólo en inglés. class.label queda como está
// —es la etiqueta canónica de la ficha, la que usa el banco— y los nombres de PANTALLA viven acá,
// en un solo sitio, con su par. Sin par manda class.label: una ficha nueva aparece igual.
// El idioma es el mismo de toda la suite (coachLang → mmCoachLang, EN por defecto); esta lista la
// abren cuatro apps, así que no puede depender de que la app defina coachLang: cae al storage.
window.MM_instEs = function(){
  try { if (typeof window.coachLang === 'function') return window.coachLang() === 'es'; } catch(e){}
  try { return localStorage.getItem('mmCoachLang') === 'es'; } catch(e){ return false; }
};
window.MM_INSTRUMENT_NAMES = {
  piccolo:{es:'Flautín'}, flute:{es:'Flauta'}, alto_flute_g:{es:'Flauta alto (Sol)'}, oboe:{es:'Oboe'},
  english_horn:{es:'Corno inglés'}, clarinet:{es:'Clarinete'}, clarinet_a:{es:'Clarinete en La'},
  bass_clarinet:{es:'Clarinete bajo'}, bassoon:{es:'Fagot'}, contrabassoon:{es:'Contrafagot'},
  saxophone:{es:'Saxofón'}, kena:{es:'Quena'},
  horn:{es:'Corno en Fa'}, trumpet:{es:'Trompeta'}, trumpet_f:{es:'Trompeta en Fa'},
  trombone:{es:'Trombón'}, trombone_alto:{es:'Trombón alto'}, tuba:{es:'Tuba'},
  timpani:{es:'Timbales (orquesta)'}, glockenspiel:{es:'Glockenspiel'}, xylophone:{es:'Xilófono'},
  vibraphone:{es:'Vibráfono'}, marimba:{es:'Marimba'}, tubular_bells:{es:'Campanas tubulares'},
  snare:{es:'Redoblante'}, snare_off:{es:'Redoblante (sin bordones)'}, bass_drum:{es:'Bombo'},
  cymbals:{es:'Platillos'}, tam_tam:{es:'Tam-tam'}, triangle:{es:'Triángulo'},
  tambourine:{es:'Pandereta'}, woodblock:{es:'Caja china'},
  harp:{es:'Arpa'}, piano:{es:'Piano (vertical)'}, piano_steinway:{es:'Piano (de cola)'},
  piano_grand_tonal:{es:'Piano (de cola · Tonal)'}, harpsichord:{es:'Clavecín (Cosmic)'},
  harpsichord_wt:{es:'Clavecín (bien temperado)'}, celesta:{es:'Celesta'},
  pipe_organ:{en:'Pipe Organ'}, accordion:{en:'Accordion'},
  violin:{es:'Violín'}, viola:{es:'Viola'}, cello:{es:'Violonchelo'}, contrabass:{es:'Contrabajo'},
  violins_section:{en:'Violins (section)'}, violas_section:{en:'Violas (section)'},
  cellos_section:{en:'Cellos (section)'}, contrabasses_section:{en:'Double Basses (section)'},
  strings:{es:'Cuerdas'}, full_strings:{es:'Cuerdas (tutti)'}, pizzicato:{es:'Pizzicato'},
  strings_pizzicato:{es:'Cuerdas pizzicato'}, gamba:{es:'Viola da gamba'}, guitar:{es:'Guitarra'},
  voice_soprano:{es:'Soprano'}, voice_alto:{es:'Contralto'}, voice_tenor:{es:'Tenor'}, voice_bass:{es:'Bajo'},
  ping:{es:'Ping'}, sine:{es:'Senoidal'}, organ:{es:'Órgano'},
  synth_aahs:{es:'Aahs de sintetizador'}, warm_pad:{es:'Pad cálido'}, space_sweep:{es:'Barrido espacial'},
  cosmic_whistle:{es:'Silbido cósmico'}, glass_bells:{es:'Campanas de cristal'},
  recorder_soprano:{es:'Flauta dulce (soprano)'}, recorder_alto:{es:'Flauta dulce (contralto)'},
  banjo:{es:'Banjo'}, mandolin:{es:'Mandolina'},
  electric_bass:{es:'Bajo eléctrico'}, accordion_vallenato:{en:'Vallenato Accordion'},
  rhodes:{es:'Rhodes (piano eléctrico)'}, congas:{es:'Congas'}, bongos:{es:'Bongós'},
  timbales:{es:'Timbales (latinos)'}, claves:{es:'Claves'}, cowbell:{es:'Cencerro'},
  maracas:{es:'Maracas'}, cajon:{en:'Cajón'}
};
window.MM_instLabel = function(p, k){
  var n = window.MM_INSTRUMENT_NAMES[k], base = (p && p.class && p.class.label) || k;
  if (!n) return base;
  return (window.MM_instEs() ? n.es : n.en) || base;
};
window.MM_instSection = function(sec){ return (window.MM_instEs() && sec.es) || sec.section; };
// Devuelve el HTML de <optgroup>/<option> (value=clave, texto=etiqueta) en orden canonico.
//   map: mapa de presets para resolver etiqueta y presencia (default: banco). selected: clave activa.
//   opts.includeNone: antepone la opcion "—" (sin instrumento). opts.onlyKeys: subconjunto plano (p.ej. percusion CH10).
window.MM_instrumentOptionsHTML = function(map, selected, opts){
  opts = opts || {}; map = map || window.MM_PRESETS_DEFAULT || {};
  var NONE = '—';
  var esc = function(s){ return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;'); };
  var lab = function(k){ return window.MM_instLabel(map[k], k); };
  var optHTML = function(k){ return '<option value="'+esc(k)+'"'+(k===selected?' selected':'')+'>'+esc(lab(k))+'</option>'; };
  var html = opts.includeNone ? ('<option value="'+NONE+'"'+((selected===NONE||selected==null)?' selected':'')+'>'+NONE+'</option>') : '';
  if(opts.onlyKeys){ html += opts.onlyKeys.filter(function(k){ return k!==NONE && map[k]; }).map(optHTML).join(''); return html; }
  var seen = {};
  (window.MM_INSTRUMENT_SECTIONS||[]).forEach(function(sec){
    var present = sec.items.filter(function(k){ seen[k]=1; return map[k]; });
    if(present.length) html += '<optgroup label="'+NONE+' '+esc(window.MM_instSection(sec))+' '+NONE+'">'+present.map(optHTML).join('')+'</optgroup>';
  });
  var extra = Object.keys(map).filter(function(k){ return !seen[k]; });
  if(extra.length) html += '<optgroup label="'+NONE+' '+(window.MM_instEs()?'Otros':'Other')+' '+NONE+'">'+extra.map(optHTML).join('')+'</optgroup>';
  return html;
};

// ============================================================================
// PALETA DE INSTRUMENTOS EN COLUMNAS (2026-08-23, Mario: «una lista donde se pueden ver todos»)
// El <select> nativo no acepta columnas (el desplegable lo dibuja el SO), asi que el clic sobre el
// campo abre ESTE popup de la casa (border-top wine, pin ⊗ ON al abrir, header arrastrable, cierra
// por clic afuera salvo pinneado — mismo contrato que el Pulse del Keyboard). Una columna por flujo
// CSS (column-count ≤ 5, secciones indivisibles): toda la lista visible de un vistazo, y cuando la
// investigacion sume instrumentos cada familia crece en su columna. Filtro por nombre arriba; los
// instrumentos del banco que el mapa activo NO tiene salen apagados (el select los ocultaba).
// La seleccion vuelve por el MISMO onchange del select de cada app: aqui no se toca nada del mix.
// Pinneado permite probar varios seguidos (comparar de oido); desfijado, elegir cierra.
window.MM_openInstrumentPalette = function(opts){
  opts = opts || {};
  var doc = document, pal = doc.getElementById('mm-inst-palette');
  if(pal && pal.classList.contains('open') && pal._anchor === opts.anchor){ pal.classList.remove('open'); return pal; }   // clic en el campo con la paleta abierta = cerrar
  if(!pal){
    var css = doc.createElement('style'); css.id = 'mm-inst-palette-css';
    css.textContent =
      '#mm-inst-palette{display:none;position:fixed;z-index:9500;background:var(--panel,#0d0d18);border:1px solid var(--border,#1e1e34);border-top:2px solid var(--kb-border,#501828);box-shadow:0 6px 24px rgba(0,0,0,.55);font-family:\'DM Mono\',monospace;max-width:min(94vw,920px)}'+
      '#mm-inst-palette.open{display:block}'+
      '.mmip-hd{display:flex;align-items:center;gap:10px;padding:6px 10px;cursor:move;border-bottom:1px solid var(--border,#1e1e34)}'+
      '.mmip-hd h3{font-family:\'DM Mono\',monospace;font-size:11px;font-weight:500;letter-spacing:2px;text-transform:uppercase;color:#9a7ad8;margin:0;flex:none}'+
      '.mmip-filter{flex:1;min-width:70px;background:var(--panel2,#111120);border:1px solid var(--border,#1e1e34);color:var(--text,#e0e0f4);font-family:inherit;font-size:10px;padding:3px 6px;outline:none}'+
      '.mmip-filter:focus{border-color:var(--gold,#c8a84a)}'+
      '.mmip-pin{cursor:pointer;font-size:12px;color:var(--textm,#c0c0e0);background:none;border:none;line-height:1;flex:none}'+
      '.mmip-pin.on{color:#9a7ad8}'+
      '.mmip-cols{padding:10px 14px;max-height:min(70vh,560px);overflow:auto}'+
      '.mmip-grid{column-gap:22px}'+
      '.mmip-sec{break-inside:avoid;margin:0 0 10px}'+
      '.mmip-sect{font-size:9px;letter-spacing:1.5px;text-transform:uppercase;color:var(--gold,#c8a84a);border-bottom:1px solid var(--border,#1e1e34);padding:2px 0 3px;margin-bottom:3px;white-space:nowrap}'+
      '.mmip-it{font-size:11px;color:var(--textm,#c0c0e0);padding:2px 6px;cursor:pointer;white-space:nowrap;border-left:2px solid transparent}'+
      '.mmip-it:hover{color:var(--text,#e0e0f4);background:var(--panel2,#111120)}'+
      '.mmip-it.on{color:var(--gold,#c8a84a);border-left-color:var(--gold,#c8a84a)}'+
      '.mmip-it.ghost{opacity:.35;cursor:default}'+
      '.mmip-it.ghost:hover{background:none;color:var(--textm,#c0c0e0)}'+
      '.mmip-grip{position:absolute;right:0;bottom:0;width:15px;height:15px;cursor:nwse-resize;'+
        'background:linear-gradient(135deg,transparent 0 46%,var(--border,#1e1e34) 46% 56%,transparent 56% 72%,var(--border,#1e1e34) 72% 82%,transparent 82%)}'+
      '.mmip-grip:hover{background:linear-gradient(135deg,transparent 0 46%,var(--kb-border,#501828) 46% 56%,transparent 56% 72%,var(--kb-border,#501828) 72% 82%,transparent 82%)}';
    doc.head.appendChild(css);
    pal = doc.createElement('div'); pal.id = 'mm-inst-palette'; pal.className = 'lang-sync';   // regla del idioma: pares data-es/en, el Score los aplica via _prefsSyncLang
    pal.innerHTML =
      '<div class="mmip-hd" id="mmip-hd">'+
        '<h3 data-es="Instrumentos" data-en="Instruments">Instruments</h3>'+
        '<input class="mmip-filter" id="mmip-filter" type="text" placeholder="filter" data-title-es="Filtrar por nombre" data-title-en="Filter by name" title="Filter by name">'+
        '<button class="mmip-pin on" id="mmip-pin" data-title-es="Fijar (clic afuera no cierra)" data-title-en="Pin (outside click keeps it open)" title="Pin (outside click keeps it open)">⊗</button>'+
      '</div>'+
      '<div class="mmip-cols" id="mmip-cols"><div class="mmip-grid" id="mmip-grid"></div></div>'+
      '<div class="mmip-grip" id="mmip-grip" data-title-es="Arrastrar para dimensionar" data-title-en="Drag to resize" title="Drag to resize"></div>';
    doc.body.appendChild(pal);
    pal._pinned = true;
    var pin = doc.getElementById('mmip-pin');
    pin.addEventListener('pointerdown', function(e){ e.stopPropagation(); });   // contrato popup: pin con stop en mousedown
    pin.addEventListener('click', function(e){ e.stopPropagation();          // contrato popup: pinneado, el clic CIERRA
      if(pal._pinned){ pal.classList.remove('open'); pal._pinned = false; pin.classList.remove('on'); pin.textContent = '⊕'; return; }
      pal._pinned = true; pin.classList.add('on'); pin.textContent = '⊗'; });
    var hd = doc.getElementById('mmip-hd'), dx = 0, dy = 0, drag = false;      // header arrastrable (= Pulse)
    hd.addEventListener('pointerdown', function(e){ if(e.target.id === 'mmip-pin' || e.target.id === 'mmip-filter') return;
      var r = pal.getBoundingClientRect(); pal.style.left = r.left+'px'; pal.style.top = r.top+'px';
      dx = e.clientX - r.left; dy = e.clientY - r.top; drag = true; try{ hd.setPointerCapture(e.pointerId); }catch(_){ } });
    hd.addEventListener('pointermove', function(e){ if(drag){ pal.style.left = (e.clientX-dx)+'px'; pal.style.top = (e.clientY-dy)+'px'; } });
    hd.addEventListener('pointerup', function(){ if(drag){ drag = false; pal._guardarSitio(); } });   // 2026-09-10: al soltar, el sitio se recuerda
    var LSK = 'mm-inst-palette-size';                                        // el tamaño viaja entre aperturas y entre apps (mismo origen)
    // 2026-09-10 (con Mario: «la corrés al costado, vas a otro canal y vuelve a saltar encima de CHANNELS»):
  // la memoria guardaba SOLO el tamaño, así que cada apertura re-anclaba la paleta debajo del campo
  // clickeado — y ese campo vive adentro del popup CHANNELS. Ahora el sitio viaja en la misma entrada:
  // se guarda al soltar el arrastre y manda sobre el ancla en la próxima apertura.
  pal._guardarSitio = function(){ try{
    var v = JSON.parse(localStorage.getItem(LSK) || '{}') || {};
    var r = pal.getBoundingClientRect();
    v.x = Math.round(r.left); v.y = Math.round(r.top);
    localStorage.setItem(LSK, JSON.stringify(v));
  }catch(_){ } };
  pal._leerSitio = function(){ try{
    var v = JSON.parse(localStorage.getItem(LSK) || 'null');
    if(v && typeof v.x === 'number' && typeof v.y === 'number') return { x: v.x, y: v.y };
  }catch(_){ } return null; };
  pal._leerTam = function(){ try{ var v = JSON.parse(localStorage.getItem(LSK) || 'null');
      return (v && v.w > 240 && v.h > 140) ? v : null; }catch(_){ return null; } };
    pal._aplicarTam = function(t){ var hd2 = doc.getElementById('mmip-hd'), cl = doc.getElementById('mmip-cols'),
                                    gr2 = doc.getElementById('mmip-grid');
      if(!t){ pal.style.width = ''; pal.style.height = ''; pal.style.maxWidth = '';
              cl.style.height = ''; cl.style.maxHeight = '';
              gr2.style.height = ''; gr2.style.columnFill = ''; return; }
      pal.style.maxWidth = '96vw'; pal.style.width = Math.round(t.w)+'px'; pal.style.height = Math.round(t.h)+'px';
      // dimensionada, la lista CRECE EN LOS DOS EJES (pedido de Mario, 2026-09-08): la grilla toma el
      // alto del panel y llena por altura (column-fill:auto), así que estirar hacia abajo alarga las
      // columnas y estirar hacia el costado muestra más; lo que no entra sigue a la derecha y la caja
      // scrollea en los dos ejes, como antes del arreglo del 07-09.
      var alto = Math.max(60, Math.round(t.h - hd2.offsetHeight - 2));
      cl.style.maxHeight = 'none'; cl.style.height = alto+'px';
      gr2.style.height = (alto - 20)+'px'; gr2.style.columnFill = 'auto'; };
    pal._columnas = function(){ var cl = doc.getElementById('mmip-grid');
      var n = cl.querySelectorAll('.mmip-it').length, c;
      if(pal._tam) c = Math.floor((pal._tam.w - 28) / 170);                   // dimensionada: las columnas las decide el ANCHO
      else c = Math.ceil(n / 12);                                            // sin dimensionar: la regla de siempre (4-5 con la lista llena)
      cl.style.columnCount = String(Math.max(1, Math.min(pal._tam ? 8 : 5, Math.min(c, n || 1)))); };
    var grip = doc.getElementById('mmip-grip'), rz = false, rw = 0, rh = 0, rx = 0, ry = 0;
    grip.addEventListener('pointerdown', function(e){ e.stopPropagation(); e.preventDefault();
      var r = pal.getBoundingClientRect(); rw = r.width; rh = r.height; rx = e.clientX; ry = e.clientY; rz = true;
      try{ grip.setPointerCapture(e.pointerId); }catch(_){ } });
    grip.addEventListener('pointermove', function(e){ if(!rz) return;
      var r = pal.getBoundingClientRect();
      var w = Math.min(Math.max(260, rw + (e.clientX - rx)), window.innerWidth  - r.left - 8);
      var h = Math.min(Math.max(160, rh + (e.clientY - ry)), window.innerHeight - r.top  - 8);
      pal._tam = { w: w, h: h }; pal._aplicarTam(pal._tam); pal._columnas(); });
    grip.addEventListener('pointerup', function(e){ if(!rz) return; rz = false;
      try{ grip.releasePointerCapture(e.pointerId); }catch(_){ }
      if(pal._tam){ try{ var _v = JSON.parse(localStorage.getItem(LSK) || '{}') || {};   // 2026-09-10: merge, no reemplazo — el tamaño no puede borrar el sitio
      _v.w = Math.round(pal._tam.w); _v.h = Math.round(pal._tam.h);
      localStorage.setItem(LSK, JSON.stringify(_v)); }catch(_){ } } });
    var filt = doc.getElementById('mmip-filter');
    filt.addEventListener('pointerdown', function(e){ e.stopPropagation(); });
    filt.addEventListener('input', function(){ var q = this.value.trim().toLowerCase();
      pal.querySelectorAll('.mmip-it').forEach(function(it){
        it.style.display = (!q || it.textContent.toLowerCase().indexOf(q) >= 0 || (it.dataset.k||'').indexOf(q) >= 0) ? '' : 'none'; });
      pal.querySelectorAll('.mmip-sec').forEach(function(sec){
        var vis = false; sec.querySelectorAll('.mmip-it').forEach(function(it){ if(it.style.display !== 'none') vis = true; });
        sec.style.display = vis ? '' : 'none'; }); });
    doc.addEventListener('click', function(e){                                  // clic afuera cierra, salvo pinneado
      if(!pal.classList.contains('open') || pal._pinned) return;
      var t = e.target; if(!t || !t.isConnected) return;                        // nodo re-renderizado: no decidir con el
      if(t.closest && t.closest('#mm-inst-palette')) return;
      if(pal._anchor && pal._anchor.contains && pal._anchor.contains(t)) return;
      pal.classList.remove('open'); });
  }
  // (re)construccion en cada apertura: mapa activo, seleccion, caso percusion
  var map = opts.map || window.MM_PRESETS_DEFAULT || {};
  var bank = window.MM_PRESETS_DEFAULT || {};
  var esc = function(s){ return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;'); };
  var lab = function(k){ return window.MM_instLabel(map[k] || bank[k], k); };
  var secs, seen = {};
  if(opts.onlyKeys){ secs = [{ section:'Percussion', es:'Percusión', items: opts.onlyKeys.filter(function(k){ return map[k]; }) }]; }
  else {
    secs = (window.MM_INSTRUMENT_SECTIONS || []).map(function(s){
      s.items.forEach(function(k){ seen[k] = 1; });
      return { section: s.section, es: s.es, items: s.items.filter(function(k){ return map[k] || bank[k]; }) }; });
    var extra = Object.keys(map).filter(function(k){ return !seen[k]; });
    if(extra.length) secs.push({ section:'Other', es:'Otros', items: extra });
  }
  var sel = opts.selected, html = '';
  if(opts.includeNone) html += '<div class="mmip-sec"><div class="mmip-it'+((sel==='—'||sel==null)?' on':'')+'" data-k="—">—</div></div>';
  secs.forEach(function(s){ if(!s.items.length) return;
    html += '<div class="mmip-sec"><div class="mmip-sect">'+esc(window.MM_instSection(s))+'</div>';
    s.items.forEach(function(k){ var ghost = !map[k];
      // 2026-08-30: las secciones dicen sus atriles — el número efectivo lo da la orquesta de la
      // obra (hook del Score, MM_orchestraPlayers); sin él, el default de la ficha (sinfónica moderna).
      var _pj = map[k] || bank[k] || {}, _pl = _pj.class && _pj.class.players;
      if (_pl && typeof window.MM_orchestraPlayers === 'function') _pl = window.MM_orchestraPlayers(k) || _pl;
      var tt = ghost ? ' data-title-es="No está en la lista activa" data-title-en="Not in the active list" title="Not in the active list"'
             : (_pl ? ' data-title-es="'+_pl+' atriles (orquesta de la obra)" data-title-en="'+_pl+' players (the work\'s orchestra)" title="'+_pl+' players"' : '');
      html += '<div class="mmip-it'+(k===sel?' on':'')+(ghost?' ghost':'')+'" data-k="'+esc(k)+'"'+tt+'>'+esc(lab(k))+'</div>'; });
    html += '</div>'; });
  var cols = doc.getElementById('mmip-grid');
  cols.innerHTML = html;
  if(pal._tam === undefined) pal._tam = pal._leerTam();                         // el tamaño de la sesion anterior
  var filtEl = doc.getElementById('mmip-filter'); filtEl.value = '';
  pal._anchor = opts.anchor || null;
  pal._onPick = opts.onPick || null;
  pal._pinned = true; var _pinEl = doc.getElementById('mmip-pin'); _pinEl.classList.add('on'); _pinEl.textContent = '⊗';   // pin ON al abrir (contrato)
  cols.onclick = function(e){
    var it = e.target && e.target.closest ? e.target.closest('.mmip-it') : null;
    if(!it || it.classList.contains('ghost')) return;
    e.stopPropagation();
    cols.querySelectorAll('.mmip-it.on').forEach(function(x){ x.classList.remove('on'); });
    it.classList.add('on');
    if(pal._onPick) pal._onPick(it.dataset.k);
    if(!pal._pinned) pal.classList.remove('open'); };
  pal.classList.add('open');
  // 2026-09-08 (Mario: «el cuadro negro sale mas chico que el layer de los nombres»): el tamaño se aplicaba con
  // la paleta TODAVIA oculta, y ahi el header mide 0 — la caja quedaba 32 px mas alta de lo que debia y los
  // nombres se salian por abajo del panel. Al dimensionar se corregia solo, porque entonces si estaba visible.
  // Se aplica DESPUES de abrir, que es cuando se puede medir. El diseno (columnas por ancho, llenado por altura)
  // no cambia: cambia el momento.
  pal._aplicarTam(opts.onlyKeys ? null : pal._tam);                             // el set de percusion es corto: va a su tamaño natural
  var _t = pal._tam; if(opts.onlyKeys) pal._tam = null;
  pal._columnas(); pal._tam = _t;
  var w = pal.offsetWidth, h = pal.offsetHeight, x = 80, y = 80;               // bajo el ancla, sin salirse del viewport
  var _sitio = pal._leerSitio && pal._leerSitio();
    if(_sitio){ x = _sitio.x; y = _sitio.y; }   // 2026-09-10: donde la dejaste, canal tras canal
    else if(opts.anchor && opts.anchor.getBoundingClientRect){ var r2 = opts.anchor.getBoundingClientRect(); x = r2.left; y = r2.bottom + 6;
      // primera vez, sin memoria: no nacer encima del popup que la abrió (el campo vive adentro de
      // CHANNELS). Si el sitio anclado se superpone con él, la paleta se corre al lado libre.
      try{
        var _duenio = opts.anchor.closest && opts.anchor.closest('.channels-panel, #channelsPanel, .group-popup, .popup');
        if(_duenio){
          var rp = _duenio.getBoundingClientRect();
          if(!(x + w < rp.left || x > rp.right || y + h < rp.top || y > rp.bottom)){
            if(rp.right + 8 + w <= window.innerWidth - 8) x = rp.right + 8;
            else if(rp.left - 8 - w >= 8)                 x = rp.left - 8 - w;
            else                                           y = rp.bottom + 8;
            y = Math.min(y, Math.max(8, window.innerHeight - 8 - h));
          }
        }
      }catch(_){ }
    }
  if(x + w > window.innerWidth - 8)  x = Math.max(8, window.innerWidth - 8 - w);
  if(y + h > window.innerHeight - 8) y = Math.max(8, window.innerHeight - 8 - h);
  if(x < 8) x = 8; if(y < 8) y = 8;   // 2026-09-10: un sitio guardado en negativo la abría fuera de la pantalla, sin header para agarrarla
  pal.style.left = Math.round(x)+'px'; pal.style.top = Math.round(y)+'px';
  if(window._prefsSyncLang){ try{ window._prefsSyncLang(); }catch(_){ } }       // idioma del Coach al vuelo (solo existe en Score)
  return pal;
};
