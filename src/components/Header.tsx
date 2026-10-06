"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { site } from "@/lib/site";

const links = [
  { href: "/", label: "Inicio" },
  { href: "/#servicios", label: "Servicios" },
  { href: "/#nosotros", label: "Nosotros" },
  { href: "/#contacto", label: "Contacto" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-navy/95 backdrop-blur border-b border-white/10">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
        <Link href="/" className="flex items-center" onClick={() => setOpen(false)}>
          <Image src="/images/logo.png" alt={site.name} width={64} height={64} className="h-14 w-auto" priority />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="text-sm uppercase tracking-wider text-white/90 transition hover:text-gold">
              {l.label}
            </Link>
          ))}
          <a href={site.phoneHref} className="rounded bg-gold px-5 py-2 text-sm font-semibold text-white transition hover:bg-gold-light">
            {site.phone}
          </a>
        </nav>

        <button
          type="button"
          aria-label="Abrir menú"
          className="md:hidden p-2 text-white"
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M3 6h18M3 12h18M3 18h18" />}
          </svg>
        </button>
      </div>

      {open && (
        <nav className="md:hidden border-t border-white/10 bg-navy px-5 pb-5">
          {links.map((l) => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)} className="block py-3 uppercase tracking-wider text-white/90 hover:text-gold">
              {l.label}
            </Link>
          ))}
          <a href={site.phoneHref} className="mt-2 block rounded bg-gold px-5 py-3 text-center font-semibold text-white">
            {site.phone}
          </a>
        </nav>
      )}
    </header>
  );
}
