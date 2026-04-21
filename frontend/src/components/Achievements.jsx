import React from "react";
import { achievements } from "../mock";
import { Trophy, Rocket, GraduationCap, Languages } from "lucide-react";

const iconMap = { Trophy, Rocket, GraduationCap, Languages };

const Achievements = () => {
  return (
    <section id="achievements" className="relative py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="mb-14 flex flex-wrap items-end justify-between gap-6">
          <div>
            <div className="flex items-center mb-4">
              <span className="kicker-line" />
              <span className="font-mono text-xs text-violet-400 tracking-[0.3em] uppercase">
                06 — Achievements
              </span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-slate-100 leading-tight">
              Moments I'm <span className="text-violet-300">proud</span> of.
            </h2>
          </div>
          <p className="text-slate-400 max-w-md">
            A few highlights that shaped who I am — on the field, in the lab, and in community.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {achievements.map((a, i) => {
            const Icon = iconMap[a.icon] || Trophy;
            return (
              <div
                key={a.id}
                className="relative glass rounded-2xl p-6 hover-lift animate-fade-up overflow-hidden"
                style={{ animationDelay: `${i * 90}ms` }}
              >
                {/* Decorative corner blob */}
                <div className="absolute -top-8 -right-8 w-24 h-24 rounded-full bg-violet-500/10 blur-2xl" />
                <div className="relative">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-violet-500/30 to-fuchsia-500/20 border border-violet-400/30 flex items-center justify-center mb-5">
                    <Icon className="w-5 h-5 text-violet-200" />
                  </div>
                  <div className="font-mono text-[10px] text-violet-400 uppercase tracking-widest mb-2">
                    {a.year}
                  </div>
                  <h3 className="font-display text-lg font-semibold text-slate-100 mb-2 leading-snug">
                    {a.title}
                  </h3>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    {a.subtitle}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
