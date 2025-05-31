
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Download, Star } from 'lucide-react';

const MenuPreview = () => {
  const menuItems = {
    appetizers: [
      { name: "Oysters Rockefeller", price: "$24", description: "Fresh oysters with spinach and herb butter" },
      { name: "Foie Gras Terrine", price: "$32", description: "Pan-seared foie gras with fig compote" },
      { name: "Caviar Service", price: "$85", description: "Beluga caviar with traditional accompaniments" },
      { name: "Tuna Tartare", price: "$28", description: "Yellowfin tuna with avocado and sesame" }
    ],
    mains: [
      { name: "Wagyu Beef Tenderloin", price: "$120", description: "8oz A5 Wagyu with seasonal vegetables" },
      { name: "Lobster Thermidor", price: "$85", description: "Whole lobster with cognac cream sauce" },
      { name: "Duck Confit", price: "$65", description: "Classic French duck leg with cherry gastrique" },
      { name: "Sea Bass en Papillote", price: "$55", description: "Mediterranean sea bass with herbs" }
    ],
    desserts: [
      { name: "Dark Chocolate Soufflé", price: "$22", description: "Warm soufflé with vanilla ice cream" },
      { name: "Crème Brûlée", price: "$18", description: "Classic vanilla custard with caramelized sugar" },
      { name: "Tarte Tatin", price: "$20", description: "Upside-down apple tart with Calvados" },
      { name: "Cheese Selection", price: "$35", description: "Curated selection of French artisanal cheeses" }
    ],
    drinks: [
      { name: "Champagne Dom Pérignon", price: "$45", description: "Vintage 2012, per glass" },
      { name: "Bordeaux Château Margaux", price: "$35", description: "2018 vintage, per glass" },
      { name: "Signature Cocktail", price: "$18", description: "House specialty with premium spirits" },
      { name: "Artisanal Coffee", price: "$8", description: "Single origin beans, expertly crafted" }
    ]
  };

  return (
    <section id="menu" className="py-20 bg-gradient-to-b from-gray-800 to-gray-900">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-yellow-400 font-medium text-lg">Culinary Excellence</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-6">
            Our <span className="text-yellow-400">Menu</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Discover our carefully curated selection of exquisite dishes, 
            each prepared with the finest ingredients and masterful technique.
          </p>
        </motion.div>

        {/* Menu Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Tabs defaultValue="appetizers" className="w-full">
            <TabsList className="grid w-full grid-cols-4 bg-gray-800 border border-gray-700 rounded-lg p-1 mb-8">
              <TabsTrigger 
                value="appetizers" 
                className="text-gray-300 data-[state=active]:bg-yellow-400 data-[state=active]:text-gray-900 rounded-md transition-all duration-300"
              >
                Appetizers
              </TabsTrigger>
              <TabsTrigger 
                value="mains"
                className="text-gray-300 data-[state=active]:bg-yellow-400 data-[state=active]:text-gray-900 rounded-md transition-all duration-300"
              >
                Main Dishes
              </TabsTrigger>
              <TabsTrigger 
                value="desserts"
                className="text-gray-300 data-[state=active]:bg-yellow-400 data-[state=active]:text-gray-900 rounded-md transition-all duration-300"
              >
                Desserts
              </TabsTrigger>
              <TabsTrigger 
                value="drinks"
                className="text-gray-300 data-[state=active]:bg-yellow-400 data-[state=active]:text-gray-900 rounded-md transition-all duration-300"
              >
                Drinks
              </TabsTrigger>
            </TabsList>

            {Object.entries(menuItems).map(([category, items]) => (
              <TabsContent key={category} value={category} className="mt-8">
                <div className="grid md:grid-cols-2 gap-6">
                  {items.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <Card className="bg-gray-800/50 border-gray-700 hover:border-yellow-400/30 transition-all duration-300 group">
                        <CardContent className="p-6">
                          <div className="flex justify-between items-start mb-2">
                            <h3 className="text-xl font-semibold text-white group-hover:text-yellow-400 transition-colors duration-300">
                              {item.name}
                            </h3>
                            <span className="text-2xl font-bold text-yellow-400">
                              {item.price}
                            </span>
                          </div>
                          <p className="text-gray-400">{item.description}</p>
                          <div className="flex items-center mt-3">
                            {[...Array(5)].map((_, i) => (
                              <Star 
                                key={i} 
                                className="w-4 h-4 text-yellow-400 fill-current" 
                              />
                            ))}
                            <span className="text-gray-400 text-sm ml-2">(4.8)</span>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </motion.div>

        {/* Download Menu Button */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Button 
            size="lg"
            className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-8 py-4"
          >
            <Download className="w-5 h-5 mr-2" />
            Download Full Menu (PDF)
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default MenuPreview;
