
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Phone, Mail, MessageCircle, Instagram, Facebook, Twitter } from 'lucide-react';

const ContactSection = () => {
  const contactMethods = [
    {
      icon: Phone,
      title: "Call Us",
      description: "Speak directly with our team",
      contact: "+1 (234) 567-8900",
      action: "Call Now",
      href: "tel:+1234567890",
      color: "bg-green-500"
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      description: "Quick messages and inquiries",
      contact: "+1 (234) 567-8900",
      action: "Chat Now",
      href: "https://wa.me/1234567890",
      color: "bg-green-600"
    },
    {
      icon: Mail,
      title: "Email Us",
      description: "For detailed inquiries",
      contact: "hello@noircuisine.com",
      action: "Send Email",
      href: "mailto:hello@noircuisine.com",
      color: "bg-blue-500"
    },
    {
      icon: Instagram,
      title: "Instagram",
      description: "Follow our culinary journey",
      contact: "@noircuisine",
      action: "Follow Us",
      href: "https://instagram.com/noircuisine",
      color: "bg-pink-500"
    }
  ];

  const socialLinks = [
    { icon: Instagram, href: "https://instagram.com/noircuisine", label: "Instagram" },
    { icon: Facebook, href: "https://facebook.com/noircuisine", label: "Facebook" },
    { icon: Twitter, href: "https://twitter.com/noircuisine", label: "Twitter" }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-yellow-400 font-medium text-lg">Get in Touch</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-6">
            Contact <span className="text-yellow-400">Us</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Have questions or special requests? We're here to help make your dining experience 
            exceptional. Reach out through any of these channels.
          </p>
        </motion.div>

        {/* Contact Methods Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactMethods.map((method, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="bg-gray-800 border-gray-700 hover:border-yellow-400/30 transition-all duration-300 group h-full">
                <CardContent className="p-6 text-center">
                  {/* Icon */}
                  <motion.div
                    className={`w-16 h-16 ${method.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
                    whileHover={{ rotate: 5 }}
                  >
                    <method.icon className="w-8 h-8 text-white" />
                  </motion.div>

                  {/* Content */}
                  <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-yellow-400 transition-colors duration-300">
                    {method.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-3">{method.description}</p>
                  <p className="text-gray-300 font-medium mb-4">{method.contact}</p>

                  {/* Action Button */}
                  <Button 
                    variant="outline"
                    size="sm"
                    className="border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-gray-900 w-full"
                    onClick={() => window.open(method.href, '_blank')}
                  >
                    {method.action}
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Social Media Section */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h3 className="text-2xl font-bold text-white mb-6">Follow Our Culinary Journey</h3>
          <p className="text-gray-300 mb-8 max-w-xl mx-auto">
            Stay connected with us on social media for behind-the-scenes content, 
            special announcements, and mouth-watering food photography.
          </p>

          {/* Social Links */}
          <div className="flex justify-center space-x-6">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 bg-gray-800 hover:bg-yellow-400 border border-gray-700 hover:border-yellow-400 rounded-full flex items-center justify-center text-gray-300 hover:text-gray-900 transition-all duration-300 group"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <social.icon className="w-6 h-6" />
              </motion.a>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            className="mt-12 p-8 bg-gradient-to-r from-gray-800 to-gray-700 rounded-2xl border border-gray-600"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <h4 className="text-xl font-bold text-white mb-4">
              Ready for an Unforgettable Experience?
            </h4>
            <p className="text-gray-300 mb-6">
              Don't wait to experience the finest in culinary excellence. 
              Make your reservation today and join us for an extraordinary evening.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-8 py-4"
              >
                Make Reservation
              </Button>
              <Button 
                variant="outline"
                size="lg"
                className="border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-gray-900 px-8 py-4"
              >
                View Menu
              </Button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
