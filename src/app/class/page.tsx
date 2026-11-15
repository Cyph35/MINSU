import type { Metadata } from 'next';
import Link from 'next/link';
import { site } from '@/data/site';
import { lead, members } from '@/data/team';

export const metadata: Metadata = {
  title: 'The Class — GEC110 C25-3',
  description: 'The people of GEC110 C25-3 and their roles in this portal.',
};

export default function ClassPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
      <p className="text-xs uppercase tracking-[0.3em] text-gold">The Class</p>
      <h1 className="mt-3 font-display text-4xl font-semibold sm:text-5xl">{site.submittedBy}</h1>
      <p className="mt-4 max-w-3xl text-lg leading-relaxed text-muted">
        The people of {site.submittedBy} at {site.school}, with the part each one played in <em>{site.title}</em>.
        Submitted to {site.instructor}.
      </p>

      <section aria-labelledby="lead-h" className="mt-12">
        <h2 id="lead-h" className="sr-only">Lead developer</h2>
        <div className="glass relative border-gold/50 p-6 sm:p-8" data-testid="lead-card">
          <p className="text-xs uppercase tracking-[0.3em] text-gold">Final Boss</p>
          <p className="mt-2 font-display text-3xl font-semibold sm:text-4xl">{lead.name}</p>
          <p className="mt-1 text-lg text-gold">{lead.role}</p>
          <p className="mt-4 max-w-2xl leading-relaxed text-muted">{lead.note}</p>
        </div>
      </section>

      <section aria-labelledby="roster-h" className="mt-14">
        <h2 id="roster-h" className="font-display text-2xl font-semibold">
          The Roster <span className="text-base font-normal text-muted">· {members.length} classmates</span>
        </h2>
        <ol className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3" aria-label="Class roster">
          {members.map((m, i) => (
            <li key={m.name} className="glass p-5">
              <p className="text-xs uppercase tracking-[0.2em] text-gold">{String(i + 1).padStart(2, '0')} · {m.role}</p>
              <p className="mt-2 font-display text-lg font-semibold leading-snug">{m.name}</p>
              <p className="mt-2 text-sm leading-relaxed text-muted">{m.note}</p>
            </li>
          ))}
        </ol>
      </section>

      <p className="mt-12">
        <Link href="/about#academic-integrity" className="text-sm text-gold hover:underline">← Back to Academic Integrity</Link>
      </p>
    </div>
  );
}
