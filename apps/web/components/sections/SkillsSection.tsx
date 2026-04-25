import { Badge } from "@/components/ui/Badge";

const skillCategories = [
  {
    title: "Frontend",
    variant: "accent" as const,
    skills: [
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
      "Framer Motion",
      "Accessibility (WCAG)",
    ],
  },
  {
    title: "Backend & APIs",
    variant: "blue" as const,
    skills: [
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
  },
  {
    title: "Testing",
    variant: "pink" as const,
    skills: [
      "Jest",
      "Vitest",
      "React Testing Library",
      "Cypress",
      "Playwright",
      "Cucumber",
      "Selenium",
      "TDD",
      "BDD",
    ],
  },
  {
    title: "DevOps & Tooling",
    variant: "muted" as const,
    skills: [
      "Git",
      "Docker",
      "Kubernetes",
      "AWS",
      "Azure",
      "Jenkins",
      "GitHub Actions",
      "CI/CD",
      "Terraform",
    ],
  },
  {
    title: "AI Tools",
    variant: "accent" as const,
    skills: ["Claude", "Claude Code", "Cursor", "GitHub Copilot", "Augment"],
  },
  {
    title: "Ways of Working",
    variant: "muted" as const,
    skills: [
      "Agile",
      "Scrum",
      "Kanban",
      "Trunk-based Development",
      "Code Review",
      "Mentoring",
      "Technical Leadership",
    ],
  },
];

export function SkillsSection() {
  return (
    <section
      className='px-6 max-w-6xl mx-auto py-24 border-t border-border'
      aria-labelledby='skills-heading'
    >
      <div className='mb-12'>
        <p className='text-text-muted text-sm font-mono uppercase tracking-widest mb-3'>
          Expertise
        </p>
        <h2
          id='skills-heading'
          className='font-syne font-bold text-text-primary'
          style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
        >
          Skills & <span className='text-accent'>Technologies</span>
        </h2>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {skillCategories.map(({ title, variant, skills }) => (
          <div key={title} className='space-y-4'>
            <h3 className='font-syne font-semibold text-text-primary text-lg'>
              {title}
            </h3>
            <div
              className='flex flex-wrap gap-2'
              role='list'
              aria-label={`${title} skills`}
            >
              {skills.map((skill) => (
                <div key={skill} role='listitem'>
                  <Badge variant={variant}>{skill}</Badge>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
