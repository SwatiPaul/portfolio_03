"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Reveal from "./Reveal";
import { projects } from "@/data/portfolio";

function ProjectCard({
  project,
  expanded,
  onToggle,
}: {
  project: (typeof projects)[0];
  expanded: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border-t border-white/[0.08] last:border-b">
      <button
        onClick={onToggle}
        className="w-full text-left py-6 sm:py-8 md:py-12 flex items-start justify-between gap-4 sm:gap-6 group"
      >
        <div className="flex-1 min-w-0">
          <p className="label-sm mb-2 sm:mb-3">{project.subtitle}</p>
          <h3 className="heading-md mb-2 sm:mb-3 group-hover:text-white/90 transition-colors duration-500">
            {project.title}
          </h3>
          <p className="text-brand-muted/70 font-light leading-relaxed text-sm sm:text-base">
            {project.description}
          </p>
        </div>
        <span className="text-lg sm:text-xl text-white/30 flex-shrink-0 mt-1 sm:mt-2 transition-transform duration-500 group-hover:text-white/50">
          {expanded ? "−" : "+"}
        </span>
      </button>

      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="overflow-hidden"
          >
            <div className="pb-8 sm:pb-10 md:pb-14 grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-center">
              <div className="relative aspect-[16/10] rounded-xl overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div>
                <p className="text-white/75 leading-relaxed mb-6 font-light">{project.result}</p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1.5 text-[0.65rem] uppercase tracking-wider rounded-full border border-white/15 text-brand-muted/80"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline text-[0.65rem]"
                >
                  Learn more
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Projects() {
  const [expanded, setExpanded] = useState<string | null>(projects[0]?.id ?? null);

  return (
    <section id="projects" className="section-padding relative">
      <div className="max-w-7xl mx-auto">
        <Reveal className="mb-12 md:mb-16 lg:mb-24">
          <h2 className="heading-lg">Projects</h2>
        </Reveal>

        <div>
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              expanded={expanded === project.id}
              onToggle={() => setExpanded(expanded === project.id ? null : project.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
