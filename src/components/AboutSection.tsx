import type { FC } from "react";
import { ABOUT_BADGES } from "../data";

export const AboutSection: FC = () => (
  <section className="py-32 px-6" id="about">
    <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
      <div className="relative">
        <div className="aspect-square rounded-2xl overflow-hidden glass p-4 relative group">
          <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity" />
          <img
            alt="José Francisco - Desenvolvedor Front-end"
            className="w-full h-full object-cover rounded-xl object-top"
            src="/foto-jose.png"
          />
          <div className="absolute -bottom-6 -right-6 glass p-6 rounded-2xl hidden md:block">
            <div className="text-3xl font-black text-primary">02+</div>
            <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">
              Anos de
              <br />
              Experiência
            </div>
          </div>
        </div>
      </div>
      <div>
        <h3 className="text-primary font-bold uppercase tracking-widest text-sm mb-4">
          Sobre mim
        </h3>
        <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight">
          José Gomes Francisco — Front-end com paixão por tecnologia.
        </h2>
        <p className="text-slate-400 text-lg leading-relaxed mb-6">
          O meu nome é José Gomes Francisco, resido em Angola e sou
          Front-end Developer há mais de 2 anos. Trabalho frequentemente com
          React (TypeScript) e Next.js. Apaixonado por tecnologias, aprendo
          todos os dias coisas novas na área.
        </p>
        <p className="text-slate-400 text-lg leading-relaxed mb-10">
          Formação em Engenharia Informática (Universidade Lusíada de Angola)
          e Curso Técnico de Informática no ITEL. Experiência em sistemas de
          gestão, dashboards e aplicações web com React.
        </p>
        <div className="grid grid-cols-2 gap-6">
          {ABOUT_BADGES.map((label) => (
            <div key={label} className="flex items-center gap-3">
              <span className="material-symbols-outlined text-primary">
                verified
              </span>
              <span className="font-medium">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);
