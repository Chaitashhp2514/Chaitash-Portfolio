import React, { useEffect, useState } from "react";
import { Menu, X, Code2 } from "lucide-react";
import { navLinks, personalInfo } from "../mock";
import { Button } from "./ui/button";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
      const sections = navLinks.map((l) => l.href.replace("#", ""));
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            setActiveSection(id);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (href) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#09090f]/85 backdrop-blur-xl border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a
            href="#top"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="flex items-center gap-2.5 group"
          >
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-amber-500 to-amber-600 flex items-center justify-center shadow-lg shadow-amber-500/20 group-hover:shadow-amber-500/40 transition-shadow">
              <Code2 className="w-5 h-5 text-[#09090f]" strokeWidth={2.5} />
            </div>
            <div className="hidden sm:block">
              <div className="font-display font-semibold text-ivory text-[15px] leading-none text-slate-100">
                {personalInfo.firstName}
                <span className="text-amber-500">.</span>
              </div>
              <div className="font-mono text-[10px] text-slate-500 tracking-widest mt-0.5">
                {personalInfo.role.toUpperCase()}
              </div>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link, i) => {
              const id = link.href.replace("#", "");
              const isActive = activeSection === id;
              return (
                <button
                  key={link.href}
                  onClick={() => handleNav(link.href)}
                  className={`relative px-4 py-2 text-sm font-medium transition-colors ring-amber-focus rounded-md ${
                    isActive ? "text-amber-400" : "text-slate-300 hover:text-white"
                  }`}
                >
                  <span className="font-mono text-[11px] text-amber-500/80 mr-1.5">
                    0{i + 1}.
                  </span>
                  {link.label}
                </button>
              );
            })}
          </nav>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen((v) => !v)}
            className="lg:hidden w-10 h-10 inline-flex items-center justify-center rounded-md text-slate-200 hover:text-amber-400 ring-amber-focus"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-[#09090f]/97 backdrop-blur-xl border-t border-white/5 animate-fade-in">
          <nav className="flex flex-col px-6 py-5 gap-1">
            {navLinks.map((link, i) => (
              <button
                key={link.href}
                onClick={() => handleNav(link.href)}
                className="text-left px-3 py-3 text-slate-200 hover:text-amber-400 hover:bg-white/5 rounded-md transition-colors"
              >
                <span className="font-mono text-[11px] text-amber-500/80 mr-2">
                  0{i + 1}.
                </span>
                {link.label}
              </button>
            ))}
            <Button
              onClick={() => handleNav("#contact")}
              className="mt-3 bg-amber-500 hover:bg-amber-400 text-white font-semibold"
            >
              Let's Talk
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
