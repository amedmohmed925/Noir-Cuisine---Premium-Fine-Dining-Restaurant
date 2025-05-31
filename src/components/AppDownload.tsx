
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Smartphone, Download, Star, Zap, ShoppingBag } from 'lucide-react';

const AppDownload = () => {
  const features = [
    { icon: ShoppingBag, text: "Easy online ordering" },
    { icon: Star, text: "Exclusive app-only deals" },
    { icon: Zap, text: "Fast delivery tracking" }
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 right-20 w-40 h-40 bg-yellow-400/5 rounded-full"
          animate={{ rotate: 360, scale: [1, 1.2, 1] }}
          transition={{ duration: 20, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 left-20 w-32 h-32 bg-yellow-400/5 rounded-full"
          animate={{ rotate: -360, scale: [1.2, 1, 1.2] }}
          transition={{ duration: 15, repeat: Infinity }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center mb-6">
              <Smartphone className="w-8 h-8 text-yellow-400 mr-3" />
              <span className="text-yellow-400 font-medium text-lg">Mobile Experience</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Download Our <span className="text-yellow-400">App</span>
            </h2>
            
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              Get exclusive access to special offers, faster ordering, and seamless delivery 
              tracking. Experience Noir Cuisine anywhere, anytime with our premium mobile app.
            </p>

            {/* Features */}
            <div className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex items-center space-x-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="w-10 h-10 bg-yellow-400/20 rounded-full flex items-center justify-center">
                    <feature.icon className="w-5 h-5 text-yellow-400" />
                  </div>
                  <span className="text-gray-300">{feature.text}</span>
                </motion.div>
              ))}
            </div>

            {/* Download Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button 
                  className="bg-black text-white hover:bg-gray-800 px-6 py-4 rounded-lg flex items-center space-x-3"
                  onClick={() => window.open('#', '_blank')}
                >
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
                  </svg>
                  <div className="text-left">
                    <div className="text-xs text-gray-400">Download on the</div>
                    <div className="font-semibold">App Store</div>
                  </div>
                </Button>
              </motion.div>

              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button 
                  className="bg-black text-white hover:bg-gray-800 px-6 py-4 rounded-lg flex items-center space-x-3"
                  onClick={() => window.open('#', '_blank')}
                >
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                  </svg>
                  <div className="text-left">
                    <div className="text-xs text-gray-400">Get it on</div>
                    <div className="font-semibold">Google Play</div>
                  </div>
                </Button>
              </motion.div>
            </div>

            {/* App Stats */}
            <motion.div
              className="grid grid-cols-3 gap-4 mt-8 pt-8 border-t border-gray-700"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-400">50K+</div>
                <div className="text-gray-400 text-sm">Downloads</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-400">4.9</div>
                <div className="text-gray-400 text-sm">App Rating</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-400">24/7</div>
                <div className="text-gray-400 text-sm">Support</div>
              </div>
            </motion.div>
          </motion.div>

          {/* App Mockup */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative max-w-sm mx-auto">
              {/* Phone Frame */}
              <div className="relative bg-gray-800 rounded-[3rem] p-6 shadow-2xl border-8 border-gray-700">
                <div className="bg-gray-900 rounded-[2rem] overflow-hidden">
                  {/* Status Bar */}
                  <div className="bg-gray-800 px-6 py-2 flex justify-between items-center text-white text-sm">
                    <span>9:41</span>
                    <div className="flex space-x-1">
                      <div className="w-4 h-2 bg-white rounded"></div>
                      <div className="w-1 h-2 bg-white rounded"></div>
                    </div>
                  </div>

                  {/* App Interface */}
                  <div className="p-6">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-6">
                      <div>
                        <h3 className="text-xl font-bold text-white">Noir Cuisine</h3>
                        <p className="text-gray-400 text-sm">Fine Dining Delivered</p>
                      </div>
                      <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center">
                        <Download className="w-6 h-6 text-gray-900" />
                      </div>
                    </div>

                    {/* Featured Dish */}
                    <Card className="bg-gray-800 border-gray-700 mb-4">
                      <CardContent className="p-4">
                        <img 
                          src="https://images.unsplash.com/photo-1546833999-b9f581a1996d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
                          alt="Featured dish"
                          className="w-full h-24 object-cover rounded-lg mb-3"
                        />
                        <h4 className="text-white font-semibold text-sm mb-1">Wagyu Steak Supreme</h4>
                        <p className="text-yellow-400 font-bold">$120</p>
                      </CardContent>
                    </Card>

                    {/* Categories */}
                    <div className="grid grid-cols-2 gap-3">
                      {['Order Now', 'Reservations', 'Menu', 'Offers'].map((item, index) => (
                        <motion.div
                          key={index}
                          className="bg-gray-800 p-3 rounded-lg text-center"
                          whileHover={{ scale: 1.05 }}
                        >
                          <div className="text-yellow-400 text-xs font-medium">{item}</div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <motion.div
                className="absolute -top-4 -right-4 w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Star className="w-8 h-8 text-gray-900" />
              </motion.div>
              
              <motion.div
                className="absolute -bottom-4 -left-4 w-12 h-12 bg-yellow-400/20 rounded-full"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AppDownload;
