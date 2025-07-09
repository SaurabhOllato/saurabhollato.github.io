import React from "react";
import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Ring from "./../assets/Ring.jpeg";
import Bracelet from "./../assets/Bracelet.jpeg";
import Bracelet1 from "./../assets/Bracelet1.jpeg";
import Jhumka from "./../assets/Jhumka.jpeg";
import Kangan from "./../assets/Kangan.jpeg";



const collections = [
  {
    name: "Necklaces",
    image: Ring,
    description: "Elegant neckpieces for every occasion",
    items: 42,
    newArrival: true
  },
  {
    name: "Earrings",
    image: Bracelet,
    description: "Statement pieces to frame your face",
    items: 36,
    newArrival: false
  },
  {
    name: "Bracelets",
    image:Bracelet1,
    description: "Delicate adornments for your wrists",
    items: 28,
    newArrival: true
  },
  {
    name: "Rings",
    image: Ring,
    description: "Perfect circles of beauty for your fingers",
    items: 54,
    newArrival: false
  },
  {
    name: "Anklets",
    image: Jhumka,
    description: "Subtle charms for your graceful steps",
    items: 18,
    newArrival: true
  },
  
  {
    name: "Bridal Sets",
    image: Kangan,
    description: "Complete looks for your special day",
    items: 15,
    newArrival: false
  },
  
];

const CollectionPage = () => {
  return (
     <motion.div
        className="bg-white text-gray-800 mt-20"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.4 }}
      >
        

        <div className="py-5
         px-4 text-center mx-auto bg-white  ">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
          Discover Our <span className="text-darkMocha">Collections</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
          Explore our carefully curated jewelry collections designed to complement every style and occasion.
        </p>
      </div>

    <div className="min-h-screen  px-4 py-12 bg-white sm:px-6 lg:px-8">
      {/* Hero Header */}
      

      {/* Collections Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {collections.map((collection, index) => (
          <Link 
            to={`/collections/${collection.name.toLowerCase().replace(/\s+/g, '-')}`}
            key={index}
            className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
          >
            {/* Collection Image */}
            <div className="relative h-80 overflow-hidden">
              <img
                src={collection.image}
                alt={collection.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              
              {/* New Arrival Badge */}
              {collection.newArrival && (
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center shadow-sm">
                  <Sparkles className="h-4 w-4 text-pink-600 mr-1" />
                  <span className="text-xs font-medium text-pink-600">New</span>
                </div>
              )}
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
            </div>

            {/* Collection Info */}
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <div className="flex justify-between items-end">
                <div>
                  <h3 className="text-xl font-bold tracking-wide mb-1">
                    {collection.name}
                  </h3>
                  <p className="text-sm text-white/80 mb-2">
                    {collection.description}
                  </p>
                  <span className="text-xs bg-white/20 px-2 py-1 rounded-full">
                    {collection.items} items
                  </span>
                </div>
                <div className="bg-pink-600 group-hover:bg-pink-700 p-2 rounded-full transition-colors duration-300">
                  <ArrowRight className="h-4 w-4" />
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Call to Action */}
      <div className="max-w-7xl mx-auto mt-16 text-center">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-6">
          Can't Find What You're Looking For?
        </h2>
        <Link
          to="/contact"
          className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-pink-600 hover:bg-pink-700 transition-colors duration-300"
        >
          Contact Our Stylists
          <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
      </div>
    </div>
    </motion.div>
  );
};

export default CollectionPage;