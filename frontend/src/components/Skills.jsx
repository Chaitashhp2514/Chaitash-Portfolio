import React, { useState } from "react";
import { skills } from "../mock";
import { Code2, Layers, Wrench } from "lucide-react";

const categories = [
  { key: "languages", label: "Languages", icon: Code2 },
  { key: "frameworks", label: "Frameworks", icon: Layers },
  { key: "tools", label: "Tools & Infra", icon: Wrench }
];

const Skills = () => {
  const [active, setActive] = useState("languages");
  const list = skills[active];

  return (
    <section id="skills" className="relative py-28 bg-[#131025]/40">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="mb-14 flex flex-wrap items-end justify-between gap-6">
          <div>
            <div className="flex items-center mb-4">
              <span className="kicker-line" />
              <span className="font-mono text-xs text-amber-500 tracking-[0.3em] uppercase">
                02 — Skills
              </span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-slate-100 leading-tight">
              The tools of the <span className="text-amber-400">trade</span>.
            </h2>
          </div>
          <p className="text-slate-400 max-w-md">
            A curated, honest snapshot of what I reach for most often. Depth over breadth — I prefer mastering the essentials.
          </p>
        </div>

        {/* Tabs */}
        <div className="inline-flex p-1 rounded-lg glass mb-10">
          {categories.map((c) => {
            const Icon = c.icon;
            const isActive = active === c.key;
            return (
              <button
                key={c.key}
                onClick={() => setActive(c.key)}
                className={`flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-md text-sm font-medium transition-all ring-amber-focus ${
                  isActive
                    ? "bg-amber-500 text-[#09090f] shadow-md shadow-amber-500/30"
                    : "text-slate-300 hover:text-white"
                }`}
              >
                <Icon className="w-4 h-4" />
                {c.label}
              </button>
            );
          })}
        </div>

        {/* Skill bars */}
        <div className="grid md:grid-cols-2 gap-x-10 gap-y-5">
          {list.map((s, i) => (
            <div
              key={s.name}
              className="animate-fade-up"
              style={{ animationDelay: `${i * 70}ms` }}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-slate-200 font-medium">{s.name}</span>
                <span className="font-mono text-xs text-amber-400">{s.level}%</span>
              </div>
              <div className="h-2 bg-[#131025] rounded-full overflow-hidden border border-white/5">
                <div
                  className="h-full bg-gradient-to-r from-amber-600 via-amber-500 to-amber-300 rounded-full transition-all duration-700"
                  style={{ width: `${s.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
