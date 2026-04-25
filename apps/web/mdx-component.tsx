import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => (
      <h1 className='font-syne font-bold text-text-primary text-4xl mb-6 mt-8'>
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className='font-syne font-bold text-text-primary text-2xl mb-4 mt-8'>
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className='font-syne font-semibold text-text-primary text-xl mb-3 mt-6'>
        {children}
      </h3>
    ),
    p: ({ children }) => (
      <p className='text-text-muted leading-relaxed mb-4'>{children}</p>
    ),
    strong: ({ children }) => (
      <strong className='text-text-primary font-semibold'>{children}</strong>
    ),
    ul: ({ children }) => <ul className='space-y-2 mb-4 ml-4'>{children}</ul>,
    li: ({ children }) => (
      <li className='text-text-muted leading-relaxed flex gap-2'>
        <span className='text-accent mt-1 shrink-0'>▹</span>
        {children}
      </li>
    ),
    code: ({ children }) => (
      <code className='bg-surface border border-border rounded px-2 py-0.5 text-accent font-mono text-sm'>
        {children}
      </code>
    ),
    pre: ({ children }) => (
      <pre className='bg-surface border border-border rounded-xl p-6 overflow-x-auto mb-6 font-mono text-sm text-text-primary'>
        {children}
      </pre>
    ),
    ...components,
  };
}
