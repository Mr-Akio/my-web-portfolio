"use client";

import { portfolioData } from "../data/portfolio";

export function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-12 gap-12 items-start">
          <div className="md:col-span-5 relative">
            <h2 className="text-sm font-medium tracking-widest text-muted-foreground uppercase mb-8">
              Point of View
            </h2>
            <h3 className="text-3xl md:text-5xl font-semibold leading-tight tracking-tight">
              Good products are not created by adding more. They are created by deciding what matters.
            </h3>
          </div>
          
          <div className="md:col-span-1 md:block hidden"></div>
          
          <div className="md:col-span-6 flex flex-col gap-6 pt-1 md:pt-14">
            <h2 className="text-sm font-medium tracking-widest text-muted-foreground uppercase mb-2">
              About Me
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {portfolioData.about.description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
