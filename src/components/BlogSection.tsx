
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, ArrowRight, User } from 'lucide-react';

const BlogSection = () => {
  const blogPosts = [
    {
      id: 1,
      title: "The Art of Perfect Steak: A Chef's Guide",
      excerpt: "Learn the secrets behind preparing the perfect steak from our executive chef, including temperature control, seasoning techniques, and the importance of quality cuts.",
      image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      author: "Chef Marcus Antoine",
      date: "2024-01-15",
      readTime: "5 min read",
      category: "Cooking Tips"
    },
    {
      id: 2,
      title: "Wine Pairing: Elevating Your Dining Experience",
      excerpt: "Discover how the right wine can transform your meal. Our sommelier shares expert tips on pairing wines with different dishes to enhance flavors and create memorable experiences.",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      author: "Sarah Mitchell",
      date: "2024-01-10",
      readTime: "7 min read",
      category: "Wine & Spirits"
    },
    {
      id: 3,
      title: "Seasonal Ingredients: Winter's Hidden Gems",
      excerpt: "Explore the best seasonal ingredients winter has to offer and how we incorporate them into our signature dishes. From root vegetables to winter truffles, discover nature's bounty.",
      image: "https://images.unsplash.com/photo-1542010589005-d1eacc3918f2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      author: "Isabella Rodriguez",
      date: "2024-01-05",
      readTime: "4 min read",
      category: "Ingredients"
    }
  ];

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
          <span className="text-yellow-400 font-medium text-lg">Culinary Insights</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-6">
            Latest <span className="text-yellow-400">Articles</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Dive into the world of fine dining with expert tips, seasonal recipes, 
            and culinary insights from our professional kitchen.
          </p>
        </motion.div>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="bg-gray-800 border-gray-700 overflow-hidden hover:border-yellow-400/30 transition-all duration-300 group h-full">
                <div className="relative overflow-hidden">
                  <img 
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Category Badge */}
                  <Badge className="absolute top-4 left-4 bg-yellow-400 text-gray-900 hover:bg-yellow-500">
                    {post.category}
                  </Badge>

                  {/* Read Time */}
                  <div className="absolute top-4 right-4 bg-gray-900/80 backdrop-blur-sm px-3 py-1 rounded-full flex items-center">
                    <Clock className="w-3 h-3 text-yellow-400 mr-1" />
                    <span className="text-white text-sm">{post.readTime}</span>
                  </div>
                </div>

                <CardContent className="p-6 flex flex-col h-full">
                  {/* Meta Information */}
                  <div className="flex items-center text-gray-400 text-sm mb-4">
                    <User className="w-4 h-4 mr-1" />
                    <span className="mr-4">{post.author}</span>
                    <Calendar className="w-4 h-4 mr-1" />
                    <span>{new Date(post.date).toLocaleDateString()}</span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-yellow-400 transition-colors duration-300 line-clamp-2">
                    {post.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-gray-400 mb-6 leading-relaxed flex-grow line-clamp-3">
                    {post.excerpt}
                  </p>

                  {/* Read More Button */}
                  <Button 
                    variant="outline"
                    className="border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-gray-900 group-hover:shadow-lg transition-all duration-300 mt-auto"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Button 
            size="lg"
            className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-8 py-4"
          >
            View All Articles
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </motion.div>

        {/* Newsletter Signup */}
        <motion.div
          className="mt-16 text-center p-8 bg-gradient-to-r from-gray-800 to-gray-700 rounded-2xl border border-gray-600"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h3 className="text-2xl font-bold text-white mb-4">
            Stay Updated with Culinary Insights
          </h3>
          <p className="text-gray-300 mb-6 max-w-xl mx-auto">
            Subscribe to our newsletter and get the latest recipes, cooking tips, 
            and exclusive content delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400"
            />
            <Button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-6 py-3">
              Subscribe
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BlogSection;
