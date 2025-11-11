# Product Context: FoxGlove CPA Website

## Why This Project Exists

### The Problem
Young founders in the Pacific Northwest face several challenges with traditional accounting services:
1. **Reactive vs. Proactive**: Most CPAs only provide historical reporting, not forward-looking tax and cash-flow planning
2. **Trust Gap**: Founders worry about data security and offshore labor
3. **Pricing Opacity**: Hidden fees and unclear scopes create anxiety
4. **Slow Communication**: Traditional firms are slow to respond
5. **Generic Advice**: Lack of industry-specific or regional (WA/OR) expertise
6. **High Barrier to Entry**: Difficulty finding the right accountant for early-stage businesses

### The Solution
FoxGlove CPA differentiates through:
1. **Proactive Planning**: Quarterly tax plans and owner pay strategies
2. **Veteran Trust**: Military background builds credibility and trustworthiness
3. **Transparent Pricing**: Clear minimums published on website
4. **Fast Response**: "Clear answers fast" positioning
5. **Regional Expertise**: WA/OR-specific tax optimization (e.g., S-Corp analysis)
6. **Low-Friction Entry**: Easy 20-min intro calls, no commitment

## User Journey

### Primary Persona: "Sarah - Coffee Shop Owner"
- **Age**: 28-42
- **Business**: Coffee shop in Seattle, 8 employees
- **Pain**: Overwhelmed by quarterly taxes, unsure about owner pay
- **Goal**: Keep more cash, avoid tax surprises, understand S-Corp benefits
- **Concerns**: Cost, time commitment, trustworthiness

### User Journey Map

```
AWARENESS → CONSIDERATION → DECISION → ACTION → RETENTION

1. AWARENESS
   - Finds site via Google search "Seattle small business CPA"
   - Sees Reddit post recommendation
   - LinkedIn ad targeting PNW founders

2. CONSIDERATION (Homepage → Services)
   - Lands on homepage
   - Sees veteran-owned badge → trust increase
   - Reads "Proactive tax + cash flow" promise
   - Clicks "Quarterly Tax + Cash Plan" package
   - Navigates to /services/accounting for details
   - Checks /pricing for transparency
   - Reads /about to learn founder story

3. DECISION (Pricing → About → Contact)
   - Reviews pricing: "$800/mo starting" feels reasonable
   - Reads veteran story → emotional connection
   - Looks for proof: client quotes with metrics
   - Checks /data-security page → US-only reassures
   - Still uncertain: reads 2-3 blog articles
   - Checks /industries/coffee for specific expertise

4. ACTION
   - Decides to book intro call
   - Clicks "Book a 20-min intro" in header
   - Calendly modal opens inline
   - Selects time slot
   - Receives confirmation email
   - GA4 logs scheduler_submit event

5. RETENTION (Post-Conversion)
   - Attends intro call
   - Receives proposal
   - Signs up for service
   - Uses /portal for ongoing communication
   - Subscribes to monthly newsletter
   - Refers colleague in construction industry
```

## How It Should Work

### Critical User Experience Principles

#### 1. Friction Reduction
- **One-click scheduling**: Header CTA always visible, modal opens instantly
- **No gatekeeping**: Pricing published openly
- **Fast forms**: 4 fields maximum on contact forms
- **Mobile-first**: 60%+ of founders will browse on mobile

#### 2. Trust Building
- **Veteran badge**: Prominent on homepage, header, footer
- **Transparency**: Pricing visible, no "call for quote"
- **Security**: US-only data handling emphasized
- **Proof**: Real client quotes with metrics
- **Credentials**: QBO ProAdvisor, WISP badges

#### 3. Speed & Performance
- **Instant Load**: Hero + CTA visible <1.5s on mobile
- **No Janky**: CLS <0.1, no layout shifts
- **Fast Interactions**: Forms submit <500ms, modals open <100ms

#### 4. Education-First
- **Blog as Trust**: Articles position as expert educator
- **Calculators**: S-Corp calculator provides immediate value
- **Clear Explanations**: "Who it's for / Not for" sections set expectations
- **Industry-Specific**: Show you understand their specific business

### Conversion Paths

#### Primary Path: Homepage → Schedule
```
Homepage → CTA click → Modal → Schedule → Conversion
Success Rate Goal: 3-5% of visitors
```

#### Secondary Path: Service Education
```
Homepage → Services → Specific Service → Learn → Pricing → Schedule
Success Rate Goal: 8-12% of service page visitors
```

#### Tertiary Path: Content Marketing
```
Google → Blog Article → Related Articles → Service Page → Schedule
Success Rate Goal: 5-8% of blog visitors
```

#### Industry-Specific Path
```
Google → Industry Page → Service Page → Pricing → Schedule
Success Rate Goal: 10-15% of industry page visitors
```

### Content Strategy

#### Homepage
- **Goal**: Communicate value + trust in <10 seconds
- **Emotional Hook**: Veteran-owned + proactive tax planning
- **Rational Hook**: Transparent pricing + PNW expertise
- **Action**: Schedule 20-min intro

#### Service Pages
- **Goal**: Educate on specific deliverables and process
- **Format**: 
  - Who it's for (qualify in)
  - Who it's not for (qualify out)
  - What you get (specific deliverables)
  - How it works (3-step process)
  - What it costs (starting price)
  - Proof (mini case)
  - FAQs (objection handling)

#### Pricing Page
- **Goal**: Remove pricing anxiety, encourage call
- **Strategy**: Show starting prices, explain what increases cost
- **Outcome**: Visitor feels informed, not surprised

#### Industry Pages
- **Goal**: "They understand MY business"
- **Strategy**: Industry-specific pain points + outcomes + mini case
- **Outcome**: Visitor feels seen, trusts expertise

#### Blog/Articles
- **Goal**: SEO + education + email capture
- **Topics**: 
  - S-Corp election timing
  - Owner W-2 vs. distributions
  - Quarterly tax planning
  - WA vs. OR tax differences
  - Industry-specific tax moves
- **Outcome**: Position as educator, capture email for nurture

### Key Interactions

#### Scheduler Modal (Critical)
- Opens inline (no new tab)
- Maintains context (doesn't lose place on page)
- Easy to close and return
- Pre-fills from contact form if coming from there
- Triggers `scheduler_submit` event

#### Contact Form
- 4 fields only (no friction)
- "What's your biggest finance headache?" qualifies lead
- Honeypot + time trap prevents spam
- Instant success message
- Auto-reply with scheduler link
- Triggers `contact_form_submit` event

#### S-Corp Calculator
- Provides immediate value
- Simple inputs: revenue, current structure, state
- Shows potential savings
- CTA: "See if S-Corp makes sense for you" → Schedule consult
- Email gate optional (get result first, then offer deeper report for email)

### Mobile Experience (60%+ of traffic)

#### Must-Haves
- H1 + CTA visible without scroll
- Tap targets ≥44px
- Sticky header on scroll (optional)
- Forms: single column, large inputs
- Tables: horizontal scroll or accordion on mobile
- Images: fast load, proper aspect ratios

#### Nice-to-Haves
- Click-to-call phone number
- Sticky CTA bar on mobile (consider for service pages)
- Progressive form saving (localStorage)

## User Experience Goals

### Emotional Goals
1. **Feel Trust**: "This is a veteran-owned business with military values"
2. **Feel Clarity**: "I understand what I'll get and what it costs"
3. **Feel Speed**: "This site is fast, modern, and easy to use"
4. **Feel Seen**: "They understand my industry and my stage"
5. **Feel Safe**: "My data is secure and stays in the US"

### Functional Goals
1. **Quick Booking**: Schedule intro call in <60 seconds
2. **Easy Research**: Find pricing and service details in <3 clicks
3. **Learn Something**: Read valuable content without friction
4. **Get Value First**: Use calculator without email gate
5. **Mobile Ease**: Full experience works perfectly on phone

### Business Goals
1. **Generate Qualified Leads**: 20-min intro call bookings
2. **Build Email List**: Newsletter subscribers for nurture
3. **Position as Expert**: Blog content drives SEO + authority
4. **Filter Fit**: "Not for" sections qualify out bad fits
5. **Regional Dominance**: Rank #1 for "PNW CPA", "Seattle small business accountant", etc.
6. **Referral Engine**: Happy clients share with founder friends

## Success Criteria

### Qualitative
- "The site made me feel confident booking a call"
- "I loved the transparent pricing"
- "The veteran-owned aspect mattered to me"
- "The blog articles were actually helpful"

### Quantitative
- 3-5% homepage → schedule conversion
- 8-12% service page → schedule conversion
- <3 clicks average to pricing info
- <10 seconds to find CTA
- 0% form spam (thanks to honeypot)
- <2.5s LCP on mobile
- 4+ pages per session for engaged visitors

