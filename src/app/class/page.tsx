import type { Metadata } from 'next';
import Link from 'next/link';
import { site } from '@/data/site';
import { lead, members, groups } from '@/data/team';

export const metadata: Metadata = {
  title: 'The Class — GEC110 C25-3',
  description: 'The people of GEC110 C25-3 and the parts they worked on in this portal.',
};

function Parts({ parts }: { parts: string[] }) {
  return (
    <p className="text-sm font-bold leading-snug text-gold">{parts.join(' · ')}</p>
  );
}

export default function ClassPage() {
  const total = 1 + members.length + groups.reduce((n, g) => n + g.names.length, 0);
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
      <p className="text-xs uppercase tracking-[0.3em] text-gold">The Class</p>
      <h1 className="mt-3 font-display text-4xl font-semibold sm:text-5xl">{site.submittedBy}</h1>
      <p className="mt-4 max-w-3xl text-lg leading-relaxed text-muted">
        The {total} people of {site.submittedBy} at {site.school}, and the parts each one worked on in <em>{site.title}</em>.
        Submitted to {site.instructor}.
      </p>

      <section aria-labelledby="lead-h" className="mt-12">
        <h2 id="lead-h" className="sr-only">Lead developer</h2>
        <div className="glass relative border-gold/50 p-6 sm:p-8" data-testid="lead-card">
          <p className="text-xs uppercase tracking-[0.3em] text-gold">Head Developer</p>
          <p className="mt-2 font-display text-3xl font-semibold sm:text-4xl">{lead.name}</p>
          <p className="mt-1 text-lg text-gold">{lead.role}</p>
          <p className="mt-4 max-w-2xl leading-relaxed text-muted">{lead.note}</p>
        </div>
      </section>

      <section aria-labelledby="roster-h" className="mt-14">
        <h2 id="roster-h" className="font-display text-2xl font-semibold">
          Contributors <span className="text-base font-normal text-muted">· {members.length} classmates, in their own words</span>
        </h2>
        <ol className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3" aria-label="Contributors">
          {members.map((m) => (
            <li key={m.name} className="glass flex flex-col gap-3 p-5">
              <p className="font-display text-lg font-semibold leading-snug">{m.name}</p>
              <Parts parts={m.parts} />
              <p className="text-sm leading-relaxed text-muted">{m.note}</p>
            </li>
          ))}
        </ol>
      </section>

      <section aria-labelledby="groups-h" className="mt-14">
        <h2 id="groups-h" className="font-display text-2xl font-semibold">
          Support Teams <span className="text-base font-normal text-muted">· {groups.reduce((n, g) => n + g.names.length, 0)} classmates in duos and trios</span>
        </h2>
        <ul className="mt-6 grid gap-4 md:grid-cols-2" aria-label="Support teams">
          {groups.map((g) => (
            <li key={g.label} className="glass flex flex-col gap-3 p-5">
              <p className="text-xs uppercase tracking-[0.2em] text-gold">{g.names.length === 2 ? 'Duo' : 'Trio'}</p>
              <p className="font-display text-xl font-semibold leading-snug">{g.label}</p>
              <p className="text-sm leading-relaxed">{g.names.join(' · ')}</p>
              <Parts parts={g.parts} />
              <p className="text-sm leading-relaxed text-muted">{g.note}</p>
            </li>
          ))}
        </ul>
      </section>

      <p className="mt-12">
        <Link href="/about#academic-integrity" className="text-sm text-gold hover:underline">← Back to Academic Integrity</Link>
      </p>
    </div>
  );
}
