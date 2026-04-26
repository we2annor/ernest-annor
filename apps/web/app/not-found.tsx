import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className='min-h-[80vh] flex flex-col items-center justify-center px-6 text-center'>
      {/* 404 number */}
      <p
        className='font-syne font-extrabold text-accent opacity-20 leading-none mb-8 select-none'
        style={{ fontSize: "clamp(8rem, 20vw, 16rem)" }}
        aria-hidden='true'
      >
        404
      </p>
      {/* Message */}
      <div className='space-y-4 mb-10 -mt-8'>
        <h1 className='font-syne font-bold text-text-primary text-4xl'>
          Page not Found
        </h1>
        <p className='text-text-muted text-lg max-w-md leading-relaxed'>
          Looks like this page doesn&apos;t exist or has been moved. Let&apos;s
          get you back on track.
        </p>
      </div>

      {/* Actions */}
      <div className='flex flex-wrap gap-4 justify-center'>
        <Button as='a' href='/' variant='primary' size='lg'>
          Back to Home
        </Button>
        <Button as='a' href='/contact' variant='outline' size='lg'>
          Get In Touch
        </Button>
      </div>

      {/* Quick links  */}
      <div className='mt-16 space-y-3'>
        <p className='text-text-muted text-sm font-mono uppercase tracking-widest'>
          Or try one of these
        </p>
        <div className='flex flex-wrap gap-4 justify-center'>
          {[
            { label: "About", href: "/about" },
            { label: "Projects", href: "/projects" },
            { label: "Experience", href: "/experience" },
            { label: "Blog", href: "/blog" },
          ].map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              className='text-text-muted hover:text-accent transition-colors duration-200 text-sm font-medium'
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
