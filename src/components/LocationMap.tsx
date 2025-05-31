
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin, Clock, Phone, Mail, Navigation } from 'lucide-react';
import { Button } from '@/components/ui/button';

const LocationMap = () => {
  const businessHours = [
    { day: 'Monday - Thursday', hours: '5:00 PM - 11:00 PM' },
    { day: 'Friday - Saturday', hours: '5:00 PM - 12:00 AM' },
    { day: 'Sunday', hours: '5:00 PM - 10:00 PM' }
  ];

  const contactInfo = [
    { icon: MapPin, label: 'Address', value: '123 Gourmet Street, Fine Dining District, NY 10001' },
    { icon: Phone, label: 'Phone', value: '+1 (234) 567-8900' },
    { icon: Mail, label: 'Email', value: 'reservations@noircuisine.com' }
  ];

  return (
    <section id="location" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-yellow-400 font-medium text-lg">Find Us</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-6">
            Our <span className="text-yellow-400">Location</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Located in the heart of the city's finest dining district, Noir Cuisine 
            is easily accessible and worth the journey.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Map Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Card className="bg-gray-800 border-gray-700 overflow-hidden">
              <CardContent className="p-0">
                {/* Interactive Map */}
                <div className="relative h-96 bg-gray-700">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.1839!2d-73.9866136!3d40.7484284!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes%20Square!5e0!3m2!1sen!2sus!4v1234567890"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="grayscale hover:grayscale-0 transition-all duration-500"
                  />
                  
                  {/* Overlay with Address */}
                  <div className="absolute bottom-4 left-4 right-4 bg-gray-900/90 backdrop-blur-sm p-4 rounded-lg">
                    <div className="flex items-center text-white">
                      <MapPin className="w-5 h-5 text-yellow-400 mr-2 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold">Noir Cuisine</h4>
                        <p className="text-gray-300 text-sm">123 Gourmet Street, Fine Dining District</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Direction Button */}
                <div className="p-4">
                  <Button 
                    className="w-full bg-yellow-400 hover:bg-yellow-500 text-gray-900"
                    onClick={() => window.open('https://maps.google.com', '_blank')}
                  >
                    <Navigation className="w-4 h-4 mr-2" />
                    Get Directions
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            {/* Contact Details */}
            <Card className="bg-gray-800 border-gray-700">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
                <div className="space-y-4">
                  {contactInfo.map((item, index) => (
                    <motion.div
                      key={index}
                      className="flex items-start space-x-4 p-4 bg-gray-700/50 rounded-lg hover:bg-gray-700 transition-colors duration-300"
                      whileHover={{ scale: 1.02 }}
                    >
                      <div className="w-10 h-10 bg-yellow-400/20 rounded-full flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-5 h-5 text-yellow-400" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-white mb-1">{item.label}</h4>
                        <p className="text-gray-300">{item.value}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Business Hours */}
            <Card className="bg-gray-800 border-gray-700">
              <CardContent className="p-6">
                <div className="flex items-center mb-6">
                  <Clock className="w-6 h-6 text-yellow-400 mr-3" />
                  <h3 className="text-2xl font-bold text-white">Business Hours</h3>
                </div>
                <div className="space-y-3">
                  {businessHours.map((schedule, index) => (
                    <div key={index} className="flex justify-between items-center py-2 border-b border-gray-700 last:border-b-0">
                      <span className="text-gray-300">{schedule.day}</span>
                      <span className="text-white font-semibold">{schedule.hours}</span>
                    </div>
                  ))}
                </div>
                
                {/* Special Note */}
                <div className="mt-6 p-4 bg-yellow-400/10 border border-yellow-400/30 rounded-lg">
                  <p className="text-yellow-400 text-sm">
                    <strong>Note:</strong> Last orders are taken 30 minutes before closing time. 
                    Holiday hours may vary.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Parking Information */}
            <Card className="bg-gray-800 border-gray-700">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-white mb-4">Parking & Transportation</h3>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                    Valet parking available ($15)
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                    Public parking garage 2 blocks away
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                    Subway station 5-minute walk
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                    Uber/Lyft pickup zone available
                  </li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LocationMap;
