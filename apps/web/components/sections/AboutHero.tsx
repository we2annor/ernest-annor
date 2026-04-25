import { Button } from "@/components/ui/Button";

export function AboutHero() {
  return (
    <section
      className='px-6 max-w-6xl mx-auto py-24'
      aria-labelledby='about-heading'
    >
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-16 items-center'>
        {/* Text content */}
        <div className='space-y-8'>
          <div>
            <p className='text-text-muted text-sm font-mono uppercase tracking-widest mb-3'>
              About Me
            </p>
            <h1
              id='about-heading'
              className='font-syne font-bold text-text-primary leading-tight'
              style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)" }}
            >
              Passionate about <span className='text-accent'>craft</span> and{" "}
              <span className='text-accent'>scale</span>
            </h1>
          </div>

          <div className='space-y-4 text-text-muted leading-relaxed'>
            <p>
              I&rsquo;m Ernest — a Senior Software Engineer with over{" "}
              <span className='text-text-primary font-medium'>
                8 years of experience
              </span>{" "}
              building high-performance, accessible web applications. I&rsquo;m
              currently at <span className='text-accent font-medium'>Sky</span>,
              working on NowTV and Peacock — streaming platforms used by
              millions of users across web and TV devices.
            </p>
            <p>
              My career has taken me from SaaS platforms in the Care and
              Education sector at{" "}
              <span className='text-text-primary font-medium'>OLM Systems</span>
              , through consultancy work at{" "}
              <span className='text-text-primary font-medium'>AND Digital</span>{" "}
              where I contributed to the launch of Sky Glass, to large-scale
              consumer product engineering at Sky.
            </p>
            <p>
              I care deeply about{" "}
              <span className='text-text-primary font-medium'>
                frontend architecture
              </span>
              ,{" "}
              <span className='text-text-primary font-medium'>
                accessibility
              </span>
              , and{" "}
              <span className='text-text-primary font-medium'>
                developer experience
              </span>
              . I believe the best software is built by engineers who take pride
              in their craft — writing clean, maintainable code that lasts.
            </p>
            <p>
              I&rsquo;m based in{" "}
              <span className='text-text-primary font-medium'>London, UK</span>{" "}
              and am currently open to new senior and lead engineering
              opportunities.
            </p>
          </div>

          <div className='flex flex-wrap gap-4'>
            <Button as='a' href='/contact' variant='primary' size='md'>
              Get In Touch
            </Button>
            <Button as='a' href='/cv' variant='outline' size='md'>
              View CV
            </Button>
          </div>
        </div>

        {/* Stats / highlights */}
        <div className='grid grid-cols-2 gap-6'>
          {[
            { value: "8+", label: "Years Experience" },
            { value: "10M+", label: "Users Reached" },
            { value: "3", label: "Companies" },
            { value: "40%", label: "Subscription Uplift" },
          ].map(({ value, label }) => (
            <div
              key={label}
              className='bg-surface border border-border rounded-xl p-6 text-center space-y-2'
            >
              <p
                className='font-syne font-bold text-accent'
                style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
              >
                {value}
              </p>
              <p className='text-text-muted text-sm'>{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
