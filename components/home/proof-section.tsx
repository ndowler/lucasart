import { Star } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const testimonials = [
  {
    name: 'Sarah M.',
    role: 'Coffee Shop Owner',
    quote:
      'FoxGlove helped us identify $18K in tax savings through S-Corp election. The quarterly planning sessions keep us ahead of surprises.',
    metric: '$18K saved',
  },
  {
    name: 'Mike T.',
    role: 'General Contractor',
    quote:
      'Finally have clean books and understand my job profitability. The veteran background gives me confidence they understand discipline and follow-through.',
    metric: 'Books cleaned in 3 weeks',
  },
  {
    name: 'Dr. Lisa K.',
    role: 'Clinic Owner',
    quote:
      'The owner pay strategy made a huge difference. I was taking draws inefficiently. Now my tax bill is predictable and manageable.',
    metric: '32% reduction in tax bill',
  },
];

export function ProofSection() {
  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            What Clients Say
          </h2>
          <div className="flex items-center justify-center gap-1 mt-4">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className="h-5 w-5 fill-primary text-primary"
                aria-hidden="true"
              />
            ))}
            <span className="ml-2 text-sm text-muted-foreground">
              5.0 from 24 reviews
            </span>
          </div>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card key={index}>
              <CardContent className="pt-6">
                <div className="mb-4 text-lg font-semibold text-primary">
                  {testimonial.metric}
                </div>
                <blockquote className="text-muted-foreground mb-4">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>
                <div className="text-sm">
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-muted-foreground">{testimonial.role}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

