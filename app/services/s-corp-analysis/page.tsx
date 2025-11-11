import type { Metadata } from 'next';
import Link from 'next/link';
import { Check } from 'lucide-react';
import { CTASection } from '@/components/cta-section';
import { FAQSection } from '@/components/faq-section';
import { generateMetadata as genMeta, createServiceSchema } from '@/lib/seo';
import type { FAQ } from '@/types';

export const metadata: Metadata = genMeta({
  title: 'S-Corp Analysis for WA & OR Owners',
  description:
    'Should you elect S-Corp status? Get WA/OR-specific tax modeling, owner compensation recommendations, and break-even analysis. From $500 (credited if you sign up).',
  path: '/services/s-corp-analysis',
});

const deliverables = [
  'Current tax structure analysis',
  'S-Corp election feasibility study',
  'Owner compensation recommendations (reasonable salary)',
  'State-specific tax implications (WA vs OR differences)',
  'Break-even revenue calculations',
  'Payroll setup roadmap',
  'Entity formation guidance (if needed)',
  'Implementation timeline and checklist',
];

const whenItMakesSense = [
  'Net income consistently above $60-80K',
  'Predictable revenue and cash flow',
  'Ability to pay yourself reasonable W-2 salary',
  'Willing to run payroll quarterly or monthly',
  'Multi-year business (not brand new)',
];

const whenToWait = [
  'Net income below $50K',
  'Inconsistent or seasonal revenue',
  'High owner distributions needed',
  'Planning to raise venture capital',
  'First year in business',
];

const faqs: FAQ[] = [
  {
    question: "What's the typical tax savings from S-Corp election?",
    answer:
      'It varies, but many clients see $5K-$25K in annual tax savings once net income exceeds $80K. The savings come from reducing self-employment tax on the portion of income taken as distributions instead of salary.',
  },
  {
    question: 'Do WA and OR have different rules?',
    answer:
      'Washington has no state income tax, which simplifies things. Oregon has state income tax, but S-Corp distributions are still subject to it. The federal SE tax savings apply in both states, but we model the full picture for your specific situation.',
  },
  {
    question: 'What if I elect S-Corp but my income drops?',
    answer:
      'You can always revoke S-Corp election, though there are timing rules. More commonly, we adjust your salary downward if revenue drops, maintaining compliance with "reasonable compensation" requirements.',
  },
  {
    question: "Is the $500 analysis fee refunded if I don't elect S-Corp?",
    answer:
      "The fee is only credited if you sign up for ongoing monthly accounting within 30 days of the analysis. If you decide S-Corp doesn't make sense for your situation, the analysis fee stands—but you'll have clarity and avoid making a costly mistake.",
  },
];

export default function SCorpAnalysisPage() {
  const serviceSchema = createServiceSchema({
    name: 'S-Corp Analysis for WA & OR Owners',
    description:
      'S-Corp election feasibility, tax modeling, and owner compensation recommendations',
    provider: 'FoxGlove CPA',
    areaServed: ['Washington', 'Oregon'],
    priceRange: '$500-$750',
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
            S-Corp Analysis for WA & OR Owners
          </h1>
          <p className="text-lg text-muted-foreground">
            Should you elect S-Corp status? Get a data-driven answer with
            state-specific tax modeling.
          </p>
        </div>

        {/* Lead Copy */}
        <div className="mb-16 prose prose-lg max-w-none">
          <p>
            <strong>S-Corp election can save you thousands in taxes</strong>—but
            only if your revenue, cash flow, and structure support it. Electing
            too early (or never electing when you should) costs money.
          </p>
          <p>
            Our S-Corp analysis gives you a clear recommendation based on your
            actual numbers, WA or OR tax rules, and your business stage. No
            guessing.
          </p>
        </div>

        {/* When It Makes Sense */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="rounded-lg border p-6">
            <h2 className="text-2xl font-bold mb-4">
              When S-Corp makes sense
            </h2>
            <ul className="space-y-2 text-muted-foreground">
              {whenItMakesSense.map((item, index) => (
                <li key={index} className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-lg border p-6">
            <h2 className="text-2xl font-bold mb-4">When to wait</h2>
            <ul className="space-y-2 text-muted-foreground">
              {whenToWait.map((item, index) => (
                <li key={index}>• {item}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* What You Get */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold tracking-tight mb-8">
            What You Get
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

        {/* Pricing */}
        <div className="mb-16 bg-primary/5 rounded-lg p-8">
          <h2 className="text-3xl font-bold tracking-tight mb-4">Pricing</h2>
          <p className="text-3xl font-bold text-primary mb-4">From $500</p>
          <p className="text-muted-foreground mb-4">
            <strong>Credited to monthly accounting</strong> if you sign up for
            our ongoing service within 30 days.
          </p>
          <p className="text-sm text-muted-foreground">
            Typical turnaround: 5-7 business days after we receive your financial
            info.
          </p>
        </div>

        {/* Calculator Link */}
        <div className="mb-16 text-center border-t border-b py-12">
          <h2 className="text-2xl font-bold mb-4">
            Want a quick ballpark estimate?
          </h2>
          <p className="text-muted-foreground mb-6">
            Use our free S-Corp savings calculator to see if you&apos;re in the
            ballpark for election.
          </p>
          <Link
            href="/calculator"
            className="text-primary hover:underline font-medium"
          >
            Try the S-Corp Calculator →
          </Link>
        </div>
      </div>

      <FAQSection faqs={faqs} />
      <CTASection
        title="Ready to find out if S-Corp makes sense?"
        description="Book a 20-minute intro call to discuss your situation."
      />
    </>
  );
}

