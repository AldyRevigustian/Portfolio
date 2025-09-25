"use client";

import { useRef, useState } from "react";
import { motion, useReducedMotion, AnimatePresence } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink, Brain, BarChart3, Smartphone, Globe } from "lucide-react";
import { cn } from "@/lib/utils";
import { projects as PROJECTS } from "@/constants";

const Projects = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const projects = PROJECTS.length ? PROJECTS : [];

  return (
    <section
      id="projects"
      className="py-16 sm:py-20 relative overflow-hidden"
      ref={sectionRef}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-gradient leading-tight pb-1">
            Featured Projects
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my work spanning data science, machine learning, and
            software development
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project, index) => {
            const IconMap = { Brain, BarChart3, Smartphone, Globe } as const;
            const IconComponent = IconMap[project.icon as keyof typeof IconMap] || Globe;
            return (
              <motion.div
                key={`${project.title}-${index}`}
                className="relative"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                initial={
                  shouldReduceMotion
                    ? { opacity: 1, y: 0 }
                    : { opacity: 0, y: 40 }
                }
                whileInView={
                  shouldReduceMotion
                    ? { opacity: 1, y: 0 }
                    : { opacity: 1, y: 0 }
                }
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5 }}
              >
                <Card className="project-card card-elegant overflow-hidden group h-full flex flex-col justify-between transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-1">
                  <div
                    className={`absolute top-0 left-0 h-1 w-full bg-gradient-to-r ${project.gradient} opacity-50 group-hover:opacity-100 transition-opacity duration-300`}
                  />
                  <div className="p-6 flex flex-col h-full pt-8">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1 pr-3 md:pr-10">
                        <h3 className="text-lg font-semibold leading-snug min-h-[3.5rem] break-words hyphens-auto line-clamp-3">
                          {project.title}
                        </h3>
                      </div>
                      <div className="flex-shrink-0 p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                        <IconComponent className="h-5 w-5 text-primary" />
                      </div>
                    </div>
                    <p className="text-muted-foreground text-sm mb-3">
                      {project.short_description}
                    </p>
                    <div className="flex-grow">
                      <AnimatePresence>
                        {hoveredIndex === index && (
                          <motion.p
                            className="text-white text-sm mb-4"
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            {project.long_description}
                          </motion.p>
                        )}
                      </AnimatePresence>
                    </div>
                    <div className="mt-auto">
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.map((tech, idx) => (
                          <Badge
                            key={idx}
                            variant="secondary"
                            className={cn(
                              "text-xs transition-colors",
                              "bg-primary/10 text-primary border-muted/20"
                            )}
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                      <Button
                        size="sm"
                        className="w-full btn-ghost group"
                        onClick={() =>
                          window.open(
                            project.link,
                            "_blank",
                            "noopener,noreferrer"
                          )
                        }
                      >
                        <Github className="mr-2 h-4 w-4 group-hover:rotate-12 transition-transform" />
                        View on GitHub
                      </Button>
                    </div>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
