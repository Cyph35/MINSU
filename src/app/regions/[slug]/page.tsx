import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { REGION_SLUGS, getRegion, regions } from '@/data/regions';
import { CitedParagraph } from '@/components/region/CitedParagraph';
import { Plate } from '@/components/region/Plate';
import { RegionTimeline } from '@/components/region/RegionTimeline';
import { CiteLinks } from '@/components/CiteLinks';
import { CountUp } from '@/components/CountUp';
import { MediaGallery } from '@/components/region/MediaGallery';
import { RegionTabs } from '@/components/region/RegionTabs';
import { TriChips } from '@/components/TriChips';
import { getSource } from '@/data/sources';

export const dynamicParams = false;
export const generateStaticParams = () => REGION_SLUGS.map((slug) => ({ slug }));

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const r = getRegion((await params).slug);
  if (!r) return {};
  return { title: r.name, description: r.summary, openGraph: { title: r.name, description: r.summary, images: r.heroImage.src ? [r.heroImage.src] : [] } };
}

function SectionIntro({ eyebrow, title, color }: { eyebrow: string; title: string; color: string }) {
  return (
    <header className="mb-6">
      <p className={`text-xs uppercase tracking-[0.25em] ${color}`}>{eyebrow}</p>
      <h2 className="mt-2 font-display text-2xl font-semibold sm:text-3xl">{title}</h2>
    </header>
  );
}

export default async function RegionPage({ params }: Props) {
  const { slug } = await params;
  const r = getRegion(slug);
  if (!r) notFound();
  const idx = regions.findIndex((x) => x.slug === slug);
  const prev = regions[(idx - 1 + regions.length) % regions.length];
  const next = regions[(idx + 1) % regions.length];
  const popSource = getSource(r.population.cite[0]);

  return (
    <article>
      <header className="relative isolate overflow-hidden">
        {r.heroImage.src && (
          <Image src={r.heroImage.src} alt={r.heroImage.alt} fill priority sizes="100vw" className="plate-img -z-10 object-cover opacity-45" />
        )}
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-ink via-ink/85 to-ink/40" aria-hidden />
        <div className="mx-auto max-w-6xl px-4 pt-10 pb-12 sm:px-6 sm:pt-20 sm:pb-16">
          <nav aria-label="Breadcrumb" className="text-sm text-muted">
            <Link href="/" className="hover:text-gold">Interactive Map</Link> <span aria-hidden>/</span> <span>{r.shortName}</span>
          </nav>
          <h1 className="mt-4 max-w-4xl font-display text-3xl leading-[1.1] font-bold sm:text-5xl">{r.name}</h1>
          <p className="mt-2 text-sm text-muted">{r.provinces}</p>
          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-text">{r.summary}</p>
          <dl className="mt-8 grid max-w-3xl grid-cols-2 gap-3 sm:grid-cols-3">
            <div className="glass rounded-xl p-3">
              <dt className="text-[13px] uppercase tracking-wider text-muted">Population ({r.population.year})</dt>
              <dd className="mt-1 font-display text-2xl tabular-nums"><CountUp value={r.population.value} /></dd>
            </div>
            <div className="glass rounded-xl p-3 sm:col-span-2">
              <dt className="text-[13px] uppercase tracking-wider text-muted">Languages</dt>
              <dd className="mt-1 text-sm leading-relaxed">{r.languages.join(' · ')}</dd>
            </div>
          </dl>
          <p className="mt-2 text-[13px] text-muted">{r.population.note}. Source: {popSource?.author}, {popSource?.year}.</p>
          <p className="mt-3 text-[13px] text-muted">Header image: {r.heroImage.caption} — © {r.heroImage.credit} · {r.heroImage.license}</p>
        </div>
      </header>

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <section aria-label="Tri-People composition" className="mb-10">
          <TriChips tri={r.triPeople} />
        </section>
        <RegionTabs
          panels={{
            history: (
              <section>
                <SectionIntro eyebrow="Section 1" title="Historical Roots & Context" color="text-gold" />
                <div className="prose-kalinaw max-w-5xl space-y-5 after:block after:clear-both after:content-['']">
                  {r.history.map((p, i) => (
                    <div key={i}>
                      {i === 0 && <Plate item={r.media[r.inline.history[0]]} n={1} />}
                      {i === 2 && r.inline.history[1] !== undefined && <Plate item={r.media[r.inline.history[1]]} n={2} align="left" />}
                      <CitedParagraph p={p} />
                    </div>
                  ))}
                </div>
                <h3 className="mt-14 font-display text-2xl">A timeline of the region</h3>
                <div className="weave-rule mt-3 max-w-xs" aria-hidden />
                <RegionTimeline events={r.timeline} />
              </section>
            ),
            peoples: (
              <section>
                <SectionIntro eyebrow="The peoples" title="Who lives here" color="text-gold" />
                <p className="mb-8 max-w-3xl text-muted">The groups below are those most closely tied to this region. Many families belong to more than one story through marriage, migration and faith.</p>
                <div className="grid gap-5 md:grid-cols-2">
                  {r.peoples.map((p) => (
                    <article key={p.name} className="glass p-5">
                      <p className={`uppercase text-sm ${p.group === 'moro' ? 'text-moro' : p.group === 'lumad' ? 'text-lumad' : 'text-settler'}`}>
                        {p.group === 'moro' ? 'Filipino Muslims' : p.group === 'lumad' ? 'Indigenous Peoples' : 'Migrant-Settlers'}
                      </p>
                      <h3 className="mt-1 font-display text-2xl">{p.name}</h3>
                      <p className="mt-2 leading-relaxed">{p.description}<CiteLinks ids={p.cite} /></p>
                    </article>
                  ))}
                </div>
              </section>
            ),
            heritage: (
              <section>
                <SectionIntro eyebrow="Section 2" title="Shared Heritage & Culture" color="text-gold" />
                <div className="prose-kalinaw max-w-5xl space-y-5 after:block after:clear-both after:content-['']">
                  {r.heritage.map((p, i) => (
                    <div key={i}>
                      {i === 0 && <Plate item={r.media[r.inline.heritage[0]]} n={3} />}
                      {i === 2 && r.inline.heritage[1] !== undefined && <Plate item={r.media[r.inline.heritage[1]]} n={4} align="left" />}
                      <CitedParagraph p={p} />
                    </div>
                  ))}
                </div>
                <h3 className="mt-14 font-display text-2xl">Landmarks &amp; heritage sites</h3>
                <div className="weave-rule mt-3 max-w-xs" aria-hidden />
                <ul className="mt-6 grid gap-5 md:grid-cols-3">
                  {r.landmarks.map((l) => (
                    <li key={l.name} className="glass p-5">
                      <h4 className="font-display text-xl text-gold">{l.name}</h4>
                      <p className="mt-2 leading-relaxed">{l.description}<CiteLinks ids={l.cite} /></p>
                    </li>
                  ))}
                </ul>
              </section>
            ),
            youth: (
              <section>
                <SectionIntro eyebrow="Section 3" title="Youth & Peace Action" color="text-emerald" />
                <ol className="grid gap-4 md:grid-cols-2">
                  {r.youthPeace.map((y, i) => (
                    <li key={i} className="glass rounded-[var(--radius-card)] border-l-2 !border-l-emerald p-5">
                      <p className="font-display text-sm text-emerald">Pathway {i + 1}</p>
                      <h3 className="mt-1 text-lg font-semibold">{y.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted">{y.body}</p>
                    </li>
                  ))}
                </ol>
              </section>
            ),
            gallery: (
              <section>
                <SectionIntro eyebrow="Media" title="Gallery & Archive" color="text-gold" />
                <MediaGallery items={r.media} />
              </section>
            ),
          }}
        />
        <nav aria-label="More regions" className="mt-16 grid gap-3 border-t border-line pt-8 sm:grid-cols-2">
          <Link href={`/regions/${prev.slug}`} className="glass rounded-xl p-4 hover:border-gold/40">
            <span className="text-xs text-muted">← Previous region</span>
            <span className="mt-1 block font-display text-lg">{prev.name}</span>
          </Link>
          <Link href={`/regions/${next.slug}`} className="glass rounded-xl p-4 text-right hover:border-gold/40">
            <span className="text-xs text-muted">Next region →</span>
            <span className="mt-1 block font-display text-lg">{next.name}</span>
          </Link>
        </nav>
      </div>
    </article>
  );
}
