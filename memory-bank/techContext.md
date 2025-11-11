# Technical Context: FoxGlove CPA Website

## Technology Stack

### Core Framework
**Next.js 14.x (App Router)**
- **Why**: Server-side rendering, excellent SEO, built-in optimizations
- **Benefits**:
  - React Server Components for performance
  - Built-in image optimization (WebP, lazy loading)
  - File-based routing
  - API routes for form handling
  - Metadata API for SEO
  - Great Core Web Vitals out of the box

### Language
**TypeScript 5.x**
- Type safety
- Better developer experience
- Catch errors at compile time

### Styling
**Tailwind CSS 3.x**
- Utility-first CSS
- Excellent for responsive design
- Small production bundle (purged unused styles)
- Easy to maintain consistent design system

### UI Components
**shadcn/ui + Radix UI**
- Accessible by default
- Customizable components
- No runtime overhead
- Copy/paste component library

### Form Handling
**React Hook Form + Zod**
- Performant form validation
- Type-safe schemas
- Built-in error handling
- Minimal re-renders

### Content Management
**MDX (Markdown + JSX)**
- For blog/articles
- Version controlled (Git)
- No external CMS needed for initial launch
- Can migrate to headless CMS later (Sanity, Contentful)

### Analytics
**Google Tag Manager + GA4**
- Tag management
- Custom event tracking
- Conversion tracking
- UTM parameter handling

### Scheduling
**Calendly Embed**
- Inline modal integration
- React component wrapper
- Event tracking integration

## Development Environment

### Required Tools
- Node.js 18.x or 20.x (LTS)
- npm or pnpm (package manager)
- Git
- VS Code (recommended)

### VS Code Extensions (Recommended)
- ESLint
- Prettier
- Tailwind CSS IntelliSense
- TypeScript Vue Plugin (Volar)

### Environment Variables
```
# Analytics
NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX
NEXT_PUBLIC_GA4_ID=G-XXXXXXXXXX

# Calendly
NEXT_PUBLIC_CALENDLY_URL=https://calendly.com/foxglove-cpa/20min-intro

# CRM Integration
CRM_WEBHOOK_URL=https://...
CRM_API_KEY=xxx

# Email
EMAIL_API_KEY=xxx (SendGrid, Postmark, etc.)
EMAIL_FROM=hello@foxglove.cpa

# Site Config
NEXT_PUBLIC_SITE_URL=https://foxglove.cpa
```

## Project Structure

```
foxglove-cpa/
├── app/                          # Next.js App Router
│   ├── layout.tsx               # Root layout (Header/Footer)
│   ├── page.tsx                 # Homepage
│   ├── globals.css              # Global styles
│   ├── services/
│   │   ├── page.tsx             # Services hub
│   │   ├── accounting/
│   │   ├── s-corp-analysis/
│   │   ├── tax-prep/
│   │   └── cleanup-migration/
│   ├── industries/
│   │   ├── page.tsx             # Industries hub
│   │   ├── contractors/
│   │   ├── clinics/
│   │   ├── coffee/
│   │   └── creative-agencies/
│   ├── articles/
│   │   ├── page.tsx             # Blog index
│   │   └── [slug]/
│   │       └── page.tsx         # Article template
│   ├── pricing/
│   ├── about/
│   ├── contact/
│   ├── data-security/
│   ├── portal/
│   ├── technology/
│   ├── privacy/
│   ├── terms/
│   ├── api/                     # API routes
│   │   ├── contact/
│   │   └── subscribe/
│   └── sitemap.ts               # Dynamic sitemap
├── components/
│   ├── ui/                      # Base UI components
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── input.tsx
│   │   └── ...
│   ├── layout/
│   │   ├── header.tsx
│   │   ├── footer.tsx
│   │   └── breadcrumbs.tsx
│   ├── forms/
│   │   ├── contact-form.tsx
│   │   └── newsletter-form.tsx
│   ├── scheduler-modal.tsx
│   ├── cta-section.tsx
│   ├── faq-section.tsx
│   └── ...
├── lib/
│   ├── analytics.ts             # GTM/GA4 helpers
│   ├── schemas.ts               # Zod validation schemas
│   ├── crm.ts                   # CRM integration
│   ├── email.ts                 # Email helpers
│   └── seo.ts                   # SEO utilities
├── content/
│   ├── articles/                # MDX blog posts
│   ├── faqs/                    # Reusable FAQ content
│   └── testimonials/            # Client quotes
├── public/
│   ├── images/
│   ├── logos/
│   ├── downloads/               # PDFs, etc.
│   └── fonts/
├── styles/
│   └── ...
├── types/
│   └── index.ts                 # TypeScript definitions
├── memory-bank/                 # Project documentation
├── .env.local                   # Local environment vars
├── .env.production              # Production env vars
├── next.config.js               # Next.js configuration
├── tailwind.config.js           # Tailwind configuration
├── tsconfig.json                # TypeScript configuration
└── package.json                 # Dependencies
```

## Key Dependencies

### Production Dependencies
```json
{
  "next": "^14.2.0",
  "react": "^18.3.0",
  "react-dom": "^18.3.0",
  "typescript": "^5.4.0",
  "@radix-ui/react-dialog": "^1.0.5",
  "@radix-ui/react-accordion": "^1.1.2",
  "react-hook-form": "^7.51.0",
  "zod": "^3.22.4",
  "next-mdx-remote": "^4.4.1",
  "react-calendly": "^4.3.0",
  "sharp": "^0.33.3"
}
```

### Development Dependencies
```json
{
  "tailwindcss": "^3.4.1",
  "eslint": "^8.57.0",
  "prettier": "^3.2.5",
  "@types/node": "^20.11.0",
  "@types/react": "^18.2.55"
}
```

## Performance Strategy

### Image Optimization
- Use Next.js `<Image>` component everywhere
- WebP format with fallbacks
- Lazy loading below fold
- Proper sizing (no oversized images)
- Priority loading for hero images
- Blur placeholder for better perceived performance

### Code Splitting
- Automatic with Next.js App Router
- Dynamic imports for heavy components (e.g., calculator)
- Server Components where possible

### Caching Strategy
```javascript
// next.config.js
module.exports = {
  async headers() {
    return [
      {
        source: '/images/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'no-cache, no-store, must-revalidate',
          },
        ],
      },
    ]
  }
}
```

### Font Loading
- Use `next/font` for optimal font loading
- Preload critical fonts
- Subset fonts (Latin only if applicable)

### Third-Party Scripts
- Load GTM with Next.js Script component
- Defer non-critical scripts
- Use `strategy="lazyOnload"` for Calendly

## SEO Implementation

### Metadata API (Next.js 14)
```typescript
// app/page.tsx example
export const metadata: Metadata = {
  title: 'Proactive Tax & Cash-Flow Coaching | FoxGlove CPA (Veteran-Owned, PNW)',
  description: 'Clear answers fast. Measurable savings. Veteran-owned CPA serving PNW founders.',
  openGraph: {
    title: '...',
    description: '...',
    images: ['/og-image.jpg'],
  },
}
```

### JSON-LD Schema
- Utility functions for generating schemas
- Organization schema on homepage
- LocalBusiness schema in footer
- Service schema on service pages
- FAQPage schema where FAQs exist
- Article schema on blog posts

### Sitemap Generation
- Dynamic sitemap.ts in app directory
- Auto-includes all routes
- Updates automatically with new articles

## Security Configuration

### Next.js Security Headers
```javascript
// next.config.js
{
  headers: [
    {
      key: 'Strict-Transport-Security',
      value: 'max-age=63072000; includeSubDomains; preload'
    },
    {
      key: 'X-Frame-Options',
      value: 'DENY'
    },
    {
      key: 'X-Content-Type-Options',
      value: 'nosniff'
    },
    {
      key: 'Referrer-Policy',
      value: 'origin-when-cross-origin'
    }
  ]
}
```

### Form Security
- Honeypot field (hidden, should stay empty)
- Time trap (minimum time before submission)
- Server-side validation (Zod schemas)
- Rate limiting on API routes
- CSRF protection (Next.js handles by default)

## CRM Integration

### Webhook Approach (Recommended)
```typescript
// app/api/contact/route.ts
export async function POST(request: Request) {
  // 1. Validate form data (Zod)
  // 2. Check honeypot & time trap
  // 3. Send to CRM webhook
  // 4. Send auto-reply email
  // 5. Return success
}
```

### Supported CRMs
- TaxDome (webhook)
- Canopy (API)
- HubSpot Free (forms API)
- Generic webhook (Zapier/Make)

## Deployment

### Recommended: Vercel
- Native Next.js support
- Automatic previews
- Edge network (fast globally)
- Easy environment variables
- Free SSL
- Excellent DX

### Alternative: Netlify
- Also supports Next.js
- Similar feature set

### Domain Configuration
- Point DNS to hosting provider
- Set up `www` redirect to apex (or vice versa)
- Force HTTPS
- Configure email (MX records)

## Local Development

### Setup Commands
```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linter
npm run lint

# Format code
npm run format
```

### Development URLs
- Local: http://localhost:3000
- Preview: Auto-generated by Vercel

## Testing Strategy

### Manual Testing
- Cross-browser (Chrome, Safari, Firefox, Edge)
- Cross-device (Desktop, tablet, mobile)
- Form submissions
- Analytics events
- Scheduler functionality

### Performance Testing
- Lighthouse CI
- Core Web Vitals monitoring
- Real User Monitoring (RUM)

### Accessibility Testing
- axe DevTools
- Keyboard navigation
- Screen reader (NVDA/JAWS)
- Color contrast

## Monitoring & Analytics

### Performance Monitoring
- Vercel Analytics (built-in)
- Google PageSpeed Insights
- Core Web Vitals report in GA4

### Error Tracking (Optional)
- Sentry
- LogRocket

### Analytics
- GA4 dashboard
- Custom events tracking
- Conversion funnel analysis
- Goal tracking (bookings, form submissions)

## Technical Constraints

### Browser Support
- Modern browsers (last 2 versions)
- iOS Safari 12+
- Android Chrome 90+
- No IE11 support needed

### Performance Budgets
- LCP: <2.5s (mobile)
- FID/INP: <200ms
- CLS: <0.1
- Total page weight: <1MB (initial load)
- JavaScript bundle: <200KB

### Accessibility Standards
- WCAG 2.1 AA minimum
- ARIA where needed
- Semantic HTML
- Keyboard navigation
- Screen reader compatible

