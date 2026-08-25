"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import { siteConfig } from "@/data/portfolio";

const HeroScene = dynamic(() => import("./HeroScene"), {
  ssr: false,
  loading: () => (
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_40%,rgba(124,107,184,0.15),#0e0b0d_70%)]" />
  ),
});

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % siteConfig.roles.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-brand-dark"
    >
      {/* <HeroScene /> */}

      <div className="relative z-10 w-full max-w-5xl mx-auto px-5 sm:px-6 md:px-12 text-center">
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="label-sm mb-8"
        >
          Enough with average
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.5, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="heading-xl mb-8"
        >
          Your Frontend Can Do More
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="text-brand-muted/80 text-base md:text-lg max-w-xl mx-auto mb-6 leading-relaxed font-light"
        >
          {siteConfig.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="h-7 mb-12 overflow-hidden"
        >
          <motion.span
            key={roleIndex}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="text-brand-accent/90 text-sm md:text-base font-medium tracking-wide"
          >
            {siteConfig.roles[roleIndex]}
          </motion.span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.1, ease: [0.21, 0.47, 0.32, 0.98] }}
        >
          <a href="#contact" className="btn-primary">
            Start Project
          </a>
        </motion.div>
      </div>

      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 1 }}
        onClick={() =>
          document.getElementById("testimonials")?.scrollIntoView({ behavior: "smooth" })
        }
        className="absolute bottom-8 sm:bottom-10 left-5 sm:left-6 md:left-12 label-sm hover:text-white transition-colors duration-500 cursor-pointer lowercase"
      >
        scroll to explore
      </motion.button>
    </section>
  );
}
