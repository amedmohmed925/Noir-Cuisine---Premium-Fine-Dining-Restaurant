
# Noir Cuisine - Premium Restaurant Landing Page

A modern, dark-themed restaurant landing page built with React, TypeScript, and Tailwind CSS. This project features smooth animations, responsive design, and conversion-focused sections perfect for high-end restaurants and cafés.

## 🚀 Quick Start

```bash
# 1. Clone the repository
git clone <your-repository-url>
cd noir-cuisine-landing

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev

# 4. Open http://localhost:8080 in your browser
```

**That's it!** Your restaurant landing page is now running locally.

## 🚀 Live Demo

The landing page is fully functional and ready for deployment. You can view it by running the development server or deploying to your preferred hosting platform.

## 📋 Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [Page Sections](#page-sections)
- [Customization Guide](#customization-guide)
- [File Structure](#file-structure)
- [Deployment](#deployment)
- [Support](#support)

## ✨ Features

### Core Features
- **Fully Responsive Design** - Optimized for all devices (mobile, tablet, desktop)
- **Dark Theme UI** - Elegant dark design with gold accents
- **Smooth Animations** - Professional animations using Framer Motion
- **SEO Optimized** - Proper meta tags and semantic HTML structure
- **Cross-Browser Compatible** - Works on Chrome, Firefox, Safari, Edge
- **Performance Optimized** - Fast loading with optimized images and code
- **Modern Tech Stack** - Built with React 18, TypeScript, and Tailwind CSS

### Interactive Elements
- Smooth scroll navigation
- Animated counters and progress bars
- Image galleries with hover effects
- Interactive reservation form
- Countdown timers for special offers
- Auto-playing testimonial slider
- Responsive menu tabs
- Contact form with validation

## 🛠️ Technologies Used

### Frontend Framework
- **React 18** - Modern React with hooks and functional components
- **TypeScript** - Type-safe JavaScript for better development experience
- **Vite** - Fast build tool and development server

### Styling & UI
- **Tailwind CSS** - Utility-first CSS framework
- **Shadcn/UI** - High-quality, accessible component library
- **Framer Motion** - Professional animations and transitions
- **Lucide React** - Beautiful, customizable icons

### Additional Libraries
- **React Router DOM** - Client-side routing
- **React Hook Form** - Form handling and validation
- **Zod** - Schema validation
- **Date-fns** - Date manipulation utilities
- **Recharts** - Chart components (for potential analytics)
- **@tanstack/react-query** - Data fetching and state management

## 🏁 Getting Started

### Prerequisites
- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repository-url>
   cd noir-cuisine-landing
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:8080` to view the landing page

### Build for Production

```bash
# Build the project
npm run build

# Preview the build
npm run preview
```

## 📑 Page Sections

### 1. Hero Section (`/src/components/HeroSection.tsx`)
- **Purpose**: First impression and main call-to-action
- **Features**: Fullscreen background, animated text, statistics
- **Customization**: Update restaurant name, tagline, and background image

### 2. About Section (`/src/components/AboutSection.tsx`)
- **Purpose**: Build trust and showcase restaurant story
- **Features**: Two-column layout, chef information, statistics
- **Customization**: Replace chef photo, update story text

### 3. Signature Dishes (`/src/components/SignatureDishes.tsx`)
- **Purpose**: Showcase featured menu items
- **Features**: Grid layout, hover effects, pricing, ratings
- **Customization**: Update dish images, names, prices, and descriptions

### 4. Menu Preview (`/src/components/MenuPreview.tsx`)
- **Purpose**: Quick menu overview with categories
- **Features**: Tabbed interface, PDF download option
- **Customization**: Update menu items and categories

### 5. Why Choose Us (`/src/components/WhyChooseUs.tsx`)
- **Purpose**: Highlight competitive advantages
- **Features**: Icon-based features, hover animations
- **Customization**: Update selling points and icons

### 6. Gallery (`/src/components/Gallery.tsx`)
- **Purpose**: Visual showcase of restaurant atmosphere
- **Features**: Image grid, lightbox functionality
- **Customization**: Replace gallery images

### 7. Testimonials (`/src/components/Testimonials.tsx`)
- **Purpose**: Social proof and customer reviews
- **Features**: Auto-sliding carousel, star ratings
- **Customization**: Update customer reviews and photos

### 8. Special Offers (`/src/components/SpecialOffers.tsx`)
- **Purpose**: Create urgency and promote deals
- **Features**: Countdown timer, promotional cards
- **Customization**: Update offers and timer duration

### 9. Reservation Form (`/src/components/ReservationForm.tsx`)
- **Purpose**: Capture booking requests
- **Features**: Form validation, date picker, responsive design
- **Customization**: Update form fields and validation rules

### 10. Location & Map (`/src/components/LocationMap.tsx`)
- **Purpose**: Help customers find the restaurant
- **Features**: Embedded map, contact information
- **Customization**: Update address and map coordinates

### 11. App Download (`/src/components/AppDownload.tsx`)
- **Purpose**: Promote mobile app downloads
- **Features**: App store buttons, device mockups
- **Customization**: Update app store links

### 12. Blog Section (`/src/components/BlogSection.tsx`)
- **Purpose**: SEO boost and content marketing
- **Features**: Article cards, read more functionality
- **Customization**: Update blog posts and images

### 13. Contact Section (`/src/components/ContactSection.tsx`)
- **Purpose**: Multiple contact options
- **Features**: Social media links, contact methods
- **Customization**: Update contact information and social links

### 14. Footer (`/src/components/Footer.tsx`)
- **Purpose**: Site navigation and legal information
- **Features**: Quick links, social media, newsletter signup
- **Customization**: Update links and legal text

## 🎨 Customization Guide

### Colors and Branding

1. **Primary Colors**: Edit `tailwind.config.ts` to change the color scheme
   ```typescript
   colors: {
     yellow: {
       400: '#your-primary-color',
       500: '#your-primary-hover-color'
     }
   }
   ```

2. **Typography**: Update fonts in `index.css` or add Google Fonts

### Content Updates

1. **Restaurant Information**: Update in each component file
2. **Images**: Replace Unsplash URLs with your own images
3. **Menu Items**: Edit the arrays in `SignatureDishes.tsx` and `MenuPreview.tsx`
4. **Contact Details**: Update in `ContactSection.tsx` and `Footer.tsx`

### Adding New Sections

1. Create a new component in `/src/components/`
2. Import and add to `Index.tsx`
3. Add navigation link if needed

### Styling Modifications

- **Tailwind Classes**: Most styling is done with Tailwind utility classes
- **Component Styling**: Each component is self-contained
- **Responsive Design**: Use Tailwind's responsive prefixes (`md:`, `lg:`, `xl:`)

## 📁 File Structure

```
src/
├── components/           # React components
│   ├── ui/              # Shadcn/UI components
│   ├── HeroSection.tsx  # Landing hero section
│   ├── AboutSection.tsx # About restaurant section
│   └── ...              # Other page sections
├── hooks/               # Custom React hooks
├── lib/                 # Utility functions
├── pages/               # Page components
│   ├── Index.tsx        # Main landing page
│   └── NotFound.tsx     # 404 page
├── App.tsx              # Root component
└── main.tsx             # Entry point
```

## 🚀 Deployment

### Recommended Platforms
- **Vercel** - Automatic deployments from Git
- **Netlify** - Easy static site deployment
- **GitHub Pages** - Free hosting for open source projects

### Build Commands
```bash
# Install dependencies
npm install

# Build for production
npm run build

# Output directory: dist/
```

## 🔧 Advanced Customization

### Adding Backend Integration

For features like contact forms, reservations, or user authentication, consider integrating with:
- **Supabase** - Backend-as-a-Service with database and auth
- **Firebase** - Google's app development platform
- **Custom API** - Your own backend service

### Performance Optimization

1. **Image Optimization**: Use WebP format and proper sizing
2. **Code Splitting**: Implement lazy loading for components
3. **Caching**: Configure proper caching headers
4. **CDN**: Use a content delivery network for assets

### SEO Enhancements

1. **Meta Tags**: Update in `index.html`
2. **Structured Data**: Add schema.org markup
3. **Sitemap**: Generate for better search indexing
4. **Analytics**: Add Google Analytics or similar

## 📞 Support & Maintenance

### Common Issues

1. **Build Errors**: Check TypeScript types and imports
2. **Styling Issues**: Verify Tailwind classes and responsive design
3. **Performance**: Optimize images and reduce bundle size

### Updates and Maintenance

- Keep dependencies updated regularly
- Test on multiple browsers and devices
- Monitor performance metrics
- Update content and images as needed

### Getting Help

- Check the console for error messages
- Refer to component documentation
- Use browser developer tools for debugging
- Test responsive design on various screen sizes

## 📝 License

This project is ready for commercial use and can be sold on platforms like ThemeForest.

## 🏆 Credits

- **Design**: Modern dark theme with elegant animations
- **Images**: High-quality stock photos from Unsplash
- **Icons**: Lucide React icon library
- **Fonts**: Google Fonts for typography
- **Components**: Shadcn/UI component library

---

**Made with ❤️ for the restaurant industry**

For technical support or customization services, please refer to the documentation or contact the development team.
