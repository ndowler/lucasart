import type { Metadata } from 'next';
import Link from 'next/link';
import { Check } from 'lucide-react';
import { CTASection } from '@/components/cta-section';
import { FAQSection } from '@/components/faq-section';
import { generateMetadata as genMeta } from '@/lib/seo';
import type { FAQ } from '@/types';

export const metadata: Metadata = genMeta({
  title: 'Accounting for Creative Agencies in the PNW',
  description:
    'Project-based accounting, client billing, and profitability tracking for design, marketing, and creative firms in Washington and Oregon.',
  path: '/industries/creative-agencies',
});

const pains = [
  'Hard to track project profitability in real-time',
  'Retainer vs. project billing gets confusing',
  'Cash flow is unpredictable with lumpy client payments',
];

const howWeHelp = [
  {
    title: 'Project-Based Accounting',
    description:
      'Track labor, expenses, and profitability per project or client so you know which work makes money.',
  },
  {
    title: 'Client Billing & AR Management',
    description:
      'Clean invoicing workflows, retainer tracking, and AR aging to get paid faster.',
  },
  {
    title: 'Profitability by Service Line',
    description:
      'Understand which services (design, dev, strategy, etc.) are most profitable.',
  },
  {
    title: 'Contractor vs. Employee Planning',
    description:
      'Tax-efficient planning for 1099 contractors, W-2 employees, and owner compensation.',
  },
  {
    title: 'Cash Flow Forecasting',
    description:
      'Predict cash needs based on project pipeline and client payment terms.',
  },
];

const faqs: FAQ[] = [
  {
    question: 'Do you integrate with project management tools like Asana or ClickUp?',
    answer:
      'We can sync time tracking and project data from most PM tools into QuickBooks for accurate job costing. Common integrations include Harvest, Toggl, and Monday.',
  },
  {
    question: 'How do I know which clients are actually profitable?',
    answer:
      'We set up client-level P&Ls that track revenue, direct costs (labor, contractors, software), and overhead allocation. You'll see margin by client every month.',
  },
  {
    question: 'What if I have a mix of retainer and project clients?',
    answer:
      'We track both separately. Retainers get amortized over the contract period, and project revenue is recognized as milestones are hit. Clean AR and deferred revenue tracking.',
  },
];

export default function CreativeAgenciesPage() {
  return (
    <>
      <div className="container py-16 md:py-24">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6">
          Accounting for Creative Agencies in the PNW
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
            Portland Design Agency: 15% margin discovery
          </p>
          <p className="text-muted-foreground">
            A 10-person agency thought they were doing great, but had no
            project-level visibility. We implemented client and project tracking
            in QuickBooks. Result: Discovered one "anchor client" was actually
            losing money (15% negative margin), while smaller projects were highly
            profitable. They adjusted pricing and focus, improving overall margins
            by 12 points.
          </p>
        </div>

        {/* Suggested Package */}
        <div className="mb-12 rounded-lg border p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Suggested Package</h2>
          <p className="text-muted-foreground mb-4">
            <strong>Monthly Accounting + Project Profitability Tracking</strong>
          </p>
          <p className="text-lg text-primary font-semibold mb-4">
            Starting at $1,100/mo
          </p>
          <p className="text-sm text-muted-foreground mb-6">
            Includes project-based accounting, client profitability reports,
            billing support, and monthly review calls.
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
        title="Ready to see which projects are profitable?"
        description="Book a 20-minute intro call to discuss your agency's financial needs."
      />
    </>
  );
}

