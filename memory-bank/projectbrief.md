# Project Brief: FoxGlove CPA Website

## Project Overview
Building a comprehensive, high-performance marketing website for FoxGlove CPA - a veteran-owned accounting firm serving young founders across the Pacific Northwest (Washington & Oregon).

## Core Business Information
- **Business Name**: FoxGlove CPA
- **Location**: Tacoma, WA
- **Service Area**: Washington & Oregon (Pacific Northwest)
- **Business Type**: Veteran-owned CPA firm
- **Target Market**: Young PNW founders (1-75 employees)
  - Contractors
  - Clinics
  - Coffee/Food businesses
  - Creative agencies
  - E-commerce
  - SaaS

## Core Value Proposition
Veteran-owned CPA delivering proactive tax + cash-flow coaching with fast, clear answers.

## Project Goals
1. Generate qualified intro calls (20-min discovery meetings)
2. Establish trust through veteran credentials and transparency
3. Educate prospects on proactive tax planning and cash flow management
4. Provide clear, transparent pricing
5. Demonstrate industry-specific expertise
6. Capture email subscribers through valuable content

## Site Structure (17+ pages)

### Core Pages
1. **Home** (`/`) - Primary conversion page
2. **Services Hub** (`/services`) - Service directory
3. **Pricing** (`/pricing`) - Transparent pricing page
4. **About** (`/about`) - Veteran story & credentials
5. **Contact** (`/contact`) - Contact form + map
6. **Data Security** (`/data-security`) - Trust & compliance
7. **Client Portal** (`/portal`) - Portal entry point

### Service Pages
8. **Accounting & Monthly Books** (`/services/accounting`)
9. **S-Corp Analysis** (`/services/s-corp-analysis`)
10. **Tax Preparation** (`/services/tax-prep`)
11. **Cleanup & Migration** (`/services/cleanup-migration`)

### Industry Pages
12. **Industries Hub** (`/industries`)
13. **Contractors** (`/industries/contractors`)
14. **Clinics** (`/industries/clinics`)
15. **Coffee/Food** (`/industries/coffee`)
16. **Creative Agencies** (`/industries/creative-agencies`)

### Content/Blog
17. **Articles Index** (`/articles`)
18. **Article Template** (`/articles/[slug]`)

### Utility
19. **Technology** (`/technology`) - Optional
20. **404 Page**
21. **Privacy Policy** (`/privacy`)
22. **Terms of Service** (`/terms`)

## Key Features

### Primary CTA
- **"Book a 20-min intro"** button persistent in header
- Opens inline Calendly modal (not new window)
- Available on all pages

### Form System
- Contact forms with spam protection (honeypot + time trap)
- Fields: name, email, business name, "What's your biggest finance headache?"
- CRM integration via webhook/Zapier/Make
- Auto-reply email with scheduler link
- Inline success confirmation

### S-Corp Calculator
- Interactive tool for S-Corp election analysis
- WA/OR specific calculations
- Lead capture mechanism

### Email Capture
- Monthly newsletter: "PNW Founder Finance Field Notes"
- Integrated on blog/articles pages

### Analytics & Tracking
- GTM + GA4 implementation
- Custom events:
  - `book_meeting_click`
  - `scheduler_submit`
  - `contact_form_submit`
  - `phone_click`
  - `email_click`
  - `portal_click`
  - `download_ready_checklist`
- UTM parameter preservation

## Technical Requirements

### Performance Budgets (Core Web Vitals)
- **LCP**: <2.5s (mobile & desktop)
- **CLS**: <0.1
- **INP**: <200ms (mobile)

### Image Requirements
- Format: WebP preferred
- Lazy loading below the fold
- Hero images <200KB
- Responsive srcsets

### SEO Requirements
- Server-side rendering (SSR)
- Title format: "{Primary Keyword} | FoxGlove CPA (Veteran-Owned, PNW)"
- Meta descriptions: 140-160 characters, action-oriented
- Canonical URLs on every page
- JSON-LD Schema:
  - Organization (homepage)
  - LocalBusiness (footer/contact)
  - Service (service pages)
  - FAQPage (FAQ sections)
  - Article (blog posts)
- OpenGraph & Twitter cards (1200×630 share images)
- Sitemap.xml
- Robots.txt

### Security Requirements
- Force HTTPS
- HSTS headers
- Minimal third-party scripts
- US-only data handling
- WISP (Written Information Security Policy) maintained
- No offshore labor

### Accessibility Requirements
- Mobile-first responsive design
- WCAG AA+ color contrast
- Semantic HTML
- Minimum 44px tap targets
- Alt text on all images
- Proper form labels
- Keyboard navigation support

### Caching Strategy
- Long-cache hashed assets
- HTML no-cache
- CDN for static assets

## Key Packages/Services

### Three Main Offerings
1. **Founders' First-Year Bundle**
   - Entity setup, clean books, payroll, quarterly tax plan
   - Starting at $800/mo

2. **Quarterly "Tax + Cash" Plan**
   - Close/forecast, tax moves, owner pay strategy
   - From $X/mo (TBD)

3. **S-Corp Analysis**
   - WA/OR-specific comp & tax modeling
   - From $X (TBD)
   - Credited toward monthly if signed within 30 days

## Content Assets Needed
- [ ] Logo (SVG format)
- [ ] Color palette & typography
- [ ] 1-2 headshots
- [ ] 4-6 lifestyle/office images (PNW vibe)
- [ ] Badges (Veteran-Owned, QBO ProAdvisor, etc.)
- [ ] 3-5 client testimonials with permissions
- [ ] Pricing details for each package
- [ ] "Ready checklist" PDF for tax prep
- [ ] Data Security/WISP summary bullets
- [ ] S-Corp calculator logic/requirements

## Integration Points
- **CRM**: TaxDome/Canopy/HubSpot Free (webhook integration)
- **Scheduler**: Calendly (inline embed)
- **Email**: Auto-reply system for form submissions
- **Analytics**: Google Tag Manager + GA4
- **Portal**: Third-party secure client portal (TaxDome/Canopy)

## Success Metrics
1. 20-min intro call bookings
2. Contact form submissions
3. Time on site / pages per session
4. Email newsletter signups
5. Core Web Vitals scores
6. Organic search rankings
7. Mobile conversion rate

## Brand Positioning
- **Trust**: Veteran-owned, US-only data handling
- **Speed**: Fast, clear answers
- **Proactive**: Quarterly planning vs. reactive
- **Regional**: PNW-specific expertise
- **Transparent**: Clear pricing, no surprises
- **Modern**: Tech-forward tools and communication

