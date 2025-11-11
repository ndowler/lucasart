'use client';

import { Button } from '@/components/ui/button';
import { trackBookMeetingClick } from '@/lib/analytics';

interface CTASectionProps {
  title?: string;
  description?: string;
  buttonText?: string;
  location?: string;
}

export function CTASection({
  title = 'Ready to Get Started?',
  description = "Book a 20-minute intro call and let's discuss how we can help your business.",
  buttonText = 'Book a 20-min intro',
  location = 'cta_section',
}: CTASectionProps) {
  const handleClick = () => {
    trackBookMeetingClick(location);
    const event = new CustomEvent('openScheduler');
    window.dispatchEvent(event);
  };

  return (
    <section className="bg-primary py-16 md:py-24">
      <div className="container text-center">
        <h2 className="text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl">
          {title}
        </h2>
        {description && (
          <p className="mx-auto mt-4 max-w-2xl text-lg text-primary-foreground/90">
            {description}
          </p>
        )}
        <div className="mt-8">
          <Button
            size="lg"
            variant="secondary"
            onClick={handleClick}
            className="tap-target text-lg px-12"
          >
            {buttonText}
          </Button>
        </div>
      </div>
    </section>
  );
}

