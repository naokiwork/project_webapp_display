"use client";

import { ChevronDown, Github, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById("projects");
    projectsSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="min-h-screen flex flex-col items-center justify-center px-4 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0d1117] via-[#161b22] to-[#0d1117] opacity-50" />
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-[#58a6ff] via-[#bc8cff] to-[#58a6ff] bg-clip-text text-transparent">
            Naoki Onda
          </h1>
        </motion.div>

        <motion.p
          className="text-xl md:text-2xl text-[#8b949e] mb-8 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Full-Stack Developer & UI/UX Enthusiast
        </motion.p>

        <motion.p
          className="text-lg text-[#c9d1d9] mb-12 max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Building modern web applications with a focus on clean code, 
          exceptional user experience, and innovative solutions. 
          Passionate about creating products that make a difference.
        </motion.p>

        <motion.div
          className="flex flex-wrap items-center justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Link
            href="https://github.com/naokiwork"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-[#21262d] hover:bg-[#30363d] border border-[#30363d] rounded-lg text-[#c9d1d9] transition-colors"
          >
            <Github size={20} />
            GitHub
          </Link>
          <Link
            href="https://www.linkedin.com/in/naoki-onda-504202291/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-[#21262d] hover:bg-[#30363d] border border-[#30363d] rounded-lg text-[#c9d1d9] transition-colors"
          >
            <Linkedin size={20} />
            LinkedIn
          </Link>
          <Link
            href="mailto:naokiondawork@gmail.com"
            className="flex items-center gap-2 px-6 py-3 bg-[#21262d] hover:bg-[#30363d] border border-[#30363d] rounded-lg text-[#c9d1d9] transition-colors"
          >
            <Mail size={20} />
            Email
          </Link>
        </motion.div>

        <motion.button
          onClick={scrollToProjects}
          className="flex items-center gap-2 px-8 py-4 bg-[#238636] hover:bg-[#2ea043] text-white rounded-lg font-medium transition-colors mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          View Projects
          <ChevronDown size={20} />
        </motion.button>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown size={24} className="text-[#8b949e]" />
        </motion.div>
      </motion.div>
    </section>
  );
}

