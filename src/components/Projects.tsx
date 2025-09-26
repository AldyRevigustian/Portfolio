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
            A showcase of my work spanning data analysis, machine learning, and
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
                className="relative group"
                onHoverStart={() => setHoveredIndex(index)}
                onHoverEnd={() => setHoveredIndex(null)}
                initial={
                  shouldReduceMotion
                    ? { opacity: 1, y: 0 }
                    : { opacity: 0, y: 30 }
                }
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 1, delay: index * 0.1 }}
              >
                <div className="card-elegant rounded-xl p-6 h-full transition-all duration-300 hover:border-primary/50 relative overflow-hidden">
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ 
                      scale: hoveredIndex === index ? 1 : 0,
                      opacity: hoveredIndex === index ? 0.1 : 0 
                    }}
                    transition={{ duration: 0.3 }}
                    className={`absolute inset-0 bg-gradient-to-r ${project.gradient} rounded-xl`}
                  />
                  <div
                    className={`absolute top-0 left-0 h-1 w-full bg-gradient-to-r ${project.gradient} opacity-50 group-hover:opacity-100 transition-opacity duration-300`}
                  />
                  <div className="relative z-10 flex flex-col h-full">
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
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ 
                        opacity: hoveredIndex === index ? 1 : 0,
                        height: hoveredIndex === index ? 'auto' : 0 
                      }}
                      transition={{ duration: 0.5 }}
                      className="overflow-hidden flex-grow"
                    >
                      <p className="text-sm text-white mb-4">
                        {project.long_description}
                      </p>
                    </motion.div>
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
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() =>
                          window.open(
                            project.link,
                            "_blank",
                            "noopener,noreferrer"
                          )
                        }
                        className="w-full px-4 py-2 bg-primary/10 text-primary border border-primary/20 rounded-lg transition-all duration-300 hover:bg-primary/20 hover:border-primary/40 flex items-center justify-center gap-2"
                      >
                        <Github className="h-4 w-4 transition-transform group-hover:rotate-12" />
                        <span className="text-sm font-mono">VIEW CODE</span>
                      </motion.button>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
