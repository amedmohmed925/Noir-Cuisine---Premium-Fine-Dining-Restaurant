
import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, ChefHat, Award, Clock } from 'lucide-react';

const WhyChooseUs = () => {
  const features = [
    {
      icon: Leaf,
      title: "Organic Ingredients",
      description: "We source only the finest organic, locally-grown ingredients for exceptional flavor and quality."
    },
    {
      icon: ChefHat,
      title: "World-Class Chefs",
      description: "Our Michelin-starred chefs bring decades of culinary expertise to every dish."
    },
    {
      icon: Award,
      title: "Award-Winning Excellence",
      description: "Recognized with 15+ prestigious culinary awards for our innovative cuisine and service."
    },
    {
      icon: Clock,
      title: "Timeless Traditions",
      description: "We honor classic culinary techniques while embracing modern innovation and creativity."
    }
  ];

  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-yellow-400 font-medium text-lg">Our Promise</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-6">
            Why Choose <span className="text-yellow-400">Noir Cuisine</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Discover what sets us apart in the world of fine dining and why discerning guests 
            choose us for their most important occasions.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="text-center group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -10 }}
            >
              <div className="relative mb-6">
                {/* Icon Background */}
                <motion.div
                  className="w-24 h-24 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center mx-auto relative overflow-hidden"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  <feature.icon className="w-12 h-12 text-gray-900" />
                  
                  {/* Animated Background */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12"
                    initial={{ x: -100 }}
                    whileHover={{ x: 100 }}
                    transition={{ duration: 0.6 }}
                  />
                </motion.div>

                {/* Decorative Ring */}
                <motion.div
                  className="absolute top-0 left-1/2 transform -translate-x-1/2 w-28 h-28 border-2 border-yellow-400/30 rounded-full"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                />
              </div>

              <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-yellow-400 transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {feature.description}
              </p>

              {/* Hover Effect Border */}
              <motion.div
                className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
                style={{ marginTop: '2rem' }}
              />
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16 p-8 bg-gradient-to-r from-gray-800 to-gray-700 rounded-2xl border border-gray-600"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h3 className="text-2xl font-bold text-white mb-4">
            Experience the Difference Tonight
          </h3>
          <p className="text-gray-300 mb-6 max-w-xl mx-auto">
            Join thousands of satisfied guests who have made Noir Cuisine their destination 
            for exceptional dining experiences.
          </p>
          <motion.button
            className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-8 py-3 rounded-full font-semibold transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Make a Reservation
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
