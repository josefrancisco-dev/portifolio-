import type { FC, FormEvent } from "react";

/* =======================
   Types & Interfaces
======================= */

interface Skill {
  icon: string;
  name: string;
  featured?: boolean;
}

interface Project {
  title: string;
  category: string;
  description: string;
  image: string;
  imageAlt: string;
  demoUrl: string;
  codeUrl: string;
}

interface ExperienceItem {
  period: string;
  title: string;
  company: string;
  description: string;
  alignRight?: boolean;
}

/* =======================
   Data
======================= */

const SOCIAL_LINKS = [
  { href: "https://github.com", icon: "code", label: "GitHub" },
  { href: "mailto:josyfrancisco99@gmail.com", icon: "alternate_email", label: "Email" },
  { href: "https://linkedin.com", icon: "terminal", label: "LinkedIn" },
] as const;

const SKILLS: Skill[] = [
  { icon: "web", name: "HTML5" },
  { icon: "css", name: "CSS3" },
  { icon: "javascript", name: "JavaScript" },
  { icon: "data_object", name: "TypeScript" },
  { icon: "widgets", name: "React", featured: true },
  { icon: "terminal", name: "Next.js" },
  { icon: "code", name: "Git & Github" },
  { icon: "api", name: "TanStack Query" },
  { icon: "speed", name: "Tailwind" },
];

const PROJECTS: Project[] = [
  {
    title: "Sistema de Gestão da Ordem dos Médicos",
    category: "Sistema de Gestão",
    description:
      "Desenvolvimento Front-end e gestão do sistema da Ordem dos Médicos. Interface responsiva e integração com backend.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCZkd0WXgx8IuLiiYo0C2mbfT2o4g3hKxSLGzc94oniMs91eurR02UADro1uZI_nAocfxidixiEnw9qUdgZgVYExPgaVoDZAnI45FAeXbni-e8lkuGoQuUcy1y4ZjqBrXhD4UxAmQUxT5ZQWih9ewcx_M1IXm8RI5pTWqYfgK9nx9IIPXSjY11agU86EBQHdNA1SDUR7ei4-t3F8l0gD88Vky2PsG7UEBsR22c0Ai-HqkjsvuZWs2qoe1Fort4l0ZExGJkw1bMuSJY",
    imageAlt: "Sistema de Gestão da Ordem dos Médicos",
    demoUrl: "#",
    codeUrl: "#",
  },
  {
    title: "Sistema de Gestão de Banco de Sangue",
    category: "FITITEL 2019",
    description:
      "Projeto exposto na feira FITITEL 2019. Sistema de gestão para banco de sangue desenvolvido com React e tecnologias web.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBmkXA4VAKrj0zrpYpGpU5exxZiXaZN0vqp1sr4Qs2n5vONaETOKQVh5nZU-dwBtbWKzh4x1YyXt2idrHoduuUba8xoMlfMINlphPeuSavOFmVSCA2Ulw4f7f-HoUURD72CAp93YrEvXeUhF0FSZQc0jBFyKQMpn8olVaJ6-zjrInNt1OzIg3cEVOMrxp18Qi7jgWCPDpVmxjYoMOY5gD0Spjy-Y5Tlwht6iqPr9oCZs9Gag_8AygbC8XfxAV_HbpyWzA-HvA9Qy0k",
    imageAlt: "Sistema de Gestão de Banco de Sangue",
    demoUrl: "#",
    codeUrl: "#",
  },
  {
    title: "Dashboard de Finanças",
    category: "React & TypeScript",
    description:
      "Sistema de finanças em grande escala: React, Hooks, Styled Components, Tailwind, Contexto, consumo de API e CRUD.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDIhi787r_Kylvj7vC1SO1BDetvq8sWlFx45eHPgfOpmvMHyzs083TUhRGo9ZI0Wb8WFHIa09L295BF2fl0ebSI347c36sYoWldfKY_H-mg43YBVkoWbOCmzJ-Dreyr8uMdOpV2oTFFHmUGaP4bhZDuqpdt8A_WJcVUwHLN0MJ4uOPw3eBjRRxpmSkd4BAZvawDswEIKxAnbTMuDejq_BlwU2iXL34wElp55NLBoiSFrNz2JGSHyjkAs9B5QXKLPK1Ka6TSgd_xArM",
    imageAlt: "Dashboard de finanças",
    demoUrl: "#",
    codeUrl: "#",
  },
  {
    title: "Projetos ETIC",
    category: "Front-end",
    description:
      "Desenvolvimento Front-end na ETIC Soluções e Tecnologia. Aplicações web com React, TypeScript, Vite e TailwindCSS.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCuu9894_E95oihyNVoNHd1NWYCG21qjZ5I-YhrrPhFWgcsanltfo0g_nY8ZKorOeNLVVA7xOiinKdSaHQPNzALWsCmUYu_Mk-FzWaaNNngTpfRQ4BCniP4AzP0GeeiB4k7Ga0rw_3HG6p8f9DpQeVEIImI7GJTrGla-RJ0Pu3QuZM4uf3GqmBjNJQDgdHQg4u_6lPC0j0hMX1iAN6dFQjgaFeqIeLqzVRBDmSXJme3cnNp19hkxYIcF8aHKEME0C5M5-6SDSWOMyU",
    imageAlt: "Projetos desenvolvidos na ETIC",
    demoUrl: "#",
    codeUrl: "#",
  },
];

const EXPERIENCE: ExperienceItem[] = [
  {
    period: "Presente",
    title: "Desenvolvedor Front-end e Gestor de Sistema",
    company: "Ordem dos Médicos",
    description:
      "Desenvolvimento Front-end e gestão do Sistema de Gestão da Ordem dos Médicos. Responsável pela interface e experiência do utilizador.",
    alignRight: true,
  },
  {
    period: "—",
    title: "Desenvolvedor Front-end",
    company: "ETIC Soluções e Tecnologia",
    description:
      "Desenvolvimento de aplicações web em React e TypeScript. Interface responsiva com TailwindCSS, consumo de API e ferramentas modernas (Vite, TanStack).",
    alignRight: false,
  },
  {
    period: "2019",
    title: "Expositor FITITEL",
    company: "FITITEL 2019",
    description:
      "Expositor na feira FITITEL 2019 com o projeto \"Sistema de Gestão de Banco de Sangue\", desenvolvido com React.",
    alignRight: true,
  },
];

const ABOUT_BADGES = [
  "React & TypeScript",
  "Next.js",
  "Tailwind CSS",
  "Git & Github",
] as const;

/* =======================
   Component
======================= */

const Portfolio: FC = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div className="dark bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 font-display transition-colors duration-300 min-h-screen">
      {/* Social Sidebar */}
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

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <button
            type="button"
            onClick={() => scrollToSection("about")}
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
              onClick={() => scrollToSection("about")}
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Sobre
            </button>
            <button
              type="button"
              onClick={() => scrollToSection("skills")}
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Competências
            </button>
            <button
              type="button"
              onClick={() => scrollToSection("projects")}
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Projetos
            </button>
            <button
              type="button"
              onClick={() => scrollToSection("experience")}
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Experiência
            </button>
            <button
              type="button"
              onClick={() => scrollToSection("contact")}
              className="bg-primary text-white px-6 py-2.5 rounded-lg text-sm font-bold hover:opacity-90 transition-all shadow-lg shadow-primary/20"
            >
              Contactar
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
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
              onClick={() => scrollToSection("projects")}
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
          onClick={() => scrollToSection("about")}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-50"
          aria-label="Scroll down"
        >
          <span className="material-symbols-outlined">expand_more</span>
        </button>
      </section>

      {/* About Section */}
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

      {/* Skills Section */}
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

      {/* Projects Section */}
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

      {/* Experience Timeline */}
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

      {/* Contact Section */}
      <section className="py-32 px-6" id="contact">
        <div className="max-w-4xl mx-auto glass rounded-[3rem] p-10 md:p-20 relative overflow-hidden">
          <div className="absolute -top-20 -right-20 size-64 bg-primary/10 blur-[100px]" />
          <div className="absolute -bottom-20 -left-20 size-64 bg-primary/10 blur-[100px]" />
          <div className="text-center mb-12 relative z-10">
            <h3 className="text-primary font-bold uppercase tracking-widest text-sm mb-4">
              Contacto
            </h3>
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              Vamos construir algo juntos.
            </h2>
            <p className="text-slate-400 max-w-lg mx-auto">
              Tem um projeto em mente ou quer dizer olá? Estou disponível para
              novas oportunidades e ideias.
            </p>
          </div>
          <form className="space-y-6 relative z-10" onSubmit={handleSubmit}>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="contact-name"
                  className="block text-sm font-bold text-slate-400 mb-2 uppercase tracking-widest ml-1"
                >
                  Nome
                </label>
                <input
                  id="contact-name"
                  type="text"
                  placeholder="O seu nome"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all placeholder:text-slate-600"
                />
              </div>
              <div>
                <label
                  htmlFor="contact-email"
                  className="block text-sm font-bold text-slate-400 mb-2 uppercase tracking-widest ml-1"
                >
                  Email
                </label>
                <input
                  id="contact-email"
                  type="email"
                  placeholder="email@exemplo.com"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all placeholder:text-slate-600"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="contact-message"
                className="block text-sm font-bold text-slate-400 mb-2 uppercase tracking-widest ml-1"
              >
                Mensagem
              </label>
              <textarea
                id="contact-message"
                rows={5}
                placeholder="Conte-me sobre o seu projeto..."
                className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all placeholder:text-slate-600"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-primary text-white font-bold py-5 rounded-xl text-lg hover:scale-[1.01] transition-all shadow-xl shadow-primary/20"
            >
              Enviar mensagem
            </button>
          </form>
          <div className="mt-16 flex flex-wrap justify-center gap-10 opacity-60">
            <a
              href="mailto:josyfrancisco99@gmail.com"
              className="flex items-center gap-2 hover:text-primary transition-colors"
            >
              <span className="material-symbols-outlined text-sm">
                alternate_email
              </span>
              josyfrancisco99@gmail.com
            </a>
            <a
              href="tel:+244934688330"
              className="flex items-center gap-2 hover:text-primary transition-colors"
            >
              <span className="material-symbols-outlined text-sm">call</span>
              +244 934 688 330
            </a>
            <a
              href="#"
              className="flex items-center gap-2 hover:text-primary transition-colors"
            >
              <span className="material-symbols-outlined text-sm">
                location_on
              </span>
              Luanda, Cazenga
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/5 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-2 group cursor-pointer opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all">
            <div className="size-8 bg-slate-500 rounded flex items-center justify-center text-white font-black text-sm">
              J
            </div>
            <span className="font-bold tracking-tight text-sm">JOSÉ FRANCISCO</span>
          </div>
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
    </div>
  );
};

export default Portfolio;
