import React from "react";
import { Link } from "react-router-dom";
import { Instagram, Linkedin, Github, Twitter, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-[#1F2937] bg-[#0B0F19] pt-16 pb-8 mt-auto relative z-10 w-full">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-6 text-center md:text-left">
        {/* 1️⃣ Brand Section */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-2xl font-extrabold tracking-tight text-[#F9FAFB] mb-3">
            CapCraft
          </h3>
          <p className="text-[#9CA3AF] font-light max-w-xs">
            AI-powered caption generator for creators. Turn your visual content
            into meaningful text in seconds.
          </p>
        </div>

        {/* 2️⃣ Quick Links Section */}
        <div className="flex flex-col items-center md:items-start">
          <h4 className="text-[#F9FAFB] font-bold mb-4 uppercase tracking-wider text-sm">
            Quick Links
          </h4>
          <div className="flex flex-col gap-3 text-[#9CA3AF] font-medium">
            <Link to="/" className="hover:text-[#6366F1] transition-colors">
              Home
            </Link>
            <Link
              to="/features"
              className="hover:text-[#6366F1] transition-colors"
            >
              Features
            </Link>
            <Link
              to="/about"
              className="hover:text-[#6366F1] transition-colors"
            >
              About
            </Link>
          </div>
        </div>

        {/* 3️⃣ Connect Section (Your Socials) */}
        <div className="flex flex-col items-center md:items-start">
          <h4 className="text-[#F9FAFB] font-bold mb-4 uppercase tracking-wider text-sm">
            Connect With Developer
          </h4>

          {/* Social Icons */}
          <div className="flex gap-4 text-[#9CA3AF] mb-4">
            <a
              href="https://github.com/Ruchit-thakkar"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-[#111827] border border-[#1F2937] hover:border-[#6366F1] hover:text-[#6366F1] hover:-translate-y-1 transition-all duration-300"
              title="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/ruchit-thakkar-38ab37379"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-[#111827] border border-[#1F2937] hover:border-[#6366F1] hover:text-[#6366F1] hover:-translate-y-1 transition-all duration-300"
              title="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="https://x.com/RuchitThakkar19"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-[#111827] border border-[#1F2937] hover:border-[#6366F1] hover:text-[#6366F1] hover:-translate-y-1 transition-all duration-300"
              title="X (Twitter)"
            >
              <Twitter size={20} />
            </a>
            <a
              href="https://www.instagram.com/ruchit1744?igsh=dzU1NzVqdjVvb2g2"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-[#111827] border border-[#1F2937] hover:border-[#6366F1] hover:text-[#6366F1] hover:-translate-y-1 transition-all duration-300"
              title="Instagram"
            >
              <Instagram size={20} />
            </a>
          </div>

          {/* Email Link */}
          <a
            href="mailto:ruchitthakkar12@gmail.com"
            className="flex items-center gap-2 text-[#9CA3AF] hover:text-[#6366F1] transition-colors font-medium text-sm"
          >
            <Mail size={16} />
            ruchitthakkar12@gmail.com
          </a>
        </div>
      </div>

      {/* 🟢 Copyright & Credit Section */}
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-[#1F2937]/50 flex flex-col md:flex-row items-center justify-between text-[#6B7280] text-sm px-6 gap-4">
        <p>© {new Date().getFullYear()} CapCraft. All rights reserved.</p>
        <p className="flex items-center gap-1 font-medium">
          Built with <span className="text-red-500 animate-pulse">❤️</span> by
          <a
            href="https://www.linkedin.com/in/ruchit-thakkar-38ab37379"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#9CA3AF] hover:text-[#6366F1] transition-colors ml-1"
          >
            Ruchit Thakkar
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
