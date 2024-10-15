"use client"
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import projects from "@/data/projects-data"; // Mengimpor data project
import gsap from "gsap";
import { useEffect, useRef } from "react";

export function Projects() {
  const titleRef = useRef<HTMLHeadingElement>(null); 

  useEffect(() => {
    if (titleRef.current) {
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: -50, color: "#ccc" }, 
        {
          opacity: 1, 
          y: 0, 
          color: "#7570DAFF", 
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

  }, []);



  return (
    <div>
        <h2
          ref={titleRef} 
          className="text-3xl font-bold mb-8 text-center glow" 
        >
          Projects
        </h2>
    <Tabs defaultValue="project-0" className="w-full px-24">
      {/* Tabs List */}
      <TabsList
       className="flex space-x-4 px-10"
      >
        {projects.map((project, index) => (
          <TabsTrigger
            key={index}
            value={`project-${index}`}
            className="flex text-center rounded-lg transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg snap-start"
          >
            {project.name}
          </TabsTrigger>
        ))}
      </TabsList>

      {/* Tabs Content */}
      {projects.map((project, index) => (
        <TabsContent key={index} value={`project-${index}`}>
          <Card className="mt-6 transition-all duration-300">
            <CardHeader>
              <CardTitle>{project.name}</CardTitle>
              <CardDescription>
                {project.year} - {project.status}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
              <img
                src={project.image} 
                alt={project.name}
                className="object-cover w-full h-64 rounded-lg"
                onError={(e) => {
                  e.currentTarget.src="/no-image.png"; 
                }}
              />
              </div>
              <p>{project.description}</p>
              <p className="font-semibold">{project.techStack}</p>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button asChild variant="outline" className="border-indigo-300">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project
                </a>
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
      ))}
    </Tabs>
    </div>
  );
}
