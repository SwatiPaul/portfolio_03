"use client";

import { useState } from "react";
import Reveal from "./Reveal";
import { services } from "@/data/portfolio";

export default function Services() {
  const [selected, setSelected] = useState<Set<string>>(new Set());

  const toggle = (id: string) => {
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  return (
    <section id="services" className="section-padding relative border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto">
        <Reveal className="mb-12 md:mb-16 lg:mb-20">
          <p className="label-sm mb-4">Capabilities</p>
          <h2 className="heading-lg mb-4 md:mb-6">What I Build</h2>
          <p className="text-brand-muted/80 max-w-2xl leading-relaxed font-light text-sm md:text-base">
            Every project is different. Here&apos;s the foundation I bring to every build,
            plus specialized add-ons based on your needs.
          </p>
        </Reveal>

        <div className="grid lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12">
          <Reveal>
            <div className="glass-card p-6 sm:p-8 md:p-10 h-full">
              <h3 className="heading-md mb-2 text-xl md:text-2xl">{services.base.title}</h3>
              <p className="text-brand-muted/70 text-sm mb-6 md:mb-8 font-light">{services.base.subtitle}</p>
              <ul className="space-y-5 md:space-y-6">
                {services.base.features.map((f) => (
                  <li key={f.name} className="border-b border-white/[0.06] pb-5 md:pb-6 last:border-0 last:pb-0">
                    <p className="font-medium text-sm mb-1">{f.name}</p>
                    <p className="text-brand-muted/60 text-sm font-light">{f.desc}</p>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="space-y-3">
              {services.addons.map((addon) => {
                const active = selected.has(addon.id);
                return (
                  <button
                    key={addon.id}
                    onClick={() => toggle(addon.id)}
                    className={`w-full text-left p-4 sm:p-5 md:p-6 rounded-xl border transition-all duration-500 ${
                      active
                        ? "bg-white/[0.06] border-brand-accent/40"
                        : "bg-white/[0.02] border-white/[0.08] hover:border-white/20"
                    }`}
                  >
                    <div className="flex items-start justify-between gap-3 sm:gap-4">
                      <div className="min-w-0">
                        <p className="font-medium text-sm mb-1 capitalize">{addon.name}</p>
                        <p className="text-brand-muted/60 text-sm font-light">{addon.desc}</p>
                      </div>
                      <span
                        className={`w-5 h-5 rounded-full border flex-shrink-0 flex items-center justify-center transition-all duration-500 mt-0.5 ${
                          active ? "bg-brand-accent border-brand-accent" : "border-white/30"
                        }`}
                      >
                        {active && (
                          <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        )}
                      </span>
                    </div>
                  </button>
                );
              })}

              <div className="pt-4 md:pt-6">
                <a href="#contact" className="btn-primary w-full sm:w-auto text-center">
                  Get in touch
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
