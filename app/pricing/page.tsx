import type { Metadata } from 'next';
import Link from 'next/link';
import { Check } from 'lucide-react';
import { CTASection } from '@/components/cta-section';
import { FAQSection } from '@/components/faq-section';
import { generateMetadata as genMeta } from '@/lib/seo';
import type { FAQ } from '@/types';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export const metadata: Metadata = genMeta({
  title: 'Transparent Pricing | FoxGlove CPA',
  description:
    'Clear, upfront pricing for accounting, tax prep, and S-Corp analysis. No surprises. From $800/mo for monthly accounting.',
  path: '/pricing',
});

const services = [
  {
    name: 'Monthly Accounting',
    starting: 'From $800/mo',
    description: 'Full-service bookkeeping and quarterly tax planning',
    includes: [
      'Monthly close & reconciliations',
      'AR/AP management',
      'Financial KPI dashboard',
      'Quarterly tax planning sessions',
      'Owner pay optimization',
      'Monthly review call',
    ],
    link: '/services/accounting',
  },
  {
    name: 'S-Corp Analysis',
    starting: 'From $500',
    description: 'Should you elect S-Corp? Get a data-driven answer',
    includes: [
      'Tax structure analysis',
      'S-Corp feasibility study',
      'Owner comp recommendations',
      'State-specific modeling (WA/OR)',
      'Break-even calculations',
      'Implementation roadmap',
    ],
    link: '/services/s-corp-analysis',
    note: 'Credited to monthly if you sign up within 30 days',
  },
  {
    name: 'Tax Preparation',
    starting: '1040 from $1,200 • Business from $1,600',
    description: 'Strategic tax prep for individuals and businesses',
    includes: [
      'Personal (1040) or Business (1120S, 1065)',
      'Federal and state returns',
      'K-1 preparation (if applicable)',
      'Strategic tax review',
      'Extension filing (if needed)',
      'Prior year amendments available',
    ],
    link: '/services/tax-prep',
  },
];

const pricingFactors = [
  {
    factor: 'Transaction Volume',
    description: 'Monthly transaction count affects time and complexity',
  },
  {
    factor: 'Entity Structure',
    description: 'S-Corp, multi-entity, or partnerships require more work',
  },
  {
    factor: 'Payroll',
    description: 'Frequency and employee count impact cost',
  },
  {
    factor: 'Industry Needs',
    description: 'Job costing, inventory, or project tracking add complexity',
  },
  {
    factor: 'Historical Cleanup',
    description: 'Catching up backlogged books is quoted separately',
  },
];

const faqs: FAQ[] = [
  {
    question: 'Are these prices really your minimums?',
    answer:
      "Yes. We publish our starting prices so you know what to expect. Your exact price depends on complexity, but we'll never surprise you with hidden fees.",
  },
  {
    question: 'What if my needs change mid-year?',
    answer:
      'We review your scope quarterly. If your business grows or shrinks, we adjust the service level and pricing accordingly. No long-term lock-in.',
  },
  {
    question: 'Do you offer discounts for annual prepayment?',
    answer:
      'Yes—pay annually and receive 10% off. We also offer discounts for multi-year clients and referrals.',
  },
  {
    question: 'Is there a setup fee?',
    answer:
      "For monthly accounting, onboarding and setup are included in your first month. For cleanup or catch-up work, that's quoted separately as a one-time project.",
  },
];

export default function PricingPage() {
  return (
    <>
      <div className="container py-16 md:py-24">
        {/* Hero */}
        <div className="mx-auto max-w-3xl text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6">
            Transparent Pricing
          </h1>
          <p className="text-lg text-muted-foreground">
            Transparent minimums. We tailor scope to your stage.
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid gap-8 lg:grid-cols-3 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className="rounded-lg border p-8 flex flex-col h-full"
            >
              <h2 className="text-2xl font-bold mb-2">{service.name}</h2>
              <p className="text-muted-foreground mb-4">{service.description}</p>
              <p className="text-2xl font-bold text-primary mb-6">
                {service.starting}
              </p>
              {service.note && (
                <p className="text-sm text-muted-foreground mb-4">
                  {service.note}
                </p>
              )}
              <div className="flex-1">
                <h3 className="font-semibold mb-3 text-sm">INCLUDES:</h3>
                <ul className="space-y-2">
                  {service.includes.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <Link
                href={service.link}
                className="mt-6 text-primary hover:underline font-medium text-sm"
              >
                Learn more →
              </Link>
            </div>
          ))}
        </div>

        {/* Compare Plans */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold tracking-tight mb-8">
            Compare Services
          </h2>
          <Accordion type="single" collapsible>
            <AccordionItem value="monthly">
              <AccordionTrigger>
                <span className="text-lg font-semibold">
                  What&apos;s included vs. not included in Monthly Accounting?
                </span>
              </AccordionTrigger>
              <AccordionContent>
                <div className="grid md:grid-cols-2 gap-6 py-4">
                  <div>
                    <h4 className="font-semibold mb-2">✅ Included</h4>
                    <ul className="text-sm space-y-1 text-muted-foreground">
                      <li>• Monthly bookkeeping</li>
                      <li>• Bank reconciliations</li>
                      <li>• Financial reporting</li>
                      <li>• Quarterly tax planning</li>
                      <li>• Monthly review calls</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">❌ Not Included</h4>
                    <ul className="text-sm space-y-1 text-muted-foreground">
                      <li>• Tax return preparation (separate)</li>
                      <li>• Audit or IRS representation</li>
                      <li>• CFO-level strategy consulting</li>
                      <li>• Historical cleanup (quoted separately)</li>
                    </ul>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="tax">
              <AccordionTrigger>
                <span className="text-lg font-semibold">
                  Tax Prep: What affects my price?
                </span>
              </AccordionTrigger>
              <AccordionContent>
                <div className="py-4 text-sm text-muted-foreground space-y-2">
                  <p>
                    Base pricing starts at $1,200 (1040) or $1,600 (business
                    returns). Price increases based on:
                  </p>
                  <ul className="space-y-1">
                    <li>• Number of states (multi-state filings)</li>
                    <li>• Rental properties or investment income</li>
                    <li>• Multiple business entities</li>
                    <li>• Complexity of deductions or credits</li>
                    <li>• Late filing or amendments</li>
                  </ul>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        {/* How We Price */}
        <div className="mb-16 bg-muted/30 rounded-lg p-8 md:p-12">
          <h2 className="text-3xl font-bold tracking-tight mb-8">
            How We Price Monthly Accounting
          </h2>
          <p className="text-muted-foreground mb-6">
            Your monthly accounting fee is based on these factors:
          </p>
          <div className="space-y-4">
            {pricingFactors.map((item, index) => (
              <div key={index} className="flex gap-4">
                <div className="font-semibold shrink-0 w-40">{item.factor}</div>
                <div className="text-muted-foreground">{item.description}</div>
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm text-muted-foreground">
            We provide a fixed monthly quote after your 20-minute intro call. No
            surprises, no hourly billing.
          </p>
        </div>
      </div>

      <FAQSection faqs={faqs} />
      <CTASection
        title="Ready to get a custom quote?"
        description="Book a 20-minute intro call to discuss your needs and get transparent pricing."
      />
    </>
  );
}

