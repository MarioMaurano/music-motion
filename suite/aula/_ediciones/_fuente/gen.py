# Edición para el maestro (carpeta A4) de cada clase de «Música en el aula».
# Modelo aprobado por Mario el 2026-11-26 con la Clase 1 del Nivel 1:
#   portada (ilustración del capítulo de la Gramatiquilla) · la clase en una página (con «Evaluar») ·
#   la guía completa con más aire y «Anotaciones» en el espacio libre · palabras nuevas + páginas de la Gramatiquilla ·
#   la hoja para la familia al final · el mismo pie en todas las páginas, A4.
# Uso: python3 gen.py <clave> [<clave> ...]   (las claves están en lecciones.py; p. ej. n1c2)
import sys, os, io, re, base64, subprocess, glob, json
import pypdf
from PIL import Image
from reportlab.pdfgen import canvas
from reportlab.lib.colors import HexColor
from lecciones import L, ICON
HERE = os.path.dirname(os.path.abspath(__file__))
GRAM = {'1': os.environ.get('GRAM1', '/mnt/user-data/uploads/ScoreSuite-v2/portal/gramatiquilla-nivel-1.pdf'),
        '2': os.environ.get('GRAM2', '/mnt/user-data/uploads/ScoreSuite-v2/portal/gramatiquilla-nivel-2.pdf')}
AULA = os.environ.get('AULA', '/mnt/user-data/uploads/ScoreSuite-v2/website/aula')
OUT = os.environ.get('OUT', os.path.join(HERE, 'out'))
CHROME = '/usr/bin/google-chrome'
S = 'https://musicmotionsuite.com'
mm = 72 / 25.4
os.makedirs(OUT, exist_ok=True)

CSS = open(os.path.join(HERE, 'edicion.css'), encoding='utf-8').read()

def a(u, t): return f'<a href="{u}">{t}</a>'
def k(x): return ''.join(f'<span class="k">{c}</span>' for c in x.split())

def b64(path): return base64.b64encode(open(path, 'rb').read()).decode()

def cover_img(d, tmp):
    # la ilustración del capítulo: la imagen más grande de sus páginas que no sea Canelo (1000×747, se repite en todo el libro);
    # si el capítulo no tiene ilustración (sólo dibujos), la parte de arriba de su primera página
    G = d['gram_file']; best = None
    for p in d['gram_pages']:
        base = os.path.join(tmp, f'cov{p}')
        subprocess.run(['pdfimages', '-j', '-f', str(p), '-l', str(p), G, base], check=True)
        for f in glob.glob(base + '-*'):
            w, h = Image.open(f).size
            if (w, h) in ((1000, 747), (1000, 746)) or w < 500: continue
            if best is None or os.path.getsize(f) > os.path.getsize(best): best = f
        if best: return best
    pg = d['gram_pages'][0]; base = os.path.join(tmp, 'covpage')
    subprocess.run(['pdftoppm', '-r', '150', '-png', '-f', str(pg), '-l', str(pg), '-singlefile', G, base], check=True)
    im = Image.open(base + '.png'); W, H = im.size
    im.crop((int(W*.06), int(H*.13), int(W*.94), int(H*.62))).save(base + '-crop.png')
    return base + '-crop.png'

def thumbs(d, tmp):
    out = []
    for p in d['gram_pages']:
        b = os.path.join(tmp, f'gp{p}')
        subprocess.run(['pdftoppm', '-r', '80', '-png', '-f', str(p), '-l', str(p), '-singlefile', d['gram_file'], b], check=True)
        out.append(b + '.png')
    return out

FIT = """<script>document.querySelectorAll('.p').forEach(function(p){var f=1,i=0;p.style.paddingBottom='16mm';
function over(){var r=p.getBoundingClientRect(),lim=r.bottom-parseFloat(getComputedStyle(p).paddingBottom),m=0;[].forEach.call(p.children,function(c){m=Math.max(m,c.getBoundingClientRect().bottom);});return m>lim+1;}
[].forEach.call(p.children,function(c){c.style.flexShrink='0';});
var els=[].slice.call(p.querySelectorAll('.et,.box,.eval,.voc div')),px=els.map(function(e){return parseFloat(getComputedStyle(e).fontSize);});while(over()&&i<30){f-=0.02;i++;els.forEach(function(e,n){e.style.fontSize=(px[n]*f)+'px';});}});</script>"""

def html_edicion(d, tmp):
    cov = cover_img(d, tmp); mime = 'jpeg' if cov.endswith('.jpg') else 'png'
    th = thumbs(d, tmp)
    gp = d['gram_pages']; tw = 46 if len(th) <= 2 else (33 if len(th) <= 5 else 27)
    # portada
    U = d['U']
    cover = f'''<div class="p cov"><div class="brand"><span>Music Motion</span><span>{U['brand']}</span></div>
<div class="num">{U['nivel']} {d['nivel']} · {U['clase']} {d['clase']}</div><h1 class="big">{d['titulo']}</h1><p class="lema">{d['lema']}</p>
<img src="data:image/{mime};base64,{b64(cov)}" alt=""><div class="ed">{U['ed']}</div>
<div class="campos"><div>{U['campos'][0]}</div><div>{U['campos'][1]}</div><div>{U['campos'][2]}</div></div></div>'''
    # la clase en una página
    antes = ''.join(f'<li>{x}</li>' for x in d['antes'])
    et = ''.join(f'<div class="et"><div class="min">{m} min</div><div><h3>{h}</h3>{t}</div>{ICON[i]}</div>' for m, h, t, i in d['etapas'])
    ficha = f'''<div class="p"><h1>{U['clase']} {d['clase']} · <span>{d['titulo']}</span></h1>
<p class="sub">{U['nivel']} {d['nivel']} · {d['edad']} · {d['dur']} {U['minutos']} · {U['una_pag']}. {U['guia']}: {a(S+'/suite/aula/'+d['html'], U['guia_link'].format(c=d['clase'], n=d['nivel']))} · {U['cuad']}: {a(d['gram_url'] + f'#page={gp[0]}', U['book'])}, {d['gram_ref']}.</p>
<div class="top"><div class="box"><b class="t">{U['meta']}</b>{d['meta']}<br><b class="t" style="margin-top:5px">{U['necesita']}</b>{d['necesita']}</div>
<div class="box"><b class="t">{U['antes'].format(m=d['antes_min'])}</b><ol>{antes}</ol></div></div>
<h2>{U['paso']}</h2>{et}
<div class="bot"><div class="box"><b class="t">{U['cuesta']}</b>{d['cuesta']}</div>
<div class="box"><b class="t">{U['funciono']}</b>{d['funciono']}<br><b class="t" style="margin-top:5px">{d['final_t']}</b>{d['final']}</div></div>
<div class="eval"><b>{U['evaluar']}</b> · {d['eval_que']}: <span class="blank"></span> {U['de']} <span class="blank"></span> &nbsp;·&nbsp; {U['sino']} {d['eval_si_no']}</div></div>'''
    # palabras nuevas
    vh = ''.join(f'<div><b>{x}</b>{y}</div>' for x, y in d['palabras'])
    imgs = ''.join(f'<img style="width:{tw}mm" src="data:image/png;base64,{b64(t)}" alt="">' for t in th)
    pal = f'''<div class="p"><h1>{U['pal_t']}</h1>
<p class="sub">{U['pal_sub']}</p>
<div class="voc">{vh}</div><h2>{U['en_cuad']}</h2>
<div class="gp">{imgs}</div><div class="gpt">{a(d['gram_url'] + f'#page={gp[0]}', U['book_lvl'].format(n=d['nivel']))}, {d['gram_ref']}: {d['gram_desc']} {U['imprima']}</div>
<h2>{U['notas']}</h2><div class="lines">{'<div></div>'*d.get('lineas', 4)}</div></div>'''
    return f'<!DOCTYPE html><html lang="{d['lang']}"><head><meta charset="utf-8"><title>{d["titulo"]}</title><style>{CSS}</style></head><body>{cover}{ficha}{pal}' + FIT + '</body></html>'

def chrome_pdf(src_html, out_pdf, extra_css=None):
    js = os.path.join(HERE, '_pdf.js')
    open(js, 'w').write("""const {chromium}=require('playwright');(async()=>{const [src,out,css]=process.argv.slice(2);
const b=await chromium.launch({executablePath:'%s'});const p=await b.newPage();await p.goto('file://'+src,{waitUntil:'load'});
if(css) await p.addStyleTag({content:require('fs').readFileSync(css,'utf8')});await p.emulateMedia({media:'print'});
await p.pdf({path:out,format:'A4',preferCSSPageSize:true,printBackground:true});await b.close();})();""" % CHROME)
    args = ['node', js, src_html, out_pdf] + ([extra_css] if extra_css else [])
    subprocess.run(args, check=True, env=dict(os.environ, NODE_PATH='/opt/npm-tools/node_modules'))

ANOT = 'Anotaciones'
def anotaciones(src, dst, skip):
    r = pypdf.PdfReader(src); W, H = float(r.pages[0].mediabox.width), float(r.pages[0].mediabox.height)
    tmp = dst + '_scan'; subprocess.run(['pdftoppm', '-r', '60', '-png', src, tmp], check=True)
    files = sorted(glob.glob(tmp + '-*.png')); w = pypdf.PdfWriter()
    for i, (pg, f) in enumerate(zip(r.pages, files)):
        if i not in skip:
            im = Image.open(f).convert('L'); iw, ih = im.size; last = 0
            for y in range(ih):
                if im.crop((0, y, iw, y + 1)).getextrema()[0] < 235: last = y
            top = last / ih * H + 10 * mm; free = H - 16 * mm - top
            if free > 35 * mm:
                buf = io.BytesIO(); c = canvas.Canvas(buf, pagesize=(W, H)); x0 = 31 * mm; x1 = W - 23 * mm; yt = H - top
                c.setFillColor(HexColor('#7a1f2e')); c.setFont('Times-Bold', 12); c.drawString(x0, yt - 12, ANOT)
                c.setStrokeColor(HexColor('#7a1f2e')); c.setLineWidth(1.2); c.line(x0, yt - 16, x1, yt - 16)
                c.setStrokeColor(HexColor('#cfcac0')); c.setLineWidth(.6); y = yt - 16 - 9 * mm
                while y > 16 * mm + 2: c.line(x0, y, x1, y); y -= 9 * mm
                c.save(); buf.seek(0); pg.merge_page(pypdf.PdfReader(buf).pages[0])
        w.add_page(pg)
    for f in files: os.remove(f)
    w.write(dst)

def familia_pages(pdf):
    n = len(pypdf.PdfReader(pdf).pages)
    for i in range(n):
        t = subprocess.run(['pdftotext', '-f', str(i + 1), '-l', str(i + 1), pdf, '-'], capture_output=True, text=True).stdout
        if '✂' in t: return list(range(i, n))
    return []

AZ = {'Z': 'W', 'W': 'Z', 'A': 'Q', 'Q': 'A', 'M': ','}
def build(key, lang='es'):
    global ANOT
    import i18n
    d = dict(L[key]); U = i18n.UI[lang]; d['U'] = U; d['lang'] = lang
    if lang != 'es':
        tr = i18n.T[lang].get(key)
        if not tr: print(key, lang, 'sin traducción'); return
        d.update(tr); d['html'] = d['html'].replace('-es.html', f'-{lang}.html').replace('aula-clase-1-', 'aula-n1-clase-1-')
        if 'etapas_t' in tr: d['etapas'] = [(m, t, x, ic) for (m, _, _, ic), (t, x) in zip(L[key]['etapas'], tr['etapas_t'])]
    sfx = '' if lang == 'es' else '-' + lang
    d['gram_url'] = f"{S}/gramatiquilla-nivel-{d['nivel']}{sfx}.pdf"
    d['gram_file'] = GRAM[d['nivel']].replace('.pdf', sfx + '.pdf')
    if not os.path.exists(os.path.join(AULA, d['html'])): print(key, lang, 'falta la lección', d['html']); return
    ANOT = U['anot']
    tmp = os.path.join(OUT, f'_tmp_{key}_{lang}'); os.makedirs(tmp, exist_ok=True)
    eh = os.path.join(tmp, 'edicion.html'); h = html_edicion(d, tmp)
    if U.get('azerty'): h = re.sub(r'(<span class="k">)([A-Z])(</span>)', lambda m: m.group(1) + AZ.get(m.group(2), m.group(2)) + m.group(3), h)
    open(eh, 'w', encoding='utf-8').write(h)
    ep = os.path.join(tmp, 'edicion.pdf'); chrome_pdf(eh, ep)
    lp = os.path.join(tmp, 'leccion.pdf'); chrome_pdf(os.path.join(AULA, d['html']), lp, os.path.join(HERE, 'leccion-print.css'))
    fam = familia_pages(lp)
    la = os.path.join(tmp, 'leccion-anot.pdf'); anotaciones(lp, la, set(fam))
    e = pypdf.PdfReader(ep); l = pypdf.PdfReader(la)
    assert len(e.pages) == 3, ('la edición no cabe en 3 páginas', len(e.pages))
    body = [l.pages[i] for i in range(len(l.pages)) if i not in fam]; famp = [l.pages[i] for i in fam]
    pages = [e.pages[0], e.pages[1]] + body + [e.pages[2]] + famp
    N = len(pages); w = pypdf.PdfWriter()
    pie = U['pie'].format(n=d['nivel'], c=d['clase'], t=d['titulo'])
    for i, pg in enumerate(pages, 1):
        W, H = float(pg.mediabox.width), float(pg.mediabox.height)
        assert abs(W - 595.3) < 2 and abs(H - 841.9) < 2, ('no es A4', i, W, H)
        buf = io.BytesIO(); c = canvas.Canvas(buf, pagesize=(W, H)); x0 = 22 * mm; x1 = W - 13 * mm; y = 8 * mm
        c.setStrokeColor(HexColor('#e3ded4')); c.setLineWidth(.6); c.line(x0, y + 9, x1, y + 9)
        c.setFillColor(HexColor('#6b6f78')); c.setFont('Times-Roman', 8.5); c.drawString(x0, y, pie); c.drawRightString(x1, y, f'{i} / {N}')
        c.save(); buf.seek(0); pg.merge_page(pypdf.PdfReader(buf).pages[0]); w.add_page(pg)
    name = f"aula-n{d['nivel']}-clase-{d['clase']}-{lang}-carpeta.pdf"
    out = os.path.join(OUT, name); w.write(out)
    print(key, lang, name, N, 'páginas · familia:', [i + 1 for i in fam])

if __name__ == '__main__':
    lang = os.environ.get('LANG_ED', 'es')
    for key in sys.argv[1:]: build(key, lang)
