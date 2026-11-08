"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, FileText } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { language, setLanguage, data } = useLanguage();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: data.nav.work, href: "#work" },
    { name: data.nav.experience, href: "#experience" },
    { name: data.nav.education, href: "#education" },
    { name: data.nav.skills, href: "#skills" },
    { name: data.nav.about, href: "#about" },
    { name: data.nav.blog, href: "#blog" },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 border-b border-border shadow-sm backdrop-blur"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold tracking-tight">
          KITTITHAT.
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.name}
            </Link>
          ))}

          <a
            href="/CV_Kittithat_Seelawan.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 border border-border text-foreground rounded-md hover:bg-muted transition-colors"
          >
            <FileText size={16} />
            {data.nav.resume}
          </a>

          <a
            href={`mailto:${data.contact.email}`}
            className="px-4 py-2 bg-foreground text-background rounded-md hover:bg-foreground/90 transition-colors"
          >
            {data.nav.contact}
          </a>

          {/* Language Switcher Button (TH | EN) - Placed at the far right */}
          <div className="flex items-center rounded-full border border-border bg-muted/60 p-0.5 text-xs font-semibold ml-2">
            <button
              type="button"
              onClick={() => setLanguage("th")}
              className={`px-3 py-1 rounded-full transition-all duration-200 ${
                language === "th"
                  ? "bg-foreground text-background shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
              aria-label="เปลี่ยนเป็นภาษาไทย"
            >
              TH
            </button>
            <button
              type="button"
              onClick={() => setLanguage("en")}
              className={`px-3 py-1 rounded-full transition-all duration-200 ${
                language === "en"
                  ? "bg-foreground text-background shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
              aria-label="Switch to English"
            >
              EN
            </button>
          </div>
        </nav>

        {/* Mobile Right Bar: Language Toggle + Hamburger */}
        <div className="md:hidden flex items-center gap-3">
          <div className="flex items-center rounded-full border border-border bg-muted/60 p-0.5 text-xs font-semibold">
            <button
              type="button"
              onClick={() => setLanguage("th")}
              className={`px-2.5 py-1 rounded-full transition-all ${
                language === "th"
                  ? "bg-foreground text-background shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              TH
            </button>
            <button
              type="button"
              onClick={() => setLanguage("en")}
              className={`px-2.5 py-1 rounded-full transition-all ${
                language === "en"
                  ? "bg-foreground text-background shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              EN
            </button>
          </div>

          <button
            className="p-2 text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Open Menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-background border-b border-border px-6 py-4 flex flex-col gap-4 shadow-xl">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-lg font-medium text-muted-foreground hover:text-foreground"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <div className="flex gap-4 mt-4">
            <a
              href="/CV_Kittithat_Seelawan.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-center flex items-center justify-center gap-2 px-4 py-3 border border-border text-foreground rounded-md font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              <FileText size={18} />
              {data.nav.resume}
            </a>
            <a
              href={`mailto:${data.contact.email}`}
              className="flex-1 text-center px-4 py-3 bg-foreground text-background rounded-md font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              {data.nav.contact}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
