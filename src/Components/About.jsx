import React from "react";
import { motion } from "framer-motion";
import {
  FiShield,
  FiCode,
  FiCpu,
  FiZap,
  FiCheck,
  FiTerminal,
  FiLock,
  FiLayers,
} from "react-icons/fi";

const About = () => {
  const stats = [
    { label: "Core Stack", value: "MERN", detail: "MongoDB, Express, React, Node" },
    { label: "Security", value: "OWASP Top 10", detail: "JWT, Auth, Input Sanitization" },
    { label: "AI & Tools", value: "Prompt Eng.", detail: "LLM Workflows & Automation" },
    { label: "Architecture", value: "REST & Micro", detail: "Scalable API Ecosystems" },
  ];

  const highlights = [
    "Full-Stack Development using MongoDB, Express.js, React 19, and Node.js.",
    "Cyber Security practices including secure authentication, password hashing, and vulnerability defense.",
    "Prompt Engineering to leverage LLM capabilities into real-world applications.",
    "Clean, maintainable code structures with modern UI/UX aesthetics and GSAP animations.",
  ];

  return (
    <section
      id="about"
      className="relative py-28 px-6 lg:px-12 bg-slate-100/70 dark:bg-[#0c0c0e] transition-colors duration-300 border-y border-black/5 dark:border-white/5"
    >
      {/* Background Dots Pattern */}
      <div className="absolute inset-0 bg-dots-pattern opacity-40 pointer-events-none" />

      <div className="relative mx-auto max-w-7xl z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-black/10 dark:border-white/15 bg-white/80 dark:bg-white/5 backdrop-blur-md mb-4"
          >
            <FiTerminal className="h-3.5 w-3.5 text-black dark:text-white" />
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-neutral-800 dark:text-neutral-200">
              BACKGROUND & PHILOSOPHY
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 180, damping: 18, delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-950 dark:text-white"
          >
            Crafting Digital Experiences <br />
            <span className="text-neutral-500 dark:text-neutral-400 font-normal">
              with Precision & Security.
            </span>
          </motion.h2>
        </div>

        {/* Grid Layout: Stats & Bio */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Bio Box */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 160, damping: 18 }}
            className="lg:col-span-7 flex flex-col justify-between rounded-3xl border border-black/10 dark:border-white/10 bg-white/80 dark:bg-[#121216]/80 p-8 sm:p-10 shadow-xl backdrop-blur-xl"
          >
            <div>
              <h3 className="text-2xl font-bold text-black dark:text-white tracking-tight mb-4">
                Who I Am
              </h3>
              <p className="text-base sm:text-lg leading-relaxed text-neutral-600 dark:text-neutral-300 mb-6">
                I am a passionate software developer specializing in full-stack web applications built on the <strong className="text-black dark:text-white">MERN Stack</strong>. My approach combines robust backend API architecture with fluid, responsive user interfaces.
              </p>
              <p className="text-base sm:text-lg leading-relaxed text-neutral-600 dark:text-neutral-300 mb-8">
                Beyond full-stack development, I actively study <strong className="text-black dark:text-white">Cyber Security</strong> principles to ensure that every line of code is resilient against common web vulnerabilities, while utilizing <strong className="text-black dark:text-white">Prompt Engineering</strong> to craft next-generation AI integrations.
              </p>
            </div>

            {/* Highlights list */}
            <div className="space-y-3.5 pt-6 border-t border-black/10 dark:border-white/10">
              {highlights.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-black text-white dark:bg-white dark:text-black">
                    <FiCheck className="h-3.5 w-3.5" />
                  </div>
                  <span className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Stats Cards Box */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {stats.map((stat, idx) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 180, damping: 18, delay: idx * 0.1 }}
                whileHover={{ y: -4, scale: 1.02 }}
                className="flex flex-col justify-between rounded-3xl border border-black/10 dark:border-white/10 bg-white/80 dark:bg-[#121216]/80 p-6 shadow-lg backdrop-blur-xl transition-all"
              >
                <div>
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-black/5 dark:bg-white/10 text-black dark:text-white mb-4">
                    {idx === 0 && <FiLayers className="h-5 w-5" />}
                    {idx === 1 && <FiLock className="h-5 w-5" />}
                    {idx === 2 && <FiCpu className="h-5 w-5" />}
                    {idx === 3 && <FiZap className="h-5 w-5" />}
                  </div>
                  <span className="font-mono text-xs uppercase tracking-widest text-neutral-400 dark:text-neutral-500">
                    {stat.label}
                  </span>
                  <h4 className="mt-1 text-xl font-extrabold text-black dark:text-white tracking-tight">
                    {stat.value}
                  </h4>
                </div>
                <p className="mt-4 text-xs font-mono text-neutral-600 dark:text-neutral-400">
                  {stat.detail}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
