"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-scroll";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { label: "About", href: "about" },
    { label: "Skills", href: "skills" },
    { label: "Projects", href: "projects" },
    { label: "Contact", href: "contact" },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed w-full z-50 bg-background/80 backdrop-blur-sm border-b">
      <div className=" container  mx-auto px-4 py-6 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-10">
          {/* Logo */}
          <div className="flex-shrink-0 text-xl font-bold animate-plus">
            <Link  to="home" spy={true} smooth={true} duration={500} className="text-2xl font-bold animate-plus">sudipkumar.tech</Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-12">
            {navLinks.map((link, index) => (
              <Link
                key={link.href}
                to={`${link.href}`}
                spy={true} smooth={true} duration={700} activeClass="active" offset={50}
                className="nav-item hover:text-primary transition-colors active:text-primary "
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-green-600 hover:text-green-600 focus:outline-none"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={`#${link.href}`}
                  className="text-gray-700 hover:text-green-600 block px-3 py-2 rounded-md transition-colors duration-300"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
