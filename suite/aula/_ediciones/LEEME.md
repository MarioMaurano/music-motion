# Ediciones para el maestro (carpeta A4)

Una edición por clase de «Música en el aula», para imprimir en A4 sin doblar y guardar en una carpeta (modelo aprobado por Mario el 2026-11-26 con la Clase 1 del Nivel 1).

Orden de cada edición: portada (ilustración del capítulo de la Gramatiquilla; maestro, curso, fecha) · la clase en una página (con el recuadro «Evaluar») · la guía completa con más aire, margen para perforar y «Anotaciones» en el espacio libre · palabras nuevas (definiciones alineadas con «Las palabras de la música» de la Gramatiquilla) + las páginas del cuaderno en miniatura · las hojas para la familia (✂) al final. El mismo pie en todas las páginas.

Fuente: `_fuente/` — `lecciones.py` (los textos de cada ficha y sus palabras), `gen.py` (arma el PDF), `edicion.css`, `leccion-print.css`.
Rehacer: `python3 gen.py n1c1 n1c2 …` (necesita Chrome + Playwright, pypdf, reportlab, poppler; las rutas de la Gramatiquilla y de `website/aula` van en GRAM1, GRAM2 y AULA).

Hecho: Nivel 1 (Clases 1 a 9) y Nivel 2 (Clases 1 a 12, 10b y 14), en español. Pendiente: las traducciones (en, fr, nl, de); enlazar cada edición desde el botón de su lección y publicar.
Clases 6 y 7: su capítulo no tiene ilustración; la portada muestra la parte de arriba de la primera página del capítulo.
Nivel 2: la Clase 10b no tiene hoja para la familia (✂); las Clases 4 y 11 son las más largas (19 y 20 páginas) porque su guía trae tablas, láminas y hojas para recortar.
