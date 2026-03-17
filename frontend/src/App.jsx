import React from "react";
import Header from "./components/Header";
import Hero from "./pages/Hero";
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
import c from "./assets/c.png";

const App = () => {
  return (
    <>
      <Header />
      <Hero />
      <section className="mt-15 ml-5">
        <div className="p-5 flex items-center">
          <h1 className="text-3xl font-bold text-blue-700">
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
            <span></span>
          </div>
          <div className="bg-white w-28 p-6 rounded-full border-2 border-gray-100 hover:border-amber-400 transition hover:shadow-lg hover:scale-105 flex flex-col items-center">
            <FaCss3Alt className="w-10 h-10 text-blue-500" />
          </div>
          <div className="bg-white w-28 p-6 rounded-full border-2 border-gray-100 hover:border-amber-400 transition hover:shadow-lg hover:scale-105 flex flex-col items-center">
            <FaBootstrap className="w-10 h-10 text-purple-600" />
          </div>
          <div className="bg-white w-28 p-6 rounded-full border-2 border-gray-100 hover:border-amber-400 transition hover:shadow-lg hover:scale-105 flex flex-col items-center">
            <RiTailwindCssFill className="w-10 h-10 text-cyan-300" />
          </div>
          <div className="bg-white w-28 p-6 rounded-full border-2 border-gray-100 hover:border-amber-400 transition hover:shadow-lg hover:scale-105 flex flex-col items-center">
            <IoLogoJavascript className="w-10 h-10 text-yellow-300" />
          </div>
          <div className="bg-white w-28 p-6 rounded-full border-2 border-gray-100 hover:border-amber-400 transition hover:shadow-lg hover:scale-105 flex flex-col items-center">
            <FaReact className="w-10 h-10 text-blue-500" />
          </div>
          <div className="bg-white w-28 p-6 rounded-full border-2 border-gray-100 hover:border-amber-400 transition hover:shadow-lg hover:scale-105 flex flex-col items-center">
            <FaNode className="w-10 h-10 text-green-500" />
          </div>
          <div className="bg-white w-28 p-6 rounded-full border-2 border-gray-100 hover:border-amber-400 transition hover:shadow-lg hover:scale-105 flex flex-col items-center">
            <SiExpress className="w-10 h-10" />
          </div>
          <div className="bg-white w-28 p-6 rounded-full border-2 border-gray-100 hover:border-amber-400 transition hover:shadow-lg hover:scale-105 flex flex-col items-center">
            <DiMongodb className="w-10 h-10 text-green-800" />
          </div>
          <div className="bg-white w-28 p-6 rounded-full border-2 border-gray-100 hover:border-amber-400 transition hover:shadow-lg hover:scale-105 flex flex-col items-center">
            <FaGitAlt className="w-10 h-10 text-orange-600" />
          </div>
          <div className="bg-white w-28 p-6 rounded-full border-2 border-gray-100 hover:border-amber-400 transition hover:shadow-lg hover:scale-105 flex flex-col items-center">
            <IoLogoGithub className="w-10 h-10" />
          </div>
          <div className="bg-white w-28 p-6 rounded-full border-2 border-gray-100 hover:border-amber-400 transition hover:shadow-lg hover:scale-105 flex flex-col items-center">
            <img src={c} alt="c" className="w-10 h-10" />
          </div>
        </div>
      </section>
    </>
  );
};

export default App;
