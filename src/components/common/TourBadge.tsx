"use client";

import React from "react";
import Tour from "./Tour";

export default function TourBadge() {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <button
        aria-label="Explore the site"
        onClick={() => setOpen(true)}
        className="fixed right-4 bottom-6 z-50 rounded-full bg-blue-600 text-white px-3 py-2 text-sm shadow-lg hover:brightness-105"
      >
        Explore
      </button>
      {open && <Tour onClose={() => setOpen(false)} />}
    </>
  );
}
