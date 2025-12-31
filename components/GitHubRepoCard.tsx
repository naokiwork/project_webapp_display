"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, Star, GitFork } from "lucide-react";
import Link from "next/link";

interface GitHubRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  updated_at: string;
}

interface GitHubRepoCardProps {
  repo: GitHubRepo;
  index: number;
}

export default function GitHubRepoCard({ repo, index }: GitHubRepoCardProps) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now.getTime() - date.getTime());
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays === 0) return "today";
    if (diffDays === 1) return "yesterday";
    if (diffDays < 7) return `${diffDays} days ago`;
    if (diffDays < 30) return `${Math.floor(diffDays / 7)} weeks ago`;
    if (diffDays < 365) return `${Math.floor(diffDays / 30)} months ago`;
    return `${Math.floor(diffDays / 365)} years ago`;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group"
    >
      <div className="bg-[#161b22] border border-[#30363d] rounded-lg overflow-hidden hover:border-[#58a6ff] transition-all duration-300 h-full flex flex-col">
        {/* Repository Header */}
        <div className="p-6 flex flex-col flex-grow">
          <div className="flex items-start justify-between mb-3">
            <Link
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 group-hover:text-[#58a6ff] transition-colors"
            >
              <Github size={20} className="text-[#8b949e] flex-shrink-0" />
              <h3 className="text-xl font-semibold text-[#58a6ff] truncate">
                {repo.name}
              </h3>
              <ExternalLink size={16} className="text-[#8b949e] opacity-0 group-hover:opacity-100 transition-opacity" />
            </Link>
          </div>

          {/* Description */}
          <p className="text-[#8b949e] mb-4 flex-grow line-clamp-3 text-sm">
            {repo.description || "No description available"}
          </p>

          {/* Language and Stats */}
          <div className="flex items-center gap-4 mb-4 flex-wrap">
            {repo.language && (
              <div className="flex items-center gap-2">
                <div
                  className="w-3 h-3 rounded-full"
                  style={{
                    backgroundColor:
                      repo.language === "TypeScript"
                        ? "#3178c6"
                        : repo.language === "JavaScript"
                        ? "#f1e05a"
                        : repo.language === "Python"
                        ? "#3572A5"
                        : repo.language === "HTML"
                        ? "#e34c26"
                        : repo.language === "CSS"
                        ? "#563d7c"
                        : repo.language === "Java"
                        ? "#b07219"
                        : "#8b949e",
                  }}
                />
                <span className="text-xs text-[#8b949e]">{repo.language}</span>
              </div>
            )}
            {repo.stargazers_count > 0 && (
              <Link
                href={`${repo.html_url}/stargazers`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-[#8b949e] hover:text-[#58a6ff] transition-colors text-xs"
              >
                <Star size={14} className="fill-[#8b949e] group-hover:fill-[#58a6ff]" />
                <span>{repo.stargazers_count}</span>
              </Link>
            )}
            {repo.forks_count > 0 && (
              <Link
                href={`${repo.html_url}/network/members`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-[#8b949e] hover:text-[#58a6ff] transition-colors text-xs"
              >
                <GitFork size={14} />
                <span>{repo.forks_count}</span>
              </Link>
            )}
          </div>

          {/* Updated Date */}
          <div className="pt-4 border-t border-[#21262d]">
            <span className="text-xs text-[#8b949e]">
              Updated {formatDate(repo.updated_at)}
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

