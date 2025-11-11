import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Wrench, Heart, Coffee, Palette } from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { generateMetadata as genMeta } from '@/lib/seo';

export const metadata: Metadata = genMeta({
  title: 'Industry-Specific Accounting | FoxGlove CPA',
  description:
    'Accounting services tailored for contractors, clinics, coffee shops, and creative agencies in the Pacific Northwest.',
  path: '/industries',
});

const industries = [
  {
    icon: Wrench,
    title: 'Contractors',
    description:
      'Job costing, progress billing, WIP tracking, and equipment management for general contractors and specialty trades.',
    href: '/industries/contractors',
    challenges: ['Job profitability', 'Progress billing', 'Equipment tracking'],
  },
  {
    icon: Heart,
    title: 'Clinics & Healthcare',
    description:
      'Revenue cycle management, insurance billing support, and compliance tracking for small medical and dental practices.',
    href: '/industries/clinics',
    challenges: ['Insurance billing', 'Revenue cycle', 'Compliance'],
  },
  {
    icon: Coffee,
    title: 'Coffee & Food',
    description:
      'Inventory management, labor cost tracking, and multi-location support for cafes, restaurants, and food businesses.',
    href: '/industries/coffee',
    challenges: ['Food cost %', 'Labor management', 'Multi-location'],
  },
  {
    icon: Palette,
    title: 'Creative Agencies',
    description:
      'Project-based accounting, client billing, and profitability tracking for design, marketing, and creative firms.',
    href: '/industries/creative-agencies',
    challenges: ['Project profitability', 'Client billing', 'Retainer tracking'],
  },
];

export default function IndustriesPage() {
  return (
    <div className="container py-16 md:py-24">
      {/* Hero */}
      <div className="mx-auto max-w-3xl text-center mb-16">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6">
          Industry-Specific Expertise
        </h1>
        <p className="text-lg text-muted-foreground">
          We understand the unique accounting challenges of your industry and
          provide tailored solutions for PNW founders.
        </p>
      </div>

      {/* Industry Cards */}
      <div className="grid gap-8 md:grid-cols-2">
        {industries.map((industry, index) => (
          <Link key={index} href={industry.href} className="group">
            <Card className="h-full transition-all hover:shadow-lg hover:border-primary">
              <CardHeader>
                <div className="mb-4 rounded-lg bg-primary/10 p-3 w-fit">
                  <industry.icon
                    className="h-8 w-8 text-primary"
                    aria-hidden="true"
                  />
                </div>
                <CardTitle className="text-2xl">{industry.title}</CardTitle>
                <CardDescription className="text-base">
                  {industry.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <h3 className="text-sm font-semibold mb-2">Common Challenges:</h3>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    {industry.challenges.map((challenge, idx) => (
                      <li key={idx}>• {challenge}</li>
                    ))}
                  </ul>
                </div>
                <div className="flex items-center text-sm font-medium text-primary group-hover:underline">
                  Learn more
                  <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>

      {/* Bottom CTA */}
      <div className="mt-16 text-center">
        <h2 className="text-2xl font-bold mb-4">
          Don't see your industry listed?
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
          We work with founders across many industries. If you have unique
          accounting needs, we'd love to discuss how we can help.
        </p>
        <Link
          href="/contact"
          className="text-primary hover:underline font-medium"
        >
          Get in touch →
        </Link>
      </div>
    </div>
  );
}

