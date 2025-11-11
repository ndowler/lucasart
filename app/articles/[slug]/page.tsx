import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, Clock, Calendar } from 'lucide-react';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { Button } from '@/components/ui/button';
import { CTASection } from '@/components/cta-section';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { createArticleSchema } from '@/lib/seo';
import { formatDate } from '@/lib/utils';
import {
  getAllArticles,
  getArticleBySlug,
  getRelatedArticles,
} from '@/lib/articles';

export async function generateStaticParams() {
  const articles = getAllArticles();
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const article = getArticleBySlug(params.slug);

  if (!article) {
    return {
      title: 'Article Not Found',
    };
  }

  const url = `${process.env.NEXT_PUBLIC_SITE_URL}/articles/${params.slug}`;

  return {
    title: `${article.title} | FoxGlove CPA`,
    description: article.description,
    alternates: {
      canonical: `/articles/${params.slug}`,
    },
    openGraph: {
      title: article.title,
      description: article.description,
      url,
      type: 'article',
      publishedTime: article.publishedAt,
      authors: [article.author],
      tags: article.tags,
    },
    twitter: {
      card: 'summary_large_image',
      title: article.title,
      description: article.description,
    },
  };
}

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const article = getArticleBySlug(params.slug);

  if (!article) {
    notFound();
  }

  const relatedArticles = getRelatedArticles(article.slug, article.tags, 3);

  const articleSchema = createArticleSchema({
    title: article.title,
    description: article.description,
    publishedAt: article.publishedAt,
    author: article.author,
    url: `${process.env.NEXT_PUBLIC_SITE_URL}/articles/${article.slug}`,
    image: `${process.env.NEXT_PUBLIC_SITE_URL}/og-image.jpg`,
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <article className="container py-16 md:py-24">
        {/* Back Link */}
        <Link
          href="/articles"
          className="inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-8"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to articles
        </Link>

        {/* Article Header */}
        <header className="mx-auto max-w-3xl mb-12">
          <div className="flex items-center gap-3 text-sm text-muted-foreground mb-4">
            <span className="font-medium text-primary">{article.category}</span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              {formatDate(article.publishedAt)}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              {article.readTime} min read
            </span>
          </div>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6">
            {article.title}
          </h1>
          <p className="text-xl text-muted-foreground">{article.description}</p>
          <div className="mt-6 text-sm text-muted-foreground">
            By {article.author}
          </div>
        </header>

        {/* Article Content */}
        <div className="mx-auto max-w-3xl">
          <div className="prose prose-lg max-w-none">
            <MDXRemote source={article.content} />
          </div>

          {/* In-Content CTA */}
          <div className="my-12 rounded-lg border-2 border-primary bg-primary/5 p-8 text-center">
            <h3 className="text-2xl font-bold mb-3">
              Need help with your business finances?
            </h3>
            <p className="text-muted-foreground mb-6">
              Book a 20-minute intro call to discuss your tax and accounting needs.
            </p>
            <Button size="lg">Book a 20-min intro</Button>
          </div>

          {/* Tags */}
          {article.tags.length > 0 && (
            <div className="mt-12 pt-8 border-t">
              <h3 className="text-sm font-semibold mb-3">Tags:</h3>
              <div className="flex flex-wrap gap-2">
                {article.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center rounded-full bg-muted px-3 py-1 text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Related Articles */}
        {relatedArticles.length > 0 && (
          <div className="mt-16 pt-16 border-t">
            <h2 className="text-3xl font-bold mb-8">Related Articles</h2>
            <div className="grid gap-8 md:grid-cols-3">
              {relatedArticles.map((related) => (
                <Link
                  key={related.slug}
                  href={`/articles/${related.slug}`}
                  className="group"
                >
                  <Card className="h-full transition-all hover:shadow-lg hover:border-primary">
                    <CardHeader>
                      <div className="text-sm text-muted-foreground mb-2">
                        <span className="font-medium text-primary">
                          {related.category}
                        </span>
                      </div>
                      <CardTitle className="text-lg group-hover:text-primary transition-colors">
                        {related.title}
                      </CardTitle>
                      <CardDescription className="line-clamp-2">
                        {related.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="text-sm text-muted-foreground">
                        {related.readTime} min read
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        )}
      </article>

      <CTASection />
    </>
  );
}

