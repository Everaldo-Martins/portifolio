import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "DEM - Everaldo Martins",
  description: "Portifólio pessoal",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="w-full min-h-screen antialiased">
        <Header />
        <main className="flex-1 flex flex-col gap-8 items-center">
          {children}
        </main>        
        <Footer />
      </body>
    </html>
  );
}
