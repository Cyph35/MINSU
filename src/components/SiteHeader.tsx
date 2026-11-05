'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { site } from '@/data/site';

export const NAV = [
  { href: '/', label: 'Interactive Map' },
  { href: '/tri-people', label: 'The Tri-People' },
  { href: '/peace-initiatives', label: 'Peace Initiatives' },
  { href: '/about', label: 'About & AI Disclosure' },
] as const;

export function SiteHeader() {
  const path = usePathname();
  const [open, setOpen] = useState(false);
  const isActive = (href: string) => (href === '/' ? path === '/' || path.startsWith('/regions') : path.startsWith(href));
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-ink shadow-[0_6px_20px_rgba(0,0,0,0.4)]">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link href="/" className="group min-w-0" onClick={() => setOpen(false)}>
          <span className="block font-display text-2xl font-semibold text-text sm:text-[1.7rem]">
            Sugilanon <em className="text-gold">sa</em> Kalinaw
          </span>
          <span className="block truncate text-[13px] text-muted sm:text-xs">{site.subtitle}</span>
        </Link>
        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {NAV.map((n) => (
              <li key={n.href}>
                <Link
                  href={n.href}
                  aria-current={isActive(n.href) ? 'page' : undefined}
                  className="px-3 py-2 text-sm text-muted transition hover:bg-white/5 hover:text-text aria-[current=page]:text-gold aria-[current=page]:underline underline-offset-8 decoration-1"
                >
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <button
          type="button"
          className="rounded-lg border border-line p-2 text-text lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((o) => !o)}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </div>
      {open && (
        <nav id="mobile-nav" aria-label="Mobile" className="border-t border-line px-4 pb-4 lg:hidden">
          <ul className="flex flex-col gap-1 pt-2">
            {NAV.map((n) => (
              <li key={n.href}>
                <Link href={n.href} onClick={() => setOpen(false)} aria-current={isActive(n.href) ? 'page' : undefined}
                  className="block rounded-lg px-3 py-3 text-base text-text hover:bg-white/5 aria-[current=page]:text-gold">
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
