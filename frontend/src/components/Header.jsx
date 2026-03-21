import React from "react";
import { Link } from "react-scroll";
import { IoLogoGithub } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";

const Header = () => {
  const openGithub = () => {
    window.open("https://github.com/Anurag-singh6", "_blank");
  };
  const openLinkdIn = () => {
    window.open("https://linkedin.com/in/anurag-singh-5b411534b", "_blank");
  };
  return (
    <>
      <nav className="bg-white shadow-sm sticky top-0 z-10 flex justify-between">
        <div className="p-5 ml-5">
          <h3 className="text-2xl font-bold">Anurag</h3>
        </div>
        <div className="p-5 flex items-center gap-5">
          <ul className="flex gap-4">
            <Link
              to="home"
              smooth={true}
              duration={500}
              className="text-gray-400 font-semibold hover:text-blue-600 cursor-pointer"
            >
              Home
            </Link>
            <Link
              to="skill"
              smooth={true}
              duration={500}
              className="text-gray-400 font-semibold hover:text-blue-600 cursor-pointer"
            >
              Skill
            </Link>
            <Link
              to="project"
              smooth={true}
              duration={500}
              className="text-gray-400 font-semibold hover:text-blue-600 cursor-pointer"
            >
              Projects
            </Link>
            <Link
              to="education"
              smooth={true}
              duration={500}
              className="text-gray-400 font-semibold hover:text-blue-600 cursor-pointer"
            >
              Education
            </Link>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="text-gray-400 font-semibold hover:text-blue-600 cursor-pointer"
            >
              Contact
            </Link>
          </ul>
          <div className="border-l-2 border-gray-400 px-1 flex gap-2">
            <IoLogoGithub
              className="ml-2 text-xl hover:text-blue-600 cursor-pointer"
              onClick={openGithub}
            />
            <FaLinkedin
              className="text-xl hover:text-blue-600 cursor-pointer"
              onClick={openLinkdIn}
            />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
