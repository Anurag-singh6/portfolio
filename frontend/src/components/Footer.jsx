import React from "react";
import { IoLogoGithub } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { FaWhatsappSquare } from "react-icons/fa";

const Footer = () => {
   const year = new Date().getFullYear();
  const openLinkdIn = () => {
    window.open("https://linkedin.com/in/anurag-singh-5b411534b", "_blank");
  };
  const openGithub = () => {
    window.open("https://github.com/Anurag-singh6", "_blank");
  };
  const openWhat = () => {
    window.open("https://wa.me/919174758505", "_blank");
  };
  const openGmail = () => {
    window.open(
      "https://mail.google.com/mail/?view=cm&fs=1&to=anuragsingh76000@gmail.com",
      "_blank"
    );
  };
  return (
    <>
      <div className="mt-15 border-t border-gray-300">
        <div className="p-2">
          <p className="px-3 py-2 flex justify-center items-center gap-3">
            <FaLinkedin
              className="text-3xl text-blue-600 transition ease-in-out hover:text-blue-800"
              onClick={openLinkdIn}
            />
            <IoLogoGithub
              className="text-3xl transition ease-in-out hover:text-gray-700"
              onClick={openGithub}
            />
            <FaWhatsappSquare
              className="text-3xl text-green-500 transition ease-in-out hover:text-green-700"
              onClick={openWhat}
            />
            <HiOutlineMail
              className="text-3xl text-red-500 transition ease-in-out hover:text-red-700"
              onClick={openGmail}
            />
          </p>
        </div>
        <div className="p-2 flex justify-center items-center">
          <p className="text-gray-500 text-sm px-3 py-2">
            © {year} Anurag Singh. All rights reserved.
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
