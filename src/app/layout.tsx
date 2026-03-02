import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Blue Gamma — Interest Rate Analytics",
  description: "Real-time interest rate curves, swap rates, and analytics for energy and infrastructure finance.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
