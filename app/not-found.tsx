import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Home, Mail } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="container flex flex-col items-center justify-center py-24 md:py-32">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-base font-semibold text-primary">404</p>
        <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
          Page not found
        </h1>
        <p className="mt-6 text-lg text-muted-foreground">
          Sorry, we couldn&apos;t find the page you&apos;re looking for.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg">
            <Link href="/">
              <Home className="mr-2 h-5 w-5" />
              Go to homepage
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href="/contact">
              <Mail className="mr-2 h-5 w-5" />
              Contact us
            </Link>
          </Button>
        </div>

        {/* Quick Links */}
        <div className="mt-16">
          <h2 className="text-sm font-semibold text-muted-foreground mb-4">
            Popular pages:
          </h2>
          <div className="flex flex-col sm:flex-row gap-2 justify-center text-sm">
            <Link
              href="/services"
              className="text-primary hover:underline"
            >
              Services
            </Link>
            <span className="hidden sm:inline text-muted-foreground">•</span>
            <Link
              href="/pricing"
              className="text-primary hover:underline"
            >
              Pricing
            </Link>
            <span className="hidden sm:inline text-muted-foreground">•</span>
            <Link
              href="/about"
              className="text-primary hover:underline"
            >
              About
            </Link>
            <span className="hidden sm:inline text-muted-foreground">•</span>
            <Link
              href="/articles"
              className="text-primary hover:underline"
            >
              Articles
            </Link>
            <span className="hidden sm:inline text-muted-foreground">•</span>
            <Link
              href="/contact"
              className="text-primary hover:underline"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

