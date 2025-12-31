"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Github, Loader2, AlertCircle } from "lucide-react";
import GitHubRepoCard from "./GitHubRepoCard";

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

export default function GitHubRepos() {
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        setLoading(true);
        // Fetch repositories sorted by updated date (most recently updated first)
        const response = await fetch(
          "https://api.github.com/users/naokiwork/repos?sort=updated&per_page=9&type=all"
        );

        if (!response.ok) {
          throw new Error("Failed to fetch repositories");
        }

        const data = await response.json();
        setRepos(data);
        setError(null);
      } catch (err) {
        setError("Failed to load GitHub repositories");
        console.error("Error fetching GitHub repos:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, []);

  return (
    <section id="github-repos" className="py-20 px-4 bg-[#0d1117]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Github size={32} className="text-[#58a6ff]" />
            <h2 className="text-4xl md:text-5xl font-bold text-[#c9d1d9]">
              GitHub Repositories
            </h2>
          </div>
          <p className="text-xl text-[#8b949e] max-w-2xl mx-auto mb-4">
            A collection of my open-source projects and contributions
          </p>
          <a
            href="https://github.com/naokiwork?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[#58a6ff] hover:text-[#79c0ff] transition-colors text-sm"
          >
            View all repositories
            <Github size={16} />
          </a>
        </motion.div>

        {loading && (
          <div className="flex items-center justify-center py-20">
            <Loader2 size={32} className="text-[#58a6ff] animate-spin" />
            <span className="ml-3 text-[#8b949e]">Loading repositories...</span>
          </div>
        )}

        {error && (
          <div className="flex items-center justify-center py-20">
            <AlertCircle size={32} className="text-[#f85149]" />
            <span className="ml-3 text-[#8b949e]">{error}</span>
          </div>
        )}

        {!loading && !error && repos.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {repos.map((repo, index) => (
              <GitHubRepoCard key={repo.id} repo={repo} index={index} />
            ))}
          </div>
        )}

        {!loading && !error && repos.length === 0 && (
          <div className="text-center py-20">
            <p className="text-[#8b949e]">No repositories found</p>
          </div>
        )}
      </div>
    </section>
  );
}

