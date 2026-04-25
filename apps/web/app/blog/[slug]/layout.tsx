export default function BlogPostLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className='px-6 max-w-3xl mx-auto py-24'>
      <article className='prose prose-invert max-w-none'>{children}</article>
    </div>
  );
}
