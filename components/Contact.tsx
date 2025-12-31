"use client";

import { motion } from "framer-motion";
import { Mail, Linkedin, Github, ExternalLink } from "lucide-react";
import Link from "next/link";

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-4 bg-[#0d1117]">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#c9d1d9] mb-4">
            Get In Touch
          </h2>
          <p className="text-xl text-[#8b949e] max-w-2xl mx-auto">
            I&apos;m always open to discussing new projects, creative ideas, 
            or opportunities to be part of your visions.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-[#161b22] border border-[#30363d] rounded-lg p-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Link
              href="mailto:naokiondawork@gmail.com"
              className="flex flex-col items-center gap-3 p-6 bg-[#0d1117] border border-[#30363d] rounded-lg hover:border-[#58a6ff] transition-all group"
            >
              <div className="p-3 bg-[#21262d] rounded-lg group-hover:bg-[#30363d] transition-colors">
                <Mail className="text-[#58a6ff]" size={24} />
              </div>
              <span className="text-[#c9d1d9] font-medium">Email</span>
              <span className="text-sm text-[#8b949e]">naokiondawork@gmail.com</span>
            </Link>

            <Link
              href="https://www.linkedin.com/in/naoki-onda-504202291/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-3 p-6 bg-[#0d1117] border border-[#30363d] rounded-lg hover:border-[#58a6ff] transition-all group"
            >
              <div className="p-3 bg-[#21262d] rounded-lg group-hover:bg-[#30363d] transition-colors">
                <Linkedin className="text-[#58a6ff]" size={24} />
              </div>
              <span className="text-[#c9d1d9] font-medium">LinkedIn</span>
              <span className="text-sm text-[#8b949e] flex items-center gap-1">
                Connect
                <ExternalLink size={14} />
              </span>
            </Link>

            <Link
              href="https://github.com/naokiwork"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-3 p-6 bg-[#0d1117] border border-[#30363d] rounded-lg hover:border-[#58a6ff] transition-all group"
            >
              <div className="p-3 bg-[#21262d] rounded-lg group-hover:bg-[#30363d] transition-colors">
                <Github className="text-[#58a6ff]" size={24} />
              </div>
              <span className="text-[#c9d1d9] font-medium">GitHub</span>
              <span className="text-sm text-[#8b949e] flex items-center gap-1">
                View Profile
                <ExternalLink size={14} />
              </span>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

