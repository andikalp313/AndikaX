"use client";

import React from "react";
import { motion } from "framer-motion";

export default function AboutPageComp() {
  return (
    <div className="flex flex-col items-center gap-8 px-6 py-12 lg:px-20 w-full  text-white">
      <div className="flex flex-col items-center gap-8 w-full max-w-[1280px]">
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
