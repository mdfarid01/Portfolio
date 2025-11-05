"use client";

import journeyEntries, { JourneyEntry } from "@/data/journey";
import Link from "next/link";

export default function JourneySection() {
  const grouped = journeyEntries.reduce<Record<string, JourneyEntry[]>>(
    (acc, e) => {
      acc[e.category] = acc[e.category] || [];
      acc[e.category].push(e);
      return acc;
    },
    {}
  );

  return (
    <section className="max-w-4xl mx-auto px-6 lg:px-8 py-12">
      <div className="mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
        My Journey
      </div>

      <div className="space-y-8">
        {Object.entries(grouped).map(([category, items]) => (
          <div key={category}>
            <h3 className="mb-4 text-lg font-bold">{category}</h3>
            <div className="grid gap-4 sm:grid-cols-2">
              {items.map((it) => (
                <article key={it.id} className="rounded-lg border p-4 bg-white dark:bg-zinc-900 border-zinc-200 dark:border-zinc-700">
                  <div className="flex items-start justify-between">
                    <div>
                      <h4 className="font-semibold">{it.title}</h4>
                      {it.year && <div className="text-sm text-muted mt-1">{it.year}</div>}
                    </div>
                    {it.link && (
                      <Link href={it.link} target="_blank" className="text-sm text-primary underline ml-4">
                        View
                      </Link>
                    )}
                  </div>
                  {it.description && <p className="mt-3 text-sm text-gray-700 dark:text-gray-300">{it.description}</p>}
                </article>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
