import { HeroSection } from "@/src/components/home/HeroSection";
import { ContentSections } from "@/src/components/home/ContentSections";
import { SiteHeader } from "@/src/components/home/SiteHeader";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main id="top">
        <HeroSection />
        <ContentSections />
      </main>
      <footer className="bg-[#17233b] text-white">
        <div className="mx-auto flex max-w-[1200px] flex-col gap-8 px-5 py-12 sm:px-8 lg:flex-row lg:items-end lg:justify-between lg:px-10">
          <div>
            <div className="text-lg font-semibold tracking-[-0.03em]">Frengjisht Online</div>
            <div className="mt-1 text-sm text-[#c5d2df]">Prof. Natalia Manaj · Tiranë, Shqipëri</div>
            <div className="mt-5 space-y-1 text-sm text-[#c5d2df]">
              <a href="tel:+355699877544" className="block hover:text-white">+355 69 987 7544</a>
              <a href="mailto:dritanmane@gmail.com" className="block hover:text-white">dritanmane@gmail.com</a>
            </div>
          </div>
          <nav aria-label="Navigimi në fund të faqes" className="flex flex-wrap gap-x-5 gap-y-3 text-sm text-[#c5d2df]">
            <a href="#about" className="hover:text-white">Rreth nesh</a>
            <a href="#courses" className="hover:text-white">Kurset</a>
            <a href="#method" className="hover:text-white">Metoda</a>
            <a href="#pricing" className="hover:text-white">Çmimet</a>
            <a href="#contact" className="hover:text-white">Kontakt</a>
          </nav>
        </div>
      </footer>
      <a
        href="https://wa.me/355699877544"
        target="_blank"
        rel="noreferrer"
        aria-label="Kontakto në WhatsApp"
        className="fixed bottom-5 right-5 z-20 flex h-12 w-12 items-center justify-center rounded-full bg-[#2c8b69] text-sm font-bold text-white shadow-[0_8px_24px_rgba(44,139,105,0.3)] transition-transform hover:scale-105"
      >
        WA
      </a>
    </>
  );
}
