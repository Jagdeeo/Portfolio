import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiDatabase,
  FiServer,
  FiLayout,
  FiCpu,
  FiShield,
  FiTerminal,
  FiCode,
  FiCheckCircle,
  FiLock,
  FiBox,
  FiGlobe,
  FiZap,
} from "react-icons/fi";

const TechStack = () => {
  const [activeTab, setActiveTab] = useState("all");

  const categories = [
    { id: "all", label: "All Stack" },
    { id: "mern", label: "MERN Core" },
    { id: "security", label: "Cyber Security" },
    { id: "ai", label: "AI & Tools" },
  ];

  const technologies = [
    // MERN STACK CORE
    {
      name: "MongoDB",
      category: "mern",
      role: "Database",
      level: "Advanced",
      icon: FiDatabase,
      description: "NoSQL document database, schema modeling with Mongoose, indexing, aggregation pipelines, and cloud Atlas setup.",
      tags: ["NoSQL", "Mongoose", "Atlas", "Aggregation"],
    },
    {
      name: "Express.js",
      category: "mern",
      role: "Backend Framework",
      level: "Advanced",
      icon: FiServer,
      description: "Fast, unopinionated backend framework for Node.js. Building RESTful APIs, custom middleware, and authentication.",
      tags: ["REST API", "Middleware", "Routing", "Auth"],
    },
    {
      name: "React.js",
      category: "mern",
      role: "Frontend Framework",
      level: "Advanced",
      icon: FiLayout,
      description: "Modern component-based UI engineering with React 19, custom hooks, Tailwind CSS, and GSAP spring animations.",
      tags: ["React 19", "Hooks", "Tailwind CSS", "GSAP"],
    },
    {
      name: "Node.js",
      category: "mern",
      role: "Runtime Environment",
      level: "Advanced",
      icon: FiCode,
      description: "Event-driven asynchronous JavaScript runtime for high-concurrency server applications and tooling.",
      tags: ["Async I/O", "Event Loop", "NPM", "ES6+"],
    },

    // CYBER SECURITY
    // {
    //   name: "Web Security & OWASP",
    //   category: "security",
    //   role: "Security Audit",
    //   level: "Intermediate",
    //   icon: FiShield,
    //   description: "Defending web applications against SQL injection, XSS, CSRF, insecure CORS, and session vulnerabilities.",
    //   tags: ["OWASP Top 10", "XSS Prevention", "CORS", "Sanitization"],
    // },
    {
      name: "JWT & Authentication",
      category: "security",
      role: "Identity Management",
      level: "Advanced",
      icon: FiLock,
      description: "Secure user authentication using JSON Web Tokens (JWT), Bcrypt password hashing, and role-based authorization.",
      tags: ["JWT", "Bcrypt", "RBAC", "Sessions"],
    },
    {
      name: "Linux & Network CLI",
      category: "security",
      role: "System Administration",
      level: "Intermediate",
      icon: FiTerminal,
      description: "Bash scripting, network inspection, file permission control, and Linux terminal operations for security auditing.",
      tags: ["Bash", "Linux", "Permissions", "Networking"],
    },

    // AI & TOOLS
    // {
    //   name: "Prompt Engineering",
    //   category: "ai",
    //   role: "AI Orchestration",
    //   level: "Advanced",
    //   icon: FiCpu,
    //   description: "Designing context-aware system prompts, structured outputs, chain-of-thought instructions, and LLM integrations.",
    //   tags: ["LLM Workflows", "System Prompts", "AI Agents"],
    // },
    {
      name: "Git & Version Control",
      category: "ai",
      role: "Development Tooling",
      level: "Advanced",
      icon: FiBox,
      description: "Collaborative Git branching strategies, pull requests, commit hygiene, and repository management.",
      tags: ["Git", "GitHub", "Branching", "CI/CD"],
    },
    {
      name: "Postman & API Testing",
      category: "ai",
      role: "API Testing",
      level: "Advanced",
      icon: FiGlobe,
      description: "Automated API test suites, environment configurations, and endpoint validation for backend microservices.",
      tags: ["Postman", "API Auditing", "HTTP Methods"],
    },
  ];

  const filteredTech = activeTab === "all"
    ? technologies
    : technologies.filter((tech) => tech.category === activeTab);

  return (
    <section
      id="techstack"
      className="relative py-28 px-6 lg:px-12 bg-slate-50 dark:bg-[#08080a] transition-colors duration-300"
    >
      {/* Subtle Grid Background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-50 pointer-events-none" />

      <div className="relative mx-auto max-w-7xl z-10">
        
        {/* Section Title */}
        <div className="flex flex-col items-center text-center mb-14">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-black/10 dark:border-white/15 bg-white/80 dark:bg-white/5 backdrop-blur-md mb-4"
          >
            <FiZap className="h-3.5 w-3.5 text-black dark:text-white" />
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-neutral-800 dark:text-neutral-200">
              TECHNICAL PROFICIENCY
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 180, damping: 18, delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-950 dark:text-white"
          >
            The MERN Stack & Beyond
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 180, damping: 18, delay: 0.2 }}
            className="mt-3 text-base sm:text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl"
          >
            A curated breakdown of technologies, frameworks, and security practices I build with every day.
          </motion.p>
        </div>

{/* Tab Filters */}
<div className="flex justify-center mb-14 w-full px-4">
  <div
    className="
      relative
      w-full max-w-2xl
      p-1.5
      rounded-2xl sm:rounded-full
      border border-black/10 dark:border-white/10
      bg-white/60 dark:bg-neutral-900/60
      backdrop-blur-2xl
      shadow-[0_8px_30px_rgba(0,0,0,0.06)]
      dark:shadow-[0_8px_30px_rgba(0,0,0,0.25)]
    "
  >
    {/* Subtle inner glow */}
    <div className="absolute inset-0 rounded-2xl sm:rounded-full bg-gradient-to-r from-transparent via-black/[0.03] to-transparent dark:via-white/[0.04] pointer-events-none" />

    <div className="relative flex flex-wrap justify-center items-center gap-1.5">
      {categories.map((tab) => {
        const isActive = activeTab === tab.id;

        return (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`
              relative
              px-4 sm:px-6
              py-2.5
              rounded-full
              text-[10px] sm:text-xs
              font-semibold
              uppercase
              tracking-[0.12em]
              whitespace-nowrap
              transition-all
              duration-300
              outline-none
              ${
                isActive
                  ? "text-white dark:text-black"
                  : "text-neutral-500 dark:text-neutral-400 hover:text-black dark:hover:text-white"
              }
            `}
          >
            {/* Active background */}
            {isActive && (
              <motion.div
                layoutId="activePill"
                transition={{
                  type: "spring",
                  stiffness: 400,
                  damping: 28,
                }}
                className="
                  absolute inset-0
                  rounded-full
                  bg-black dark:bg-white
                  shadow-[0_4px_15px_rgba(0,0,0,0.18)]
                  dark:shadow-[0_4px_15px_rgba(255,255,255,0.15)]
                "
              />
            )}

            {/* Hover glow */}
            {!isActive && (
              <span
                className="
                  absolute inset-0
                  rounded-full
                  bg-black/[0.04]
                  dark:bg-white/[0.06]
                  opacity-0
                  transition-opacity
                  duration-300
                  group-hover:opacity-100
                "
              />
            )}

            <span className="relative z-10">
              {tab.label}
            </span>
          </button>
        );
      })}
    </div>
  </div>
</div>
        {/* Technology Cards Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredTech.map((tech) => {
              const Icon = tech.icon;
              return (
                <motion.div
                  key={tech.name}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 200, damping: 20 }}
                  whileHover={{ y: -6, scale: 1.02 }}
                  className="flex flex-col justify-between rounded-3xl border border-black/10 dark:border-white/10 bg-white/80 dark:bg-[#121216]/80 p-7 shadow-lg backdrop-blur-xl transition-shadow hover:shadow-2xl"
                >
                  <div>
                    {/* Top Row: Icon + Level Badge */}
                    <div className="flex items-center justify-between mb-5">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-black text-white dark:bg-white dark:text-black shadow-md">
                        <Icon className="h-6 w-6" />
                      </div>
                      <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-black/5 dark:bg-white/10 font-mono text-[11px] font-semibold text-neutral-700 dark:text-neutral-300 border border-black/10 dark:border-white/10">
                        <FiCheckCircle className="h-3 w-3" />
                        {tech.level}
                      </span>
                    </div>

                    {/* Tech Name & Role */}
                    <h3 className="text-xl font-bold text-black dark:text-white tracking-tight">
                      {tech.name}
                    </h3>
                    <p className="text-xs font-mono uppercase tracking-wider text-neutral-500 dark:text-neutral-400 mt-1 mb-3">
                      {tech.role}
                    </p>

                    {/* Description */}
                    <p className="text-sm leading-relaxed text-neutral-600 dark:text-neutral-300">
                      {tech.description}
                    </p>
                  </div>

                  {/* Skill Tag Pills */}
                  <div className="mt-6 pt-4 border-t border-black/10 dark:border-white/10 flex flex-wrap gap-1.5">
                    {tech.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-lg bg-neutral-200/60 dark:bg-white/5 font-mono text-[10px] text-neutral-800 dark:text-neutral-300"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
};

export default TechStack;
