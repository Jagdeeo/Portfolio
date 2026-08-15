import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiSun,
  FiMoon,
  FiMenu,
  FiX,
  FiArrowUpRight,
  FiTerminal,
  FiGithub,
  FiLinkedin,
  FiMail,
} from "react-icons/fi";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== "undefined") {
      const savedTheme = localStorage.getItem("theme");
      if (savedTheme) return savedTheme === "dark";
      return document.documentElement.classList.contains("dark");
    }
    return true;
  });

  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Apply theme class to <html> element
  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Tech Stack", href: "#techstack" },
    { name: "Projects", href: "#projects" },
    { name: "Security & AI", href: "#security" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
      }}
      className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 pt-4 transition-all duration-300 pointer-events-none"
    >
      <div
        className={`mx-auto max-w-6xl rounded-full transition-all duration-300 pointer-events-auto ${
          scrolled
            ? "bg-white/80 dark:bg-[#0c0c0e]/85 backdrop-blur-xl border border-black/10 dark:border-white/15 shadow-lg shadow-black/5 dark:shadow-black/40 py-2.5 px-6"
            : "bg-white/50 dark:bg-[#0c0c0e]/50 backdrop-blur-md border border-black/5 dark:border-white/10 py-3.5 px-6"
        }`}
      >
        <div className="flex items-center justify-between">
          {/* Logo / Brand */}
          <motion.a
            href="#home"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="flex items-center gap-2.5 text-lg font-bold tracking-tight text-black dark:text-white group"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-black text-white dark:bg-white dark:text-black transition-transform duration-300 group-hover:rotate-12">
              <FiTerminal className="h-4 w-4" />
            </div>
            <span className="font-mono text-base tracking-wider">
              JAGDEEP<span className="text-neutral-400 dark:text-neutral-500">.DEV</span>
            </span>
          </motion.a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider text-neutral-600 dark:text-neutral-300 transition-all duration-200 hover:text-black dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/10"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop Right Controls (Monochrome Dark/Light Switcher + Contact CTA) */}
          <div className="hidden md:flex items-center gap-3">
            {/* Dark/Light Mode Toggle Button */}
            <motion.button
              onClick={toggleDarkMode}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.92 }}
              className="relative flex h-9 w-9 items-center justify-center rounded-full border border-black/10 dark:border-white/15 bg-black/5 dark:bg-white/10 text-black dark:text-white transition-all hover:border-black/30 dark:hover:border-white/30"
              aria-label="Toggle theme"
            >
              <AnimatePresence mode="wait" initial={false}>
                {darkMode ? (
                  <motion.div
                    key="sun"
                    initial={{ rotate: -90, scale: 0, opacity: 0 }}
                    animate={{ rotate: 0, scale: 1, opacity: 1 }}
                    exit={{ rotate: 90, scale: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <FiSun className="h-4 w-4 text-white" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="moon"
                    initial={{ rotate: 90, scale: 0, opacity: 0 }}
                    animate={{ rotate: 0, scale: 1, opacity: 1 }}
                    exit={{ rotate: -90, scale: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <FiMoon className="h-4 w-4 text-black" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>

            {/* Let's Talk CTA */}
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className="inline-flex items-center gap-1.5 rounded-full bg-black dark:bg-white px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white dark:text-black shadow-sm transition-all hover:bg-neutral-800 dark:hover:bg-neutral-200"
            >
              <span>Let's Talk</span>
              <FiArrowUpRight className="h-3.5 w-3.5" />
            </motion.a>
          </div>

          {/* Mobile Right Controls */}
          <div className="flex md:hidden items-center gap-2">
            {/* Dark Mode Button for Mobile */}
            <motion.button
              onClick={toggleDarkMode}
              whileTap={{ scale: 0.9 }}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-black/10 dark:border-white/15 bg-black/5 dark:bg-white/10 text-black dark:text-white"
              aria-label="Toggle theme"
            >
              {darkMode ? <FiSun className="h-4 w-4" /> : <FiMoon className="h-4 w-4" />}
            </motion.button>

            {/* Hamburger Toggle */}
            <motion.button
              onClick={() => setMenuOpen((prev) => !prev)}
              whileTap={{ scale: 0.9 }}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-black/10 dark:border-white/15 bg-black/5 dark:bg-white/10 text-black dark:text-white"
              aria-label="Toggle Navigation Menu"
            >
              {menuOpen ? <FiX className="h-5 w-5" /> : <FiMenu className="h-5 w-5" />}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu Dropdown */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="md:hidden pointer-events-auto mx-auto max-w-6xl mt-2 rounded-3xl bg-white/95 dark:bg-[#0c0c0e]/95 backdrop-blur-2xl border border-black/10 dark:border-white/15 p-5 shadow-2xl"
          >
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="px-4 py-3 rounded-2xl text-sm font-semibold tracking-wider text-neutral-800 dark:text-neutral-200 transition-colors hover:bg-black/5 dark:hover:bg-white/10"
                >
                  {link.name}
                </a>
              ))}
              <div className="mt-3 pt-3 border-t border-black/10 dark:border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 rounded-full border border-black/10 dark:border-white/15 text-black dark:text-white"
                  >
                    <FiGithub className="h-4 w-4" />
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 rounded-full border border-black/10 dark:border-white/15 text-black dark:text-white"
                  >
                    <FiLinkedin className="h-4 w-4" />
                  </a>
                  <a
                    href="mailto:jagdeep.dev@example.com"
                    className="p-2 rounded-full border border-black/10 dark:border-white/15 text-black dark:text-white"
                  >
                    <FiMail className="h-4 w-4" />
                  </a>
                </div>
                <a
                  href="#contact"
                  onClick={() => setMenuOpen(false)}
                  className="rounded-full bg-black dark:bg-white px-5 py-2.5 text-xs font-semibold text-white dark:text-black"
                >
                  Let's Talk
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;