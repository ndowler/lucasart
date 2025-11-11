import type { Metadata } from 'next';
import { Shield, Target, Users } from 'lucide-react';
import { CTASection } from '@/components/cta-section';
import { generateMetadata as genMeta, createOrganizationSchema } from '@/lib/seo';

export const metadata: Metadata = genMeta({
  title: 'About Us | Veteran-Owned CPA for PNW Founders',
  description:
    'FoxGlove CPA is a veteran-owned accounting firm serving small business founders across Washington and Oregon with proactive tax and cash-flow coaching.',
  path: '/about',
});

const values = [
  {
    icon: Shield,
    title: 'Clarity',
    description:
      'No jargon, no surprises. We explain your finances in plain English so you can make confident decisions.',
  },
  {
    icon: Target,
    title: 'Speed',
    description:
      'Fast turnaround on questions, reports, and tax planning. We respect your time and keep things moving.',
  },
  {
    icon: Users,
    title: 'Stewardship',
    description:
      'Your business finances are our responsibility. We treat your money with the same discipline we learned in service.',
  },
];

const credentials = [
  'Certified Public Accountant (CPA)',
  'QuickBooks Online ProAdvisor',
  'Veteran-Owned Small Business',
  'WISP (Written Information Security Policy) maintained',
  'Member: Washington Society of CPAs',
];

export default function AboutPage() {
  const orgSchema = createOrganizationSchema({
    name: 'FoxGlove CPA',
    description: 'Veteran-owned CPA serving PNW founders',
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://foxglove.cpa',
    logo: `${process.env.NEXT_PUBLIC_SITE_URL}/logo.png`,
    telephone: process.env.NEXT_PUBLIC_PHONE || '(xxx) xxx-xxxx',
    email: process.env.NEXT_PUBLIC_EMAIL || 'hello@foxglove.cpa',
    address: {
      city: 'Tacoma',
      state: 'WA',
    },
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
      />

      {/* Hero with Video Background */}
      <div className="relative min-h-[400px] flex items-center justify-center overflow-hidden">
        {/* Video Background */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/videos/about-background.mp4" type="video/mp4" />
        </video>

        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/50" />

        {/* Hero Content */}
        <div className="relative z-10 container py-16 md:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6 text-white">
              Built for Founders. Grounded in Service.
            </h1>
            <p className="text-lg text-white/90">
              We're a veteran-owned CPA firm serving small business founders across
              Washington and Oregon.
            </p>
          </div>
        </div>
      </div>

      <div className="container py-16 md:py-24">

        {/* Story */}
        <div className="mb-16 prose prose-lg max-w-none">
          <div className="bg-muted/30 rounded-lg p-8 md:p-12">
            <h2 className="text-2xl font-bold mb-4">Our Story</h2>
            <p>
              <strong>FoxGlove CPA</strong> was founded to fill a gap: too many
              founders are stuck with reactive accountants who only show up at tax
              time. Meanwhile, businesses are making critical financial decisions
              without clear visibility into cash flow, tax liability, or owner
              compensation strategy.
            </p>
            <p>
              After serving in the military, our founder saw an opportunity to
              bring the same discipline, attention to detail, and service-first
              mindset to small business accounting. The result? A firm that
              delivers proactive tax planning, clean financials, and fast answers
              when you need them.
            </p>
            <p>
              We focus exclusively on founders in the Pacific Northwest—especially
              those in contracting, healthcare, food/beverage, and creative
              services. We understand the unique challenges of building a business
              in WA and OR, from state tax nuances to industry-specific
              bookkeeping needs.
            </p>
          </div>
        </div>

        {/* Why PNW */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold tracking-tight mb-6">
            Why the Pacific Northwest?
          </h2>
          <p className="text-muted-foreground mb-4">
            We're based in Tacoma, WA and serve clients throughout Washington and
            Oregon. The PNW has a unique business landscape:
          </p>
          <ul className="space-y-2 text-muted-foreground">
            <li>
              • <strong>Washington</strong>: No state income tax, but complex
              B&amp;O tax and sales tax rules
            </li>
            <li>
              • <strong>Oregon</strong>: No sales tax, but state income tax
              planning is critical
            </li>
            <li>
              • <strong>Regional industries</strong>: We understand construction,
              healthcare, coffee/food, and creative agencies
            </li>
            <li>
              • <strong>Local connections</strong>: We know PNW-specific lenders,
              insurance brokers, and business resources
            </li>
          </ul>
        </div>

        {/* Values */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold tracking-tight mb-12 text-center">
            Our Values
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="mx-auto mb-4 w-fit rounded-full bg-primary/10 p-4">
                  <value.icon className="h-8 w-8 text-primary" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Credentials */}
        <div className="mb-16 bg-muted/30 rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-6">Credentials & Associations</h2>
          <div className="grid md:grid-cols-2 gap-3">
            {credentials.map((credential, index) => (
              <div key={index} className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-primary" aria-hidden="true" />
                <span>{credential}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">
            Want to work with a veteran-owned CPA?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We'd love to hear about your business and see if we're a good fit.
          </p>
        </div>
      </div>

      <CTASection />
    </>
  );
}

