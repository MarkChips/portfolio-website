import { Archivo_Black, Space_Grotesk } from "next/font/google";
import './globals.css';
import { Header } from "@/components/header";

const archivoBlack = Archivo_Black({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-head",
  display: "swap",
});

const space = Space_Grotesk({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-sans",
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${archivoBlack.variable} ${space.variable}`}>
        <Header />
        <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
          {children}
        </div>
      </body>
    </html>
  );
}