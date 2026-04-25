import { notFound } from "next/navigation";
import { blogPosts } from "@/lib/data/blog";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export default async function BlogPost({ params }: Props) {
  const { slug } = await params;

  let Post: { default: React.ComponentType };
  try {
    Post = await import(`@/content/blog/${slug}.mdx`);
  } catch {
    return notFound();
  }

  return <Post.default />;
}
