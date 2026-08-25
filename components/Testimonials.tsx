"use client";

import Reveal from "./Reveal";
import { testimonials } from "@/data/portfolio";

function TestimonialCard({
  quote,
  author,
  company,
}: {
  quote: string;
  author: string;
  company: string;
}) {
  return (
    <div className="flex-shrink-0 w-[min(85vw,380px)] sm:w-[420px] md:w-[480px] glass-card p-6 sm:p-8 md:p-10 mx-2 sm:mx-3">
      <blockquote className="text-base md:text-lg font-light leading-relaxed text-white/90 mb-6">
        &ldquo;{quote}&rdquo;
      </blockquote>
      <div>
        <p className="font-medium text-sm">{author}</p>
        <p className="text-brand-muted/70 text-xs mt-1">{company}</p>
      </div>
    </div>
  );
}

export default function Testimonials() {
  const doubled = [...testimonials, ...testimonials];

  return (
    <section id="testimonials" className="section-padding relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 md:px-12 lg:px-20 mb-12 md:mb-16">
        <Reveal className="text-center">
          <p className="label-sm mb-4">See For Yourself</p>
          <h2 className="heading-lg mb-6">What People Say</h2>
          <p className="text-brand-muted/80 max-w-2xl mx-auto leading-relaxed font-light">
            Real experiences say more than any promise. Discover what colleagues
            and clients think about working with me.
          </p>
        </Reveal>
      </div>

      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-20 md:w-32 bg-gradient-to-r from-brand-dark to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-20 md:w-32 bg-gradient-to-l from-brand-dark to-transparent z-10 pointer-events-none" />

        <div className="overflow-hidden">
          <div className="marquee-track flex w-max">
            {doubled.map((t, i) => (
              <TestimonialCard key={i} {...t} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
