import type { FC } from "react";
import { EXPERIENCE } from "../data";

export const ExperienceSection: FC = () => (
  <section className="py-32 px-6 bg-surface-dark/30" id="experience">
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-20">
        <h3 className="text-primary font-bold uppercase tracking-widest text-sm mb-4">
          Percurso
        </h3>
        <h2 className="text-4xl md:text-5xl font-black">Experiência</h2>
      </div>
      <div className="relative">
        <div className="absolute left-0 md:left-1/2 -translate-x-1/2 top-0 h-full w-0.5 bg-gradient-to-b from-primary via-primary/20 to-transparent" />
        {EXPERIENCE.map((item, index) => (
          <div
            key={item.title + item.company}
            className="relative grid md:grid-cols-2 gap-10 mb-20 group"
          >
            <div className={item.alignRight ? "md:text-right" : "md:order-2"}>
              <div className="text-primary font-bold mb-2">{item.period}</div>
              <h4 className="text-2xl font-black mb-1">{item.title}</h4>
              <p className="text-slate-400 font-medium">{item.company}</p>
            </div>
            <div
              className={`hidden md:block absolute left-1/2 -translate-x-1/2 top-1 size-4 rounded-full ${
                index === 0
                  ? "bg-primary shadow-[0_0_15px_rgba(140,37,244,1)]"
                  : "bg-primary/40 group-hover:bg-primary transition-colors"
              }`}
            />
            <div
              className={
                item.alignRight ? "" : "md:text-right md:order-1"
              }
            >
              <p className="text-slate-400 leading-relaxed glass p-6 rounded-2xl">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);
