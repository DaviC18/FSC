// src/components/layout/NavbarDesktop.tsx
/** biome-ignore-all assist/source/organizeImports: <> */

"use client";

import { navLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import FSC from "../public/images/logo.png"

export default function NavbarDesktop() {
  const pathname = usePathname();

  return (
    <nav className="mx-auto hidden h-20 max-w-7xl items-center justify-between px-6 lg:flex">
      <Link href="/" className="group flex items-center gap-3">
        <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-white/5 shadow-[0_0_30px_rgba(255,255,255,0.08)]">
          <Image src={FSC} width={50} height={50} alt={""}/>
          {/* <span className="text-sm font-black tracking-tight text-white">
            LC
          </span> */}
        </div>

        <div className="leading-none">
          <p className="text-sm font-black uppercase tracking-[0.25em] text-white">
            LifeStyle
          </p>
          <p className="mt-1 text-xs uppercase tracking-[0.35em] text-zinc-500">
            Core
          </p>
        </div>
      </Link>

      <div className="flex items-center gap-1 rounded-full border border-white/10 bg-white/3 p-1">
        {navLinks.map((link) => {
          const isActive =
            link.href === "/"
              ? pathname === "/"
              : pathname.startsWith(link.href);

          return (
            <Link
              key={link.id}
              href={link.href}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ${
                isActive
                  ? "bg-white text-black shadow-[0_0_25px_rgba(255,255,255,0.18)]"
                  : "text-zinc-400 hover:bg-white/5 hover:text-white"
              }`}
            >
              {link.title}
            </Link>
          );
        })}
      </div>

      <Link
        href="/mente-em-pausa"
        className="rounded-full bg-linear-to-r from-white to-zinc-400 px-5 py-2.5 text-sm font-bold text-black shadow-[0_0_30px_rgba(255,255,255,0.14)] transition-all duration-300 hover:scale-[1.03] hover:from-white hover:to-white"
      >
        Conhecer o Kit
      </Link>
    </nav>
  );
}
