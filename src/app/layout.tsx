import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "MIKU + JACE | AI + Human Web Development Agency",
  description: "AI Agents + Human Creativity = DOPE Websites. We deliver what takes traditional agencies 6 months... in 90 days.",
  keywords: ["web development", "AI", "SaaS", "automation", "web design", "agency"],
  openGraph: {
    title: "MIKU + JACE | Web Development Agency",
    description: "AI Agents + Human Creativity = DOPE Websites",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#0a0a0f] text-white overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
