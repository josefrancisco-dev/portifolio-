import type { FC } from "react";

interface FooterProps {
  onScrollTo: (id: string) => void;
}

export const Footer: FC<FooterProps> = ({ onScrollTo }) => (
  <footer className="py-12 border-t border-white/5 px-6">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
      <button
        type="button"
        onClick={() => onScrollTo("about")}
        className="flex items-center gap-2 group cursor-pointer opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all"
      >
        <div className="size-8 bg-slate-500 rounded flex items-center justify-center text-white font-black text-sm">
          J
        </div>
        <span className="font-bold tracking-tight text-sm">JOSÉ FRANCISCO</span>
      </button>
      <p className="text-slate-500 text-sm">
        © {new Date().getFullYear()} José Francisco.
      </p>
      <div className="flex gap-6">
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-slate-500 hover:text-primary transition-colors"
        >
          GitHub
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-slate-500 hover:text-primary transition-colors"
        >
          LinkedIn
        </a>
      </div>
    </div>
  </footer>
);
