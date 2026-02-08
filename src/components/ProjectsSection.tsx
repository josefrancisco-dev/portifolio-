import type { FC } from "react";
import { PROJECTS } from "../data";

export const ProjectsSection: FC = () => (
  <section className="py-32 px-6" id="projects">
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div>
          <h3 className="text-primary font-bold uppercase tracking-widest text-sm mb-4">
            Portfolio
          </h3>
          <h2 className="text-4xl md:text-5xl font-black">
            Projetos em destaque
          </h2>
        </div>
        <div className="flex gap-4">
          <button
            type="button"
            className="px-6 py-2 rounded-full glass hover:bg-white/10 transition-all font-medium text-sm"
          >
            Todos
          </button>
          <button
            type="button"
            className="px-6 py-2 rounded-full bg-primary/20 border border-primary/40 transition-all font-medium text-sm"
          >
            Sistemas
          </button>
          <button
            type="button"
            className="px-6 py-2 rounded-full glass hover:bg-white/10 transition-all font-medium text-sm"
          >
            Web
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {PROJECTS.map((project) => (
          <div
            key={project.title}
            className="group relative aspect-[16/10] overflow-hidden rounded-3xl glass transition-all duration-500"
          >
            <img
              alt={project.imageAlt}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              src={project.image}
            />
            <div className="absolute inset-0 bg-background-dark/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-center items-center p-12 text-center">
              <span className="text-primary font-bold uppercase tracking-widest text-xs mb-2">
                {project.category}
              </span>
              <h4 className="text-3xl font-black mb-4">{project.title}</h4>
              <p className="text-slate-400 mb-8 max-w-sm">
                {project.description}
              </p>
              <div className="flex gap-4">
                <a
                  href={project.demoUrl}
                  className="px-6 py-2 bg-primary rounded-lg font-bold text-sm flex items-center gap-2"
                >
                  <span className="material-symbols-outlined text-sm">
                    visibility
                  </span>{" "}
                  Demo
                </a>
                <a
                  href={project.codeUrl}
                  className="px-6 py-2 glass rounded-lg font-bold text-sm flex items-center gap-2"
                >
                  <span className="material-symbols-outlined text-sm">
                    terminal
                  </span>{" "}
                  Code
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);
