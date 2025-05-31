import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star, ShoppingCart } from 'lucide-react';

const SignatureDishes = () => {
  const dishes = [
    {
      id: 1,
      name: "Truffle Noir Pasta",
      description: "Hand-made pasta with black truffle, parmesan, and herbs",
      price: "$45",
      image: "https://images.unsplash.com/photo-1563379091339-03246963d4d6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      rating: 4.9,
      badge: "Chef's Special"
    },
    {
      id: 2,
      name: "Wagyu Steak Supreme",
      description: "Premium A5 Wagyu with roasted vegetables and red wine jus",
      price: "$120",
      image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      rating: 5.0,
      badge: "Premium"
    },
    {
      id: 3,
      name: "Lobster Thermidor",
      description: "Fresh lobster with cognac cream sauce and gruyere cheese",
      price: "$85",
      image: "https://images.unsplash.com/photo-1559737558-2f5a35f4523b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      rating: 4.8,
      badge: "Signature"
    },
    {
      id: 4,
      name: "Dark Chocolate Soufflé",
      description: "Warm chocolate soufflé with vanilla bean ice cream",
      price: "$28",
      image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      rating: 4.9,
      badge: "Dessert"
    },
    {
      id: 5,
      name: "Foie Gras Terrine",
      description: "Duck foie gras with fig compote and brioche toast",
      price: "$65",
      image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      rating: 4.7,
      badge: "Luxury"
    },
    {
      id: 6,
      name: "Sea Bass Ceviche",
      description: "Fresh sea bass with citrus, avocado, and microgreens",
      price: "$38",
      image: "https://images.unsplash.com/photo-1559181567-c3190ca9959b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      rating: 4.8,
      badge: "Fresh"
    }
  ];

  return (
    <section id="dishes" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-yellow-400 font-medium text-lg">Our Specialties</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-6">
            Signature <span className="text-yellow-400">Dishes</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Each dish is a masterpiece, crafted with the finest ingredients and culinary expertise 
            to deliver an extraordinary dining experience.
          </p>
        </motion.div>

        {/* Dishes Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {dishes.map((dish, index) => (
            <motion.div
              key={dish.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="bg-gray-800 border-gray-700 overflow-hidden group hover:border-yellow-400/30 transition-all duration-300">
                <div className="relative overflow-hidden">
                  <img 
                    src={dish.image}
                    alt={dish.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Badge */}
                  <Badge className="absolute top-4 left-4 bg-yellow-400 text-gray-900 hover:bg-yellow-500">
                    {dish.badge}
                  </Badge>
                  
                  {/* Price */}
                  <div className="absolute top-4 right-4 bg-gray-900/90 backdrop-blur-sm px-3 py-1 rounded-full">
                    <span className="text-yellow-400 font-bold">{dish.price}</span>
                  </div>

                  {/* Hover Overlay */}
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    whileHover={{ scale: 1.05 }}
                  >
                    <Button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900">
                      <ShoppingCart className="w-4 h-4 mr-2" />
                      Order Now
                    </Button>
                  </motion.div>
                </div>

                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-semibold text-white">{dish.name}</h3>
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-yellow-400 mr-1" fill="currentColor" />
                      <span className="text-yellow-400 font-medium">{dish.rating}</span>
                    </div>
                  </div>
                  <p className="text-gray-400 mb-4">{dish.description}</p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-yellow-400">{dish.price}</span>
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-gray-900"
                    >
                      Add to Cart
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Button 
            size="lg"
            className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-8 py-4"
          >
            View Full Menu
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default SignatureDishes;
