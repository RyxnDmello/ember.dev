import { Geist, Orbitron, Urbanist } from "next/font/google";

export const geist = Geist({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin", "cyrillic"],
  variable: "--geist",
  style: ["normal"],
  display: "swap",
  preload: true,
});

export const orbitron = Orbitron({
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--orbitron",
  subsets: ["latin"],
  style: ["normal"],
  display: "swap",
  preload: true,
});

export const urbanist = Urbanist({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  variable: "--urbanist",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});
