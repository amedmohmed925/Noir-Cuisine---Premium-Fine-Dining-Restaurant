Noir Cuisine - Premium Restaurant Landing Page
A sophisticated, dark-themed landing page for high-end restaurants and cafés. Built with React 18, TypeScript, Tailwind CSS, and Vite, Noir Cuisine offers a modern, conversion-focused design with smooth animations, responsive layouts, and SEO optimization. Perfect for attracting customers and boosting reservations, this template combines elegance with functionality to elevate your restaurant’s online presence.
🚀 Quick Start
# 1. Clone the repository
git clone <your-repository-url>
cd noir-cuisine-landing

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev

# 4. Open http://localhost:8080 in your browser

That's it! Your restaurant landing page is now running locally. For non-technical users, see the Non-Technical Setup section below.
🚀 Live Demo
Experience Noir Cuisine’s elegant design at Live Demo (replace with your Vercel/Netlify link). Deploy it to showcase its features or test locally with the development server.
📋 Table of Contents

Features
Technologies Used
Getting Started
Non-Technical Setup
Page Sections
Customization Guide
File Structure
Deployment
Advanced Customization
Support & Maintenance
Licenses
Credits

✨ Features
Core Features

Fully Responsive Design: Optimized for mobile, tablet, and desktop devices.
Elegant Dark Theme: Sleek dark UI with gold accents for a premium look.
Smooth Animations: Professional transitions powered by Framer Motion.
SEO Optimized: Semantic HTML, meta tags, and schema.org structured data.
Cross-Browser Compatible: Tested on Chrome, Firefox, Safari, and Edge.
High Performance: Fast loading with optimized images and minimal bundle size.
Accessibility: ARIA-compliant components and keyboard navigation support.
Modern Tech Stack: Built with React 18, TypeScript, Tailwind CSS, and Vite.

Interactive Elements

Smooth scroll navigation for seamless user experience.
Animated counters and progress bars for dynamic engagement.
Image galleries with hover effects and lightbox functionality.
Interactive reservation form with validation and date picker.
Countdown timers for special offers to create urgency.
Auto-playing testimonial slider with star ratings.
Responsive menu tabs for easy navigation.
Contact form with real-time validation.

These features help restaurant owners attract customers, showcase their brand, and increase bookings.
🛠️ Technologies Used
Frontend Framework

React 18: Functional components with Hooks for modern development.
TypeScript: Type-safe JavaScript for robust code.
Vite: Fast build tool and development server.

Styling & UI

Tailwind CSS: Utility-first CSS framework for rapid styling.
Shadcn/UI: Accessible, high-quality component library.
Framer Motion: Professional animations and transitions.
Lucide React: Customizable, lightweight icons.

Additional Libraries

React Router DOM: Client-side routing for navigation.
React Hook Form & Zod: Form handling and schema validation.
Date-fns: Lightweight date manipulation utilities.
Recharts: Chart components for potential analytics.
@tanstack/react-query: Efficient data fetching and state management.

🏁 Getting Started
Prerequisites

Node.js: Version 16 or higher.
npm or yarn: Package manager for installing dependencies.
A code editor like Visual Studio Code (recommended).

Installation for Developers

Clone the Repository:
git clone <your-repository-url>
cd noir-cuisine-landing


Install Dependencies:
npm install


Start the Development Server:
npm run dev


Open Your Browser:Navigate to http://localhost:8080 to view the landing page.


Build for Production
# Build the project
npm run build

# Preview the build
npm run preview

🧑‍🍳 Non-Technical Setup
If you’re a restaurant owner with no coding experience, follow these steps:

Download the Template: Unzip the purchased template folder.
Replace Images: Open the public/ folder and replace placeholder images with your own (e.g., restaurant photos, dishes) using a file manager.
Edit Text: Open component files (e.g., HeroSection.tsx) in a text editor like Notepad or Visual Studio Code. Search for placeholder text (e.g., "Restaurant Name") and replace it with your details.
Deploy Online: Use a platform like Netlify:
Sign up at netlify.com.
Drag and drop the dist/ folder (after running npm run build) into Netlify’s dashboard.
Follow the prompts to publish your site.


Get Help: Contact support at [support@example.com] for assistance with setup or customization.

📑 Page Sections
1. Hero Section (/src/components/HeroSection.tsx)

Purpose: Captures attention with a fullscreen background and call-to-action.
Features: Animated text, statistics, and a reservation button.
Customization: Update restaurant name, tagline, and background image in HeroSection.tsx.

2. About Section (/src/components/AboutSection.tsx)

Purpose: Builds trust by sharing the restaurant’s story.
Features: Two-column layout, chef bio, and statistics.
Customization: Replace chef photo and update story text in AboutSection.tsx.

3. Signature Dishes (/src/components/SignatureDishes.tsx)

Purpose: Highlights featured menu items.
Features: Grid layout, hover effects, pricing, and ratings.
Customization: Update dish images, names, prices, and descriptions in SignatureDishes.tsx.

4. Menu Preview (/src/components/MenuPreview.tsx)

Purpose: Provides a quick overview of the menu.
Features: Tabbed interface, PDF download option.
Customization: Update menu items and categories in MenuPreview.tsx.

5. Why Choose Us (/src/components/WhyChooseUs.tsx)

Purpose: Showcases competitive advantages.
Features: Icon-based features with hover animations.
Customization: Update selling points and icons in WhyChooseUs.tsx.

6. Gallery (/src/components/Gallery.tsx)

Purpose: Displays the restaurant’s atmosphere.
Features: Image grid with lightbox functionality.
Customization: Replace gallery images in Gallery.tsx.

7. Testimonials (/src/components/Testimonials.tsx)

Purpose: Provides social proof through customer reviews.
Features: Auto-sliding carousel with star ratings.
Customization: Update reviews and photos in Testimonials.tsx.

8. Special Offers (/src/components/SpecialOffers.tsx)

Purpose: Promotes deals to create urgency.
Features: Countdown timers and promotional cards.
Customization: Update offers and timer duration in SpecialOffers.tsx.

9. Reservation Form (/src/components/ReservationForm.tsx)

Purpose: Captures booking requests.
Features: Form validation, date picker, responsive design.
Customization: Update form fields and validation rules in ReservationForm.tsx.

10. Location & Map (/src/components/LocationMap.tsx)

Purpose: Helps customers find the restaurant.
Features: Embedded Google Maps and contact information.
Customization: Update address and map coordinates in LocationMap.tsx.

11. App Download (/src/components/AppDownload.tsx)

Purpose: Promotes mobile app downloads.
Features: App store buttons and device mockups.
Customization: Update app store links in AppDownload.tsx.

12. Blog Section (/src/components/BlogSection.tsx)

Purpose: Boosts SEO with content marketing.
Features: Article cards with “read more” functionality.
Customization: Update blog posts and images in BlogSection.tsx.

13. Contact Section (/src/components/ContactSection.tsx)

Purpose: Provides multiple contact options.
Features: Social media links and contact methods.
Customization: Update contact details in ContactSection.tsx.

14. Footer (/src/components/Footer.tsx)

Purpose: Offers navigation and legal information.
Features: Quick links, social media, newsletter signup.
Customization: Update links and legal text in Footer.tsx.

🎨 Customization Guide
Colors and Branding

Primary Colors: Edit tailwind.config.ts to change the color scheme:colors: {
  yellow: {
    400: '#FFD700', // Primary gold color
    500: '#FFC107'  // Hover gold color
  }
}


Typography: Update fonts in index.css or add Google Fonts:@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
body { font-family: 'Roboto', sans-serif; }



Content Updates

Restaurant Information: Edit text in component files (e.g., restaurant name in HeroSection.tsx).
Images: Replace Unsplash URLs in the public/ folder with your images.
Menu Items: Update arrays in SignatureDishes.tsx and MenuPreview.tsx.
Contact Details: Modify ContactSection.tsx and Footer.tsx.

Adding New Sections

Create a new component in /src/components/.
Import and add it to Index.tsx.
Update navigation links in Header.tsx if needed.

Styling Modifications

Tailwind Classes: Use utility classes for styling (e.g., bg-yellow-400, text-lg).
Responsive Design: Apply Tailwind’s responsive prefixes (md:, lg:, xl:).
Component Styling: Each component is self-contained for easy updates.

For Non-Technical Users:

Use a file manager to replace images in public/.
Edit text in component files using a simple editor like Notepad.
Contact [support@example.com] for help with complex changes.

📁 File Structure
src/
├── components/           # React components
│   ├── ui/              # Shadcn/UI components
│   ├── HeroSection.tsx  # Hero section
│   ├── AboutSection.tsx # About section
│   └── ...              # Other sections
├── hooks/               # Custom React hooks
├── lib/                 # Utility functions
├── pages/               # Page components
│   ├── Index.tsx        # Main landing page
│   └── NotFound.tsx     # 404 page
├── App.tsx              # Root component
└── main.tsx             # Entry point

🚀 Deployment
Recommended Platforms

Vercel: Automatic deployments from Git.
Netlify: Simple static site hosting.
GitHub Pages: Free hosting for open-source projects.

Build Commands
# Install dependencies
npm install

# Build for production
npm run build

# Output directory: dist/

For Non-Technical Users:

Sign up at netlify.com or vercel.com.
Upload the dist/ folder (generated by npm run build) via the platform’s dashboard.
Follow the platform’s wizard to publish your site.
Contact [support@example.com] for deployment assistance.

🔧 Advanced Customization
Backend Integration
To add features like contact forms or reservations:

Supabase: Use for database and authentication. Example for reservation form:import { createClient } from '@supabase/supabase-js';
const supabase = createClient('your-url', 'your-key');
async function saveReservation(data) {
  const { error } = await supabase.from('reservations').insert([data]);
  if (error) console.error(error);
}


Firebase: Use Google’s Firestore for form submissions.
Custom API: Build a Node.js/Express backend for custom logic.

Performance Optimization

Image Optimization: Convert images to WebP and resize them.
Code Splitting: Use React’s lazy and Suspense for components:const LazyComponent = React.lazy(() => import('./components/Gallery'));


Caching: Add caching headers in your hosting platform.
CDN: Use Cloudflare or similar for faster asset delivery.

SEO Enhancements

Meta Tags: Update in index.html:<meta name="description" content="Your restaurant description">
<meta name="keywords" content="restaurant, dining, food">


Structured Data: Add schema.org markup for restaurants:<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Restaurant",
  "name": "Your Restaurant",
  "address": { ... }
}
</script>


Sitemap: Generate a sitemap.xml for search indexing.
Analytics: Add Google Analytics via a script tag in index.html.

📞 Support & Maintenance
Common Issues

Build Errors: Check TypeScript types and imports in the console.
Styling Issues: Verify Tailwind classes and test responsive design with browser tools (F12).
Performance: Optimize images and reduce bundle size using npm run build.

Updates and Maintenance

Update dependencies regularly: npm update.
Test on Chrome, Firefox, Safari, and Edge.
Monitor performance with Lighthouse or similar tools.
Update content (images, text) as needed.

Getting Help

Check the browser console (F12) for error messages.
Refer to component documentation in /src/components/.
Test responsive design on various screen sizes.
Contact [support@example.com] for support (6 months included with purchase).

📝 Licenses
All assets are licensed for commercial use and sale on ThemeForest:

Images: Unsplash (Free for commercial use, no attribution required).
Icons: Lucide React (MIT License).
Fonts: Google Fonts (Open Font License).
Libraries: React, Tailwind CSS, Framer Motion, etc. (MIT License or open-source).

🏆 Credits

Design: Elegant dark theme with gold accents for a premium restaurant experience.
Images: High-quality stock photos from Unsplash.
Icons: Lucide React icon library.
Fonts: Google Fonts for modern typography.
Components: Shadcn/UI for accessible, reusable components.


Made with ❤️ for the restaurant industry
For technical support or customization services, contact [support@example.com] or refer to the documentation.
