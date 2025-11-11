import Link from 'next/link';
import { ArrowRight, Wrench, Heart, Coffee, Palette } from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

const industries = [
  {
    icon: Wrench,
    title: 'Contractors',
    description: 'Job costing, progress billing, and equipment tracking',
    href: '/industries/contractors',
  },
  {
    icon: Heart,
    title: 'Clinics & Healthcare',
    description: 'Revenue cycle management and compliance support',
    href: '/industries/clinics',
  },
  {
    icon: Coffee,
    title: 'Coffee & Food',
    description: 'Inventory management, labor costs, and multi-location support',
    href: '/industries/coffee',
  },
  {
    icon: Palette,
    title: 'Creative Agencies',
    description: 'Project-based accounting and client billing',
    href: '/industries/creative-agencies',
  },
];

export function IndustriesSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Industry Expertise
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            We understand the unique challenges of your industry
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {industries.map((industry, index) => (
            <Link key={index} href={industry.href} className="group">
              <Card className="h-full transition-all hover:shadow-lg hover:border-primary">
                <CardHeader>
                  <div className="mb-4 rounded-lg bg-primary/10 p-3 w-fit">
                    <industry.icon
                      className="h-6 w-6 text-primary"
                      aria-hidden="true"
                    />
                  </div>
                  <CardTitle className="text-xl">{industry.title}</CardTitle>
                  <CardDescription>{industry.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center text-sm font-medium text-primary group-hover:underline">
                    Learn more
                    <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

