import React from "react";
import { ArrowRight, Download, Github, Linkedin, Twitter, MapPin, Sparkles } from "lucide-react";
import { personalInfo } from "../mock";
import { Button } from "./ui/button";

const Hero = () => {
  const scrollTo = (id) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="top"
      className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden grain"
    >
      {/* Ambient background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-[#09090f] via-[#0e0b1c] to-[#09090f]" />
        <div className="absolute top-1/4 -left-40 w-[520px] h-[520px] rounded-full bg-violet-500/15 blur-[120px]" />
        <div className="absolute bottom-10 right-0 w-[480px] h-[480px] rounded-full bg-fuchsia-500/10 blur-[120px]" />
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(167,139,250,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(167,139,250,0.5) 1px, transparent 1px)",
            backgroundSize: "60px 60px"
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10 w-full">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left content */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-violet-400/25 bg-violet-500/10 mb-8 animate-fade-up">
              <span className="relative flex w-2 h-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75 animate-ping" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-violet-400" />
              </span>
              <span className="text-xs font-medium text-violet-200 tracking-wide">
                {personalInfo.availability}
              </span>
            </div>

            <p className="font-mono text-violet-400 text-sm mb-5 animate-fade-up delay-100">
              Hi, my name is
            </p>
            <h1 className="font-display font-bold text-5xl sm:text-6xl lg:text-7xl text-slate-100 leading-[1.05] mb-5 animate-fade-up delay-200">
              {personalInfo.firstName}{" "}
              <span className="relative inline-block">
                {personalInfo.lastName}
                <span className="absolute -bottom-1 left-0 right-0 h-[6px] bg-violet-500/30 rounded-full -z-10" />
              </span>
              <span className="text-violet-400">.</span>
            </h1>
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl text-slate-400 font-light mb-6 animate-fade-up delay-300">
              I build software that{" "}
              <span className="text-slate-100 font-medium">feels inevitable</span>.
            </h2>
            <p className="text-slate-400 text-base lg:text-lg leading-relaxed max-w-2xl mb-8 animate-fade-up delay-400">
              {personalInfo.tagline}
            </p>

            <div className="flex flex-wrap items-center gap-4 mb-10 animate-fade-up delay-500">
              <Button
                onClick={() => scrollTo("#projects")}
                className="group bg-violet-500 hover:bg-violet-400 text-white font-semibold h-12 px-6 rounded-md shadow-lg shadow-violet-500/30 hover:shadow-violet-400/50 transition-all"
              >
                View my work
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <a
                href={personalInfo.resumeUrl}
                target="_blank"
                rel="noreferrer"
                download
                className="inline-flex items-center h-12 px-6 rounded-md border border-slate-600/70 hover:bg-violet-500/10 hover:border-violet-400/60 text-slate-200 hover:text-violet-200 font-semibold transition-all"
              >
                <Download className="w-4 h-4 mr-2" />
                Download resume
              </a>
            </div>

            <div className="flex items-center gap-5 text-slate-500 animate-fade-up delay-500">
              <a href={personalInfo.socials.github} target="_blank" rel="noreferrer" className="hover:text-violet-300 transition-colors" aria-label="GitHub">
                <Github className="w-5 h-5" />
              </a>
              <a href={personalInfo.socials.linkedin} target="_blank" rel="noreferrer" className="hover:text-violet-300 transition-colors" aria-label="LinkedIn">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href={personalInfo.socials.twitter} target="_blank" rel="noreferrer" className="hover:text-violet-300 transition-colors" aria-label="Twitter">
                <Twitter className="w-5 h-5" />
              </a>
              <div className="h-4 w-px bg-slate-700" />
              <div className="flex items-center gap-1.5 text-sm">
                <MapPin className="w-4 h-4" />
                <span>{personalInfo.location}</span>
              </div>
            </div>
          </div>

          {/* Right visual - Duotone portrait with hand-drawn doodles */}
          <div className="lg:col-span-5 animate-fade-in delay-300">
            <div className="relative w-full max-w-md mx-auto">
              {/* Background SVG doodles - behind photo */}
              <svg
                viewBox="0 0 480 560"
                className="absolute -inset-6 w-[calc(100%+3rem)] h-[calc(100%+3rem)] pointer-events-none"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Dashed circle rotating */}
                <g className="animate-spin-slow" style={{ transformOrigin: "240px 280px" }}>
                  <circle cx="240" cy="280" r="230" stroke="#a78bfa" strokeWidth="1.5" strokeDasharray="4 10" opacity="0.35" />
                </g>
                {/* Top-left squiggle */}
                <path
                  d="M30 80 Q 55 55, 80 80 T 130 80 T 180 80"
                  stroke="#c4b5fd"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  className="animate-draw"
                />
                {/* Arrow pointing at photo */}
                <g className="animate-fade-in delay-700">
                  <path d="M380 70 Q 400 100, 385 140" stroke="#a78bfa" strokeWidth="2.5" strokeLinecap="round" fill="none" />
                  <path d="M378 130 L 385 142 L 395 132" stroke="#a78bfa" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                </g>
                {/* Zigzag bottom-right */}
                <path
                  d="M360 490 L 380 475 L 400 495 L 420 475 L 440 495"
                  stroke="#f472b6"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="animate-draw delay-300"
                />
                {/* Sparkle stars */}
                <g className="animate-twinkle">
                  <path d="M45 320 L 50 310 L 55 320 L 65 325 L 55 330 L 50 340 L 45 330 L 35 325 Z" fill="#fbbf24" opacity="0.9" />
                </g>
                <g className="animate-twinkle" style={{ animationDelay: "0.8s" }}>
                  <path d="M430 220 L 434 213 L 438 220 L 445 224 L 438 228 L 434 235 L 430 228 L 423 224 Z" fill="#c4b5fd" />
                </g>
                <g className="animate-twinkle" style={{ animationDelay: "1.4s" }}>
                  <path d="M60 510 L 64 503 L 68 510 L 75 514 L 68 518 L 64 525 L 60 518 L 53 514 Z" fill="#f472b6" />
                </g>
                {/* Small circles scatter */}
                <circle cx="410" cy="410" r="6" fill="none" stroke="#a78bfa" strokeWidth="2" />
                <circle cx="35" cy="200" r="4" fill="#a78bfa" opacity="0.7" />
                <circle cx="445" cy="310" r="3" fill="#fbbf24" />
                {/* Underline scribble */}
                <path
                  d="M130 525 Q 180 515, 230 525 T 330 525"
                  stroke="#a78bfa"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  fill="none"
                  className="animate-draw delay-500"
                />
              </svg>

              {/* Photo with duotone effect */}
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-tr from-violet-500/40 via-fuchsia-500/20 to-transparent rounded-[2rem] blur-2xl" />
                <div className="relative rounded-[1.75rem] overflow-hidden border-2 border-violet-400/30 shadow-2xl shadow-violet-900/50 duotone-wrap">
                  <img
                    src={personalInfo.photoUrl}
                    alt={personalInfo.name}
                    className="w-full aspect-[4/5] object-cover duotone"
                  />
                </div>

                {/* Hand-written label near photo */}
                <div className="absolute -top-3 -left-4 rotate-[-8deg] animate-wiggle">
                  <span className="font-hand text-2xl text-violet-300 drop-shadow-lg">that's me!</span>
                </div>

                {/* Floating badge */}
                <div className="absolute -bottom-5 -right-4 glass rounded-xl px-4 py-3 flex items-center gap-3 animate-float shadow-xl">
                  <div className="w-10 h-10 rounded-lg bg-violet-500/20 flex items-center justify-center">
                    <Sparkles className="w-5 h-5 text-violet-300" />
                  </div>
                  <div>
                    <div className="text-[11px] text-slate-400 font-mono uppercase tracking-wider">
                      Currently
                    </div>
                    <div className="font-semibold text-slate-100 text-sm">
                     Business Development Executive ⚡
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
