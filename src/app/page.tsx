import Link from 'next/link';
import { MapHero } from '@/components/map/MapHero';
import { PeopleCards } from '@/components/PeopleCards';


export default function Home() {
  return (
    <div>
      <MapHero />
      <section className="mx-auto mt-20 max-w-7xl px-4 sm:px-6" aria-labelledby="minsupala">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr]">
          <div>
            <div className="weave-rule mb-10" aria-hidden />
            <p className="text-sm uppercase tracking-[0.3em] text-emerald">What is MINSUPALA?</p>
            <h2 id="minsupala" className="mt-3 font-display text-3xl font-semibold sm:text-4xl">One homeland, three peoples, many stories</h2>
          </div>
          <div className="space-y-4 text-muted leading-relaxed">
            <p><strong className="text-text">MINSUPALA</strong> is shorthand for <em>Mindanao, Sulu and Palawan</em> — the southern islands of the Philippines. About 26 million people lived in Mindanao alone in 2020.</p>
            <p>Peace workers and scholars use the term <strong className="text-text">Tri-People</strong> for the three communities who share these islands. It is a reminder that lasting peace must answer the histories and claims of all three — not just one.</p>
          </div>
        </div>
        <PeopleCards />
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/tri-people" className="rounded-xl border border-line px-5 py-3 text-sm hover:border-gold/50 hover:bg-white/5">Meet the Tri-People →</Link>
          <Link href="/peace-initiatives" className="rounded-xl bg-emerald/15 px-5 py-3 text-sm text-emerald hover:bg-emerald/25">See the road to peace →</Link>
        </div>
      </section>
    </div>
  );
}
