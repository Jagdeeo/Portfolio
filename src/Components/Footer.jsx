import React from "react";
import { motion } from "framer-motion";
import { FiArrowUp, FiTerminal, FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-slate-900 text-white dark:bg-[#050507] dark:text-neutral-200 py-16 px-6 lg:px-12 border-t border-white/10">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-12 border-b border-white/10">
          
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start">
            <a href="#home" className="flex items-center gap-2.5 text-xl font-extrabold tracking-tight">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-black">
                <FiTerminal className="h-4 w-4" />
              </div>
              <span className="font-mono text-base tracking-wider">
                JAGDEEP.
              </span>
            </a>
            <p className="mt-2 text-xs font-mono text-neutral-400">
              Full-Stack MERN Developer & Cyber Security Specialist
            </p>
          </div>

          {/* Nav Quick Links */}
          <div className="flex flex-wrap justify-center gap-6 text-xs font-mono uppercase tracking-wider text-neutral-300">
            <a href="#home" className="hover:text-white transition-colors">Home</a>
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#techstack" className="hover:text-white transition-colors">Tech Stack</a>
            <a href="#projects" className="hover:text-white transition-colors">Projects</a>
            <a href="#security" className="hover:text-white transition-colors">Security & AI</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>

          {/* Social Icons & Back to Top */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/Jagdeeo"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white transition-all hover:bg-white hover:text-black"
            >
              <FiGithub className="h-4 w-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/jagdeep-dhanda-667b55227/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white transition-all hover:bg-white hover:text-black"
            >
              <FiLinkedin className="h-4 w-4" />
            </a>
            <a
              href="mailto:JagdeepDhanda420@gmail.com"
              aria-label="Email"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white transition-all hover:bg-white hover:text-black"
            >
              <FiMail className="h-4 w-4" />
            </a>

            {/* Back to Top Spring Button */}
            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-black shadow-lg ml-2"
              aria-label="Scroll to Top"
            >
              <FiArrowUp className="h-4 w-4" />
            </motion.button>
          </div>

        </div>

        {/* Copyright */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-neutral-400">
          <p>© {new Date().getFullYear()} Jagdeep. All rights reserved.</p>
          <p className="mt-2 sm:mt-0">Built with MERN Stack, React 19, Tailwind CSS & GSAP</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
