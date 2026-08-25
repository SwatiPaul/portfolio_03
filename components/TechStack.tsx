"use client";

import Reveal from "./Reveal";
import { techStacks } from "@/data/portfolio";

const stackGroups = [
  { label: "Languages", items: techStacks.languages },
  { label: "Frameworks", items: techStacks.frameworks },
  { label: "Styling", items: techStacks.styling },
  { label: "Tools", items: techStacks.tools },
  { label: "DevOps", items: techStacks.devops },
];

export default function TechStack() {
  return (
    <section id="tech-stack" className="section-padding relative border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto">
        <Reveal className="mb-12 md:mb-16 lg:mb-20">
          <p className="label-sm mb-4">Technologies</p>
          <h2 className="heading-lg mb-4 md:mb-6">Tech Stack</h2>
          <p className="text-brand-muted/80 max-w-2xl leading-relaxed font-light text-sm md:text-base">
            The tools and technologies I use to build fast, scalable, and polished web experiences.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="glass-card p-6 sm:p-8 md:p-10">
            <ul className="space-y-0 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-10 lg:gap-x-16">
              {stackGroups.map((group) => (
                <li
                  key={group.label}
                  className="border-b border-white/[0.06] py-5 md:py-6 last:border-b-0"
                >
                  <p className="font-medium text-sm mb-2">{group.label}</p>
                  <p className="text-brand-muted/60 text-sm font-light leading-relaxed break-words">
                    {group.items.join(" · ")}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
