# Ediciones para el maestro (carpeta A4)

Una edición por clase de «Música en el aula», para imprimir en A4 sin doblar y guardar en una carpeta (modelo aprobado por Mario el 2026-11-26 con la Clase 1 del Nivel 1).

Orden de cada edición: portada (ilustración del capítulo de la Gramatiquilla; maestro, curso, fecha) · la clase en una página (con el recuadro «Evaluar») · la guía completa con más aire, margen para perforar y «Anotaciones» en el espacio libre · palabras nuevas (definiciones alineadas con «Las palabras de la música» de la Gramatiquilla) + las páginas del cuaderno en miniatura · las hojas para la familia (✂) al final. El mismo pie en todas las páginas.

Fuente: `_fuente/` — `lecciones.py` (los textos de cada ficha y sus palabras), `gen.py` (arma el PDF), `edicion.css`, `leccion-print.css`.
Rehacer: `python3 gen.py n1c1 n1c2 …` (necesita Chrome + Playwright, pypdf, reportlab, poppler; las rutas de la Gramatiquilla y de `website/aula` van en GRAM1, GRAM2 y AULA).

Hecho: Nivel 1 (Clases 1 a 9) y Nivel 2 (Clases 1 a 12, 10b y 14), en español. Enlazadas en español el 2026-11-27: botón «⭳ Carpeta A4» en la barra de arriba de cada lección y en las tarjetas de la Clase 1 de cada nivel (Ejercicios). En inglés, francés y neerlandés, aprobadas por Mario y enlazadas el 2026-11-27 («para mí están bien»): «⭳ A4 folder / Classeur A4 / Map A4» en la barra de cada lección traducida (71). Los textos dentro de los dibujos se traducen con ICON_TXT en gen.py (la Clase 10b decía «qué nota está abajo» en los tres idiomas; rehecha). Pendiente: alemán.
Clases 6 y 7: su capítulo no tiene ilustración; la portada muestra la parte de arriba de la primera página del capítulo.
Nivel 2: la Clase 10b no tiene hoja para la familia (✂); las Clases 4 y 11 son las más largas (19 y 20 páginas) porque su guía trae tablas, láminas y hojas para recortar.

Clase 1 de cada nivel en otros idiomas (2026-11-27): las lecciones son `ejercicios/classroom-lesson-1-en.html` y `-2-en.html` (FR/NL/DE las arma `_Scripts/armar-idiomas.js` desde el inglés). Para hacer sus ediciones, gen.py las lee copiadas como `aula-n1-clase-1-{en,fr,nl}.html` y `aula-n2-clase-1-en.html` (AULA=carpeta temporal). Textos en `tr_en.py` (n1c1, n2c1), `tr_fr.py` y `tr_nl.py` (n1c1). Hechas: N1 C1 en · fr · nl, N2 C1 en (y N2 C1 nl rehecha: la «Oda» decía «Ode an die Freude»). Alemán: sin ediciones todavía.
