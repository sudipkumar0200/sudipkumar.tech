"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const [mounted, setMounted] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navLinks = ["about", "skills", "projects", "Contact"];
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <nav className="fixed w-full z-50 bg-background/80 backdrop-blur-sm border-b">
      <div className="container mx-auto px-14 py-6 flex items-center justify-between">
        <a href="/" className="text-xl font-bold animate-plus">
          sudipkumar.tech
        </a>
        <div className="flex items-center gap-12">
          {navLinks.map((item, index) => (
            <a
              key={item}
              href={`#${item}`}
              className="nav-item hover:text-primary transition-colors text-lg"
              style={{ animationDelay: `${index * 100}ms` }}
            ></a>
          ))}
        </div>
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-500 hover:text-blue-600 focus:outline-none"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link}`}
                className="text-gray-700 hover:bg-blue-50 hover:text-blue-600 block px-3 py-2 rounded-md transition-colors duration-300"
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
