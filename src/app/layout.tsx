import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ELECTION INTEL — 2016–2026",
  description: "Electoral intelligence: Bahamas & Slovenia 2016–2026",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
