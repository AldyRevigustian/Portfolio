"use client";

import { memo, useEffect, useMemo, useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronDown, FileText, Github, Linkedin, Mail } from "lucide-react";
import { containerVariants, itemVariants } from "@/lib/motion";

const Hero = () => {
  const textRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (shouldReduceMotion) return;
    if (textRef.current) {
      const chars = textRef.current.querySelectorAll(".char");
      chars.forEach((el, i) => {
        (
          el as HTMLElement
        ).style.transition = `transform 0.9s cubic-bezier(.2,.9,.3,1) ${
          0.6 + i * 0.06
        }s, opacity 0.9s ${0.6 + i * 0.06}s`;
        (el as HTMLElement).style.transform = "translateY(0) rotateX(0)";
        (el as HTMLElement).style.opacity = "1";
      });
    }
  }, [shouldReduceMotion]);

  const splitText = (text: string) => {
    return text.split("").map((char, index) => (
      <span key={index} className="char inline-block">
        {char === " " ? "\u00A0" : char}
      </span>
    ));
  };

  const nameNodes = useMemo(() => splitText("Aldy Revigustian"), []);

  const scrollToNext = () => {
    const nextSection = document.getElementById("about");
    nextSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center lg:justify-between overflow-hidden">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-glow/10 rounded-full blur-3xl animate-float" />
        <div
          className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-primary-glow/10 rounded-full blur-2xl animate-float"
          style={{ animationDelay: "2s" }}
        />
      </div>

      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center justify-center lg:justify-between relative z-10">
        <motion.div
          className="flex-1 max-w-2xl text-center lg:text-left"
          initial={shouldReduceMotion ? "visible" : "hidden"}
          animate="visible"
          variants={containerVariants}
        >
          <div className="mb-6">
            <h1
              className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4 text-glow"
              ref={textRef}
              aria-label="Aldy Revigustian"
            >
              {nameNodes}
            </h1>
            <motion.div
              variants={itemVariants}
              className="will-change-transform"
            >
              <h2 className="text-lg sm:text-xl md:text-2xl text-gradient font-semibold mb-6">
                Data Analyst & Software Engineer
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground mb-8 leading-relaxed">
                Passionate about transforming data into insights and building
                intelligent solutions that bridge the gap between complex
                algorithms and user-friendly applications.
              </p>
            </motion.div>
          </div>

          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-4 mb-8 justify-center lg:justify-start"
          >
            <Button className="btn-hero group" asChild={true}>
              <a
                href="mailto:aldyrevig@gmail.com"
                className="flex items-center"
                aria-label="Email Aldy Revigustian"
                title="Email Aldy Revigustian"
              >
                <Mail className="mr-0 h-5 w-5 group-hover:rotate-12 transition-transform" />
                Get In Touch
              </a>
            </Button>
            <Button
              variant="outline"
              className="w-auto btn-ghost group"
              asChild={true}
            >
              <a
                href="/assets/CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center px-4 py-2 bg-primary/10 text-primary border-muted/20 rounded-lg transition-colors hover:bg-primary/20"
                aria-label="View CV in a new tab"
                title="View CV"
              >
                <FileText className="mr-0 h-5 w-5 text-primary group-hover:rotate-12 transition-transform" />
                View CV
              </a>
            </Button>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex gap-6 justify-center lg:justify-start"
          >
            <a
              href="https://github.com/AldyRevigustian"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110"
              aria-label="GitHub profile"
              title="GitHub"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/AldyRevigustian/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110"
              aria-label="LinkedIn profile"
              title="LinkedIn"
            >
              <Linkedin className="h-6 w-6" />
            </a>
          </motion.div>
        </motion.div>

        <div className="flex-1 h-[400px] sm:h-[500px] lg:h-[600px] w-full relative mt-8 lg:mt-0 hidden sm:block">
          <div className="absolute inset-0 2xl overflow-hidden">
            {/* <Spline 
              scene="https://my.spline.design/genkubgreetingrobot-pQHtkuS06GKw8a4t36s5BCIY/"
              className="w-full h-full rounded-2xl"
            /> */}
            <div className="w-full h-full transform lg:translate-x-22 xl:translate-x-40 2xl:translate-x-50">
              <iframe
                src="https://my.spline.design/genkubgreetingrobot-pQHtkuS06GKw8a4t36s5BCIY/"
                width="100%"
                height="100%"
                style={{ transform: "translateX(0)" }}
                title="Spline Scene"
                loading="lazy"
                sandbox="allow-scripts allow-same-origin"
                referrerPolicy="no-referrer"
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      <motion.div
        initial={shouldReduceMotion ? undefined : { opacity: 0, y: 10 }}
        animate={
          shouldReduceMotion
            ? undefined
            : { opacity: 1, y: 0, transition: { delay: 0.6 } }
        }
        className="absolute bottom-8 w-full flex justify-center cursor-pointer"
        onClick={scrollToNext}
        whileHover={shouldReduceMotion ? undefined : { y: -4 }}
      >
        <div className="flex flex-col items-center text-muted-foreground hover:text-primary transition-colors">
          <span className="text-sm mb-2 font-medium">Scroll to explore</span>
          <ChevronDown className="h-6 w-6 animate-bounce" />
        </div>
      </motion.div>
    </section>
  );
};

export default memo(Hero);
Hero.displayName = "Hero";
