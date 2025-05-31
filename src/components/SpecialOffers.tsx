
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Clock, Gift, Star, Sparkles } from 'lucide-react';

const SpecialOffers = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 45,
    seconds: 30
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else {
          // Reset timer for demo purposes
          return { hours: 23, minutes: 59, seconds: 59 };
        }
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const offers = [
    {
      title: "Chef's Tasting Menu",
      originalPrice: "$150",
      discountPrice: "$120",
      discount: "20% OFF",
      description: "Experience our signature 7-course tasting menu curated by our executive chef",
      features: ["Wine pairing included", "Exclusive dishes", "Priority seating"],
      isLimited: true
    },
    {
      title: "Date Night Special",
      originalPrice: "$200",
      discountPrice: "$160",
      discount: "20% OFF",
      description: "Perfect romantic evening for two with champagne and dessert",
      features: ["Table for two", "Complimentary champagne", "Special dessert"],
      isLimited: false
    },
    {
      title: "Weekend Brunch",
      originalPrice: "$85",
      discountPrice: "$65",
      discount: "25% OFF",
      description: "Luxurious weekend brunch with unlimited mimosas",
      features: ["Unlimited mimosas", "Live jazz music", "Gourmet brunch menu"],
      isLimited: false
    }
  ];

  return (
    <section className="py-20 bg-gray-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-10 left-10 w-32 h-32 bg-yellow-400/10 rounded-full"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-10 right-10 w-24 h-24 bg-yellow-400/10 rounded-full"
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.6, 0.3, 0.6]
          }}
          transition={{ duration: 3, repeat: Infinity }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center justify-center mb-4">
            <Gift className="w-8 h-8 text-yellow-400 mr-2" />
            <span className="text-yellow-400 font-medium text-lg">Limited Time Offers</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-6">
            Special <span className="text-yellow-400">Deals</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Don't miss out on these exclusive offers. Book now and save on your next extraordinary 
            dining experience at Noir Cuisine.
          </p>
        </motion.div>

        {/* Countdown Timer */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Card className="bg-gradient-to-r from-yellow-400 to-yellow-600 border-0 inline-block">
            <CardContent className="p-6">
              <div className="flex items-center space-x-2 text-gray-900">
                <Clock className="w-6 h-6" />
                <span className="font-semibold text-lg">Offer ends in:</span>
              </div>
              <div className="flex items-center space-x-4 mt-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900">{timeLeft.hours.toString().padStart(2, '0')}</div>
                  <div className="text-sm text-gray-700">Hours</div>
                </div>
                <div className="text-2xl font-bold text-gray-900">:</div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900">{timeLeft.minutes.toString().padStart(2, '0')}</div>
                  <div className="text-sm text-gray-700">Minutes</div>
                </div>
                <div className="text-2xl font-bold text-gray-900">:</div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900">{timeLeft.seconds.toString().padStart(2, '0')}</div>
                  <div className="text-sm text-gray-700">Seconds</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Offers Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {offers.map((offer, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <Card className="bg-gray-800 border-gray-700 hover:border-yellow-400/50 transition-all duration-300 relative overflow-hidden group">
                {/* Animated Background */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-yellow-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={false}
                />

                {/* Discount Badge */}
                <div className="absolute top-4 right-4 z-10">
                  <div className="bg-yellow-400 text-gray-900 px-3 py-1 rounded-full font-bold text-sm flex items-center">
                    <Sparkles className="w-4 h-4 mr-1" />
                    {offer.discount}
                  </div>
                </div>

                {/* Limited Badge */}
                {offer.isLimited && (
                  <div className="absolute top-4 left-4 z-10">
                    <div className="bg-red-500 text-white px-3 py-1 rounded-full font-bold text-sm animate-pulse">
                      LIMITED
                    </div>
                  </div>
                )}

                <CardContent className="p-8 relative z-10">
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-yellow-400 transition-colors duration-300">
                    {offer.title}
                  </h3>
                  
                  {/* Pricing */}
                  <div className="flex items-center space-x-3 mb-4">
                    <span className="text-3xl font-bold text-yellow-400">{offer.discountPrice}</span>
                    <span className="text-xl text-gray-400 line-through">{offer.originalPrice}</span>
                  </div>

                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {offer.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2 mb-6">
                    {offer.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-400">
                        <Star className="w-4 h-4 text-yellow-400 mr-2 fill-current" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <Button 
                    className="w-full bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold py-3 group-hover:scale-105 transition-transform duration-300"
                    size="lg"
                  >
                    Book This Offer
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <p className="text-gray-300 mb-6 text-lg">
            Have questions about our offers? Contact us for personalized recommendations.
          </p>
          <Button 
            variant="outline"
            size="lg"
            className="border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-gray-900 px-8 py-4"
          >
            Contact Our Team
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default SpecialOffers;
