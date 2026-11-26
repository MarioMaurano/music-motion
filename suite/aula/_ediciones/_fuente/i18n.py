# Textos fijos de la edición para el maestro, por idioma, y las traducciones de cada clase (tr_<idioma>.py).
UI = {
 'es': dict(brand='Música en el aula', nivel='Nivel', clase='Clase', ed='Edición para el maestro', campos=['Maestro', 'Curso', 'Fecha'],
   minutos='minutos', una_pag='la clase en una página', guia='La guía completa', guia_link='Clase {c} del Nivel {n}', cuad='el cuaderno del alumno',
   book='Gramatiquilla Musical', book_lvl='Gramatiquilla Musical · Nivel {n}', meta='La meta', necesita='Qué necesita', antes='Antes de la clase · {m} min en casa',
   paso='La clase, paso a paso · usted lo hace primero, la clase lo sigue', cuesta='Si les cuesta', funciono='Cómo saber que funcionó',
   evaluar='Evaluar', de='de', sino='Si no se logró:', pal_t='Palabras nuevas · <span>la gramática musical de esta clase</span>',
   pal_sub='Así como en la gramática se aprenden los nombres de las cosas, en la música también. Estas son las palabras que la clase usa por primera vez.',
   en_cuad='En el cuaderno del alumno', imprima='Si los alumnos no tienen el librito, imprima esas páginas.', notas='Mis notas de la clase', anot='Anotaciones',
   pie='Music Motion · Música en el aula · Nivel {n} · Clase {c} «{t}» · edición para el maestro'),
 'nl': dict(brand='In de klas', nivel='Niveau', clase='Les', ed='Editie voor de leerkracht', campos=['Leerkracht', 'Klas', 'Datum'],
   minutos='minuten', una_pag='de les op één bladzijde', guia='De volledige gids', guia_link='Les {c} van Niveau {n}', cuad='het werkboek van de leerling',
   book='Mijn kleine muziekgrammatica', book_lvl='Mijn kleine muziekgrammatica · Niveau {n}', meta='Het doel', necesita='Wat je nodig hebt', antes='Vóór de les · {m} min thuis',
   paso='De les, stap voor stap · jij doet het eerst voor, de klas doet je na', cuesta='Als het moeilijk gaat', funciono='Hoe weet je dat het gelukt is',
   evaluar='Evalueren', de='van de', sino='Niet gelukt?', pal_t='Nieuwe woorden · <span>de muziekgrammatica van deze les</span>',
   pal_sub='Zoals je in de taalles de namen van de dingen leert, zo ook in de muziek. Dit zijn de woorden die de klas voor het eerst gebruikt.',
   en_cuad='In het werkboek van de leerling', imprima='Hebben de leerlingen het boekje niet? Druk die bladzijden dan af.', notas='Mijn notities bij de les', anot='Notities',
   pie='Music Motion · In de klas · Niveau {n} · Les {c} „{t}” · editie voor de leerkracht', azerty=True),
 'fr': dict(brand='Musique en classe', nivel='Niveau', clase='Leçon', ed='Édition pour l’enseignant', campos=['Enseignant', 'Classe', 'Date'],
   minutos='minutes', una_pag='la leçon sur une page', guia='Le guide complet', guia_link='Leçon {c} du Niveau {n}', cuad='le cahier de l’élève',
   book='Ma petite grammaire musicale', book_lvl='Ma petite grammaire musicale · Niveau {n}', meta='L’objectif', necesita='Ce qu’il vous faut', antes='Avant la leçon · {m} min à la maison',
   paso='La leçon, pas à pas · vous montrez d’abord, la classe vous suit', cuesta='Si c’est difficile', funciono='Comment savoir que c’est réussi',
   evaluar='Évaluer', de='sur', sino='Pas réussi ?', pal_t='Mots nouveaux · <span>la grammaire musicale de cette leçon</span>',
   pal_sub='Comme on apprend en grammaire le nom des choses, en musique aussi. Voici les mots que la classe utilise pour la première fois.',
   en_cuad='Dans le cahier de l’élève', imprima='Si les élèves n’ont pas le livret, imprimez ces pages.', notas='Mes notes sur la leçon', anot='Notes',
   pie='Music Motion · Musique en classe · Niveau {n} · Leçon {c} « {t} » · édition pour l’enseignant', azerty=True),
 'en': dict(brand='In the classroom', nivel='Level', clase='Lesson', ed='Teacher’s edition', campos=['Teacher', 'Class', 'Date'],
   minutos='minutes', una_pag='the lesson on one page', guia='The full guide', guia_link='Level {n}, Lesson {c}', cuad='the pupil’s workbook',
   book='My Little Music Grammar', book_lvl='My Little Music Grammar · Level {n}', meta='The goal', necesita='What you need', antes='Before the lesson · {m} min at home',
   paso='The lesson, step by step · you do it first, the class follows', cuesta='If they find it hard', funciono='How to tell it worked',
   evaluar='Assess', de='out of', sino='Not there yet?', pal_t='New words · <span>the music grammar of this lesson</span>',
   pal_sub='Just as grammar teaches us the names of things, so does music. These are the words the class uses for the first time.',
   en_cuad='In the pupil’s workbook', imprima='If the pupils don’t have the booklet, print those pages.', notas='My notes on the lesson', anot='Notes',
   pie='Music Motion · In the classroom · Level {n} · Lesson {c} “{t}” · teacher’s edition'),
}
T = {}
try:
    from tr_nl import T as _nl; T['nl'] = _nl
except ImportError: pass
try:
    from tr_fr import T as _fr; T['fr'] = _fr
except ImportError: pass
try:
    from tr_en import T as _en; T['en'] = _en
except ImportError: pass
