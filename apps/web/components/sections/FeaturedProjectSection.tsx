import Link from "next/link";
import { Button } from "../ui/Button";
import { Badge } from "../ui/Badge";
import { Card } from "../ui/Card";
import { featuredProjects } from "@/lib/data/projects";

export function FeaturedProjectSection() {
  return (
    <section
      className='px-6 max-w-6xl mx-auto py-24'
      aria-labelledby='projects-heading'
    >
      {/* section header */}
      <div className='flex items-end justify-between mb-12'>
        <div>
          <p className='text-text-muted text-sm font-mono uppercase tracking-widest mb-3'>
            Selected Work
          </p>
          <h2
            id='projects-heading'
            className='font-syne font-bold text-text-primary'
            style={{ fontSize: "clamp(2rem, 5sv, 3.5rem)" }}
          >
            Featured <span className='text-accent'>Projects</span>
          </h2>
        </div>
        <Button
          as='a'
          href='/projects'
          variant='ghost'
          size='sm'
          className='hidden md:inline-flex'
        >
          View All
        </Button>
      </div>

      {/* Project cards*/}

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8'>
        {featuredProjects.map((project) => (
          <Card
            key={project.id}
            hover
            className='flex flex-col justify-between gap-6'
          >
            {/* Project header */}
            <div className='space-y-3'>
              <div className='flex items-start justify-between gap-4'>
                <h3 className='font-syne font-semibold text-text-primary text-lg leading-snug'>
                  {project.title}
                </h3>
                {project.liveUrl && (
                  <Link
                    href={project.liveUrl}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-text-muted hover:text-accent transition-colors shrink-0'
                    aria-label={`Visit ${project.title} website`}
                  >
                    <svg
                      width='16'
                      height='16'
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

            {/*  Tech stack*/}
            <div
              className='flex flex-wrap gap-2'
              role='list'
              aria-label={`Technologies used in ${project.title}`}
            >
              {project.techStack.map((tech) => (
                <div key={tech} role='listitem'>
                  <Badge variant='accent'>{tech}</Badge>
                </div>
              ))}
            </div>
          </Card>
        ))}
      </div>
      {/* Mobile view all button */}
      <div className='flex justify-center md:hidden'>
        <Button as='a' href='/projects' variant='outline' size='md'>
          View All Projects →
        </Button>
      </div>
    </section>
  );
}
