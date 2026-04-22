import React from "react";
import { personalInfo, navLinks } from "../mock";
import { Github, Linkedin, Twitter, Heart, ArrowUp } from "lucide-react";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="relative border-t border-white/5 bg-[#09090f] pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid md:grid-cols-12 gap-10 mb-12">
          <div className="md:col-span-5">
            <div className="font-display text-2xl font-bold text-slate-100 mb-3">
              {personalInfo.firstName}
              <span className="text-amber-500">.</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-md mb-5">
              {personalInfo.shortBio} Currently based in {personalInfo.location}.
            </p>
            <div className="flex gap-3">
              {[
                { href: personalInfo.socials.github, Icon: Github },
                { href: personalInfo.socials.linkedin, Icon: Linkedin },
                { href: personalInfo.socials.twitter, Icon: Twitter }
              ].map(({ href, Icon }, i) => (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 rounded-lg glass flex items-center justify-center text-slate-400 hover:text-amber-400 hover:border-amber-500/40 transition-all"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
          <div className="md:col-span-3">
            <div className="font-mono text-[11px] text-amber-500 uppercase tracking-[0.25em] mb-4">
              Navigate
            </div>
            <ul className="space-y-2.5">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-slate-400 hover:text-amber-400 text-sm transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="md:col-span-4">
            <div className="font-mono text-[11px] text-amber-500 uppercase tracking-[0.25em] mb-4">
              Get in touch
            </div>
            <a
              href={`mailto:${personalInfo.email}`}
              className="block text-slate-200 hover:text-amber-400 transition-colors mb-1"
            >
              {personalInfo.email}
            </a>
            <div className="text-slate-500 text-sm">{personalInfo.phone}</div>
            <a
              href="#top"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="inline-flex items-center gap-2 mt-5 text-sm text-amber-400 hover:text-amber-300 transition-colors group"
            >
              <span>Back to top</span>
              <ArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>
        </div>

        <div className="pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center">
          <div className="text-xs font-mono">
            © {year} {personalInfo.name}. All rights reserved.
          </div>
         
        </div>
      </div>
    </footer>
  );
};

export default Footer;
