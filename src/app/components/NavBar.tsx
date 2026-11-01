"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight, ArrowDownToLine, CheckCircle } from "lucide-react";
import Button from "./buttons/Buttons";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Contacto", href: "/contacto" },
  { label: "Version", href: "/versions" },
];

const RepositoryLink = "https://github.com/K3NYEL/Slim-Executor-Releases";

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [downloadMessage, setDownloadMessage] = useState(false);

  useEffect(() => {
    if (!downloadMessage) return;
    const timer = setTimeout(() => setDownloadMessage(false), 3000);
    return () => clearTimeout(timer);
  }, [downloadMessage]);

  return (
    <header className="nav-motion border-b-2 border-gray-700 bg-[#090909]/95 text-white backdrop-blur-md">
      <nav
        aria-label="Navegación principal"
        className="mx-auto flex min-h-20 max-w-7xl items-center justify-between px-5 py-4 sm:px-8"
      >
        <Link href="/" aria-label="Slim Executor documentation home" className="flex shrink-0 items-center gap-3" onClick={() => setMenuOpen(false)}>
          <Image src="/slim-executor-mark.svg" alt="Slim Executor Logo" width={40} height={40} priority className="h-10 w-10 object-contain transition-transform duration-300 hover:rotate-[-6deg] hover:scale-105" />
          <span className="text-lg font-bold tracking-tight">S.E Documentation</span>
        </Link>

        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="group relative text-sm text-gray-400 transition-colors duration-200 hover:text-white">
                {link.label}
                <span className="absolute -bottom-2 left-0 h-px w-0 bg-[#dc2626] transition-all duration-200 group-hover:w-full" />
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 md:flex">
          <Link href={RepositoryLink} target="_blank" rel="noopener noreferrer">
            <Button variant="outline" rightIcon={<ArrowUpRight size={16} />}>Repository</Button>
          </Link>
          <div className="relative">
            <a href="/download/slimdoc.pdf" download="SlimDoc-Manual.pdf" onClick={() => setDownloadMessage(true)} className="btn btn--secondary btn--md transition-transform duration-200 hover:-translate-y-0.5">
              Download Doc <ArrowDownToLine size={16} />
            </a>
            {downloadMessage && (
              <div role="status" className="absolute right-0 top-full mt-3 flex w-max items-center gap-2 border border-white/10 bg-[#111] px-3 py-2 text-sm text-green-400 shadow-xl">
                <CheckCircle size={18} /> Your download has started!
              </div>
            )}
          </div>
        </div>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center border border-white/15 transition-all duration-200 hover:border-[#dc2626] hover:bg-white/10 md:hidden"
          aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
      </nav>

      {menuOpen && (
        <div id="mobile-navigation" className="mobile-menu-motion border-t border-white/10 bg-[#090909] px-5 py-5 md:hidden">
          <ul className="flex flex-col">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} onClick={() => setMenuOpen(false)} className="block border-b border-white/5 py-4 text-sm text-gray-300 transition-colors hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-5 grid gap-3">
            <Link href={RepositoryLink} target="_blank" rel="noopener noreferrer" onClick={() => setMenuOpen(false)} className="block">
              <Button fullWidth rightIcon={<ArrowUpRight size={16} />}>Repository</Button>
            </Link>
            <a href="/download/slimdoc.pdf" download="SlimDoc-Manual.pdf" onClick={() => setMenuOpen(false)} className="btn btn--secondary btn--md w-full justify-center">
              Download Doc <ArrowDownToLine size={16} />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
