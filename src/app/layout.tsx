import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import ParticlesToggle from "@/components/common/ParticlesToggle";
import { Analytics } from "@vercel/analytics/next";

// import { ParticlesDemo } from "@/components/common/Particlesbg";
import { createMetadata } from "@/lib/createMetadata";
import Footer from "@/components/layout/Footer";
import { Reveal } from "@/components/common/reveal";
import { ThemeProvider } from "next-themes";
import React from "react";
import HireMeButton from "@/components/sections/landingPage/Hireme";
import EasterEgg from "@/components/common/EasterEgg";
import TourBadge from "@/components/common/TourBadge";

export const metadata = createMetadata({
  description:
    "A perfect portfolio website that showcases skills and projects. Minimal and smooth microinteractions. Perfect for developers and designers.",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className="font-hanken-grotesk flex min-h-screen flex-col bg-neutral-100 antialiased dark:bg-black"
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="absolute inset-0 -z-10">
            {/* Particles are off by default. Use ?particles=on or set localStorage('particlesEnabled','true') to enable for testing */}
            {/* Client-only toggle component will load ParticlesDemo dynamically when enabled */}
            {/* <ParticlesDemo /> (disabled by default) */}
          </div>

          {/* Client-only particles toggle. Enable with ?particles=on or localStorage("particlesEnabled","true") */}
          <ParticlesToggle />

          <Navbar />
          <HireMeButton />
          <main className="flex-grow">{children}</main>
          <Analytics />
          <Reveal>
            <Footer />
          </Reveal>
          {/* Hidden easter-egg component (console art + secret mini-game). No visible changes by default. */}
          <EasterEgg />
          {/* Explore badge + tour (small visible CTA) */}
          <TourBadge />
        </ThemeProvider>
      </body>
    </html>
  );
}
