import React from "react";

const Footer = () => {
  return (
    <footer className="bg-dark-100 py-6 mt-12 text-center">
      <p className="text-gray-400">
        &copy; {new Date().getFullYear()} Created By Sumit Kumar. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
