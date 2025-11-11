# FoxGlove CPA - Quick Start Guide

## 🚀 Get Running in 5 Minutes

### 1. Install Dependencies

```bash
npm install
```

### 2. Configure Environment Variables

```bash
# Copy the example file
cp .env.example .env.local
```

Edit `.env.local` with your actual values:

```bash
# Analytics (Optional for development)
NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX
NEXT_PUBLIC_GA4_ID=G-XXXXXXXXXX

# Calendly (Required for scheduler)
NEXT_PUBLIC_CALENDLY_URL=https://calendly.com/your-link/20min

# CRM Integration (Required for contact form)
CRM_WEBHOOK_URL=https://your-crm-webhook-url
CRM_API_KEY=your-api-key

# Email Service (Required for auto-replies)
EMAIL_API_KEY=your-email-api-key
EMAIL_FROM=hello@foxglove.cpa

# Site Configuration
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_SITE_NAME=FoxGlove CPA

# Contact Information
NEXT_PUBLIC_PHONE=(xxx) xxx-xxxx
NEXT_PUBLIC_EMAIL=hello@foxglove.cpa
NEXT_PUBLIC_ADDRESS=Tacoma, WA
```

### 3. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser!

## 📁 Project Structure

```
├── app/                    # Next.js pages (App Router)
│   ├── page.tsx           # Homepage
│   ├── services/          # Service pages
│   ├── industries/        # Industry pages
│   ├── articles/          # Blog system
│   └── api/               # API routes
├── components/            # Reusable components
│   ├── ui/               # Base UI components
│   ├── layout/           # Header, Footer
│   ├── home/             # Homepage sections
│   └── forms/            # Form components
├── lib/                   # Utilities
│   ├── analytics.ts      # Google Analytics
│   ├── seo.ts            # SEO helpers
│   ├── schemas.ts        # Form validation
│   └── articles.ts       # Blog utilities
├── content/              # MDX blog articles
└── public/               # Static assets
```

## 🎨 Customization

### Update Branding

1. **Logo**: Replace "FoxGlove CPA" text in `components/layout/header.tsx`
2. **Colors**: Edit `app/globals.css` (CSS variables)
3. **Fonts**: Update in `app/layout.tsx`

### Add Content

- **Blog Articles**: Add `.mdx` files to `content/articles/`
- **Images**: Add to `public/images/`
- **Downloads**: Add PDFs to `public/downloads/`

### Configure Forms

Forms currently log to console. To connect to your CRM:

1. Edit `app/api/contact/route.ts`
2. Uncomment CRM webhook code
3. Add your webhook URL to `.env.local`

## 🧪 Testing

```bash
# Build for production
npm run build

# Run production build
npm start

# Lint code
npm run lint

# Format code
npm run format
```

## 🚢 Deploy to Vercel

### One-Click Deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=YOUR_REPO_URL)

### Manual Deploy

```bash
# Install Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy
vercel

# Set environment variables in Vercel dashboard
vercel env add NEXT_PUBLIC_CALENDLY_URL
vercel env add CRM_WEBHOOK_URL
# ... add all other env vars

# Deploy to production
vercel --prod
```

### Configure Domain

1. Go to Vercel dashboard → Your project → Settings → Domains
2. Add your custom domain (e.g., foxglove.cpa)
3. Update DNS records as instructed
4. Update `NEXT_PUBLIC_SITE_URL` environment variable

## 📊 Analytics Setup

### Google Tag Manager

1. Create GTM account at tagmanager.google.com
2. Get your GTM ID (GTM-XXXXXXX)
3. Add to `.env.local` as `NEXT_PUBLIC_GTM_ID`

### Google Analytics 4

1. Create GA4 property
2. Get Measurement ID (G-XXXXXXXXXX)
3. Add to `.env.local` as `NEXT_PUBLIC_GA4_ID`
4. Configure events in GTM dashboard

## 🔧 Common Tasks

### Add a New Page

```bash
# Create file in app directory
touch app/new-page/page.tsx
```

### Add a New Blog Post

```bash
# Create MDX file with frontmatter
touch content/articles/new-post.mdx
```

### Update Contact Form

Edit `components/forms/contact-form.tsx`

### Change Header/Footer

- Header: `components/layout/header.tsx`
- Footer: `components/layout/footer.tsx`

## 🐛 Troubleshooting

### Port Already in Use

```bash
# Kill process on port 3000
npx kill-port 3000
npm run dev
```

### Build Errors

```bash
# Clear Next.js cache
rm -rf .next
npm run build
```

### Module Not Found

```bash
# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install
```

## 📞 Need Help?

- **Documentation**: See `memory-bank/` for detailed docs
- **Issues**: Check terminal output for error messages
- **Next.js Docs**: https://nextjs.org/docs

## ✅ Pre-Launch Checklist

- [ ] Add real logo
- [ ] Update contact information
- [ ] Configure Calendly URL
- [ ] Set up CRM webhook
- [ ] Add real client testimonials
- [ ] Test contact form submission
- [ ] Test scheduler modal
- [ ] Check mobile responsiveness
- [ ] Run Lighthouse audit
- [ ] Submit sitemap to Google Search Console

## 🎉 You're Ready!

The site is production-ready. Just configure your environment variables and deploy!

