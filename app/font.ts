import {
  Cutive_Mono,
  DotGothic16,
  Lexend_Peta,
  Roboto,
  Rubik_Beastly,
  Work_Sans,
} from "next/font/google";
import { Libre_Barcode_39_Extended_Text } from "next/font/google";

export const rubikBeastly = Rubik_Beastly({
  variable: "--font-rubik-beastly",
  subsets: ["latin"],
  weight: "400",
});

export const libreBarcode39ExtendedText = Libre_Barcode_39_Extended_Text({
  variable: "--font-libre-barcode-39-extended-text",
  subsets: ["latin"],
  weight: "400",
});

export const workSansExtraBold = Work_Sans({
  variable: "--font-work-sans-extra-bold",
  subsets: ["latin"],
  weight: ["600", "800"],
});

export const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const lexendPeta = Lexend_Peta({
  variable: "--font-lexend-peta",
  subsets: ["latin"],
  weight: "400",
});

export const cutiveMono = Cutive_Mono({
  variable: "--font-cutive-mono",
  subsets: ["latin"],
  weight: "400",
});

export const dotGothic = DotGothic16({
  variable: "--font-dot-gothic",
  subsets: ["latin"],
  weight: "400",
});
