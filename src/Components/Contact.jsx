import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FiMail,
  FiSend,
  FiCheck,
  FiCopy,
  FiGithub,
  FiLinkedin,
  FiMessageSquare,
  FiUser,
  FiHelpCircle,
} from "react-icons/fi";

const Contact = () => {
  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const emailAddress = "jagdeep.dev@example.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 4000);
  };

  return (
    <section
      id="contact"
      className="relative py-28 px-6 lg:px-12 bg-slate-100/70 dark:bg-[#0c0c0e] transition-colors duration-300 border-t border-black/5 dark:border-white/5"
    >
      {/* Background Dots */}
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
            <FiMail className="h-3.5 w-3.5 text-black dark:text-white" />
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-neutral-800 dark:text-neutral-200">
              GET IN TOUCH
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 180, damping: 18, delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-950 dark:text-white"
          >
            Let's Build Something Exceptional.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 180, damping: 18, delay: 0.2 }}
            className="mt-3 text-base sm:text-lg text-neutral-600 dark:text-neutral-400 max-w-xl"
          >
            Have a project in mind, a security inquiry, or an open software engineering role? Send a message below.
          </motion.p>
        </div>

        {/* Grid Layout: Contact Info & Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left: Contact Info & Quick Actions */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Quick Email Card */}
            <motion.div
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 180, damping: 18 }}
              className="rounded-3xl border border-black/10 dark:border-white/10 bg-white/80 dark:bg-[#121216]/80 p-8 shadow-xl backdrop-blur-xl"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-black text-white dark:bg-white dark:text-black mb-5">
                <FiMail className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-black dark:text-white tracking-tight">
                Direct Email
              </h3>
              <p className="text-xs font-mono text-neutral-500 dark:text-neutral-400 mt-1 mb-4">
                QUICKEST RESPONSE CHANNEL
              </p>
              
              <div className="flex items-center justify-between gap-2 p-3 rounded-2xl bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10">
                <span className="font-mono text-xs font-semibold text-neutral-800 dark:text-neutral-200 truncate">
                  {emailAddress}
                </span>
                <button
                  onClick={handleCopy}
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-black text-white dark:bg-white dark:text-black transition-transform hover:scale-105"
                  aria-label="Copy Email"
                >
                  {copied ? <FiCheck className="h-4 w-4" /> : <FiCopy className="h-4 w-4" />}
                </button>
              </div>
              {copied && (
                <p className="mt-2 text-[11px] font-mono text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                  <FiCheck className="h-3 w-3" /> Copied to clipboard!
                </p>
              )}
            </motion.div>

            {/* Social Links Cards */}
            <motion.div
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 180, damping: 18, delay: 0.1 }}
              className="rounded-3xl border border-black/10 dark:border-white/10 bg-white/80 dark:bg-[#121216]/80 p-8 shadow-xl backdrop-blur-xl flex flex-col gap-4"
            >
              <h4 className="text-sm font-mono font-bold uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
                Social Profiles
              </h4>

              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between p-4 rounded-2xl border border-black/10 dark:border-white/10 bg-white/50 dark:bg-white/5 text-black dark:text-white transition-all hover:bg-black/5 dark:hover:bg-white/10 hover:translate-x-1"
              >
                <div className="flex items-center gap-3">
                  <FiGithub className="h-5 w-5" />
                  <div>
                    <p className="text-sm font-bold">GitHub</p>
                    <p className="text-xs font-mono text-neutral-500 dark:text-neutral-400">Repositories & Code</p>
                  </div>
                </div>
                <span className="text-xs font-mono">→</span>
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between p-4 rounded-2xl border border-black/10 dark:border-white/10 bg-white/50 dark:bg-white/5 text-black dark:text-white transition-all hover:bg-black/5 dark:hover:bg-white/10 hover:translate-x-1"
              >
                <div className="flex items-center gap-3">
                  <FiLinkedin className="h-5 w-5" />
                  <div>
                    <p className="text-sm font-bold">LinkedIn</p>
                    <p className="text-xs font-mono text-neutral-500 dark:text-neutral-400">Professional Network</p>
                  </div>
                </div>
                <span className="text-xs font-mono">→</span>
              </a>
            </motion.div>
          </div>

          {/* Right: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 180, damping: 18 }}
            className="lg:col-span-7 rounded-3xl border border-black/10 dark:border-white/10 bg-white/80 dark:bg-[#121216]/80 p-8 sm:p-10 shadow-xl backdrop-blur-xl"
          >
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500 text-white mb-4 shadow-lg shadow-emerald-500/20">
                  <FiCheck className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-bold text-black dark:text-white">Message Sent Successfully!</h3>
                <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400 max-w-md">
                  Thank you for reaching out. I will get back to your inquiry as soon as possible.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name Input */}
                  <div>
                    <label className="block text-xs font-mono font-bold uppercase tracking-wider text-neutral-700 dark:text-neutral-300 mb-2">
                      Your Name
                    </label>
                    <div className="relative">
                      <FiUser className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400 h-4 w-4" />
                      <input
                        type="text"
                        required
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full rounded-2xl border border-black/10 dark:border-white/15 bg-white/60 dark:bg-white/5 pl-11 pr-4 py-3.5 text-sm text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white transition-all"
                      />
                    </div>
                  </div>

                  {/* Email Input */}
                  <div>
                    <label className="block text-xs font-mono font-bold uppercase tracking-wider text-neutral-700 dark:text-neutral-300 mb-2">
                      Your Email
                    </label>
                    <div className="relative">
                      <FiMail className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400 h-4 w-4" />
                      <input
                        type="email"
                        required
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full rounded-2xl border border-black/10 dark:border-white/15 bg-white/60 dark:bg-white/5 pl-11 pr-4 py-3.5 text-sm text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white transition-all"
                      />
                    </div>
                  </div>
                </div>

                {/* Subject Input */}
                <div>
                  <label className="block text-xs font-mono font-bold uppercase tracking-wider text-neutral-700 dark:text-neutral-300 mb-2">
                    Subject
                  </label>
                  <div className="relative">
                    <FiHelpCircle className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400 h-4 w-4" />
                    <input
                      type="text"
                      required
                      placeholder="Project Opportunity / Security Inquiry"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full rounded-2xl border border-black/10 dark:border-white/15 bg-white/60 dark:bg-white/5 pl-11 pr-4 py-3.5 text-sm text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white transition-all"
                    />
                  </div>
                </div>

                {/* Message Input */}
                <div>
                  <label className="block text-xs font-mono font-bold uppercase tracking-wider text-neutral-700 dark:text-neutral-300 mb-2">
                    Message
                  </label>
                  <div className="relative">
                    <FiMessageSquare className="absolute left-4 top-4 text-neutral-400 h-4 w-4" />
                    <textarea
                      rows={5}
                      required
                      placeholder="Share project details or questions..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full rounded-2xl border border-black/10 dark:border-white/15 bg-white/60 dark:bg-white/5 pl-11 pr-4 py-3.5 text-sm text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white transition-all resize-none"
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full inline-flex items-center justify-center gap-2 rounded-2xl bg-black text-white dark:bg-white dark:text-black py-4 font-bold text-sm shadow-xl transition-all"
                >
                  <span>Send Message</span>
                  <FiSend className="h-4 w-4" />
                </motion.button>
              </form>
            )}
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
