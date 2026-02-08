import type { FC } from "react";

interface NavProps {
  onScrollTo: (id: string) => void;
}

export const Nav: FC<NavProps> = ({ onScrollTo }) => (
  <nav className="fixed top-0 w-full z-50 glass">
    <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
      <button
        type="button"
        onClick={() => onScrollTo("about")}
        className="flex items-center gap-2 group cursor-pointer"
      >
        <div className="size-10 bg-primary rounded-lg flex items-center justify-center text-white font-black text-xl">
          J
        </div>
        <span className="text-xl font-bold tracking-tight">JOSÉ FRANCISCO</span>
      </button>
      <div className="hidden md:flex items-center gap-10">
        <button
          type="button"
          onClick={() => onScrollTo("about")}
          className="text-sm font-medium hover:text-primary transition-colors"
        >
          Sobre
        </button>
        <button
          type="button"
          onClick={() => onScrollTo("skills")}
          className="text-sm font-medium hover:text-primary transition-colors"
        >
          Competências
        </button>
        <button
          type="button"
          onClick={() => onScrollTo("projects")}
          className="text-sm font-medium hover:text-primary transition-colors"
        >
          Projetos
        </button>
        <button
          type="button"
          onClick={() => onScrollTo("experience")}
          className="text-sm font-medium hover:text-primary transition-colors"
        >
          Experiência
        </button>
        <button
          type="button"
          onClick={() => onScrollTo("contact")}
          className="bg-primary text-white px-6 py-2.5 rounded-lg text-sm font-bold hover:opacity-90 transition-all shadow-lg shadow-primary/20"
        >
          Contactar
        </button>
      </div>
    </div>
  </nav>
);
