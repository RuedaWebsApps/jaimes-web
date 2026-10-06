import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";

const year = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="paper relative">
      <div className="absolute inset-0 bg-gradient-to-b from-navy-dark to-navy-dark/90" />
      <div className="relative mx-auto max-w-6xl px-5 py-16">
        <div className="grid gap-10 text-center md:grid-cols-3 md:items-center">
          <div>
            <h2 className="mb-4 font-serif text-2xl font-bold text-sand">Office Hours</h2>
            {site.hours.map((h) => (
              <p key={h} className="mb-2 text-white">{h}</p>
            ))}
          </div>

          <div className="flex justify-center">
            <Image src="/images/logo.png" alt={`Logo de ${site.name}`} width={208} height={208} className="h-auto max-h-52 w-auto" />
          </div>

          <div>
            <h2 className="mb-4 font-serif text-2xl font-bold text-sand">Contact Info</h2>
            <address className="not-italic">
              <p className="mb-4">
                <a href={site.mapsUrl} target="_blank" rel="noopener noreferrer" className="text-white hover:text-gold">
                  {site.address}
                  <span className="sr-only"> (abre Google Maps en una nueva pestaña)</span>
                </a>
              </p>
              <p className="mb-2"><a href={site.phoneHref} className="text-white hover:text-gold">{site.phone}</a></p>
              <p className="mb-2"><a href={`mailto:${site.email}`} className="text-white hover:text-gold">{site.email}</a></p>
            </address>
            <nav aria-label="Legal">
              <p className="mb-2"><Link href="/terminos-y-condiciones" className="text-[#0C71C3] hover:underline">Términos y condiciones</Link></p>
              <p className="mb-2"><Link href="/politica-de-privacidad" className="text-[#0C71C3] hover:underline">Políticas de privacidad</Link></p>
              <p className="mb-2"><Link href="/aviso-legal" className="text-[#0C71C3] hover:underline">Aviso legal</Link></p>
              <p><Link href="/accesibilidad" className="text-[#0C71C3] hover:underline">Accesibilidad</Link></p>
            </nav>
          </div>
        </div>

        <div className="mt-10 flex justify-center gap-3">
          <a href={site.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook (abre en una nueva pestaña)" className="flex h-10 w-10 items-center justify-center rounded-full bg-gold text-white transition hover:bg-gold-light">
            <svg aria-hidden="true" focusable="false" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M14 8h3V4h-3c-2.8 0-5 2.2-5 5v2H7v4h2v7h4v-7h3l1-4h-4V9c0-.6.4-1 1-1z" /></svg>
          </a>
          <a href={site.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram (abre en una nueva pestaña)" className="flex h-10 w-10 items-center justify-center rounded-full bg-gold text-white transition hover:bg-gold-light">
            <svg aria-hidden="true" focusable="false" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" fill="currentColor" /></svg>
          </a>
        </div>

        <hr className="my-6 border-sand/60" />

        {/* Avisos legales obligatorios / recomendados (no afiliación gubernamental, licencia) */}
        <p className="mx-auto max-w-4xl text-center text-xs leading-relaxed text-white/70">
          {site.legalName} es una empresa privada y no está afiliada, respaldada ni autorizada por el IRS, el Texas Comptroller, el
          Texas Department of Motor Vehicles (TxDMV) ni ninguna otra agencia gubernamental. La información de este sitio es solo informativa y
          no constituye asesoría legal, fiscal o financiera. La cobertura de seguros está sujeta a los términos, condiciones y aprobación de cada aseguradora.
          {site.tdiLicense && <> Licencia de agencia TDI #{site.tdiLicense}.</>}
        </p>

        <p className="mt-4 text-center text-sm text-white">
          © {year} {site.legalName}. Todos los derechos reservados. | Designed by Rueda la Rola Media
        </p>
      </div>
    </footer>
  );
}
