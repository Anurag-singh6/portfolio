import React from "react";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { FaNode } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { DiMongodb } from "react-icons/di";
import { FaGitAlt } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";
import { FaJava } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import c from "../assets/c.png";
import { FaPython } from "react-icons/fa";

const Skill = () => {
  return (
    <>
      <section className="mt-15 mb-15">
        <div className="p-5 ml-5 flex items-center">
          <h1 className="text-4xl font-bold text-blue-700">
            Teachnical Skills
          </h1>
          <div className="h-0.5 w-230 ml-2.5 bg-gradient-to-r from-amber-500 via-amber-300 to-gray-100 rounded"></div>
        </div>
        <div className="grid grid-cols-6 gap-5 justify-items-center">
          <div className="bg-white w-28 p-6 rounded-full border-2 border-gray-100 hover:border-amber-400 transition hover:shadow-lg hover:scale-105 flex flex-col items-center">
            <FaJava className="w-10 h-10 text-blue-400" />
            <span className="text-md font-semibold">Java</span>
          </div>
          <div className="bg-white w-28 p-6 rounded-full border-2 border-gray-100 hover:border-amber-400 transition hover:shadow-lg hover:scale-105 flex flex-col items-center">
            <FaHtml5 className="w-10 h-10 text-orange-400" />
            <span className="text-md font-semibold">HTML</span>
          </div>
          <div className="bg-white w-28 p-6 rounded-full border-2 border-gray-100 hover:border-amber-400 transition hover:shadow-lg hover:scale-105 flex flex-col items-center">
            <FaCss3Alt className="w-10 h-10 text-blue-500" />
            <span className="text-md font-semibold">CSS</span>
          </div>
          <div className="bg-white w-28 p-6 rounded-full border-2 border-gray-100 hover:border-amber-400 transition hover:shadow-lg hover:scale-105 flex flex-col items-center">
            <FaBootstrap className="w-10 h-10 text-purple-600" />
            <span className="text-md font-semibold">Bootstrap</span>
          </div>
          <div className="bg-white w-28 p-6 rounded-full border-2 border-gray-100 hover:border-amber-400 transition hover:shadow-lg hover:scale-105 flex flex-col items-center">
            <RiTailwindCssFill className="w-10 h-10 text-cyan-300" />
            <span className="text-md font-semibold">Tailwind</span>
          </div>
          <div className="bg-white w-28 p-6 rounded-full border-2 border-gray-100 hover:border-amber-400 transition hover:shadow-lg hover:scale-105 flex flex-col items-center">
            <IoLogoJavascript className="w-10 h-10 text-yellow-300" />
            <span className="text-md font-semibold">Javascript</span>
          </div>
          <div className="bg-white w-28 p-6 rounded-full border-2 border-gray-100 hover:border-amber-400 transition hover:shadow-lg hover:scale-105 flex flex-col items-center">
            <FaReact className="w-10 h-10 text-blue-500" />
            <span className="text-md font-semibold">React</span>
          </div>
          <div className="bg-white w-28 p-6 rounded-full border-2 border-gray-100 hover:border-amber-400 transition hover:shadow-lg hover:scale-105 flex flex-col items-center">
            <FaNode className="w-10 h-10 text-green-500" />
            <span className="text-md font-semibold">Node.js</span>
          </div>
          <div className="bg-white w-28 p-6 rounded-full border-2 border-gray-100 hover:border-amber-400 transition hover:shadow-lg hover:scale-105 flex flex-col items-center">
            <SiExpress className="w-10 h-10" />
            <span className="text-md font-semibold">Express.js</span>
          </div>
          <div className="bg-white w-28 p-6 rounded-full border-2 border-gray-100 hover:border-amber-400 transition hover:shadow-lg hover:scale-105 flex flex-col items-center">
            <DiMongodb className="w-10 h-10 text-green-700" />
            <span className="text-md font-semibold">MongoDB</span>
          </div>
          <div className="bg-white w-28 p-6 rounded-full border-2 border-gray-100 hover:border-amber-400 transition hover:shadow-lg hover:scale-105 flex flex-col items-center">
            <SiMysql className="w-10 h-10 text-blue-800" />
            <span className="text-md font-semibold">Mysql</span>
          </div>
          <div className="bg-white w-28 p-6 rounded-full border-2 border-gray-100 hover:border-amber-400 transition hover:shadow-lg hover:scale-105 flex flex-col items-center">
            <FaGitAlt className="w-10 h-10 text-orange-600" />
            <span className="text-md font-semibold">Git</span>
          </div>
          <div className="bg-white w-28 p-6 rounded-full border-2 border-gray-100 hover:border-amber-400 transition hover:shadow-lg hover:scale-105 flex flex-col items-center">
            <IoLogoGithub className="w-10 h-10" />
            <span className="text-md font-semibold">Github</span>
          </div>
          <div className="bg-white w-28 p-6 rounded-full border-2 border-gray-100 hover:border-amber-400 transition hover:shadow-lg hover:scale-105 flex flex-col items-center">
            <img src={c} alt="c" className="w-10 h-10" />
            <span className="text-md font-semibold">C++</span>
          </div>
          <div className="bg-white w-28 p-6 rounded-full border-2 border-gray-100 hover:border-amber-400 transition hover:shadow-lg hover:scale-105 flex flex-col items-center">
            <FaPython className="w-10 h-10 text-yellow-300" />
            <span className="text-md font-semibold">Python</span>
          </div>
        </div>
      </section>
    </>
  );
};

export default Skill;
