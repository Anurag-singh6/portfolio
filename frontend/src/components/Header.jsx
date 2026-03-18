import React from "react";
import { IoLogoGithub } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";

const Header = () => {
  return (
    <>
      <nav className="bg-white shadow-sm sticky top-0 flex justify-between">
        <div className="p-5 ml-5">
          <h3 className="text-2xl font-bold">Anurag</h3>
        </div>
        <div className="p-5 flex items-center gap-5">
          <ul className="flex gap-4">
            <li className="text-gray-400 font-semibold hover:text-blue-600 cursor-pointer">
              Home
            </li>
            <li className="text-gray-400 font-semibold hover:text-blue-600 cursor-pointer">
              Skill
            </li>
            <li className="text-gray-400 font-semibold hover:text-blue-600 cursor-pointer">
              Projects
            </li>
            <li className="text-gray-400 font-semibold hover:text-blue-600 cursor-pointer">
              Education
            </li>
            <li className="text-gray-400 font-semibold hover:text-blue-600 cursor-pointer">
              Contact
            </li>
          </ul>
          <div className="border-l-2 border-gray-400 px-1 flex gap-2">
            <IoLogoGithub className="ml-2 text-xl hover:text-blue-600 cursor-pointer" />
            <FaLinkedin className="text-xl hover:text-blue-600 cursor-pointer" />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
