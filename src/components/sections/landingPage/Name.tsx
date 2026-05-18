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
          <div className="mb-4 flex items-center gap-2">
            <h1 className="text-4xl font-bold tracking-tighter md:text-5xl lg:text-5xl">
              Md Farid
            </h1>
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 24 24"
              className="text-blue-500"
              height="30"
              width="30"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path fill="none" d="M0 0h24v24H0z"></path>
              <path d="m23 12-2.44-2.79.34-3.69-3.61-.82-1.89-3.2L12 2.96 8.6 1.5 6.71 4.69 3.1 5.5l.34 3.7L1 12l2.44 2.79-.34 3.7 3.61.82L8.6 22.5l3.4-1.47 3.4 1.46 1.89-3.19 3.61-.82-.34-3.69L23 12zm-12.91 4.72-3.8-3.81 1.48-1.48 2.32 2.33 5.85-5.87 1.48 1.48-7.33 7.35z"></path>
            </svg>
          </div>

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
