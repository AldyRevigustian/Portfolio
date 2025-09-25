"use client";

import { useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Github, MapPin, Phone } from "lucide-react";

const Contact = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      value: "aldyrevig@gmail.com",
      href: "mailto:aldyrevig@gmail.com",
      description: "Send me a message and I'll respond within 24 hours"
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      value: "Connect with me",
      href: "https://www.linkedin.com/in/AldyRevigustian/",
      description: "Let's connect and build our professional network"
    },
    {
      icon: Github,
      title: "GitHub",
      value: "AldyRevigustian",
      href: "https://github.com/AldyRevigustian",
      description: "Check out my code and contribute to projects"
    }
  ];

  return (
    <section id="contact" className="py-16 sm:py-20 relative overflow-hidden" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 sm:mb-16">
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-gradient leading-tight pb-1">
              Let's Work Together
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
              I'm always open to discussing new opportunities, innovative projects, and ways to 
              leverage technology for meaningful impact. Let's connect!
            </p>
          </motion.div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {contactMethods.map((method, index) => {
              const IconComponent = method.icon;
              return (
                <motion.div
                  key={index}
                  initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.7, delay: index * 0.08 }}
                >
                  <Card className="contact-item card-elegant p-6 group hover:scale-105 transition-all duration-300 cursor-pointer h-full">
                  <a 
                    href={method.href}
                    target={method.href.startsWith('http') ? "_blank" : undefined}
                    rel={method.href.startsWith('http') ? "noopener noreferrer" : undefined}
                    className="block h-full"
                  >
                    <div className="text-center flex flex-col h-full">
                      <div className="inline-flex p-3 sm:p-4 bg-primary/10 rounded-xl mb-4 group-hover:bg-primary/20 transition-colors duration-300 self-center">
                        <IconComponent className="h-7 w-7 sm:h-8 sm:w-8 text-primary" />
                      </div>
                      <h3 className="font-semibold text-base sm:text-lg mb-2 group-hover:text-primary transition-colors">
                        {method.title}
                      </h3>
                      <p className="text-primary font-medium mb-2 text-sm sm:text-base">
                        {method.value}
                      </p>
                      <p className="text-xs sm:text-sm text-muted-foreground flex-grow">
                        {method.description}
                      </p>
                    </div>
                  </a>
                    </Card>
                  </motion.div>
                );
              })}
          </div>
        </div>
      </div>

      <div
        aria-hidden="true"
        role="presentation"
        className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-float pointer-events-none -z-10"
      />
      <div
        aria-hidden="true"
        role="presentation"
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary-glow/5 rounded-full blur-3xl animate-float pointer-events-none -z-10"
        style={{ animationDelay: '3s' }}
      />
    </section>
  );
};

export default Contact;
