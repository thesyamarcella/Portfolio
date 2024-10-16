"use client"; 
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import skillsData from "@/data/skills-data";

gsap.registerPlugin(ScrollTrigger);

export const Skills = () => {
  const skillRefs = useRef<(HTMLDivElement | null)[]>([]);
  const titleRef = useRef<HTMLHeadingElement>(null); 

  useEffect(() => {
    if (titleRef.current) {
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: -50, color: "#ccc" }, 
        {
          opacity: 1, 
          y: 0, 
          color: "#4E46E5FF", 
          duration: 1,
          ease: "bounce.out", 
          scrollTrigger: {
            trigger: titleRef.current, 
            start: "top 80%", 
            end: "top 20%", 
            toggleActions: "play reverse play reverse", 
          },
        }
      );
    }

    // Staggered animation for skills cards
    gsap.fromTo(
      skillRefs.current.filter(Boolean), 
      { opacity: 0, y: 50 }, 
      {
        opacity: 1,
        y: 0, 
        duration: 0.5,
        ease: "back.out(1.7)", 
        stagger: 0.15, 
        scrollTrigger: {
          trigger: skillRefs.current[0], 
          start: "top 80%", 
          end: "top 20%", 
          toggleActions: "play none none reverse", 
        },
      }
    );
  }, []);

  return (
    <section id="skills" className="py-16">
      <div className="container mx-auto">
        <h2
          ref={titleRef}
          className="text-3xl font-bold mb-8 text-center glow"
        >
          Skills
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {skillsData.map((skill, index) => (
            <div
              key={skill.id}
              ref={(el) => { skillRefs.current[index] = el; }} 
              className="relative p-6 rounded-xl shadow-lg transition-all duration-300 ease-in-out card-shadow hover:scale-105 hover:shadow-2xl hover:border-transparent hover:bg-indigo-100 hover:text-indigo-900"
            >
              <div>
                <h3 className="font-semibold text-lg">{skill.name}</h3>
                <p>{skill.description}</p>
              </div>
              <div className="flex flex-wrap mt-4 space-x-2 text-gray-500 items-center justify-start">
              {skill.techStack.map((tech, i) => (
                <div key={i} className="flex items-center mb-2">
                  {"icon" in tech ? (
                    <FontAwesomeIcon icon={tech.icon} className="mr-2 text-xl" />
                  ) : (
                    <span>{tech.name}</span>
                  )}
                </div>
              ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};