"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Github, Menu, X } from "lucide-react";
import Link from "next/link";

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
    setMobileMenuOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0d1117]/80 backdrop-blur-md border-b border-[#30363d]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button
            onClick={() => scrollToSection("hero")}
            className="flex items-center gap-2 text-[#c9d1d9] hover:text-[#58a6ff] transition-colors"
          >
            <Github size={24} />
            <span className="font-semibold">Portfolio</span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("projects")}
              className="text-[#c9d1d9] hover:text-[#58a6ff] transition-colors text-sm font-medium"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-[#c9d1d9] hover:text-[#58a6ff] transition-colors text-sm font-medium"
            >
              Contact
            </button>
            <Link
              href="https://github.com/naokiwork"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#c9d1d9] hover:text-[#58a6ff] transition-colors"
            >
              <Github size={20} />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-[#c9d1d9] hover:text-[#58a6ff] transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden py-4 border-t border-[#30363d]"
          >
            <div className="flex flex-col gap-4">
              <button
                onClick={() => scrollToSection("projects")}
                className="text-left text-[#c9d1d9] hover:text-[#58a6ff] transition-colors text-sm font-medium py-2"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-left text-[#c9d1d9] hover:text-[#58a6ff] transition-colors text-sm font-medium py-2"
              >
                Contact
              </button>
              <Link
                href="https://github.com/naokiwork"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[#c9d1d9] hover:text-[#58a6ff] transition-colors text-sm font-medium py-2"
              >
                <Github size={18} />
                GitHub
              </Link>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}

