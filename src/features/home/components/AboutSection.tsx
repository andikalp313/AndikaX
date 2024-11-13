"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function AboutSection() {
  return (
    <div className="flex flex-col items-center gap-8 px-6 py-12 lg:px-20 w-full lg:py-20 text-white">
      <div className="flex flex-col items-center gap-8 w-full max-w-[1280px]">
        {/* About Us Badge with Hover Animation */}

        <Link className="flex" href={"/about-us"}>
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            whileHover={{
              scale: 1.1,
              boxShadow: "0 4px 15px rgba(0, 255, 255, 0.4)",
            }}
            className=" flex items-center justify-center gap-2 w-44 px-4 py-2 border-2 border-cyan-400 rounded-full shadow-lg transition-transform duration-200"
          >
            <span className="text-cyan-400 font-poppins text-center text-lg font-medium">
              About Us
            </span>
            <svg
              width="36"
              height="36"
              viewBox="0 0 36 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-7 h-7"
            >
              <path
                d="M28.1168 11.0684C28.1493 10.6853 28.0284 10.3049 27.7805 10.0109C27.5327 9.717 27.1783 9.53351 26.7952 9.50084L15.2367 8.51694C15.0452 8.49728 14.8516 8.51596 14.6674 8.57189C14.4832 8.62782 14.3119 8.71988 14.1636 8.8427C14.0154 8.96553 13.893 9.11665 13.8038 9.28726C13.7145 9.45786 13.6602 9.64453 13.6438 9.83637C13.6275 10.0282 13.6495 10.2214 13.7087 10.4046C13.7678 10.5879 13.8628 10.7575 13.9882 10.9036C14.1136 11.0497 14.2668 11.1694 14.4389 11.2557C14.6111 11.3419 14.7987 11.3931 14.9907 11.4061L23.0615 12.0931L8.38063 24.4706C8.08662 24.7185 7.90312 25.073 7.8705 25.4562C7.83789 25.8394 7.95882 26.2198 8.20671 26.5138C8.45459 26.8078 8.80912 26.9913 9.19229 27.0239C9.57547 27.0566 9.95592 26.9356 10.2499 26.6877L24.9308 14.3102L24.2438 22.3809C24.2181 22.7603 24.3425 23.1345 24.59 23.423C24.8376 23.7116 25.1886 23.8913 25.5675 23.9236C25.9463 23.9558 26.3226 23.838 26.6154 23.5954C26.9082 23.3529 27.094 23.0051 27.1329 22.6269L28.1168 11.0684Z"
                fill="white"
              />
            </svg>
          </motion.div>
        </Link>

        {/* About Section Content with Image and Text Animation */}
        <div className="flex flex-col lg:flex-row items-center gap-16 w-full">
          {/* About Image with Fade-in, Scale, and Rotate Animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            whileHover={{ scale: 1.05, rotate: 2 }}
            className="w-full lg:w-[587.5px] h-[300px] md:h-[400px] lg:h-[523px] bg-[url('/images/aboutrobotic.jpg')] bg-cover bg-center rounded-[30px] lg:rounded-[54px] overflow-hidden shadow-xl shadow-cyan-500/20"
          />

          {/* About Text Content with Animated Heading */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-col items-start gap-6 lg:gap-10 w-full lg:w-[587.5px] text-center lg:text-left"
          >
            <motion.span
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              whileHover={{ color: "#00FFFF" }}
              className="text-cyan-300 font-plusJakartaSans text-2xl md:text-4xl lg:text-5xl font-semibold leading-tight lg:leading-normal"
            >
              Revolutionizing Workspaces with Cutting-Edge Robotics.
            </motion.span>

            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
              whileHover={{ scale: 1.05 }}
              className="text-gray-400 font-plusJakartaSans text-base md:text-lg font-medium leading-[1.5]"
            >
              At AndikaX, we bring the future of robotics to you. Our range of
              advanced, AI-powered robots is designed to elevate efficiency,
              productivity, and innovation across industries. From automated
              logistics to precision-focused manufacturing, our robots are built
              to meet the highest standards, delivering powerful solutions for
              today’s most challenging environments. Discover how our robotic
              technology can transform your operations and help you stay ahead
              in an increasingly automated world.
            </motion.span>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
