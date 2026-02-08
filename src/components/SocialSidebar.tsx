import type { FC } from "react";
import { SOCIAL_LINKS } from "../data";

export const SocialSidebar: FC = () => (
  <div className="fixed left-6 bottom-0 hidden xl:flex flex-col items-center gap-6 z-50">
    <div className="flex flex-col gap-6 mb-8">
      {SOCIAL_LINKS.map(({ href, icon, label }) => (
        <a
          key={icon}
          href={href}
          className="text-slate-400 hover:text-primary transition-colors"
          aria-label={label}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="material-symbols-outlined">{icon}</span>
        </a>
      ))}
    </div>
    <div className="w-px h-32 bg-primary/30" />
  </div>
);
