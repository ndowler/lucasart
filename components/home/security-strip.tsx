import Link from 'next/link';
import { Shield, Globe, FileCheck, Lock } from 'lucide-react';

const features = [
  {
    icon: Globe,
    text: 'No offshore labor',
  },
  {
    icon: Shield,
    text: 'US-only data handling',
  },
  {
    icon: FileCheck,
    text: 'CCPA rights respected',
  },
  {
    icon: Lock,
    text: 'WISP maintained',
  },
];

export function SecurityStrip() {
  return (
    <section className="border-y bg-muted/30 py-12">
      <div className="container">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold">Your Data, Protected</h2>
        </div>
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4 mb-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center gap-2 text-center"
            >
              <feature.icon className="h-6 w-6 text-primary" aria-hidden="true" />
              <span className="text-sm font-medium">{feature.text}</span>
            </div>
          ))}
        </div>
        <div className="text-center">
          <Link
            href="/data-security"
            className="text-sm text-primary hover:underline"
          >
            Learn more about our security practices →
          </Link>
        </div>
      </div>
    </section>
  );
}

