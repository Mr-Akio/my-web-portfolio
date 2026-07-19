import { portfolioData } from "@/data/portfolio";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

// Generate static params for static site generation (SSG)
export function generateStaticParams() {
  return portfolioData.blog.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  // Await the params in Next.js 15+
  const resolvedParams = await params;
  const post = portfolioData.blog.find((p) => p.slug === resolvedParams.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-background text-foreground pt-24 pb-32">
      <div className="max-w-3xl mx-auto px-6">
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors mb-12"
        >
          <ArrowLeft size={16} />
          Back to Home
        </Link>
        
        <header className="mb-12 border-b border-border pb-8">
          <p className="text-sm text-muted-foreground font-mono mb-4">{post.date}</p>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">{post.title}</h1>
        </header>
        
        <article className="prose prose-invert max-w-none">
          {/* Simple custom markdown renderer using tailwind classes */}
          <div 
            className="flex flex-col gap-6 text-lg leading-relaxed text-muted-foreground"
            dangerouslySetInnerHTML={{
              __html: post.content
                ?.replace(/\n## (.*)/g, '<h2 class="text-2xl font-bold tracking-tight text-foreground mt-8 mb-4">$1</h2>')
                ?.replace(/\n# (.*)/g, '') // Remove the main title from content since it's in the header
                ?.replace(/\*\*(.*?)\*\*/g, '<strong class="font-bold text-foreground">$1</strong>')
                ?.replace(/`(.*?)`/g, '<code class="px-1.5 py-0.5 rounded-md bg-muted text-foreground font-mono text-sm">$1</code>')
                ?.replace(/```([a-z]+)?\n([\s\S]*?)\n```/g, '<pre class="p-4 rounded-lg bg-[#1C1C1C] text-gray-300 font-mono text-sm overflow-x-auto my-6 border border-border"><code>$2</code></pre>')
                ?.replace(/\n- (.*)/g, '<li class="ml-4 list-disc">$1</li>')
                ?.replace(/\n1\. (.*)/g, '<li class="ml-4 list-decimal">$1</li>')
                ?.replace(/\n2\. (.*)/g, '<li class="ml-4 list-decimal">$1</li>')
                ?.replace(/\n3\. (.*)/g, '<li class="ml-4 list-decimal">$1</li>')
                ?.replace(/\n\n([^<].*?)(?=\n\n|\n<|$)/g, '<p>$1</p>')
                || ''
            }}
          />
        </article>
      </div>
    </div>
  );
}
