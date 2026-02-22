import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Heart } from 'lucide-react';

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>Satash Community Care - Person-Centred Care That Supports Independence</title>
        <meta
          name="description"
          content="Satash Community Care provides person-centered care services that empower independence and ensure dignity for all individuals in our community."
        />
      </Helmet>

      <div className="min-h-screen">
        {/* Hero Section */}
        <section
          className="relative min-h-screen flex items-center justify-center bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1608140307536-059abac22ef8')`,
          }}
        >
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-satash-blue-900/90 via-satash-blue-800/85 to-satash-blue-700/80"></div>

          {/* Content */}
          <div className="relative z-10 container mx-auto px-4 text-center text-white">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Logo */}
              <div className="flex justify-center mb-8">
                <img
                  src="https://horizons-cdn.hostinger.com/d9b46d16-4dc3-4cd0-84b6-ed6cf9e16076/fe5debdf442433f8f7ad6befc8157312.png"
                  alt="Satash Community Care logo"
                  className="h-[80px] md:h-[110px] w-auto object-contain"
                />
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                Supporting Independent Lives
                <br />
                <span className="text-satash-green-400">with Care and Respect</span>
              </h1>

              <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed text-satash-blue-50">
                At Satash Community Care, we believe in person-centered care that respects
                individual choices, promotes independence, and upholds the dignity of every
                person we serve. Our compassionate team is dedicated to empowering individuals
                to live fulfilling lives in their communities.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link to="/projects">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 bg-satash-blue-400 text-white rounded-lg font-semibold text-lg shadow-lg hover:bg-satash-blue-500 transition-colors flex items-center space-x-2"
                  >
                    <span>Explore Our Projects</span>
                    <ArrowRight className="w-5 h-5" aria-hidden="true" />
                  </motion.button>
                </Link>

                <Link to="/reports">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold text-lg hover:bg-white hover:text-satash-blue-600 transition-all"
                  >
                    Inspection reports
                  </motion.button>
                </Link>

                <Link to="/about">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold text-lg hover:bg-white hover:text-satash-blue-600 transition-all"
                  >
                    Learn More
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          </div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="w-6 h-10 border-2 border-white rounded-full flex justify-center"
            >
              <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
            </motion.div>
          </motion.div>
        </section>

        {/* Introductory Section */}
        <section className="py-16 bg-satash-blue-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto text-center"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-satash-blue-900 mb-6">
                Welcome to Satash Community Care
              </h2>
              <p className="text-xl text-gray-700 leading-relaxed font-medium">
                Satash Community Care is a respectable independent service provider for Adults with Learning Difficulties; we provide unique and tailored person-centred services. Everything we do is about valuing and supporting individuals and their families. Our Service User's 'Drive' all we do and are at the 'Centre' of all we do.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Mission Statement Section */}
        <section className="py-20 bg-satash-white-soft">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto text-center"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Our Mission
              </h2>
              <p className="text-xl text-gray-700 leading-relaxed">
                We are committed to providing high-quality, person-centered care that empowers
                individuals to maintain their independence, make their own choices, and live
                with dignity. Through compassionate support and tailored services, we help
                people thrive in their communities while respecting their unique needs,
                preferences, and aspirations.
              </p>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default HomePage;