import type { FC } from "react";
import {
  SocialSidebar,
  Nav,
  HeroSection,
  AboutSection,
  SkillsSection,
  ProjectsSection,
  ExperienceSection,
  ContactSection,
  Footer,
} from "./components";

const Portfolio: FC = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="dark bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 font-display transition-colors duration-300 min-h-screen">
      <SocialSidebar />
      <Nav onScrollTo={scrollToSection} />
      <HeroSection onScrollTo={scrollToSection} />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ExperienceSection />
      <ContactSection />
      <Footer onScrollTo={scrollToSection} />
    </div>
  );
};

export default Portfolio;
