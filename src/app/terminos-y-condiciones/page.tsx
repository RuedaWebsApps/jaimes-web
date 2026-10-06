import type { Metadata } from "next";
import Link from "next/link";
import LegalLayout from "@/components/LegalLayout";
import { site } from "@/lib/site";

export const metadata: Metadata = { title: "Términos y Condiciones" };

export default function TermsPage() {
  return (
    <LegalLayout title="Términos y condiciones">
      <p><b>Última actualización:</b> 11/20/2025</p>
      <p><b>Bienvenido a Jaimes Tax &amp; Insurance agency LLC.</b></p>
      <p>
        Al acceder a nuestro sitio web <Link href="/">https://jaimestaxins.com/</Link> y utilizar nuestros servicios, usted acepta cumplir y estar sujeto a los siguientes términos y condiciones de uso (&quot;Términos&quot;).
      </p>

      <h2>USO DE NUESTROS SERVICIOS</h2>
      <p>Usted acepta utilizar nuestros servicios (incluyendo preparación de impuestos, contabilidad, seguros, etc.) únicamente para fines legales y de la manera prevista. No debe usar nuestros servicios para participar en ninguna actividad fraudulenta o ilegal.</p>

      <h2>COMUNICACIONES ELECTRÓNICAS Y POR SMS</h2>
      <p>Al proporcionarnos su número de teléfono y dar su consentimiento, usted acepta recibir comunicaciones de nosotros, incluidos mensajes de texto (SMS). Usted reconoce y acepta que estos mensajes se definen explícitamente como <b>mensajes de atención al cliente</b>, lo cual puede incluir recordatorios de citas, actualizaciones sobre sus servicios y respuestas a sus consultas.</p>

      <h2>TÉRMINOS DEL SERVICIO DE SMS</h2>
      <p>Al optar por nuestro servicio de mensajería SMS, usted acepta los siguientes términos:</p>
      <ul>
        <li><b>Propósito:</b> Usted acepta recibir mensajes de texto (SMS) de Jaimes Tax &amp; Insurance agency LLC. Estos mensajes son estrictamente <b>mensajes de atención al cliente</b>, los cuales incluyen recordatorios de citas, actualizaciones de servicios y respuestas directas a sus solicitudes.</li>
        <li><b>Frecuencia:</b> La frecuencia de los mensajes varía según sus necesidades de comunicación e interacciones con nosotros.</li>
        <li><b>Tarifas:</b> Pueden aplicarse tarifas estándar de mensajes y datos de su operador de telefonía móvil.</li>
        <li><b>Comandos de Ayuda y Opt-Out:</b> Responda STOP a cualquier mensaje para cancelar su suscripción y dejar de recibir mensajes. Responda HELP para obtener asistencia.</li>
        <li><b>Privacidad:</b> Respetamos su privacidad. Su número de teléfono móvil no será vendido ni compartido con terceros para fines de marketing. Para obtener más información, consulte nuestra <Link href="/politica-de-privacidad">Política de Privacidad</Link>.</li>
      </ul>

      <h2>PROPIEDAD INTELECTUAL</h2>
      <p>El contenido de este sitio web, incluidos texto, gráficos y logotipos, es propiedad de Jaimes Tax &amp; Insurance agency LLC y está protegido por las leyes de derechos de autor.</p>

      <h2>LIMITACIÓN DE RESPONSABILIDAD</h2>
      <p>Jaimes Tax &amp; Insurance agency LLC no será responsable de ningún daño directo, indirecto, incidental o consecuente que resulte del uso o la incapacidad de usar nuestros servicios o sitio web.</p>

      <h2>LEY APLICABLE</h2>
      <p>Estos Términos se regirán e interpretarán de acuerdo con las leyes del estado de Texas, sin dar efecto a ningún principio de conflicto de leyes.</p>

      <h2>CAMBIOS A ESTOS TÉRMINOS</h2>
      <p>Nos reservamos el derecho de modificar estos Términos en cualquier momento. Publicaremos los cambios en esta página y entrarán en vigencia inmediatamente después de su publicación.</p>

      <h2>CONTACTO</h2>
      <p>
        Si tiene preguntas sobre estos Términos, contáctenos en: Jaimes Tax &amp; Insurance agency LLC {site.address}{" "}
        <a href={`mailto:${site.email}`}>{site.email}</a> {site.phone}
      </p>
    </LegalLayout>
  );
}
