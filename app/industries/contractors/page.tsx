import type { Metadata } from 'next';
import Link from 'next/link';
import { Check } from 'lucide-react';
import { CTASection } from '@/components/cta-section';
import { FAQSection } from '@/components/faq-section';
import { generateMetadata as genMeta } from '@/lib/seo';
import type { FAQ } from '@/types';

export const metadata: Metadata = genMeta({
  title: 'Accounting for Contractors in the PNW',
  description:
    'Job costing, progress billing, WIP tracking, and tax planning for general contractors and specialty trades in Washington and Oregon.',
  path: '/industries/contractors',
});

const pains = [
  'Hard to track job profitability in real-time',
  'Progress billing and WIP (work in progress) gets messy',
  'Equipment costs and depreciation are confusing',
];

const howWeHelp = [
  {
    title: 'Job Costing Setup',
    description:
      'Track labor, materials, and overhead per job so you know which projects make money.',
  },
  {
    title: 'Progress Billing',
    description:
      'Clean AR aging and progress billing workflows to get paid faster.',
  },
  {
    title: 'Equipment Tracking',
    description:
      'Depreciation schedules, equipment tracking, and Section 179 planning.',
  },
  {
    title: 'Tax Planning',
    description:
      'Quarterly tax estimates, owner pay optimization, and S-Corp election timing.',
  },
  {
    title: 'Certified Payroll (if needed)',
    description:
      'Davis-Bacon and prevailing wage compliance for public works projects.',
  },
];

const faqs: FAQ[] = [
  {
    question: 'Do you handle prevailing wage / Davis-Bacon compliance?',
    answer:
      'Yes. We can manage certified payroll reporting and ensure compliance with prevailing wage requirements for public works projects.',
  },
  {
    question: 'Can you help with bonding and bank financing?',
    answer:
      'We provide clean, bond-ready financials and work directly with your surety or lender to provide the documentation they need.',
  },
  {
    question: 'What if I use a construction-specific software like Buildertrend?',
    answer:
      'We integrate with most construction PM tools. We can sync job cost data or use your software as a source of truth for project tracking.',
  },
];

export default function ContractorsPage() {
  return (
    <>
      <div className="container py-16 md:py-24">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6">
          Accounting for Contractors in the PNW
        </h1>

        {/* Top Pains */}
        <div className="mb-12 bg-muted/30 rounded-lg p-6">
          <h2 className="text-xl font-bold mb-4">Top Pains We See:</h2>
          <ul className="space-y-2">
            {pains.map((pain, index) => (
              <li key={index} className="text-muted-foreground">
                • {pain}
              </li>
            ))}
          </ul>
        </div>

        {/* How We Help */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-8">How We Help</h2>
          <div className="space-y-6">
            {howWeHelp.map((item, index) => (
              <div key={index} className="flex gap-3">
                <Check className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold mb-1">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mini Case */}
        <div className="mb-12 border-l-4 border-primary pl-6 bg-primary/5 p-6 rounded-r-lg">
          <div className="text-sm font-semibold text-primary mb-2">
            CASE STUDY
          </div>
          <p className="font-semibold mb-2">
            Seattle Electrical Contractor: $42K tax savings
          </p>
          <p className="text-muted-foreground">
            A 12-person electrical contracting firm came to us with zero job
            costing and inconsistent AR. We implemented job-level tracking in
            QuickBooks, cleaned up their WIP schedule, and elected S-Corp status.
            Result: Clear job profitability, faster collections, and $42K annual
            tax savings through optimized owner compensation.
          </p>
        </div>

        {/* Suggested Package */}
        <div className="mb-12 rounded-lg border p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Suggested Package</h2>
          <p className="text-muted-foreground mb-4">
            <strong>Monthly Accounting + Quarterly Tax Plan</strong>
          </p>
          <p className="text-lg text-primary font-semibold mb-4">
            Starting at $1,200/mo
          </p>
          <p className="text-sm text-muted-foreground mb-6">
            Includes job costing setup, monthly close, progress billing support,
            and quarterly tax planning sessions.
          </p>
          <Link
            href="/services/accounting"
            className="text-primary hover:underline font-medium"
          >
            Learn more about monthly accounting →
          </Link>
        </div>
      </div>

      <FAQSection faqs={faqs} />
      <CTASection
        title="Ready to get job-level visibility?"
        description="Book a 20-minute intro call to discuss your contracting business."
      />
    </>
  );
}

