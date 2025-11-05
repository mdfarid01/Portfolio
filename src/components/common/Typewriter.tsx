"use client";

import React, { useEffect, useState } from "react";

interface TypewriterProps {
  words: string[];
  loop?: boolean;
  typingSpeed?: number;
  deleteSpeed?: number;
  pause?: number;
}

export default function Typewriter({
  words,
  loop = true,
  typingSpeed = 90,
  deleteSpeed = 40,
  pause = 1400,
}: TypewriterProps) {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [blink, setBlink] = useState(true);

  useEffect(() => {
    const handle = setInterval(() => setBlink((b) => !b), 500);
    return () => clearInterval(handle);
  }, []);

  useEffect(() => {
    if (!words || words.length === 0) return;

    if (isDeleting) {
      if (subIndex > 0) {
        const timeout = setTimeout(() => setSubIndex((s) => s - 1), deleteSpeed);
        return () => clearTimeout(timeout);
      } else {
        setIsDeleting(false);
        setIndex((i) => (i + 1) % words.length);
      }
    } else {
      if (subIndex < words[index].length) {
        const timeout = setTimeout(() => setSubIndex((s) => s + 1), typingSpeed);
        return () => clearTimeout(timeout);
      } else if (loop) {
        const timeout = setTimeout(() => setIsDeleting(true), pause);
        return () => clearTimeout(timeout);
      }
    }
  }, [subIndex, index, isDeleting, words, typingSpeed, deleteSpeed, pause, loop]);

  return (
    <span>
      {words[index].substring(0, subIndex)}
      <span className="inline-block ml-1" style={{ opacity: blink ? 1 : 0 }}>
        |
      </span>
    </span>
  );
}
