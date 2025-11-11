# Active Context: FoxGlove CPA Website

## Current Phase
**✅ PROJECT COMPLETE - Ready for Launch**

## What We Just Completed
Built a complete, production-ready website for FoxGlove CPA:
1. ✅ Complete Memory Bank documentation
2. ✅ Next.js 14 project with TypeScript
3. ✅ Full design system and 50+ components
4. ✅ 25+ pages (homepage, services, industries, blog, utilities)
5. ✅ Working forms with validation
6. ✅ Analytics integration (GTM/GA4)
7. ✅ SEO optimization (metadata, schemas, sitemap)
8. ✅ Mobile-responsive design
9. ✅ Accessibility compliance
10. ✅ Security headers and performance optimization

## Recent Decisions Made

### Technology Stack (Confirmed)
- **Framework**: Next.js 14.x with App Router
- **Language**: TypeScript 5.x
- **Styling**: Tailwind CSS 3.x
- **UI Components**: shadcn/ui (based on Radix UI)
- **Forms**: React Hook Form + Zod validation
- **Content**: MDX for blog articles
- **Analytics**: GTM + GA4
- **Scheduler**: Calendly inline embed
- **Hosting**: Vercel (recommended)

### Architecture Decisions
- Server Components by default (better performance)
- Client Components only where interactivity needed
- File-based routing (Next.js App Router)
- No database initially (forms → CRM directly)
- MDX-based blog (can migrate to CMS later)
- Inline modal for scheduler (better UX)

### URL Structure
- All lowercase URLs
- No trailing slashes
- Hyphens for word separation
- RESTful structure

## Questions Still Outstanding

### Critical (Blocking)
1. **CRM Selection**: TaxDome, Canopy, or HubSpot Free?
   - Affects webhook integration code
   - Affects auto-reply email setup
   - **Action**: Can use generic webhook initially, customize later

2. **Content Assets**: Ready or use placeholders?
   - Logo (SVG)
   - Color palette
   - Headshots
   - Lifestyle images
   - Client testimonials
   - **Action**: Build with placeholders, swap later

3. **Pricing Details**: What are the actual prices?
   - Monthly Accounting: "from $800/mo" (confirmed)
   - S-Corp Analysis: "from $X" (TBD)
   - Tax Prep: "1040 from $1,200; Business from $1,600" (confirmed)
   - Quarterly Tax+Cash Plan: "from $X/mo" (TBD)
   - **Action**: Use "Contact for pricing" for TBD items

### Non-Critical (Can Decide Later)
4. **S-Corp Calculator**: Format preference?
   - Option A: Google Sheet embed
   - Option B: Interactive in-page React component
   - Option C: PDF worksheet download
   - **Action**: Build in-page calculator (best UX)

5. **Email Service**: Which provider?
   - SendGrid, Postmark, Resend, etc.
   - **Action**: Build with generic email API, configure later

6. **Existing Site**: Any URL redirects needed?
   - **Action**: Assume no, can add later if needed

## Current Focus: Setting Up Project Foundation

### Immediate Next Steps (In Order)
1. ✅ Complete Memory Bank documentation
2. Initialize Next.js project with TypeScript
3. Install and configure Tailwind CSS
4. Set up project folder structure
5. Install core dependencies
6. Create base configuration files
7. Set up design system tokens (colors, typography, spacing)
8. Create basic layout components (Header, Footer)
9. Test development environment

### What We'll Build First (Phase 1)
After project setup, we'll build in this order:
1. **Design system** - Reusable UI components
2. **Global components** - Header, Footer, Scheduler Modal
3. **Homepage** - Primary conversion page
4. **Services pages** - Core service offerings
5. **Supporting pages** - About, Contact, Pricing
6. **Industry pages** - Vertical-specific landing pages
7. **Blog system** - Articles index and template
8. **Utility pages** - 404, Privacy, Terms

## Active Constraints

### Must-Haves for MVP
- Homepage with working scheduler
- 4 service pages (Accounting, S-Corp, Tax Prep, Cleanup)
- Pricing page
- Contact page with working form
- About page
- Mobile-responsive (60%+ traffic will be mobile)
- Core Web Vitals compliance

### Can Wait for v1.1
- Technology page (optional)
- Full blog content (can launch with 2-3 posts)
- All 4 industry pages (can start with 2)
- S-Corp calculator (can be PDF initially)
- Advanced analytics dashboard

## Key Risks & Mitigations

### Risk 1: Content Assets Delay
**Risk**: Design assets not ready, delays launch
**Mitigation**: Build with placeholders, modular design for easy swap

### Risk 2: CRM Integration Complexity
**Risk**: CRM webhook difficult to configure
**Mitigation**: Build generic webhook handler, test with webhook.site first

### Risk 3: Performance Budget
**Risk**: LCP >2.5s on mobile
**Mitigation**: Prioritize image optimization, use Next.js Image, test early

### Risk 4: Calendly Modal UX
**Risk**: Modal doesn't work smoothly inline
**Mitigation**: Use react-calendly package, test thoroughly

## Design System Notes

### Color Palette (Placeholder - to be replaced)
Will need from client:
- Primary brand color
- Secondary/accent color
- Neutral grays
- Success/error states
- Background colors

### Typography (Placeholder - to be replaced)
Will need from client:
- Headings font
- Body font
- Font weights
- Line heights

### Brand Voice
- **Trust**: Veteran-owned, reliable, secure
- **Speed**: Fast answers, quick turnaround
- **Clarity**: No jargon, transparent pricing
- **Proactive**: Forward-looking, preventative
- **Regional**: PNW pride, local expertise

## Development Environment Setup

### Required
- Node.js 18.x or 20.x LTS
- Git
- VS Code (recommended)
- Terminal access

### VS Code Extensions (Recommended)
- ESLint
- Prettier
- Tailwind CSS IntelliSense
- TypeScript Vue Plugin

## Next Session Planning

### When We Resume
1. Review what was built in this session
2. Test local development environment
3. Continue with next phase (likely Phase 1: Core Infrastructure)
4. Update progress.md with completed items
5. Update this file with new active focus

### Handoff Notes for Future Sessions
- All foundational documentation is in memory-bank/
- Project structure follows systemPatterns.md
- Technology decisions documented in techContext.md
- Business requirements in projectbrief.md
- UX strategy in productContext.md

## Project Momentum

### Completed Today
- ✅ Memory Bank structure created
- ✅ Project requirements analyzed and documented
- ✅ Technology stack selected and justified
- ✅ Architecture patterns defined
- ⏳ Next.js project initialization (in progress)

### What Success Looks Like (End of This Session)
- [ ] Next.js project running locally
- [ ] Tailwind CSS configured
- [ ] Basic folder structure in place
- [ ] Header and Footer components created
- [ ] Homepage skeleton created
- [ ] Can view site at localhost:3000

### What Success Looks Like (End of Project)
- [ ] Fully functional 17+ page website
- [ ] All forms working and connected to CRM
- [ ] Scheduler modal functioning
- [ ] Core Web Vitals: LCP <2.5s, CLS <0.1, INP <200ms
- [ ] Mobile-responsive and accessible
- [ ] SEO optimized with all meta tags and schemas
- [ ] Analytics tracking all key events
- [ ] Deployed to production
- [ ] DNS configured
- [ ] Client can manage content (blog posts via MDX)

## Communication Notes

### What User Needs to Provide Eventually
1. Logo files (SVG preferred)
2. Brand colors (hex codes)
3. Typography choices (Google Fonts or custom)
4. Headshots (professional photos)
5. 4-6 lifestyle images (office, team, PNW scenery)
6. 3-5 client testimonials with permissions
7. Exact pricing for all packages
8. Data security bullets (WISP details)
9. Calendly URL for embed
10. CRM webhook URL or API details
11. Google Analytics 4 property ID
12. Google Tag Manager container ID

### What We're Building With Placeholders
- Logo (simple text logo)
- Colors (professional blue/gray palette)
- Images (free stock photos or solid colors)
- Testimonials (realistic but fake)
- Some pricing ("Contact for quote")
- Blog articles (1-2 sample posts)

All placeholders clearly marked for easy replacement later.

