import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiGithub,
  FiLinkedin,
  FiMail,
  FiMoon,
  FiSun,
  FiMenu,
  FiX,
} from "react-icons/fi";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  const [menuOpen, setMenuOpen] = useState(false);

  // Apply theme
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  // Toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 0.6,
        ease: "easeOut",
      }}
      className="
        fixed top-0 left-0 z-50 w-full
        border-b border-white/20
        bg-white/10
        backdrop-blur-xl
        backdrop-saturate-150
        shadow-[0_8px_30px_rgba(0,0,0,0.08)]
        dark:border-white/10
        dark:bg-black/10
        dark:shadow-[0_8px_30px_rgba(0,0,0,0.25)]
      "
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">

        {/* Logo */}
        <motion.a
          href="#home"
          whileHover={{ scale: 1.03 }}
          className="
            text-2xl
            font-bold
            tracking-tight
            text-black
            dark:text-white
          "
        >
          Jagdeep
          <span className="text-[#8edcd4]">.</span>
        </motion.a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="
                relative
                text-sm
                font-medium
                text-gray-800
                transition-colors
                duration-200
                hover:text-[#8edcd4]
                dark:text-gray-200
                dark:hover:text-[#8edcd4]

                after:absolute
                after:-bottom-2
                after:left-0
                after:h-[2px]
                after:w-0
                after:rounded-full
                after:bg-[#8edcd4]
                after:transition-all
                after:duration-300
                hover:after:w-full
              "
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Desktop Right Side */}
        <div className="hidden items-center gap-2 md:flex">

          
          {/* <motion.a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="
              rounded-full p-2.5
              text-gray-800
              transition-all duration-200
              hover:bg-[#8edcd4]/20
              hover:text-[#8edcd4]
              dark:text-gray-200
            "
            aria-label="GitHub"
          >
            <FiGithub size={19} />
          </motion.a> */}

          {/* LinkedIn */}
          {/* <motion.a
            href="https://linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="
              rounded-full p-2.5
              text-gray-800
              transition-all duration-200
              hover:bg-[#8edcd4]/20
              hover:text-[#8edcd4]
              dark:text-gray-200
            "
            aria-label="LinkedIn"
          >
            <FiLinkedin size={19} />
          </motion.a> */}

          {/* Email */}
          {/* <motion.a
            href="mailto:yourmail@gmail.com"
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="
              rounded-full p-2.5
              text-gray-800
              transition-all duration-200
              hover:bg-[#8edcd4]/20
              hover:text-[#8edcd4]
              dark:text-gray-200
            "
            aria-label="Email"
          >
            <FiMail size={19} />
          </motion.a> */}

          {/* Dark Mode */}
          <motion.button
            onClick={toggleDarkMode}
            whileHover={{ scale: 1.1, rotate: 10 }}
            whileTap={{ scale: 0.9 }}
            className="
              rounded-full p-2.5
              text-gray-800
              transition-all duration-200
              hover:bg-[#8edcd4]/20
              hover:text-[#8edcd4]
              dark:text-gray-200
            "
            aria-label="Toggle dark mode"
          >
            <AnimatePresence mode="wait">
              {darkMode ? (
                <motion.span
                  key="sun"
                  initial={{
                    rotate: -90,
                    opacity: 0,
                    scale: 0.5,
                  }}
                  animate={{
                    rotate: 0,
                    opacity: 1,
                    scale: 1,
                  }}
                  exit={{
                    rotate: 90,
                    opacity: 0,
                    scale: 0.5,
                  }}
                >
                  <FiSun size={19} />
                </motion.span>
              ) : (
                <motion.span
                  key="moon"
                  initial={{
                    rotate: 90,
                    opacity: 0,
                    scale: 0.5,
                  }}
                  animate={{
                    rotate: 0,
                    opacity: 1,
                    scale: 1,
                  }}
                  exit={{
                    rotate: -90,
                    opacity: 0,
                    scale: 0.5,
                  }}
                >
                  <FiMoon size={19} />
                </motion.span>
              )}
            </AnimatePresence>
          </motion.button>

          {/* Let's Talk */}
          <motion.a
            href="#contact"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 8px 25px rgba(142,220,212,0.25)",
            }}
            whileTap={{ scale: 0.95 }}
            className="
              ml-3
              rounded-full
              bg-[#8edcd4]
              px-5 py-2.5
              text-sm font-semibold
              text-black
              transition-all duration-200
            "
          >
            Let's Talk
          </motion.a>
        </div>

        {/* Mobile Controls */}
        <div className="flex items-center gap-1 md:hidden">

          {/* Email */}
          <motion.a
            href="mailto:yourmail@gmail.com"
            whileTap={{ scale: 0.9 }}
            className="
              rounded-full p-2.5
              text-gray-800
              hover:bg-[#8edcd4]/20
              hover:text-[#8edcd4]
              dark:text-gray-200
            "
            aria-label="Email"
          >
            <FiMail size={20} />
          </motion.a>

          {/* Dark Mode */}
          <motion.button
            onClick={toggleDarkMode}
            whileTap={{ scale: 0.9 }}
            className="
              rounded-full p-2.5
              text-gray-800
              hover:bg-[#8edcd4]/20
              hover:text-[#8edcd4]
              dark:text-gray-200
            "
            aria-label="Toggle dark mode"
          >
            {darkMode ? (
              <FiSun size={20} />
            ) : (
              <FiMoon size={20} />
            )}
          </motion.button>

          {/* Menu */}
          <motion.button
            onClick={() => setMenuOpen((prev) => !prev)}
            whileTap={{ scale: 0.9 }}
            className="
              rounded-full p-2.5
              text-gray-800
              hover:bg-[#8edcd4]/20
              hover:text-[#8edcd4]
              dark:text-gray-200
            "
            aria-label="Toggle navigation menu"
          >
            {menuOpen ? (
              <FiX size={22} />
            ) : (
              <FiMenu size={22} />
            )}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{
              opacity: 0,
              height: 0,
            }}
            animate={{
              opacity: 1,
              height: "auto",
            }}
            exit={{
              opacity: 0,
              height: 0,
            }}
            transition={{
              duration: 0.25,
              ease: "easeInOut",
            }}
            className="
              overflow-hidden
              border-t border-white/20
              bg-white/10
              backdrop-blur-2xl
              backdrop-saturate-150
              dark:border-white/10
              dark:bg-black/20
              md:hidden
            "
          >
            <div className="flex flex-col px-6 py-5">

              {navLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  initial={{
                    opacity: 0,
                    x: -20,
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                  }}
                  transition={{
                    delay: index * 0.05,
                  }}
                  className="
                    border-b border-black/10
                    py-4
                    text-sm font-medium
                    text-gray-800
                    transition-colors
                    hover:text-[#8edcd4]
                    dark:border-white/10
                    dark:text-gray-200
                  "
                >
                  {link.name}
                </motion.a>
              ))}

              {/* Mobile Let's Talk */}
              <motion.a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                whileTap={{ scale: 0.97 }}
                className="
                  mt-5
                  rounded-full
                  bg-[#8edcd4]
                  px-5 py-3
                  text-center
                  text-sm font-semibold
                  text-black
                "
              >
                Let's Talk
              </motion.a>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;