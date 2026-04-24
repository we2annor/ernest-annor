"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";

const techStack = [
  { label: "React", variant: "accent" as const },
  { label: "TypeScript", variant: "accent" as const },
  { label: "Next.js", variant: "accent" as const },
  { label: "Node.js", variant: "blue" as const },
  { label: "GraphQL", variant: "blue" as const },
  { label: "AWS", variant: "muted" as const },
  { label: "Docker", variant: "muted" as const },
  { label: "Kubernetes", variant: "muted" as const },
];

const roles = [
  "Senior Software Engineer",
  "Frontend Architect",
  "Full Stack Developer",
  "React Specialist",
];

export function HeroSection() {
  const [currentRole, setCurrentRole] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className='relative min-h-[90vh] flex flex-col justify-center px-6 max-w-6xl mx-auto'
      aria-label='Hero section'
    >
      <div
        className={`transition-all duration-1000
        ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        {/* Greeting*/}
        <p className='text-text-muted text-lg mb-4 font-mono'>Hi, my name is</p>

        {/* Name */}
        <h1
          className='font-syne font-extrabold text-text-primary mb-2 leading-none'
          style={{ fontSize: "clamp(3rem, 10vw, 7rem)" }}
        >
          Ernest
          <span className='text-accent'>Annor</span>
        </h1>

        {/* Rotating roles*/}
        <div className='h-16 flex items-center mb-6'>
          <h2
            className='font-syne font-bold text-text-muted'
            style={{ fontSize: "clamp(1.5rem, 4vw, 3rem)" }}
            aria-live='polite'
            aria-atomic='true'
          >
            {roles[currentRole]}
          </h2>
        </div>

        {/* Description */}
        <p className='text-text-muted text-lg max-w-2xl mb-8 leading-relaxed'>
          Senior Software Engineer with{" "}
          <span className='text-text-primary font-medium'>8+ years</span> of
          experience building high-performance, accessible web applications at
          scale. Currently at{" "}
          <span className='text-accent font-medium'>Sky</span>, working on
          streaming platforms used by{" "}
          <span className='text-text-primary font-medium'>
            millions of users.
          </span>
        </p>

        {/* CTA buttons */}
        <div className='flex flex-wrap gap-4 mb-12'>
          <Button as='a' href='/projects' variant='primary' size='lg'>
            View My Work
          </Button>
          <Button as='a' href='/contact' variant='outline' size='lg'>
            Get In Touch
          </Button>
          <Button as='a' href='/cv' variant='ghost' size='lg'>
            Download CV ↓
          </Button>
        </div>
        {/* Tech stack*/}
        <div className='space-y-4'>
          <p className='text-text-muted text-sm font-mono uppercase tracking-widest'>
            Tech Stack
          </p>

          <div
            className='flex flex-wrap gap-3'
            role='list'
            aria-label='Technology stack'
          >
            {techStack.map(({ label, variant }) => (
              <div key={label} role='listitem'>
                <Badge variant={variant}>{label}</Badge>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className='absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-text-muted'
        aria-hidden='true'
      >
        <span className='text-xs font-mono uppercase tracking-widest'>
          Scroll
        </span>
        <div className='w-px h-12 bg-linear-to-b from-text-muted to-transparent animate-pulse' />
      </div>
    </section>
  );
}
