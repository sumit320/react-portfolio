import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className="fixed w-full z-50 bg-dark-100/90 backdrop-blur-sm py-4 px-8 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <a
            href="#home"
            className="text-3xl font-bold text-white flex items-center"
          >
            Sumit<span className="text-purple">Kumar</span>
          </a>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-10">
          {["home", "about", "skills", "projects", "experience", "contact"].map(
            (item) => (
              <a
                key={item}
                href={`#${item}`}
                className="relative text-white/80 transition duration-300 hover:text-purple group"
              >
                <span className="capitalize">{item}</span>
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-purple transition-all duration-300 group-hover:w-full"></span>
              </a>
            )
          )}
        </div>

        {/* Mobile button */}
        <div className="md:hidden">
          {showMenu ? (
            <FaXmark onClick={toggleMenu} className="text-2xl cursor-pointer" />
          ) : (
            <FaBars onClick={toggleMenu} className="text-2xl cursor-pointer" />
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {showMenu && (
        <div className="md:hidden mt-4 bg-dark-300 h-screen rounded-lg flex flex-col items-center space-y-6 py-8 shadow-lg">
          {["home", "about", "skills", "projects", "experience", "contact"].map(
            (item) => (
              <a
                key={item}
                onClick={toggleMenu}
                href={`#${item}`}
                className="relative text-white/80 transition duration-300 hover:text-purple group"
              >
                <span className="capitalize">{item}</span>
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-purple transition-all duration-300 group-hover:w-full"></span>
              </a>
            )
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
