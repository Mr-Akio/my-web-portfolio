"use client";

import { useLanguage } from "../context/LanguageContext";
import { PlayCircle } from "lucide-react";

export function Projects() {
  const { data } = useLanguage();

  return (
    <section id="work" className="py-24 md:py-32 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold tracking-tight mb-16 border-b border-border pb-6">
          {data.projects.title}
        </h2>

        <div className="flex flex-col gap-24">
          {data.projects.items.map((project, index) => (
            <div 
              key={index}
              className="grid md:grid-cols-12 gap-10 items-center group"
            >
              {/* Project Image / Placeholder */}
              <div className="md:col-span-7 relative aspect-[4/3] bg-muted rounded-lg overflow-hidden border border-border group-hover:border-accent/50 transition-colors">
                {project.image ? (
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center bg-background/80 transition-colors duration-500">
                    <div className="text-center">
                      <PlayCircle size={48} className="mx-auto mb-2 text-muted-foreground opacity-30" />
                      <p className="text-sm font-medium text-muted-foreground opacity-50">
                        {data.projects.screenshotPlaceholder}
                      </p>
                    </div>
                  </div>
                )}
                <div className="absolute inset-0 bg-background/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Project Info */}
              <div className="md:col-span-5 flex flex-col gap-6">
                <div>
                  <h3 className="text-3xl font-semibold tracking-tight mb-3">
                    {project.title}
                  </h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                  {project.challenge && (
                    <div className="mt-4 p-4 border-l-2 border-accent bg-muted/20 rounded-r-md">
                      <p className="text-sm font-semibold tracking-widest uppercase text-foreground mb-1">
                        {data.projects.challengeLabel}
                      </p>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {project.challenge}
                      </p>
                    </div>
                  )}
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, i) => (
                    <span 
                      key={i}
                      className="px-3 py-1 bg-muted text-muted-foreground rounded-full text-xs font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
