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
  // ==============================
  // DARK / LIGHT MODE
  // ==============================
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== "undefined") {
      const savedTheme = localStorage.getItem("theme");

      if (savedTheme) {
        return savedTheme === "dark";
      }

      return document.documentElement.classList.contains("dark");
    }

    return true;
  });

  // ==============================
  // MOBILE MENU
  // ==============================
  const [menuOpen, setMenuOpen] = useState(false);

  // ==============================
  // SCROLL STATE
  // ==============================
  const [scrolled, setScrolled] = useState(false);

  // ==============================
  // HANDLE SCROLL
  // ==============================
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // ==============================
  // APPLY DARK / LIGHT THEME
  // ==============================
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

  // ==============================
  // TOGGLE THEME
  // ==============================
  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

  // ==============================
  // CLOSE MOBILE MENU
  // ==============================
  const closeMobileMenu = () => {
    setMenuOpen(false);
  };

  // ==============================
  // NAVIGATION LINKS
  // ==============================
  const navLinks = [
    {
      name: "Home",
      href: "#home",
    },
    {
      name: "About",
      href: "#about",
    },
    {
      name: "Tech Stack",
      href: "#techstack",
    },
    {
      name: "Projects",
      href: "#projects",
    },
    {
      name: "Security & AI",
      href: "#security",
    },
    {
      name: "Contact",
      href: "#contact",
    },
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
      className="
        fixed
        top-0
        left-0
        right-0
        z-50
        px-4
        pt-4
        sm:px-6
        lg:px-8
        pointer-events-none
      "
    >
      {/* =================================
          AMBIENT GLASS GLOW
      ================================= */}
      <div
        className="
          absolute
          left-1/2
          top-3
          -translate-x-1/2
          w-[70%]
          max-w-4xl
          h-16
          rounded-full
          bg-white/10
          dark:bg-white/[0.03]
          blur-3xl
          pointer-events-none
        "
      />

      {/* =================================
          MAIN GLASS NAVBAR
      ================================= */}
      <div
        className={`
          relative
          mx-auto
          max-w-6xl
          rounded-full
          overflow-hidden
          pointer-events-auto
          backdrop-blur-2xl
          backdrop-saturate-150
          transition-all
          duration-500
          ${
            scrolled
              ? "bg-white/[0.55] dark:bg-white/[0.06] border border-white/40 dark:border-white/[0.12] shadow-[0_8px_40px_rgba(0,0,0,0.10)] dark:shadow-[0_8px_45px_rgba(0,0,0,0.45)] py-2.5 px-6"
              : "bg-white/[0.35] dark:bg-white/[0.035] border border-white/30 dark:border-white/[0.08] shadow-[0_4px_30px_rgba(0,0,0,0.06)] dark:shadow-[0_4px_35px_rgba(0,0,0,0.30)] py-3.5 px-6"
          }
        `}
      >
        {/* TOP GLASS REFLECTION */}
        <div
          className="
            absolute
            inset-x-0
            top-0
            h-px
            bg-white/80
            dark:bg-white/20
            pointer-events-none
          "
        />

        {/* GLASS HIGHLIGHT */}
        <div
          className="
            absolute
            inset-0
            bg-gradient-to-b
            from-white/[0.18]
            via-transparent
            to-transparent
            pointer-events-none
          "
        />

        {/* =================================
            NAV CONTENT
        ================================= */}
        <div className="relative flex items-center justify-between">
          {/* =================================
              LOGO
          ================================= */}
          <motion.a
            href="#home"
            onClick={closeMobileMenu}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="
              flex
              items-center
              gap-2.5
              text-lg
              font-bold
              tracking-tight
              text-black
              dark:text-white
              group
            "
          >
            <div
              className="
                flex
                h-9
                w-9
                items-center
                justify-center
                rounded-full
                bg-black/90
                dark:bg-white/90
                text-white
                dark:text-black
                shadow-lg
                shadow-black/10
                dark:shadow-white/10
                backdrop-blur-xl
                transition-transform
                duration-300
                group-hover:rotate-12
              "
            >
              <FiTerminal className="h-4 w-4" />
            </div>

            <span className="font-mono text-base tracking-wider">
              JAGDEEP.
            </span>
          </motion.a>

          {/* =================================
              DESKTOP NAVIGATION
          ================================= */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="
                  relative
                  px-3.5
                  py-1.5
                  rounded-full
                  text-xs
                  font-semibold
                  uppercase
                  tracking-wider
                  text-neutral-600
                  dark:text-neutral-300
                  transition-all
                  duration-300
                  hover:text-black
                  dark:hover:text-white
                  hover:bg-white/40
                  dark:hover:bg-white/[0.08]
                  hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.4)]
                "
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* =================================
              DESKTOP CONTROLS
          ================================= */}
          <div className="hidden md:flex items-center gap-3">
            {/* THEME SWITCH */}
            <motion.button
              type="button"
              onClick={toggleDarkMode}
              whileTap={{ scale: 0.95 }}
              className="
                relative
                flex
                items-center
                w-[68px]
                h-9
                rounded-full
                p-1
                border
                border-white/40
                dark:border-white/15
                bg-white/40
                dark:bg-black/30
                backdrop-blur-2xl
                shadow-[inset_0_1px_2px_rgba(255,255,255,0.5)]
                dark:shadow-[inset_0_1px_2px_rgba(255,255,255,0.08)]
                transition-all
                duration-300
                hover:bg-white/60
                dark:hover:bg-white/10
              "
              aria-label="Toggle dark and light mode"
              aria-pressed={darkMode}
            >
              {/* SLIDING KNOB */}
              <motion.div
                animate={{ x: darkMode ? 30 : 0 }}
                transition={{
                  type: "spring",
                  stiffness: 500,
                  damping: 30,
                }}
                className="
                  absolute
                  left-1
                  top-1
                  w-7
                  h-7
                  rounded-full
                  bg-white
                  dark:bg-neutral-800
                  border
                  border-white/70
                  dark:border-white/10
                  shadow-[0_2px_8px_rgba(0,0,0,0.18)]
                  dark:shadow-[0_2px_8px_rgba(0,0,0,0.5)]
                  flex
                  items-center
                  justify-center
                  z-10
                "
              >
                <AnimatePresence mode="wait" initial={false}>
                  {darkMode ? (
                    <motion.div
                      key="moon"
                      initial={{ rotate: -90, scale: 0 }}
                      animate={{ rotate: 0, scale: 1 }}
                      exit={{ rotate: 90, scale: 0 }}
                    >
                      <FiMoon className="h-3.5 w-3.5 text-white" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="sun"
                      initial={{ rotate: 90, scale: 0 }}
                      animate={{ rotate: 0, scale: 1 }}
                      exit={{ rotate: -90, scale: 0 }}
                    >
                      <FiSun className="h-3.5 w-3.5 text-black" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>

              {/* BACKGROUND ICONS */}
              <div
                className="
                  absolute
                  inset-0
                  flex
                  items-center
                  justify-between
                  px-2.5
                  pointer-events-none
                "
              >
                <FiSun
                  className={`h-3.5 w-3.5 transition-opacity duration-300 ${
                    darkMode ? "text-white/30" : "text-black/40"
                  }`}
                />

                <FiMoon
                  className={`h-3.5 w-3.5 transition-opacity duration-300 ${
                    darkMode ? "text-white/40" : "text-black/20"
                  }`}
                />
              </div>
            </motion.button>

     
          </div>

          {/* =================================
              MOBILE CONTROLS
          ================================= */}
          <div className="flex md:hidden items-center gap-2">
            {/* MOBILE THEME SWITCH */}
            <motion.button
              type="button"
              onClick={toggleDarkMode}
              whileTap={{ scale: 0.95 }}
              className="
                relative
                flex
                items-center
                w-[60px]
                h-8
                rounded-full
                p-1
                border
                border-white/40
                dark:border-white/15
                bg-white/40
                dark:bg-black/30
                backdrop-blur-2xl
                shadow-[inset_0_1px_2px_rgba(255,255,255,0.5)]
                dark:shadow-[inset_0_1px_2px_rgba(255,255,255,0.08)]
              "
              aria-label="Toggle dark and light mode"
              aria-pressed={darkMode}
            >
              {/* MOBILE SLIDER */}
              <motion.div
                animate={{ x: darkMode ? 26 : 0 }}
                transition={{
                  type: "spring",
                  stiffness: 500,
                  damping: 30,
                }}
                className="
                  absolute
                  left-1
                  top-1
                  w-6
                  h-6
                  rounded-full
                  bg-white
                  dark:bg-neutral-800
                  border
                  border-white/70
                  dark:border-white/10
                  shadow-md
                  flex
                  items-center
                  justify-center
                  z-10
                "
              >
                {darkMode ? (
                  <FiMoon className="h-3 w-3 text-white" />
                ) : (
                  <FiSun className="h-3 w-3 text-black" />
                )}
              </motion.div>

              {/* MOBILE BACKGROUND ICONS */}
              <div
                className="
                  absolute
                  inset-0
                  flex
                  items-center
                  justify-between
                  px-2
                  pointer-events-none
                "
              >
                <FiSun className="h-3 w-3 text-black/30 dark:text-white/20" />

                <FiMoon className="h-3 w-3 text-black/20 dark:text-white/30" />
              </div>
            </motion.button>

            {/* MOBILE MENU BUTTON */}
            <motion.button
              type="button"
              onClick={() => setMenuOpen((prev) => !prev)}
              whileTap={{ scale: 0.9 }}
              className="
                flex
                h-9
                w-9
                items-center
                justify-center
                rounded-full
                border
                border-white/40
                dark:border-white/[0.12]
                bg-white/30
                dark:bg-white/[0.06]
                backdrop-blur-xl
                text-black
                dark:text-white
              "
              aria-label={
                menuOpen ? "Close navigation menu" : "Open navigation menu"
              }
              aria-expanded={menuOpen}
            >
              <AnimatePresence mode="wait" initial={false}>
                {menuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                  >
                    <FiX className="h-5 w-5" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                  >
                    <FiMenu className="h-5 w-5" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </div>

      {/* =================================
          MOBILE GLASS MENU
      ================================= */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{
              opacity: 0,
              y: -10,
              scale: 0.96,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              y: -10,
              scale: 0.96,
            }}
            transition={{
              duration: 0.25,
              ease: "easeOut",
            }}
            className="
              relative
              md:hidden
              pointer-events-auto
              mx-auto
              max-w-6xl
              mt-3
              overflow-hidden
              rounded-3xl
              border
              border-white/40
              dark:border-white/[0.12]
              bg-white/[0.65]
              dark:bg-[#101012]/[0.70]
              backdrop-blur-3xl
              backdrop-saturate-150
              shadow-[0_20px_60px_rgba(0,0,0,0.12)]
              dark:shadow-[0_20px_60px_rgba(0,0,0,0.55)]
              p-5
            "
          >
            {/* MOBILE GLASS HIGHLIGHT */}
            <div
              className="
                absolute
                inset-x-0
                top-0
                h-px
                bg-white
                dark:bg-white/20
              "
            />

            <div className="relative flex flex-col gap-1">
              {/* MOBILE LINKS */}
              {navLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={closeMobileMenu}
                  whileTap={{ scale: 0.98 }}
                  className="
                    px-4
                    py-3
                    rounded-2xl
                    text-sm
                    font-semibold
                    tracking-wider
                    text-neutral-800
                    dark:text-neutral-200
                    transition-all
                    duration-200
                    hover:bg-white/50
                    dark:hover:bg-white/[0.08]
                  "
                >
                  {link.name}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;