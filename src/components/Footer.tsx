"use client";

import { useLanguage } from "../context/LanguageContext";
import { ArrowRight, Mail } from "lucide-react";

export function Footer() {
  const { data } = useLanguage();

  return (
    <footer className="bg-background border-t border-border text-foreground pt-32 pb-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-32">
          <div className="max-w-xl">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-8 leading-[1.1]">
              {data.footer.ctaTitle}
            </h2>
            <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
              {data.footer.ctaSubtitle}
            </p>
            <a 
              href={`mailto:${data.contact.email}`}
              className="inline-flex items-center gap-3 px-8 py-4 bg-foreground text-background rounded-md font-medium text-lg hover:bg-foreground/90 transition-colors"
            >
              {data.footer.getInTouch}
              <ArrowRight size={20} />
            </a>

            <div className="mt-12 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm font-medium text-muted-foreground">
              <span className="flex items-center gap-2 text-foreground">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                {data.footer.availableBadge}
              </span>
              <span className="hidden sm:inline opacity-50">•</span>
              <span>{data.footer.location}</span>
              <span className="hidden sm:inline opacity-50">•</span>
              <span>{data.footer.remote}</span>
              <span className="hidden sm:inline opacity-50">•</span>
              <span>{data.footer.relocation}</span>
            </div>
          </div>
          
          <div className="flex flex-col gap-6">
            <p className="text-sm font-semibold tracking-widest text-muted-foreground uppercase mb-2">
              {data.footer.connect}
            </p>
            <a href={data.contact.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors text-lg">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
              GitHub
            </a>
            <a href={data.contact.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors text-lg">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
              LinkedIn
            </a>
            <a href={`mailto:${data.contact.email}`} className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors text-lg">
              <Mail size={24} />
              Email
            </a>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-8 border-t border-border text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} {data.name.toUpperCase()}. {data.footer.rightsReserved}</p>
          <p>{data.footer.designTagline}</p>
        </div>
      </div>
    </footer>
  );
}
