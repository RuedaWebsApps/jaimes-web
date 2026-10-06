import Image from "next/image";
import { site } from "@/lib/site";

const mainServices = [
  {
    icon: "/images/attorney-2.png",
    title: "Contabilidad y Nómina",
    text: "Servicios contables profesionales y manejo de nóminas para que tu negocio funcione sin complicaciones.",
    overlay: "bg-[rgba(202,182,161,0.9)]",
    dark: true,
  },
  {
    icon: "/images/attorney-1.png",
    title: "Preparación de Impuestos Personales y para Negocios",
    text: "Declaraciones de impuestos federales y estatales para individuos, emprendedores y pequeñas empresas.",
    overlay: "bg-[rgba(73,81,100,0.9)]",
    dark: false,
  },
  {
    icon: "/images/attorney-3.png",
    title: "Seguros de Auto, Comercial y de Negocios",
    text: "Protección personalizada para tu vehículo, tu empresa o tu operación comercial.",
    overlay: "bg-[rgba(153,148,132,0.9)]",
    dark: false,
  },
];

const extraServices = [
  { icon: "/images/attorney-icon-06.png", title: "Seguro de Vida", text: "Opciones de seguros de vida accesibles para proteger a tus seres queridos." },
  { icon: "/images/attorney-icon-02.png", title: "Registros de Negocios", text: "Asesoría y gestión para abrir nuevos negocios o actualizar registros existentes." },
  { icon: "/images/attorney-icon-04.png", title: "Cambios de Título de Auto", text: "Servicio rápido y confiable para cambios de título vehicular en Texas." },
  { icon: "/images/attorney-icon-05.png", title: "Fianzas (Bonds)", text: "Emisión de bonds para trámites legales, garantías comerciales y proyectos." },
];

const reasons = [
  { title: "Atención Personalizada", text: "Tratamos a cada cliente como parte de nuestra comunidad, escuchando sus necesidades y ofreciendo soluciones claras." },
  { title: "Más de 10 Años de Experiencia", text: "Desde 2011 hemos ayudado a cientos de familias y negocios en Austin con resultados sólidos y consistentes." },
  { title: "Servicio Bilingüe y Accesible", text: "Ofrecemos atención en español e inglés, para que te sientas cómodo y comprendido durante todo el proceso." },
];

const testimonials = [
  { quote: "Excelente servicio. Me ayudaron rápido y me explicaron todo el proceso. Muy recomendados.", author: "María G." },
  { quote: "Con ellos he hecho mis impuestos por años. Siempre profesionales y confiables.", author: "José R." },
  { quote: "Además de mis impuestos, aseguré mi carro con ellos. Súper fácil y buen precio.", author: "Luis A." },
];

function OutlineButton({ children }: { children: React.ReactNode }) {
  return (
    <a
      href={site.phoneHref}
      className="inline-block border-2 border-gold px-8 py-3 font-semibold uppercase tracking-wider text-white transition hover:bg-gold"
    >
      {children}
    </a>
  );
}

export default function Home() {
  return (
    <>
      {/* HEADER / HERO */}
      <section className="relative overflow-hidden">
        <Image src="/images/attorney-7-1.jpg" alt="" fill priority className="object-cover" sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-b from-[rgba(18,39,63,0.84)] to-navy" />
        <div className="relative mx-auto max-w-[800px] px-5 pt-[12vw] pb-[16vw] text-center md:pb-[18vw]">
          <Image src="/images/attorney-1.png" alt="" width={130} height={20} className="mx-auto mb-6 w-[130px]" />
          <h1 className="font-serif text-4xl font-bold leading-tight text-gold-light md:text-[51px]">
            Jaimes Tax &amp; Insurance agency LLC.
          </h1>
          <h5 className="mx-auto mt-6 max-w-2xl text-lg font-medium text-white md:text-xl">
            Más de 10 años ayudando a personas y pequeños negocios con impuestos, seguros, contabilidad y registros en Austin.
          </h5>
          <a
            href={site.phoneHref}
            className="mt-8 inline-block bg-gold px-8 py-4 font-semibold uppercase tracking-wider text-white transition hover:bg-gold-light"
          >
            Schedule a Free Consultation
          </a>
        </div>
      </section>

      {/* SERVICES */}
      <section id="servicios" className="bg-beige pb-20 text-navy scroll-mt-24">
        <div className="mx-auto grid max-w-6xl gap-0 px-5 md:-mt-[10vw] md:grid-cols-3 relative z-10">
          {mainServices.map((s) => (
            <div key={s.title} className="paper relative">
              <div className={`absolute inset-0 ${s.overlay}`} />
              <div className={`relative px-6 py-10 text-center md:px-8 md:py-16 ${s.dark ? "text-black" : "text-white"}`}>
                <Image src={s.icon} alt="" width={130} height={20} className="mx-auto mb-6 w-[130px]" />
                <h3 className={`font-serif text-2xl font-bold ${s.dark ? "text-navy" : "text-white"}`}>{s.title}</h3>
                <p className="mt-4 leading-relaxed">{s.text}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-16 grid max-w-6xl gap-10 px-5 sm:grid-cols-2 lg:grid-cols-4">
          {extraServices.map((s) => (
            <div key={s.title} className="text-center">
              <Image src={s.icon} alt="" width={80} height={80} className="mx-auto mb-4 h-20 w-auto" />
              <h5 className="text-lg font-semibold text-navy">{s.title}</h5>
              <p className="mt-2 text-sm leading-relaxed text-slate">{s.text}</p>
            </div>
          ))}
        </div>

        <div className="mt-14 text-center">
          <a
            href="#contacto"
            className="inline-block bg-navy px-8 py-4 font-semibold uppercase tracking-wider text-gold transition hover:bg-blue"
          >
            Contáctanos para mas información
          </a>
        </div>
      </section>

      {/* ABOUT */}
      <section
        id="nosotros"
        className="scroll-mt-24 pb-20"
        style={{ background: "linear-gradient(180deg, #e0dad2 20%, #454a53 20%, #12273f 100%)" }}
      >
        <div className="mx-auto max-w-6xl px-5">
          <Image src="/images/attorney-8-1.jpg" alt="Jaimes Tax & Insurance" width={1200} height={600} className="h-auto w-full" />
          <div className="mt-14 grid gap-10 md:grid-cols-2">
            <div className="md:pt-[2vw]">
              <h2 className="font-serif text-3xl font-bold leading-tight text-gold md:text-[41px]">
                Más de una Década Brindando Confianza y Resultados en Austin, TX
              </h2>
              <div className="mt-8">
                <OutlineButton>Contáctanos</OutlineButton>
              </div>
            </div>
            <div className="space-y-5 leading-relaxed text-white">
              <p>
                Desde 2011, en <strong>Jaimes Tax &amp; Insurance agency LLC.</strong> hemos trabajado con dedicación para ayudar a nuestra comunidad con servicios confiables en impuestos, seguros y contabilidad. Atendemos tanto a individuos como a pequeños negocios, ofreciendo soluciones personalizadas con atención en español y experiencia local. Nuestro compromiso es que cada cliente entienda su situación financiera y obtenga siempre el mejor resultado posible.
              </p>
              <p>
                Nos enorgullece ser un negocio local con raíces fuertes en Austin, TX. Valoramos la honestidad, la claridad y la eficiencia en todo lo que hacemos. Ya sea que necesites preparar tus impuestos, asegurar tu vehículo o registrar tu empresa, estamos aquí para apoyarte con un servicio profesional, cercano y transparente.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="bg-navy py-20">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 lg:grid-cols-2">
          <div className="grid grid-cols-2 gap-1">
            <div className="pt-0 md:pt-[60px]">
              <Image src="/images/attorney-9-1.jpg" alt="" width={600} height={800} className="h-auto w-full" />
            </div>
            <div>
              <Image src="/images/attorney-10-1.jpg" alt="" width={600} height={800} className="h-auto w-full" />
            </div>
          </div>
          <div className="lg:pt-[90px]">
            <h2 className="font-serif text-3xl font-bold leading-tight text-gold md:text-[40px]">
              ¿Por Qué Elegir Jaimes Tax &amp; Insurance agency LLC.?
            </h2>
            <Image src="/images/attorney-1.png" alt="" width={65} height={10} className="my-6 w-[65px]" />
            <p className="leading-relaxed text-white">
              Sabemos que elegir un servicio de impuestos o seguros es una decisión importante. Por eso, en Jaimes Tax &amp; Insurance agency LLC. trabajamos con un enfoque centrado en la confianza, la experiencia y la atención personalizada. Nuestra prioridad es que cada cliente se sienta respaldado y obtenga resultados claros y eficaces.
            </p>
            <div className="mt-8 space-y-6">
              {reasons.map((r) => (
                <div key={r.title} className="flex gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gold text-white">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12l5 5L19 7" /></svg>
                  </span>
                  <div>
                    <h4 className="font-serif text-xl font-bold text-white">{r.title}</h4>
                    <p className="mt-1 leading-relaxed text-white/90">{r.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="bg-navy pb-20">
        <div className="mx-auto grid max-w-6xl px-5 md:grid-cols-5">
          <div className="py-6 md:col-span-2 md:pr-10">
            <h2 className="font-serif text-3xl font-bold leading-tight text-gold md:text-[40px]">
              ¿ESTÁS LISTO PARA RECIBIR AYUDA PROFESIONAL?
            </h2>
            <Image src="/images/attorney-1.png" alt="" width={65} height={10} className="my-6 w-[65px]" />
            <p className="leading-relaxed text-white">
              No importa si estás comenzando tu negocio, necesitas ayuda con tus impuestos o buscas proteger lo que más valoras — en Jaimes Tax &amp; Insurance agency LLC. estamos listos para ayudarte. Te ofrecemos un trato honesto, precios accesibles y una atención cercana que marca la diferencia. ¡Llámanos hoy y déjanos mostrarte por qué nuestros clientes confían en nosotros año tras año!
            </p>
            <div className="mt-8">
              <OutlineButton>Contáctanos</OutlineButton>
            </div>
          </div>
          <div className="relative min-h-[40vw] md:col-span-3 md:min-h-0">
            <Image src="/images/attorney-11-1.jpg" alt="" fill className="object-cover" sizes="(min-width: 768px) 60vw, 100vw" />
          </div>
        </div>
      </section>

      {/* CONTACT INFO */}
      <section id="contacto" className="bg-navy pb-20 scroll-mt-24">
        <div className="mx-auto max-w-6xl px-5">
          <div className="border-2 border-[rgba(202,182,161,0.3)] p-2.5">
            <div className="paper relative">
              <div className="absolute inset-0 bg-[rgba(202,182,161,0.7)]" />
              <div className="relative px-8 py-10 text-center md:p-16">
                <h3 className="font-serif text-2xl font-bold text-navy">Llama ahora para una consulta gratuita</h3>
                <a href={site.phoneHref} className="mt-4 block font-serif text-4xl font-bold text-navy hover:text-blue md:text-5xl">
                  {site.phone}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-navy pb-24">
        <div className="mx-auto max-w-6xl px-5">
          <h2 className="text-center font-serif text-3xl font-bold text-gold md:text-[40px]">Lo Que Dicen Nuestros Clientes</h2>
          <div className="mt-12 grid gap-10 md:grid-cols-3">
            {testimonials.map((t) => (
              <div key={t.author}>
                <p className="mb-3 text-xl text-gold">★★★★★</p>
                <p className="text-lg font-medium leading-relaxed text-white">&ldquo;{t.quote}&rdquo;</p>
                <p className="mt-3 text-lg text-white">– <em>{t.author}</em></p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
