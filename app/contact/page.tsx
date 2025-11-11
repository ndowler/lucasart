import type { Metadata } from 'next';
import Link from 'next/link';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { ContactForm } from '@/components/forms/contact-form';
import { generateMetadata as genMeta, createLocalBusinessSchema } from '@/lib/seo';

export const metadata: Metadata = genMeta({
  title: 'Contact Us | FoxGlove CPA',
  description:
    'Get in touch with FoxGlove CPA. Serving founders across Washington and Oregon. Book a call or send us a message.',
  path: '/contact',
});

export default function ContactPage() {
  const businessSchema = createLocalBusinessSchema({
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }}
      />

      <div className="container py-16 md:py-24">
        {/* Hero */}
        <div className="mx-auto max-w-3xl text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6">
            Get in Touch
          </h1>
          <p className="text-lg text-muted-foreground">
            We'd love to hear about your business and see how we can help.
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
            <ContactForm />
          </div>

          {/* Contact Info */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
            
            {/* NAP */}
            <div className="space-y-4 mb-8">
              <div className="flex gap-4">
                <MapPin className="h-6 w-6 text-primary shrink-0" />
                <div>
                  <div className="font-semibold">Service Area</div>
                  <div className="text-muted-foreground">
                    Serving founders across Washington & Oregon
                  </div>
                  <div className="text-sm text-muted-foreground mt-1">
                    Based in Tacoma, WA
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                <Phone className="h-6 w-6 text-primary shrink-0" />
                <div>
                  <div className="font-semibold">Phone</div>
                  <a
                    href={`tel:${(process.env.NEXT_PUBLIC_PHONE || '').replace(/\D/g, '')}`}
                    className="text-primary hover:underline"
                  >
                    {process.env.NEXT_PUBLIC_PHONE || '(xxx) xxx-xxxx'}
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <Mail className="h-6 w-6 text-primary shrink-0" />
                <div>
                  <div className="font-semibold">Email</div>
                  <a
                    href={`mailto:${process.env.NEXT_PUBLIC_EMAIL || 'hello@foxglove.cpa'}`}
                    className="text-primary hover:underline"
                  >
                    {process.env.NEXT_PUBLIC_EMAIL || 'hello@foxglove.cpa'}
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <Clock className="h-6 w-6 text-primary shrink-0" />
                <div>
                  <div className="font-semibold">Response Time</div>
                  <div className="text-muted-foreground">
                    Within 1 business day
                  </div>
                </div>
              </div>
            </div>

            {/* Map or Service Area */}
            <div className="rounded-lg border p-6 bg-muted/30">
              <h3 className="font-semibold mb-2">100% Remote Service</h3>
              <p className="text-sm text-muted-foreground mb-4">
                We work with clients throughout Washington and Oregon via video
                calls, secure portal, and email. No office visits required.
              </p>
              <p className="text-sm text-muted-foreground">
                Based in Tacoma, WA, but serving founders from Seattle to Portland
                and everywhere in between.
              </p>
            </div>

            {/* Alternative CTA */}
            <div className="mt-8 rounded-lg border-2 border-primary p-6 text-center">
              <h3 className="font-semibold mb-2">Prefer to schedule a call directly?</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Book a 20-minute intro call and we'll discuss your needs.
              </p>
              <Link
                href="/schedule"
                className="text-primary hover:underline font-medium"
              >
                View available times →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

