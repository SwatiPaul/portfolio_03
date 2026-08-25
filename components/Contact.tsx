"use client";

import { useState, FormEvent } from "react";
import Reveal from "./Reveal";
import { siteConfig } from "@/data/portfolio";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    website: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (typeof window !== "undefined") {
      localStorage.setItem("contactForm", JSON.stringify(formData));
    }
    setSubmitted(true);
    setFormData({ name: "", email: "", phone: "", website: "", message: "" });
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="section-padding relative border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto">
        <Reveal className="text-center mb-16 md:mb-20">
          <h2 className="heading-lg mb-6">Tell me about your project</h2>
          <p className="text-brand-muted/80 max-w-xl mx-auto leading-relaxed font-light">
            Ready for the next step? Share your goals and project vision — I&apos;ll get back to you shortly.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 sm:gap-12 lg:gap-16">
          <Reveal className="lg:col-span-2 space-y-6">
            <a
              href={`mailto:${siteConfig.email}`}
              className="block text-lg font-light hover:text-brand-accent transition-colors duration-500"
            >
              {siteConfig.email}
            </a>
            <a
              href={`tel:${siteConfig.phone}`}
              className="block text-brand-muted/70 font-light hover:text-white transition-colors duration-500"
            >
              {siteConfig.phone}
            </a>
            <a
              href={siteConfig.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-brand-muted/70 font-light hover:text-white transition-colors duration-500"
            >
              LinkedIn
            </a>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="label-sm block mb-2">Name</label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-white/[0.03] border border-white/[0.08] rounded-xl px-4 py-3.5 text-white placeholder:text-white/25 focus:outline-none focus:border-brand-accent/40 transition-colors duration-500 font-light"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="label-sm block mb-2">Email *</label>
                  <input
                    id="email"
                    type="email"
                    required
                    placeholder="Your email address"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-white/[0.03] border border-white/[0.08] rounded-xl px-4 py-3.5 text-white placeholder:text-white/25 focus:outline-none focus:border-brand-accent/40 transition-colors duration-500 font-light"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="phone" className="label-sm block mb-2">Phone</label>
                  <input
                    id="phone"
                    type="tel"
                    placeholder="Your phone"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-white/[0.03] border border-white/[0.08] rounded-xl px-4 py-3.5 text-white placeholder:text-white/25 focus:outline-none focus:border-brand-accent/40 transition-colors duration-500 font-light"
                  />
                </div>
                <div>
                  <label htmlFor="website" className="label-sm block mb-2">Your website</label>
                  <input
                    id="website"
                    type="url"
                    placeholder="Your website"
                    value={formData.website}
                    onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                    className="w-full bg-white/[0.03] border border-white/[0.08] rounded-xl px-4 py-3.5 text-white placeholder:text-white/25 focus:outline-none focus:border-brand-accent/40 transition-colors duration-500 font-light"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="label-sm block mb-2">Message</label>
                <textarea
                  id="message"
                  rows={5}
                  placeholder="What would you like to achieve and what are your goals?"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-white/[0.03] border border-white/[0.08] rounded-xl px-4 py-3.5 text-white placeholder:text-white/25 focus:outline-none focus:border-brand-accent/40 transition-colors duration-500 resize-none font-light"
                />
              </div>

              <p className="text-brand-muted/50 text-xs font-light">
                I use your details to answer your request. Based in {siteConfig.location}.
              </p>

              <button type="submit" className="btn-primary w-full sm:w-auto">
                Send message
              </button>

              {submitted && (
                <p className="text-brand-accent/80 text-sm font-light">
                  Thank you for reaching out! I appreciate your message and will get back to you shortly.
                </p>
              )}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
