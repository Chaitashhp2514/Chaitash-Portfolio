import React from "react";
import { education, certifications } from "../mock";
import { GraduationCap, Award, CheckCircle2 } from "lucide-react";

const Education = () => {
  return (
    <section id="education" className="relative py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="mb-14">
          <div className="flex items-center mb-4">
            <span className="kicker-line" />
            <span className="font-mono text-xs text-amber-500 tracking-[0.3em] uppercase">
              05 — Education & Credentials
            </span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-slate-100 leading-tight">
            Formally <span className="text-amber-400">curious</span>.
          </h2>
        </div>

        <div className="grid lg:grid-cols-12 gap-10">
          {/* Education timeline */}
          <div className="lg:col-span-7">
            <h3 className="font-display text-xl font-semibold text-slate-100 mb-6 flex items-center gap-2">
              <GraduationCap className="w-5 h-5 text-amber-400" />
              Academic Path
            </h3>
            <div className="relative pl-8 space-y-8 before:content-[''] before:absolute before:left-2 before:top-2 before:bottom-2 before:w-px before:bg-gradient-to-b before:from-amber-500/60 before:via-amber-500/20 before:to-transparent">
              {education.map((ed, i) => (
                <div
                  key={ed.id}
                  className="relative animate-fade-up"
                  style={{ animationDelay: `${i * 100}ms` }}
                >
                  <span className="absolute -left-[30px] top-1.5 w-4 h-4 rounded-full bg-amber-500 border-4 border-[#09090f] shadow-md shadow-amber-500/40" />
                  <div className="glass rounded-xl p-6 hover-lift">
                    <div className="flex items-start justify-between flex-wrap gap-2 mb-2">
                      <h4 className="font-display text-lg font-semibold text-slate-100">
                        {ed.degree}
                      </h4>
                      <span className="font-mono text-xs text-amber-400">{ed.period}</span>
                    </div>
                    <div className="text-amber-300 text-sm mb-2">{ed.school}</div>
                    <div className="font-mono text-xs text-slate-400 mb-4">{ed.grade}</div>
                    <ul className="space-y-1.5">
                      {ed.highlights.map((h) => (
                        <li key={h} className="flex items-start gap-2 text-sm text-slate-300">
                          <CheckCircle2 className="w-4 h-4 text-amber-500 mt-0.5 shrink-0" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="lg:col-span-5">
            <h3 className="font-display text-xl font-semibold text-slate-100 mb-6 flex items-center gap-2">
              <Award className="w-5 h-5 text-amber-400" />
              Certifications
            </h3>
            <div className="space-y-3">
              {certifications.map((c, i) => (
                <div
                  key={c.id}
                  className="glass rounded-xl p-4 flex items-center gap-4 hover-lift animate-fade-up"
                  style={{ animationDelay: `${i * 80}ms` }}
                >
                  <div className="w-11 h-11 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center shrink-0">
                    <Award className="w-5 h-5 text-amber-400" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-medium text-slate-100 text-sm leading-snug">
                      {c.name}
                    </div>
                    <div className="text-xs text-slate-400 mt-0.5">
                      {c.issuer} · <span className="text-amber-400 font-mono">{c.year}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
