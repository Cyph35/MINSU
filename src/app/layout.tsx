import type { Metadata, Viewport } from 'next';
import { Libre_Baskerville, Source_Serif_4 } from 'next/font/google';
import './globals.css';
import { SiteHeader } from '@/components/SiteHeader';
import { SiteFooter } from '@/components/SiteFooter';
import { site } from '@/data/site';

const baskerville = Libre_Baskerville({ subsets: ['latin'], weight: ['400', '700'], style: ['normal', 'italic'], variable: '--font-baskerville', display: 'swap' });
const sourceSerif = Source_Serif_4({ subsets: ['latin'], style: ['normal', 'italic'], variable: '--font-source-serif', display: 'swap' });

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000'),
  title: { default: `${site.title} — ${site.tagline}`, template: `%s · ${site.title}` },
  description:
    'An interactive history and peace portal on the Tri-People of Mindanao, Sulu and Palawan — Filipino Muslims, Indigenous Peoples (Lumad) and Migrant-Settlers.',
};

export const viewport: Viewport = { themeColor: '#1C140D' };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${baskerville.variable} ${sourceSerif.variable}`}>
      <body className="min-h-dvh flex flex-col">
        <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:rounded-lg focus:bg-gold focus:px-4 focus:py-2 focus:text-ink">
          Skip to content
        </a>
        <SiteHeader />
        <main id="main" className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
