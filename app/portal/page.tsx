import type { Metadata } from 'next';
import { ExternalLink, Shield, FileText, MessageSquare } from 'lucide-react';
import { PortalButton } from '@/components/portal-button';
import { generateMetadata as genMeta } from '@/lib/seo';

export const metadata: Metadata = genMeta({
  title: 'Secure Client Portal | FoxGlove CPA',
  description:
    'Access your secure client portal to view documents, send messages, and manage your account.',
  path: '/portal',
});

export default function PortalPage() {
  return (
    <div className="container py-16 md:py-24">
      <div className="mx-auto max-w-3xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6">
            Secure Client Portal
          </h1>
          <p className="text-lg text-muted-foreground">
            Access your financial documents, messages, and account information in
            one secure location.
          </p>
        </div>

        {/* Portal Access */}
        <div className="rounded-lg border-2 border-primary bg-primary/5 p-8 text-center mb-12">
          <Shield className="mx-auto h-12 w-12 text-primary mb-4" />
          <h2 className="text-2xl font-bold mb-4">Client Portal Access</h2>
          <p className="text-muted-foreground mb-6">
            Current clients can access the secure portal to view documents, send
            messages, and manage their account.
          </p>
          <PortalButton />
          <p className="mt-4 text-sm text-muted-foreground">
            Don't have portal access?{' '}
            <a href="mailto:hello@foxglove.cpa" className="text-primary hover:underline">
              Contact us
            </a>
          </p>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="text-center p-6 rounded-lg border">
            <FileText className="mx-auto h-8 w-8 text-primary mb-3" />
            <h3 className="font-semibold mb-2">Documents</h3>
            <p className="text-sm text-muted-foreground">
              View and download tax returns, financial statements, and reports
            </p>
          </div>
          <div className="text-center p-6 rounded-lg border">
            <MessageSquare className="mx-auto h-8 w-8 text-primary mb-3" />
            <h3 className="font-semibold mb-2">Secure Messaging</h3>
            <p className="text-sm text-muted-foreground">
              Send and receive messages directly with your CPA team
            </p>
          </div>
          <div className="text-center p-6 rounded-lg border">
            <Shield className="mx-auto h-8 w-8 text-primary mb-3" />
            <h3 className="font-semibold mb-2">Bank-Level Security</h3>
            <p className="text-sm text-muted-foreground">
              256-bit encryption and SOC-2 compliant infrastructure
            </p>
          </div>
        </div>

        {/* Help Section */}
        <div className="bg-muted/30 rounded-lg p-6">
          <h3 className="font-semibold mb-3">Need Help?</h3>
          <div className="space-y-2 text-sm">
            <p>
              <strong>Forgot your password?</strong> Click "Forgot Password" on
              the portal login page.
            </p>
            <p>
              <strong>First-time login?</strong> Check your email for your
              invitation link and setup instructions.
            </p>
            <p>
              <strong>Technical issues?</strong> Contact us at{' '}
              <a
                href="mailto:hello@foxglove.cpa"
                className="text-primary hover:underline"
              >
                hello@foxglove.cpa
              </a>
              {' '}or call{' '}
              <a
                href={`tel:${(process.env.NEXT_PUBLIC_PHONE || '').replace(/\D/g, '')}`}
                className="text-primary hover:underline"
              >
                {process.env.NEXT_PUBLIC_PHONE}
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

