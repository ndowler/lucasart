import { z } from 'zod';

/**
 * Contact Form Validation Schema
 */
export const contactFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  businessName: z
    .string()
    .min(2, 'Business name must be at least 2 characters'),
  message: z
    .string()
    .min(10, 'Please describe your situation (at least 10 characters)'),
  honeypot: z.string().max(0, 'Bot detected'),
  timestamp: z.number().optional(),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;

/**
 * Newsletter Form Validation Schema
 */
export const newsletterFormSchema = z.object({
  email: z.string().email('Please enter a valid email address'),
  honeypot: z.string().max(0, 'Bot detected'),
});

export type NewsletterFormValues = z.infer<typeof newsletterFormSchema>;

/**
 * S-Corp Calculator Validation Schema
 */
export const sCorpCalculatorSchema = z.object({
  revenue: z.number().min(0, 'Revenue must be positive'),
  currentStructure: z.enum(['sole-prop', 'llc', 'partnership', 'c-corp']),
  state: z.enum(['WA', 'OR']),
  ownerSalary: z.number().min(0, 'Salary must be positive').optional(),
});

export type SCorpCalculatorValues = z.infer<typeof sCorpCalculatorSchema>;

