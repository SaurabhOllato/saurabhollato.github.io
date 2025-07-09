import { motion } from "framer-motion";

const About = () => {
    return (
       <motion.div
        className="bg-white text-gray-800 mt-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.4 }}
      >
      <section className="bg-white text-gray-800">
        {/* Hero Section */}
        
        <div className="bg-[url('https://img.fantaskycdn.com/b7c617f83a673be417a05dccba269628_1080x.jpeg')] bg-cover bg-center bg-no-repeat py-16 px-4 text-center">
          
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Fashion Craze</h1>
          <p className="max-w-2xl mx-auto text-gray-900 font-sans text-sm md:text-base">
            Where elegance meets affordability. Dive into our world of stunning artificial jewelry made to make you shine.
          </p>
        </div>
        
  
        {/* Brand Story */}
        <div className="max-w-6xl mx-auto py-16 px-4 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-semibold mb-4">Our Story ✨</h2>
            <p className="text-gray-700 mb-4 text-sm md:text-base">
              Fashion Craze was born with a mission to offer high-quality, trend-setting jewelry that fits every budget. We believe every woman deserves to feel beautiful — whether it’s a casual day out or a special occasion.
            </p>
            <p className="text-gray-700 text-sm md:text-base">
              With love and creativity, our team carefully curates pieces that match the vibe of modern fashionistas. We bring sparkle not just to your look, but to your confidence too!
            </p>
          </div>
  
          <div>
            <img
              src="https://i.pinimg.com/736x/11/a5/8a/11a58aab251a0067238cbe9fcca6eae9.jpg"
              alt="Our team"
              className="w-full rounded-xl shadow-md object-cover h-[400px]"
            />
          </div>
        </div>
  
        {/* Mission & Values */}
        <div className="bg-gray-900 py-16 px-4">
          <div className="max-w-4xl mx-auto text-center mb-10">
            <h2 className="text-3xl font-semibold text-white mb-2">Our Mission 💫</h2>
            <p className="text-white text-sm md:text-base">
              To make stylish, high-quality artificial jewelry accessible and fun for everyone.
            </p>
          </div>
  
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto text-center">
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-md">
              <h4 className="text-xl font-semibold mb-2">Affordability</h4>
              <p className="text-sm text-gray-600">
                Luxury should be for everyone — we keep our prices pocket-friendly.
              </p>
            </div>
  
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-md">
              <h4 className="text-xl font-semibold mb-2">Style</h4>
              <p className="text-sm text-gray-600">
                Always on trend, always eye-catching — we bring what’s hot and happening.
              </p>
            </div>
  
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-md">
              <h4 className="text-xl font-semibold mb-2">Trust</h4>
              <p className="text-sm text-gray-600">
                Transparent service and satisfied customers — that’s our promise.
              </p>
            </div>
          </div>
        </div>
      </section>
      </motion.div>
    );
  };
  
  export default About;
  