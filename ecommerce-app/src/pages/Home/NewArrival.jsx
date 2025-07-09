import React from "react";
import { Link } from "react-router-dom";
import Bracelet from "./../../assets/Bracelet.jpeg";
import Bracelet1 from "./../../assets/Bracelet1.jpeg";
import Jhumka from "./../../assets/Jhumka.jpeg";
import Kangan from "./../../assets/Kangan.jpeg";
import Ring from "./../../assets/Ring.jpeg";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export default function NewArrival() {
  return (
    <section className=" px-4">
      <motion.section
        className="px-4"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="max-w-6xl mx-auto text-center">
          {/* <h2 className="text-3xl md:text-4xl font-bold mb-10 text-heading">
            <span className="text-accent"></span> New Arrivals{" "}
            <span className="text-accent"></span>
          </h2> */}
          <motion.div className="text-center my-10" variants={fadeInUp}>
            {/* Subtitle */}
            <p className="text-gray-400 text-sm mb-2">
              Best Seller Product This Week!
            </p>

            {/* Title with underline and lines on both sides */}
            <div className="flex items-center justify-center gap-4">
              <span className="hidden sm:block flex-1 h-px bg-gray-200"></span>

              <div className="inline-block">
                <h2 className="text-xl sm:text-2xl font-bold tracking-wider">
                  BEST SELLER
                </h2>
                <div className="w-10 h-0.5 bg-red-400 mx-auto mt-1"></div>
              </div>

              <span className="hidden sm:block flex-1 h-px bg-gray-200"></span>
            </div>
          </motion.div>

          <motion.div
            className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-2 md:gap-8 rounded-sm"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
          >
            {/* Product Cards */}
            {[
              {
                name: "Elegant Pearl Earrings",
                price: "₹499",
                image: Bracelet,
              },
              {
                name: "Elegant Pearl Earrings",
                price: "₹499",
                image: Ring,
              },
              {
                name: "Gold-Plated Necklace",
                price: "₹899",
                image: Jhumka,
              },
              {
                name: "Gold-Plated Necklace",
                price: "₹899",
                image: Bracelet1,
              },
            ].map((product, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white/90 font-serif backdrop-blur-sm border border-primary/20 overflow-hidden transition duration-300 group"
              >
                <div className="relative overflow-hidden h-44 lg:h-60 ">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-darkMocha/10 to-transparent" />
                </div>
                <div className="p-5">
                  <h3 className="text-sm lg:text-lg font-semibold text-heading mb-1">
                    {product.name}
                  </h3>
                  <p className="text-subtext mb-3">{product.price}</p>
                  <button className="w-full bg-gray/90 border text-buttonText py-2.5 rounded-lg  transition-all font-medium shadow-sm hover:shadow-accent/20">
                    Add to Cart
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div className="text-center mt-1" variants={fadeInUp}>
            <a
              href="/shop"
              className="inline-block border text-black px-8 py-3 rounded-full transition-all duration-300 hover:shadow-lg font-medium focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2"
            >
              EXPLORE
            </a>
          </motion.div>
        </div>
      </motion.section>
    </section>
  );
}
