import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaMapMarkerAlt,
  FaPhone,
  FaTwitter,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import axios from "axios";
import toast from "react-hot-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSending, setIsSending] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);
    const loadingToast = toast.loading("Sending message...");

    try {
      const res = await axios.post("https://api.web3forms.com/submit", {
        access_key: "f6057df0-851b-430f-8f7c-206f6e9bd9a9",
        name: formData.name,
        email: formData.email,
        message: formData.message,
        subject: `New message from ${formData.name}`,
        // Optional: redirect: "https://yourwebsite.com/thank-you",
      });

      if (res.data.success) {
        toast.success("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        toast.error("Failed to send message");
      }
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong. Try again later");
    } finally {
      toast.dismiss(loadingToast);
      setIsSending(false);
    }
  };

  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.2 }}
      className="py-20 bg-dark-100"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-4">
          Get In <span className="text-purple">Touch</span>
        </h2>
        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16">
          Have a project in mind or want to collaborate? Let's talk!
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Form */}
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="name"
                className="block text-md font-medium text-gray-300 mb-2"
              >
                Your Name
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your Name"
                className="mt-1 w-full px-4 py-3 bg-dark-200 border border-purple/30 rounded-lg text-gray-300 focus:outline-none focus:ring-2 focus:ring-purple focus:border-transparent"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-md font-medium text-gray-300"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Your Email"
                className="mt-1 w-full px-4 py-3 bg-dark-200 border border-purple/30 rounded-lg text-gray-300 focus:outline-none focus:ring-2 focus:ring-purple focus:border-transparent"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-md font-medium text-gray-300"
              >
                Your Message
              </label>
              <textarea
                id="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Your Message"
                className="mt-1 w-full px-4 py-3 bg-dark-200 border border-purple/30 rounded-lg text-gray-300 focus:outline-none focus:ring-2 focus:ring-purple focus:border-transparent"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={isSending}
              className="w-full px-6 py-3 bg-purple rounded-lg text-white font-medium hover:bg-purple-700 transition disabled:opacity-60 cursor-pointer"
            >
              {isSending ? "Sending..." : "Send Message"}
            </button>
          </form>

          {/* Contact Info */}
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <FaMapMarkerAlt className="text-purple w-6 h-6 mt-1" />
              <div>
                <h3 className="text-lg font-semibold mb-1">Location</h3>
                <p className="text-gray-400">Ranchi, Jharkhand</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <MdEmail className="text-purple w-6 h-6 mt-1" />
              <div>
                <h3 className="text-lg font-semibold mb-1">Email</h3>
                <p className="text-gray-400">sumitkumar235838@gmail.com</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <FaPhone className="text-purple w-6 h-6 mt-1" />
              <div>
                <h3 className="text-lg font-semibold mb-1">Phone</h3>
                <p className="text-gray-400">+91 7909060760</p>
              </div>
            </div>

            <div className="pt-4">
              <h3 className="text-lg font-semibold mb-4">Follow Me</h3>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/sumit320"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-dark-300 flex items-center justify-center text-gray-300 hover:bg-purple hover:text-white transition duration-300"
                >
                  <FaGithub />
                </a>
                <a
                  href="https://www.linkedin.com/in/sumitkr001/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-dark-300 flex items-center justify-center text-gray-300 hover:bg-blue hover:text-white transition duration-300"
                >
                  <FaLinkedin />
                </a>
                <a
                  href="https://x.com/SuMiTKuMaR29429"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-dark-300 flex items-center justify-center text-gray-300 hover:bg-blue hover:text-white transition duration-300"
                >
                  <FaTwitter />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
