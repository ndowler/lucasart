# FoxGlove CPA Website

Veteran-owned CPA firm serving founders across the Pacific Northwest with proactive tax and cash-flow coaching.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI primitives
- **Forms**: React Hook Form + Zod
- **Content**: MDX for blog articles
- **Analytics**: Google Tag Manager + GA4
- **Deployment**: Vercel (recommended)

## Getting Started

### Prerequisites

- Node.js 18.x or 20.x (LTS)
- npm or pnpm

### Installation

```bash
# Install dependencies
npm install

# Copy environment variables
cp .env.example .env.local
# Then edit .env.local with your actual values

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Development Commands

```bash
# Development server
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

## Project Structure

```
├── app/                    # Next.js App Router pages
│   ├── layout.tsx         # Root layout (Header/Footer)
│   ├── page.tsx           # Homepage
│   ├── services/          # Service pages
│   ├── industries/        # Industry pages
│   ├── articles/          # Blog
│   ├── api/               # API routes
│   └── ...
├── components/            # Reusable components
│   ├── ui/               # Base UI components
│   ├── layout/           # Header, Footer, etc.
│   └── forms/            # Form components
├── lib/                   # Utilities and helpers
├── content/              # MDX content and data
├── public/               # Static assets
├── memory-bank/          # Project documentation
└── types/                # TypeScript definitions
```

## Documentation

Project documentation is maintained in the `memory-bank/` directory:

- **projectbrief.md** - Complete project requirements and scope
- **productContext.md** - UX strategy and user journeys
- **techContext.md** - Technology stack and dependencies
- **systemPatterns.md** - Architecture and design patterns
- **activeContext.md** - Current development focus
- **progress.md** - Implementation progress tracker

## Environment Variables

See `.env.example` for required environment variables. Key configurations:

- **Analytics**: GTM and GA4 tracking IDs
- **Calendly**: Scheduler embed URL
- **CRM**: Webhook URL and API key for form submissions
- **Email**: API key for auto-reply emails
- **Site**: Base URL and contact information

## Performance Targets

- **LCP**: <2.5s (mobile)
- **CLS**: <0.1
- **INP**: <200ms
- **Lighthouse Score**: >90

## Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Import repository in Vercel
3. Configure environment variables
4. Deploy

### Manual Deployment

```bash
npm run build
npm start
```

## License

Private - All rights reserved by FoxGlove CPA

## Contact

For questions about this project, contact the development team.

