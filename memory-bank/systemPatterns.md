# System Patterns: FoxGlove CPA Website

## Architecture Overview

### High-Level Architecture
```
┌─────────────────────────────────────────────┐
│           User's Browser                     │
│  ┌─────────────────────────────────────┐   │
│  │   React Components (Client)          │   │
│  │   ├─ Interactive Forms               │   │
│  │   ├─ Scheduler Modal                 │   │
│  │   └─ Analytics Events                │   │
│  └──────────────┬──────────────────────┘   │
└─────────────────┼──────────────────────────┘
                  │
                  ↓
┌─────────────────────────────────────────────┐
│        Next.js Server (Vercel Edge)          │
│  ┌─────────────────────────────────────┐   │
│  │   React Server Components            │   │
│  │   ├─ SSR Pages                       │   │
│  │   ├─ Static Generation               │   │
│  │   └─ SEO Metadata                    │   │
│  └─────────────────────────────────────┘   │
│  ┌─────────────────────────────────────┐   │
│  │   API Routes                         │   │
│  │   ├─ /api/contact                    │   │
│  │   ├─ /api/subscribe                  │   │
│  │   └─ /api/analytics                  │   │
│  └──────────────┬──────────────────────┘   │
└─────────────────┼──────────────────────────┘
                  │
        ┌─────────┴──────────┐
        │                     │
        ↓                     ↓
┌──────────────┐    ┌──────────────────┐
│     CRM      │    │   Email Service  │
│   Webhook    │    │  (Auto-replies)  │
└──────────────┘    └──────────────────┘
```

## Component Architecture

### Component Hierarchy
```
RootLayout
├── Header
│   ├── Logo
│   ├── Navigation
│   │   ├── DesktopNav
│   │   └── MobileNav (hamburger)
│   └── CTAButton (triggers modal)
│
├── Page Content (varies by route)
│   ├── HeroSection
│   ├── ContentSections
│   ├── CTASection
│   ├── FAQSection
│   └── ...
│
├── SchedulerModal (global, state-managed)
│
└── Footer
    ├── NAP Block
    ├── QuickLinks
    ├── BadgesRow
    └── Copyright + Social
```

### Component Types

#### 1. Server Components (Default)
**Used for**: Static content, SEO-critical content, data fetching
```
- Page layouts
- Hero sections
- Text content blocks
- Footer/Header structure
- Blog articles (rendered from MDX)
```

#### 2. Client Components
**Used for**: Interactivity, state management, browser APIs
```
- Forms (contact, newsletter)
- Scheduler modal
- Mobile navigation toggle
- Analytics event tracking
- Interactive calculator
- Accordions/tabs
```

### Key Design Patterns

#### Pattern 1: Composition Over Configuration
Build pages by composing reusable sections:

```typescript
// app/services/accounting/page.tsx
export default function AccountingPage() {
  return (
    <>
      <HeroSection
        title="Monthly Accounting for PNW Founders"
        subtitle="..."
      />
      <WhoItsFor
        forList={[...]}
        notForList={[...]}
      />
      <DeliverablesSection items={[...]} />
      <ProcessSection steps={[...]} />
      <PricingSection price="$800/mo" factors={[...]} />
      <ProofSection testimonial={...} />
      <FAQSection faqs={[...]} />
      <CTASection />
    </>
  )
}
```

#### Pattern 2: Data Colocation
Keep content close to where it's used:

```typescript
// app/services/accounting/page.tsx
const faqs = [
  {
    question: "What's included?",
    answer: "..."
  },
  // ...
]

// Later can move to:
// content/services/accounting.json or
// lib/content/services.ts
```

#### Pattern 3: Metadata Generation
Every page exports metadata:

```typescript
export const metadata: Metadata = {
  title: "...",
  description: "...",
  openGraph: {...},
  alternates: {
    canonical: "https://foxglove.cpa/services/accounting"
  }
}
```

#### Pattern 4: Schema Builder Pattern
Create reusable schema builders:

```typescript
// lib/seo.ts
export function createServiceSchema(service: ServiceSchemaData) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    'name': service.name,
    'provider': {
      '@type': 'Organization',
      'name': 'FoxGlove CPA',
      // ...
    },
    'areaServed': ['Washington', 'Oregon'],
    // ...
  }
}

// Usage in page
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify(createServiceSchema({...}))
  }}
/>
```

## State Management

### Global State (Minimal)
- **Scheduler Modal**: Open/closed state
- **Mobile Nav**: Open/closed state
- **Solution**: React Context or Zustand (if needed)

### Local State
- **Forms**: React Hook Form
- **UI Components**: useState within component

### Server State
- **Articles**: Fetched at build time (static generation)
- **No database needed** for initial version

## Routing Strategy

### File-Based Routing (Next.js App Router)
```
app/
├── page.tsx                    → /
├── services/
│   ├── page.tsx               → /services
│   ├── accounting/
│   │   └── page.tsx           → /services/accounting
│   ├── s-corp-analysis/
│   │   └── page.tsx           → /services/s-corp-analysis
│   └── ...
├── articles/
│   ├── page.tsx               → /articles
│   └── [slug]/
│       └── page.tsx           → /articles/:slug
└── ...
```

### Dynamic Routes
- **Articles**: `/articles/[slug]` - generates from MDX files
- **Industry Pages**: Static (4 pages initially)

### URL Structure Decisions
- **Lowercase**: All URLs lowercase
- **No trailing slashes**: `/services` not `/services/`
- **Hyphens for spaces**: `/s-corp-analysis` not `/s_corp_analysis`
- **RESTful**: `/services/accounting` not `/accounting-service`

## Data Flow Patterns

### Form Submission Flow
```
User fills form
   ↓
Client-side validation (Zod)
   ↓
Submit to /api/contact
   ↓
Server-side validation (Zod)
   ↓
Check honeypot & time trap
   ↓
Send to CRM webhook
   ↓
Send auto-reply email
   ↓
Return success response
   ↓
Show success message
   ↓
Track GA4 event
```

### Scheduler Flow
```
User clicks "Book 20-min intro"
   ↓
Track book_meeting_click event
   ↓
Open Calendly modal (inline)
   ↓
User selects time
   ↓
Calendly handles booking
   ↓
Calendly triggers webhook
   ↓
Track scheduler_submit event
   ↓
User sees confirmation
```

### Analytics Event Flow
```
User action (click, submit, etc.)
   ↓
Client component fires event
   ↓
analytics.ts helper function
   ↓
Push to dataLayer (GTM)
   ↓
GTM processes event
   ↓
Sends to GA4
```

## SEO Architecture

### Three-Layer SEO Strategy

#### Layer 1: Next.js Metadata API
Every page exports structured metadata:
```typescript
export const metadata: Metadata = {
  title: '...',
  description: '...',
  keywords: ['...'],
  authors: [{ name: 'FoxGlove CPA' }],
  openGraph: { ... },
  twitter: { ... },
  alternates: {
    canonical: '...'
  }
}
```

#### Layer 2: JSON-LD Structured Data
Inject schema.org markup into `<head>`:
- Organization (homepage)
- LocalBusiness (contact, footer)
- Service (service pages)
- FAQPage (FAQ sections)
- Article (blog posts)

#### Layer 3: Content Optimization
- Semantic HTML (proper heading hierarchy)
- Alt text on all images
- Internal linking strategy
- Keyword-optimized URLs

### Internal Linking Strategy
```
Homepage
├─→ Services Hub
│   ├─→ Individual Services
│   │   └─→ Related Articles
│   └─→ Pricing Page
├─→ Industries Hub
│   ├─→ Individual Industries
│   │   ├─→ Related Services
│   │   └─→ Related Articles
│   └─→ Services
├─→ About
├─→ Contact
└─→ Articles
    ├─→ Individual Articles
    │   ├─→ Related Articles
    │   └─→ Relevant Services
    └─→ Services
```

## Performance Patterns

### Image Loading Strategy
1. **Hero Images**: Priority load, optimized <200KB
2. **Above Fold**: Eager load
3. **Below Fold**: Lazy load
4. **Format**: WebP with PNG/JPG fallback
5. **Sizing**: Multiple sizes (srcset) for responsive

### Code Splitting Strategy
1. **Automatic**: Next.js splits by route
2. **Manual**: Dynamic imports for heavy components
   ```typescript
   const Calculator = dynamic(() => import('@/components/calculator'))
   ```
3. **Vendor**: Separate vendor chunks

### Caching Strategy
1. **Static Assets**: Long cache (1 year)
2. **HTML Pages**: No cache (fresh content)
3. **API Routes**: No cache (dynamic)
4. **Images**: CDN cache (Next.js Image)

## Form Validation Pattern

### Zod Schema Approach
```typescript
// lib/schemas.ts
export const contactFormSchema = z.object({
  name: z.string().min(2, 'Name required'),
  email: z.string().email('Valid email required'),
  businessName: z.string().min(2, 'Business name required'),
  message: z.string().min(10, 'Please describe your situation'),
  honeypot: z.string().max(0, 'Bot detected'), // Should be empty
})

// Reuse on client AND server
// Client: React Hook Form + zodResolver
// Server: API route validation
```

## Analytics Pattern

### Event Tracking Utility
```typescript
// lib/analytics.ts
export const trackEvent = (eventName: string, eventParams?: object) => {
  if (typeof window !== 'undefined' && window.dataLayer) {
    window.dataLayer.push({
      event: eventName,
      ...eventParams
    })
  }
}

// Usage
trackEvent('book_meeting_click', {
  location: 'header',
  page: '/services/accounting'
})
```

### UTM Parameter Preservation
Store UTM params in sessionStorage on landing, include in all form submissions.

## Accessibility Patterns

### Semantic HTML
```jsx
<header>...</header>
<nav>...</nav>
<main>
  <article>...</article>
  <aside>...</aside>
</main>
<footer>...</footer>
```

### Form Accessibility
```jsx
<label htmlFor="email">Email Address</label>
<input
  id="email"
  type="email"
  aria-required="true"
  aria-describedby="email-error"
/>
{error && (
  <span id="email-error" role="alert">
    {error.message}
  </span>
)}
```

### Focus Management
- Visible focus styles (outline or ring)
- Focus trap in modal
- Skip to main content link

### Color Contrast
- WCAG AA minimum (4.5:1 for normal text)
- Test all button states
- Use contrast checker tools

## Error Handling

### Form Errors
- Client-side: Inline validation messages
- Server-side: Return detailed error responses
- Network errors: Show retry option
- Success: Clear, actionable confirmation

### Page Errors
- 404: Custom page with helpful navigation
- 500: Generic error page with contact option
- API errors: Graceful fallback, log to monitoring

## Content Management

### Article/Blog System
```
content/
└── articles/
    ├── should-i-elect-s-corp.mdx
    ├── quarterly-tax-planning.mdx
    └── ...

Each MDX file has frontmatter:
---
title: "Should I Elect S-Corp Status?"
description: "..."
publishedAt: "2024-01-15"
author: "FoxGlove CPA"
category: "Tax Planning"
tags: ["s-corp", "tax", "wa", "or"]
---
```

### Build-time Processing
1. Read all MDX files
2. Parse frontmatter
3. Generate article index
4. Create static pages
5. Generate sitemap

## Deployment Pipeline

### Git Workflow
```
main branch → Production (auto-deploy)
   ↑
   └── feature branches → Preview deploys
```

### CI/CD (Vercel)
1. Push to GitHub
2. Vercel detects push
3. Runs build
4. Runs checks (TypeScript, ESLint)
5. Deploys to preview URL (branches)
6. Deploys to production (main)
7. Purges CDN cache

### Environment Strategy
- **Development**: `.env.local` (local only)
- **Preview**: Vercel environment variables (preview)
- **Production**: Vercel environment variables (production)

## Security Patterns

### API Route Protection
```typescript
// Rate limiting (simple version)
const rateLimiter = new Map()

export async function POST(request: Request) {
  const ip = request.headers.get('x-forwarded-for')
  
  // Check rate limit
  if (rateLimiter.has(ip)) {
    return new Response('Too many requests', { status: 429 })
  }
  
  rateLimiter.set(ip, true)
  setTimeout(() => rateLimiter.delete(ip), 60000) // 1 min
  
  // Process request...
}
```

### Form Security
1. **Honeypot**: Hidden field, bots fill it
2. **Time Trap**: Track form render time, reject instant submissions
3. **Server Validation**: Never trust client
4. **CSRF**: Next.js handles by default
5. **Rate Limiting**: Prevent abuse

## Key Technical Decisions

### Decision 1: App Router over Pages Router
**Why**: Better performance, React Server Components, improved DX

### Decision 2: TypeScript Required
**Why**: Type safety, better refactoring, fewer bugs

### Decision 3: Tailwind over CSS Modules
**Why**: Faster development, smaller bundle, consistent design

### Decision 4: MDX over Headless CMS (initially)
**Why**: Simpler, version controlled, no external dependencies

### Decision 5: Vercel over Traditional Hosting
**Why**: Native Next.js support, excellent DX, great performance

### Decision 6: Inline Scheduler Modal
**Why**: Better UX than new tab, maintains context, higher conversion

### Decision 7: No Backend Database (initially)
**Why**: Simpler, faster launch, forms go directly to CRM

## Future Considerations

### Phase 2 Enhancements
- Headless CMS (if blog grows)
- Backend API (if complex logic needed)
- A/B testing framework
- Advanced analytics (heatmaps, session replay)
- Client dashboard (if building custom portal)

### Scalability
- Current architecture handles 10K+ monthly visitors easily
- CDN caching helps with traffic spikes
- Static generation = low server load
- Can add ISR (Incremental Static Regeneration) if needed

