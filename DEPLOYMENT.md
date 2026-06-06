# Deployment Guide

## Pre-Deployment Checklist

### Essential Updates
- [ ] Replace all placeholder images in `/public` folder
- [ ] Update contact information in Footer and ContactForm
- [ ] Add real testimonials and success stories
- [ ] Update company statistics with actual numbers
- [ ] Configure analytics (Google Analytics, etc.)
- [ ] Add real app store links
- [ ] Update social media links
- [ ] Test all forms and interactive elements
- [ ] Verify all links work correctly
- [ ] Test on multiple devices and browsers

### SEO Optimization
- [ ] Update meta descriptions for all pages
- [ ] Add Open Graph images (`og-image.jpg`, `og-teens.jpg`, `og-companies.jpg`)
- [ ] Verify structured data with Google Rich Results Test
- [ ] Submit sitemap to Google Search Console
- [ ] Set up Google Analytics
- [ ] Configure Google Tag Manager (optional)
- [ ] Add schema markup verification

### Performance Check
- [ ] Run Lighthouse audit (target: 95+ score)
- [ ] Optimize images (use WebP format)
- [ ] Enable Gzip/Brotli compression
- [ ] Set up CDN for static assets
- [ ] Configure caching headers

---

## Deployment Options

### Option 1: Vercel (Recommended) ⭐

**Why Vercel?**
- Built by Next.js creators
- Zero configuration
- Automatic deployments
- Edge network
- Free SSL
- Perfect for Next.js apps

**Steps:**

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin YOUR_GITHUB_URL
   git push -u origin main
   ```

2. **Deploy to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "Import Project"
   - Select your GitHub repository
   - Configure project:
     - Framework: Next.js
     - Build command: `npm run build`
     - Output directory: `.next`
   - Click "Deploy"

3. **Configure Domain**
   - Go to Project Settings → Domains
   - Add your custom domain: `funngro.com`
   - Update DNS records as shown

4. **Environment Variables**
   - Go to Project Settings → Environment Variables
   - Add all variables from `.env.example`

**Post-Deployment:**
```bash
# For subsequent deployments, just push to main:
git push origin main
# Vercel auto-deploys!
```

---

### Option 2: Netlify

**Steps:**

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy to Netlify**
   - Go to [netlify.com](https://netlify.com)
   - Click "Add new site" → "Import from Git"
   - Connect GitHub repository
   - Configure:
     - Build command: `npm run build`
     - Publish directory: `.next`
     - Add environment variables

3. **Configure Domain**
   - Go to Domain settings
   - Add custom domain
   - Configure DNS

---

### Option 3: AWS Amplify

**Steps:**

1. **Install AWS Amplify CLI**
   ```bash
   npm install -g @aws-amplify/cli
   ```

2. **Initialize Amplify**
   ```bash
   amplify init
   ```

3. **Deploy**
   ```bash
   amplify add hosting
   amplify publish
   ```

---

### Option 4: Self-Hosted (VPS/Dedicated Server)

**Requirements:**
- Node.js 18+
- PM2 or similar process manager
- Nginx or Apache
- SSL certificate (Let's Encrypt)

**Steps:**

1. **Build the application**
   ```bash
   npm run build
   ```

2. **Transfer files to server**
   ```bash
   scp -r .next public package.json your-server:/var/www/funngro
   ```

3. **Install dependencies on server**
   ```bash
   ssh your-server
   cd /var/www/funngro
   npm install --production
   ```

4. **Set up PM2**
   ```bash
   npm install -g pm2
   pm2 start npm --name "funngro" -- start
   pm2 save
   pm2 startup
   ```

5. **Configure Nginx**
   ```nginx
   server {
       listen 80;
       server_name funngro.com;

       location / {
           proxy_pass http://localhost:3000;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_cache_bypass $http_upgrade;
       }
   }
   ```

6. **Set up SSL with Let's Encrypt**
   ```bash
   sudo certbot --nginx -d funngro.com -d www.funngro.com
   ```

---

## Post-Deployment Tasks

### 1. Configure Analytics

**Google Analytics:**
```typescript
// Add to app/layout.tsx
<Script
  src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
  strategy="afterInteractive"
/>
```

### 2. Set Up Search Console

1. Go to [Google Search Console](https://search.google.com/search-console)
2. Add property: `funngro.com`
3. Verify ownership
4. Submit sitemap: `https://funngro.com/sitemap.xml`

### 3. Configure Email Service

For contact form to work:
- Set up SendGrid, AWS SES, or similar
- Add API keys to environment variables
- Create API route for form submission

### 4. Set Up Monitoring

**Vercel Analytics:**
- Enable in Vercel dashboard
- Free for hobby projects

**Alternative: Google Analytics**
- Add tracking code
- Set up conversion goals

### 5. Social Media

- Create og-image.jpg (1200x630px)
- Test with [Facebook Debugger](https://developers.facebook.com/tools/debug/)
- Test with [Twitter Card Validator](https://cards-dev.twitter.com/validator)

---

## Performance Optimization

### Image Optimization

```bash
# Install sharp for automatic optimization
npm install sharp
```

### Enable Compression

**Vercel/Netlify:** Automatic

**Self-hosted:** Add to nginx.conf
```nginx
gzip on;
gzip_vary on;
gzip_types text/plain text/css application/json application/javascript;
```

### CDN Configuration

- Add Cloudflare for additional CDN
- Configure caching rules
- Enable Brotli compression

---

## Monitoring & Maintenance

### Regular Tasks

- Monitor Lighthouse scores weekly
- Check error logs daily
- Update dependencies monthly
- Backup database regularly
- Monitor uptime (UptimeRobot, Pingdom)

### Security

- Keep dependencies updated
- Use HTTPS everywhere
- Set security headers
- Regular security audits
- Rate limiting on forms

---

## Rollback Plan

### Vercel
```bash
# Rollback to previous deployment
vercel rollback
```

### Self-hosted
```bash
# Keep previous builds
pm2 start npm --name "funngro-backup" -- start
```

---

## Support & Resources

### Documentation
- [Next.js Docs](https://nextjs.org/docs)
- [Vercel Docs](https://vercel.com/docs)
- [Tailwind Docs](https://tailwindcss.com/docs)

### Community
- [Next.js Discord](https://nextjs.org/discord)
- [Vercel Community](https://github.com/vercel/next.js/discussions)

---

## Estimated Costs

### Vercel
- **Hobby**: $0/month (perfect for starting)
- **Pro**: $20/month (commercial use)

### Self-hosted
- **VPS**: $5-20/month (DigitalOcean, Linode)
- **Domain**: $10-15/year
- **SSL**: Free (Let's Encrypt)

---

Ready to deploy! 🚀

For issues, check logs or contact support.
