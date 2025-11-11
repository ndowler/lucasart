import type { Metadata } from 'next';
import { HeroSection } from '@/components/home/hero-section';
import { TrustStrip } from '@/components/home/trust-strip';
import { ValuePillars } from '@/components/home/value-pillars';
import { PackagesSection } from '@/components/home/packages-section';
import { IndustriesSection } from '@/components/home/industries-section';
import { ProofSection } from '@/components/home/proof-section';
import { SecurityStrip } from '@/components/home/security-strip';
import { FAQSection } from '@/components/faq-section';
import { CTASection } from '@/components/cta-section';
import { createFAQSchema } from '@/lib/seo';

export const metadata: Metadata = {
  alternates: {
    canonical: '/',
  },
};

const homepageFAQs = [
  {
    question: 'What happens after I book a 20-minute intro call?',
    answer:
      "We'll learn about your business, current tax situation, and biggest challenges. Then we'll outline how we can help and what service package makes sense for your stage. No pressure, just clarity.",
  },
  {
    question: 'Do you work remotely or do I need to be in Tacoma?',
    answer:
      "We work 100% remotely with founders across Washington and Oregon. Everything happens via video calls, secure portal, and email. You'll never need to come to an office.",
  },
  {
    question: "What's included in your monthly accounting packages?",
    answer:
      'Monthly close, bookkeeping (AR/AP/reconciliations), financial KPI reports, quarterly tax planning, and owner pay strategy. We use QuickBooks Online and provide a monthly review call.',
  },
  {
    question: 'How is being veteran-owned relevant to accounting?',
    answer:
      'Military service instills discipline, attention to detail, and a service-first mindset. We treat your business finances with the same rigor and care we applied in uniform. Plus, we understand the value of clear communication and following through on commitments.',
  },
  {
    question: 'What if I have messy books or need to catch up?',
    answer:
      'No judgment. We offer cleanup and migration services to get you current within 30 days. Once clean, we can move you into ongoing monthly accounting to stay on track.',
  },
];

export default function HomePage() {
  const faqSchema = createFAQSchema(homepageFAQs);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <HeroSection />
      <TrustStrip />
      <ValuePillars />
      <PackagesSection />
      <IndustriesSection />
      <ProofSection />
      <SecurityStrip />
      <FAQSection faqs={homepageFAQs} />
      <CTASection />
    </>
  );
}

