import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiGithub,
  FiExternalLink,
  FiFolder,
  FiLayers,
  FiShield,
  FiCpu,
  FiArrowUpRight,
} from "react-icons/fi";

const Projects = () => {
  const [filter, setFilter] = useState("all");

  const projectList = [
    {
      title: "MERN Commerce & Dashboard",
      category: "mern",
      type: "MERN Fullstack",
      description: "Full-stack enterprise e-commerce platform with MongoDB Atlas aggregation pipeline, Express REST API, React 19 frontend, and JWT authentication.",
      tags: ["MongoDB", "Express", "React", "Node.js", "JWT"],
      github: "https://github.com",
      demo: "https://example.com",
      highlights: ["Role-Based Access Control", "Stripe Checkout Integration", "Live Order Tracking"],
    },
    {
      title: "CyberShield Security Middleware",
      category: "security",
      type: "Cyber Security",
      description: "Automated Express.js security scanner and middleware package enforcing XSS sanitization, HTTP rate-limiting, and SQL/NoSQL injection defense.",
      tags: ["Node.js", "Express", "OWASP", "Bcrypt", "Security"],
      github: "https://github.com",
      demo: "https://example.com",
      highlights: ["Custom Rate Limiting", "Payload Inspection", "Security Headers (Helmet)"],
    },
    {
      title: "DevNexus AI Prompt Suite",
      category: "ai",
      type: "AI & Fullstack",
      description: "Intelligent workspace for developers leveraging LLM prompt engineering to generate secure boilerplate code and automated test specifications.",
      tags: ["React 19", "Node.js", "Prompt Engineering", "OpenAI API"],
      github: "https://github.com",
      demo: "https://example.com",
      highlights: ["Structured JSON Output", "Token Cost Estimation", "Code Refactor Agent"],
    },
    {
      title: "TaskNexus Real-time Workspace",
      category: "mern",
      type: "MERN Fullstack",
      description: "Collaborative project management dashboard built with the MERN stack featuring real-time task status sync, dynamic drag-and-drop, and MongoDB indexing.",
      tags: ["MongoDB", "Express", "React", "Node.js", "Tailwind"],
      github: "https://github.com",
      demo: "https://example.com",
      highlights: ["Real-time Sync", "Dark/Light Theme", "Performance Optimized"],
    },
  ];

  const filteredProjects = filter === "all"
    ? projectList
    : projectList.filter((p) => p.category === filter);

  return (
    <section
      id="projects"
      className="relative py-28 px-6 lg:px-12 bg-slate-100/70 dark:bg-[#0c0c0e] transition-colors duration-300 border-y border-black/5 dark:border-white/5"
    >
      {/* Ambient background dots */}
      <div className="absolute inset-0 bg-dots-pattern opacity-40 pointer-events-none" />

      <div className="relative mx-auto max-w-7xl z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-black/10 dark:border-white/15 bg-white/80 dark:bg-white/5 backdrop-blur-md mb-4"
          >
            <FiFolder className="h-3.5 w-3.5 text-black dark:text-white" />
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-neutral-800 dark:text-neutral-200">
              FEATURED PORTFOLIO WORK
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 180, damping: 18, delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-950 dark:text-white"
          >
            Featured MERN & Security Applications
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 180, damping: 18, delay: 0.2 }}
            className="mt-3 text-base sm:text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl"
          >
            Clean code, modular architecture, and security-first engineering built with modern web technologies.
          </motion.p>
        </div>

        {/* Filter Buttons */}
        <div className="flex justify-center mb-12">
          <div className="flex flex-wrap items-center gap-2 p-1.5 rounded-full border border-black/10 dark:border-white/15 bg-white/70 dark:bg-white/5 backdrop-blur-xl shadow-sm">
            {[
              { id: "all", label: "All Works" },
              { id: "mern", label: "MERN Fullstack" },
              { id: "security", label: "Cyber Security" },
              { id: "ai", label: "AI & Tools" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id)}
                className={`relative px-5 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${
                  filter === tab.id
                    ? "text-white dark:text-black"
                    : "text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white"
                }`}
              >
                {filter === tab.id && (
                  <motion.div
                    layoutId="activeProjectPill"
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                    className="absolute inset-0 rounded-full bg-black dark:bg-white"
                  />
                )}
                <span className="relative z-10">{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Project Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ type: "spring", stiffness: 180, damping: 20 }}
                whileHover={{ y: -6 }}
                className="flex flex-col justify-between rounded-3xl border border-black/10 dark:border-white/10 bg-white/80 dark:bg-[#121216]/80 p-8 shadow-xl backdrop-blur-xl transition-all hover:shadow-2xl group"
              >
                <div>
                  {/* Top Bar: Badge & Links */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/5 dark:bg-white/10 font-mono text-xs font-semibold text-neutral-800 dark:text-neutral-200 border border-black/10 dark:border-white/10">
                      {project.category === "security" ? (
                        <FiShield className="h-3.5 w-3.5" />
                      ) : project.category === "ai" ? (
                        <FiCpu className="h-3.5 w-3.5" />
                      ) : (
                        <FiLayers className="h-3.5 w-3.5" />
                      )}
                      {project.type}
                    </span>

                    <div className="flex items-center gap-2">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="flex h-9 w-9 items-center justify-center rounded-full border border-black/10 dark:border-white/15 bg-white dark:bg-white/5 text-black dark:text-white transition-all hover:scale-110"
                        aria-label="GitHub Repository"
                      >
                        <FiGithub className="h-4 w-4" />
                      </a>
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noreferrer"
                        className="flex h-9 w-9 items-center justify-center rounded-full border border-black/10 dark:border-white/15 bg-black text-white dark:bg-white dark:text-black transition-all hover:scale-110"
                        aria-label="Live Demo"
                      >
                        <FiArrowUpRight className="h-4 w-4" />
                      </a>
                    </div>
                  </div>

                  {/* Project Title */}
                  <h3 className="text-2xl font-bold text-black dark:text-white tracking-tight group-hover:underline decoration-black/30 dark:decoration-white/30 underline-offset-4">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-3 text-base leading-relaxed text-neutral-600 dark:text-neutral-300">
                    {project.description}
                  </p>

                  {/* Highlights Bullet List */}
                  <ul className="mt-5 space-y-2">
                    {project.highlights.map((h, i) => (
                      <li key={i} className="flex items-center gap-2 text-xs font-mono text-neutral-700 dark:text-neutral-300">
                        <span className="h-1.5 w-1.5 rounded-full bg-black dark:bg-white" />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Tags */}
                <div className="mt-8 pt-5 border-t border-black/10 dark:border-white/10 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-lg bg-neutral-200/60 dark:bg-white/5 font-mono text-xs text-neutral-800 dark:text-neutral-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
};

export default Projects;
