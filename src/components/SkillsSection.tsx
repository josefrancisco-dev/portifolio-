import type { FC } from "react";
import { SKILLS } from "../data";

export const SkillsSection: FC = () => (
  <section className="py-32 px-6 bg-surface-dark/30" id="skills">
    <div className="max-w-7xl mx-auto text-center mb-20">
      <h3 className="text-primary font-bold uppercase tracking-widest text-sm mb-4">
        Stack
      </h3>
      <h2 className="text-4xl md:text-5xl font-black leading-tight">
        Technical Proficiency
      </h2>
    </div>
    <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
      {SKILLS.map((skill) => (
        <div
          key={skill.name}
          className={`skill-card glass p-8 rounded-2xl flex flex-col items-center justify-center gap-4 ${
            skill.featured
              ? "border-primary/20 shadow-lg shadow-primary/5"
              : ""
          }`}
        >
          <span className="material-symbols-outlined text-4xl text-primary">
            {skill.icon}
          </span>
          <span className="font-bold text-sm">{skill.name}</span>
        </div>
      ))}
    </div>
  </section>
);
