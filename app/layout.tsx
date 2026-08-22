import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://tinyrelay.app/"),
  title: "Display Toggle — Display control from your Mac menu bar",
  description: "Disconnect or reconnect a Mac display from the menu bar. Try Display Toggle free for 14 days, then buy once for $5.",
  icons: {
    // Keep a versioned URL so third-party launch directories refresh the icon.
    icon: "https://tinyrelay.app/display-toggle.png?v=2",
  },
  openGraph: {
    title: "Display Toggle — Display control from your Mac menu bar",
    description: "A focused macOS menu bar utility with a 14-day free trial and a $5 one-time license.",
    url: "https://tinyrelay.app/",
    siteName: "Tiny Relay",
    images: [
      {
        url: "https://tinyrelay.app/og.png",
        width: 1200,
        height: 630,
        alt: "Display Toggle — one-click display control for Mac",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Display Toggle — Display control from your Mac menu bar",
    description: "A focused macOS menu bar utility with a 14-day free trial and a $5 one-time license.",
    images: ["https://tinyrelay.app/og.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>{children}</body>
    </html>
  );
}
