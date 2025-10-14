import Container from "@/components/common/Container";
import { Reveal } from "@/components/common/reveal";

// CertificatesSection is temporarily disabled per request
// import CertificatesSection from "@/components/sections/about/Certificate";
import Education from "@/components/sections/about/Education";
import Info from "@/components/sections/about/info";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About - Md Farid",
  description:
    "Explore more about Md Farid, including his education, certifications, and skills.",
  openGraph: {
    title: "About - Md Farid",
    description:
      "Explore more about Md Farid, including his education, certifications, and skills.",
  url: "https://www.thefarid.xyz/about",
  siteName: "Md Farid",
    type: "website",
    images: [
      {
        url: "/amime.jpeg",
        width: 1200,
        height: 630,
  alt: "About Md Farid",
      },
    ],
    locale: "en_US",
  },
};

export default function AboutPage() {
  return (
    <Container>
      <Reveal>
        {" "}
        <Info />
      </Reveal>
      <Reveal>
        <Education />
      </Reveal>
      <Reveal>
        {" "}
  {/* Certificates section commented out temporarily
  <CertificatesSection />
  */}
      </Reveal>
      {/* <LeetCodeDSAVisuals /> */}
    </Container>
  );
}
