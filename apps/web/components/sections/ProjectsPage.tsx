"use client";

import { useState } from "react";
import Link from "next/link";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { projects } from "@/lib/data/projects";

const allTechs = Array.from(
  new Set(projects.flatMap((p) => p.techStack))
).sort();

export function ProjectsPage() {
  const [selectedTech, setSelectedTech] = useState<string | null>(null);

  const filteredProjects = selectedTech
    ? projects.filter((p) => p.techStack.includes(selectedTech))
    : projects;

  return (
    <div className='px-6 max-w-6xl mx-auto py-24'>
      {/* Header */}
      <div className='mb-16'>
        <p className='text-text-muted text-sm font-mono uppercase tracking-widest mb-3'>
          Work
        </p>
        <h1
          className='font-syne font-bold text-text-primary mb-6'
          style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)" }}
        >
          Featured <span className='text-accent'>Projects</span>
        </h1>
        <p className='text-text-muted text-lg max-w-2xl leading-relaxed'>
          A selection of projects I&apos;ve worked on — from large-scale
          streaming platforms to e-commerce and SaaS products.
        </p>
      </div>

      {/* Filter */}
      <div className='mb-12'>
        <p className='text-text-muted text-xs uppercase tracking-widest font-mono mb-4'>
          Filter by technology
        </p>
        <div
          className='flex flex-wrap gap-2'
          role='group'
          aria-label='Filter projects by technology'
        >
          <button
            onClick={() => setSelectedTech(null)}
            className={`
              px-4 py-2 rounded-full text-sm font-medium transition-all duration-200
              cursor-pointer border
              ${
                !selectedTech
                  ? "bg-accent text-background border-accent"
                  : "bg-transparent text-text-muted border-border hover:border-accent hover:text-accent"
              }
            `}
            aria-pressed={!selectedTech}
          >
            All
          </button>
          {allTechs.map((tech) => (
            <button
              key={tech}
              onClick={() =>
                setSelectedTech(selectedTech === tech ? null : tech)
              }
              className={`
                px-4 py-2 rounded-full text-sm font-medium transition-all duration-200
                cursor-pointer border
                ${
                  selectedTech === tech
                    ? "bg-accent text-background border-accent"
                    : "bg-transparent text-text-muted border-border hover:border-accent hover:text-accent"
                }
              `}
              aria-pressed={selectedTech === tech}
            >
              {tech}
            </button>
          ))}
        </div>
      </div>

      {/* Projects grid */}
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
        {filteredProjects.length === 0 ? (
          <div className='col-span-2 text-center py-24'>
            <p className='text-text-muted text-lg'>
              No projects found for{" "}
              <span className='text-accent'>{selectedTech}</span>
            </p>
            <Button
              onClick={() => setSelectedTech(null)}
              variant='ghost'
              size='md'
              className='mt-4'
            >
              Clear filter
            </Button>
          </div>
        ) : (
          filteredProjects.map((project) => (
            <Card
              key={project.id}
              hover
              className='flex flex-col justify-between gap-6'
            >
              {/* Card header */}
              <div className='space-y-3'>
                <div className='flex items-start justify-between gap-4'>
                  <h2 className='font-syne font-semibold text-text-primary text-xl leading-snug'>
                    {project.title}
                  </h2>
                  {project.liveUrl && (
                    <Link
                      href={project.liveUrl}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='text-text-muted hover:text-accent transition-colors shrink-0 mt-1'
                      aria-label={`Visit ${project.title} website`}
                    >
                      <svg
                        width='18'
                        height='18'
                        viewBox='0 0 24 24'
                        fill='none'
                        stroke='currentColor'
                        strokeWidth='2'
                        aria-hidden='true'
                      >
                        <path d='M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6' />
                        <polyline points='15 3 21 3 21 9' />
                        <line x1='10' y1='14' x2='21' y2='3' />
                      </svg>
                    </Link>
                  )}
                </div>
                <p className='text-text-muted text-sm leading-relaxed'>
                  {project.description}
                </p>
              </div>

              {/* Tech stack */}
              <div
                className='flex flex-wrap gap-2'
                role='list'
                aria-label={`Technologies used in ${project.title}`}
              >
                {project.techStack.map((tech) => (
                  <div key={tech} role='listitem'>
                    <Badge variant={selectedTech === tech ? "accent" : "muted"}>
                      {tech}
                    </Badge>
                  </div>
                ))}
              </div>
            </Card>
          ))
        )}
      </div>
    </div>
  );
}
