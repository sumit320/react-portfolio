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
import projectImg3 from "../assets/blog.jpg";
import { SiExpress, SiMongodb, SiNextdotjs } from "react-icons/si";

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
      "Building responsive, fast, and dynamic user interfaces with modern frontend frameworks.",
    tags: [
      "React",
      "Next.js",
      "Tailwind CSS",
      "Framer Motion",
      "JavaScript",
      "TypeScript",
    ],
  },
  {
    title: "Backend Development",
    icon: FaServer,
    description:
      "Creating scalable and secure backend systems with RESTful APIs and server-side logic.",
    tags: ["Node.js", "Express", "Next.js API Routes", "REST APIs"],
  },
  {
    title: "Database Management",
    icon: FaDatabase,
    description:
      "Designing efficient databases and ensuring high performance and data integrity.",
    tags: ["MongoDB", "PostgreSQL", "MySQL", "Mongoose"],
  },
  {
    title: "Tools & Technologies",
    icon: FaTools,
    description:
      "Using essential tools and platforms for development, testing, and deployment.",
    tags: ["Git & GitHub", "VS Code", "Postman", "Vercel", "Netlify"],
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
  {
    title: "Blog App (Next.js)",
    description:
      "A dynamic blogging platform built with Next.js 15, MongoDB, and Arcjet for security. Features user authentication, blog creation, search functionality, and responsive design.",
    image: projectImg3,
    tech: ["Next.js", "MongoDB", "Arcjet", "Zod", "Tailwind CSS"],
    icons: [SiNextdotjs, SiMongodb, FaReact],
    demo: "https://blog-app-next-js-gamma.vercel.app/",
    code: "https://github.com/sumit320/blog-app-next-js",
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
