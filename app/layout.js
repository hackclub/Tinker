import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "Tinker | Hack Club Blinky Workshops",
    template: "%s | Tinker",
  },
  description:
    "Run a free Blinky electronics workshop for your club. Learn to solder, build LED circuits with 555 timers, and get free PCB kits through Hack Club.",
  keywords: [
    "Hack Club",
    "Blinky",
    "Tinker",
    "electronics workshop",
    "soldering",
    "PCB",
    "LED circuit",
    "555 timer",
    "STEM education",
    "coding club",
    "maker",
    "hardware",
  ],
  authors: [{ name: "Hack Club" }],
  openGraph: {
    title: "Tinker | Hack Club Blinky Workshops",
    description:
      "Run a free Blinky electronics workshop for your club. Learn to solder, build LED circuits, and get free PCB kits.",
    siteName: "Tinker",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tinker | Hack Club Blinky Workshops",
    description:
      "Run a free Blinky electronics workshop for your club. Learn to solder, build LED circuits, and get free PCB kits.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
