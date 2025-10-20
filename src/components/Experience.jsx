import React from "react";
import { motion } from "framer-motion";
import { workData } from "../assets/assets";

const Experience = () => {
  return (
    <motion.section
      id="experience"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.2 }}
      className="py-20 bg-dark-100"
    >
      <div className="container mx-auto px-6">
        {/* Heading */}
        <h2 className="text-3xl font-bold text-center mb-4">
          Work <span className="text-purple">Experience</span>
        </h2>
        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16">
          A brief overview of my professional journey
        </p>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* vertical line (only visible on md+) */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-[3px] bg-purple/60"></div>

          <div className="space-y-16">
            {workData.map((work, index) => {
              const isLeft = index % 2 === 0;

              return (
                <div
                  key={index}
                  className={`relative flex w-full ${
                    // On mobile: center everything
                    "justify-center md:items-center"
                  } ${
                    // On md+: alternate left/right
                    isLeft ? "md:justify-start" : "md:justify-end"
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-purple border-4 border-dark-100 shadow-lg shadow-purple/50"></div>

                  {/* Card */}
                  <div
                    className={`bg-dark-300 p-6 rounded-2xl shadow-lg hover:shadow-purple/30 transition-all duration-300 hover:scale-[1.02] max-w-sm w-full md:w-auto ${
                      isLeft ? "md:mr-12" : "md:ml-12"
                    }`}
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-semibold">{work.role}</h3>
                      <span className="px-3 py-1 bg-purple/20 text-purple text-sm rounded-full whitespace-nowrap">
                        {work.duration}
                      </span>
                    </div>

                    <p className="text-gray-400 mb-2">{work.company}</p>
                    <p className="text-gray-300">{work.description}</p>

                    {/* Tech Stack */}
                    {work.tech && (
                      <div className="flex flex-wrap gap-2 mt-4">
                        {work.tech.map((t, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 bg-dark-200 text-gray-300 rounded-full text-sm border border-purple/40"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Experience;
