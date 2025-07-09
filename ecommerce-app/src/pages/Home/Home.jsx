// import { motion } from "framer-motion";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  SparklesIcon,
  StarIcon,
} from "lucide-react";
import Bracelet from "./../../assets/Bracelet.jpeg";
import Bracelet1 from "./../../assets/Bracelet1.jpeg";
import Jhumka from "./../../assets/Jhumka.jpeg";
import Kangan from "./../../assets/Kangan.jpeg";
import Ring from "./../../assets/Ring.jpeg";
import jewllery from "./../../assets/jewllery.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import Hero from "./Hero";

import Footer from "./Footer";
import Reel from "./Reel";
import Category from "./Category";
import NewArrival from "./NewArrival";
import { useEffect, useState } from "react";
import BestSellersSection from "./BestSeller";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const fadeUpVariant = {
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

const centerTextVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
      delay: 0.3,
    },
  },
};

const Home = () => {
  const images = [
    Jhumka,
    Kangan,
    Bracelet,
    Ring,
    Jhumka,
    Kangan,
    Bracelet,
    Ring,
    Jhumka,
    Kangan,
    Bracelet,
    Ring,
    Jhumka,
    Kangan,
    Bracelet,
    Ring,
    jewllery,
  ];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Replace with your actual product images
  const productImages = [Jhumka, Kangan, Bracelet, Ring];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === productImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [productImages.length]);

  const reviews = [
    {
      text: "“Absolutely loved the rose gold set! Looks even better than the photos 😍. Fast delivery too!”",
      img: "https://i.pravatar.cc/100?img=12",
      name: "Priya Sharma",
      city: "Mumbai",
    },
    {
      text: "“Super happy with the earrings I ordered. Got compliments at a wedding 💖.”",
      img: "https://i.pravatar.cc/100?img=25",
      name: "Anjali Desai",
      city: "Ahmedabad",
    },
    {
      text: "“Fashion Craze is my new fav jewelry stop! Quality is 💯. Will order again soon.”",
      img: "https://i.pravatar.cc/100?img=32",
      name: "Ritika Jain",
      city: "Delhi",
    },
    {
      text: "“The necklace was exactly as shown. Perfect for my anniversary dinner!”",
      img: "https://i.pravatar.cc/100?img=45",
      name: "Neha Kapoor",
      city: "Bangalore",
    },
    {
      text: "“Excellent customer service and beautiful packaging. Made a great gift!”",
      img: "https://i.pravatar.cc/100?img=51",
      name: "Sanya Malhotra",
      city: "Hyderabad",
    },
  ];
  return (
    <motion.div
      className="bg-white text-gray-800"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
    >
      {/* Hero Section */}
      <Hero />

      {/* Shop by Category Section */}
      <Category />

      <section className="group relative h-[40vh] lg:h-[80vh] flex items-center overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000 ease-in-out group-hover:scale-105"
          style={{ backgroundImage: `url(${images[16]})` }}
        ></div>

        {/* Optional Dark Overlay */}
        <div className="absolute inset-0 bg-black/30" />

        {/* Content */}
        <div className="relative z-10 px-6 md:px-24 max-w-2xl">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white text-2xl md:text-5xl font-bold mb-4"
          >
            New Arrivals Are Here ✨
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-white text-sm md:text-lg mb-6"
          >
            Discover timeless elegance with our latest handcrafted designs.
          </motion.p>

          <div className="flex gap-4">
            <a
              href="/new-arrivals"
              className="bg-amber-500 hover:bg-amber-600 text-white px-6 py-3 rounded-full font-medium transition-transform transform hover:scale-105"
            >
              Shop Now
            </a>
            <a
              href="/shop"
              className="border border-white text-white px-6 py-3 rounded-full font-medium hover:bg-white hover:text-amber-600 transition"
            >
              Browse All
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      {/* <Feature /> */}

      {/* New Arrivals Section */}
      <NewArrival />

      {/* Banner */}
      <section className="py-6">
        <div className="bg-[#f5f0e9] p-6 md:p-12 font-serif min-h-[750px] lg:min-h-[800px]">
          <motion.div
            className="grid grid-cols-3 grid-rows-3 gap-4 max-w-7xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            {/* Top Row Images */}
            {images.slice(0, 3).map((src, i) => (
              <div
                key={`top-${i}`}
                className={`${i === 1 ? "col-start-2" : ""}`}
              >
                <motion.img
                  src={src}
                  alt={`jewelry-${i}`}
                  className="w-full lg:h-[220px] h-[205px] rounded-lg object-cover shadow-md"
                  variants={fadeUpVariant}
                />
              </div>
            ))}

            {/* Middle Row - Left Image */}
            <div className="row-start-2">
              <motion.img
                src={images[3]}
                alt="jewelry-3"
                className="w-full lg:h-[220px] h-[205px] rounded-lg object-cover shadow-md"
                variants={fadeUpVariant}
              />
            </div>

            {/* Center Text Block banner */}
            <motion.div
              className="col-start-2 row-start-2 flex flex-col justify-center items-center text-center p-4 h-[220px]"
              variants={centerTextVariant}
            >
              <h2 className="text-[32px] md:text-[60px] tracking-wide text-[#a08a6c] font-light leading-none">
                FC
              </h2>
              <h1 className="text-[22px] md:text-[48px] text-gray-800 tracking-wider">
                INSTA <br /> <span className="text-[#c0a06f]">JEWELRY</span>
              </h1>
              <p className="text-sm mt-2 text-gray-500 uppercase tracking-wider">
                Instagram posts, stories & highlight icons
              </p>
            </motion.div>

            {/* Middle Row - Right Image */}
            <div className="col-start-3 row-start-2">
              <motion.img
                src={images[4]}
                alt="jewelry-4"
                className="w-full lg:h-[220px] h-[205px] rounded-lg object-cover shadow-md"
                variants={fadeUpVariant}
              />
            </div>

            {/* Bottom Row Images */}
            {images.slice(5, 8).map((src, i) => (
              <div
                key={`bottom-${i}`}
                className={`row-start-3 ${i === 1 ? "col-start-2" : ""}`}
              >
                <motion.img
                  src={src}
                  alt={`jewelry-${i + 5}`}
                  className="w-full lg:h-[220px] h-[205px] rounded-lg object-cover shadow-md"
                  variants={fadeUpVariant}
                />
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <BestSellersSection />

      {/* Shop the Look – Reels Section */}
      <Reel />

      {/* Review Section */}
      <section className="bg-gradient-to-r from-primary to-primary/20 py-1 lg:py-5  px-4 relative">
        <div className="text-center my-10">
          <p className="text-gray-400 text-sm mb-2">
            Genuine reviews from our lovely shoppers!
          </p>
          <div className="flex items-center justify-center gap-4">
            <span className="hidden sm:block flex-1 h-px bg-gray-200"></span>
            <div className="inline-block">
              <h2 className="text-xl sm:text-2xl font-bold tracking-wider">
                What Our Customers Say
              </h2>
              <div className="w-10 h-0.5 bg-red-400 mx-auto mt-1"></div>
            </div>
            <span className="hidden sm:block flex-1 h-px bg-gray-200"></span>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-2 relative">
          {/* Navigation Buttons (placed outside Swiper but inside the container) */}
          {/* <div
            className="hidden md:flex button-prev z-10 absolute left-[-20px] top-1/2 -translate-y-1/2 cursor-pointer bg-white shadow-md rounded-full p-2 hover:bg-accent transition-all duration-200
  sm:left-[-10px] xs:left-[-5px]"
          >
            <ChevronLeft className="text-accent hover:text-white w-6 h-6 transition-all duration-300 sm:w-5 sm:h-5 xs:w-4 xs:h-4" />
          </div>

          <div
            className="hidden md:flex button-next z-10 absolute right-[-20px] top-1/2 -translate-y-1/2 cursor-pointer bg-white shadow-md rounded-full p-2 hover:bg-accent transition-all duration-200
  sm:right-[-10px] xs:right-[-5px]"
          >
            <ChevronRight className="text-accent hover:text-white w-6 h-6 transition-all duration-300 sm:w-5 sm:h-5 xs:w-4 xs:h-4" />
          </div> */}

          {/* Swiper */}
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            navigation={{
              nextEl: ".button-next",
              prevEl: ".button-prev",
            }}
            pagination={{ clickable: true, el: ".custom-swiper-pagination" }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            loop={true}
          >
            {reviews.map((review, index) => (
              <SwiperSlide key={index}>
                <div
                  className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition hover:translate-y-[-4px] h-full"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <div className="flex items-center gap-2 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <StarIcon
                        key={i}
                        className="w-4 h-4 text-accent fill-current"
                      />
                    ))}
                  </div>
                  <p className="text-subtext text-sm mb-4">{review.text}</p>
                  <div className="flex items-center gap-3">
                    <img
                      src={review.img}
                      alt={review.name}
                      className="w-10 h-10 rounded-full object-cover border-2 border-accent/20"
                    />
                    <div>
                      <h4 className="font-semibold text-heading text-sm">
                        {review.name}
                      </h4>
                      <p className="text-xs text-accent">{review.city}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
            <div className="custom-swiper-pagination mt-6 flex justify-center" />
          </Swiper>
        </div>
      </section>

      {/* footer */}
      <Footer />
    </motion.div>
  );
};

export default Home;
