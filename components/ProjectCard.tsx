"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group"
    >
      <div className="bg-[#161b22] border border-[#30363d] rounded-lg overflow-hidden hover:border-[#58a6ff] transition-all duration-300 h-full flex flex-col">
        {/* Project Image */}
        <div className="relative w-full h-48 bg-[#0d1117] overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#58a6ff]/20 to-[#bc8cff]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
          {project.image && !project.image.startsWith("/placeholder") ? (
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-[#484f58] text-sm">
              <div className="text-center p-4">
                <div className="w-16 h-16 mx-auto mb-2 bg-[#21262d] rounded-lg flex items-center justify-center">
                  <Github size={32} className="text-[#484f58]" />
                </div>
                <p>Project Image</p>
              </div>
            </div>
          )}
        </div>

        {/* Project Content */}
        <div className="p-6 flex flex-col flex-grow">
          <h3 className="text-xl font-semibold text-[#c9d1d9] mb-2 group-hover:text-[#58a6ff] transition-colors">
            {project.title}
          </h3>
          <p className="text-[#8b949e] mb-4 flex-grow line-clamp-3">
            {project.description}
          </p>

          {/* Tech Stack Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 text-xs font-medium bg-[#21262d] text-[#7c3aed] border border-[#30363d] rounded-md"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Links */}
          <div className="flex items-center gap-3 mt-auto pt-4 border-t border-[#21262d]">
            {project.githubUrl && (
              <Link
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[#8b949e] hover:text-[#58a6ff] transition-colors text-sm"
              >
                <Github size={18} />
                <span>Code</span>
              </Link>
            )}
            {project.liveUrl && (
              <Link
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[#8b949e] hover:text-[#58a6ff] transition-colors text-sm"
              >
                <ExternalLink size={18} />
                <span>Live Demo</span>
              </Link>
            )}
            {!project.githubUrl && !project.liveUrl && (
              <span className="text-[#484f58] text-sm">Coming soon</span>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

