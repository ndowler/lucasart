import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, FileText, TrendingUp, Calculator, Wrench } from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { CTASection } from '@/components/cta-section';
import { generateMetadata as genMeta } from '@/lib/seo';

export const metadata: Metadata = genMeta({
  title: 'Accounting Services for PNW Founders',
  description:
    'Monthly accounting, tax preparation, S-Corp analysis, and cleanup services for Washington and Oregon small businesses.',
  path: '/services',
});

const services = [
  {
    icon: FileText,
    title: 'Accounting & Monthly Books',
    description:
      'Monthly close, bookkeeping, reconciliations, and KPI reporting with quarterly tax planning.',
    href: '/services/accounting',
  },
  {
    icon: Calculator,
    title: 'S-Corp Analysis',
    description:
      'WA/OR-specific comp and tax modeling to determine if S-Corp election makes sense for your business.',
    href: '/services/s-corp-analysis',
  },
  {
    icon: TrendingUp,
    title: 'Tax Preparation',
    description:
      'Business and personal tax returns with strategic planning to minimize your tax burden.',
    href: '/services/tax-prep',
  },
  {
    icon: Wrench,
    title: 'Cleanup & Migration',
    description:
      '30-day rescue plan to clean up messy books and migrate to QuickBooks Online.',
    href: '/services/cleanup-migration',
  },
];

const steps = [
  {
    number: '1',
    title: 'Book a 20-min intro',
    description: 'Tell us about your business and current challenges',
  },
  {
    number: '2',
    title: 'Diagnose & scope',
    description: 'We assess your needs and recommend the right service package',
  },
  {
    number: '3',
    title: 'Plan & price',
    description: 'Receive a clear proposal with transparent pricing and timeline',
  },
];

export default function ServicesPage() {
  return (
    <>
      <div className="container py-16 md:py-24">
        {/* Intro */}
        <div className="mx-auto max-w-3xl text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6">
            Services for PNW Founders
          </h1>
          <p className="text-lg text-muted-foreground">
            From monthly accounting to tax prep to S-Corp analysis, we offer the
            services you need to stay compliant and optimize your finances.
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid gap-6 md:grid-cols-2 mb-16">
          {services.map((service, index) => (
            <Link key={index} href={service.href} className="group">
              <Card className="h-full transition-all hover:shadow-lg hover:border-primary">
                <CardHeader>
                  <div className="mb-4 rounded-lg bg-primary/10 p-3 w-fit">
                    <service.icon
                      className="h-6 w-6 text-primary"
                      aria-hidden="true"
                    />
                  </div>
                  <CardTitle className="text-2xl">{service.title}</CardTitle>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center text-sm font-medium text-primary group-hover:underline">
                    Learn more
                    <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {/* What Happens Next */}
        <div className="bg-muted/30 rounded-lg p-8 md:p-12">
          <h2 className="text-3xl font-bold tracking-tight text-center mb-12">
            What Happens Next
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            {steps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground text-xl font-bold">
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <CTASection />
    </>
  );
}

