import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Declaración de Accesibilidad",
  description: "Declaración de accesibilidad de " + site.name,
};

export default function Accesibilidad() {
  return (
    <LegalLayout title="Declaración de Accesibilidad">
      <p><strong>Última actualización:</strong> {site.legalUpdated}</p>

      <h2>Nuestro Compromiso</h2>
      <p>
        En <strong>{site.legalName}</strong>, nos comprometemos a garantizar la accesibilidad digital para personas con discapacidades. Estamos mejorando continuamente la experiencia del usuario para todos y aplicando los estándares de accesibilidad pertinentes (WCAG). Creemos firmemente que el internet debe estar disponible y ser accesible para todos, y estamos comprometidos a proporcionar un sitio web que sea accesible para la mayor audiencia posible, independientemente de las circunstancias y la capacidad.
      </p>

      <h2>Medidas para apoyar la accesibilidad</h2>
      <p>
        <strong>{site.legalName}</strong> toma las siguientes medidas para asegurar la accesibilidad del sitio web:
      </p>
      <ul>
        <li>Integrar la accesibilidad en nuestras prácticas de desarrollo web.</li>
        <li>Proporcionar opciones de navegación por teclado y asegurar un contraste de color adecuado.</li>
        <li>Incluir etiquetas ARIA y textos alternativos para imágenes clave donde sea necesario.</li>
        <li>Proporcionar un enlace para saltar al contenido principal en nuestra navegación.</li>
      </ul>

      <h2>Estado de Conformidad</h2>
      <p>
        Las Pautas de Accesibilidad para el Contenido Web (WCAG) definen los requisitos para los diseñadores y desarrolladores para mejorar la accesibilidad para las personas con discapacidades. Define tres niveles de conformidad: Nivel A, Nivel AA y Nivel AAA. Este sitio web se esfuerza por cumplir con el nivel de conformidad AA de las WCAG 2.1.
      </p>

      <h2>Comentarios y Asistencia</h2>
      <p>
        A pesar de nuestros esfuerzos por hacer que todas las páginas y el contenido sean completamente accesibles, es posible que parte del contenido aún no se haya adaptado completamente a los estándares de accesibilidad más estrictos. Esto puede deberse a no haber encontrado o identificado la solución tecnológica más adecuada.
      </p>
      <p>
        Si tiene dificultades para usar o acceder a cualquier elemento de este sitio web, o si necesita ayuda con cualquier parte de nuestro sitio, por favor contáctenos durante nuestro horario laboral y estaremos encantados de ayudarle. Sus comentarios nos ayudan a mejorar.
      </p>

      <h2>Contacto</h2>
      <p>
        Por favor, háganos saber si encuentra barreras de accesibilidad en nuestro sitio web:
      </p>
      <ul>
        <li><strong>Teléfono:</strong> <a href={site.phoneHref}>{site.phone}</a></li>
        <li><strong>Correo Electrónico:</strong> <a href={`mailto:${site.email}`}>{site.email}</a></li>
        <li><strong>Dirección:</strong> {site.address}</li>
      </ul>
      <p>
        Tratamos de responder a los comentarios en un plazo de 2 a 3 días hábiles.
      </p>
    </LegalLayout>
  );
}
