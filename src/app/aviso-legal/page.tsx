import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Aviso Legal (Disclaimer)",
  description: "Aviso legal y descargo de responsabilidad de " + site.name,
};

export default function AvisoLegal() {
  return (
    <LegalLayout title="Aviso Legal (Disclaimer)">
      <p><strong>Última actualización:</strong> {site.legalUpdated}</p>

      <h2>1. Sin Asesoría Profesional</h2>
      <p>
        La información contenida en este sitio web tiene propósitos puramente informativos y no constituye asesoramiento legal, fiscal, contable o financiero profesional. Aunque nos esforzamos por mantener la información actualizada y correcta, no realizamos declaraciones ni garantías de ningún tipo, expresas o implícitas, sobre la integridad, exactitud, fiabilidad o idoneidad de la información, productos, servicios o gráficos relacionados contenidos en el sitio web. Cualquier dependencia en dicha información es estrictamente bajo su propio riesgo. Le recomendamos que consulte a un profesional calificado para asesoría específica sobre su situación fiscal o de seguros antes de tomar cualquier decisión.
      </p>

      <h2>2. No Afiliación Gubernamental</h2>
      <p>
        <strong>{site.legalName}</strong> es una entidad privada e independiente. No estamos afiliados, asociados, autorizados, respaldados ni conectados oficialmente de ninguna manera con el Servicio de Impuestos Internos (IRS), el Contralor de Cuentas Públicas de Texas (Texas Comptroller), el Departamento de Vehículos Motorizados de Texas (TxDMV), ni con ninguna otra agencia gubernamental federal, estatal o local.
      </p>

      <h2>3. Seguros y Coberturas</h2>
      <p>
        Cualquier resumen de seguros descrito en este sitio es de naturaleza general y tiene el propósito de ser una guía orientativa. No altera ni modifica de ninguna manera los términos y condiciones reales de las pólizas de seguro vigentes. La disponibilidad de los productos, la cobertura y las tarifas están sujetas a la aprobación de la compañía aseguradora correspondiente y pueden variar según el estado y la situación individual. Las cotizaciones proporcionadas no son garantías de cobertura.
      </p>

      <h2>4. Enlaces Externos</h2>
      <p>
        A través de este sitio web, usted puede acceder a otros sitios web que no están bajo el control de <strong>{site.legalName}</strong>. No tenemos control sobre la naturaleza, el contenido y la disponibilidad de dichos sitios. La inclusión de cualquier enlace no implica necesariamente una recomendación ni respalda las opiniones expresadas en ellos.
      </p>

      <h2>5. Contacto</h2>
      <p>
        Si tiene alguna pregunta sobre este Aviso Legal, por favor contáctenos a:
        <br />
        <strong>Teléfono:</strong> <a href={site.phoneHref}>{site.phone}</a>
        <br />
        <strong>Correo Electrónico:</strong> <a href={`mailto:${site.email}`}>{site.email}</a>
        <br />
        <strong>Dirección:</strong> {site.address}
      </p>
    </LegalLayout>
  );
}
