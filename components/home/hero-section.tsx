'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { trackBookMeetingClick } from '@/lib/analytics';

export function HeroSection() {
  const handleCTAClick = () => {
    trackBookMeetingClick('hero');
    const event = new CustomEvent('openScheduler');
    window.dispatchEvent(event);
  };

  return (
    <section className="relative overflow-hidden py-20 md:py-32">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="/videos/hero-background.mp4" type="video/mp4" />
      </video>
      
      {/* Overlay for text readability */}
      <div className="absolute inset-0 bg-black/50" />
      
      {/* Content */}
      <div className="container relative z-10">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl text-white">
            Cash Flow Calm. Tax Season Under Control.
          </h1>
          <p className="mt-6 text-2xl sm:text-3xl font-semibold text-white max-w-2xl mx-auto">
            Proactive Accounting Built for PNW Founders
          </p>
          <p className="mt-4 text-lg sm:text-xl text-white/90 max-w-2xl mx-auto">
            Real guidance, not just reports. Veteran-owned. Advisory-first.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" onClick={handleCTAClick} className="tap-target text-lg px-8">
              Book a 20-min intro
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="tap-target text-lg px-8"
            >
              <Link href="/pricing">See pricing</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

