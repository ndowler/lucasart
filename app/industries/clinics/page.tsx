import type { Metadata } from 'next';
import Link from 'next/link';
import { Check } from 'lucide-react';
import { CTASection } from '@/components/cta-section';
import { FAQSection } from '@/components/faq-section';
import { generateMetadata as genMeta } from '@/lib/seo';
import type { FAQ } from '@/types';

export const metadata: Metadata = genMeta({
  title: 'Accounting for Clinics & Healthcare in the PNW',
  description:
    'Revenue cycle management, insurance billing support, and compliance tracking for small medical and dental practices in Washington and Oregon.',
  path: '/industries/clinics',
});

const pains = [
  'Insurance reimbursements make cash flow unpredictable',
  'Revenue cycle and AR aging are hard to manage',
  'Compliance and audit readiness feel overwhelming',
];

const howWeHelp = [
  {
    title: 'Revenue Cycle Support',
    description:
      'Track claims, reimbursements, and AR aging to improve cash flow predictability.',
  },
  {
    title: 'Insurance Billing Reconciliation',
    description:
      'Reconcile insurance payments, identify denied claims, and track adjustments.',
  },
  {
    title: 'Compliance Tracking',
    description:
      'Maintain audit-ready records and ensure proper documentation for regulatory compliance.',
  },
  {
    title: 'Physician / Provider Comp',
    description:
      'Optimize owner/provider compensation for tax efficiency (W-2 vs distributions).',
  },
  {
    title: 'Multi-Location Support',
    description:
      'Manage financials across multiple clinic locations with location-level P&Ls.',
  },
];

const faqs: FAQ[] = [
  {
    question: 'Do you handle medical billing or just the accounting?',
    answer:
      'We handle the accounting side—reconciling insurance payments, tracking AR, and financial reporting. We work alongside your medical billing team or software (e.g., Kareo, Athena, DrChrono).',
  },
  {
    question: 'Can you help with HIPAA-compliant financial processes?',
    answer:
      'Yes. We follow HIPAA-compliant practices for handling any PHI-adjacent financial data and can provide documentation of our security protocols.',
  },
  {
    question: 'What if we have multiple providers or partners?',
    answer:
      'We can set up provider-level P&Ls, track compensation, and handle K-1 distributions for partnership structures.',
  },
];

export default function ClinicsPage() {
  return (
    <>
      <div className="container py-16 md:py-24">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6">
          Accounting for Clinics & Healthcare in the PNW
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
            Portland Dental Practice: 45-day AR reduction
          </p>
          <p className="text-muted-foreground">
            A 3-provider dental practice had 90+ day AR at 35% of total. We
            implemented weekly AR aging reviews, tightened up insurance follow-up
            workflows, and provided monthly cash flow forecasts. Result: AR over
            90 days dropped to 12%, and the practice had clear visibility into
            cash flow for the first time.
          </p>
        </div>

        {/* Suggested Package */}
        <div className="mb-12 rounded-lg border p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Suggested Package</h2>
          <p className="text-muted-foreground mb-4">
            <strong>Monthly Accounting + Revenue Cycle Reporting</strong>
          </p>
          <p className="text-lg text-primary font-semibold mb-4">
            Starting at $1,000/mo
          </p>
          <p className="text-sm text-muted-foreground mb-6">
            Includes revenue cycle tracking, insurance reconciliation, monthly
            close, and compliance-ready reporting.
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
        title="Ready to improve your revenue cycle?"
        description="Book a 20-minute intro call to discuss your clinic's financial needs."
      />
    </>
  );
}

