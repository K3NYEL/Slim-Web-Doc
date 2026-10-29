
"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, X, ArrowUpRight, ArrowDownToLine } from "lucide-react";

import Button from "./buttons/Buttons";
import Logo from "@public/slim-executor-mark.svg";


const navLinks = [
  { label: "Home", href: "/" },
  { label: "Contacto", href: "/contacto" },
];

const RepositoryLink = "https://github.com/K3NYEL/Slim-Executor-Releases.git"

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b-2 border-gray-700 bg-[#090909]/95 text-white backdrop-blur-md">
      <nav
        aria-label="Navegación principal"
        className="mx-auto flex min-h-20 max-w-7xl items-center justify-between px-5 py-4 sm:px-8"
      >
        {/* Logo */}
        <Link
          href={RepositoryLink}
          aria-label="Go to Repository"
          className="flex shrink-0 items-center gap-3"
          onClick={() => setMenuOpen(false)}
        >
          <Image
            src={Logo}
            alt="Slim Executor Logo"
            width={40}
            height={40}
            priority
            className="h-10 w-10 object-contain"
          />
          <span className="text-lg font-bold tracking-tight">
            Slim ExDoc
          </span>
        </Link>

        {/* Navegación de escritorio */}
        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-sm text-gray-400 transition-colors hover:text-white"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Acciones de escritorio */}
        <div className="hidden md:block">
          <Link href={RepositoryLink}>
            <Button
              variant="outline"
              rightIcon={<ArrowUpRight size={16} />}
            >
              Repository
            </Button>
          </Link>
          <a
            href="/download/slimdoc.pdf"
            download="SlimDoc-Manual.pdf"
            className="btn btn--primary btn--md"
          >
            Download Doc
            <ArrowDownToLine size={16} />
          </a>
        </div>
        {/* Botón móvil */}
        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center border border-white/15 transition-colors hover:bg-white/10 md:hidden"
          aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
      </nav>

      {/* Menú móvil */}
      {
        menuOpen && (
          <div
            id="mobile-navigation"
            className="border-t border-white/10 bg-[#090909] px-5 py-5 md:hidden"
          >
            <ul className="flex flex-col">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="block border-b border-white/5 py-4 text-sm text-gray-300 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-5">
              <Link
                href="/contacto"
                onClick={() => setMenuOpen(false)}
                className="block"
              >
                <Button fullWidth rightIcon={<ArrowUpRight size={16} />}>
                  Empezar
                </Button>
              </Link>
            </div>
          </div>
        )
      }
    </header >
  );
}
