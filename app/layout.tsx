import type { Metadata } from "next";
import { Ubuntu } from "next/font/google";
import "./globals.css";

const ubuntu = Ubuntu({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "700"],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Půjčovna Trabantů | Retro víkendové zážitky",
  description: "Půjčte si legendární Trabant na víkend. Užijte si jedinečný retro zážitek s ikonickým vozem východního bloku.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="cs">
      <body className={`${ubuntu.className} bg-background text-foreground min-h-screen antialiased`}>
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
