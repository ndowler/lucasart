import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Clock } from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { generateMetadata as genMeta } from '@/lib/seo';
import { getAllArticles, getAllCategories } from '@/lib/articles';
import { NewsletterForm } from '@/components/forms/newsletter-form';

export const metadata: Metadata = genMeta({
  title: 'Articles & Resources | FoxGlove CPA',
  description:
    'Tax planning, cash flow management, and accounting tips for PNW founders. Learn about S-Corp election, quarterly tax planning, and more.',
  path: '/articles',
});

export default function ArticlesPage() {
  const articles = getAllArticles();
  const categories = getAllCategories();

  return (
    <div className="container py-16 md:py-24">
      {/* Hero */}
      <div className="mx-auto max-w-3xl text-center mb-16">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6">
          Articles & Resources
        </h1>
        <p className="text-lg text-muted-foreground">
          Tax planning, cash flow management, and accounting insights for Pacific
          Northwest founders.
        </p>
      </div>

      {/* Newsletter Signup */}
      <div className="mb-16">
        <div className="mx-auto max-w-2xl rounded-lg border bg-primary/5 p-8">
          <h2 className="text-2xl font-bold mb-2">
            Get PNW Founder Finance Field Notes
          </h2>
          <p className="text-muted-foreground mb-6">
            Monthly tax tips, case studies, and strategies delivered to your inbox.
            No spam, ever.
          </p>
          <NewsletterForm />
        </div>
      </div>

      {/* Categories Filter */}
      {categories.length > 0 && (
        <div className="mb-8">
          <h2 className="text-sm font-semibold mb-3">Filter by topic:</h2>
          <div className="flex flex-wrap gap-2">
            <Link
              href="/articles"
              className="inline-flex items-center rounded-full border px-4 py-1.5 text-sm font-medium hover:bg-muted transition-colors"
            >
              All Articles
            </Link>
            {categories.map((category) => (
              <button
                key={category}
                className="inline-flex items-center rounded-full border px-4 py-1.5 text-sm font-medium hover:bg-muted transition-colors"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Articles Grid */}
      {articles.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-muted-foreground">No articles yet. Check back soon!</p>
        </div>
      ) : (
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => (
            <Link key={article.slug} href={`/articles/${article.slug}`} className="group">
              <Card className="h-full transition-all hover:shadow-lg hover:border-primary">
                <CardHeader>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                    <span className="font-medium text-primary">{article.category}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {article.readTime} min read
                    </span>
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {article.title}
                  </CardTitle>
                  <CardDescription>{article.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center text-sm font-medium text-primary group-hover:underline">
                    Read article
                    <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

