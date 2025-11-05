"use client";

import Image from "next/image";
import { PointerHighlight } from "../../ui/pointer-highlight";
import Typewriter from "@/components/common/Typewriter";
import { useEffect, useRef, useState } from "react";

export default function Name() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [needsPlay, setNeedsPlay] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

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
        <div className="relative w-[100px] h-[100px] transition-transform duration-300 ease-in-out hover:scale-105">
          {/* Image fallback (visible until video plays) */}
          <Image
            src="/mdfarid.jpg"
            alt="Md Farid"
            width={100}
            height={100}
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
