import {
  FaLightbulb,
  FaPaintBrush,
  FaCode,
  FaReact,
  FaServer,
  FaTools,
  FaNodeJs,
  FaDatabase,
  FaPaypal,
} from "react-icons/fa";

import profileImg1 from "../assets/profile1.png";
import profileImg2 from "../assets/profile2.png";
import projectImg1 from "../assets/project1.avif";
import { SiExpress, SiMongodb } from "react-icons/si";

export const assets = {
  profileImg1,
  profileImg2,
};

export const aboutInfo = [
  {
    icon: FaLightbulb,
    title: "Innovative",
    description:
      "I love creating unique solutions to complex problems with cutting-edge technologies.",
    color: "text-purple",
  },
  {
    icon: FaPaintBrush,
    title: "Design Oriented",
    description:
      "Beautiful design and user experience are at the heart of everything I create.",
    color: "text-pink",
  },
  {
    icon: FaCode,
    title: "Clean Code",
    description:
      "I write maintainable, efficient code following best practices and modern patterns.",
    color: "text-blue",
  },
];

export const skills = [
  {
    title: "Frontend Development",
    icon: FaReact,
    description:
      "Building responsive and interactive user interfaces with modern frameworks.",
    tags: ["React", "Tailwind Css", "Framer Motion", "javascript"],
  },
  {
    title: "Backend Development",
    icon: FaServer,
    description: "Creating robust server-side applications and RESTful APIs.",
    tags: ["Node.js", "Express", "REST APIs"],
  },
  {
    title: "Database Management",
    icon: FaDatabase,
    description:
      "Designing and optimizing databases for performance and scalability.",
    tags: ["MongoDB", "PostgreSQL", "MySQL"],
  },
  {
    title: "Tools & Technologies",
    icon: FaTools,
    description:
      "Essential tools and technologies I use in my development workflow.",
    tags: ["Git & GitHub", "VS Code", "Postman"],
  },
];

export const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "A full-featured online store with shopping cart, user authentication, and payment processing.",
    image: projectImg1,
    tech: ["React", "Node.js", "Express", "MongoDB", "PayPal", "Rest API"],
    icons: [SiMongodb, SiExpress, FaReact, FaNodeJs, FaPaypal],
    demo: "https://mern-ecommerce-56xj.vercel.app/",
    code: "https://github.com/sumit320/mern-ecommerce",
  },
];

export const workData = [
  {
    role: "Full-Stack Developer",
    company: "Personal Project - E-commerce Platform",
    duration: " sept 2025 - Oct 2025",
    description:
      "Built a full-stack e-commerce platform using MongoDB, Express, React, and Node.js. Features include product listing, cart management, checkout system, user authentication, and an admin panel to manage products, orders, and users. Focused on responsive design, clean UI, and smooth user experience.",
    color: "purple",
  },
  {
    role: "Frontend Developer",
    company: "Portfolio Projects",
    duration: "June 2024 - August 2025",
    description:
      "Created responsive web applications using HTML, CSS, JavaScript, and React. Implemented interactive components, animations, and API integrations.",
    color: "pink",
  },
  {
    role: "Online Course Learner",
    company: "Udemy / Youtube",
    duration: "2024 - 2025",
    description:
      "Completed courses on web development and the MERN stack, building hands-on projects to strengthen full-stack skills.",
    color: "blue",
  },
];
