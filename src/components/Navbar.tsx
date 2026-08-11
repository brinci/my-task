"use client";
import { useState } from "react";
import { Home, User, Zap, Briefcase, Folder, Mail, Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navLinks = [
    { href: "#home", label: "Home", icon: Home },
    { href: "#about", label: "About", icon: User },
    { href: "#skills", label: "Skills", icon: Zap },
    { href: "#experience", label: "Experience", icon: Briefcase },
    { href: "#projects", label: "Projects", icon: Folder },
    { href: "#contact", label: "Contact", icon: Mail },
  ];

  return (
    <nav className="fixed top-0 left-0 z-50 w-full bg-black/30 backdrop-blur-2xl shadow-lg">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <a href="#home" className="flex items-center" onClick={() => setIsOpen(false)}>
          <div className="flex h-10 w-24 items-center justify-center rounded-lg border-2 border-pink-500 bg-black/40 shadow-[0_0_12px_rgba(236,72,153,0.5)]">
            <span className="text-lg font-black tracking-tighter">
              <span className="text-pink-400">B</span>
              <span className="text-cyan-300">R</span>
              <span className="text-green-400">I</span>
              <span className="text-yellow-400">N</span>
              <span className="text-blue-400">C</span>
              <span className="text-purple-400">I</span>
            </span>
          </div>
        </a>
        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium text-white transition hover:text-white/70"
              >
                <link.icon size={20} className="text-green-400" />
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-lg p-2 text-white md:hidden"
          aria-label="Menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* ========== MOBILE MENU ========== */}
      {isOpen && (
        <div className="md:hidden">
          <ul className="flex flex-col gap-1 bg-black/90 px-4 py-4 backdrop-blur-xl">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setIsOpen(false)} // close menu after click
                  className="flex items-center gap-3 rounded-lg px-4 py-3 text-base font-medium text-white transition hover:bg-white/10"
                >
                  <link.icon size={20} className="text-green-400" />
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="absolute bottom-0 left-0 h-[2px] w-full overflow-hidden">
        <div className="h-full w-1/3 animate-[moveLine_3s_linear_infinite] bg-gradient-to-r from-transparent via-green-400 to-transparent"></div>
      </div>
    </nav>
  );
};

export default Navbar;