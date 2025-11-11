import type { FAQ } from '@/types';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

interface FAQSectionProps {
  faqs: FAQ[];
  title?: string;
}

export function FAQSection({
  faqs,
  title = 'Frequently Asked Questions',
}: FAQSectionProps) {
  return (
    <section className="py-16 md:py-24">
      <div className="container max-w-3xl">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-8">
          {title}
        </h2>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

