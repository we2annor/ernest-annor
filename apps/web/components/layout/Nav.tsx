"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Button } from "../ui/Button";

const navlinks = [
  { label: "About", href: "/about" },
  { label: "Experience", href: "/experience" },
  { label: "Projects", href: "/projects" },
  { label: "Blog", href: "/blog" },
  { label: "Uses", href: "/uses" },
  { label: "CV", href: "/cv" },
];

export function Nav() {
  const pathname = usePathname();
  const [menuOpenPathname, setMenuOpenPathname] = useState<string | null>(null);
  const isMenuOpen = menuOpenPathname === pathname;
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50
    transition-all duration-300
    ${isScrolled ? "bg-background/90 backdrop-blur-md border-b border-border" : "bg-transparent"}`}
    >
      <nav
        className='max-w-6xl mx-auto px-6 h-16 flex items-center justify-between'
        role='navigation'
        aria-label='Main navigation'
      >
        {/* Logo */}
        <Link
          href='/'
          className='font-syne font-bold text-2xl text-accent hover:opacity-80 transition-opacity'
          aria-label='Ernest Annor - Home'
        >
          EA
        </Link>
        {/* Desktop links */}
        <ul className='hidden md:flex items-center gap-8' role='list'>
          {navlinks.map(({ label, href }) => {
            const isActive =
              pathname === href || (href !== "/" && pathname.startsWith(href));
            return (
              <li key={href}>
                <Link
                  href={href}
                  className={`text-base font-medium transition-colors duration-200 
                            relative after:absolute after:-bottom-2.5 after:left-0
                    after:h-0.5 after:bg-accent after:transition-all after:duration-200
                        ${isActive ? "text-accent after:w-full" : "text-text-muted hover:text-text-primary after:w-0 hover:after:w-full"}`}
                  aria-current={isActive ? "page" : undefined}
                >
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Desktop CTA */}
        <div className='hidden md:flex items-center'>
          <Button as='a' href='/contact' variant='outline' size='sm'>
            Contact Me
          </Button>
        </div>
        {/* Mobile menu button */}
        <button
          className='md:hidden text-text-primary p-2 rounded-lg hover:bg-surface transition-colors cursor-pointer'
          onClick={() => setMenuOpenPathname(isMenuOpen ? null : pathname)}
          aria-expanded={isMenuOpen}
          aria-controls='mobile-menu'
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          <svg
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
            aria-hidden='true'
          >
            {isMenuOpen ? (
              <>
                <line x1='18' y1='6' x2='6' y2='18' />
                <line x1='6' y1='6' x2='18' y2='18' />
              </>
            ) : (
              <>
                <line x1='3' y1='6' x2='21' y2='6' />
                <line x1='3' y1='12' x2='21' y2='12' />
                <line x1='3' y1='18' x2='21' y2='18' />
              </>
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        id='mobile-menu'
        className={`md:hidden border-t border-border transition-all duration-300 overflow-hidden ${isMenuOpen ? "max-h-96 bg-background/95 backdrop-blur-md" : "max-h-0"}`}
        aria-hidden={!isMenuOpen}
      >
        <ul className='px-6 py-4 space-y-4' role='list'>
          {navlinks.map(({ label, href }) => {
            const isActive =
              pathname === href || (href !== "/" && pathname.startsWith(href));
            return (
              <li key={href}>
                <Link
                  href={href}
                  className={`block text-sm font-medium transition-colors duration-200 ${isActive ? "text-accent" : "text-text-muted hover:text-text-primary"}`}
                  aria-current={isActive ? "page" : undefined}
                >
                  {label}
                </Link>
              </li>
            );
          })}
          <li>
            <Button
              as='a'
              href='/contact'
              variant='outline'
              size='sm'
              className='w-full justify-center'
            >
              Contact Me
            </Button>
          </li>
        </ul>
      </div>
    </header>
  );
}
