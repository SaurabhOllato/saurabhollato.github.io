import React from "react";
import Bracelet from "./../../assets/Bracelet.jpeg";
import Bracelet1 from "./../../assets/Bracelet1.jpeg";
import Jhumka from "./../../assets/Jhumka.jpeg";
import Kangan from "./../../assets/Kangan.jpeg";
import Ring from "./../../assets/Ring.jpeg";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

// const fadeInUp = {
//   hidden: { opacity: 0, y: 40 },
//   visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
// };

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

export default function Category() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  const categories = [
    { title: "Rings", img: Bracelet },
    { title: "Bangles", img: Bracelet1 },
    { title: "Bracelets", img: Kangan },
    { title: "Earrings", img: Jhumka },
    { title: "Necklaces", img: Ring },
    { title: "Bangales", img: Bracelet },
  ];
  return (
    <section className="py-5  px-4 bg-gray-50">
    <div className="max-w-6xl mx-auto">
      <motion.div className="text-center my-10" variants={fadeInUp}>
        <div className="text-center my-10">
          <p className="text-gray-400 text-sm mb-2">
            Discover our exquisite collection.
          </p>
  
          <div className="flex items-center justify-center gap-4">
            <span className="hidden sm:block flex-1 h-px bg-gray-200"></span>
  
            <div className="inline-block">
              <h2 className="text-xl sm:text-2xl font-bold tracking-wider">
                Shop by Category
              </h2>
              <div className="w-10 h-0.5 bg-red-400 mx-auto mt-1"></div>
            </div>
  
            <span className="hidden sm:block flex-1 h-px bg-gray-200"></span>
          </div>
        </div>
      </motion.div>
  
      {/* Categories Grid */}
      <div className="flex overflow-x-auto space-x-4 pb-2 sm:space-x-0 sm:overflow-visible sm:grid sm:grid-cols-3  md:grid-cols-4 lg:grid-cols-6 gap-1 md:gap-6 scrollbar-hide">
        {categories.map((category, index) => {
          const { ref, inView } = useInView({
            triggerOnce: true,
            threshold: 0.2,
          });
  
          return (
            <motion.div
              key={index}
              ref={ref}
              custom={index}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={fadeInUp}
              className="min-w-[45%] sm:min-w-0 bg-white shadow-md hover:shadow-xl h-52 md:h-60 transition duration-300 cursor-pointer group overflow-hidden rounded-lg"
            >
              <div className="relative overflow-hidden h-40 lg:h-48">
                <img
                  src={category.img}
                  alt={category.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              </div>
              <div className="p-2 flex justify-between items-center">
                <h3 className="text-xs md:text-lg font-semibold text-gray-800">
                  {category.title}
                </h3>
                <span className="text-xs md:text-sm font-medium text-amber-600 group-hover:text-amber-800 transition-colors">
                  Explore &rarr;
                </span>
              </div>
            </motion.div>
          );
        })}
      </div>
  
      {/* View All Button */}
      <div className="text-center mt-10 lg:mt-5">
        <div className="sm:hidden flex justify-center mt-2 text-gray-400 text-sm">
          <motion.span
            animate={{ x: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            ⇠ Scroll ⇢
          </motion.span>
        </div>
        <a
          href="/shop"
          className="inline-block text-black px-8 py-3 rounded-full transition-all duration-300 hover:shadow-lg font-medium focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2"
          aria-label="View all jewelry categories"
        >
          View All Categories
        </a>
      </div>
    </div>
  </section>
  
  );
}
