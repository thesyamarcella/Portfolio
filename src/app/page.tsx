// src/app/page.tsx
import { Skills } from '@/components/skills';
import { Projects } from '@/components/projects';
import { Contacts } from '@/components/contacts';
import { AboutMe } from '@/components/about-me';

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section id="about">
        <AboutMe />
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-12">
        <Skills />
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-12">
        <Projects />
      </section>

      {/* Contact Me Section */}
      <section id="contact" className="py-12">
        <Contacts />
      </section>
    </>
  );
}
