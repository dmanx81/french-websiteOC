import Image from "next/image";
import Link from "next/link";

const trustStats = [
  { value: "35+", label: "vjet eksperiencë" },
  { value: "500+", label: "studentë" },
  { value: "A1 → C2", label: "nivele" },
  { value: "100%", label: "online" },
];

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#f7f3ee] text-[#17233b]">
      <div className="absolute -right-24 top-20 h-72 w-72 rounded-full bg-[#dfeaf4] opacity-80" aria-hidden="true" />
      <div className="absolute bottom-0 left-0 h-40 w-40 rounded-full bg-[#f0dcd1] opacity-80" aria-hidden="true" />
      <div className="relative mx-auto max-w-[1200px] px-5 pb-14 pt-12 sm:px-8 lg:px-10 lg:pb-20 lg:pt-20">
        <div className="grid items-center gap-12 lg:grid-cols-[1.02fr_0.98fr] lg:gap-16">
          <div className="max-w-[650px]">
            <div className="mb-7 flex items-center gap-3 text-[11px] font-semibold tracking-[0.2em] text-[#53627a] uppercase">
              <span className="h-px w-8 bg-[#bd3d49]" aria-hidden="true" />
              Mësime online nga Tirana
            </div>
            <h1 className="editorial-serif max-w-[620px] text-5xl leading-[0.94] tracking-[-0.06em] text-[#17233b] sm:text-6xl lg:text-[5.6rem]">
              Mëso Frëngjisht Online
              <span className="mt-3 block text-[#bd3d49]">me Prof. Natalia Manaj</span>
            </h1>
            <p className="mt-7 max-w-[560px] text-base leading-8 text-[#586579] sm:text-lg">
              35 vjet eksperiencë · Mësime individuale dhe në grup · Nga A1 deri në C2 · Përgatitje DELF, DALF, TCF dhe TEF
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link href="#contact" className="inline-flex items-center justify-center rounded-full bg-[#17233b] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_10px_24px_rgba(23,35,59,0.16)] transition-transform hover:-translate-y-0.5">
                Rezervo mësimin falas <span aria-hidden="true" className="ml-3 text-[#ef6b67]">↗</span>
              </Link>
              <Link href="#pricing" className="inline-flex items-center justify-center rounded-full border border-[#ccd3dc] bg-white/70 px-6 py-3.5 text-sm font-semibold text-[#17233b] transition-colors hover:border-[#17233b] hover:bg-white">
                Shiko çmimet
              </Link>
            </div>
            <p className="mt-5 text-xs font-medium tracking-[0.1em] text-[#586579]">Mësimi i parë falas</p>
          </div>

          <div className="relative mx-auto w-full max-w-[500px] lg:mr-0">
            <div className="absolute -left-5 top-16 h-24 w-24 rounded-full border border-[#e1b8a7] sm:-left-9" aria-hidden="true" />
            <div className="relative overflow-hidden rounded-[2.25rem] border border-white/80 bg-[#d9eaf2] p-3 shadow-[0_24px_70px_rgba(64,75,91,0.12)] sm:p-4">
              <div className="relative h-[480px] overflow-hidden rounded-[1.7rem] bg-[#b9ddec] sm:h-[590px] lg:h-[650px]">
                <Image
                  src="/images/home/hero-natalia.png"
                  alt="Prof. Natalia Manaj, mësuese e gjuhës frënge"
                  fill
                  sizes="(min-width: 1024px) 468px, (min-width: 640px) min(468px, calc(100vw - 96px)), calc(100vw - 64px)"
                  priority
                  className="object-cover object-center"
                />
              </div>
              <div className="absolute bottom-7 left-7 right-7 rounded-2xl border border-white/70 bg-white/95 p-4 shadow-lg backdrop-blur sm:bottom-8 sm:left-8 sm:right-auto sm:w-[245px]">
                <div className="flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#17233b] text-xs font-bold text-white">NM</span>
                  <div>
                    <div className="text-sm font-semibold text-[#17233b]">Prof. Natalia Manaj</div>
                    <div className="mt-0.5 text-[11px] text-[#586579]">Mësuese e gjuhës frënge</div>
                  </div>
                </div>
                <div className="mt-4 flex items-center gap-2 text-[11px] font-medium text-[#586579]"><span className="h-2 w-2 rounded-full bg-[#247a4d]" aria-hidden="true" /> Mësime online aktive</div>
              </div>
            </div>
          </div>
        </div>

        <dl className="mt-14 grid grid-cols-2 gap-y-6 border-t border-[#dfd5ca] pt-6 sm:grid-cols-4 sm:gap-0">
          {trustStats.map((stat) => (
            <div key={stat.label} className="flex flex-col sm:border-l sm:border-[#dfd5ca] sm:pl-6 first:sm:border-l-0 first:sm:pl-0">
              <dt className="order-2 mt-1 text-[10px] font-medium tracking-[0.16em] text-[#586579] uppercase">{stat.label}</dt>
              <dd className="order-1 text-2xl font-semibold tracking-[-0.05em] text-[#17233b]">{stat.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
