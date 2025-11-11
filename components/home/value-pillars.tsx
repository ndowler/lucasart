import { Calendar, DollarSign, FileText } from 'lucide-react';

const pillars = [
  {
    icon: Calendar,
    title: 'Quarterly tax plans',
    description:
      'Proactive tax planning every quarter to minimize surprises and maximize savings.',
  },
  {
    icon: DollarSign,
    title: 'Owner pay strategy',
    description:
      'W-2 vs draws: optimize your compensation to reduce tax burden and improve cash flow.',
  },
  {
    icon: FileText,
    title: 'Clean books, fast',
    description:
      'Monthly close, reconciliations, and clear financial reports delivered on time.',
  },
];

export function ValuePillars() {
  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <div className="grid gap-8 md:grid-cols-3">
          {pillars.map((pillar, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="mb-4 rounded-full bg-primary/10 p-4">
                <pillar.icon className="h-8 w-8 text-primary" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{pillar.title}</h3>
              <p className="text-muted-foreground">{pillar.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

