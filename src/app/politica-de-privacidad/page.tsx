import type { Metadata } from "next";
import Link from "next/link";
import LegalLayout from "@/components/LegalLayout";
import { site } from "@/lib/site";

export const metadata: Metadata = { title: "Política de Privacidad" };

export default function PrivacyPage() {
  return (
    <LegalLayout title="Política de Privacidad">
      <p><b>Última actualización:</b> 11/20/2025</p>
      <p>
        Jaimes Tax &amp; Insurance agency LLC se compromete a proteger su privacidad. Esta Política de Privacidad explica cómo recopilamos, usamos, divulgamos y protegemos su información cuando visita nuestro sitio web{" "}
        <Link href="/">https://jaimestaxins.com/</Link>, o cuando utiliza nuestros servicios, incluidas nuestras comunicaciones por SMS.
      </p>

      <h2>RECOPILACIÓN DE SU INFORMACIÓN</h2>
      <p>Podemos recopilar información sobre usted de varias maneras. La información que podemos recopilar en el Sitio incluye:</p>
      <ul>
        <li><b>Datos Personales:</b> Información de identificación personal, como su nombre, dirección de correo electrónico, número de teléfono, y cualquier otra información que nos proporcione voluntariamente al solicitar una cotización o contactarnos.</li>
        <li><b>Datos Financieros y de Seguros:</b> Información relacionada con sus impuestos, contabilidad, nómina, o pólizas de seguro (auto, hogar, vida, comercial) que usted proporciona para que podamos prestarle nuestros servicios. Esta información se considera altamente sensible y se maneja con el más alto nivel de confidencialidad.</li>
        <li><b>Datos Derivados:</b> Información que nuestros servidores recopilan automáticamente cuando accede al Sitio, como su dirección IP, tipo de navegador, sistema operativo, etc.</li>
      </ul>

      <h2>USO DE SU INFORMACIÓN</h2>
      <p>Usamos la información recopilada sobre usted para:</p>
      <ul>
        <li>Proveer y gestionar sus servicios de impuestos, seguros, contabilidad y otros servicios solicitados.</li>
        <li>Crear y gestionar su cuenta.</li>
        <li>Enviarle comunicaciones operativas, como recordatorios de citas, actualizaciones de servicios y respuestas a sus consultas (incluso por SMS).</li>
        <li>Responder a sus solicitudes de servicio al cliente.</li>
        <li>Cumplir con los requisitos legales y reglamentarios.</li>
      </ul>

      <h2>CONSENTIMIENTO Y AUTORIZACIÓN</h2>
      <p>
        Al proporcionarnos su número de teléfono, ya sea a través de nuestros formularios en el sitio web, por correo electrónico, o <b>verbalmente durante una consulta en persona o telefónica</b>, usted otorga su consentimiento expreso para recibir comunicaciones, incluidos mensajes de texto (SMS), de Jaimes Tax &amp; Insurance agency LLC relacionados con nuestros servicios. Usted reconoce que este consentimiento no es una condición para comprar ningún bien o servicio.
      </p>

      <h2>POLÍTICA DE PRIVACIDAD PARA COMUNICACIONES POR SMS</h2>
      <p>Nos adherimos a estrictos estándares de privacidad con respecto a las comunicaciones por SMS.</p>
      <p>
        &quot;No se compartirá ni recopilará información móvil con terceros/afiliados para fines de marketing/promoción. Todas las demás categorías excluyen los datos de aceptación y el consentimiento del originador de mensajes de texto; esta información no se compartirá con ningún tercero.&quot;
      </p>

      <h2>SUS DERECHOS DE PRIVACIDAD EN TEXAS (TDPSA)</h2>
      <p>Bajo la Ley de Privacidad y Seguridad de Datos de Texas (TDPSA), los residentes de Texas tienen derechos específicos sobre su información personal. Sujeto a ciertas excepciones, usted tiene derecho a:</p>
      <ul>
        <li><b>Confirmar y Acceder:</b> Solicitar la confirmación de si estamos procesando sus datos personales y acceder a dichos datos.</li>
        <li><b>Corregir:</b> Solicitar la corrección de inexactitudes en sus datos personales.</li>
        <li><b>Eliminar:</b> Solicitar la eliminación de sus datos personales.</li>
        <li><b>Optar por no participar (Opt-Out):</b> Tiene derecho a optar por no participar en el procesamiento de sus datos personales para fines de (i) publicidad dirigida, (ii) la &quot;venta&quot; de datos personales, o (iii) elaboración de perfiles que produzcan efectos legales o significativos.</li>
        <li><b>Apelar:</b> Si denegamos su solicitud, tiene derecho a apelar nuestra decisión.</li>
      </ul>
      <p>Para ejercer estos derechos, contáctenos en <a href={`mailto:${site.email}`}>{site.email}</a> o +1 {site.phone}.</p>

      <h2>SEGURIDAD DE LA INFORMACIÓN</h2>
      <p>Usamos medidas administrativas, técnicas y físicas razonables para proteger su información personal. Sin embargo, ningún método de transmisión por Internet o de almacenamiento electrónico es 100% seguro.</p>

      <h2>AVISO DE PRIVACIDAD Y COMUNICACIONES SMS</h2>
      <p>Estamos comprometidos con la protección de su privacidad y con garantizar el uso responsable de su información personal. Todos los datos de los consumidores recopilados, incluida la información proporcionada para las comunicaciones por SMS, se utilizarán únicamente con el fin de prestar nuestros servicios, comunicarnos con usted y mejorar su experiencia. Sus datos no serán transferidos a organizaciones externas.</p>
      <p>Hemos implementado medidas estrictas para evitar el intercambio o acceso no autorizado a su información.</p>
      <p>Si desea ponerse en contacto con nosotros en relación con sus datos o tiene alguna pregunta sobre nuestras prácticas de privacidad, por favor comuníquese con nosotros en: +1 {site.phone} o al email <a href={`mailto:${site.email}`}>{site.email}</a></p>
      <p>Tiene derecho a optar por no recibir comunicaciones por SMS de nuestra parte en cualquier momento.</p>
      <p>Para optar por no participar, simplemente responda a cualquier mensaje SMS que reciba de nosotros con la palabra &quot;STOP&quot;. También puede contactarnos directamente utilizando la información de contacto proporcionada en este sitio web para solicitar la eliminación de nuestra lista de SMS.</p>
      <p>Sus datos no se transferirán a organizaciones externas.</p>

      <h2>PRIVACIDAD DE MENORES</h2>
      <p>No recopilamos intencionadamente información de niños menores de 13 años. Si nos damos cuenta de que hemos recopilado inadvertidamente información de un niño menor de 13 años, tomaremos medidas para eliminar dicha información.</p>

      <h2>CAMBIOS A ESTA POLÍTICA</h2>
      <p>Nos reservamos el derecho de realizar cambios a esta Política de Privacidad en cualquier momento. Le notificaremos publicando la nueva política en esta página.</p>

      <h2>CONTACTO</h2>
      <p>
        Si tiene preguntas o comentarios sobre esta Política de Privacidad, contáctenos en: Jaimes Tax &amp; Insurance agency LLC {site.address}{" "}
        <a href={`mailto:${site.email}`}>{site.email}</a> {site.phone}
      </p>
    </LegalLayout>
  );
}
