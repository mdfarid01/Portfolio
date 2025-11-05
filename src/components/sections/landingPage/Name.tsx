"use client";

import Image from "next/image";
import { PointerHighlight } from "../../ui/pointer-highlight";
import Typewriter from "@/components/common/Typewriter";
import { useEffect, useRef, useState } from "react";

export default function Name() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [needsPlay, setNeedsPlay] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [greeting, setGreeting] = useState<string | null>(null);
  const [waveAnimate, setWaveAnimate] = useState(false);

  // Try to autoplay on mount. If autoplay is blocked (Safari/iOS), show play overlay.
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;

    const tryPlay = async () => {
      try {
        // Attempt to play; many mobile browsers require user interaction.
        await v.play();
        setIsPlaying(true);
        setNeedsPlay(false);
      } catch {
        // Autoplay blocked — show play control to let user start the video.
        setNeedsPlay(true);
        setIsPlaying(false);
      }
    };

    tryPlay();
  }, []);

  // Personalized greeting (fixed) and a small wave animation that runs once per session.
  useEffect(() => {
    try {
      setGreeting("Hello");

      const sessionKey = "greetingSeenV1";
      const seen = typeof window !== "undefined" && sessionStorage.getItem(sessionKey);
      // animate the wave only if not seen in this session
      if (!seen) {
        setWaveAnimate(true);
        const t = window.setTimeout(() => {
          setWaveAnimate(false);
          try {
            sessionStorage.setItem(sessionKey, "1");
          } catch {}
        }, 1500);

        return () => clearTimeout(t);
      }
    } catch {
      // ignore any sessionStorage/time errors
    }
  }, []);

  const handleUserPlay = async () => {
    const v = videoRef.current;
    if (!v) return;
    try {
      await v.play();
      setIsPlaying(true);
      setNeedsPlay(false);
    } catch (err) {
      // still can't play — do nothing
      console.warn("Video play failed:", err);
    }
  };

  return (
    <>
  <div id="hero-name" className="mb-10 flex flex-col items-start gap-10 lg:flex-row lg:items-center">
        <div className="relative w-[120px] h-[120px] md:w-[140px] md:h-[140px] lg:w-[160px] lg:h-[160px] transition-transform duration-300 ease-in-out hover:scale-105">
          {/* Image fallback (visible until video plays) */}
          <Image
            src="/mdfarid.jpg"
            alt="Md Farid"
            width={160}
            height={160}
            className={`rounded-2xl shadow-sm ring-1 ring-gray-100 dark:ring-gray-800 object-cover ${isPlaying ? "opacity-0" : "opacity-100"}`}
          />

          {/* Video element — overlayed on the image; attempt autoplay, but provide a tap-to-play fallback on mobile */}
          <video
            ref={videoRef}
            src="/IMG_9901.mp4"
            poster="/placeholder.png"
            className="absolute inset-0 w-full h-full rounded-2xl shadow-sm ring-1 ring-gray-100 dark:ring-gray-800 object-cover"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            aria-label="Animated profile video"
          />

          {/* Play overlay shown when autoplay is blocked (mobile Safari). Visible only when we need user interaction. */}
          {needsPlay && (
            <button
              onClick={handleUserPlay}
              aria-label="Play profile video"
              className="absolute inset-0 flex items-center justify-center rounded-2xl bg-black/40 text-white"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
                <path d="M8 5v14l11-7z" />
              </svg>
            </button>
          )}

          <span className="border-primary absolute -right-1 -bottom-1 h-4 w-4 rounded-full border-2 bg-green-500" />
        </div>

        <div className="flex-1">
          {greeting && (
            <p className="mb-2 text-sm text-secondary">
              <span className="mr-2">{greeting},</span>
              <span className={waveAnimate ? "wave-animate inline-block" : "inline-block"} role="img" aria-label="waving hand">
                👋
              </span>
            </p>
          )}
          <h1 className="mb-4 text-4xl font-bold tracking-tighter md:text-5xl lg:text-5xl">
            Md Farid
          </h1>

          <PointerHighlight
            rectangleClassName="bg-neutral-200 dark:bg-neutral-700 border-neutral-300 dark:border-neutral-600"
            pointerClassName="text-yellow-500"
          >
            <span className="relative z-10">
              <Typewriter
                words={[
                  "Software Developer",
                  "Frontend Engineer",
                  "React Developer",
                  "Open Source Contributor",
                ]}
              />
            </span>
          </PointerHighlight>

          <p className="text-secondary mt-2 text-sm">Bhopal, India</p>
        </div>
      </div>
    </>
  );
}
