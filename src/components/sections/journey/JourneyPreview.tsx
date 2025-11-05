import journeyEntries from "@/data/journey";
import Link from "next/link";

export default function JourneyPreview() {
  const entries = journeyEntries.slice(0, 3);

  return (
    <section className="max-w-4xl mx-auto px-6 lg:px-8 py-10">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">Journey Snapshot</h3>
        <Link href="/journey" className="text-sm text-primary underline">View full journey</Link>
      </div>

      <div className="grid gap-4 sm:grid-cols-3">
        {entries.map((it) => (
          <article key={it.id} className="rounded-lg border p-4 bg-white dark:bg-zinc-900 border-zinc-200 dark:border-zinc-700">
            <div className="flex items-start justify-between">
              <div>
                <h4 className="font-semibold text-sm">{it.title}</h4>
                {it.year && <div className="text-xs text-muted mt-1">{it.year}</div>}
              </div>
            </div>
            {it.description && <p className="mt-2 text-xs text-gray-700 dark:text-gray-300">{it.description}</p>}
          </article>
        ))}
      </div>
    </section>
  );
}
