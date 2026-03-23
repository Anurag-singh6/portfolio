import React, { useState } from "react";
import { Link } from "react-scroll";
import { IoLogoGithub } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import { FiMenu, FiX } from "react-icons/fi";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const openGithub = () => {
    window.open("https://github.com/Anurag-singh6", "_blank");
  };
  const openLinkdIn = () => {
    window.open("https://linkedin.com/in/anurag-singh-5b411534b", "_blank");
  };

  const navLinks = [
    { to: "home", label: "Home" },
    { to: "skill", label: "Skill" },
    { to: "project", label: "Projects" },
    { to: "education", label: "Education" },
    { to: "contact", label: "Contact" },
  ];

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <h3 className="text-2xl font-bold">Anurag</h3>
          </div>

          <div className="flex items-center md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              aria-label="Toggle menu"
            >
              {menuOpen ? <FiX size={26} /> : <FiMenu size={26} />}
            </button>
          </div>

          <div className="hidden md:flex md:items-center md:space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                smooth={true}
                duration={500}
                className="text-gray-600 font-semibold hover:text-blue-600 cursor-pointer"
              >
                {link.label}
              </Link>
            ))}
            <div className="border-l-2 border-gray-300 h-6"></div>
            <div className="flex gap-3">
              <IoLogoGithub
                className="text-xl hover:text-blue-600 cursor-pointer"
                onClick={openGithub}
              />
              <FaLinkedin
                className="text-xl hover:text-blue-600 cursor-pointer"
                onClick={openLinkdIn}
              />
            </div>
          </div>
        </div>
      </div>

      <div className={`${menuOpen ? "block" : "hidden"} md:hidden bg-white border-t border-gray-200`}>
        <div className="px-2 pt-2 pb-3 space-y-1">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              smooth={true}
              duration={500}
              onClick={() => setMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-gray-600 font-semibold hover:bg-blue-100 hover:text-blue-700 cursor-pointer"
            >
              {link.label}
            </Link>
          ))}
          <div className="flex items-center gap-4 px-3 py-2">
            <IoLogoGithub
              className="text-xl hover:text-blue-600 cursor-pointer"
              onClick={openGithub}
            />
            <FaLinkedin
              className="text-xl hover:text-blue-600 cursor-pointer"
              onClick={openLinkdIn}
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
