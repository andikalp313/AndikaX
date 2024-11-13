"use client";
import React from "react";
import { motion } from "framer-motion";
const ContactSection: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center p-8 md:p-16 gap-8 bg-gradient-to-r from-gray-900 to-black">
      <div className="flex flex-col items-center gap-12 w-full max-w-7xl">
        {/* Animated Header */}
        <motion.div
          className="relative flex justify-center items-center px-8 py-3 border-4 border-cyan-400 rounded-full shadow-xl"
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          whileHover={{
            scale: 1.1,
            boxShadow: "0px 4px 15px rgba(0, 255, 255, 0.5)",
          }}
        >
          <span className="text-cyan-400 text-center font-poppins text-3xl md:text-4xl font-bold tracking-wider uppercase animate-pulse">
            Contact Us
          </span>
        </motion.div>

        {/* Contact Section with Gradient Border */}
        <motion.div
          className="relative flex flex-col lg:flex-row items-center gap-8 lg:gap-16 p-8 lg:p-12 rounded-3xl shadow-2xl bg-gradient-to-br from-gray-800 to-gray-900 w-full max-w-full overflow-hidden border-2 border-transparent hover:border-cyan-500 transition-all duration-500"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Left Side with Background Animation */}
          <div
            className="relative flex flex-col justify-center items-center gap-6 w-full lg:w-1/2 p-10 bg-cover bg-center bg-blend-overlay rounded-3xl lg:rounded-l-3xl text-center"
            style={{
              backgroundImage: "url(/images/contactrobotic.jpg)",
              backgroundBlendMode: "overlay",
            }}
          >
            {/* Enhanced Overlay */}
            <div className="absolute inset-0 bg-black opacity-70 rounded-3xl"></div>

            <motion.span
              className="relative text-cyan-400 font-plus-jakarta text-3xl md:text-4xl font-semibold tracking-widest drop-shadow-lg z-10"
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              Your Connection Matters
            </motion.span>

            <motion.p
              className="relative text-gray-300 font-plus-jakarta text-sm md:text-lg font-medium leading-relaxed drop-shadow-lg z-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              CIBIS 8 PARK, 3RD FLOOR, UNIT 309
              <br />
              JL. TB SIMATUPANG NO. 2
              <br />
              JAKARTA SELATAN, INDONESIA 12560
              <br />
              PHONE : +62 21 7945333
              <br />
              EMAIL : info@argalintas.com
            </motion.p>

            <motion.span
              className="relative text-cyan-400 font-plus-jakarta text-xl md:text-2xl font-semibold z-10 drop-shadow-lg"
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.6 }}
            >
              PT. ARGANUSA LINTAS TAMA
            </motion.span>
          </div>

          {/* Right Side - Interactive Form */}
          <div className="flex flex-col gap-8 w-full lg:w-1/2 p-8 md:p-10">
            <div className="relative w-full group">
              <input
                type="text"
                placeholder="Name"
                className="w-full py-5 px-8 border-2 border-gray-600 bg-gray-900 text-cyan-300 placeholder-gray-500 rounded-lg focus:outline-none focus:border-cyan-500 focus:shadow-lg transition-all duration-300 text-xl"
              />
              <span className="absolute top-0 left-4 transform -translate-y-full opacity-0 group-focus-within:opacity-100 group-focus-within:translate-y-0 transition-all duration-300 text-cyan-400 text-sm font-light">
                Your Name
              </span>
            </div>
            <div className="relative w-full group">
              <input
                type="email"
                placeholder="Email"
                className="w-full py-5 px-8 border-2 border-gray-600 bg-gray-900 text-cyan-300 placeholder-gray-500 rounded-lg focus:outline-none focus:border-cyan-500 focus:shadow-lg transition-all duration-300 text-xl"
              />
              <span className="absolute top-0 left-4 transform -translate-y-full opacity-0 group-focus-within:opacity-100 group-focus-within:translate-y-0 transition-all duration-300 text-cyan-400 text-sm font-light">
                Your Email
              </span>
            </div>
            <div className="relative w-full group">
              <textarea
                placeholder="Message"
                className="w-full h-48 py-5 px-8 border-2 border-gray-600 bg-gray-900 text-cyan-300 placeholder-gray-500 rounded-lg focus:outline-none focus:border-cyan-500 focus:shadow-lg transition-all duration-300 text-xl resize-none"
              />
              <span className="absolute top-0 left-4 transform -translate-y-full opacity-0 group-focus-within:opacity-100 group-focus-within:translate-y-0 transition-all duration-300 text-cyan-400 text-sm font-light">
                Your Message
              </span>
            </div>
            {/* Holographic Button */}
            <motion.button
              className="self-start py-5 px-12 bg-gradient-to-r from-cyan-600 to-cyan-400 text-gray-900 font-plus-jakarta text-2xl font-semibold rounded-full shadow-lg"
              whileHover={{
                scale: 1.1,
                boxShadow: "0px 4px 15px rgba(0, 255, 255, 0.5)",
              }}
              transition={{ duration: 0.3 }}
            >
              Send Message
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactSection;
