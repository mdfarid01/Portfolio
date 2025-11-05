"use client";

import React, { useEffect, useState } from "react";

// Small hidden easter-egg: prints ASCII art to console and listens for a
// secret code ("farid"). When the code is typed, a mini click-game modal
// opens. The component is intentionally unobtrusive and client-only.

export default function EasterEgg() {
  const [input, setInput] = useState("");
  const [open, setOpen] = useState(false);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(10);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    // Print a friendly ASCII art and hint in the console for curious devs
    // (This is the "mini console art & secret code" requested.)
    // The message is short and developer-facing only.
    // prettier-ignore
    console.log(`%c
███╗   ███╗ █████╗ ██████╗ ██╗███████╗██████╗ 
████╗ ████║██╔══██╗██╔══██╗██║██╔════╝██╔══██╗
██╔████╔██║███████║██████╔╝██║█████╗  ██████╔╝
██║╚██╔╝██║██╔══██║██╔═══╝ ██║██╔══╝  ██╔══██╗
██║ ╚═╝ ██║██║  ██║██║     ██║███████╗██║  ██║
╚═╝     ╚═╝╚═╝  ╚═╝╚═╝     ╚═╝╚══════╝╚═╝  ╚═╝

Mini Console Art — welcome, curious developer!
Type the secret code %cfarid%c (case-insensitive) to unlock a small surprise.
`, 'color: #60a5fa; font-weight: 700', 'color: #f472b6; font-weight: 700', '');
  }, []);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const k = e.key;
      if (k.length === 1) {
        const next = (input + k).slice(-10); // keep last 10 chars
        setInput(next);
        if (next.toLowerCase().endsWith("farid")) {
          setOpen(true);
        }
      }
    };

    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [input]);

  useEffect(() => {
    let timer: number | undefined;
    if (running && timeLeft > 0) {
      timer = window.setInterval(() => {
        setTimeLeft((t) => t - 1);
      }, 1000);
    }
    if (timeLeft === 0) {
      setRunning(false);
    }
    return () => {
      if (timer) window.clearInterval(timer);
    };
  }, [running, timeLeft]);

  const startGame = () => {
    setScore(0);
    setTimeLeft(10);
    setRunning(true);
  };

  // Simple click target: increment score when clicked.
  return (
    <>
      {open && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
          onClick={() => setOpen(false)}
        >
          <div
            className="w-[320px] max-w-full rounded-lg bg-white dark:bg-neutral-900 p-6 shadow-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-lg font-bold mb-2">Secret Mini-Game</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Click the big button as many times as you can in the time limit.
            </p>

            <div className="flex items-center justify-between mb-4">
              <div>
                <div className="text-xs text-muted-foreground">Time left</div>
                <div className="text-2xl font-semibold">{timeLeft}s</div>
              </div>
              <div>
                <div className="text-xs text-muted-foreground text-right">Score</div>
                <div className="text-2xl font-semibold text-right">{score}</div>
              </div>
            </div>

            <div className="flex gap-3">
              <button
                className="flex-1 rounded-lg bg-blue-600 text-white py-3 font-medium hover:brightness-110 disabled:opacity-60"
                onClick={() => {
                  if (!running) startGame();
                  setScore((s) => s + 1);
                }}
                disabled={timeLeft === 0}
              >
                {running ? "Click!" : "Start & Click"}
              </button>

              <button
                className="px-4 rounded-lg border hover:bg-gray-100 dark:hover:bg-neutral-800"
                onClick={() => {
                  setOpen(false);
                }}
              >
                Close
              </button>
            </div>

            <div className="mt-4 text-xs text-muted-foreground">
              Tip: this is local only and stored in your browser.
            </div>
          </div>
        </div>
      )}
    </>
  );
}
