// src/components/layout/NavbarMobile.tsx
/** biome-ignore-all assist/source/organizeImports: <> */

"use client";

import { navLinks } from "@/constants";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function NavbarMobile() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  function closeMenu() {
    setIsOpen(false);
  }

  return (
    <nav className="lg:hidden">
      <div className="flex h-16 items-center justify-between px-5">
        <Link href="/" onClick={closeMenu} className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/5">
            <span className="text-xs font-black text-white">LC</span>
          </div>

          <div className="leading-none">
            <p className="text-xs font-black uppercase tracking-[0.22em] text-white">
              LifeStyle
            </p>
            <p className="mt-1 text-[10px] uppercase tracking-[0.35em] text-zinc-500">
              Core
            </p>
          </div>
        </Link>

        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/3 text-white transition hover:bg-white/10"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {isOpen && (
        <div className="border-t border-white/10 bg-[#0B0B0B] px-5 py-5 shadow-2xl">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
                  className={`rounded-2xl px-4 py-3 text-sm font-medium transition-all ${
                    isActive
                      ? "bg-white text-black"
                      : "bg-white/3 text-zinc-300 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  {link.title}
                </Link>
              );
            })}
          </div>

          <Link
            href="/mente-em-pausa"
            onClick={closeMenu}
            className="mt-5 flex w-full items-center justify-center rounded-2xl bg-linear-to-r from-white to-zinc-400 px-5 py-3 text-sm font-bold text-black transition hover:from-white hover:to-white"
          >
            Conhecer o Kit
          </Link>
        </div>
      )}
    </nav>
  );
}