'use client';

import { ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { trackPortalClick } from '@/lib/analytics';

export function PortalButton() {
  const handleClick = () => {
    trackPortalClick();
    // In production, this would link to actual portal URL
    window.open('https://portal.example.com', '_blank');
  };

  return (
    <Button size="lg" onClick={handleClick}>
      <ExternalLink className="mr-2 h-5 w-5" />
      Access Portal
    </Button>
  );
}

