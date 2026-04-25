import { Badge } from "@/components/ui/Badge";

const categories = [
  {
    title: "Editor & Terminal",
    emoji: "💻",
    items: [
      {
        name: "VS Code",
        description:
          "My primary editor. Clean, fast, and the extension ecosystem is unmatched.",
        tags: ["Editor"],
      },
      {
        name: "Cursor",
        description:
          "AI-powered editor built on VS Code. Game changer for productivity — especially for boilerplate and refactoring.",
        tags: ["Editor", "AI"],
      },
      {
        name: "iTerm2 + Zsh",
        description:
          "iTerm2 with Oh My Zsh and the Powerlevel10k theme. Fast, customisable, and looks great.",
        tags: ["Terminal"],
      },
    ],
  },
  {
    title: "AI Tools",
    emoji: "🤖",
    items: [
      {
        name: "Claude",
        description:
          "My go-to AI assistant for complex reasoning, code review, and architecture discussions.",
        tags: ["AI", "Productivity"],
      },
      {
        name: "Claude Code",
        description:
          "Agentic coding tool in the terminal. Excellent for large refactors and scaffolding projects.",
        tags: ["AI", "CLI"],
      },
      {
        name: "GitHub Copilot",
        description:
          "Inline completions in VS Code. Still useful for repetitive patterns and boilerplate.",
        tags: ["AI", "Editor"],
      },
      {
        name: "Augment",
        description:
          "AI coding assistant with strong codebase awareness. Great for large monorepos.",
        tags: ["AI", "Editor"],
      },
    ],
  },
  {
    title: "Development Stack",
    emoji: "⚙️",
    items: [
      {
        name: "React + TypeScript",
        description:
          "My core frontend stack. TypeScript is non-negotiable for anything serious.",
        tags: ["Frontend"],
      },
      {
        name: "Next.js",
        description:
          "My go-to React framework. App Router, Server Components, and the deployment story with Vercel is excellent.",
        tags: ["Frontend", "Framework"],
      },
      {
        name: "Tailwind CSS",
        description:
          "Utility-first CSS that keeps styles co-located with markup. Tailwind 4 is a significant improvement.",
        tags: ["CSS"],
      },
      {
        name: "Node.js + Express",
        description:
          "My backend of choice for APIs. Simple, flexible, and the ecosystem is vast.",
        tags: ["Backend"],
      },
      {
        name: "PostgreSQL + MongoDB",
        description:
          "PostgreSQL for relational data, MongoDB for flexible document storage. Right tool for the right job.",
        tags: ["Database"],
      },
    ],
  },
  {
    title: "DevOps & Infrastructure",
    emoji: "🚀",
    items: [
      {
        name: "Docker",
        description:
          "Containerisation for consistent environments. Essential for anything beyond a toy project.",
        tags: ["DevOps"],
      },
      {
        name: "GitHub Actions",
        description:
          "CI/CD pipelines. Simple YAML configuration and tight GitHub integration.",
        tags: ["CI/CD"],
      },
      {
        name: "Vercel",
        description:
          "Frontend deployment. Zero configuration for Next.js, excellent DX, and generous free tier.",
        tags: ["Hosting"],
      },
      {
        name: "AWS",
        description:
          "Cloud infrastructure for more complex setups. EC2, S3, Lambda, and CloudFront are my most-used services.",
        tags: ["Cloud"],
      },
    ],
  },
  {
    title: "Productivity",
    emoji: "📱",
    items: [
      {
        name: "Notion",
        description:
          "Notes, project tracking, and documentation. My second brain.",
        tags: ["Productivity"],
      },
      {
        name: "Linear",
        description:
          "Issue tracking done right. Fast, opinionated, and a joy to use.",
        tags: ["Productivity"],
      },
      {
        name: "Figma",
        description:
          "Design collaboration. As an engineer working closely with designers, being able to inspect and prototype in Figma is essential.",
        tags: ["Design"],
      },
      {
        name: "Spotify",
        description:
          "Focus playlists are essential. Lo-fi and instrumental hip-hop for deep work.",
        tags: ["Focus"],
      },
    ],
  },
  {
    title: "Hardware",
    emoji: "🖥️",
    items: [
      {
        name: "MacBook Pro M3",
        description:
          "The best laptop for software development. Battery life is exceptional and build performance is remarkable.",
        tags: ["Hardware"],
      },
      {
        name: 'LG 27" 4K Monitor',
        description:
          "External display for desk work. The extra screen real estate makes a significant difference.",
        tags: ["Hardware"],
      },
      {
        name: "Keychron K2",
        description:
          "Mechanical keyboard with brown switches. Tactile feedback without being too loud for open offices.",
        tags: ["Hardware"],
      },
    ],
  },
];

export function UsesPage() {
  return (
    <div className='px-6 max-w-4xl mx-auto py-24'>
      {/* Header */}
      <div className='mb-16'>
        <p className='text-text-muted text-sm font-mono uppercase tracking-widest mb-3'>
          Setup
        </p>
        <h1
          className='font-syne font-bold text-text-primary mb-6'
          style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)" }}
        >
          What I <span className='text-accent'>Use</span>
        </h1>
        <p className='text-text-muted text-lg leading-relaxed max-w-2xl'>
          The tools, hardware, and software I use day-to-day as a Senior
          Software Engineer. This list evolves as I find better tools.
        </p>
      </div>

      {/* Categories */}
      <div className='space-y-16'>
        {categories.map(({ title, emoji, items }) => (
          <section key={title} aria-labelledby={`${title}-heading`}>
            {/* Category header */}
            <div className='flex items-center gap-3 mb-8 pb-4 border-b border-border'>
              <span className='text-2xl' role='img' aria-label={title}>
                {emoji}
              </span>
              <h2
                id={`${title}-heading`}
                className='font-syne font-bold text-text-primary text-2xl'
              >
                {title}
              </h2>
            </div>

            {/* Items */}
            <div className='space-y-6'>
              {items.map(({ name, description, tags }) => (
                <div
                  key={name}
                  className='grid grid-cols-1 md:grid-cols-4 gap-4 py-4'
                >
                  {/* Name */}
                  <div className='md:col-span-1'>
                    <h3 className='font-syne font-semibold text-text-primary'>
                      {name}
                    </h3>
                    <div className='flex flex-wrap gap-1 mt-2' role='list'>
                      {tags.map((tag) => (
                        <div key={tag} role='listitem'>
                          <Badge variant='muted'>{tag}</Badge>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Description */}
                  <p className='md:col-span-3 text-text-muted leading-relaxed text-sm'>
                    {description}
                  </p>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
