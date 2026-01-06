# Premium Portfolio Website

A modern, animated personal portfolio website built with React, TypeScript, and Framer Motion.

## Features

- Animated hero section with gradient effects
- Glassmorphism design elements
- Smooth scroll animations
- Responsive navbar with mobile menu
- Projects showcase with hover effects
- Interactive timeline for experience
- Contact form with EmailJS integration
- WhatsApp floating button
- Scroll-to-top button
- SEO optimized
- Fully responsive design

## Tech Stack

- React 18
- TypeScript
- Tailwind CSS
- Framer Motion
- EmailJS
- Lucide Icons
- Vite

## Setup Instructions

### 1. Install Dependencies

```bash
npm install
```

### 2. Configure EmailJS

To enable the contact form:

1. Create a free account at [EmailJS](https://www.emailjs.com/)
2. Create an email service and template
3. Get your credentials:
   - Service ID
   - Template ID
   - Public Key

4. Update the EmailJS configuration in `src/sections/Contact.tsx`:

```typescript
await emailjs.send(
  'YOUR_SERVICE_ID',      // Replace with your Service ID
  'YOUR_TEMPLATE_ID',     // Replace with your Template ID
  {
    from_name: formData.name,
    from_email: formData.email,
    message: formData.message,
    to_name: 'Your Name',
  },
  'YOUR_PUBLIC_KEY'       // Replace with your Public Key
);
```

### 3. Customize Content

Update the following files with your information:

- `src/sections/Hero.tsx` - Name, title, bio, social links
- `src/sections/About.tsx` - About text and skills
- `src/sections/Projects.tsx` - Your projects
- `src/sections/Experience.tsx` - Work experience and achievements
- `src/sections/Contact.tsx` - Contact information
- `src/components/WhatsAppButton.tsx` - WhatsApp number
- `index.html` - SEO meta tags

### 4. Run Development Server

```bash
npm run dev
```

### 5. Build for Production

```bash
npm run build
```

## Deployment on Vercel

1. Push your code to GitHub
2. Go to [Vercel](https://vercel.com/)
3. Import your repository
4. Vercel will automatically detect it's a Vite project
5. Click "Deploy"

No environment variables needed unless you add custom integrations.

## Folder Structure

```
src/
├── components/        # Reusable UI components
│   ├── Button.tsx
│   ├── GlassCard.tsx
│   ├── Navbar.tsx
│   ├── SectionTitle.tsx
│   ├── ScrollToTop.tsx
│   └── WhatsAppButton.tsx
├── sections/         # Main page sections
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Projects.tsx
│   ├── Experience.tsx
│   └── Contact.tsx
├── types/           # TypeScript types
│   └── index.ts
├── utils/           # Utility functions
│   ├── animations.ts
│   └── smoothScroll.ts
├── App.tsx          # Main app component
├── main.tsx         # Entry point
└── index.css        # Global styles
```

## Customization Tips

### Colors
The portfolio uses a blue/purple gradient theme. To change colors, update:
- Gradient classes in components (`from-blue-600 to-purple-600`)
- Tailwind config if needed

### Fonts
The portfolio uses Inter font from Google Fonts. To change:
- Update the font link in `index.html`
- Modify the font-family in the style tag

### Images
- Use high-quality images from [Pexels](https://www.pexels.com/)
- Update project images in `src/sections/Projects.tsx`
- Recommended size: 800x600px

## License

MIT License - feel free to use for your own portfolio!
