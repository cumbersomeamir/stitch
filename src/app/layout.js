import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

// Inter - Premium free alternative to Söhne (modern, clean, used by premium brands)
// Similar aesthetic to Söhne with excellent readability
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

// Söhne font family - Uncomment and configure when font files are available
// Place Söhne font files in: src/app/fonts/soehne/
// Expected files:
// - Söhne-Buch.woff2 (Regular 400)
// - Söhne-Halbfett.woff2 (Medium 500)
// - Söhne-Kräftig.woff2 (SemiBold 600)
// - Söhne-Breit.woff2 (Bold 700)
// - Söhne-Extrabold.woff2 (ExtraBold 800)
// - Söhne-Mono.woff2 (Mono variant)
// - Söhne-Kursive.woff2 (Kursive variant)

// Uncomment when Söhne font files are added:
/*
const soehne = localFont({
  src: [
    {
      path: "./fonts/soehne/Söhne-Buch.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/soehne/Söhne-Halbfett.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/soehne/Söhne-Kräftig.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/soehne/Söhne-Breit.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/soehne/Söhne-Extrabold.woff2",
      weight: "800",
      style: "normal",
    },
  ],
  variable: "--font-soehne",
  display: "swap",
});

const soehneMono = localFont({
  src: "./fonts/soehne/Söhne-Mono.woff2",
  variable: "--font-soehne-mono",
  display: "swap",
});
*/

export const metadata = {
  title: "Stitch - Premium Video Editing Agency",
  description: "Your Always-On Editing Team — In Your Style.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} font-sans antialiased`}
        // Add soehne classes when font files are available:
        // className={`${soehne.variable} ${soehneMono.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
