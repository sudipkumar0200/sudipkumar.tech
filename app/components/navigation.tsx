"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

export default function Navigation() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <nav className="fixed w-full z-50 bg-background/80 backdrop-blur-sm border-b">
      <div className="container mx-auto px-14 py-6 flex items-center justify-between">
        <a href="#home" className="text-xl font-bold animate-plus">
          sudipkumar.tech
        </a>
        <div className="flex items-center gap-12">
          {["about", "skills", "projects", "contact"].map((item, index) => (
            <a
              key={item}
              href={`#${item}`}
              className="nav-item hover:text-primary transition-colors"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
