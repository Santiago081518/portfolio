import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Santiago Botero | FullStack Developer",

  description:
    "Portfolio de Santiago Botero, desarrollador FullStack especializado en Next.js, Nest.js, TypeScript y aplicaciones web modernas.",

  keywords: [
    "FullStack Developer",
    "Next.js",
    "React",
    "Nest.js",
    "TypeScript",
    "Portfolio",
    "Web Developer",
  ],

  authors: [
    {
      name: "Santiago Botero",
    },
  ],

  openGraph: {
    title:
      "Santiago Botero | FullStack Developer",

    description:
      "Desarrollador FullStack especializado en aplicaciones modernas con Next.js, Nest.js y TypeScript.",

    url: "https://TU-DOMINIO.com",

    siteName:
      "Santiago Botero Portfolio",

    locale: "es_CO",

    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}