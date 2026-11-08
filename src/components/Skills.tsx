"use client";

import { useLanguage } from "../context/LanguageContext";

export function Skills() {
  const { data } = useLanguage();

  return (
    <section id="skills" className="py-24 md:py-32 bg-muted/30 border-y border-border">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-12 md:gap-24">
          <div className="w-full md:w-1/4">
            <h2 className="text-sm font-medium tracking-widest text-muted-foreground uppercase border-b border-border pb-2 inline-block">
              {data.skills.title}
            </h2>
          </div>
          
          <div className="w-full md:w-3/4 grid grid-cols-1 sm:grid-cols-3 gap-12">
            {data.skills.items.map((skillGroup, index) => (
              <div 
                key={index}
                className="flex flex-col gap-4"
              >
                <h3 className="text-lg font-semibold tracking-tight text-foreground">
                  {skillGroup.category}
                </h3>
                <ul className="flex flex-col gap-2.5">
                  {skillGroup.items.map((item, i) => (
                    <li key={i} className="text-muted-foreground font-medium text-sm flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-accent"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
