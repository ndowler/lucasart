import type { Metadata } from 'next';
import { generateMetadata as genMeta } from '@/lib/seo';

export const metadata: Metadata = genMeta({
  title: 'Terms of Service | FoxGlove CPA',
  description: 'Terms of service for FoxGlove CPA. Read our terms and conditions for using our website and services.',
  path: '/terms',
});

export default function TermsPage() {
  return (
    <div className="container py-16 md:py-24">
      <div className="mx-auto max-w-4xl prose prose-lg">
        <h1>Terms of Service</h1>
        <p className="lead">Last updated: {new Date().toLocaleDateString()}</p>

        <h2>Agreement to Terms</h2>
        <p>
          By accessing or using the FoxGlove CPA website and services, you agree to be bound by these Terms of Service. If you do not agree with these terms, please do not use our services.
        </p>

        <h2>Services</h2>
        <p>
          FoxGlove CPA provides accounting, bookkeeping, tax preparation, and related financial services to small businesses and individuals in Washington and Oregon. Services are provided in accordance with applicable professional standards and regulations.
        </p>

        <h3>Service Scope</h3>
        <p>Our services include, but are not limited to:</p>
        <ul>
          <li>Monthly bookkeeping and financial reporting</li>
          <li>Tax preparation (individual and business)</li>
          <li>Quarterly tax planning and estimates</li>
          <li>S-Corporation analysis and election assistance</li>
          <li>Financial cleanup and migration services</li>
        </ul>

        <h2>Client Responsibilities</h2>
        <p>As a client, you agree to:</p>
        <ul>
          <li>Provide accurate and complete financial information</li>
          <li>Respond to requests for information in a timely manner</li>
          <li>Maintain proper documentation and records</li>
          <li>Pay fees according to the agreed schedule</li>
          <li>Inform us of any changes to your business or financial situation</li>
        </ul>

        <h2>Fees and Payment</h2>
        <ul>
          <li>Fees are specified in your engagement letter or service agreement</li>
          <li>Payment is due according to the terms in your agreement</li>
          <li>Late payments may incur interest charges</li>
          <li>We reserve the right to suspend services for non-payment</li>
          <li>Fee adjustments may occur based on scope changes</li>
        </ul>

        <h2>Professional Standards</h2>
        <p>
          Our services are provided in accordance with:
        </p>
        <ul>
          <li>Generally Accepted Accounting Principles (GAAP)</li>
          <li>IRS regulations and guidelines</li>
          <li>Washington and Oregon state tax laws</li>
          <li>Professional ethics standards</li>
        </ul>

        <h2>Limitation of Liability</h2>
        <p>
          To the maximum extent permitted by law:
        </p>
        <ul>
          <li>We are not liable for indirect, incidental, or consequential damages</li>
          <li>Our total liability is limited to the fees paid for the specific service in question</li>
          <li>We are not responsible for penalties resulting from client-provided information errors</li>
          <li>Advice is based on information provided by you and current law at the time</li>
        </ul>

        <h2>Confidentiality</h2>
        <p>
          We maintain strict confidentiality of client information in accordance with professional standards and applicable law. However, we may be required to disclose information:
        </p>
        <ul>
          <li>When required by law or court order</li>
          <li>To defend ourselves in legal proceedings</li>
          <li>With your express consent</li>
        </ul>

        <h2>Termination</h2>
        <p>Either party may terminate services:</p>
        <ul>
          <li>With 30 days written notice</li>
          <li>Immediately for cause (non-payment, misrepresentation, etc.)</li>
          <li>Upon completion of a specific project or tax season</li>
        </ul>
        <p>
          Upon termination, you are responsible for payment of all fees for services rendered through the termination date.
        </p>

        <h2>Intellectual Property</h2>
        <p>
          The content on this website, including text, graphics, logos, and software, is the property of FoxGlove CPA and is protected by copyright law. You may not reproduce, distribute, or create derivative works without our express written permission.
        </p>

        <h2>Website Use</h2>
        <p>You agree not to:</p>
        <ul>
          <li>Use the website for any unlawful purpose</li>
          <li>Attempt to gain unauthorized access to our systems</li>
          <li>Transmit malicious code or spam</li>
          <li>Scrape or harvest data from the website</li>
          <li>Impersonate another person or entity</li>
        </ul>

        <h2>Disclaimer of Warranties</h2>
        <p>
          Our website and services are provided "as is" without warranties of any kind, either express or implied. We do not guarantee that:
        </p>
        <ul>
          <li>The website will be uninterrupted or error-free</li>
          <li>Defects will be corrected</li>
          <li>The website is free from viruses or harmful components</li>
        </ul>

        <h2>Third-Party Links</h2>
        <p>
          Our website may contain links to third-party websites. We are not responsible for the content, privacy practices, or availability of these external sites.
        </p>

        <h2>Governing Law</h2>
        <p>
          These Terms are governed by the laws of the State of Washington, without regard to conflict of law principles. Any disputes shall be resolved in the courts of Pierce County, Washington.
        </p>

        <h2>Changes to Terms</h2>
        <p>
          We reserve the right to modify these Terms at any time. Changes will be effective immediately upon posting to this page. Continued use of our services after changes constitutes acceptance of the new terms.
        </p>

        <h2>Severability</h2>
        <p>
          If any provision of these Terms is found to be unenforceable, the remaining provisions will remain in full force and effect.
        </p>

        <h2>Contact Information</h2>
        <p>
          If you have questions about these Terms of Service, please contact us:
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

