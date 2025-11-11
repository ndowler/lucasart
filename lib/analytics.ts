import type { GAEvent } from '@/types';

declare global {
  interface Window {
    dataLayer: any[];
  }
}

/**
 * Push event to Google Tag Manager dataLayer
 */
export function trackEvent(eventName: string, eventParams?: object): void {
  if (typeof window !== 'undefined' && window.dataLayer) {
    window.dataLayer.push({
      event: eventName,
      ...eventParams,
    });
  }
}

/**
 * Track when user clicks "Book a meeting" button
 */
export function trackBookMeetingClick(location: string): void {
  trackEvent('book_meeting_click', {
    location,
    timestamp: new Date().toISOString(),
  });
}

/**
 * Track when Calendly scheduler is submitted
 */
export function trackSchedulerSubmit(): void {
  trackEvent('scheduler_submit', {
    timestamp: new Date().toISOString(),
  });
}

/**
 * Track contact form submission
 */
export function trackContactFormSubmit(): void {
  trackEvent('contact_form_submit', {
    timestamp: new Date().toISOString(),
  });
}

/**
 * Track phone number click
 */
export function trackPhoneClick(): void {
  trackEvent('phone_click', {
    timestamp: new Date().toISOString(),
  });
}

/**
 * Track email click
 */
export function trackEmailClick(): void {
  trackEvent('email_click', {
    timestamp: new Date().toISOString(),
  });
}

/**
 * Track client portal click
 */
export function trackPortalClick(): void {
  trackEvent('portal_click', {
    timestamp: new Date().toISOString(),
  });
}

/**
 * Track download (e.g., "Ready Checklist" PDF)
 */
export function trackDownload(fileName: string): void {
  trackEvent('download', {
    file_name: fileName,
    timestamp: new Date().toISOString(),
  });
}

/**
 * Store UTM parameters in sessionStorage on landing
 */
export function captureUTMParameters(): void {
  if (typeof window === 'undefined') return;

  const urlParams = new URLSearchParams(window.location.search);
  const utmParams: Record<string, string> = {};

  ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content'].forEach(
    (param) => {
      const value = urlParams.get(param);
      if (value) {
        utmParams[param] = value;
      }
    }
  );

  if (Object.keys(utmParams).length > 0) {
    sessionStorage.setItem('utm_params', JSON.stringify(utmParams));
  }
}

/**
 * Retrieve stored UTM parameters
 */
export function getUTMParameters(): Record<string, string> | null {
  if (typeof window === 'undefined') return null;

  const stored = sessionStorage.getItem('utm_params');
  return stored ? JSON.parse(stored) : null;
}

