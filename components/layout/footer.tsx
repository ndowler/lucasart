'use client';

import Link from 'next/link';
import { trackPhoneClick, trackEmailClick } from '@/lib/analytics';

const quickLinks = [
  { name: 'Services', href: '/services' },
  { name: 'Pricing', href: '/pricing' },
  { name: 'About', href: '/about' },
  { name: 'Articles', href: '/articles' },
  { name: 'Contact', href: '/contact' },
  { name: 'Client Portal', href: '/portal' },
  { name: 'Privacy Policy', href: '/privacy' },
  { name: 'Terms of Service', href: '/terms' },
  { name: 'Data Security', href: '/data-security' },
];

const badges = [
  'Veteran-Owned',
  'QBO ProAdvisor',
  'US-only data handling',
];

export function Footer() {
  const phone = process.env.NEXT_PUBLIC_PHONE || '(xxx) xxx-xxxx';
  const email = process.env.NEXT_PUBLIC_EMAIL || 'hello@foxglove.cpa';
  const address = process.env.NEXT_PUBLIC_ADDRESS || 'Tacoma, WA';

  return (
    <footer className="border-t bg-muted/40">
      <div className="container py-12 md:py-16">
        <div className="grid gap-8 lg:grid-cols-4">
          {/* NAP Column */}
          <div className="lg:col-span-1">
            <div className="mb-4 text-xl font-bold">FoxGlove CPA</div>
            <address className="not-italic space-y-2 text-sm text-muted-foreground">
              <div>{address}</div>
              <div>
                <a
                  href={`tel:${phone.replace(/\D/g, '')}`}
                  className="hover:text-primary transition-colors"
                  onClick={() => trackPhoneClick()}
                >
                  {phone}
                </a>
              </div>
              <div>
                <a
                  href={`mailto:${email}`}
                  className="hover:text-primary transition-colors"
                  onClick={() => trackEmailClick()}
                >
                  {email}
                </a>
              </div>
            </address>
            <div className="mt-4 text-sm text-muted-foreground">
              Serving founders across the Pacific Northwest: WA & OR
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h3 className="mb-4 text-sm font-semibold">Quick Links</h3>
            <div className="grid grid-cols-2 gap-3 text-sm">
              {quickLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Badges */}
          <div className="lg:col-span-1">
            <h3 className="mb-4 text-sm font-semibold">Credentials</h3>
            <div className="space-y-2">
              {badges.map((badge) => (
                <div
                  key={badge}
                  className="inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium mr-2 mb-2"
                >
                  {badge}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t pt-8 md:flex-row">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} FoxGlove CPA. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              LinkedIn
            </a>
            <a
              href="https://google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Google Business Profile"
            >
              Google
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

