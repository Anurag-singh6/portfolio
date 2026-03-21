import React from "react";
import { IoLogoGithub } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { FaWhatsappSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="mt-15 border-t border-gray-300">
        <div className="p-2">
          <p className="px-3 py-2 flex justify-center items-center gap-3">
            <FaLinkedin className="text-3xl text-blue-600 transition ease-in-out hover:text-blue-800" />
            <IoLogoGithub className="text-3xl transition ease-in-out hover:text-gray-700" />
            <FaWhatsappSquare className="text-3xl text-green-500 transition ease-in-out hover:text-green-700" />
            <HiOutlineMail className="text-3xl text-red-500 transition ease-in-out hover:text-red-700" />
          </p>
        </div>
        <div className="p-2 flex justify-center items-center">
          <p className="text-gray-500 text-sm px-3 py-2">
            © 2026 Anurag Singh. All rights reserved.
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
