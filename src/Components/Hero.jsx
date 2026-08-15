import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import {
  FiArrowRight,
  FiDownload,
  FiGithub,
  FiLinkedin,
  FiMail,
  FiShield,
  FiCode,
  FiCpu,
  FiCheckCircle,
} from "react-icons/fi";
import profileImage from "../assets/profile.jpeg";

export default function Hero() {
  const containerRef = useRef(null);
  const imageCardRef = useRef(null);

  // GSAP 3D Interactive Tilt on Profile Picture Frame
  useEffect(() => {
    const card = imageCardRef.current;
    if (!card) return;

    const handleMouseMove = (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      gsap.to(card, {
        rotateY: x * 0.04,
        rotateX: -y * 0.04,
        duration: 0.6,
        ease: "power2.out",
        transformPerspective: 1000,
      });
    };

    const handleMouseLeave = () => {
      gsap.to(card, {
        rotateY: 0,
        rotateX: 0,
        duration: 0.8,
        ease: "elastic.out(1, 0.5)",
      });
    };

    const target = card.parentElement;
    if (target) {
      target.addEventListener("mousemove", handleMouseMove);
      target.addEventListener("mouseleave", handleMouseLeave);
    }

    return () => {
      if (target) {
        target.removeEventListener("mousemove", handleMouseMove);
        target.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, []);

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative min-h-screen pt-32 pb-20 px-6 lg:px-12 flex items-center justify-center overflow-hidden bg-slate-50 dark:bg-[#08080a] transition-colors duration-300"
    >
      {/* Dynamic Background Light / Grid Aura */}
      <div className="absolute inset-0 bg-grid-pattern opacity-60 pointer-events-none" />

      {/* Ambient Gradient Glow Spheres (Light & Dark monochrome ambient lighting) */}
      <div className="pointer-events-none absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-slate-200/50 dark:bg-white/[0.03] blur-[140px]" />
      <div className="pointer-events-none absolute bottom-10 right-10 w-[400px] h-[400px] rounded-full bg-neutral-300/40 dark:bg-neutral-800/30 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* LEFT CONTENT COLUMN */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            {/* Status Pill Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, type: "spring", stiffness: 200, damping: 20 }}
              className="inline-flex items-center gap-2.5 self-start px-4 py-2 rounded-full border border-black/10 dark:border-white/15 bg-white/70 dark:bg-white/5 backdrop-blur-xl shadow-sm mb-6"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-black dark:bg-white opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-black dark:bg-white"></span>
              </span>
              <span className="font-mono text-xs font-semibold uppercase tracking-wider text-neutral-800 dark:text-neutral-200">
                Available for Software Engineering Roles
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, type: "spring", stiffness: 180, damping: 18 }}
              className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-950 dark:text-white leading-[1.08]"
            >
              Architecting secure <br className="hidden sm:block" />
              <span className="relative inline-block">
                <span className="text-black dark:text-white underline decoration-black/20 dark:decoration-white/20 underline-offset-8">
                  MERN Full-Stack
                </span>
              </span>{" "}
              & AI solutions.
            </motion.h1>

            {/* Sub-headline / Role */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, type: "spring", stiffness: 180, damping: 18 }}
              className="mt-6 flex flex-wrap items-center gap-3 text-lg sm:text-xl font-medium text-neutral-700 dark:text-neutral-300"
            >
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-black/5 dark:bg-white/10 font-mono text-sm text-black dark:text-white border border-black/10 dark:border-white/10">
                <FiCode className="h-4 w-4" /> MERN Developer
              </span>
              <span className="text-neutral-400">•</span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-black/5 dark:bg-white/10 font-mono text-sm text-black dark:text-white border border-black/10 dark:border-white/10">
                <FiShield className="h-4 w-4" /> Cyber Security
              </span>
              <span className="text-neutral-400">•</span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-black/5 dark:bg-white/10 font-mono text-sm text-black dark:text-white border border-black/10 dark:border-white/10">
                <FiCpu className="h-4 w-4" /> Prompt Engineer
              </span>
            </motion.div>

            {/* Description Body */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3, type: "spring", stiffness: 180, damping: 18 }}
              className="mt-6 text-base sm:text-lg leading-relaxed text-neutral-600 dark:text-neutral-400 max-w-2xl"
            >
              Hi, I'm <strong className="text-black dark:text-white font-semibold">Jagdeep</strong>. I engineer high-performance web applications using MongoDB, Express, React, and Node.js, combined with robust cybersecurity practices and intelligent AI integration.
            </motion.p>

            {/* Primary Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4, type: "spring", stiffness: 180, damping: 18 }}
              className="mt-9 flex flex-wrap items-center gap-4"
            >
              {/* View Projects CTA */}
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.96 }}
                className="inline-flex items-center gap-2.5 rounded-full bg-black dark:bg-white px-7 py-3.5 text-sm font-semibold text-white dark:text-black shadow-xl shadow-black/10 dark:shadow-white/5 transition-all hover:bg-neutral-800 dark:hover:bg-neutral-200"
              >
                <span>Explore Projects</span>
                <FiArrowRight className="h-4 w-4" />
              </motion.a>

              {/* Resume Download CTA */}
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.96 }}
                className="inline-flex items-center gap-2.5 rounded-full border border-black/15 dark:border-white/20 bg-white/60 dark:bg-white/5 backdrop-blur-xl px-7 py-3.5 text-sm font-semibold text-black dark:text-white transition-all hover:bg-black/5 dark:hover:bg-white/10"
              >
                <FiDownload className="h-4 w-4" />
                <span>Get Resume</span>
              </motion.a>
            </motion.div>

            {/* Monochrome Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mt-10 flex items-center gap-3 pt-6 border-t border-black/10 dark:border-white/10"
            >
              <span className="text-xs font-mono uppercase tracking-widest text-neutral-500 dark:text-neutral-400 mr-2">
                Connect:
              </span>
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub Profile"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-black/10 dark:border-white/15 bg-white/80 dark:bg-white/5 text-black dark:text-white transition-all hover:scale-110 hover:border-black dark:hover:border-white"
              >
                <FiGithub className="h-4 w-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn Profile"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-black/10 dark:border-white/15 bg-white/80 dark:bg-white/5 text-black dark:text-white transition-all hover:scale-110 hover:border-black dark:hover:border-white"
              >
                <FiLinkedin className="h-4 w-4" />
              </a>
              <a
                href="mailto:jagdeep.dev@example.com"
                aria-label="Email Contact"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-black/10 dark:border-white/15 bg-white/80 dark:bg-white/5 text-black dark:text-white transition-all hover:scale-110 hover:border-black dark:hover:border-white"
              >
                <FiMail className="h-4 w-4" />
              </a>
            </motion.div>
          </div>

          {/* RIGHT PHOTO CONTAINER - HARMONIZED APPLE SQUIRCLE FRAME */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.88, rotate: -3 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.9, delay: 0.2, type: "spring", stiffness: 150, damping: 20 }}
              className="relative p-3"
            >
              {/* Radial Backdrop Lighting Halo around photo */}
              <div className="absolute inset-0 rounded-[3rem] bg-gradient-to-tr from-neutral-400/20 via-neutral-200/30 to-transparent dark:from-white/10 dark:via-white/5 dark:to-transparent blur-2xl transform scale-105 pointer-events-none" />

              {/* Double-layered Glass Frame with Interactive Tilt */}
              <div
                ref={imageCardRef}
                style={{ transformStyle: "preserve-3d" }}
                className="relative w-[300px] sm:w-[350px] aspect-[4/5] rounded-[2.5rem] border border-black/15 dark:border-white/20 bg-white/40 dark:bg-white/5 p-3 shadow-2xl backdrop-blur-2xl transition-shadow duration-500 hover:shadow-black/20 dark:hover:shadow-white/10"
              >
                {/* Embedded Profile Picture */}
                <div className="relative w-full h-full overflow-hidden rounded-[2rem] bg-neutral-900">
                  <img
                    src={profileImage}
                    alt="Jagdeep Profile"
                    className="w-full h-full object-cover object-center filter grayscale-[15%] contrast-[105%] transition-transform duration-700 hover:scale-105"
                  />

                  {/* Gradient Overlay for Text Contrast */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

                  {/* Glass Info Pill on Bottom of Image */}
                  <div className="absolute bottom-4 left-4 right-4 rounded-2xl border border-white/20 bg-black/40 p-4 backdrop-blur-xl text-white">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-bold text-sm tracking-wide">Jagdeep</p>
                        <p className="text-xs text-neutral-300 font-mono">MERN & Security Specialist</p>
                      </div>
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-black">
                        <FiCheckCircle className="h-4 w-4" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Decorative Badge Pill Top-Right */}
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-4 -right-4 flex items-center gap-2 rounded-2xl border border-black/10 dark:border-white/20 bg-white dark:bg-[#121216] px-4 py-2.5 shadow-xl text-black dark:text-white"
                >
                  <span className="flex h-2 w-2 rounded-full bg-emerald-500" />
                  <span className="text-xs font-mono font-bold tracking-wider">MERN ARCHITECT</span>
                </motion.div>

                {/* Floating Decorative Badge Pill Bottom-Left */}
                <motion.div
                  animate={{ y: [0, 8, 0] }}
                  transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="absolute -bottom-4 -left-4 flex items-center gap-2 rounded-2xl border border-black/10 dark:border-white/20 bg-white dark:bg-[#121216] px-4 py-2.5 shadow-xl text-black dark:text-white"
                >
                  <FiShield className="h-4 w-4 text-black dark:text-white" />
                  <span className="text-xs font-mono font-bold tracking-wider">CYBERSEC READY</span>
                </motion.div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}