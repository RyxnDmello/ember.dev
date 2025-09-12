import type { Metadata } from "next";
import type { ReactNode } from "react";

import { geist, orbitron, urbanist } from "@global/fonts";

import "./globals.css";

interface RootLayoutProps {
  readonly children: ReactNode;
}

export const metadata: Metadata = {
  title: "Ember",
  description: "What is Ember? The Toolkit You Deserve",
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html
      className={`${geist.variable} ${orbitron.variable} ${urbanist.variable} antialiased`}
      lang="en"
    >
      <body>{children}</body>
    </html>
  );
}
