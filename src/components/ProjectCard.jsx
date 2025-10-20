import React from "react";
import { motion } from "framer-motion";

const ProjectCard = ({
  title,
  description,
  image,
  tech,
  icons,
  demo,
  code,
}) => {
  return (
    <div className="bg-dark-300 rounded-2xl overflow-hidden p-6 transition-transform duration-300 hover:-translate-y-2 hover:shadow-lg hover:shadow-purple/20 cursor-pointer">
      {/* Project Image */}
      <img
        src={image}
        alt={title}
        className="w-full h-60 object-cover rounded-lg mb-4"
      />

      {/* Project Details */}
      <div className="p-2">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-400 mb-4">{description}</p>

        {/* Tech Icons */}
        <div className="flex flex-wrap gap-2 mb-4">
          {icons.map((Icon, index) => (
            <Icon key={index} className="text-purple w-6 h-6" />
          ))}
        </div>

        {/* Tech Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {tech.map((items, index) => (
            <span
              key={index}
              className="px-3 py-1 text-sm rounded-full bg-dark-200 text-gray-300 border border-purple/30"
            >
              {items}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex gap-4 mt-4">
          <a
            href={demo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 text-center px-6 py-3 bg-purple rounded-lg text-white font-medium hover:bg-purple-700 transition"
          >
            Demo
          </a>
          <a
            href={code}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 text-center px-6 py-3 border border-purple rounded-lg text-purple font-medium hover:bg-purple/20 transition"
          >
            Code
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
