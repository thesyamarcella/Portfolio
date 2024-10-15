"use client"
import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export const AboutMe = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const [showSkills, setShowSkills] = useState(false);

  useEffect(() => {
    const isDarkMode = document.body.classList.contains('dark');

    const titleColor = isDarkMode ? "#E5E7EB" : "#1E293B"; 
    const descriptionColor = isDarkMode ? "#E5E7EB" : "#1E293B"; 

    
    if (imageRef.current) {
      gsap.fromTo(
        imageRef.current,
        {
          width: "200px", 
          height: "200px",
          borderRadius: "50%",
          filter: "grayscale(0%)",
        },
        {
          width: "128px",
          height: "128px",
          filter: "grayscale(100%)", 
          scrollTrigger: {
            trigger: imageRef.current,
            start: "top top",
            end: "center top",
            scrub: true,
          },
          ease: "none",
        }
      );
    }


    if (titleRef.current) {
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: -50, color: "#ccc" }, 
        {
          opacity: 1, 
          y: 0, 
          color: "#4f46e5", 
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

    // Typewriter effect
    if (descriptionRef.current) {
      const text = descriptionRef.current.innerText;
      const chars = text.split(""); 
      descriptionRef.current.innerHTML = chars
        .map((char) => `<span class="char">${char}</span>`)
        .join("");

      
      gsap.fromTo(
        descriptionRef.current.querySelectorAll(".char"),
        { color: descriptionColor, opacity: 0 }, 
        {
          opacity: 1,
          color: descriptionColor,
          stagger: 0.05, 
          ease: "none",
          duration: 1,
        }
      );

      // Fade-out on scroll
      gsap.to(descriptionRef.current, {
        scrollTrigger: {
          trigger: descriptionRef.current,
          start: "top 40%",
          end: "top 0%",
          scrub: true,
          onEnterBack: () => setShowSkills(false), 
        },
        opacity: 0, 
        ease: "none",
      });
    }

  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-20 bg-gradient-to-b from-slate-200 to-white dark:from-slate-900 dark:to-">
      <div className="flex flex-col items-center space-y-6 w-full">
        <Image 
          ref={imageRef}
          src="/profile.png"
          alt="Thesya Marcella"
          width={200} 
          height={200}
          className="rounded-full transition-filter duration-300 hidden sm:block"
        />
        <h1
          ref={titleRef}
          className="text-3xl font-bold mb-8 text-center glow" 
        >
          Hi, I'm Thesya! 
        </h1>
        <p
          ref={descriptionRef}
          className="mt-6 text-md leading-relaxed max-w-2xl text-gray-500 dark:text-gray-200 text-center"
        >
          👋 I'm A passionate software engineer with a love for crafting intuitive user experiences.    
          As a recent Information Technology graduate from Business and Informatics Institute Kesatuan, 
          I've been honing my skills in web development for the past two years, specializing in JavaScript. 
          When I'm not coding, you can find me experimenting with design or machine learning. Let's build 
          something awesome together.
        </p>
        
      </div>
    </div>
  );
};
