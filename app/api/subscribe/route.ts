import { NextResponse } from 'next/server';
import { newsletterFormSchema } from '@/lib/schemas';

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Validate with Zod
    const validatedData = newsletterFormSchema.parse(body);

    // Check honeypot (should be empty)
    if (validatedData.honeypot && validatedData.honeypot.length > 0) {
      return NextResponse.json({ error: 'Bot detected' }, { status: 400 });
    }

    // In production, this would:
    // 1. Add to email service provider (Mailchimp, ConvertKit, etc.)
    // 2. Send confirmation email
    // 3. Log to database

    // For now, just log to console
    console.log('Newsletter subscription:', {
      email: validatedData.email,
    });

    // Simulate email service provider integration
    // await addToMailingList(validatedData.email);

    return NextResponse.json({
      success: true,
      message: 'Subscribed successfully',
    });
  } catch (error) {
    console.error('Newsletter subscription error:', error);

    return NextResponse.json(
      { error: 'Failed to subscribe' },
      { status: 500 }
    );
  }
}

