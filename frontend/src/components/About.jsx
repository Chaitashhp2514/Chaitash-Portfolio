import React from "react";
import { personalInfo, aboutHighlights } from "../mock";
import { Zap, Code, Layers, Users } from "lucide-react";

const iconMap = [Zap, Code, Layers, Users];

const About = () => {
  return (
    <section id="about" className="relative py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="mb-16">
          <div className="flex items-center mb-4">
            <span className="kicker-line" />
            <span className="font-mono text-xs text-amber-500 tracking-[0.3em] uppercase">
              01 — About
            </span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-slate-100 max-w-3xl leading-tight">
            A computer engineer with a{" "}
            <span className="text-amber-400">builder's soul</span>.
          </h2>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Image column */}
          <div className="lg:col-span-5 relative">
            <div className="relative group">
              <div className="absolute -inset-3 bg-amber-500/20 rounded-2xl blur-2xl opacity-60 group-hover:opacity-90 transition-opacity" />
              <div className="relative rounded-2xl overflow-hidden border border-amber-500/20">
                <img
                  src="https://images.unsplash.com/photo-1719400471588-575b23e27bd7?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1NzV8MHwxfHNlYXJjaHwyfHxkZXZlbG9wZXIlMjB3b3Jrc3BhY2V8ZW58MHx8fHwxNzc2NzgyMjY5fDA&ixlib=rb-4.1.0&q=85"
                  alt="Chaitash at his developer workspace"
                  className="w-full aspect-[4/5] object-cover group-hover:scale-[1.02] transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#09090f] via-transparent to-transparent" />
              </div>
              {/* Decorative code tag */}
              <div className="absolute -right-4 top-6 glass rounded-lg px-3 py-2 font-mono text-[11px] text-amber-300 hidden sm:block">
                {"< engineer />"}
              </div>
            </div>
          </div>

          {/* Content column */}
          <div className="lg:col-span-7">
            <div className="space-y-5 text-slate-300 text-[15px] lg:text-base leading-relaxed">
              <p>{personalInfo.bio}</p>
              <p>
                I began with a fascination for how computers talk to each other, and
                that curiosity has since taken me across{" "}
                <span className="text-amber-400 font-medium">fintech</span>,{" "}
                <span className="text-amber-400 font-medium">healthcare IoT</span>, and{" "}
                <span className="text-amber-400 font-medium">AI tooling</span>.
                Today I enjoy leading small engineering teams through zero-to-one
                builds — the kind where architecture decisions stick around for
                years.
              </p>
              <p>
                When I'm not shipping code, I'm writing technical essays, training
                for marathons, or losing at chess to strangers on the internet.
              </p>
            </div>

            {/* Highlights grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-10">
              {aboutHighlights.map((h, i) => {
                const Icon = iconMap[i % iconMap.length];
                return (
                  <div
                    key={h.label}
                    className="glass rounded-xl p-5 hover-lift"
                  >
                    <Icon className="w-5 h-5 text-amber-400 mb-3" />
                    <div className="font-display font-bold text-2xl text-slate-100">
                      {h.value}
                    </div>
                    <div className="text-xs text-slate-400 mt-1">{h.label}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
