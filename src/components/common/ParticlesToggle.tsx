"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

// ParticlesDemo is relatively heavy; load it dynamically on the client only
const ParticlesDemo = dynamic(() => import("./Particlesbg").then(m => m.ParticlesDemo), { ssr: false });

export default function ParticlesToggle() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    // prefer reduced motion -> disable
    if (typeof window === "undefined") return;
    const prefersReduced = window.matchMedia
      ? window.matchMedia("(prefers-reduced-motion: reduce)").matches
      : false;
    if (prefersReduced) return;

    const params = new URLSearchParams(window.location.search);
    if (params.get("particles") === "on") {
      setEnabled(true);
      return;
    }

    const stored = localStorage.getItem("particlesEnabled");
    if (stored === "true") setEnabled(true);
  }, []);

  if (!enabled) return null;
  return <ParticlesDemo />;
}
