import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom"; // ✅ Import Link
import assets from "../assets/profile1.png";

const Hero = () => {
  return (
    <motion.div
      id="home"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
      viewport={{ once: true }}
      className="min-h-screen flex items-center pt-20 pb-16 bg-gradient-to-r from-[#1a1a1a] via-[#2d2d2d] to-[#1a1a1a]"
    >
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
        {/* left side content */}
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Hi, I'm <span className="text-purple">Sumit Kumar</span>
          </h1>
          <h2 className="text-2xl md:text-4xl font-semibold mb-6 typewriter">
            Full Stack Developer
          </h2>
          <p className="text-lg md:text-xl text-gray-300 mb-8">
            I create stunning web experiences with modern technologies and
            innovative design.
          </p>
          <div className="flex space-x-4">
            <a
              href="SUMITKUMAR.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-purple rounded-lg font-medium hover:bg-purple-700 transition"
            >
              View Resume
            </a>
            <a
              href="#contact"
              className="px-6 py-3 border border-purple rounded-lg font-medium hover:bg-purple/20 transition"
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* right side image */}
        <div className="md:w-1/2 flex justify-center">
          <div className="relative w-64 h-64 md:w-80 md:h-80">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple to-pink">
              <motion.img
                animate={{ y: [0, -20, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  repeatType: "loop",
                  ease: "easeInOut",
                }}
                className="relative w-64 h-64 md:w-80 md:h-80 object-cover rounded-full z-10"
                src={assets}
                alt="Profile1"
              />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Hero;
