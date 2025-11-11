'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { contactFormSchema, type ContactFormValues } from '@/lib/schemas';
import { trackContactFormSubmit, getUTMParameters } from '@/lib/analytics';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formError, setFormError] = useState('');
  const [renderTime] = useState(Date.now());

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);
    setFormError('');

    // Time trap: check if form was filled too quickly (likely a bot)
    const timeTaken = Date.now() - renderTime;
    if (timeTaken < 3000) {
      setFormError('Please take your time filling out the form.');
      setIsSubmitting(false);
      return;
    }

    try {
      // Get UTM parameters
      const utmParams = getUTMParameters();

      // Submit to API
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...data,
          timestamp: renderTime,
          utm: utmParams,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to submit form');
      }

      // Success
      trackContactFormSubmit();
      setIsSuccess(true);
      reset();
    } catch {
      setFormError(
        'Something went wrong. Please try again or email us directly.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="rounded-lg border bg-green-50 p-6 text-center">
        <h3 className="text-xl font-bold text-green-900 mb-2">
          Thank you for reaching out!
        </h3>
        <p className="text-green-800 mb-4">
          We have received your message and will respond within 1 business day.
          Check your email for a confirmation.
        </p>
        <Button
          variant="outline"
          onClick={() => setIsSuccess(false)}
          className="text-green-900 border-green-900"
        >
          Send another message
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {/* Name */}
      <div>
        <Label htmlFor="name">
          Name <span className="text-destructive">*</span>
        </Label>
        <Input
          id="name"
          {...register('name')}
          className="mt-1"
          aria-required="true"
          aria-invalid={errors.name ? 'true' : 'false'}
          aria-describedby={errors.name ? 'name-error' : undefined}
        />
        {errors.name && (
          <p id="name-error" className="mt-1 text-sm text-destructive" role="alert">
            {errors.name.message}
          </p>
        )}
      </div>

      {/* Email */}
      <div>
        <Label htmlFor="email">
          Email <span className="text-destructive">*</span>
        </Label>
        <Input
          id="email"
          type="email"
          {...register('email')}
          className="mt-1"
          aria-required="true"
          aria-invalid={errors.email ? 'true' : 'false'}
          aria-describedby={errors.email ? 'email-error' : undefined}
        />
        {errors.email && (
          <p id="email-error" className="mt-1 text-sm text-destructive" role="alert">
            {errors.email.message}
          </p>
        )}
      </div>

      {/* Business Name */}
      <div>
        <Label htmlFor="businessName">
          Business Name <span className="text-destructive">*</span>
        </Label>
        <Input
          id="businessName"
          {...register('businessName')}
          className="mt-1"
          aria-required="true"
          aria-invalid={errors.businessName ? 'true' : 'false'}
          aria-describedby={errors.businessName ? 'business-error' : undefined}
        />
        {errors.businessName && (
          <p id="business-error" className="mt-1 text-sm text-destructive" role="alert">
            {errors.businessName.message}
          </p>
        )}
      </div>

      {/* Message */}
      <div>
        <Label htmlFor="message">
          What&apos;s your biggest finance headache? <span className="text-destructive">*</span>
        </Label>
        <Textarea
          id="message"
          {...register('message')}
          className="mt-1"
          rows={5}
          aria-required="true"
          aria-invalid={errors.message ? 'true' : 'false'}
          aria-describedby={errors.message ? 'message-error' : undefined}
        />
        {errors.message && (
          <p id="message-error" className="mt-1 text-sm text-destructive" role="alert">
            {errors.message.message}
          </p>
        )}
      </div>

      {/* Honeypot (hidden) */}
      <input
        type="text"
        {...register('honeypot')}
        style={{ position: 'absolute', left: '-9999px' }}
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
      />

      {/* Error Message */}
      {formError && (
        <div className="rounded-md bg-destructive/10 p-3 text-sm text-destructive">
          {formError}
        </div>
      )}

      {/* Submit */}
      <Button type="submit" disabled={isSubmitting} size="lg" className="w-full tap-target">
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </Button>
    </form>
  );
}

