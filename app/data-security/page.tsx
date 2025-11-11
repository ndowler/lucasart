import type { Metadata } from 'next';
import Link from 'next/link';
import { Shield, Lock, FileCheck, Globe, Eye, UserCheck } from 'lucide-react';
import { generateMetadata as genMeta } from '@/lib/seo';

export const metadata: Metadata = genMeta({
  title: 'Data Security & Privacy | FoxGlove CPA',
  description:
    'Learn how we protect your data. WISP maintained, US-only data handling, no offshore labor, SOC-2-aligned vendors.',
  path: '/data-security',
});

const securityFeatures = [
  {
    icon: Shield,
    title: 'WISP Maintained',
    description:
      'We maintain a Written Information Security Policy (WISP) that outlines our data protection procedures and protocols.',
  },
  {
    icon: Globe,
    title: 'US-Only Data Handling',
    description:
      'Your financial data never leaves the United States. All team members and subcontractors are US-based.',
  },
  {
    icon: UserCheck,
    title: 'No Offshore Labor',
    description:
      'We do not outsource any bookkeeping, tax prep, or data entry to offshore teams. Your data stays domestic.',
  },
  {
    icon: Lock,
    title: 'SOC-2 Aligned Vendors',
    description:
      'We only use vendors (QuickBooks, TaxDome, etc.) that meet or exceed SOC-2 security standards.',
  },
  {
    icon: FileCheck,
    title: 'Access Controls',
    description:
      'Role-based access controls ensure team members only see the data they need for their role.',
  },
  {
    icon: Eye,
    title: 'Client Rights (CCPA-Style)',
    description:
      'You have the right to access, correct, or delete your data. We respect your privacy and comply with California-style data rights.',
  },
];

const dataRetention = [
  'Financial records: 7 years (IRS requirement)',
  'Tax returns: Permanent',
  'Communication logs: 3 years',
  'Bank statements: 7 years',
  'Invoices and receipts: 7 years',
];

export default function DataSecurityPage() {
  return (
    <div className="container py-16 md:py-24">
      {/* Hero */}
      <div className="mx-auto max-w-3xl text-center mb-16">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6">
          Your Data, Protected
        </h1>
        <p className="text-lg text-muted-foreground">
          We take data security seriously. Here is how we protect your financial
          information.
        </p>
      </div>

      {/* Security Features */}
      <div className="grid md:grid-cols-2 gap-8 mb-16">
        {securityFeatures.map((feature, index) => (
          <div key={index} className="flex gap-4">
            <div className="shrink-0">
              <div className="rounded-lg bg-primary/10 p-3">
                <feature.icon className="h-6 w-6 text-primary" aria-hidden="true" />
              </div>
            </div>
            <div>
              <h2 className="text-xl font-semibold mb-2">{feature.title}</h2>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Data Retention */}
      <div className="mb-16 bg-muted/30 rounded-lg p-8">
        <h2 className="text-2xl font-bold mb-6">Data Retention Policy</h2>
        <p className="text-muted-foreground mb-4">
          We retain your data according to IRS requirements and industry best
          practices:
        </p>
        <ul className="space-y-2">
          {dataRetention.map((item, index) => (
            <li key={index} className="flex items-start gap-2">
              <FileCheck className="h-5 w-5 text-primary shrink-0 mt-0.5" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p className="mt-6 text-sm text-muted-foreground">
          You may request deletion of your data at any time, subject to legal
          retention requirements.
        </p>
      </div>

      {/* Vendor Security */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-6">Our Trusted Vendors</h2>
        <p className="text-muted-foreground mb-4">
          We carefully vet all technology vendors to ensure they meet our security
          standards:
        </p>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="rounded-lg border p-4">
            <h3 className="font-semibold mb-2">QuickBooks Online</h3>
            <p className="text-sm text-muted-foreground">
              SOC-2 Type II certified; GDPR and CCPA compliant
            </p>
          </div>
          <div className="rounded-lg border p-4">
            <h3 className="font-semibold mb-2">TaxDome / Canopy</h3>
            <p className="text-sm text-muted-foreground">
              Secure client portal with bank-level encryption
            </p>
          </div>
          <div className="rounded-lg border p-4">
            <h3 className="font-semibold mb-2">Email</h3>
            <p className="text-sm text-muted-foreground">
              TLS encryption for all email communication
            </p>
          </div>
          <div className="rounded-lg border p-4">
            <h3 className="font-semibold mb-2">Document Storage</h3>
            <p className="text-sm text-muted-foreground">
              Encrypted at rest and in transit (AES-256)
            </p>
          </div>
        </div>
      </div>

      {/* Questions Section */}
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-4">Questions About Our Security?</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
          We are happy to discuss our security practices in detail. If you have
          specific compliance or security requirements, let us know.
        </p>
        <Link
          href="/contact"
          className="text-primary hover:underline font-medium"
        >
          Contact us with security questions →
        </Link>
      </div>
    </div>
  );
}

