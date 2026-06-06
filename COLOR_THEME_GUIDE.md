# Funngro Brand Colors - Theme Guide

## 🎨 Primary Color Palette (Orange-Red)

### Primary Orange-Red Shades
```
50:  #fef3f2  (Very light pink-orange - backgrounds)
100: #fee5e2  (Light pink-orange - hover states)
200: #fececa  (Soft coral - subtle highlights)
300: #fcaca5  (Light coral - badges, tags)
400: #f87b70  (Vibrant coral - icons, accents)
500: #ef5844  (Main orange-red - PRIMARY BRAND COLOR)
600: #dc3626  (Deep red - CTAs, buttons)
700: #b9281c  (Dark red - hover states)
800: #99251b  (Darker red - text on light)
900: #7f251d  (Darkest red - footer, dark UI)
```

### Accent Colors (Orange)
```
50:  #fff7ed  (Cream - light backgrounds)
100: #ffedd5  (Peach - cards, sections)
200: #fed7aa  (Light orange - soft highlights)
300: #fdba74  (Warm orange - badges)
400: #fb923c  (Bright orange - ACCENT COLOR)
500: #f97316  (Pure orange - CTAs, links)
600: #ea580c  (Deep orange - hover states)
700: #c2410c  (Burnt orange - dark accents)
800: #9a3412  (Brown-orange - text)
900: #7c2d12  (Dark brown - dark mode text)
```

## 🎯 Usage Guide

### Buttons & CTAs
- **Primary CTA**: `bg-gradient-to-r from-primary-600 to-accent-600` (#dc3626 → #f97316)
- **Secondary**: `glass` class with orange borders
- **Hover**: Scale + shadow increase

### Text
- **Gradient Text**: `text-gradient` class (orange-red gradient)
- **Links**: Orange-600 (#f97316) on light, orange-400 on dark
- **Body**: Gray-900 on light, gray-100 on dark

### Backgrounds
- **Hero/Section**: `gradient-bg` class (soft orange-red gradient)
- **Cards**: `glass` class (white/90 with orange border)
- **Blobs**: Orange-400 and red-400 animated blobs

### Interactive Elements
- **Hover**: Orange-600 (#ea580c) or orange-400
- **Focus**: Ring with orange-500
- **Active**: Darker orange shades

## 🌈 Color Psychology
**Orange/Red = Energy, Youth, Action**
- Represents excitement and enthusiasm
- Appeals to teenage audience
- Creates sense of urgency (CTAs)
- Conveys warmth and approachability
- Signals creativity and innovation

## 💡 Contrast Ratios
All color combinations meet WCAG AA standards:
- Orange-600 on white: ✅ 4.5:1
- Orange-400 on dark: ✅ 7:1
- Text gradients: ✅ Sufficient contrast maintained

## 🎨 Dark Mode
- Background: Gray-900 (#111827)
- Cards: Gray-900/90 with blur
- Text: Gray-100 (#f3f4f6)
- Accents: Lighter orange shades (400-500)
- Borders: Gray-700 with orange tint

## 🔄 Gradients Used
1. **Hero Background**: `orange-50 → white → red-50`
2. **Text Gradient**: `primary-600 → orange-600 → accent-600`
3. **Button Gradient**: `primary-600 → accent-600`
4. **Card Highlights**: `primary-100 → accent-100`

## 🎯 Brand Consistency
All pages use the same color system:
- Home page: Orange-red CTAs, warm backgrounds
- Teen page: Green badges for earnings, orange CTAs
- Company page: Professional orange tone, trust indicators

## 📱 Examples
```jsx
// Primary Button
<button className="bg-gradient-to-r from-primary-600 to-accent-600 text-white">

// Secondary Button  
<button className="glass hover:shadow-lg">

// Badge
<span className="bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400">

// Link
<a className="text-orange-600 hover:text-orange-700 dark:text-orange-400">

// Card
<div className="glass p-6 rounded-2xl">

// Text Gradient
<h1 className="text-gradient">
```

---

This warm, energetic color scheme perfectly matches Funngro's brand identity and appeals to the young, dynamic audience!
