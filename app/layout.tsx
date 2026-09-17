import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { Inter } from "next/font/google";
import NavBar from "@/components/site/NavBar";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mosaic | AI interfaces",
  description:
    "Mosaic provides a curated set of modern UI components and developer utilities designed for building responsive, customizable, and accessible AI chat experiences in web applications.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable}`}>
      <body
        className="font-sans font-medium
      selection:bg-sky-100
      selection:text-sky-500 lg:mx-28 mx-0"
      >
        <ThemeProvider attribute="class" defaultTheme="system">
          <div className="fixed top-0 left-0 right-0 z-50 h-56 pointer-events-none">
            <div
              className="
      absolute inset-0
      backdrop-blur-2xl
      [mask-image:linear-gradient(to_bottom,black_0%,transparent_100%)]
    "
            />
          </div>
          <NavBar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
