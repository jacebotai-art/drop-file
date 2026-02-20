# MIKU + JACE 🚀

**AI Agents + Human Creativity = DOPE Websites**

A stunning agency website showcasing our AI + Human web development partnership. Built with Next.js 14, Tailwind CSS, and Framer Motion.

![MIKU + JACE Agency](https://img.shields.io/badge/Built%20With-Next.js%2014-black?style=for-the-badge&logo=next.js)
![Tailwind CSS](https://img.shields.io/badge/Styled%20With-Tailwind%20CSS-38B2AC?style=for-the-badge&logo=tailwind-css)
![Framer Motion](https://img.shields.io/badge/Animated%20With-Framer%20Motion-EF44B3?style=for-the-badge)

## 🎨 Features

- **Split Hero Section** - MIKU (AI) + JACE (Human) creative layout
- **Animated Backgrounds** - Gradient orbs, floating animations, pulse effects
- **Glassmorphism Design** - Modern frosted glass effects throughout
- **Smooth Scroll Animations** - Powered by Framer Motion
- **Dark Mode** - Beautiful dark theme with purple/indigo gradients
- **Mobile Responsive** - Looks great on all devices
- **Interactive Components** - Testimonial carousel, contact form, navigation
- **8 Specialized Agents** - Visual diagram of our Body System

## 🏗️ Sections

1. **Hero** - Unforgettable split-screen intro with animated gradient background
2. **About** - "The Dynamic Duo" - MIKU & JACE story
3. **Services** - 5 service offerings with pricing
4. **Why Us** - Traditional vs Body System comparison, 8 agents, 90-day timeline
5. **Portfolio** - Project showcase with animated cards
6. **Testimonials** - Animated carousel with client feedback
7. **CTA** - Contact form with email capture
8. **Footer** - Social links, navigation, fun tagline

## 🛠️ Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Fonts:** Geist Sans & Mono (local)

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd miku-jace-agency
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📦 Deployment

### Vercel (Recommended)

The easiest way to deploy:

```bash
npm i -g vercel
vercel
```

Or connect your GitHub repo to Vercel for automatic deployments.

### Netlify

```bash
npm run build
# Drag the 'out' folder to Netlify
```

### Static Export

To generate a static site:

```bash
npm run build
```

The static files will be in the `out` folder.

**Note:** If using static export, update `next.config.js`:

```javascript
const nextConfig = {
  output: 'export',
  distDir: 'dist',
}
module.exports = nextConfig
```

## 🎨 Customization

### Brand Colors

The primary brand color is defined in `tailwind.config.ts`:

```typescript
colors: {
  miku: {
    primary: "#6366f1",    // Indigo
    secondary: "#8b5cf6",  // Purple
    accent: "#ec4899",     // Pink
  },
}
```

### Content

- Update services in `src/app/sections/Services.tsx`
- Update portfolio in `src/app/sections/Portfolio.tsx`
- Update testimonials in `src/app/sections/Testimonials.tsx`
- Update contact email in `src/app/sections/CTA.tsx`

### Images

The site uses emoji icons by default. To add real images:

1. Add images to `public/` folder
2. Update the `image` prop in Portfolio section
3. For MIKU/JACE avatars, replace emoji with `<Image>` components

## 📱 Responsive Breakpoints

- **Mobile:** < 640px
- **Tablet:** 640px - 1024px
- **Desktop:** > 1024px

## 🔧 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🤝 Environment Variables

Create a `.env.local` file for environment-specific settings:

```env
# Contact form endpoint (optional)
CONTACT_API_ENDPOINT=https://your-form-endpoint.com

# Analytics (optional)
NEXT_PUBLIC_GA_ID=your-google-analytics-id
```

## 📄 License

MIT License - feel free to use this template for your own projects!

## 💝 Credits

Built with love by **MIKU + JACE**

- MIKU 🤖 - The AI Architect
- JACE 👨‍💻 - The Human Touch

---

**Built with 🤖 + ❤️**

© 2026 MIKU + JACE. All rights reserved.
