// src/app/page.tsx
import { Hero } from '@/components/hero';
import { Skills } from '@/components/skills';
import { Projects } from '@/components/projects';
import { ContactForm } from '@/components/contact-form';
import { AboutMe } from '@/components/about-me';

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <AboutMe/>

      {/* Skills Section */}
      <section id="skills" className="py-16">
        <Skills />
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16">
        <Projects />
      </section>

      {/* Contact Me Section */}
      <section id="contact" className="py-16">
        <ContactForm />
      </section>
    </>
  );
}
