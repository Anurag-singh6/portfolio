import React from "react";
import linked from "../assets/linked.jpg";

const Hero = () => {
  const scrollToProjects = () => {
    document.getElementById("project").scrollIntoView({ behavior: "smooth" });
  };
  const scrollToContact = () => {
    document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
      <section
        id="home"
        className="bg-gradient-to-l from-gray-100 via-gray-50 to-white min-h-screen flex flex-col md:flex-row items-center justify-between py-8 px-4 md:px-10 lg:px-16"
      >
        <div className="w-full md:w-1/2 mb-8 md:mb-0">
          <div className="px-2 md:px-0">
            <p className="text-gray-600 text-base md:text-lg mb-2">
              Hello, my name is
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
              Anurag Singh
            </h1>
          </div>
          <div className="mt-6 px-2 md:px-0 max-w-xl">
            <p className="text-gray-600 text-base md:text-lg leading-relaxed">
              I am a Web Developer specializing in building
              modern web applications. I create efficient, scalable solutions
              using cutting-edge technologies and best practices.
            </p>
          </div>
          <div className="mt-6 px-2 md:px-0 flex flex-col sm:flex-row sm:items-center sm:gap-4 gap-3">
            <button
              className="text-white font-semibold w-full sm:w-auto bg-blue-500 p-3 rounded-xl shadow-md hover:shadow-lg transition ease-in-out hover:bg-blue-700"
              onClick={scrollToProjects}
            >
              View Projects
            </button>
            <button
              className="text-amber-600 font-semibold w-full sm:w-auto bg-white p-3 border-2 border-amber-400 rounded-xl shadow-md hover:shadow-lg transition ease-in-out hover:bg-amber-50"
              onClick={scrollToContact}
            >
              Get In Touch
            </button>
          </div>
        </div>
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={linked}
            alt="profile"
            className="w-64 h-auto sm:w-72 md:w-80 lg:w-96 border-2 border-gray-300 rounded-xl object-contain shadow-2xl"
            loading="lazy"
          />
        </div>
      </section>
    </>
  );
};

export default Hero;
