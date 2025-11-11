'use client';

import { useEffect, useState } from 'react';
import { X } from 'lucide-react';
import { InlineWidget } from 'react-calendly';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { trackSchedulerSubmit } from '@/lib/analytics';

export function SchedulerModal() {
  const [isOpen, setIsOpen] = useState(false);
  const calendlyUrl =
    process.env.NEXT_PUBLIC_CALENDLY_URL ||
    'https://calendly.com/example/20min';

  useEffect(() => {
    const handleOpenScheduler = () => {
      setIsOpen(true);
    };

    window.addEventListener('openScheduler', handleOpenScheduler);

    // Listen for Calendly events
    const handleMessage = (e: MessageEvent) => {
      if (
        e.data.event &&
        e.data.event.indexOf('calendly') === 0 &&
        e.data.event === 'calendly.event_scheduled'
      ) {
        trackSchedulerSubmit();
      }
    };

    window.addEventListener('message', handleMessage);

    return () => {
      window.removeEventListener('openScheduler', handleOpenScheduler);
      window.removeEventListener('message', handleMessage);
    };
  }, []);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-hidden">
        <DialogHeader>
          <DialogTitle>Book Your 20-Minute Intro Call</DialogTitle>
        </DialogHeader>
        <div className="h-[600px]">
          <InlineWidget
            url={calendlyUrl}
            styles={{ height: '100%', width: '100%' }}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}

