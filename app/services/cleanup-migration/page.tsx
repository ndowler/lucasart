import type { Metadata } from 'next';
import { Check } from 'lucide-react';
import { CTASection } from '@/components/cta-section';
import { generateMetadata as genMeta, createServiceSchema } from '@/lib/seo';

export const metadata: Metadata = genMeta({
  title: 'Cleanup & Migration | 30-Day Rescue Plan',
  description:
    "Messy books? We'll clean them up and migrate you to QuickBooks Online in 30 days. Flat-fee pricing based on months of backlog.",
  path: '/services/cleanup-migration',
});

const deliverables = [
  'Full reconciliation of bank and credit card accounts',
  'Transaction categorization and cleanup',
  'Accounts receivable & payable cleanup',
  'Historical adjustments and corrections',
  'Migration to QuickBooks Online',
  'Chart of accounts setup',
  'Training on QBO basics',
  'Transition to ongoing monthly accounting',
];

const pricing = [
  {
    backlog: '1-3 months',
    price: '$1,200 - $2,000',
    turnaround: '2 weeks',
  },
  {
    backlog: '4-6 months',
    price: '$2,000 - $3,500',
    turnaround: '3 weeks',
  },
  {
    backlog: '7-12 months',
    price: '$3,500 - $5,500',
    turnaround: '4 weeks',
  },
  {
    backlog: '12+ months',
    price: 'Custom quote',
    turnaround: '4-6 weeks',
  },
];

export default function CleanupMigrationPage() {
  const serviceSchema = createServiceSchema({
    name: 'Cleanup & Migration Services',
    description:
      '30-day rescue plan for messy books and migration to QuickBooks Online',
    provider: 'FoxGlove CPA',
    areaServed: ['Washington', 'Oregon'],
    priceRange: '$1200-$5500',
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      <div className="container py-16 md:py-24">
        {/* Hero */}
        <div className="mx-auto max-w-3xl text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6">
            Cleanup & Migration: 30-Day Rescue Plan
          </h1>
          <p className="text-lg text-muted-foreground">
            Behind on your books? We will get you current and set you up for success
            in QuickBooks Online.
          </p>
        </div>

        {/* Problem Statement */}
        <div className="mb-16 prose prose-lg max-w-none">
          <p>
            <strong>Messy books create real problems:</strong> You can&apos;t make good
            decisions, your tax prep is expensive and stressful, and lenders won&apos;t
            take you seriously.
          </p>
          <p>
            Our 30-day rescue plan gets you caught up, migrated to QuickBooks
            Online, and ready for ongoing monthly accounting. No judgment, just
            results.
          </p>
        </div>

        {/* Deliverables */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold tracking-tight mb-8">
            What We Do
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {deliverables.map((item, index) => (
              <div key={index} className="flex items-start gap-3">
                <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Pricing Table */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold tracking-tight mb-8">
            Flat-Fee Pricing
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-4 px-4">Backlog</th>
                  <th className="text-left py-4 px-4">Flat Fee</th>
                  <th className="text-left py-4 px-4">Typical Turnaround</th>
                </tr>
              </thead>
              <tbody>
                {pricing.map((row, index) => (
                  <tr key={index} className="border-b">
                    <td className="py-4 px-4 font-medium">{row.backlog}</td>
                    <td className="py-4 px-4 text-primary font-semibold">
                      {row.price}
                    </td>
                    <td className="py-4 px-4 text-muted-foreground">
                      {row.turnaround}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-6 text-sm text-muted-foreground">
            Exact pricing depends on transaction volume, complexity, and current
            software. We will provide a fixed quote after a 20-minute discovery call.
          </p>
        </div>

        {/* Migration Path */}
        <div className="mb-16 bg-muted/30 rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-4">Migration Path</h2>
          <p className="text-muted-foreground mb-4">
            Currently using Excel, Xero, or another platform? We will migrate your
            data to QuickBooks Online as part of the cleanup process.
          </p>
          <ul className="space-y-2 text-muted-foreground">
            <li>
              <Check className="inline h-4 w-4 text-primary mr-2" />
              Clean historical data migration
            </li>
            <li>
              <Check className="inline h-4 w-4 text-primary mr-2" />
              Chart of accounts mapping
            </li>
            <li>
              <Check className="inline h-4 w-4 text-primary mr-2" />
              Customer & vendor list setup
            </li>
            <li>
              <Check className="inline h-4 w-4 text-primary mr-2" />
              Bank feed connections
            </li>
          </ul>
        </div>

        {/* Next Steps */}
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">
            What Happens After Cleanup?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Most clients transition to our ongoing monthly accounting service to
            stay current. We offer a <strong>10% discount</strong> on your first 3
            months if you sign up within 7 days of cleanup completion.
          </p>
        </div>
      </div>

      <CTASection
        title="Ready to clean up your books?"
        description="Book a 20-minute intro call to get a fixed-price quote."
      />
    </>
  );
}

