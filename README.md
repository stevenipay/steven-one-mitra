# S1-Mitra Portfolio Website

Luxury, high-tech professional portfolio website for Steven One - Strategic Consultant showcasing field work documentation with premium animations and modern design.

## Tech Stack

- **Next.js 15** (App Router)
- **React 18**
- **Framer Motion** - Smooth animations and transitions
- **Tailwind CSS** - Utility-first styling
- **Lucide React** - Premium icon library
- **TypeScript** - Type safety

## Features

✨ **Premium Design Elements:**
- Dark theme with Navy Blue (#000D1A) and Gold (#D4AF37) accents
- Glassmorphism effects with backdrop blur
- Animated background with floating particles
- Smooth scroll animations

🎯 **Interactive Components:**
- Typewriter effect in Hero section
- Bento Grid layout for photo gallery (non-standard card sizes)
- Staggered entrance animations
- Hover effects with scale and glow
- Dynamic counter animations for stats

📱 **Responsive Design:**
- Mobile-first approach
- Optimized for all screen sizes
- Touch-friendly interactions

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deployment

This project is ready to be deployed to Vercel:

1. Push your code to GitHub
2. Import the project in Vercel
3. Vercel will automatically detect Next.js and configure the build settings

Or use the Vercel CLI:
```bash
npm i -g vercel
vercel
```

## Customization

- **Replace Images:** Update the `image` URLs in the `galleryItems` array in `app/page.tsx`
- **Update WhatsApp:** The number is already set to 6282310690095 in the `handleWhatsApp` function
- **Modify Stats:** Edit the `stats` array to change counter values and labels
- **Adjust Colors:** Update colors in `tailwind.config.js` and `app/globals.css`
- **Change Content:** All text content is in `app/page.tsx` for easy editing

## Design Philosophy

This website follows a luxury corporate design approach with:
- High contrast for readability
- Subtle animations that enhance UX without being distracting
- Glassmorphism for a modern, premium feel
- Gold accents for a sophisticated touch
- Smooth, professional interactions throughout
