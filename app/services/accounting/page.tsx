import type { Metadata } from 'next';
import Link from 'next/link';
import { Check, X } from 'lucide-react';
import { CTASection } from '@/components/cta-section';
import { FAQSection } from '@/components/faq-section';
import { generateMetadata as genMeta, createServiceSchema } from '@/lib/seo';
import type { FAQ } from '@/types';

export const metadata: Metadata = genMeta({
  title: 'Monthly Accounting for PNW Founders',
  description:
    'Monthly close, bookkeeping, reconciliations, KPI reporting, and quarterly tax planning for Washington and Oregon small businesses. From $800/mo.',
  path: '/services/accounting',
});

const deliverables = [
  'Monthly close and reconciliations',
  'Accounts receivable & payable management',
  'Bank and credit card reconciliations',
  'Monthly KPI pack and financial dashboard',
  'Quarterly tax planning sessions',
  'Owner pay optimization strategy',
  'QuickBooks Online management',
  'Monthly review call',
];

const processSteps = [
  {
    title: 'Onboard in 30 days',
    description:
      'We migrate your books to QuickBooks Online, clean up any historical issues, and set up your chart of accounts and workflows.',
  },
  {
    title: 'Monthly cadence',
    description:
      'Books closed by the 15th of each month. You receive a KPI dashboard and financial summary, followed by a review call.',
  },
  {
    title: 'Quarterly planning',
    description:
      'Every quarter we review your tax position, estimated payments, and owner compensation strategy to optimize your tax outcome.',
  },
];

const pricingFactors = [
  'Transaction volume (number of monthly transactions)',
  'Complexity (multiple entities, inventory, etc.)',
  'Payroll frequency and employee count',
  'Number of bank accounts and credit cards',
  'Industry-specific needs (job costing, etc.)',
];

const faqs: FAQ[] = [
  {
    question: 'What if I need catch-up or cleanup work first?',
    answer:
      'No problem. We offer a separate cleanup service to get you current within 30 days, then transition you to ongoing monthly accounting. Ask about our cleanup packages during your intro call.',
  },
  {
    question: 'Do you handle payroll?',
    answer:
      'Yes. We can manage payroll setup, processing, and tax filings. Payroll is included in our full-service packages or available as an add-on.',
  },
  {
    question: 'How do you deliver monthly reports?',
    answer:
      'You receive a custom KPI dashboard in QuickBooks Online, a PDF financial summary via email, and a 20-30 minute review call each month.',
  },
  {
    question: "Can I upgrade or downgrade my package if my business changes?",
    answer:
      'Absolutely. As your business grows or your needs change, we can adjust your service package. We review scope quarterly to ensure we're providing the right level of support.',
  },
];

export default function AccountingPage() {
  const serviceSchema = createServiceSchema({
    name: 'Monthly Accounting for PNW Founders',
    description:
      'Monthly close, bookkeeping, reconciliations, KPI reporting, and quarterly tax planning',
    provider: 'FoxGlove CPA',
    areaServed: ['Washington', 'Oregon'],
    priceRange: '$800-$2000',
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
            Monthly Accounting for PNW Founders
          </h1>
          <p className="text-lg text-muted-foreground">
            Clean books, clear financials, and proactive tax planning—every month.
          </p>
        </div>

        {/* Who it's for / Not for */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="rounded-lg border p-6">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <Check className="h-6 w-6 text-green-600" />
              Who it's for
            </h2>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Founders making $200K+ annual revenue</li>
              <li>• Businesses with employees or contractors</li>
              <li>• Companies needing quarterly tax planning</li>
              <li>• S-Corps or multi-entity structures</li>
              <li>• Those who want to focus on growth, not bookkeeping</li>
            </ul>
          </div>
          <div className="rounded-lg border p-6">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <X className="h-6 w-6 text-red-600" />
              Not for
            </h2>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Very early-stage (< $50K revenue)</li>
              <li>• Businesses with zero transactions</li>
              <li>• Those wanting DIY bookkeeping support only</li>
              <li>• Companies outside WA/OR</li>
            </ul>
          </div>
        </div>

        {/* Deliverables */}
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

        {/* Process */}
        <div className="mb-16 bg-muted/30 rounded-lg p-8 md:p-12">
          <h2 className="text-3xl font-bold tracking-tight mb-8">
            How It Works
          </h2>
          <div className="space-y-8">
            {processSteps.map((step, index) => (
              <div key={index}>
                <h3 className="text-xl font-semibold mb-2">
                  {index + 1}. {step.title}
                </h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Pricing */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold tracking-tight mb-4">
            Pricing
          </h2>
          <p className="text-3xl font-bold text-primary mb-6">From $800/mo</p>
          <p className="text-muted-foreground mb-4">
            Exact pricing depends on your business complexity. Factors include:
          </p>
          <ul className="space-y-2 text-muted-foreground">
            {pricingFactors.map((factor, index) => (
              <li key={index}>• {factor}</li>
            ))}
          </ul>
          <p className="mt-6">
            <Link href="/pricing" className="text-primary hover:underline">
              View all pricing →
            </Link>
          </p>
        </div>

        {/* Mini Case */}
        <div className="mb-16 border-l-4 border-primary pl-6">
          <div className="text-sm font-semibold text-primary mb-2">
            CASE STUDY
          </div>
          <p className="text-muted-foreground">
            <strong>Seattle agency owner</strong> came to us with 9 months of
            backlog and no visibility into profitability. We cleaned up the mess
            in 3 weeks, implemented project-based tracking, and now deliver
            monthly financials by the 10th. Owner now knows exactly which clients
            are profitable and makes data-driven decisions.
          </p>
        </div>
      </div>

      <FAQSection faqs={faqs} />
      <CTASection />
    </>
  );
}

