"use client";

import React, { useEffect, useState } from "react";

export default function Tour({ onClose }: { onClose: () => void }) {
  const steps = [
    { id: "hero-name", title: "Hero", description: "This is the hero/profile area." },
    { id: "projects-heading", title: "Projects", description: "Quick glance at featured projects." },
    { id: "reachout-section", title: "Contact", description: "Reach out via contact form or email." },
  ];

  const [index, setIndex] = useState(0);
  const [rect, setRect] = useState<DOMRect | null>(null);

  useEffect(() => {
    const el = document.getElementById(steps[index].id);
    if (el) {
      setRect(el.getBoundingClientRect());
    } else {
      setRect(null);
    }
    const onResize = () => {
      const e2 = document.getElementById(steps[index].id);
      if (e2) setRect(e2.getBoundingClientRect());
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [index]);

  const next = () => setIndex((i) => Math.min(steps.length - 1, i + 1));
  const prev = () => setIndex((i) => Math.max(0, i - 1));

  return (
    <div className="fixed inset-0 z-50">
      <div className="absolute inset-0 bg-black/60" onClick={onClose} />
      {rect && (
        <div
          className="absolute pointer-events-none"
          style={{
            left: rect.x - 8,
            top: rect.y - 8,
            width: rect.width + 16,
            height: rect.height + 16,
            borderRadius: 8,
            boxShadow: "0 0 0 9999px rgba(0,0,0,0.6)",
            border: "2px solid rgba(255,255,255,0.9)",
          }}
        />
      )}

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 w-full max-w-2xl px-4">
        <div className="mx-auto rounded-lg bg-white dark:bg-neutral-900 p-4 shadow-lg">
          <h4 className="font-semibold">{steps[index].title}</h4>
          <p className="text-sm text-muted-foreground">{steps[index].description}</p>
          <div className="mt-3 flex justify-between">
            <div>
              <button onClick={prev} disabled={index === 0} className="mr-2 underline">
                Back
              </button>
              <button onClick={next} disabled={index === steps.length - 1} className="underline">
                Next
              </button>
            </div>
            <div>
              <button onClick={onClose} className="ml-2 rounded-md border px-3 py-1">
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
