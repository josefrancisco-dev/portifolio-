import type { FC } from "react";

interface HeroSectionProps {
  onScrollTo: (id: string) => void;
}

export const HeroSection: FC<HeroSectionProps> = ({ onScrollTo }) => (
  <section className="relative min-h-screen flex items-center justify-center px-6 pt-20 overflow-hidden">
    <div className="absolute inset-0 hero-gradient" />
    <div className="max-w-5xl mx-auto text-center relative z-10">
      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-primary mb-8">
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
          <span className="relative inline-flex rounded-full h-3 w-3 bg-primary" />
        </span>
        <span className="text-xs font-semibold tracking-wider uppercase">
          Disponível para novos projetos
        </span>
      </div>
      <h1 className="text-6xl md:text-8xl font-black mb-6 leading-[1.1] tracking-tight">
        <span className="text-primary italic">José</span> Francisco
        <br /> Desenvolvedor de Software.
      </h1>
      <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-12 leading-relaxed">
        Front-end Developer há mais de 2 anos. Trabalho com React (TypeScript), Next.js e aprendo todos os dias coisas novas na área da tecnologia. Resident em Angola.
      </p>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <button
          type="button"
          onClick={() => onScrollTo("projects")}
          className="w-full sm:w-auto px-8 py-4 bg-primary text-white font-bold rounded-xl hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 group"
        >
          Ver os meus projetos
          <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">
            arrow_forward
          </span>
        </button>
        <a
          href="/cv.pdf"
          download="CV-Jose-Francisco.pdf"
          className="w-full sm:w-auto px-8 py-4 glass text-white font-bold rounded-xl hover:bg-white/5 transition-all inline-flex items-center justify-center"
        >
          Descarregar CV
        </a>
      </div>
    </div>
    <button
      type="button"
      onClick={() => onScrollTo("about")}
      className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-50"
      aria-label="Scroll down"
    >
      <span className="material-symbols-outlined">expand_more</span>
    </button>
  </section>
);
