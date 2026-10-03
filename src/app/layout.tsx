import type { Metadata, Viewport } from "next";
import { anton, inter, jetbrains, moon } from "./fonts";
import { site } from "@/content/site";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SmoothScroll } from "@/components/layout/SmoothScroll";
import { Reveal } from "@/components/ui/Reveal";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: site.title, template: "%s — Webcraftz" },
  description: site.description,
  openGraph: {
    title: site.title,
    description: site.description,
    url: site.url,
    siteName: site.name,
    locale: "pt_BR",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#000000",
  colorScheme: "dark",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="pt-BR"
      className={`${anton.variable} ${inter.variable} ${jetbrains.variable} ${moon.variable}`}
    >
      <body>
        <a className="skip-link" href="#main">
          Pular para o conteúdo
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <SmoothScroll />
        <Reveal />
      </body>
    </html>
  );
}
