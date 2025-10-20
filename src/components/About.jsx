import React from "react";
import { motion } from "framer-motion";
import profileImg from "../assets/profile2.png";
import { aboutInfo } from "../assets/assets";

const About = () => {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.2 }}
      className="py-20 bg-dark-200"
    >
      <div className="container mx-auto px-6">
        {/* heading */}
        <h2 className="text-3xl font-bold text-center mb-4">
          About <span className="text-purple">Me</span>
        </h2>
        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16">
          Get to know more about my background and passion
        </p>

        {/* image + text */}
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* image */}
          <div className="md:w-1/2 rounded-2xl overflow-hidden">
            <motion.img
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: "easeOut" }}
              viewport={{ once: false, amount: 0.2 }}
              className="w-full h-full object-cover rounded-2xl shadow-lg"
              src={profileImg}
              alt="Profile"
            />
          </div>

          {/* text content */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.2 }}
            className="md:w-1/2"
          >
            <div className="rounded-2xl p-8">
              <h3 className="text-2xl font-semibold mb-6">My Journey</h3>

              <p className="text-gray-300 mb-6">
                I’m a passionate{" "}
                <span className="text-purple">MERN Stack Developer</span>
                with around 4 months of hands-on experience in building modern
                web applications. My journey started with learning the
                fundamentals of HTML, CSS, and JavaScript, and quickly grew into
                mastering the MERN stack to create impactful projects.
              </p>

              <p className="text-gray-300 mb-6">
                As a fresher, I’m constantly learning and experimenting with new
                technologies to improve my skills. I enjoy solving problems,
                exploring innovative ideas, and building applications that
                provide meaningful solutions. My goal is to grow into a skilled
                full-stack developer and contribute to impactful projects in the
                industry.
              </p>

              {/* Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {aboutInfo.map((data, index) => (
                  <div
                    key={index}
                    className="bg-dark-300 rounded-2xl p-6 transition-transform duration-300 hover:-translate-y-2 hover:shadow-lg hover:shadow-purple/20 cursor-pointer"
                  >
                    <div className="text-purple text-4xl mb-4">
                      <data.icon />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{data.title}</h3>
                    <p className="text-gray-400">{data.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
