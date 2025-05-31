import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Food Critic",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      rating: 5,
      text: "Absolutely phenomenal! Every dish was a masterpiece. The attention to detail and flavor combinations are extraordinary. This is fine dining at its absolute best."
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Michelin Guide Inspector",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      rating: 5,
      text: "Noir Cuisine deserves every accolade it receives. The culinary artistry combined with impeccable service creates an unforgettable dining experience."
    },
    {
      id: 3,
      name: "Emma Williams",
      role: "Celebrity Chef",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      rating: 5,
      text: "As a chef myself, I'm incredibly impressed by the innovation and technique displayed here. Each bite tells a story, and the presentation is simply stunning."
    },
    {
      id: 4,
      name: "David Rodriguez",
      role: "Wine Sommelier",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      rating: 5,
      text: "The wine pairing suggestions were perfect, and the ambiance is exactly what you want for a special occasion. Truly a world-class establishment."
    },
    {
      id: 5,
      name: "Lisa Anderson",
      role: "Food Blogger",
      image: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      rating: 5,
      text: "I've dined at restaurants worldwide, but Noir Cuisine stands out for its exceptional quality and unique dark-themed aesthetic. Simply magnificent!"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-gray-800 to-gray-900">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-yellow-400 font-medium text-lg">What Our Guests Say</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-6">
            <span className="text-yellow-400">Testimonials</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Don't just take our word for it. Here's what food critics, chefs, and our valued guests 
            have to say about their experiences at Noir Cuisine.
          </p>
        </motion.div>

        {/* Testimonials Slider */}
        <div className="relative max-w-4xl mx-auto">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
          >
            <Card className="bg-gray-800 border-gray-700 relative overflow-hidden">
              <CardContent className="p-8 md:p-12">
                {/* Quote Icon */}
                <Quote className="w-16 h-16 text-yellow-400/20 mb-6" />
                
                {/* Rating */}
                <div className="flex items-center mb-6">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star 
                      key={i} 
                      className="w-6 h-6 text-yellow-400 fill-current mr-1" 
                    />
                  ))}
                </div>

                {/* Testimonial Text */}
                <blockquote className="text-xl md:text-2xl text-white leading-relaxed mb-8 italic">
                  "{testimonials[currentIndex].text}"
                </blockquote>

                {/* Author Info */}
                <div className="flex items-center">
                  <img 
                    src={testimonials[currentIndex].image}
                    alt={testimonials[currentIndex].name}
                    className="w-16 h-16 rounded-full object-cover mr-4 border-2 border-yellow-400"
                  />
                  <div>
                    <h4 className="text-xl font-semibold text-white">
                      {testimonials[currentIndex].name}
                    </h4>
                    <p className="text-yellow-400">{testimonials[currentIndex].role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Navigation Buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-700 hover:bg-gray-600 text-white p-3 rounded-full transition-colors duration-300 md:left-[-60px]"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-700 hover:bg-gray-600 text-white p-3 rounded-full transition-colors duration-300 md:right-[-60px]"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                  index === currentIndex ? 'bg-yellow-400' : 'bg-gray-600'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Statistics */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div>
            <div className="text-3xl font-bold text-yellow-400 mb-2">4.9/5</div>
            <div className="text-gray-400">Average Rating</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-yellow-400 mb-2">2,500+</div>
            <div className="text-gray-400">Reviews</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-yellow-400 mb-2">98%</div>
            <div className="text-gray-400">Satisfaction Rate</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-yellow-400 mb-2">15+</div>
            <div className="text-gray-400">Awards Won</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
