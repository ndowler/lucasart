import type { Metadata } from 'next';
import { Shield, Cloud, Lock, Zap } from 'lucide-react';
import { generateMetadata as genMeta } from '@/lib/seo';

export const metadata: Metadata = genMeta({
  title: 'Our Technology Stack | FoxGlove CPA',
  description: 'Learn about the secure, modern tools we use to deliver fast, reliable accounting services.',
  path: '/technology',
});

const tools = [
  {
    category: 'Accounting & Bookkeeping',
    tools: [
      {
        name: 'QuickBooks Online',
        description: 'Industry-leading accounting platform',
        features: ['Real-time access', 'SOC-2 certified', 'Bank integration'],
      },
    ],
  },
  {
    category: 'Client Portal',
    tools: [
      {
        name: 'TaxDome / Canopy',
        description: 'Secure document sharing and communication',
        features: ['256-bit encryption', 'E-signature', 'Mobile app'],
      },
    ],
  },
  {
    category: 'Payroll',
    tools: [
      {
        name: 'Gusto / QuickBooks Payroll',
        description: 'Automated payroll processing',
        features: ['Tax filing', 'Direct deposit', 'Compliance'],
      },
    ],
  },
  {
    category: 'Communication',
    tools: [
      {
        name: 'Secure Email (TLS)',
        description: 'Encrypted email communication',
        features: ['TLS 1.3', 'Spam filtering', 'Secure attachments'],
      },
    ],
  },
];

const securityPrinciples = [
  {
    icon: Shield,
    title: 'US-Only Data',
    description: 'All data stored and processed exclusively in US data centers',
  },
  {
    icon: Cloud,
    title: 'Cloud-Based',
    description: 'Automatic backups, redundancy, and disaster recovery',
  },
  {
    icon: Lock,
    title: 'Encrypted',
    description: 'AES-256 encryption at rest, TLS 1.3 in transit',
  },
  {
    icon: Zap,
    title: 'Real-Time Access',
    description: 'Access your financials anytime, anywhere, on any device',
  },
];

export default function TechnologyPage() {
  return (
    <div className="container py-16 md:py-24">
      {/* Hero */}
      <div className="mx-auto max-w-3xl text-center mb-16">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6">
          Modern Tools, Secure Infrastructure
        </h1>
        <p className="text-lg text-muted-foreground">
          We use industry-leading, cloud-based tools to deliver fast, reliable,
          and secure accounting services.
        </p>
      </div>

      {/* Why This Matters */}
      <div className="mb-16 bg-muted/30 rounded-lg p-8 md:p-12">
        <h2 className="text-2xl font-bold mb-4">Why This Matters</h2>
        <p className="text-muted-foreground mb-4">
          The right technology stack makes a huge difference:
        </p>
        <ul className="space-y-2 text-muted-foreground">
          <li>• <strong>Speed:</strong> Real-time access to your financials, not waiting weeks for reports</li>
          <li>• <strong>Security:</strong> Bank-level encryption and SOC-2 certified vendors</li>
          <li>• <strong>Accuracy:</strong> Automated bank feeds reduce manual entry errors</li>
          <li>• <strong>Collaboration:</strong> Easy document sharing and communication</li>
          <li>• <strong>Scalability:</strong> Tools grow with your business</li>
        </ul>
      </div>

      {/* Security Principles */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Security Principles</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {securityPrinciples.map((principle, index) => (
            <div key={index} className="text-center">
              <div className="mx-auto mb-4 w-fit rounded-full bg-primary/10 p-4">
                <principle.icon className="h-8 w-8 text-primary" aria-hidden="true" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{principle.title}</h3>
              <p className="text-sm text-muted-foreground">{principle.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Tools Stack */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8">Our Technology Stack</h2>
        <div className="space-y-8">
          {tools.map((category, index) => (
            <div key={index}>
              <h3 className="text-xl font-bold mb-4">{category.category}</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {category.tools.map((tool, toolIndex) => (
                  <div key={toolIndex} className="rounded-lg border p-6">
                    <h4 className="text-lg font-semibold mb-2">{tool.name}</h4>
                    <p className="text-muted-foreground mb-4">{tool.description}</p>
                    <ul className="space-y-1 text-sm">
                      {tool.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center gap-2">
                          <Shield className="h-4 w-4 text-primary" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-4">
          Questions about our technology?
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          We are happy to discuss our tools, security practices, and integrations
          in detail.
        </p>
      </div>
    </div>
  );
}

