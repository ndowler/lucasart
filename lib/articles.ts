import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { calculateReadTime } from './utils';
import type { Article } from '@/types';

const articlesDirectory = path.join(process.cwd(), 'content/articles');

export function getAllArticles(): Article[] {
  try {
    const fileNames = fs.readdirSync(articlesDirectory);
    const articles = fileNames
      .filter((fileName) => fileName.endsWith('.mdx'))
      .map((fileName) => {
        const slug = fileName.replace(/\.mdx$/, '');
        const fullPath = path.join(articlesDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');
        const { data, content } = matter(fileContents);

        return {
          slug,
          title: data.title || '',
          description: data.description || '',
          publishedAt: data.publishedAt || '',
          author: data.author || 'FoxGlove CPA',
          category: data.category || 'General',
          tags: data.tags || [],
          readTime: calculateReadTime(content),
          content,
        };
      })
      .sort((a, b) => {
        // Sort by date, newest first
        return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime();
      });

    return articles;
  } catch (error) {
    console.error('Error reading articles:', error);
    return [];
  }
}

export function getArticleBySlug(slug: string): Article | null {
  try {
    const fullPath = path.join(articlesDirectory, `${slug}.mdx`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    return {
      slug,
      title: data.title || '',
      description: data.description || '',
      publishedAt: data.publishedAt || '',
      author: data.author || 'FoxGlove CPA',
      category: data.category || 'General',
      tags: data.tags || [],
      readTime: calculateReadTime(content),
      content,
    };
  } catch (error) {
    console.error(`Error reading article ${slug}:`, error);
    return null;
  }
}

export function getRelatedArticles(
  currentSlug: string,
  tags: string[],
  limit: number = 3
): Article[] {
  const allArticles = getAllArticles();
  
  // Filter out current article and find articles with matching tags
  const related = allArticles
    .filter((article) => article.slug !== currentSlug)
    .map((article) => {
      const matchingTags = article.tags.filter((tag) => tags.includes(tag));
      return {
        ...article,
        matchCount: matchingTags.length,
      };
    })
    .filter((article) => article.matchCount > 0)
    .sort((a, b) => b.matchCount - a.matchCount)
    .slice(0, limit);

  return related;
}

export function getArticlesByCategory(category: string): Article[] {
  const allArticles = getAllArticles();
  return allArticles.filter((article) => article.category === category);
}

export function getArticlesByTag(tag: string): Article[] {
  const allArticles = getAllArticles();
  return allArticles.filter((article) => article.tags.includes(tag));
}

export function getAllCategories(): string[] {
  const allArticles = getAllArticles();
  const categories = new Set(allArticles.map((article) => article.category));
  return Array.from(categories);
}

export function getAllTags(): string[] {
  const allArticles = getAllArticles();
  const tags = new Set(allArticles.flatMap((article) => article.tags));
  return Array.from(tags);
}

