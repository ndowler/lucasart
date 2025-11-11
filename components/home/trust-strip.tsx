import { Shield, Award, Lock } from 'lucide-react';

const badges = [
  {
    icon: Shield,
    text: 'Veteran-Owned',
  },
  {
    icon: Award,
    text: 'QBO ProAdvisor',
  },
  {
    icon: Lock,
    text: 'US-only data handling',
  },
  {
    icon: Shield,
    text: 'WISP in place',
  },
];

export function TrustStrip() {
  return (
    <section className="border-y bg-muted/30 py-8">
      <div className="container">
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {badges.map((badge, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center gap-2 text-center"
            >
              <badge.icon className="h-6 w-6 text-primary" aria-hidden="true" />
              <span className="text-sm font-medium">{badge.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

