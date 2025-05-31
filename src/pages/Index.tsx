
import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Star, Clock, MapPin, Phone, Mail, Instagram, Download, ChefHat, Utensils, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import SignatureDishes from '@/components/SignatureDishes';
import MenuPreview from '@/components/MenuPreview';
import WhyChooseUs from '@/components/WhyChooseUs';
import Gallery from '@/components/Gallery';
import Testimonials from '@/components/Testimonials';
import SpecialOffers from '@/components/SpecialOffers';
import ReservationForm from '@/components/ReservationForm';
import LocationMap from '@/components/LocationMap';
import AppDownload from '@/components/AppDownload';
import BlogSection from '@/components/BlogSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white overflow-x-hidden">
      {/* Loading Animation */}
      {!isLoaded && (
        <motion.div 
          className="fixed inset-0 bg-gray-900 z-50 flex items-center justify-center"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="w-16 h-16 border-4 border-yellow-400 border-t-transparent rounded-full"
          />
        </motion.div>
      )}

      {/* Navigation */}
      <motion.nav 
        className="fixed top-0 w-full bg-gray-900/95 backdrop-blur-sm z-40 border-b border-gray-800"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <motion.div 
              className="text-2xl font-bold text-yellow-400"
              whileHover={{ scale: 1.05 }}
            >
              Noir Cuisine
            </motion.div>
            <div className="hidden md:flex space-x-8">
              {['Home', 'About', 'Menu', 'Gallery', 'Reservation', 'Contact'].map((item) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-300 hover:text-yellow-400 transition-colors duration-300"
                  whileHover={{ y: -2 }}
                >
                  {item}
                </motion.a>
              ))}
            </div>
            <Button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900">
              Book Table
            </Button>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <HeroSection />

      {/* About Section */}
      <AboutSection />

      {/* Signature Dishes */}
      <SignatureDishes />

      {/* Menu Preview */}
      <MenuPreview />

      {/* Why Choose Us */}
      <WhyChooseUs />

      {/* Gallery */}
      <Gallery />

      {/* Testimonials */}
      <Testimonials />

      {/* Special Offers */}
      <SpecialOffers />

      {/* Reservation Form */}
      <ReservationForm />

      {/* Location & Map */}
      <LocationMap />

      {/* App Download */}
      <AppDownload />

      {/* Blog Section */}
      <BlogSection />

      {/* Contact Section */}
      <ContactSection />

      {/* Footer */}
      <Footer />

      {/* Scroll to Top Button */}
      <motion.button
        className="fixed bottom-8 right-8 bg-yellow-400 hover:bg-yellow-500 text-gray-900 p-3 rounded-full shadow-lg z-40"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: scrollYProgress.get() > 0.2 ? 1 : 0, scale: scrollYProgress.get() > 0.2 ? 1 : 0 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        ↑
      </motion.button>
    </div>
  );
};

export default Index;
