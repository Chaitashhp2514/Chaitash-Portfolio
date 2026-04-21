import React, { useState } from "react";
import axios from "axios";
import { personalInfo } from "../mock";
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter, Loader2 } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { toast } from "../hooks/use-toast";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast({ title: "Missing fields", description: "Please fill in your name, email, and message.", variant: "destructive" });
      return;
    }
    setSubmitting(true);
    try {
      await axios.post(`${API}/contact`, {
        name: form.name.trim(),
        email: form.email.trim(),
        subject: form.subject.trim(),
        message: form.message.trim()
      });
      toast({ title: "Message sent!", description: "Thanks for reaching out — I'll reply within 24 hours." });
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch (err) {
      const msg = err?.response?.data?.detail || "Something went wrong. Please try again or email me directly.";
      toast({ title: "Couldn't send message", description: String(msg), variant: "destructive" });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative py-28 bg-[#131025]/40">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="mb-14 text-center">
          <div className="flex items-center justify-center mb-4">
            <span className="kicker-line" />
            <span className="font-mono text-xs text-amber-500 tracking-[0.3em] uppercase">
              07 — Contact
            </span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-slate-100 leading-tight mb-4">
            Let's build something <span className="text-amber-400">remarkable</span>.
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            Whether you have a role, a project, or just a curious question — my inbox is always open.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-10">
          {/* Contact info */}
          <div className="lg:col-span-5 space-y-4">
            <a
              href={`mailto:${personalInfo.email}`}
              className="glass rounded-xl p-5 flex items-center gap-4 hover-lift block"
            >
              <div className="w-12 h-12 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center">
                <Mail className="w-5 h-5 text-amber-400" />
              </div>
              <div>
                <div className="text-xs font-mono text-slate-500 uppercase tracking-wider mb-0.5">Email</div>
                <div className="text-slate-100 font-medium">{personalInfo.email}</div>
              </div>
            </a>
            <a
              href={`tel:${personalInfo.phone}`}
              className="glass rounded-xl p-5 flex items-center gap-4 hover-lift block"
            >
              <div className="w-12 h-12 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center">
                <Phone className="w-5 h-5 text-amber-400" />
              </div>
              <div>
                <div className="text-xs font-mono text-slate-500 uppercase tracking-wider mb-0.5">Phone</div>
                <div className="text-slate-100 font-medium">{personalInfo.phone}</div>
              </div>
            </a>
            <div className="glass rounded-xl p-5 flex items-center gap-4">
              <div className="w-12 h-12 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center">
                <MapPin className="w-5 h-5 text-amber-400" />
              </div>
              <div>
                <div className="text-xs font-mono text-slate-500 uppercase tracking-wider mb-0.5">Location</div>
                <div className="text-slate-100 font-medium">{personalInfo.location}</div>
              </div>
            </div>

            <div className="pt-4">
              <div className="text-xs font-mono text-slate-500 uppercase tracking-wider mb-3">Find me on</div>
              <div className="flex gap-3">
                {[
                  { href: personalInfo.socials.github, Icon: Github, label: "GitHub" },
                  { href: personalInfo.socials.linkedin, Icon: Linkedin, label: "LinkedIn" },
                  { href: personalInfo.socials.twitter, Icon: Twitter, label: "Twitter" }
                ].map(({ href, Icon, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={label}
                    className="w-11 h-11 rounded-lg glass flex items-center justify-center text-slate-400 hover:text-amber-400 hover:border-amber-500/40 transition-all"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="lg:col-span-7 glass rounded-2xl p-6 sm:p-8 space-y-5"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">
                  Name
                </label>
                <Input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your full name"
                  className="bg-[#09090f]/60 border-white/10 text-slate-100 placeholder:text-slate-500 h-11 focus-visible:ring-amber-500 focus-visible:border-amber-500/50"
                />
              </div>
              <div>
                <label className="block text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">
                  Email
                </label>
                <Input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="you@company.com"
                  className="bg-[#09090f]/60 border-white/10 text-slate-100 placeholder:text-slate-500 h-11 focus-visible:ring-amber-500 focus-visible:border-amber-500/50"
                />
              </div>
            </div>
            <div>
              <label className="block text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">
                Subject
              </label>
              <Input
                name="subject"
                value={form.subject}
                onChange={handleChange}
                placeholder="What's this about?"
                className="bg-[#09090f]/60 border-white/10 text-slate-100 placeholder:text-slate-500 h-11 focus-visible:ring-amber-500 focus-visible:border-amber-500/50"
              />
            </div>
            <div>
              <label className="block text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">
                Message
              </label>
              <Textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Tell me a bit about your project, timeline, and what you're looking for..."
                rows={6}
                className="bg-[#09090f]/60 border-white/10 text-slate-100 placeholder:text-slate-500 focus-visible:ring-amber-500 focus-visible:border-amber-500/50 resize-none"
              />
            </div>
            <Button
              type="submit"
              disabled={submitting}
              className="w-full sm:w-auto group bg-amber-500 hover:bg-amber-400 text-[#09090f] font-semibold h-12 px-8 rounded-md shadow-lg shadow-amber-500/20 hover:shadow-amber-500/40 transition-all disabled:opacity-70"
            >
              {submitting ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  Send message
                  <Send className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
