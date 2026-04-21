import React, { useState } from "react";
import { experiences } from "../mock";
import { Briefcase, MapPin } from "lucide-react";

const Experience = () => {
  const [active, setActive] = useState(experiences[0].id);
  const current = experiences.find((e) => e.id === active);

  return (
    <section id="experience" className="relative py-28 bg-[#131025]/40">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="mb-14">
          <div className="flex items-center mb-4">
            <span className="kicker-line" />
            <span className="font-mono text-xs text-amber-500 tracking-[0.3em] uppercase">
              04 — Experience
            </span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-slate-100 leading-tight">
            Where I've <span className="text-amber-400">worked</span>.
          </h2>
        </div>

        <div className="grid lg:grid-cols-12 gap-8">
          {/* Company tabs */}
          <div className="lg:col-span-4">
            <div className="flex lg:flex-col overflow-x-auto lg:overflow-visible gap-1 lg:border-l border-white/10">
              {experiences.map((exp) => {
                const isActive = exp.id === active;
                return (
                  <button
                    key={exp.id}
                    onClick={() => setActive(exp.id)}
                    className={`relative text-left whitespace-nowrap lg:whitespace-normal px-4 py-3 text-sm font-medium transition-all ring-amber-focus ${
                      isActive
                        ? "lg:bg-amber-500/10 text-amber-400"
                        : "text-slate-400 hover:text-slate-100 hover:bg-white/5"
                    }`}
                  >
                    {isActive && (
                      <span className="hidden lg:block absolute -left-px top-0 bottom-0 w-[2px] bg-amber-500" />
                    )}
                    {exp.company}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Details */}
          <div className="lg:col-span-8">
            {current && (
              <div className="animate-fade-up">
                <div className="flex items-center gap-3 mb-3">
                  <Briefcase className="w-5 h-5 text-amber-400" />
                  <h3 className="font-display text-2xl font-semibold text-slate-100">
                    {current.role}{" "}
                    <span className="text-amber-400">@ {current.company}</span>
                  </h3>
                </div>
                <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-400 mb-6">
                  <span>{current.period}</span>
                  <span className="text-slate-600">•</span>
                  <span>{current.type}</span>
                  <span className="text-slate-600">•</span>
                  <span className="inline-flex items-center gap-1">
                    <MapPin className="w-3 h-3" />
                    {current.location}
                  </span>
                </div>
                <p className="text-slate-300 text-[15px] leading-relaxed mb-6">
                  {current.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {current.tags.map((t) => (
                    <span
                      key={t}
                      className="font-mono text-[11px] px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
