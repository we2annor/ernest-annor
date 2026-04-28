import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { experiences } from "@/lib/data/experience";

function formatDate(dateStr: string): string {
  const [year, month] = dateStr.split("-");
  const date = new Date(parseInt(year), parseInt(month) - 1);
  return date.toLocaleDateString("en-GB", { month: "short", year: "numeric" });
}

export function ExperienceSection() {
  return (
    <section
      className='px-6 max-w-6xl mx-auto py-24'
      aria-labelledby='experience-heading'
    >
      {/* Section header */}
      <div className='flex items-end justify-between mb-12'>
        <div>
          <p className='text-text-muted text-sm font-mono uppercase tracking-widest mb-3'>
            Career
          </p>
          <h2
            id='experience-heading'
            className='font-syne font-bold text-text-primary'
            style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
          >
            Work <span className='text-accent'>Experience</span>
          </h2>
        </div>
        <Button
          as='a'
          href='/experience'
          variant='ghost'
          size='sm'
          className='hidden md:inline-flex'
        >
          Full History →
        </Button>
      </div>

      {/* Timeline */}
      <div className='relative'>
        {/* Vertical line */}
        <div
          className='absolute left-0 top-0 bottom-0 w-px bg-border ml-[7px]'
          aria-hidden='true'
        />

        <div className='space-y-12'>
          {experiences.map((exp) => (
            <div key={exp.id} className='relative pl-10'>
              {/* Timeline dot */}
              <div
                className={`
                  absolute left-0 top-1 w-4 h-4 rounded-full border-2
                  ${
                    exp.current
                      ? "bg-accent border-accent"
                      : "bg-background border-border"
                  }
                `}
                aria-hidden='true'
              />

              {/* Content */}
              <div className='space-y-3'>
                {/* Role and company */}
                <div>
                  <div className='flex items-center gap-3 flex-wrap'>
                    <h3 className='font-syne font-semibold text-text-primary text-xl'>
                      {exp.role}
                    </h3>
                    {exp.current && <Badge variant='accent'>Current</Badge>}
                  </div>
                  <div className='flex items-center gap-2 mt-1 flex-wrap'>
                    <span className='text-accent font-medium'>
                      {exp.company}
                    </span>
                    <span className='text-text-muted'>·</span>
                    <span className='text-text-muted text-sm'>
                      {exp.location}
                    </span>
                    <span className='text-text-muted'>·</span>
                    <span className='text-text-muted text-sm font-mono'>
                      {formatDate(exp.startDate)} —{" "}
                      {exp.current
                        ? "Present"
                        : exp.endDate
                          ? formatDate(exp.endDate)
                          : ""}
                    </span>
                  </div>
                </div>

                {/* Description */}
                <ul className='space-y-1' role='list'>
                  {exp.description.slice(0, 2).map((point, i) => (
                    <li
                      key={i}
                      className='text-text-muted text-sm leading-relaxed flex gap-2'
                    >
                      <span
                        className='text-accent mt-1 shrink-0'
                        aria-hidden='true'
                      >
                        ▹
                      </span>
                      {point}
                    </li>
                  ))}
                </ul>

                {/* Tech stack */}
                <div
                  className='flex flex-wrap gap-2 pt-1'
                  role='list'
                  aria-label={`Technologies used at ${exp.company}`}
                >
                  {exp.techStack.slice(0, 5).map((tech) => (
                    <div key={tech} role='listitem'>
                      <Badge variant='muted'>{tech}</Badge>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile view all */}
      <div className='flex justify-center md:hidden mt-12'>
        <Button as='a' href='/experience' variant='outline' size='md'>
          Full History →
        </Button>
      </div>
    </section>
  );
}
