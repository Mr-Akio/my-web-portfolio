"use client";

import { useLanguage } from "../context/LanguageContext";
import { GraduationCap } from "lucide-react";

export function Education() {
  const { data } = useLanguage();

  return (
    <section id="education" className="py-24 md:py-32 bg-background border-t border-border">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-16 md:gap-24">
          <div className="w-full md:w-1/3">
            <h2 className="text-4xl font-bold tracking-tight mb-6">
              {data.education.title}
            </h2>
            <p className="text-lg text-muted-foreground">
              {data.education.subtitle}
            </p>
          </div>
          
          <div className="w-full md:w-2/3 flex flex-col gap-12">
            {data.education.items.map((edu, index) => (
              <div 
                key={index}
                className="relative pl-8 md:pl-0"
              >
                <div className="hidden md:block absolute left-0 top-2 bottom-2 w-px bg-border">
                  <div className="w-3 h-3 rounded-full bg-accent absolute -left-[5px] top-1" />
                </div>
                
                <div className="md:pl-10 flex flex-col md:flex-row gap-4 md:gap-8 md:items-start">
                  <div className="md:w-1/3 shrink-0">
                    <div className="flex items-center gap-2 mb-2">
                      <GraduationCap className="text-accent md:hidden" size={20} />
                      <span className="text-sm font-medium tracking-widest text-accent uppercase">
                        {edu.period}
                      </span>
                    </div>
                  </div>
                  
                  <div className="md:w-2/3 mt-1 md:mt-0">
                    <h3 className="text-xl font-bold mb-1">{edu.institution}</h3>
                    <h4 className="text-lg font-medium text-foreground/90 mb-2">{edu.degree}</h4>
                    {edu.gpa && (
                      <p className="text-muted-foreground text-sm">
                        GPA: {edu.gpa}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
