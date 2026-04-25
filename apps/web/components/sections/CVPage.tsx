import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { experiences } from "@/lib/data/experience";

const skills = {
  Frontend: [
    "React",
    "TypeScript",
    "JavaScript",
    "Next.js",
    "Redux",
    "GraphQL",
    "HTML5",
    "CSS3",
    "Tailwind CSS",
    "Styled Components",
    "Accessibility (WCAG)",
  ],
  "Backend & APIs": [
    "Node.js",
    "Express",
    "REST APIs",
    "Apollo",
    "GraphQL",
    "Java",
    "PostgreSQL",
    "MongoDB",
    "MySQL",
  ],
  "DevOps & Tooling": [
    "Git",
    "Docker",
    "Kubernetes",
    "AWS",
    "Azure",
    "Jenkins",
    "GitHub Actions",
    "CI/CD",
  ],
  Testing: [
    "Jest",
    "Vitest",
    "React Testing Library",
    "Cypress",
    "Playwright",
    "Cucumber",
    "TDD",
    "BDD",
  ],
};

function formatDate(dateStr: string): string {
  const [year, month] = dateStr.split("-");
  const date = new Date(parseInt(year), parseInt(month) - 1);
  return date.toLocaleDateString("en-GB", { month: "short", year: "numeric" });
}

export function CVPage() {
  return (
    <div className='px-6 max-w-4xl mx-auto py-24'>
      {/* Header */}
      <div className='flex items-start justify-between flex-wrap gap-6 mb-16 pb-8 border-b border-border'>
        <div>
          <h1
            className='font-syne font-bold text-text-primary mb-2'
            style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
          >
            Ernest Wiafe-Annor
          </h1>
          <p className='text-accent text-xl font-medium mb-1'>
            Senior Software Engineer
          </p>
          <p className='text-text-muted'>
            London, UK · we2annor@gmail.com · 07805 545160 · ernestannor.com
          </p>
        </div>
        <div className='flex items-start pt-2'>
          <Button
            as='a'
            href='/ewannor_software_engineer.pdf'
            variant='outline'
            size='md'
            download
          >
            Download PDF ↓
          </Button>
        </div>
      </div>

      {/* Profile */}
      <section className='mb-16' aria-labelledby='profile-heading'>
        <h2
          id='profile-heading'
          className='font-syne font-bold text-accent text-sm uppercase tracking-widest mb-4'
        >
          Profile
        </h2>
        <p className='text-text-muted leading-relaxed'>
          Senior Frontend-Focused Software Engineer with 8+ years of experience
          building and scaling high-traffic, consumer-facing web applications in
          complex product environments. Currently working at Sky on large-scale
          streaming platforms used by millions of users, with a strong focus on
          product outcomes, performance, reliability, and accessibility. Deep
          expertise in modern frontend architecture (React, TypeScript, Next.js)
          combined with strong system design skills and cross-functional
          collaboration with product and design. Passionate about building
          maintainable UI platforms, improving developer productivity, and
          mentoring engineers.
        </p>
      </section>

      {/* Experience */}
      <section className='mb-16' aria-labelledby='experience-heading'>
        <h2
          id='experience-heading'
          className='font-syne font-bold text-accent text-sm uppercase tracking-widest mb-8'
        >
          Experience
        </h2>

        <div className='space-y-12'>
          {experiences.map((exp) => (
            <div key={exp.id} className='space-y-4'>
              {/* Role header */}
              <div className='flex items-start justify-between flex-wrap gap-2'>
                <div>
                  <h3 className='font-syne font-semibold text-text-primary text-xl'>
                    {exp.role}
                  </h3>
                  <div className='flex items-center gap-2 mt-1 flex-wrap'>
                    <span className='text-accent font-medium'>
                      {exp.company}
                    </span>
                    <span className='text-text-muted'>·</span>
                    <span className='text-text-muted text-sm'>
                      {exp.location}
                    </span>
                  </div>
                </div>
                <span className='text-text-muted text-sm font-mono whitespace-nowrap'>
                  {formatDate(exp.startDate)} —{" "}
                  {exp.current
                    ? "Present"
                    : exp.endDate
                      ? formatDate(exp.endDate)
                      : ""}
                </span>
              </div>

              {/* Description */}
              <ul className='space-y-2' role='list'>
                {exp.description.map((point, i) => (
                  <li
                    key={i}
                    className='text-text-muted text-sm leading-relaxed flex gap-3'
                  >
                    <span
                      className='text-accent shrink-0 mt-0.5'
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
                className='flex flex-wrap gap-2'
                role='list'
                aria-label={`Technologies at ${exp.company}`}
              >
                {exp.techStack.map((tech) => (
                  <div key={tech} role='listitem'>
                    <Badge variant='muted'>{tech}</Badge>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section className='mb-16' aria-labelledby='skills-heading'>
        <h2
          id='skills-heading'
          className='font-syne font-bold text-accent text-sm uppercase tracking-widest mb-8'
        >
          Technical Skills
        </h2>

        <div className='space-y-6'>
          {Object.entries(skills).map(([category, items]) => (
            <div
              key={category}
              className='grid grid-cols-1 sm:grid-cols-4 gap-4'
            >
              <p className='text-text-muted text-sm font-medium pt-1'>
                {category}
              </p>
              <div
                className='sm:col-span-3 flex flex-wrap gap-2'
                role='list'
                aria-label={`${category} skills`}
              >
                {items.map((skill) => (
                  <div key={skill} role='listitem'>
                    <Badge variant='muted'>{skill}</Badge>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Education */}
      <section aria-labelledby='education-heading'>
        <h2
          id='education-heading'
          className='font-syne font-bold text-accent text-sm uppercase tracking-widest mb-8'
        >
          Education
        </h2>

        <div className='space-y-6'>
          <div className='flex items-start justify-between flex-wrap gap-2'>
            <div>
              <h3 className='font-syne font-semibold text-text-primary'>
                IMIS Programming Diploma (IT)
              </h3>
              <p className='text-text-muted text-sm mt-1'>Ghana</p>
            </div>
            <span className='text-text-muted text-sm font-mono'>
              2000 — 2001
            </span>
          </div>
          <div className='flex items-start justify-between flex-wrap gap-2'>
            <div>
              <h3 className='font-syne font-semibold text-text-primary'>
                SSCE
              </h3>
              <p className='text-text-muted text-sm mt-1'>Ghana</p>
            </div>
            <span className='text-text-muted text-sm font-mono'>
              1996 — 1998
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}
