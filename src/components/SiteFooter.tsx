import Link from 'next/link';
import { site } from '@/data/site';

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-line bg-ink-2">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-3">
        <div>
          <p className="font-display text-2xl">Sugilanon <span className="text-gold">sa</span> Kalinaw</p>
          <p className="mt-2 text-sm text-muted">{site.tagline}</p>
          <p className="mt-6 text-xs uppercase tracking-[0.2em] text-gold">Course &amp; Institution</p>
          <p className="mt-2 text-sm leading-relaxed">{site.course}</p>
          <p className="mt-1 text-sm text-muted">{site.school}</p>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-emerald">Academic Integrity &amp; AI Disclosure</p>
          <p className="mt-2 text-sm leading-relaxed text-muted">
            This portal was researched, written and coded with the assistance of an AI model (Claude). Every factual
            claim is linked to a published source and was reviewed by the author and proofreaders. Final responsibility
            for the content rests with the author.
          </p>
          <Link href="/about#ai-disclosure" className="mt-3 inline-block text-sm text-gold hover:underline">
            Read the full disclosure →
          </Link>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-gold">Electronic Submission</p>
          <dl className="mt-2 grid grid-cols-[auto_1fr] gap-x-4 gap-y-1.5 text-sm">
            <dt className="text-muted">Submitted by</dt><dd>{site.author}</dd>
            <dt className="text-muted">Section</dt><dd>{site.section}</dd>
            <dt className="text-muted">Instructor</dt><dd>{site.instructor}</dd>
            <dt className="text-muted">Date</dt><dd>{site.submittedOn}</dd>
            <dt className="text-muted">Live link</dt><dd className="break-all">{site.url}</dd>
          </dl>
        </div>
      </div>
      <p className="border-t border-line px-4 py-5 text-center text-xs text-muted">
        Images: Wikimedia Commons contributors (see <Link href="/about#credits" className="underline">credits</Link>). Map boundaries simplified from GADM.
      </p>
    </footer>
  );
}
