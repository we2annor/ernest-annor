import Link from "next/link";
import { Badge } from "@/components/ui/Badge";
import { blogPosts, formatBlogDate } from "@/lib/data/blog";

export function BlogListPage() {
  const featured = blogPosts.filter((p) => p.featured);
  const rest = blogPosts.filter((p) => !p.featured);

  return (
    <div className='px-6 max-w-4xl mx-auto py-24'>
      {/* Header */}
      <div className='mb-16'>
        <p className='text-text-muted text-sm font-mono uppercase tracking-widest mb-3'>
          Writing
        </p>
        <h1
          className='font-syne font-bold text-text-primary mb-6'
          style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)" }}
        >
          Thoughts & <span className='text-accent'>Articles</span>
        </h1>
        <p className='text-text-muted text-lg leading-relaxed'>
          Writing about frontend architecture, performance, accessibility, and
          engineering at scale.
        </p>
      </div>

      {/* Featured posts */}
      <div className='mb-16'>
        <h2 className='text-text-muted text-xs uppercase tracking-widest font-mono mb-8'>
          Featured
        </h2>
        <div className='space-y-6'>
          {featured.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className='block group'
            >
              <article className='bg-surface border border-border rounded-2xl p-8 transition-all duration-300 hover:border-accent/50 hover:bg-surface-raised hover:-translate-y-1'>
                <div className='flex items-start justify-between gap-4 mb-4'>
                  <h3 className='font-syne font-bold text-text-primary text-xl leading-snug group-hover:text-accent transition-colors duration-200'>
                    {post.title}
                  </h3>
                  <span className='text-text-muted shrink-0 mt-1 group-hover:text-accent transition-colors'>
                    →
                  </span>
                </div>
                <p className='text-text-muted leading-relaxed mb-6'>
                  {post.summary}
                </p>
                <div className='flex items-center justify-between flex-wrap gap-4'>
                  <div className='flex flex-wrap gap-2' role='list'>
                    {post.tags.map((tag) => (
                      <div key={tag} role='listitem'>
                        <Badge variant='accent'>{tag}</Badge>
                      </div>
                    ))}
                  </div>
                  <div className='flex items-center gap-3 text-text-muted text-sm font-mono'>
                    <span>{formatBlogDate(post.publishedAt)}</span>
                    <span>·</span>
                    <span>{post.readingTime}</span>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>

      {/* All posts */}
      <div>
        <h2 className='text-text-muted text-xs uppercase tracking-widest font-mono mb-8'>
          All Posts
        </h2>
        <div className='space-y-4'>
          {rest.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className='block group'
            >
              <article className='border-b border-border py-6 flex items-start justify-between gap-6 hover:border-accent/30 transition-colors duration-200'>
                <div className='space-y-2'>
                  <h3 className='font-syne font-semibold text-text-primary group-hover:text-accent transition-colors duration-200'>
                    {post.title}
                  </h3>
                  <p className='text-text-muted text-sm leading-relaxed'>
                    {post.summary}
                  </p>
                  <div className='flex flex-wrap gap-2 pt-1' role='list'>
                    {post.tags.map((tag) => (
                      <div key={tag} role='listitem'>
                        <Badge variant='muted'>{tag}</Badge>
                      </div>
                    ))}
                  </div>
                </div>
                <div className='text-right shrink-0 space-y-1'>
                  <p className='text-text-muted text-sm font-mono whitespace-nowrap'>
                    {formatBlogDate(post.publishedAt)}
                  </p>
                  <p className='text-text-muted text-xs'>{post.readingTime}</p>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
