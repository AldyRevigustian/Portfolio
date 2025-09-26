"use client";

import { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu, X, Home, User, FolderOpen, Mail } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  const navItems = useMemo(
    () => [
      { id: "hero", label: "Home", icon: Home },
      { id: "about", label: "About", icon: User },
      { id: "projects", label: "Projects", icon: FolderOpen },
      { id: "contact", label: "Contact", icon: Mail },
    ],
    [],
  );

  useEffect(() => {
    let timeoutId: number | null = null;
    
    const handleScroll = () => {
      if (timeoutId) {
        cancelAnimationFrame(timeoutId);
      }
      
      timeoutId = requestAnimationFrame(() => {
        const sections = navItems.map(item => item.id);
        const scrollPosition = window.scrollY + 100;

        for (const section of sections) {
          const element = document.getElementById(section);
          if (element) {
            const offsetTop = element.offsetTop;
            const offsetBottom = offsetTop + element.offsetHeight;

            if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
              setActiveSection(section);
              break;
            }
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (timeoutId) {
        cancelAnimationFrame(timeoutId);
      }
    };
  }, [navItems]);

  const shouldReduceMotion = useReducedMotion();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <>
      <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 hidden md:block">
        <div className="bg-card/80 backdrop-blur-lg border border-border/50 rounded-full px-4 py-2 md:px-6 md:py-3 shadow-lg">
          <div className="flex items-center gap-4 md:gap-8">
            <img
              src="/assets/logo.png"
              alt="Logo"
              className="h-8 w-8 object-contain"
              width="32"
              height="32"
              loading="eager"
              fetchPriority="high"
              decoding="async"
            />
            <div className="flex items-center gap-2 md:gap-6">
              {navItems.map((item) => {
                const IconComponent = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`relative flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                      activeSection === item.id
                        ? "text-primary bg-primary/10"
                        : "text-muted-foreground hover:text-primary"
                    }`}
                  >
                    <IconComponent className="h-4 w-4" />
                    {item.label}
                    {activeSection === item.id && (
                      <motion.div
                        layoutId="activeIndicator"
                        className="absolute inset-0 bg-primary/10 rounded-full -z-10"
                        initial={false}
                        transition={shouldReduceMotion ? { duration: 0 } : { type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </nav>

      <div className="fixed top-4 right-4 z-50 md:hidden">
        <Button
          variant="outline"
          size="icon"
          onClick={() => setIsOpen(!isOpen)}
          className="btn-ghost"
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="fixed inset-0 z-40 md:hidden"
          >
            <div className="absolute inset-0 bg-background/80 backdrop-blur-lg" />
            <div className="relative flex flex-col items-center justify-center h-full">
              <div className="text-center mb-8 px-4">
                <h2 className="text-xl sm:text-2xl font-bold text-gradient mb-2">Aldy Revigustian</h2>
                <p className="text-sm sm:text-base text-muted-foreground">Portfolio Navigation</p>
              </div>
              
              <nav className="flex flex-col gap-4">
                {navItems.map((item) => {
                  const IconComponent = item.icon;
                  return (
                    <motion.button
                        key={item.id}
                        initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={shouldReduceMotion ? { duration: 0 } : { delay: 0.1 }}
                      onClick={() => scrollToSection(item.id)}
                      className={`flex items-center gap-4 px-6 py-3 sm:px-8 sm:py-4 rounded-xl text-base sm:text-lg font-medium transition-all duration-300 ${
                        activeSection === item.id
                          ? "text-primary bg-primary/10"
                          : "text-muted-foreground hover:text-primary hover:bg-card/50"
                      }`}
                    >
                      <IconComponent className="h-6 w-6" />
                      {item.label}
                    </motion.button>
                  );
                })}
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;
