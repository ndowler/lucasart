'use client';

import Link from 'next/link';
import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { trackBookMeetingClick } from '@/lib/analytics';

const packages = [
  {
    name: "Founders' First-Year Bundle",
    description: 'Entity, clean books, payroll, quarterly tax plan',
    price: 'Starting at $800/mo',
    features: [
      'Entity formation (LLC, S-Corp, or C-Corp)',
      'QuickBooks Online setup',
      'Monthly bookkeeping & reconciliations',
      'Payroll setup & processing',
      'Quarterly tax planning',
      'Owner pay optimization',
    ],
    cta: 'Book intro call',
    href: '/services/accounting',
  },
  {
    name: 'Quarterly "Tax + Cash" Plan',
    description: 'Close/forecast, tax moves, owner pay',
    price: 'From $600/mo',
    features: [
      'Monthly close & reconciliations',
      'Cash flow forecasting',
      'Quarterly tax planning sessions',
      'Estimated tax payment calculations',
      'Owner compensation strategy',
      'KPI dashboard & monthly reports',
    ],
    cta: 'Book intro call',
    href: '/services/accounting',
  },
  {
    name: 'S-Corp Analysis',
    description: 'WA/OR-specific comp & tax modeling',
    price: 'From $500',
    features: [
      'Current structure analysis',
      'S-Corp election feasibility',
      'Owner compensation recommendations',
      'State-specific tax implications (WA/OR)',
      'Break-even revenue calculations',
      'Implementation roadmap',
    ],
    cta: 'Learn more',
    href: '/services/s-corp-analysis',
    note: 'Credited to monthly if you sign up within 30 days',
  },
];

export function PackagesSection() {
  const handleBookClick = () => {
    trackBookMeetingClick('packages');
    const event = new CustomEvent('openScheduler');
    window.dispatchEvent(event);
  };

  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Our Packages
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose the right level of support for your business stage
          </p>
        </div>
        <div className="grid gap-8 lg:grid-cols-3">
          {packages.map((pkg, index) => (
            <Card key={index} className="flex flex-col">
              <CardHeader>
                <CardTitle>{pkg.name}</CardTitle>
                <CardDescription>{pkg.description}</CardDescription>
                <div className="mt-4 text-3xl font-bold">{pkg.price}</div>
                {pkg.note && (
                  <p className="text-xs text-muted-foreground mt-2">{pkg.note}</p>
                )}
              </CardHeader>
              <CardContent className="flex-1">
                <ul className="space-y-3">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex gap-2">
                      <Check
                        className="h-5 w-5 text-primary shrink-0"
                        aria-hidden="true"
                      />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                {pkg.cta === 'Book intro call' ? (
                  <Button className="w-full tap-target" onClick={handleBookClick}>
                    {pkg.cta}
                  </Button>
                ) : (
                  <Button className="w-full tap-target" variant="outline" asChild>
                    <Link href={pkg.href}>{pkg.cta}</Link>
                  </Button>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

