import type { Skill, Project, ExperienceItem, SocialLink } from "../types";

export const SOCIAL_LINKS: readonly SocialLink[] = [
  { href: "https://github.com", icon: "code", label: "GitHub" },
  { href: "mailto:josyfrancisco99@gmail.com", icon: "alternate_email", label: "Email" },
  { href: "https://linkedin.com", icon: "terminal", label: "LinkedIn" },
];

export const SKILLS: Skill[] = [
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

export const PROJECTS: Project[] = [
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

export const EXPERIENCE: ExperienceItem[] = [
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

export const ABOUT_BADGES = [
  "React & TypeScript",
  "Next.js",
  "Tailwind CSS",
  "Git & Github",
] as const;
