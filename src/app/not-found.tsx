import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="mx-auto max-w-2xl px-4 py-24 text-center">
      <p className="text-xs uppercase tracking-[0.3em] text-gold">404</p>
      <h1 className="mt-3 font-display text-4xl">Hindi nakita — page not found</h1>
      <p className="mt-4 text-muted">This story isn’t on our map yet. Return to the map to explore the regions of Mindanao, Sulu and Palawan.</p>
      <Link href="/" className="mt-8 inline-block rounded-xl bg-gold px-5 py-3 font-semibold text-ink">Back to the Interactive Map</Link>
    </section>
  );
}
