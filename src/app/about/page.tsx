import type { Metadata } from 'next';
import Link from 'next/link';
import { sources } from '@/data/sources';
import { regions } from '@/data/regions';
import { site } from '@/data/site';

export const metadata: Metadata = { title: 'About & AI Disclosure', description: 'Methodology, academic integrity, AI disclosure, sources and image credits.' };

export default function AboutPage() {
  const credits = regions.flatMap((r) => r.media.filter((m) => m.kind === 'image' && !m.placeholder).map((m) => ({ region: r.shortName, m })));
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 sm:py-16">
      <p className="text-xs uppercase tracking-[0.3em] text-gold">About</p>
      <h1 className="mt-3 font-display text-4xl font-semibold sm:text-5xl">About this portal</h1>
      <div className="prose-kalinaw mt-6 space-y-4">
        <p>
          <em>Sugilanon sa Kalinaw</em> — Cebuano for “stories of peace” — is an educational portal on the shared history,
          cultural heritage and peacebuilding of the Tri-People of Mindanao, Sulu and Palawan. It was made as the final
          requirement for <strong>{site.course}</strong> at {site.school}, under {site.instructor}.
        </p>
      </div>

      <section id="methodology" className="mt-14 scroll-mt-24">
        <h2 className="font-display text-2xl font-semibold">Methodology</h2>
        <ul className="mt-4 list-disc space-y-2 pl-5 text-muted">
          <li>Every factual paragraph is linked to at least one published source, listed below. An automated test fails the build if a citation is missing or does not resolve.</li>
          <li>Population figures come from the 2020 Census of Population and Housing of the Philippine Statistics Authority.</li>
          <li>Peoples are named by their self-designations where known. Conflict is described factually, without assigning collective blame to any people.</li>
          <li>Images are openly licensed (public domain or Creative Commons BY / BY-SA) from Wikimedia Commons and credited individually. Audio and video slots are clearly marked placeholders.</li>
          <li>The map is a stylized simplification of provincial boundaries and is not survey-accurate.</li>
        </ul>
      </section>

      <section id="ai-disclosure" className="mt-14 scroll-mt-24 rounded-[var(--radius-card)] border border-emerald/30 bg-emerald/5 p-6">
        <h2 className="font-display text-2xl font-semibold text-emerald">AI Disclosure</h2>
        <div className="prose-kalinaw mt-4 space-y-3">
          <p>
            This portal was produced with the assistance of an AI model, <strong>Claude (Anthropic)</strong>. The AI was used to
            (1) search for and summarize published sources, (2) draft the region narratives, timeline and page text, and
            (3) design and write the website’s code.
          </p>
          <p>
            The author directed the work, set its scope and design, and reviewed the content. The drafts were checked
            against the cited sources and proofread by group members: {site.proofreaders.join(', ')}. Any remaining
            errors are the author’s responsibility.
          </p>
          <p>
            AI systems can produce plausible-sounding mistakes. Readers are encouraged to consult the sources below,
            and especially the communities themselves, for authoritative knowledge of their own histories.
          </p>
        </div>
      </section>

      <section id="academic-integrity" className="mt-14 scroll-mt-24">
        <h2 className="font-display text-2xl font-semibold">Academic Integrity</h2>
        <p className="mt-4 leading-relaxed text-muted">
          We, {site.submittedBy}, affirm that this work was prepared for {site.course}, that all sources used are
          acknowledged, that the use of AI assistance is fully disclosed above, and that we take responsibility for the
          accuracy and integrity of its content.
        </p>
        <dl className="mt-4 grid grid-cols-[auto_1fr] gap-x-4 gap-y-1 text-sm">
          <dt className="text-muted">Submitted by</dt><dd><Link href="/class" className="text-gold underline-offset-4 hover:underline">{site.submittedBy}</Link></dd>
          <dt className="text-muted">Instructor</dt><dd>{site.instructor}</dd>
          <dt className="text-muted">Submitted</dt><dd>{site.submittedOn}</dd>
        </dl>
      </section>

      <section id="sources" className="mt-14 scroll-mt-24">
        <h2 className="font-display text-2xl font-semibold">Sources</h2>
        <ol className="mt-4 space-y-3 text-sm">
          {sources.map((s, i) => (
            <li key={s.id} id={`src-${s.id}`} className="scroll-mt-24 rounded-lg p-2 target:bg-gold/10 target:ring-1 target:ring-gold/40">
              <span className="mr-2 font-display text-gold">[{i + 1}]</span>
              {s.author}. <em>{s.title}</em>. {s.publisher ? `${s.publisher}, ` : ''}{s.year}.
              {s.url && <> <a href={s.url} target="_blank" rel="noreferrer" className="break-all text-gold/80 underline">{s.url}</a></>}
            </li>
          ))}
        </ol>
      </section>

      <section id="credits" className="mt-14 scroll-mt-24">
        <h2 className="font-display text-2xl font-semibold">Image Credits</h2>
        <ul className="mt-4 space-y-2 text-sm text-muted">
          {credits.map(({ region, m }) => (
            <li key={m.src}>
              <span className="text-text">{region}</span> — {m.caption}. © {m.credit}, {m.license}.{' '}
              {m.sourceUrl && <a href={m.sourceUrl} target="_blank" rel="noreferrer" className="underline">Wikimedia Commons</a>}
            </li>
          ))}
          <li><span className="text-text">Map</span> — boundaries simplified from GADM via <a className="underline" href="https://github.com/macoymejia/geojsonph" target="_blank" rel="noreferrer">geojsonph</a>, for educational use.</li>
        </ul>
      </section>

      <p className="mt-14 text-center"><Link href="/" className="text-gold hover:underline">← Back to the Interactive Map</Link></p>
    </div>
  );
}
