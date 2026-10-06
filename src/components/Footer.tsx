import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="paper relative">
      <div className="absolute inset-0 bg-gradient-to-b from-navy-dark to-navy-dark/90" />
      <div className="relative mx-auto max-w-6xl px-5 py-16">
        <div className="grid gap-10 text-center md:grid-cols-3 md:items-center">
          <div>
            <h4 className="mb-4 font-serif text-2xl font-bold text-sand">Office Hours</h4>
            {site.hours.map((h) => (
              <p key={h} className="mb-2 text-white">{h}</p>
            ))}
          </div>

          <div className="flex justify-center">
            <Image src="/images/logo.png" alt={site.name} width={208} height={208} className="h-auto max-h-52 w-auto" />
          </div>

          <div>
            <h4 className="mb-4 font-serif text-2xl font-bold text-sand">Contact Info</h4>
            <p className="mb-4 text-white">{site.address}</p>
            <p className="mb-2"><a href={site.phoneHref} className="text-white hover:text-gold">{site.phone}</a></p>
            <p className="mb-2"><a href={`mailto:${site.email}`} className="text-white hover:text-gold">{site.email}</a></p>
            <p className="mb-2"><Link href="/terminos-y-condiciones" className="text-[#0C71C3] hover:underline">Términos y condiciones</Link></p>
            <p><Link href="/politica-de-privacidad" className="text-[#0C71C3] hover:underline">Políticas de privacidad</Link></p>
          </div>
        </div>

        <div className="mt-10 flex justify-center gap-3">
          <a href={site.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="flex h-10 w-10 items-center justify-center rounded-full bg-gold text-white transition hover:bg-gold-light">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M14 8h3V4h-3c-2.8 0-5 2.2-5 5v2H7v4h2v7h4v-7h3l1-4h-4V9c0-.6.4-1 1-1z" /></svg>
          </a>
          <a href={site.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="flex h-10 w-10 items-center justify-center rounded-full bg-gold text-white transition hover:bg-gold-light">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" fill="currentColor" /></svg>
          </a>
        </div>

        <hr className="my-6 border-sand/60" />
        <p className="text-center text-sm text-white">Designed by Rueda la Rola Media | 2025®</p>
      </div>
    </footer>
  );
}
