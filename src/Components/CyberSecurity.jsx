import React from "react";
import { motion } from "framer-motion";
import {
  FiShield,
  FiCpu,
  FiLock,
  FiTerminal,
  FiCode,
  FiCheckCircle,
  FiKey,
  FiSlash,
  FiSliders,
} from "react-icons/fi";

const CyberSecurity = () => {
  const securityPillars = [
    {
      icon: FiLock,
      title: "Authentication & Authorization",
      desc: "Implementing JWT tokens, HTTP-only cookie storage, session invalidation, and role-based access control (RBAC).",
    },
    {
      icon: FiSlash,
      title: "Injection & XSS Sanitization",
      desc: "Thorough input escaping, dynamic query parameterization in MongoDB/Mongoose, and script payload stripping.",
    },
    {
      icon: FiKey,
      title: "Password Hashing & Encryption",
      desc: "Utilizing Bcrypt algorithm with salt rounds for secure password storage and HTTPS TLS transmission standards.",
    },
    {
      icon: FiShield,
      title: "API Vulnerability Shielding",
      desc: "Express middleware setup for CORS policies, Helmet HTTP security headers, and IP rate-limiting defenses.",
    },
  ];

  const aiCapabilities = [
    {
      icon: FiSliders,
      title: "System Prompt Architecture",
      desc: "Formulating deterministic AI persona instructions, few-shot prompt framing, and context window optimization.",
    },
    {
      icon: FiCode,
      title: "Structured JSON Output Parsing",
      desc: "Guaranteeing reliable schema outputs from LLMs for seamless frontend rendering and automated data parsing.",
    },
    {
      icon: FiCpu,
      title: "AI Agent Orchestration",
      desc: "Designing multi-step tool-calling workflows and automated assistant agents for complex developer tasks.",
    },
  ];

  return (
    <section
      id="security"
      className="relative py-28 px-6 lg:px-12 bg-slate-50 dark:bg-[#08080a] transition-colors duration-300"
    >
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-50 pointer-events-none" />

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
            <FiShield className="h-3.5 w-3.5 text-black dark:text-white" />
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-neutral-800 dark:text-neutral-200">
              SPECIALIZED DISCIPLINES
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 180, damping: 18, delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-950 dark:text-white"
          >
            Cyber Security & AI Engineering
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 180, damping: 18, delay: 0.2 }}
            className="mt-3 text-base sm:text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl"
          >
            Combining modern full-stack development with defensive cyber practices and intelligent AI system prompts.
          </motion.p>
        </div>

        {/* Cyber Security Section */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-black text-white dark:bg-white dark:text-black">
              <FiShield className="h-5 w-5" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-black dark:text-white tracking-tight">
                Cyber Security Defenses
              </h3>
              <p className="text-xs font-mono text-neutral-500 dark:text-neutral-400">
                PROACTIVE DEFENSIVE WEB ENGINEERING
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {securityPillars.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", stiffness: 180, damping: 18, delay: idx * 0.08 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="rounded-3xl border border-black/10 dark:border-white/10 bg-white/80 dark:bg-[#121216]/80 p-6 shadow-lg backdrop-blur-xl transition-all"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-black/5 dark:bg-white/10 text-black dark:text-white mb-4">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h4 className="text-lg font-bold text-black dark:text-white tracking-tight mb-2">
                    {item.title}
                  </h4>
                  <p className="text-xs leading-relaxed text-neutral-600 dark:text-neutral-400">
                    {item.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* AI & Prompt Engineering Section */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-black text-white dark:bg-white dark:text-black">
              <FiCpu className="h-5 w-5" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-black dark:text-white tracking-tight">
                Prompt Engineering & AI Integration
              </h3>
              <p className="text-xs font-mono text-neutral-500 dark:text-neutral-400">
                NEXT-GENERATION ARTIFICIAL INTELLIGENCE
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {aiCapabilities.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", stiffness: 180, damping: 18, delay: idx * 0.1 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="rounded-3xl border border-black/10 dark:border-white/10 bg-white/80 dark:bg-[#121216]/80 p-7 shadow-lg backdrop-blur-xl transition-all"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-black/5 dark:bg-white/10 text-black dark:text-white mb-4">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h4 className="text-lg font-bold text-black dark:text-white tracking-tight mb-2">
                    {item.title}
                  </h4>
                  <p className="text-xs leading-relaxed text-neutral-600 dark:text-neutral-400">
                    {item.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};

export default CyberSecurity;
