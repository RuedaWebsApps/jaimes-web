import type { Metadata } from "next";
import { Albert_Sans, Nanum_Myeongjo } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const albert = Albert_Sans({
  variable: "--font-albert",
  subsets: ["latin"],
});

const nanum = Nanum_Myeongjo({
  variable: "--font-nanum",
  weight: ["400", "700", "800"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://jaimestaxins.com"),
  title: {
    default: "Jaimes Tax & Insurance agency LLC. | Austin, TX",
    template: "%s | Jaimes Tax & Insurance",
  },
  description:
    "Más de 10 años ayudando a personas y pequeños negocios con impuestos, seguros, contabilidad y registros en Austin, TX.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es" className={`${albert.variable} ${nanum.variable} antialiased`}>
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
