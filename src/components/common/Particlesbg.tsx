"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Particles } from "@/components/ui/magicui/particles";

export function ParticlesDemo() {
  const { resolvedTheme } = useTheme();
  const [color, setColor] = useState("#ffffff");
  
  // adaptive quantity: reduce or disable particles on low-power / reduced-motion / small devices
  const [quantity, setQuantity] = useState<number>(200);

  useEffect(() => {
    setColor(resolvedTheme === "dark" ? "#ffffff" : "#000000");
  }, [resolvedTheme]);
  
  useEffect(() => {
    if (typeof window === "undefined") return;
    
    // Respect user preference for reduced motion
    const prefersReduced = window.matchMedia
      ? window.matchMedia("(prefers-reduced-motion: reduce)").matches
      : false;
    
    if (prefersReduced) {
      setQuantity(0); // disable particles
      return;
    }
    
    // Lower quantity on small screens or high DPR devices to save CPU
    const isSmall = window.innerWidth < 800;
    const dpr = window.devicePixelRatio || 1;
    
    if (isSmall) {
      setQuantity(40);
    } else if (dpr > 2) {
      setQuantity(80);
    } else {
      setQuantity(200);
    }
  }, []);
  
  if (quantity === 0) return null;
  
  return (
    <Particles
      className="fixed inset-0 -z-10 h-full w-full"
      quantity={quantity}
      ease={80}
      color={color}
      refresh
    />
  );
}