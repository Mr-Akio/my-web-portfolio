"use client";

import { motion } from "framer-motion";
import { portfolioData } from "../data/portfolio";
import { ExternalLink, PlayCircle } from "lucide-react";

export function Projects() {
  return (
    <section id="work" className="py-24 md:py-32 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold tracking-tight mb-16 border-b border-border pb-6">
          My Projects
        </h2>

        <div className="flex flex-col gap-24">
          {portfolioData.projects.map((project, index) => (
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
                  <div className="absolute inset-0 flex items-center justify-center bg-background/50 backdrop-blur-sm transition-colors duration-500">
                    <div className="text-center">
                      <PlayCircle size={48} className="mx-auto mb-2 text-muted-foreground opacity-30" />
                      <p className="text-sm font-medium text-muted-foreground opacity-50">Project screenshot coming soon</p>
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
                        Challenge & Solution
                      </p>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {project.challenge}
                      </p>
                    </div>
                  )}
                </div>

                {/* Tech Stack */}
                <div>
                  <p className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-3">
                    Tech Stack
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, i) => (
                      <span key={i} className="px-3 py-1 bg-muted border border-border rounded-full text-sm font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Features */}
                <div>
                  <p className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-3">
                    Key Features
                  </p>
                  <div className="flex flex-wrap gap-x-4 gap-y-2">
                    {project.features.map((feature, i) => (
                      <span key={i} className="text-sm text-foreground font-medium flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Links */}
                <div className="flex items-center gap-4 mt-2">
                  {project.links.demo !== "#" && (
                    <a href={project.links.demo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 bg-foreground text-background rounded-md font-medium hover:bg-foreground/90 transition-colors">
                      <ExternalLink size={18} />
                      Live Demo
                    </a>
                  )}
                  {project.links.github !== "#" && (
                    <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 border border-border rounded-md font-medium hover:bg-muted transition-colors text-foreground">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
                      Source Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
