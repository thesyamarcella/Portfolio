"use client";

import React from "react";
import experienceData from "@/data/experience-data";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel"; // Ensure this path is correct
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";

export const ExperienceCarousel = () => {
  return (
    <Card>
      <CardHeader>
        <h1 className="text-2xl font-bold">Experience</h1>
        <p className="text-gray-500">Explore my professional journey</p>
      </CardHeader>
      <Carousel className="max-w-full mx-15">
  <CarouselContent>
    {experienceData.map((experience) => (
      <CarouselItem key={experience.id}>
        <Card>
          <CardHeader>
            <CardTitle>{experience.title}</CardTitle>
            <CardDescription>{experience.duration}</CardDescription>
          </CardHeader>
          <CardContent>
            <p>{experience.description}</p>
          </CardContent>
        </Card>
      </CarouselItem>
    ))}
  </CarouselContent>
  <CarouselPrevious />
  <CarouselNext />
</Carousel>

    </Card>
  );
};
