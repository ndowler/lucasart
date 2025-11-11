import { NextResponse } from 'next/server';
import { contactFormSchema } from '@/lib/schemas';

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Validate with Zod
    const validatedData = contactFormSchema.parse(body);

    // Check honeypot (should be empty)
    if (validatedData.honeypot && validatedData.honeypot.length > 0) {
      return NextResponse.json(
        { error: 'Bot detected' },
        { status: 400 }
      );
    }

    // Check time trap (should take at least 3 seconds)
    if (validatedData.timestamp) {
      const timeTaken = Date.now() - validatedData.timestamp;
      if (timeTaken < 3000) {
        return NextResponse.json(
          { error: 'Form submitted too quickly' },
          { status: 400 }
        );
      }
    }

    // In production, this would:
    // 1. Send to CRM via webhook
    // 2. Send auto-reply email
    // 3. Log to database
    
    // For now, just log to console
    console.log('Contact form submission:', {
      name: validatedData.name,
      email: validatedData.email,
      businessName: validatedData.businessName,
      message: validatedData.message,
      utm: body.utm,
    });

    // Simulate CRM webhook
    // await fetch(process.env.CRM_WEBHOOK_URL, {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(validatedData),
    // });

    // Simulate auto-reply email
    // await sendAutoReplyEmail(validatedData.email);

    return NextResponse.json({
      success: true,
      message: 'Form submitted successfully',
    });
  } catch (error) {
    console.error('Contact form error:', error);
    
    return NextResponse.json(
      { error: 'Failed to submit form' },
      { status: 500 }
    );
  }
}

