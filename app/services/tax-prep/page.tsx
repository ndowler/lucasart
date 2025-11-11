'use client';

import { Check, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { CTASection } from '@/components/cta-section';
import { FAQSection } from '@/components/faq-section';
import { createServiceSchema } from '@/lib/seo';
import { trackDownload } from '@/lib/analytics';
import type { FAQ } from '@/types';

// Note: Client Component for interactive download button
// TODO: Move metadata to a layout or use generateMetadata in a wrapper

const pricing = [
  {
    type: 'Personal (1040)',
    starting: 'From $1,200',
    includes: [
      'Federal 1040 with Schedule C',
      'State return (WA or OR)',
      'Standard deduction or itemized',
      'Investment income (W-2, 1099s)',
      'Strategic tax review',
    ],
  },
  {
    type: 'Business (1120S, 1065)',
    starting: 'From $1,600',
    includes: [
      'S-Corp (1120S) or Partnership (1065)',
      'Federal and state returns',
      'K-1 preparation for owners',
      'Balance sheet reconciliation',
      'Strategic tax planning session',
    ],
  },
];

const addOns = [
  'Additional state filings (+$200 per state)',
  'Late filing penalties & representation (+$500)',
  'Cleanup of prior year errors (+$800)',
  'Amended returns (+$600 per year)',
  'Multi-entity structures (custom quote)',
];

const notIncluded = [
  'Monthly bookkeeping (see Accounting service)',
  'Audit defense or IRS representation (available as add-on)',
  'International tax or FBAR filings',
  'Estate or trust returns',
];

const faqs: FAQ[] = [
  {
    question: 'When should I provide my tax documents?',
    answer:
      'Ideally by early March for an April filing. We can accommodate later starts, but rush fees may apply after March 15.',
  },
  {
    question: 'Do you handle extensions if needed?',
    answer:
      'Yes. We file extensions at no extra charge if your situation requires more time. Extensions give you until October 15, but any tax owed is still due April 15.',
  },
  {
    question: 'What if my books are messy?',
    answer:
      "We can clean them up first. Tax prep pricing assumes your books are ready. If cleanup is needed, we'll quote that separately (typically 2-4 weeks, $800-$2K).",
  },
  {
    question: 'Is tax planning included?',
    answer:
      'Yes—every tax prep engagement includes a strategic review call to identify opportunities for the current and upcoming year. If you want ongoing quarterly planning, see our Monthly Accounting service.',
  },
];

export default function TaxPrepPage() {
  const serviceSchema = createServiceSchema({
    name: 'Business & Personal Tax Preparation',
    description:
      'Tax preparation for individuals and small businesses in Washington and Oregon',
    provider: 'FoxGlove CPA',
    areaServed: ['Washington', 'Oregon'],
    priceRange: '$1200-$3000',
  });

  const handleDownload = () => {
    trackDownload('tax-prep-ready-checklist.pdf');
    // In production, this would trigger actual download
    window.open('/downloads/tax-prep-ready-checklist.pdf', '_blank');
  };

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
            Business & Personal Tax Preparation
          </h1>
          <p className="text-lg text-muted-foreground">
            Strategic tax preparation for PNW founders. We don&apos;t just file—we
            optimize.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {pricing.map((item, index) => (
            <div key={index} className="rounded-lg border p-8">
              <h2 className="text-2xl font-bold mb-2">{item.type}</h2>
              <p className="text-3xl font-bold text-primary mb-6">
                {item.starting}
              </p>
              <h3 className="font-semibold mb-3">Includes:</h3>
              <ul className="space-y-2">
                {item.includes.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Add-ons */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold tracking-tight mb-6">Add-Ons</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold mb-3">Available Add-Ons</h3>
              <ul className="space-y-2 text-muted-foreground">
                {addOns.map((item, index) => (
                  <li key={index}>• {item}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3">Not Included</h3>
              <ul className="space-y-2 text-muted-foreground">
                {notIncluded.map((item, index) => (
                  <li key={index}>• {item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Ready Checklist */}
        <div className="mb-16 bg-muted/30 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">
            Get the &quot;Ready for Tax Prep&quot; Checklist
          </h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Download our free checklist to ensure you have everything we need for
            a smooth tax prep process.
          </p>
          <Button onClick={handleDownload} size="lg">
            <Download className="mr-2 h-5 w-5" />
            Download Checklist (PDF)
          </Button>
        </div>
      </div>

      <FAQSection faqs={faqs} />
      <CTASection
        title="Ready to file your taxes?"
        description="Book a 20-minute intro call to discuss your tax situation."
      />
    </>
  );
}

