import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { experiences } from "@/lib/data/experience";

function formatDate(dateStr: string): string {
  const [year, month] = dateStr.split("-");
  const date = new Date(parseInt(year), parseInt(month) - 1);
  return date.toLocaleDateString("en-GB", { month: "short", year: "numeric" });
}

function getDuration(startDate: string, endDate?: string): string {
  const start = new Date(startDate.replace("-", "/"));
  const end = endDate ? new Date(endDate.replace("-", "/")) : new Date();
  const months =
    (end.getFullYear() - start.getFullYear()) * 12 +
    (end.getMonth() - start.getMonth());
  const years = Math.floor(months / 12);
  const remainingMonths = months % 12;

  if (years === 0) return `${remainingMonths}mo`;
  if (remainingMonths === 0) return `${years}yr`;
  return `${years}yr ${remainingMonths}mo`;
}

export function ExperiencePage() {
  return (
    <div className='px-6 max-w-6xl mx-auto py-24'>
      {/* Header */}
      <div className='mb-16'>
        <p className='text-text-muted text-sm font-mono uppercase tracking-widest mb-3'>
          Career History
        </p>
        <h1
          className='font-syne font-bold text-text-primary mb-6'
          style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)" }}
        >
          Work <span className='text-accent'>Experience</span>
        </h1>
        <p className='text-text-muted text-lg max-w-2xl leading-relaxed'>
          8+ years of building high-performance web applications across
          streaming, e-commerce, and SaaS — from startup-scale products to
          platforms used by millions.
        </p>
      </div>

      {/* Timeline */}
      <div className='relative'>
        {/* Vertical line */}
        <div
          className='absolute left-0 top-0 bottom-0 w-px bg-border ml-[7px] hidden md:block'
          aria-hidden='true'
        />

        <div className='space-y-16'>
          {experiences.map((exp) => (
            <div key={exp.id} className='relative md:pl-10'>
              {/* Timeline dot */}
              <div
                className={`
                  hidden md:block absolute left-0 top-2 w-4 h-4 rounded-full border-2
                  ${
                    exp.current
                      ? "bg-accent border-accent"
                      : "bg-background border-border"
                  }
                `}
                aria-hidden='true'
              />

              {/* Card */}
              <div className='bg-surface border border-border rounded-2xl p-8 space-y-6'>
                {/* Header */}
                <div className='flex items-start justify-between flex-wrap gap-4'>
                  <div>
                    <div className='flex items-center gap-3 flex-wrap mb-2'>
                      <h2 className='font-syne font-bold text-text-primary text-2xl'>
                        {exp.role}
                      </h2>
                      {exp.current && <Badge variant='accent'>Current</Badge>}
                    </div>
                    <div className='flex items-center gap-2 flex-wrap'>
                      <span className='text-accent font-semibold text-lg'>
                        {exp.company}
                      </span>
                      <span className='text-text-muted'>·</span>
                      <span className='text-text-muted'>{exp.location}</span>
                    </div>
                  </div>
                  <div className='text-right'>
                    <p className='text-text-muted font-mono text-sm'>
                      {formatDate(exp.startDate)} —{" "}
                      {exp.current
                        ? "Present"
                        : exp.endDate
                          ? formatDate(exp.endDate)
                          : ""}
                    </p>
                    <p className='text-text-muted text-xs mt-1'>
                      {getDuration(
                        exp.startDate,
                        exp.current ? undefined : exp.endDate
                      )}
                    </p>
                  </div>
                </div>

                {/* Divider */}
                <div className='border-t border-border' />

                {/* Description */}
                <ul className='space-y-3' role='list'>
                  {exp.description.map((point, i) => (
                    <li
                      key={i}
                      className='text-text-muted leading-relaxed flex gap-3'
                    >
                      <span
                        className='text-accent shrink-0 mt-1'
                        aria-hidden='true'
                      >
                        ▹
                      </span>
                      {point}
                    </li>
                  ))}
                </ul>

                {/* Tech stack */}
                <div>
                  <p className='text-text-muted text-xs uppercase tracking-widest font-mono mb-3'>
                    Tech Stack
                  </p>
                  <div
                    className='flex flex-wrap gap-2'
                    role='list'
                    aria-label={`Technologies used at ${exp.company}`}
                  >
                    {exp.techStack.map((tech) => (
                      <div key={tech} role='listitem'>
                        <Badge variant='muted'>{tech}</Badge>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom CTA */}
      <div className='mt-24 text-center space-y-6'>
        <p className='text-text-muted'>
          Want to know more about my experience?
        </p>
        <div className='flex gap-4 justify-center flex-wrap'>
          <Button as='a' href='/cv' variant='primary' size='md'>
            Download CV
          </Button>
          <Button as='a' href='/contact' variant='outline' size='md'>
            Get In Touch
          </Button>
        </div>
      </div>
    </div>
  );
}
