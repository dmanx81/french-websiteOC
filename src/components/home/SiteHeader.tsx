import Image from "next/image";
import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="border-b border-[#e9e1da] bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-[1200px] items-center justify-between gap-4 px-5 py-3 sm:px-8 lg:px-10">
        <Link href="#top" aria-label="Frengjisht në internet — kreu">
          <Image
            src="/logo.png"
            alt="Frengjisht në internet"
            width={1363}
            height={546}
            sizes="(min-width: 1024px) 200px, (min-width: 640px) 180px, 140px"
            priority
            className="h-auto w-[140px] sm:w-[180px] lg:w-[200px]"
          />
        </Link>
        <nav
          aria-label="Navigimi kryesor"
          className="hidden items-center gap-7 text-[13px] font-medium text-[#687487] lg:flex"
        >
          <Link href="#about" className="hover:text-[#17233b]">Rreth nesh</Link>
          <Link href="#courses" className="hover:text-[#17233b]">Kurset</Link>
          <Link href="#method" className="hover:text-[#17233b]">Metoda</Link>
          <Link href="#pricing" className="hover:text-[#17233b]">Çmimet</Link>
          <Link
            href="#contact"
            className="ml-2 rounded-full bg-[#bd3d49] px-4 py-2.5 text-white transition-colors hover:bg-[#a8323e]"
          >
            Mësimi falas
          </Link>
        </nav>
        <Link
          href="#contact"
          className="rounded-full bg-[#bd3d49] px-4 py-2.5 text-xs font-semibold text-white transition-colors hover:bg-[#a8323e] lg:hidden"
        >
          Mësimi falas
        </Link>
      </div>
    </header>
  );
}
