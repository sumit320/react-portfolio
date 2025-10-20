import React from "react";
import { motion } from "framer-motion";
import { skills } from "../assets/assets";

const Skills = () => {
  return (
    <motion.section
      id="skills"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.2 }}
      className="py-20 bg-dark-100"
    >
      <div className="container mx-auto px-6">
        {/* Heading */}
        <h2 className="text-3xl font-bold text-center mb-4">
          My <span className="text-purple">Skills</span>
        </h2>
        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16">
          Technologies I use to craft modern and scalable web applications
        </p>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-dark-300 rounded-2xl p-6 transition-transform duration-300 
                         hover:-translate-y-2 hover:shadow-lg hover:shadow-purple/20"
            >
              {/* Icon + Title */}
              <div className="flex items-center mb-4">
                <skill.icon className="w-12 h-12 text-purple mr-4 flex-shrink-0" />
                <h3 className="text-xl font-semibold">{skill.title}</h3>
              </div>

              {/* Description */}
              <p className="text-gray-400 mb-4">{skill.description}</p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {skill.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-sm rounded-full bg-dark-200 text-gray-300 
                               border border-purple/30 hover:bg-purple/20 transition"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Skills;
