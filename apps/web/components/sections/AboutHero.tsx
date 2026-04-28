import Image from "next/image";
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

        {/* Right — photo and stats */}
        <div className='space-y-8'>
          {/* Profile photo */}
          <div className='relative w-64 h-64 mx-auto lg:mx-0 rounded-2xl overflow-hidden border-2 border-accent/20'>
            <Image
              src='/profile.jpeg'
              alt='Ernest Annor — Senior Software Engineer'
              fill
              className='object-cover grayscale'
              priority
            />
            {/* Dark teal overlay */}
            <div
              className='absolute inset-0'
              style={{
                background:
                  "linear-gradient(135deg, rgba(2, 13, 18, 0.6) 0%, rgba(0, 229, 176, 0.15) 100%)",
                mixBlendMode: "multiply",
              }}
            />
          </div>

          {/* Stats */}
          <div className='grid grid-cols-2 gap-4'>
            {[
              { value: "8+", label: "Years Experience" },
              { value: "10M+", label: "Users Reached" },
              { value: "3", label: "Companies" },
              { value: "40%", label: "Subscription Uplift" },
            ].map(({ value, label }) => (
              <div
                key={label}
                className='bg-surface border border-border rounded-xl p-4 text-center space-y-1'
              >
                <p
                  className='font-syne font-bold text-accent'
                  style={{ fontSize: "clamp(1.5rem, 3vw, 2.5rem)" }}
                >
                  {value}
                </p>
                <p className='text-text-muted text-xs'>{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
