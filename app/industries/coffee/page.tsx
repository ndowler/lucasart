import type { Metadata } from 'next';
import Link from 'next/link';
import { Check } from 'lucide-react';
import { CTASection } from '@/components/cta-section';
import { FAQSection } from '@/components/faq-section';
import { generateMetadata as genMeta } from '@/lib/seo';
import type { FAQ } from '@/types';

export const metadata: Metadata = genMeta({
  title: 'Accounting for Coffee & Food Businesses in the PNW',
  description:
    'Inventory management, labor cost tracking, and multi-location support for cafes, restaurants, and food businesses in Washington and Oregon.',
  path: '/industries/coffee',
});

const pains = [
  'Food cost percentage is all over the place',
  'Labor costs are eating into margins',
  'Multi-location tracking is a mess',
];

const howWeHelp = [
  {
    title: 'Food & Beverage Cost Tracking',
    description:
      'Track COGS (cost of goods sold) and food cost % to identify waste and optimize pricing.',
  },
  {
    title: 'Labor Cost Management',
    description:
      'Monitor labor % against revenue and identify scheduling inefficiencies.',
  },
  {
    title: 'Multi-Location P&Ls',
    description:
      'Separate financials for each location so you know which cafes are profitable.',
  },
  {
    title: 'Inventory Management',
    description:
      'Periodic inventory counts, variance tracking, and waste reduction strategies.',
  },
  {
    title: 'Tax Planning',
    description:
      'Optimize tip reporting, payroll taxes, and quarterly estimated payments.',
  },
];

const faqs: FAQ[] = [
  {
    question: 'Do you integrate with POS systems like Square or Toast?',
    answer:
      'Yes. We integrate with most major POS systems to pull sales data directly into QuickBooks for accurate revenue tracking.',
  },
  {
    question: 'How do I improve my food cost percentage?',
    answer:
      'We help you implement inventory tracking, identify waste, and analyze menu item profitability. Most clients see 3-5% improvement in food cost % within 6 months.',
  },
  {
    question: 'What if I have multiple locations with different performance?',
    answer:
      'We set up location-specific P&Ls so you can compare performance, identify underperformers, and make data-driven decisions about expansion or closure.',
  },
];

export default function CoffeePage() {
  return (
    <>
      <div className="container py-16 md:py-24">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6">
          Accounting for Coffee & Food Businesses in the PNW
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
            Seattle Coffee Chain: 6% margin improvement
          </p>
          <p className="text-muted-foreground">
            A 4-location coffee shop came to us with food cost at 38% and labor
            at 42%—margins were razor-thin. We implemented weekly food cost
            tracking, identified waste patterns, and optimized scheduling. Result:
            Food cost dropped to 32%, labor stabilized at 35%, and the owner
            finally had cash to open a 5th location.
          </p>
        </div>

        {/* Suggested Package */}
        <div className="mb-12 rounded-lg border p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Suggested Package</h2>
          <p className="text-muted-foreground mb-4">
            <strong>Monthly Accounting + Cost Control Reporting</strong>
          </p>
          <p className="text-lg text-primary font-semibold mb-4">
            Starting at $900/mo
          </p>
          <p className="text-sm text-muted-foreground mb-6">
            Includes food cost tracking, labor % monitoring, location-level P&Ls,
            and monthly review calls.
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
        title="Ready to improve your margins?"
        description="Book a 20-minute intro call to discuss your coffee or food business."
      />
    </>
  );
}

