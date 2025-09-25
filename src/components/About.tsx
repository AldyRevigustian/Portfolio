"use client";

import { memo, useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { MapPin, GraduationCap, Code, Zap } from "lucide-react";
import TechIcons from "./icons/TechIcons";

import { Timeline } from "./Timeline";
import { experiences } from "@/constants";

const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="about" className="py-16 sm:py-20 relative" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <div className="relative z-10">
          <motion.div
            className="text-center mb-12 sm:mb-16"
            initial={
              shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
            }
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gradient">
              About Me
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
              Passionate about bridging data science and software development
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-10 items-start">
            <motion.div
              initial={
                shouldReduceMotion
                  ? { opacity: 1, x: 0 }
                  : { opacity: 0, x: -20 }
              }
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-8 h-full flex flex-col"
            >
              <div className="card-elegant p-10 sm:p-8 flex-shrink-0">
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-8">
                  <div className="relative group flex-shrink-0">
                    <div className="absolute -inset-1 bg-gradient-to-r from-primary to-primary-glow rounded-full blur opacity-75 group-hover:opacity-100 transition duration-800 animate-pulse"></div>
                    <img
                      src="/assets/profile.png"
                      alt="Profile"
                      className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full object-cover"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>

                  <div className="flex-1 text-center sm:text-left space-y-2">
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">
                        Aldy Revigustian
                      </h3>
                      <p className="text-sm sm:text-base text-muted-foreground">
                        Data Analyst & Software Engineer
                      </p>
                    </div>

                    <div className="grid gap-3 pt-2">
                      <div className="flex items-center justify-start gap-3 text-sm flex-wrap">
                        <div className="p-2 bg-primary/10 rounded-lg flex-shrink-0">
                          <MapPin className="w-4 h-4 text-primary" />
                        </div>
                        <div>
                          <div className="text-xs text-muted-foreground text-start">
                            Location
                          </div>
                          <div className="font-medium">Jakarta, Indonesia</div>
                        </div>
                      </div>

                      <div className="flex items-center justify-start gap-3 text-sm flex-wrap">
                        <div className="p-2 bg-primary/10 rounded-lg flex-shrink-0">
                          <GraduationCap className="w-4 h-4 text-primary" />
                        </div>
                        <div>
                          <div className="text-xs text-muted-foreground text-start">
                            Education
                          </div>
                          <div className="font-medium">
                            Binus University, Computer Science
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <motion.div
                initial={
                  shouldReduceMotion
                    ? { opacity: 1, y: 0 }
                    : { opacity: 0, y: 20 }
                }
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="card-elegant p-6 sm:p-8 space-y-4 flex-1 flex flex-col"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Code className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold">
                    My Journey
                  </h3>
                </div>

                <div className="space-y-4 text-muted-foreground flex-1">
                  <p className="leading-relaxed text-justify text-sm sm:text-base">
                    I'm a passionate technologist who bridges the gap between
                    data science/analyst and software development. With
                    expertise spanning from machine learning algorithms to
                    full-stack applications, I create intelligent solutions that
                    turn complex data into actionable insights.
                  </p>
                  <p className="leading-relaxed text-justify text-sm sm:text-base">
                    Currently pursuing my degree while working on cutting-edge
                    projects that combine AI/ML with modern software
                    architecture. I believe in the power of technology to solve
                    real-world problems and create meaningful impact.
                  </p>
                  <p className="leading-relaxed text-justify text-sm sm:text-base">
                    I thrive in collaborative environments where ideas transform
                    into impactful solutions. Continuously exploring new tools
                    and methodologies, I’m driven by curiosity and a commitment
                    to lifelong learning-always seeking opportunities to
                    innovate at the intersection of data, AI, and software
                    engineering.
                  </p>
                </div>

                <div className="flex items-center gap-2 pt-4 border-t border-border/50">
                  <Zap className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium text-primary">
                    Always learning, always building
                  </span>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              initial={
                shouldReduceMotion
                  ? { opacity: 1, x: 0 }
                  : { opacity: 0, x: 20 }
              }
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-8 h-full flex flex-col"
            >
              <div className="card-elegant bg-black w-full h-full p-6 sm:p-8 flex flex-col">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Code className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold text-left">
                    Tech Stack
                  </h3>
                </div>

                <div className="flex-1 flex items-center justify-center">
                  <TechIcons />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        <Timeline data={experiences} />
      </div>
    </section>
  );
};

export default memo(About);
About.displayName = "About";
