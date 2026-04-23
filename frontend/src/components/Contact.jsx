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

                ))}
              </div>
            </div>
          </div>

         
    </section>
  );
};

export default Contact;
