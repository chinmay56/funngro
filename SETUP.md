# Quick Setup Guide

## Installation Steps

### 1. Install Dependencies
```bash
npm install
```

This will install:
- Next.js 15
- React 18
- TypeScript 5
- Tailwind CSS 3
- Framer Motion 11
- Lucide React (icons)

### 2. Run Development Server
```bash
npm run dev
```

Visit: http://localhost:3000

### 3. Build for Production
```bash
npm run build
npm start
```

## First-Time Setup Checklist

- [x] Dependencies installed
- [ ] Replace placeholder images in `/public`
- [ ] Update company contact information
- [ ] Customize brand colors in `tailwind.config.ts`
- [ ] Add Google Analytics tracking
- [ ] Update social media links
- [ ] Add real testimonials and success stories
- [ ] Configure email service for contact form
- [ ] Add actual app store links
- [ ] Set up domain and hosting

## Quick Customization

### Change Brand Colors
Edit `tailwind.config.ts`:
```typescript
colors: {
  primary: { 500: "#YOUR_COLOR" },
  accent: { 500: "#YOUR_COLOR" }
}
```

### Update Content
Main content files:
- Home: `components/home/`
- Teen page: `components/teens/`
- Company page: `components/companies/`

### Update Metadata (SEO)
- Global: `app/layout.tsx`
- Teen page: `app/teens/page.tsx`
- Company page: `app/companies/page.tsx`

## Deployment

### Deploy to Vercel (Easiest)
1. Push code to GitHub
2. Import project on Vercel
3. Auto-deploys on every push

### Manual Deployment
1. Build: `npm run build`
2. Upload `.next`, `public`, `package.json`
3. Run: `npm start`

## Troubleshooting

### Build Errors
```bash
rm -rf node_modules .next
npm install
npm run build
```

### TypeScript Errors
```bash
npm run lint
```

### Port Already in Use
```bash
npm run dev -- -p 3001
```

## Need Help?

Check:
- `README.md` for detailed documentation
- Next.js docs: https://nextjs.org/docs
- Tailwind docs: https://tailwindcss.com/docs
- Framer Motion: https://www.framer.com/motion/

---

Ready to launch! 🚀
