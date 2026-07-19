"use client";

import { portfolioData } from "../data/portfolio";
import { CheckCircle2 } from "lucide-react";

export function Experience() {
  return (
    <section id="experience" className="py-24 md:py-32 bg-background border-t border-border">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-16 md:gap-24">
          <div className="w-full md:w-1/3">
            <h2 className="text-4xl font-bold tracking-tight mb-6">
              {portfolioData.experience.title}
            </h2>
            <p className="text-lg text-muted-foreground">
              Focusing on backend architecture, database design, and building scalable APIs for modern web applications.
            </p>
          </div>
          
          <div className="w-full md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-12">
            <div>
              <h3 className="text-sm font-medium tracking-widest text-muted-foreground uppercase mb-6 border-b border-border pb-2">
                Metrics & Achievements
              </h3>
              <ul className="flex flex-col gap-4">
                {portfolioData.experience.highlights.map((highlight, index) => (
                  <li 
                    key={index}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2 className="text-accent mt-1 shrink-0" size={18} />
                    <span className="text-foreground font-medium leading-relaxed">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-medium tracking-widest text-muted-foreground uppercase mb-6 border-b border-border pb-2">
                Core Features Implemented
              </h3>
              <ul className="flex flex-col gap-4">
                {portfolioData.experience.features.map((feature, index) => (
                  <li 
                    key={index}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2 className="text-accent mt-1 shrink-0" size={18} />
                    <span className="text-foreground font-medium leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
