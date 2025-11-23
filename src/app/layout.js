import { Inter, Orbitron } from "next/font/google";
import localFont from "next/font/local";
import NoiseOverlay from "@/components/ui/NoiseOverlay";
import Header from "@/components/layout/Header";
import "./globals.css";

// Inter - Body text
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

// Orbitron - Display text (TRON aesthetic)
const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Stitch - Premium Video Editing Agency",
  description: "Your Always-On Editing Team — In Your Style.",
  icons: {
    icon: "/icon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${orbitron.variable} font-sans antialiased bg-bg-dark-hero text-text-primary`}
      >
        <NoiseOverlay />
        <Header />
        {children}
      </body>
    </html>
  );
}
