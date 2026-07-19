
import { portfolioData } from "../data/portfolio";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function Blog() {
  return (
    <section id="blog" className="py-24 md:py-32 bg-background border-t border-border">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16 border-b border-border pb-6">
          <h2 className="text-4xl font-bold tracking-tight">Writing & Thoughts</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {portfolioData.blog.map((post, index) => (
            <div 
              key={index}
              className="group"
            >
              <Link href={post.link} className="block p-6 h-full border border-border bg-muted/20 hover:bg-muted/50 transition-colors rounded-lg flex flex-col justify-between gap-6">
                <div>
                  <p className="text-sm text-muted-foreground font-mono mb-3">{post.date}</p>
                  <h3 className="text-xl font-semibold tracking-tight group-hover:text-accent transition-colors">
                    {post.title}
                  </h3>
                </div>
                <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors mt-4">
                  Read Article
                  <ArrowRight size={16} className="transform group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
