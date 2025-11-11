import type { Metadata } from 'next';
import { generateMetadata as genMeta } from '@/lib/seo';

export const metadata: Metadata = genMeta({
  title: 'Privacy Policy | FoxGlove CPA',
  description: 'Privacy policy for FoxGlove CPA. Learn how we collect, use, and protect your data.',
  path: '/privacy',
});

export default function PrivacyPage() {
  return (
    <div className="container py-16 md:py-24">
      <div className="mx-auto max-w-4xl prose prose-lg">
        <h1>Privacy Policy</h1>
        <p className="lead">Last updated: {new Date().toLocaleDateString()}</p>

        <h2>Introduction</h2>
        <p>
          FoxGlove CPA (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
        </p>

        <h2>Information We Collect</h2>
        
        <h3>Personal Information</h3>
        <p>We may collect personal information that you voluntarily provide to us, including:</p>
        <ul>
          <li>Name and contact information (email, phone, address)</li>
          <li>Business information (business name, industry, size)</li>
          <li>Financial information necessary to provide accounting services</li>
          <li>Tax identification numbers (EIN, SSN as required)</li>
        </ul>

        <h3>Usage Information</h3>
        <p>We automatically collect certain information when you visit our website:</p>
        <ul>
          <li>IP address and browser type</li>
          <li>Pages visited and time spent</li>
          <li>Referring website</li>
          <li>Analytics data (via Google Analytics)</li>
        </ul>

        <h2>How We Use Your Information</h2>
        <p>We use the information we collect to:</p>
        <ul>
          <li>Provide accounting, tax, and bookkeeping services</li>
          <li>Communicate with you about services and appointments</li>
          <li>Process payments and maintain financial records</li>
          <li>Comply with legal and regulatory requirements</li>
          <li>Improve our website and services</li>
          <li>Send marketing communications (with your consent)</li>
        </ul>

        <h2>Data Security</h2>
        <p>
          We implement appropriate technical and organizational measures to protect your personal information, including:
        </p>
        <ul>
          <li>Encryption in transit and at rest (AES-256)</li>
          <li>Secure cloud storage with SOC-2 certified vendors</li>
          <li>Access controls and authentication</li>
          <li>Regular security audits</li>
          <li>US-only data storage and processing</li>
        </ul>

        <h2>Data Sharing and Disclosure</h2>
        <p>We may share your information with:</p>
        <ul>
          <li>
            <strong>Service Providers:</strong> Third-party vendors who assist in providing our services (e.g., QuickBooks, payroll processors)
          </li>
          <li>
            <strong>Legal Requirements:</strong> When required by law or to protect our rights
          </li>
          <li>
            <strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets
          </li>
        </ul>
        <p>
          We do NOT sell your personal information to third parties. We do NOT use offshore labor or send your data outside the United States.
        </p>

        <h2>Your Rights</h2>
        <p>You have the right to:</p>
        <ul>
          <li><strong>Access:</strong> Request a copy of your personal information</li>
          <li><strong>Correction:</strong> Request correction of inaccurate information</li>
          <li><strong>Deletion:</strong> Request deletion of your information (subject to legal retention requirements)</li>
          <li><strong>Opt-Out:</strong> Unsubscribe from marketing emails at any time</li>
          <li><strong>Data Portability:</strong> Request your data in a machine-readable format</li>
        </ul>
        <p>
          To exercise these rights, contact us at{' '}
          <a href="mailto:hello@foxglove.cpa">hello@foxglove.cpa</a>.
        </p>

        <h2>Data Retention</h2>
        <p>We retain your information for as long as necessary to:</p>
        <ul>
          <li>Provide ongoing services to you</li>
          <li>Comply with IRS requirements (typically 7 years for financial records)</li>
          <li>Resolve disputes and enforce agreements</li>
        </ul>

        <h2>Cookies and Tracking</h2>
        <p>
          We use cookies and similar tracking technologies to improve your experience. You can control cookies through your browser settings. We use Google Analytics to understand website usage.
        </p>

        <h2>California Residents (CCPA)</h2>
        <p>
          California residents have additional rights under the California Consumer Privacy Act (CCPA), including the right to know what personal information we collect and the right to opt-out of sale (though we do not sell personal information).
        </p>

        <h2>Changes to This Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated &quot;Last Updated&quot; date.
        </p>

        <h2>Contact Us</h2>
        <p>
          If you have questions about this Privacy Policy, please contact us:
        </p>
        <ul>
          <li>Email: <a href="mailto:hello@foxglove.cpa">hello@foxglove.cpa</a></li>
          <li>Phone: {process.env.NEXT_PUBLIC_PHONE || '(xxx) xxx-xxxx'}</li>
          <li>Address: Tacoma, WA</li>
        </ul>
      </div>
    </div>
  );
}

