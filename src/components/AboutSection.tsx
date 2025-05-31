
import React from 'react';
import { motion } from 'framer-motion';
import { ChefHat, Award, Clock, Users } from 'lucide-react';

const AboutSection = () => {
  const fadeInLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } }
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } }
  };

  const stats = [
    { icon: Award, value: "15+", label: "Awards Won" },
    { icon: ChefHat, value: "5", label: "Master Chefs" },
    { icon: Clock, value: "10", label: "Years Experience" },
    { icon: Users, value: "10K+", label: "Satisfied Customers" }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div>
              <span className="text-yellow-400 font-medium text-lg">About Noir Cuisine</span>
              <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-6">
                Crafting Culinary 
                <span className="text-yellow-400"> Excellence</span>
              </h2>
            </div>
            
            <p className="text-gray-300 text-lg leading-relaxed">
              Since 2014, Noir Cuisine has been the epitome of fine dining, where passion meets perfection. 
              Our award-winning chefs create extraordinary dishes using the finest ingredients, delivering 
              an unforgettable gastronomic journey in our sophisticated dark-themed ambiance.
            </p>
            
            <p className="text-gray-400 leading-relaxed">
              Every dish tells a story, every flavor creates a memory. We believe in the art of cooking 
              as much as we believe in the art of hospitality, ensuring each visit becomes a cherished experience.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6 pt-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center p-4 bg-gray-800/50 rounded-lg border border-gray-700 hover:border-yellow-400/30 transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <stat.icon className="w-8 h-8 text-yellow-400 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Image Content */}
          <motion.div
            variants={fadeInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-2xl">
              <img 
                src="https://images.unsplash.com/photo-1600891964092-4316c288032e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Chef preparing food"
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent" />
              
              {/* Floating Card */}
              <motion.div
                className="absolute bottom-6 left-6 right-6 bg-gray-900/90 backdrop-blur-sm p-6 rounded-xl border border-gray-700"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center">
                    <ChefHat className="w-8 h-8 text-gray-900" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-white">Chef Marcus Antoine</h4>
                    <p className="text-yellow-400">Executive Chef & Owner</p>
                    <p className="text-gray-400 text-sm mt-1">Michelin Star Winner</p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Decorative Elements */}
            <motion.div
              className="absolute -top-4 -right-4 w-24 h-24 border-4 border-yellow-400 rounded-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
              className="absolute -bottom-4 -left-4 w-16 h-16 bg-yellow-400/20 rounded-full"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
