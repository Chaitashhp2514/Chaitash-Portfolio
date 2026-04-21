import React, { useState } from "react";
import { projects } from "../mock";
import { ExternalLink, Github, Star } from "lucide-react";

const filters = ["All", "Featured"];

const Projects = () => {
  const [filter, setFilter] = useState("All");

  const visible = projects.filter((p) =>
    filter === "All" ? true : p.featured
  );

  return (
    <section id="projects" className="relative py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="mb-14 flex flex-wrap items-end justify-between gap-6">
          <div>
            <div className="flex items-center mb-4">
              <span className="kicker-line" />
              <span className="font-mono text-xs text-amber-500 tracking-[0.3em] uppercase">
                03 — Selected work
              </span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-slate-100 leading-tight">
              Things I've <span className="text-amber-400">built</span>.
            </h2>
          </div>
          <div className="inline-flex p-1 rounded-lg glass">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all ring-amber-focus ${
                  filter === f
                    ? "bg-amber-500 text-[#09090f]"
                    : "text-slate-300 hover:text-white"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
          {visible.map((p, i) => (
            <article
              key={p.id}
              className="group relative glass rounded-2xl overflow-hidden hover-lift animate-fade-up"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#09090f] via-[#09090f]/30 to-transparent" />
                {p.featured && (
                  <div className="absolute top-3 left-3 inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-amber-500/95 text-[10px] font-semibold uppercase tracking-wider text-[#09090f]">
                    <Star className="w-3 h-3" />
                    Featured
                  </div>
                )}
              </div>

              {/* Body */}
              <div className="p-6">
                <div className="font-mono text-[10px] text-amber-500 uppercase tracking-widest mb-2">
                  {p.category}
                </div>
                <h3 className="font-display text-xl font-semibold text-slate-100 mb-2 group-hover:text-amber-400 transition-colors">
                  {p.title}
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed mb-5 line-clamp-3">
                  {p.description}
                </p>
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="font-mono text-[10px] px-2 py-1 rounded-md bg-[#09090f]/60 border border-white/5 text-slate-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-4 pt-4 border-t border-white/5">
                  <a
                    href={p.links.code}
                    className="inline-flex items-center gap-1.5 text-sm text-slate-400 hover:text-amber-400 transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    Code
                  </a>
                  <a
                    href={p.links.demo}
                    className="inline-flex items-center gap-1.5 text-sm text-slate-400 hover:text-amber-400 transition-colors ml-auto"
                  >
                    Live demo
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
