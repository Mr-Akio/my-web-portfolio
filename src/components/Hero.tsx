"use client";

import { portfolioData } from "../data/portfolio";
import { ArrowRight, Code2, Database, LayoutTemplate, FileText } from "lucide-react";

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10 grid md:grid-cols-12 gap-12 items-center">
        <div
          className="md:col-span-7 flex flex-col gap-6"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-muted/50 w-fit">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            <span className="text-xs font-medium tracking-wide text-muted-foreground uppercase">
              Available for work
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter leading-[1.1]">
            {portfolioData.hero.title}
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-lg leading-relaxed">
            {portfolioData.hero.subtitle}
          </p>

          <div className="flex flex-wrap items-center gap-4 mt-4">
            <a
              href="#work"
              className="px-6 py-3 bg-foreground text-background rounded-md font-medium hover:bg-foreground/90 transition-colors flex items-center gap-2"
            >
              View My Projects
              <ArrowRight size={18} />
            </a>
            <a
              href={`mailto:${portfolioData.contact.email}`}
              className="px-6 py-3 bg-transparent border border-border text-foreground rounded-md font-medium hover:bg-muted transition-colors"
            >
              Contact Me
            </a>
            <a
              href="/CV_Kittithat_Seelawan.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-transparent border border-border text-foreground rounded-md font-medium hover:bg-muted transition-colors flex items-center gap-2"
            >
              <FileText size={18} />
              Download CV
            </a>
          </div>
        </div>

        {/* Terminal Mockup */}
        <div
          className="md:col-span-5 hidden md:block"
        >
          <div className="relative w-full aspect-square border border-border bg-[#1C1C1C] rounded-xl shadow-xl flex flex-col overflow-hidden font-mono text-sm">
            {/* Terminal Header */}
            <div className="flex items-center px-4 py-3 bg-[#2D2D2D] border-b border-[#3D3D3D]">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-[#FF5F56]"></div>
                <div className="w-3 h-3 rounded-full bg-[#FFBD2E]"></div>
                <div className="w-3 h-3 rounded-full bg-[#27C93F]"></div>
              </div>
              <p className="mx-auto text-xs text-gray-400 flex-1 text-center pr-6">kittithat@server:~</p>
            </div>
            
            {/* Terminal Body */}
            <div className="p-5 flex flex-col gap-3 text-gray-300">
              <div className="flex items-center gap-2">
                <span className="text-green-400">➜</span>
                <span className="text-blue-400">~</span>
                <span className="text-white">docker-compose up -d</span>
              </div>
              
              <div
                className="flex flex-col gap-1.5 text-xs text-gray-400"
              >
                <p>Creating network "project_default" with the default driver</p>
                <p>Building web...</p>
                <p className="text-blue-300">=&gt; [internal] load build definition from Dockerfile</p>
                <p className="text-blue-300">=&gt; =&gt; transferring dockerfile: 32B</p>
                <p>Successfully built 8a9b4c2d1e3f</p>
                <p className="mt-2 text-white">Starting postgres_db ... <span className="text-green-400">done</span></p>
                <p className="text-white">Starting web_app     ... <span className="text-green-400">done</span></p>
                <p className="text-white">Starting nginx_proxy ... <span className="text-green-400">done</span></p>
              </div>

              <div
                className="flex items-center gap-2 mt-4"
              >
                <span className="text-green-400">➜</span>
                <span className="text-blue-400">~</span>
                <span className="text-white">python manage.py runserver</span>
              </div>
              
              <div
                className="flex flex-col gap-1.5 text-xs text-gray-400"
              >
                <p>Watching for file changes with StatReloader</p>
                <p>Performing system checks...</p>
                <p className="text-green-400">System check identified no issues (0 silenced).</p>
                <p>Django version 5.0, using settings 'backend.settings'</p>
                <p>Starting development server at http://127.0.0.1:8000/</p>
                <p>Quit the server with CONTROL-C.</p>
              </div>

              <div
                className="flex items-center gap-2 mt-2"
              >
                <span
                  className="w-2 h-4 bg-gray-400 inline-block"
                ></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
