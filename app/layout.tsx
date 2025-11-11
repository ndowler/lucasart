import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { SchedulerModal } from '@/components/scheduler-modal';
import { GTMScript } from '@/components/gtm-script';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://foxglove.cpa'),
  title: {
    default:
      'Proactive Tax & Cash-Flow Coaching | FoxGlove CPA (Veteran-Owned, PNW)',
    template: '%s | FoxGlove CPA (Veteran-Owned, PNW)',
  },
  description:
    'Clear answers fast. Measurable savings. Veteran-owned CPA serving PNW founders with proactive tax planning and cash-flow coaching.',
  keywords: [
    'CPA',
    'accountant',
    'tax planning',
    'cash flow',
    'veteran-owned',
    'PNW',
    'Pacific Northwest',
    'Washington',
    'Oregon',
    'small business',
  ],
  authors: [{ name: 'FoxGlove CPA' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://foxglove.cpa',
    siteName: 'FoxGlove CPA',
    title:
      'Proactive Tax & Cash-Flow Coaching | FoxGlove CPA (Veteran-Owned, PNW)',
    description:
      'Clear answers fast. Measurable savings. Veteran-owned CPA serving PNW founders.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'FoxGlove CPA - Veteran-Owned CPA for PNW Founders',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title:
      'Proactive Tax & Cash-Flow Coaching | FoxGlove CPA (Veteran-Owned, PNW)',
    description:
      'Clear answers fast. Measurable savings. Veteran-owned CPA serving PNW founders.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <GTMScript />
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
        <SchedulerModal />
      </body>
    </html>
  );
}

