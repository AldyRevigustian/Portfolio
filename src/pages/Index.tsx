import React, { Suspense } from "react";
import Hero from "@/components/Hero";
const About = React.lazy(() => import("@/components/About"));
const Projects = React.lazy(() => import("@/components/Projects"));
const Contact = React.lazy(() => import("@/components/Contact"));
import Navigation from "@/components/Navigation";

const Index = () => {
  return (
    <div className="relative">
      <Navigation />
      <main>
        <div id="hero">
          <Hero />
        </div>
        <Suspense fallback={<div /> }>
          <div id="about">
            <About />
          </div>
        </Suspense>
        <Suspense fallback={<div /> }>
          <div id="projects">
            <Projects />
          </div>
        </Suspense>
        <Suspense fallback={<div /> }>
          <div id="contact">
            <Contact />
          </div>
        </Suspense>
      </main>

      <footer className="bg-card/50 border-t border-border py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground">
            © 2025 Aldy Revigustian
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
