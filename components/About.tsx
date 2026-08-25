"use client";

import Image from "next/image";
import Reveal from "./Reveal";
import { siteConfig, education, certifications } from "@/data/portfolio";

export default function About() {
  return (
    <section id="about" className="section-padding relative border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-16 xl:gap-24 items-start">
          <Reveal className="relative lg:sticky lg:top-32">
            <div className="relative aspect-[4/5] max-w-md mx-auto lg:mx-0 rounded-2xl overflow-hidden">
              <Image
                src="/img/img_1.jpeg"
                alt={siteConfig.name}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 400px"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/50 to-transparent" />
            </div>
          </Reveal>

          <div>
            <Reveal>
              <h2 className="heading-lg mb-1">Meet the person</h2>
              <h2 className="heading-lg mb-10 text-brand-muted/50">behind the code</h2>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="text-base sm:text-lg mb-5 sm:mb-6 font-light leading-relaxed">
                Hey, my name is{" "}
                <span className="text-white font-normal">{siteConfig.name}</span>,{" "}
                {siteConfig.title.toLowerCase()} from {siteConfig.location}. I create
                high-end web experiences for brands and businesses.
              </p>
              <p className="text-brand-muted/80 leading-relaxed mb-6 font-light">
                {siteConfig.careerSummary}
              </p>
              <p className="text-brand-muted/80 leading-relaxed mb-10 font-light">
                {siteConfig.summary}
              </p>
            </Reveal>

            <Reveal delay={0.15} className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 mb-8 sm:mb-10 text-sm">
              {[
                { label: "Email", value: siteConfig.email, href: `mailto:${siteConfig.email}` },
                { label: "Phone", value: siteConfig.phone, href: `tel:${siteConfig.phone}` },
                { label: "Location", value: "Baghbazar, Kolkata" },
                { label: "Portfolio", value: "devswatiportfolio.netlify.app", href: siteConfig.portfolio },
              ].map((item) => (
                <div key={item.label}>
                  <p className="label-sm mb-1">{item.label}</p>
                  {item.href ? (
                    <a href={item.href} className="font-light break-all hover:text-brand-accent transition-colors duration-500">
                      {item.value}
                    </a>
                  ) : (
                    <p className="font-light">{item.value}</p>
                  )}
                </div>
              ))}
            </Reveal>

            <Reveal delay={0.2}>
              <a href={siteConfig.resume} download className="btn-primary">
                Download CV
              </a>
            </Reveal>
          </div>
        </div>

        <div className="mt-16 sm:mt-24 md:mt-32 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          <Reveal>
            <h3 className="heading-md mb-8">Education</h3>
            <div className="space-y-8">
              {education.map((item) => (
                <div key={item.institution} className="border-l border-brand-accent/30 pl-6">
                  <p className="text-brand-muted/60 text-sm font-light mb-1">{item.period}</p>
                  <h4 className="font-medium">{item.institution}</h4>
                  <p className="text-brand-muted/70 text-sm font-light">{item.degree}</p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <h3 className="heading-md mb-8">Certifications</h3>
            <div className="space-y-6">
              {certifications.map((cert) => (
                <div key={cert.name} className="border-l border-white/15 pl-6">
                  <h4 className="font-medium text-sm">{cert.name}</h4>
                  <p className="text-brand-muted/60 text-sm font-light">
                    {cert.issuer} · {cert.date}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
