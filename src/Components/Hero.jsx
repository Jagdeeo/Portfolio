import React from "react";
import { motion } from "framer-motion";
import {
  FiArrowRight,
  FiDownload,
  FiGithub,
  FiLinkedin,
  FiMail,
} from "react-icons/fi";

import profileImage from "../assets/profile.jpeg";

export default function Hero() {
  return (
    <section
      id="home"
      className="
        relative
        min-h-screen
        overflow-hidden
        px-6
        pt-28
        pb-16
        sm:pt-32
        lg:px-8
      "
    >
      {/* Background Glow */}
      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/3
          -z-10
          h-[500px]
          w-[500px]
          -translate-x-1/2
          rounded-full
          bg-[#8edcd4]/10
          blur-[120px]
        "
      />

      <div className="mx-auto max-w-7xl">
        <div
          className="
            grid
            min-h-[calc(100vh-8rem)]
            items-center
            gap-16
            lg:grid-cols-[1.15fr_0.85fr]
          "
        >

          {/* ================= LEFT ================= */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
            }}
          >

            {/* Availability */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.2,
                duration: 0.5,
              }}
              className="
                mb-6
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-[#8edcd4]/30
                bg-white/20
                px-4
                py-2
                text-sm
                font-medium
                text-gray-700
                shadow-sm
                backdrop-blur-md
                dark:bg-white/5
                dark:text-gray-300
              "
            >
              <span
                className="
                  h-2
                  w-2
                  animate-pulse
                  rounded-full
                  bg-[#8edcd4]
                  shadow-[0_0_10px_#8edcd4]
                "
              />

              Available for opportunities
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.3,
                duration: 0.7,
              }}
              className="
                max-w-4xl
                text-5xl
                font-bold
                leading-[1.05]
                tracking-tight
                text-gray-950
                sm:text-6xl
                lg:text-7xl
                dark:text-white
              "
            >
              Hi, I'm{" "}
              <span className="text-[#8edcd4]">
                Jagdeep
              </span>
              .
            </motion.h1>

            {/* Profession */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.4,
                duration: 0.7,
              }}
              className="
                mt-5
                max-w-3xl
                text-2xl
                font-semibold
                leading-tight
                text-gray-800
                sm:text-3xl
                dark:text-gray-200
              "
            >
              Cyber Security &{" "}
              <span className="text-[#168f87] dark:text-[#8edcd4]">
                Full-Stack Developer
              </span>
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.5,
                duration: 0.7,
              }}
              className="
                mt-6
                max-w-2xl
                text-base
                leading-7
                text-gray-600
                sm:text-lg
                dark:text-gray-400
              "
            >
              I build modern and scalable web applications with the{" "}
              <span className="font-semibold text-gray-900 dark:text-white">
                MERN Stack
              </span>
              , explore{" "}
              <span className="font-semibold text-gray-900 dark:text-white">
                Cyber Security
              </span>
              , and use{" "}
              <span className="font-semibold text-gray-900 dark:text-white">
                Prompt Engineering
              </span>{" "}
              to create smarter AI-powered solutions.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.6,
                duration: 0.7,
              }}
              className="mt-8 flex flex-wrap items-center gap-4"
            >
              {/* Projects */}
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  bg-[#8edcd4]
                  px-6
                  py-3
                  text-sm
                  font-semibold
                  text-black
                  shadow-lg
                  shadow-[#8edcd4]/20
                  transition-all
                  hover:shadow-[#8edcd4]/40
                "
              >
                View My Work
                <FiArrowRight size={17} />
              </motion.a>

              {/* Resume */}
              <motion.a
                href="/resume.pdf"
                download
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  border
                  border-black/10
                  bg-white/20
                  px-6
                  py-3
                  text-sm
                  font-semibold
                  text-gray-900
                  backdrop-blur-md
                  transition-all
                  hover:border-[#8edcd4]
                  hover:text-[#168f87]
                  dark:border-white/15
                  dark:bg-white/5
                  dark:text-white
                  dark:hover:border-[#8edcd4]
                  dark:hover:text-[#8edcd4]
                "
              >
                <FiDownload size={17} />
                Resume
              </motion.a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="mt-8 flex items-center gap-3"
            >
              {/* GitHub */}
              <motion.a
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="
                  rounded-full
                  border
                  border-black/10
                  bg-white/20
                  p-3
                  text-gray-700
                  backdrop-blur-md
                  transition-colors
                  hover:border-[#8edcd4]
                  hover:text-[#8edcd4]
                  dark:border-white/10
                  dark:bg-white/5
                  dark:text-gray-300
                "
              >
                <FiGithub size={19} />
              </motion.a>

              {/* LinkedIn */}
              <motion.a
                href="https://linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="
                  rounded-full
                  border
                  border-black/10
                  bg-white/20
                  p-3
                  text-gray-700
                  backdrop-blur-md
                  transition-colors
                  hover:border-[#8edcd4]
                  hover:text-[#8edcd4]
                  dark:border-white/10
                  dark:bg-white/5
                  dark:text-gray-300
                "
              >
                <FiLinkedin size={19} />
              </motion.a>

              {/* Email */}
              <motion.a
                href="mailto:yourmail@gmail.com"
                whileHover={{ y: -3, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="
                  rounded-full
                  border
                  border-black/10
                  bg-white/20
                  p-3
                  text-gray-700
                  backdrop-blur-md
                  transition-colors
                  hover:border-[#8edcd4]
                  hover:text-[#8edcd4]
                  dark:border-white/10
                  dark:bg-white/5
                  dark:text-gray-300
                "
              >
                <FiMail size={19} />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* ================= RIGHT IMAGE ================= */}
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.9,
              x: 40,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              x: 0,
            }}
            transition={{
              duration: 0.9,
              delay: 0.2,
              ease: "easeOut",
            }}
            className="
              relative
              flex
              justify-center
              lg:justify-end
            "
          >

            {/* Glow */}
            <div
              className="
                pointer-events-none
                absolute
                h-[350px]
                w-[350px]
                rounded-full
                bg-[#8edcd4]/25
                blur-[100px]
              "
            />

            {/* Profile Image */}
            <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                relative
                h-[430px]
                w-[330px]
                overflow-hidden
                rounded-[2rem]
                border
                border-white/40
                bg-white/20
                p-2
                shadow-2xl
                backdrop-blur-xl
                dark:border-white/10
                dark:bg-white/5
              "
            >
              <img
                src={profileImage}
                alt="Jagdeep"
                className="
                  h-full
                  w-full
                  rounded-[1.6rem]
                  object-cover
                  object-center
                "
              />

              {/* Gradient */}
              <div
                className="
                  pointer-events-none
                  absolute
                  inset-2
                  rounded-[1.6rem]
                  bg-gradient-to-t
                  from-black/60
                  via-black/5
                  to-transparent
                "
              />

              {/* Image Label */}
              <div
                className="
                  absolute
                  bottom-7
                  left-7
                  right-7
                  rounded-2xl
                  border
                  border-white/20
                  bg-black/30
                  px-4
                  py-3
                  backdrop-blur-xl
                "
              >
                <p className="text-sm font-semibold text-white">
                  Cyber Security • MERN • AI
                </p>

                <p className="mt-1 text-xs text-white/70">
                  Building & learning every day
                </p>
              </div>
            </motion.div>

            <motion.div
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                pointer-events-none
                absolute
                -bottom-3
                -left-3
                h-6
                w-6
                rounded-full
                bg-[#8edcd4]
                shadow-lg
                shadow-[#8edcd4]/50
              "
            />
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="
          absolute
          bottom-7
          left-1/2
          hidden
          -translate-x-1/2
          flex-col
          items-center
          gap-2
          text-gray-500
          sm:flex
          dark:text-gray-500
        "
      >
        <span className="text-[10px] uppercase tracking-[0.25em]">
          Scroll
        </span>

        <motion.span
          animate={{ y: [0, 5, 0] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
          }}
          className="h-8 w-px bg-[#8edcd4]"
        />
      </motion.a>
    </section>
  );
}