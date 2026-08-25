"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Reveal from "./Reveal";
import { faqs } from "@/data/portfolio";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="section-padding relative border-t border-white/[0.06]">
      <div className="max-w-3xl mx-auto">
        <Reveal className="text-center mb-16">
          <h2 className="heading-lg">FAQ</h2>
        </Reveal>

        <div className="divide-y divide-white/[0.08]">
          {faqs.map((faq, index) => (
            <div key={faq.question}>
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full py-5 sm:py-7 flex items-start sm:items-center justify-between gap-4 text-left group"
              >
                <span className="text-sm sm:text-base md:text-lg font-light group-hover:text-white/80 transition-colors duration-500 pr-4 sm:pr-6">
                  {faq.question}
                </span>
                <span className="text-lg text-white/30 flex-shrink-0 transition-transform duration-500">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: [0.21, 0.47, 0.32, 0.98] }}
                    className="overflow-hidden"
                  >
                    <p className="pb-7 text-brand-muted/70 leading-relaxed font-light">{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
