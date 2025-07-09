import React from "react";
import { MapPin, Phone, Mail, Clock, Send, X } from "lucide-react";
import { motion } from "framer-motion";
import { Facebook, Instagram } from "react-feather";
import { FaPinterest } from "react-icons/fa";

const ContactPage = () => {
  // Sample coordinates for Mumbai (you can replace with your actual location)
  const mapLocation = {
    lat: 19.076,
    lng: 72.8777,
    zoom: 15,
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    alert("Thank you for your message! We'll get back to you soon.");
  };

  // Contact info data
const contactInfo = [
  {
    icon: MapPin,
    title: "Our Store",
    content: [
      "123 Bloom Lane, Fashion Street",
      "Mumbai, Maharashtra – 400001"
    ],
    bgColor: "bg-darkMocha",
    textColor: "text-primary"
  },
  {
    icon: Phone,
    title: "Call Us",
    content: ["+91 98765 43210", "+91 87654 32109"],
    bgColor: "bg-darkMocha",
    textColor: "text-primary"
  },
  {
    icon: Mail,
    title: "Email Us",
    content: ["support@elegantaura.in", "sales@elegantaura.in"],
    bgColor: "bg-pink-100",
    textColor: "text-pink-600"
  },
  {
    icon: Clock,
    title: "Business Hours",
    content: ["Mon-Sat: 10am – 8pm", "Sunday: Closed"],
    bgColor: "bg-pink-100",
    textColor: "text-pink-600"
  }
];

// Social media data
const socialMedia = [
  {
    name: "Facebook",
    url: "#",
    icon: Facebook // Replace with your actual icon component
  },
  {
    name: "Instagram",
    url: "#",
    icon: Instagram // Replace with your actual icon component
  },
  {
    name: "Twitter",
    url: "#",
    icon: X // Replace with your actual icon component
  },
  {
    name: "Pinterest",
    url: "#",
    icon: FaPinterest // Replace with your actual icon component
  }
];

  return (
<motion.div
  className="bg-gradient-to-b from-white to-pink-50 text-gray-800 mt-10"
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  exit={{ opacity: 0, y: -20 }}
  transition={{ duration: 0.4 }}
>
  <div className="min-h-screen px-4 py-12 md:px-20">
    {/* Header with animated gradient text */}
    <div className="text-center mb-12">
      <motion.h1 
        className="text-4xl md:text-5xl font-bold mb-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-darkMocha to-pink-600">
          Get In Touch
        </span>
      </motion.h1>
      <motion.p 
        className="text-lg text-gray-600 max-w-2xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        Have questions or feedback? We'd love to hear from you!
      </motion.p>
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
      {/* Enhanced Contact Form with validation */}
      <motion.div 
        className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
        initial={{ x: -20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">
          Send Us a Message
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Name <span className="text-pink-600">*</span>
            </label>
            <input
              id="name"
              type="text"
              placeholder="Your Name"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-300 focus:border-transparent transition-all"
              minLength={2}
              maxLength={50}
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email <span className="text-pink-600">*</span>
            </label>
            <input
              id="email"
              type="email"
              placeholder="you@example.com"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-300 focus:border-transparent transition-all"
              pattern="[^@\s]+@[^@\s]+\.[^@\s]+"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
              Message <span className="text-pink-600">*</span>
            </label>
            <textarea
              id="message"
              rows={5}
              placeholder="How can we help you?"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-300 focus:border-transparent transition-all"
              minLength={10}
              maxLength={500}
            ></textarea>
          </div>

          <motion.button
            type="submit"
            className="flex items-center justify-center bg-gradient-to-r from-darkMocha to-pink-600 text-white px-6 py-3 rounded-xl font-medium shadow-lg transition-all hover:shadow-pink-300 hover:translate-y-[-2px] w-full"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Send className="mr-2 h-5 w-5" />
            Send Message
          </motion.button>
        </form>
      </motion.div>

      {/* Enhanced Contact Info & Map */}
      <motion.div 
        className="space-y-8"
        initial={{ x: 20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        {/* Contact Info Cards with hover effects */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {contactInfo.map((info, index) => (
            <motion.div 
              key={index}
              className="bg-white p-6 rounded-2xl shadow-lg flex items-start hover:shadow-md transition-all cursor-pointer"
              whileHover={{ y: -5 }}
            >
              <div className={`${info.bgColor} p-3 rounded-full mr-4`}>
                <info.icon className={`h-6 w-6 ${info.textColor}`} />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {info.title}
                </h3>
                {info.content.map((item, i) => (
                  <p key={i} className="text-gray-600">
                    {item}
                  </p>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Map Integration with loading state */}
        <div className="h-80 w-full rounded-2xl overflow-hidden shadow-lg relative">
          <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
            <div className="animate-pulse text-gray-500">
              <MapPin className="h-10 w-10 mx-auto" />
              <p>Loading map...</p>
            </div>
          </div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d8471.013578361595!2d72.82094549490347!3d18.957605176158722!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2s!5e0!3m2!1sen!2sin!4v1746876272125!5m2!1sen!2sin"
            width="100%"
            height="100%"
            className="absolute inset-0"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Our Location"
          />
        </div>
      </motion.div>
    </div>

    {/* Social Media Links with hover animations */}
    <motion.div 
      className="mt-16 text-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.6 }}
    >
      <h3 className="text-xl font-semibold text-gray-800 mb-6">
        Connect With Us
      </h3>
      <div className="flex justify-center space-x-6">
        {socialMedia.map((social) => (
          <motion.a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white p-3 rounded-full shadow-md hover:bg-pink-50 transition-colors"
            aria-label={social.name}
            whileHover={{ y: -3, scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <social.icon className="h-6 w-6 text-pink-600" />
          </motion.a>
        ))}
      </div>
    </motion.div>
  </div>
</motion.div>
  );
};

export default ContactPage;
