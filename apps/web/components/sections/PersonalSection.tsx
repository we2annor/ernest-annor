import { Button } from "@/components/ui/Button";

const interests = [
  {
    emoji: "🏋️",
    title: "Fitness",
    description:
      "Regular gym sessions — physical discipline feeds mental clarity.",
  },
  {
    emoji: "📚",
    title: "Continuous Learning",
    description:
      "Always reading — currently focused on system design and software architecture.",
  },
  {
    emoji: "🎵",
    title: "Music",
    description:
      "Music is a constant companion — from focus playlists to unwinding after work.",
  },
  {
    emoji: "🌍",
    title: "Travel",
    description:
      "Exploring new cultures and perspectives broadens how I think about problems.",
  },
];

export function PersonalSection() {
  return (
    <section
      className='px-6 max-w-6xl mx-auto py-24 border-t border-border'
      aria-labelledby='personal-heading'
    >
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-16'>
        {/* Left — personal text */}
        <div className='space-y-6'>
          <div>
            <p className='text-text-muted text-sm font-mono uppercase tracking-widest mb-3'>
              Beyond the Code
            </p>
            <h2
              id='personal-heading'
              className='font-syne font-bold text-text-primary'
              style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
            >
              The person behind{" "}
              <span className='text-accent'>the engineer</span>
            </h2>
          </div>

          <div className='space-y-4 text-text-muted leading-relaxed'>
            <p>
              Outside of work I&rsquo;m passionate about staying active,
              learning continuously, and building things that matter. I believe
              the best engineers bring their whole selves to their work —
              curiosity, discipline, and a genuine care for the people using
              what they build.
            </p>
            <p>
              I&rsquo;m originally from Ghana and have called{" "}
              <span className='text-text-primary font-medium'>London</span> home
              for many years. That journey has given me a deep appreciation for
              diverse perspectives and the value of adaptability — both in life
              and in software.
            </p>
            <p>
              I&apos;m currently on a path toward{" "}
              <span className='text-accent font-medium'>
                Software Architecture
              </span>{" "}
              — deepening my understanding of distributed systems, system
              design, and technical leadership.
            </p>
          </div>

          <Button as='a' href='/contact' variant='outline' size='md'>
            Let&rsquo;s Connect
          </Button>
        </div>

        {/* Right — interests */}
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
          {interests.map(({ emoji, title, description }) => (
            <div
              key={title}
              className='bg-surface border border-border rounded-xl p-6 space-y-3'
            >
              <span className='text-3xl' role='img' aria-label={title}>
                {emoji}
              </span>
              <h3 className='font-syne font-semibold text-text-primary'>
                {title}
              </h3>
              <p className='text-text-muted text-sm leading-relaxed'>
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
