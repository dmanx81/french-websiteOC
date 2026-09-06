import Image from "next/image";
import Link from "next/link";

const courses = [
  "Bisedë në frëngjisht", "Gramatikë", "Frëngjisht për fillestarë", "Frëngjisht e avancuar",
  "DELF / DALF", "TCF / TEF", "Mësime individuale", "Mësime në grup",
];

const levels = [
  ["A1", "Fillestar"], ["A2", "Bazë"], ["B1", "Mesatar"],
  ["B2", "Mesatar i lartë"], ["C1", "I avancuar"], ["C2", "Zotërim i plotë"],
];

function SectionIntro({ eyebrow, title, text, dark = false }: { eyebrow: string; title: string; text?: string; dark?: boolean }) {
  return (
    <div className="mb-10 max-w-[680px] lg:mb-14">
      <p className="mb-4 text-[10px] font-semibold tracking-[0.22em] text-[#bd3d49] uppercase">{eyebrow}</p>
      <h2 className={`editorial-serif text-4xl leading-[1.05] tracking-[-0.04em] sm:text-5xl ${dark ? "text-white" : "text-[#17233b]"}`}>{title}</h2>
      {text && <p className={`mt-5 max-w-[590px] text-base leading-8 ${dark ? "text-[#c5d2df]" : "text-[#697586]"}`}>{text}</p>}
    </div>
  );
}

export function ContentSections() {
  return (
    <>
      <section id="about" className="bg-white">
        <div className="mx-auto grid max-w-[1200px] items-center gap-14 px-5 py-20 sm:px-8 lg:grid-cols-[0.88fr_1.12fr] lg:gap-24 lg:px-10 lg:py-32">
          <div className="relative mx-auto w-full max-w-[450px]">
            <div className="absolute -bottom-6 -right-6 h-32 w-32 rounded-full bg-[#f3dfd8]" aria-hidden="true" />
            <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] bg-[#dcebf3]">
              <Image src="/images/home/french teacher.jpeg" alt="Prof. Natalia Manaj, mësuese e gjuhës frënge" fill sizes="(min-width: 1024px) 450px, 90vw" className="object-cover object-[62%_center]" />
            </div>
          </div>
          <div>
            <SectionIntro eyebrow="Rreth mësueses" title="Një përvojë e gjatë, një qasje njerëzore." text="Prof. Natalia Manaj është mësuese e Gjuhës Frënge me 35 vjet eksperiencë. Nga Tirana, ajo zhvillon mësime online interaktive për nxënës të niveleve dhe objektivave të ndryshme." />
            <div className="grid grid-cols-2 gap-x-8 gap-y-5 border-t border-[#e5e9ed] pt-6 sm:grid-cols-4">
              {["35+ vjet eksperiencë", "500+ studentë", "A1 → C2", "100% online"].map((item) => <div key={item} className="text-sm font-semibold leading-5 text-[#17233b]">{item}</div>)}
            </div>
          </div>
        </div>
      </section>

      <section id="courses" className="bg-[#f7f3ee]">
        <div className="mx-auto max-w-[1200px] px-5 py-20 sm:px-8 lg:px-10 lg:py-32">
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <SectionIntro eyebrow="Kurset & shërbimet" title="Mësoni në mënyrën që ju përshtatet." text="Zgjidhni fokusin dhe formatin që përputhet me objektivin tuaj." />
            <Link href="#contact" className="mb-14 text-sm font-semibold text-[#17233b] underline decoration-[#bd3d49] decoration-2 underline-offset-8 hover:text-[#bd3d49]">Rezervo mësimin falas ↗</Link>
          </div>
          <div className="grid border-t border-[#dfd5ca] sm:grid-cols-2 lg:grid-cols-4">
            {courses.map((course, index) => <Link key={course} href="#contact" className="group flex items-center justify-between border-b border-[#dfd5ca] py-5 pr-3 transition-colors hover:text-[#bd3d49] sm:mr-8"><span className="flex items-center gap-4"><span className="text-[10px] font-semibold tracking-[0.16em] text-[#697586]">0{index + 1}</span><span className="text-[15px] font-semibold tracking-[-0.02em]">{course}</span></span><span aria-hidden="true" className="text-lg text-[#8a6f60] transition-transform group-hover:translate-x-1">↗</span></Link>)}
          </div>
        </div>
      </section>

      <section id="levels" className="bg-[#17233b] text-white">
        <div className="mx-auto max-w-[1200px] px-5 py-20 sm:px-8 lg:px-10 lg:py-32">
          <SectionIntro dark eyebrow="Nivelet" title="Nga fjala e parë te zotërimi i plotë." text="Një progresion i qartë nga A1 deri në C2, me ritëm të përshtatur për ju." />
          <div className="grid border-t border-white/15 sm:grid-cols-3 lg:grid-cols-6">
            {levels.map(([level, label]) => <div key={level} className="border-b border-white/15 py-6 lg:border-b-0 lg:border-r lg:pl-5 first:lg:pl-0 last:lg:border-r-0"><div className="editorial-serif text-4xl text-[#f4c4b6]">{level}</div><div className="mt-3 text-xs text-[#c5d2df]">{label}</div></div>)}
          </div>
        </div>
      </section>

      <section id="method" className="bg-white">
        <div className="mx-auto grid max-w-[1200px] items-center gap-14 px-5 py-20 sm:px-8 lg:grid-cols-[1fr_0.82fr] lg:gap-24 lg:px-10 lg:py-32">
          <div>
            <SectionIntro eyebrow="Metoda e mësimit" title="Metoda Alter Ego" text="Mësimet përdorin metodologjinë Alter Ego, duke kombinuar bisedën, gramatikën, dëgjimin, ushtrimet dhe mësimin me multimedia." />
            <div className="space-y-0 border-t border-[#e5e9ed]">
              {[["Alter Ego 1", "A1 → A2"], ["Alter Ego 2", "A2 → B1"], ["Nivelet e avancuara", "B1 → C2"]].map(([name, range]) => <div key={name} className="flex items-center justify-between border-b border-[#e5e9ed] py-5"><span className="text-sm font-semibold text-[#17233b]">{name}</span><span className="text-xs font-medium tracking-[0.12em] text-[#bd3d49]">{range}</span></div>)}
            </div>
            <p className="mt-7 text-sm leading-7 text-[#697586]">Programi mund t&apos;ju përgatisë për <strong className="font-semibold text-[#17233b]">DELF, DALF, TCF</strong> dhe <strong className="font-semibold text-[#17233b]">TEF</strong>.</p>
          </div>
          <div className="relative mx-auto w-full max-w-[430px]">
            <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] bg-[#f7f3ee]"><Image src="/images/home/french tower.jpeg" alt="Ilustrim i Kullës Eiffel mbi libra të frëngjishtes" fill sizes="(min-width: 1024px) 430px, 90vw" className="object-cover" /></div>
            <div className="absolute -bottom-5 -left-4 max-w-[230px] bg-[#17233b] px-5 py-4 text-sm font-semibold leading-6 text-white">Mëso me strukturë. Fol me siguri.</div>
          </div>
        </div>
      </section>

      <section className="bg-[#f7f3ee]"><div className="mx-auto max-w-[1200px] px-5 py-20 sm:px-8 lg:px-10 lg:py-32"><SectionIntro eyebrow="Si funksionon" title="Tre hapa të thjeshtë drejt frëngjishtes." /><div className="grid divide-y divide-[#dfd5ca] border-y border-[#dfd5ca] md:grid-cols-3 md:divide-x md:divide-y-0">{[["01", "Na kontakto", "Kontakto në telefon, WhatsApp ose email."], ["02", "Cakto orarin", "Zgjidh orarin, shpeshtësinë dhe platformën online."], ["03", "Fillo mësimin", "Bashkohu në Google Meet, Zoom ose platformën e rënë dakord."]].map(([number, title, text]) => <article key={number} className="py-7 md:px-7 md:first:pl-0 md:last:pr-0"><div className="text-xs font-semibold tracking-[0.18em] text-[#bd3d49]">{number}</div><h3 className="mt-10 text-xl font-semibold tracking-[-0.03em] text-[#17233b]">{title}</h3><p className="mt-3 max-w-[270px] text-sm leading-7 text-[#697586]">{text}</p></article>)}</div><p className="mt-8 text-center text-sm font-semibold text-[#17233b]">Mësimi i parë është falas.</p></div></section>

      <section id="testimonials" className="bg-[#eef4f7]"><div className="mx-auto max-w-[1200px] px-5 py-20 sm:px-8 lg:px-10 lg:py-28"><div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end"><SectionIntro eyebrow="Dëshmi" title="Fjalët e nxënësve." text="Përvoja të ndara nga nxënës të Frengjisht Online." /><Link href="#contact" className="mb-14 text-sm font-semibold text-[#17233b] underline decoration-[#bd3d49] decoration-2 underline-offset-8 hover:text-[#bd3d49]">Rezervo mësimin falas ↗</Link></div><div className="grid gap-10 border-t border-[#d7e1e7] pt-8 md:grid-cols-2 md:gap-0 md:divide-x md:divide-[#d7e1e7]"><blockquote className="max-w-[470px] md:pr-12"><div role="img" aria-label="5 nga 5 yje" className="text-xl tracking-[0.2em] text-[#bd3d49]"><span aria-hidden="true">★★★★★</span></div><p className="editorial-serif mt-5 text-2xl leading-[1.25] tracking-[-0.02em] text-[#17233b]">&quot;Pas 3 muajsh mësim kalova intervistën time në frëngjisht. Prof. Natalia është shumë e durueshme dhe profesionale!&quot;</p><cite className="mt-6 block text-xs font-semibold not-italic tracking-[0.12em] text-[#697586] uppercase">Arta M., Tiranë</cite></blockquote><blockquote className="max-w-[470px] md:pl-12"><div role="img" aria-label="5 nga 5 yje" className="text-xl tracking-[0.2em] text-[#bd3d49]"><span aria-hidden="true">★★★★★</span></div><p className="editorial-serif mt-5 text-2xl leading-[1.25] tracking-[-0.02em] text-[#17233b]">&quot;Mësimet online janë shumë të përshtatshme. E rekomandoj për këdo që dëshiron të mësojë frëngjisht shpejt dhe me efikasitet!&quot;</p><cite className="mt-6 block text-xs font-semibold not-italic tracking-[0.12em] text-[#697586] uppercase">Erion B., Tiranë</cite></blockquote></div></div></section>

      <section id="pricing" className="bg-white"><div className="mx-auto max-w-[1200px] px-5 py-20 sm:px-8 lg:px-10 lg:py-32"><div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end"><SectionIntro eyebrow="Çmimet" title="Të qarta që në fillim." text="Çdo opsion zgjat 60 minuta. Zgjidhni formatin që ju përshtatet." /><p className="mb-14 text-sm font-semibold text-[#bd3d49]">Mësimi i parë falas</p></div><div className="overflow-hidden border-y border-[#dfe5ea]"><div className="hidden grid-cols-[1.2fr_1fr_1fr_1.4fr] gap-4 border-b border-[#dfe5ea] py-4 text-[10px] font-semibold tracking-[0.16em] text-[#697586] uppercase sm:grid"><span>Formati</span><span>Çmimi</span><span>Kohëzgjatja</span><span>Përfshin</span></div>{[["Individuale", "1500 L", "60 minuta", "Mësim individual · Orar fleksibël · Materiale të personalizuara"], ["2 persona", "1250 L për person", "60 minuta", "Dy studentë · Orar fleksibël"], ["3+ persona", "1000 L për person", "60 minuta", "Grup i vogël · Zgjedhja me vlerën më të mirë"]].map(([name, price, duration, details], index) => <div key={name} className={`grid gap-3 border-b border-[#dfe5ea] py-6 last:border-b-0 sm:grid-cols-[1.2fr_1fr_1fr_1.4fr] sm:items-center sm:gap-4 ${index === 1 ? "bg-[#f0f5f8]" : ""}`}><div className="flex items-center gap-3 text-lg font-semibold text-[#17233b]">{name}{index === 1 && <span className="rounded-full bg-[#bd3d49] px-2.5 py-1 text-[9px] font-semibold tracking-[0.1em] text-white uppercase">Më popullorja</span>}</div><div className="text-xl font-semibold tracking-[-0.04em] text-[#17233b]">{price}</div><div className="text-sm text-[#697586]">{duration}</div><div className="text-sm leading-6 text-[#697586]">{details}</div></div>)}</div><Link href="#contact" className="mt-8 inline-flex rounded-full bg-[#bd3d49] px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#a8323e]">Rezervo mësimin falas ↗</Link></div></section>

      <section id="contact" className="bg-[#f7f3ee]"><div className="mx-auto grid max-w-[1200px] gap-14 px-5 py-20 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24 lg:px-10 lg:py-32"><div><SectionIntro eyebrow="Kontakt" title="Gati për të filluar?" text="Më shkruani për të diskutuar nivelin, objektivat dhe orarin tuaj." /><div className="space-y-4 text-sm"><a href="tel:+355699877544" className="block font-semibold text-[#17233b] hover:text-[#bd3d49]">+355 69 987 7544 <span className="ml-2 text-xs font-normal text-[#697586]">Telefon / WhatsApp</span></a><a href="mailto:dritanmane@gmail.com" className="block font-semibold text-[#17233b] hover:text-[#bd3d49]">dritanmane@gmail.com</a><p className="text-[#697586]">Rr. e Dibrës<br />Tiranë, Shqipëri 01001</p></div><a href="https://wa.me/355699877544" target="_blank" rel="noreferrer" className="mt-8 inline-flex rounded-full bg-[#17233b] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#2b4162]">Shkruaj në WhatsApp ↗</a></div><form action="mailto:dritanmane@gmail.com" method="post" encType="text/plain" className="border-t border-[#d9d0c8] pt-8"><div className="grid gap-5 sm:grid-cols-2"><label className="text-xs font-semibold text-[#17233b]">Emri<input name="Emri" autoComplete="name" required className="mt-2 w-full border-b border-[#bdc8d2] bg-transparent px-0 py-3 text-sm outline-none focus:border-[#17233b]" /></label><label className="text-xs font-semibold text-[#17233b]">Email<input name="Email" type="email" autoComplete="email" required className="mt-2 w-full border-b border-[#bdc8d2] bg-transparent px-0 py-3 text-sm outline-none focus:border-[#17233b]" /></label><label className="text-xs font-semibold text-[#17233b] sm:col-span-2">Telefoni<input name="Telefoni" type="tel" autoComplete="tel" className="mt-2 w-full border-b border-[#bdc8d2] bg-transparent px-0 py-3 text-sm outline-none focus:border-[#17233b]" /></label><label className="text-xs font-semibold text-[#17233b] sm:col-span-2">Mesazhi<textarea name="Mesazhi" required rows={4} className="mt-2 w-full resize-none border-b border-[#bdc8d2] bg-transparent px-0 py-3 text-sm outline-none focus:border-[#17233b]" /></label></div><button type="submit" className="mt-8 rounded-full bg-[#bd3d49] px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#a8323e]">Dërgo mesazhin ↗</button></form></div></section>
    </>
  );
}
