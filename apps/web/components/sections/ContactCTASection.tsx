import { Button } from "@/components/ui/Button";

export function ContactCTASection() {
  return (
    <section
      className='px-6 max-w-6xl mx-auto py-24'
      aria-labelledby='contact-cta-heading'
    >
      <div className='relative rounded-2xl border border-border bg-surface p-12 md:p-20 text-center overflow-hidden'>
        {/* Background glow */}
        <div
          className='absolute inset-0 opacity-10'
          style={{
            background:
              "radial-gradient(ellipse at center, var(--color-accent) 0%, transparent 70%)",
          }}
          aria-hidden='true'
        />

        {/* Content */}
        <div className='relative z-10 space-y-6'>
          <p className='text-text-muted text-sm font-mono uppercase tracking-widest'>
            What&rsquo;s Next?
          </p>

          <h2
            id='contact-cta-heading'
            className='font-syne font-bold text-text-primary'
            style={{ fontSize: "clamp(2rem, 5vw, 4rem)" }}
          >
            Let&rsquo;s Build Something{" "}
            <span className='text-accent'>Together</span>
          </h2>

          <p className='text-text-muted text-lg max-w-xl mx-auto leading-relaxed'>
            I&rsquo;m currently open to new opportunities. Whether you have a
            role in mind, a project to discuss, or just want to say hello — my
            inbox is always open.
          </p>

          <div className='flex flex-wrap gap-4 justify-center pt-4'>
            <Button as='a' href='/contact' variant='primary' size='lg'>
              Get In Touch
            </Button>
            <Button
              as='a'
              href='mailto:we2annor@gmail.com'
              variant='outline'
              size='lg'
            >
              Email Me Directly
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
